const fs = require('fs');
const path = require('path');

const pagesData = JSON.parse(fs.readFileSync('data/pages.json', 'utf-8'));
const { pages, bodyStyles, cssBundle, axureScripts } = pagesData;

// ─── Navigation map: extract link targets for each page ─────────

function extractNavigation() {
  const nav = {};

  for (const pageName of Object.keys(pages)) {
    const dataJsPath = path.join('files', pageName, 'data.js');
    if (!fs.existsSync(dataJsPath)) { nav[pageName] = []; continue; }

    const content = fs.readFileSync(dataJsPath, 'utf-8');
    // Extract all .html references, excluding self-reference
    const targets = [...new Set(content.match(/\w+\.html/g) || [])]
      .map(t => t.replace('.html', ''))
      .filter(t => t !== pageName);

    nav[pageName] = targets;
  }

  return nav;
}

const NAV = extractNavigation();

// ─── Extract button text from page content ──────────────────────

function getButtons(baseContent) {
  const buttons = [];
  const regex = /<div id="u\d+" class="ax_default button">[\s\S]*?<p><span>([^<]*)<\/span><\/p>/g;
  let m;
  while ((m = regex.exec(baseContent)) !== null) {
    buttons.push(m[1].trim());
  }
  return buttons;
}

// ─── Generate data/styles.css (bundled CSS) ─────────────────────

fs.writeFileSync('data/styles.css', cssBundle, 'utf-8');
console.log('Generated: data/styles.css');

// ─── Generate data/pages.js (page content + SPA logic) ──────────

// Escape backticks and dollar signs for template literals
function escapeJs(str) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

const pagesJs = `// 国男大冒险 - Page data (auto-generated)
const PAGES = {
${Object.entries(pages).map(([name, page]) => {
  // Get body CSS for this page
  const bodyCss = bodyStyles[name] || '';
  return `  "${name}": {
    title: ${JSON.stringify(page.title)},
    content: \`${escapeJs(page.baseContent)}\`,
    bodyCss: ${JSON.stringify(bodyCss)}
  }`;
}).join(',\n')}
};

// Navigation map: which page links to which targets
const NAV = {
${Object.entries(NAV).map(([name, targets]) => {
  const buttons = getButtons(pages[name].baseContent);
  // Pair buttons with targets
  const pairs = buttons.map((btn, i) => ({
    text: btn,
    target: targets[i] || null
  }));
  return `  "${name}": ${JSON.stringify(pairs, null, 6)}`;
}).join(',\n')}
};

// ─── SPA Router ─────────────────────────────────────────────────

let currentPage = null;

function loadPage(pageName) {
  const page = PAGES[pageName];
  if (!page) { loadPage('index'); return; }

  currentPage = pageName;

  // Apply body CSS
  const styleEl = document.getElementById('page-body-style');
  styleEl.textContent = page.bodyCss;

  // Render content
  document.getElementById('app').innerHTML = page.content;

  // Update title
  document.title = page.title + ' - 国男大冒险';

  // Update URL hash
  if (pageName !== 'index') {
    location.hash = '#/' + pageName;
  } else {
    location.hash = '';
  }

  // Attach click handlers to buttons
  const choices = NAV[pageName] || [];
  const buttons = document.querySelectorAll('.ax_default.button');
  buttons.forEach((btn, i) => {
    if (i < choices.length && choices[i].target) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', () => loadPage(choices[i].target));
    }
  });
}

// Handle hash changes
window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#/', '');
  if (page && page !== currentPage) {
    loadPage(PAGES[page] ? page : 'index');
  }
});

// Boot from hash or index
const bootPage = location.hash.replace('#/', '');
loadPage(PAGES[bootPage] ? bootPage : 'index');
`;

fs.writeFileSync('data/pages.js', pagesJs, 'utf-8');
console.log('Generated: data/pages.js');

// ─── Generate index.html ────────────────────────────────────────

const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>国男大冒险</title>
  <link href="data/styles.css" type="text/css" rel="stylesheet"/>
  <style id="page-body-style"></style>
  <style>
    body { margin:0; background:#fff; }
    #app { min-height: 100vh; }
    .ax_default.button:hover { opacity:0.85; }
    .ax_default.button:active { opacity:0.7; }
  </style>
</head>
<body>
  <div id="app"></div>
  <script src="data/pages.js"></script>
</body>
</html>`;

fs.writeFileSync('index.html', indexHtml, 'utf-8');
console.log('Generated: index.html');

// ─── Cleanup: remove now-unnecessary files ──────────────────────

const removeList = [
  'data/pages.json',
  'data/document.js',
  'server.js',
  'package.json',
  'package-lock.json',
];

for (const f of removeList) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log('Removed:', f);
  }
}

// Remove all root HTML files except index.html
const rootHtmlFiles = fs.readdirSync('.').filter(f =>
  f.endsWith('.html') && f !== 'index.html'
);
for (const f of rootHtmlFiles) {
  fs.unlinkSync(f);
  console.log('Removed:', f);
}

// Remove files/, resources/, plugins/ directories
for (const dir of ['files', 'resources', 'plugins']) {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('Removed:', dir + '/');
}

console.log('\nDone! Project is ready for GitHub Pages.');
