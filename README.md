# GuoNanSimulator

> 作者：**Fengzi2333**

## 项目结构

```
index.html          # SPA 入口，页面壳
data/
├── pages.js        # 25 个页面的内容 + 导航关系 + 路由逻辑
└── styles.css      # 合并后的全部样式（约 146KB）
build.js            # 构建脚本（需要 Axure 源文件时使用）
```

## 核心架构

### 单页应用（SPA）

所有页面内容通过 `data/pages.js` 加载，使用 URL hash 路由实现无刷新切换：

- `#/sceneappearance` → 加载 sceneappearance 页面
- `#/endingneet` → 加载 endingneet 页面
- 无 hash → 加载首页

### 页面内容

`data/pages.js` 包含三个核心部分：

1. **`PAGES` 对象** — 25 个页面的 HTML 内容（widget 结构和文本）
2. **`NAV` 对象** — 每个页面的按钮文本到目标页面的映射
3. **`loadPage()` 函数** — 渲染页面、绑定点击事件、处理 hash 路由

### 样式处理

所有样式合并到 `data/styles.css`。页面级别的 body CSS 在运行时被剥离以下属性，以确保居中布局不受干扰：

- `position: relative`
- `left: -XXXpx`（Axure RP 的偏移 hack）
- `width: XXXpx`（限制容器宽度）
- `margin-left/right: auto`

居中由 `index.html` 中的 `#app { width: 600px; margin: 0 auto; position: relative; }` 统一处理。

---

## 部署到 GitHub Pages

1. 将仓库推送到 GitHub
2. 在仓库 Settings → Pages 中，Source 选择 `main` 分支，根目录
3. 访问 `https://<用户名>.github.io/GuoNanSimulator/`

所有文件均为纯静态，无需服务器。

---

## 维护指南

### 修改游戏内容

内容数据位于 `data/pages.js` 的 `PAGES` 对象中，每个页面包含：

```js
"页面名": {
  title: "页面标题",
  content: `<!-- HTML widget 结构 -->`,
  bodyCss: "body { /* 该页面的样式 */ }"
}
```

要修改某个页面的文本：

1. 在 `data/pages.js` 中找到对应页面的 `content` 字段
2. 在 HTML 中定位对应 widget 的 `<p><span>文本</span></p>`
3. 修改其中的文本内容

### 修改导航关系

导航关系定义在 `data/pages.js` 的 `NAV` 对象中：

```js
"sceneappearance": [
  { "text": "装不知道", "target": "endinggreenabove" },
  { "text": "做亲子鉴定", "target": "scenefatherinlaw" }
]
```

- 按按钮在页面中的出现顺序排列
- `target` 是目标页面名（对应 `PAGES` 中的 key）
- 没有导航的页面（如通关结局）会自动显示"返回首页"链接

### 修改样式

- **全局样式**（字体、颜色、布局）：编辑 `index.html` 中的 `<style>` 块
- **Widget 样式**（位置、大小）：编辑 `data/styles.css` 中的对应 `#uXX` 选择器
- **字体大小**：`data/styles.css` 中统一为标题/字号 22px，正文 16px

### 从 Axure RP 源文件重新构建

如果需要从原始 Axure RP 导出文件重新生成：

1. 准备好完整的原始项目目录（`*.html`、`files/`、`resources/`、`plugins/`、`data/`）
2. 运行 `node server.js --build` 生成 `data/pages.json`
3. 运行 `node build.js` 重新生成 SPA 文件
4. 提交到 Git
