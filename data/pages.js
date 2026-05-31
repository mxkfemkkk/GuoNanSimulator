// 国男大冒险 - 页面数据与路由

const PAGES = {

  // ─── 首页 ───────────────────────────────────────────
  

  "index1": {
    texts: ["你是某国男性,简称国男，20岁,是学生，就读于某高校。今天你没有课， 你决定:"],
    choices: [
      { text: "待在宿舍", target: "endingneet" },
      { text: "出去逛逛", target: "scenedecidebelongings" }
    ]
  },

  "index2":{
    texts: ["你顺利的长大到了16岁","听到楼底下有女孩在说「救命啊，我的妹妹掉进河里了！」","你选择？"],
    choices: [
      { text: "跳河救人", target: "th" },
      { text: "多一事不如少一事", target: "index1" },
    ]
  },

  "th":{
    texts: ["你跳河救人，结果发现根本没有妹妹，只是一条狗，你被淹死了，全剧终","参考：https://m.thepaper.cn/baijiahao_18710839"],
    endLabel: "好心没好报",
    choices: [
      { text: "如果能重来...", target: "index" },
    ]
  },

  // ─── 场景页 ─────────────────────────────────────────
  "scenedecidebelongings": {
    texts: ["出门应该带上哪些东西好呢，你看看手机、平板、kindle、switch...决定："],
    choices: [
      { text: "全都带上", target: "endingnottouch" },
      { text: "只带必要的", target: "wheretogo" }
    ]
  },

  "wheretogo": {
    texts: ["你只带了手机和蓝牙耳机，你现在对去哪里还没有什么想法，你决定："],
    choices: [
      { text: "去图书馆", target: "scenelibrary" },
      { text: "随便逛", target: "scenelining" }
    ]
  },

  "scenelibrary":{
    texts: ["你来到了图书馆，想找个安静的地方看会书，你因为有皮肤病，所以裆部瘙痒难忍，你挠了挠，发现学姐似乎在拍摄你的裆部。你没管，继续看书，过了一会，学姐质问你做了什么，并要求写道歉信，你的做法？"],
    choices: [
      { text: "多一事不如少一事，道歉", target: "endingapology" },
      { text: "大声据理力争，然后报警", target: "endingdispute" }
    ]
  },

  "endingdispute":{
    texts: [
      "你高声据理力争，并称要报警，怼的学姐无话可说，最后你和解了事，解决完学姐以后，你想去别的地方散散心，你的选择：",
      "来源：杭州师范大学诬告https://user.guancha.cn/main/content?id=1016322"
    ],
    choices: [
      { text: "坐地铁去小吃街", target: "metro" },
      { text: "去吃午饭", target: "scenelining" }
    ]
  },

  "metro": {
    texts: ["你坐地铁去小吃街，你坐在地铁上，你想要？"],
    choices: [
      { text: "玩手机", target: "metrophone" },
      { text: "睡觉", target: "metrosleep" }
    ]
  },

  "scenelining": {
    texts: ["你在学校逛了一圈， 看了看时间该吃午饭了，于是你来到食堂，发现这里已经人满患，你选了一个看起来不太长的队伍走了过去："],
    choices: [
      { text: "为了防止有人插队，你紧紧跟着前一个人", target: "endingbornguilt" },
      { text: "和前一个人保持距离", target: "scenewaitinginline" }
    ]
  },

  "scenewaitinginline": {
    texts: ["你和前一个人保持着距离，但是队伍移动得很慢，你打算："],
    choices: [
      { text: "玩手机打发时间", target: "endingunexpecteddisaster" },
      { text: "听歌就好", target: "scenelunch" }
    ]
  },

  "scenelunch": {
    texts: ["你跟着队伍打到了饭, 吃饭时耳机没电了，你草草收了起来，便一边吃饭一边玩手机。这时你注意到一个女生在偷你耳机，你："],
    choices: [
      { text: "制止她", target: "endingthiefcatched" },
      { text: "假装没看到", target: "sceneelevator" }
    ]
  },

  "sceneelevator": {
    texts: ["你继续吃饭，吃完饭回宿舍，刚吃饱的你不太想运动，但是电梯里已经站了几个女生,你决定："],
    choices: [
      { text: "坐电梯", target: "endinghigherrace" },
      { text: "走楼梯", target: "sceneearlyoff" }
    ]
  },

  "sceneearlyoff": {
    texts: ["你爬楼梯回到宿舍,之后无惊无险的毕业，找了一家公司996,贷款买了车房，通过相亲结了婚，婚后一年有了个儿子，转眼儿子便到了上小学的年纪，你肩上的担子更重了。这天你破天荒的准时下班，你看时间还早，决定："],
    choices: [
      { text: "回家休息", target: "sceneparking" },
      { text: "赚点外快", target: "sceneparttimejob" }
    ]
  },

  "sceneparttimejob": {
    texts: ["你在网约车平台注册了账户，平台推来两份可接单，你选择："],
    choices: [
      { text: "第一份", target: "endingawayout" },
      { text: "第二份", target: "endingbloodbath" },
      { text: "都不接", target: "sceneparking" }
    ]
  },

  "sceneparking": {
    texts: ["难得有这空闲时间，你打算回家休息。停车时发现你的停车位被一陌生车辆占用，你决定："],
    choices: [
      { text: "想办法联系车主", target: "scenenapping" },
      { text: "换个车位", target: "endingcheatingwife" }
    ]
  },

  "scenenapping": {
    texts: ["车主在雨刮器上留了联系方式，电话打通后，车主下来开车离开了。回到家，老婆在洗澡，你躺在沙发小憩。迷迷糊糊中老婆叫你去接儿子，你："],
    choices: [
      { text: "去接", target: "sceneappearance" },
      { text: "不去", target: "endingunbearablepain" }
    ]
  },

  "sceneappearance": {
    texts: ["你看了看时间，儿子差不多放学了，于是你将放学的儿子接回家。之后你和老婆响应国家号召生了二胎，并开始准备三胎。可是随着二儿子长大，他和大儿子之间的容貌差异越来越大，你看在眼里，决定："],
    choices: [
      { text: "装不知道", target: "endinggreenabove" },
      { text: "做亲子鉴定", target: "scenefatherinlaw" }
    ]
  },

  "scenefatherinlaw": {
    texts: ["心中的疑问越来越大，你悄悄带着两个孩子做了亲子鉴定，发现两个孩子都不是自己的。你和妻子为此吵了一架， 你决定离婚，同时为了眼不见心不烦，搬去和父母一起住。这天岳父敲门，说是为他女儿的事来赔礼，你决定："],
    choices: [
      { text: "见面聊聊", target: "endingextermination" },
      { text: "不见", target: "endingfutureawaits" }
    ]
  },

  // ─── 结局页 ─────────────────────────────────────────
"index": {
    texts: ["你4岁，被17岁女邻居反复割喉致死，全剧终","参考：https://www.163.com/dy/article_v2/HF71D7KK0552GQIA.html"],
    endLabel: "开局就死",
    choices: [
      { text: "如果能重来", target: "index2" },
    ]
  },

  "endingapology":{
    texts: [
      "你虽然不知道自己干了什么，但还是写了一封道歉信。过几个月发现，你被学姐挂在了社交媒体上。后续诉讼法院虽然判你胜诉，但是学姐发了没打码的判决书，你的真名和身份证号被公开，后续经历了更严峻的造谣，你早已无法在互联网上露面",
      "来源：武汉大学图书馆",
    ],
    endLabel: "赔了夫人又折兵",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "metrophone": {
    texts: ["你玩手机玩得太入迷了，突然听到一个女生询问你是不是在拍她，并要求检查相册，你给她检查了相册，发现没有照片",
      "她却在社交网络上称你偷拍她，称其为“猥琐男”，称手法娴熟不是第一次作案，并表示既然没有偷拍，那他为什么不为自己发声，你社会性死亡了。",
      "后续有网友替你发声，最后女生哭着找你和解，称自己要被开除了。结果几天后一看，只是留校留党，根本不存在开除这一说，你白白被网暴",
      "来源：6·7川大女生污蔑大叔偷拍事件（张薇）",
    ],
    endLabel: "欲加之罪",
    choices: [
      { text: "如果能重来...", target: "index1" }
    ]
  },

  "metrosleep":{
    texts: ["你睡着了，没有给另外一个女生让座，那个女生砸你的头，称男人必须站着，导致你受伤住院。",
      "来源：广州地铁4号线拒让座被女子殴打事件",
      "参考文献：https://baijiahao.baidu.com/s?id=1760569549600510915&wfr=spider&for=pc",
    ],
    endLabel: "招谁惹谁？",
    choices: [
      { text: "如果能重来...", target: "index1" }
    ]
  },

  "endingneet": {
    texts: [
      "你打算在宿舍享受一下颓废的生活，于是叫了一份外卖开始打游戏。几轮厮杀过后，看到你舍友问你为什么在食堂对着女生DIY，你感觉莫名其妙，一番网上冲浪后才知道，社交网络上到处都是你的负面消息，而你今天并没有出过宿舍。事后事件源头的女生表示事件纯属虚构，而你已经社会性死亡。",
      "来源：https://weibo.com/6239620007/L6iAi5T2l",
      "关键词：深圳大学 食堂"
    ],
    endLabel: "人在家中坐",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingawayout": {
    texts: [
      "你选了第一份单，叫车的是一位女性，目的地不算远，你凭着记忆中的路线开了过去，没想到在快到目的地时，乘客突然跳车，随后身亡，你被拘留二百天。",
      "来源：https://weibo.com/1806128454/L55Qeu5zh",
      "关键词：货拉拉司机 周某春"
    ],
    endLabel: "逃出升天",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingbloodbath": {
    texts: [
      "叫车的是一位丰满的女性，手一直插在裤兜里，目的地有点远，中间要走一段高速公路。上了高速以后，乘客从裤兜里掏出一把刀，对你连捅数刀，你重伤住院。",
      "来源：https://weibo.com/2628314830/KxZ8Hcdje",
      "关键词：湖南一女子乘出租车拿刀刺司机"
    ],
    endLabel: "血光之灾",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingbornguilt": {
    texts: [
      "你距离前面的女生太近，被她拍了下来，并且在社交网络上称你对她图谋不轨，你社会性死亡。",
      "来源：https://weibo.com/p/231522cba6129f538ccfce7f46a63025fc45e6"
    ],
    endLabel: "欲加之罪",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingcheatingwife": {
    texts: ["你换了个没人用的车位. 回到家，发现门前有一双不认识的男鞋，开门看到老婆正在和一名陌生男子一起为爱鼓掌。"],
    endLabel: "同道中人",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingextermination": {
    texts: [
      "你打开门，没想到岳父带着刀，他趁你不防砍倒了你，又砍倒了你的父母，然后报警自首，之后你老婆出具谅解书，减轻了岳父的刑责，并带着你的家产改嫁了。",
      "来源：https://weibo.com/1887344341/L2LHwrUZ5",
      "关键词：彭州 岳父 灭门"
    ],
    endLabel: "鸡犬不留",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingfutureawaits": {
    texts: ["你表示此事绝无回旋余地，对岳父闭门不见，他离去时你从窗户看到他带着刀，暗自庆幸。"],
    endLabel: "未来可期",
    footer: "恭喜你已通关当前版本，本游戏中所有结局，除“同道中人”不确定是否有真实案例外，均根据真实事件改编，如有雷同，刻意为之。"
  },

  "endinggreenabove": {
    texts: ["你对两个儿子的容貌差异视若无睹，视如己出，老婆对你很满意，不久，你们又生了第三胎。"],
    endLabel: "难得糊涂",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endinghigherrace": {
    texts: [
      "电梯作为公共资源，当然可以用，你抱着这个想法走进电梯，却被电梯里的女生认为是抢占她们的资源，并对你网曝，后来学校禁止低楼层的男生使用电梯。",
      "关键词：北京师范大学 电梯"
    ],
    endLabel: "高人一等",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingnottouch": {
    texts: [
      "由于你的包太大，不小心碰到了一位学姐的屁股，她在社交网络上称你是色狼，你社会性死亡。",
      "来源：https://weibo.com/2615417307/JuLwat2bs",
      "关键词：清华老师回应学姐错告学弟"
    ],
    endLabel: "无过则勉",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingthiefcatched": {
    texts: [
      "你将小偷捉了现行，对方却表示“抛开事实不谈，你坐了我常坐的位子难道就没错吗”，然后砸了你的耳机扬长而去。",
      "关键词：华东理工大学 耳机"
    ],
    endLabel: "捉贼拿脏",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingunbearablepain": {
    texts: [
      "你难得有时间休息 ,迷迷糊糊地拒绝了，平时儿子不用接能回来，今天应该也可以。但是今天你儿子很晚都没回来，后来得知，你儿子被一名女子抱到楼上摔死。",
      "来源：https://weibo.com/5044281310/L44o2EDIJ",
      "关键词：男童被陌生女抱走后在附近小区坠亡"
    ],
    endLabel: "切肤之痛",
    choices: [{ text: "如果能重来...", target: "index1" }]
  },

  "endingunexpecteddisaster": {
    texts: [
      "你忘了跟上前面的队伍，突然听到一个女生喊“你是不是插我队？！”接着一个玻璃瓶就碎在了你的后脑勺，虽然你最后制服了对方，但你也受伤住院。",
      "关键词：广东医科大学 玻璃瓶"
    ],
    endLabel: "无妄之灾",
    choices: [{ text: "如果能重来...", target: "index1" }]
  }
};

// ─── SPA 路由 ─────────────────────────────────────────

let currentPage = null;

function loadPage(pageName) {
  const page = PAGES[pageName];
  if (!page) { loadPage("index"); return; }

  currentPage = pageName;

  // 构建 HTML
  let html = '<h1 class="title">国男大冒险</h1>';

  if (page.texts) {
    html += page.texts.map(function(t) {
      return '<p class="narration">' + t + '</p>';
    }).join("");
  }

  if (page.endLabel) {
    html += '<p class="ending"><strong>结局:</strong> ' + page.endLabel + '</p>';
  }

  if (page.choices && page.choices.length) {
    html += '<div class="choices">';
    html += page.choices.map(function(c) {
      return '<button class="btn" data-target="' + c.target + '">' + c.text + '</button>';
    }).join("");
    html += '</div>';
  }

  if (page.footer) {
    html += '<p class="footer">' + page.footer + '</p>';
  }

  // 没有选项的页面（如 endingfutureawaits）显示返回链接
  if (!page.choices || !page.choices.length) {
    html += '<p class="back"><a href="#" id="back-link">← 返回首页</a></p>';
  }

  document.getElementById("app").innerHTML = html;

  // 标题
  document.title = pageName === "index" ? "国男大冒险" : "国男大冒险 - " + pageName;

  // URL hash
  location.hash = pageName === "index" ? "" : "#/" + pageName;

  // 绑定按钮事件
  var buttons = document.querySelectorAll(".btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      loadPage(this.dataset.target);
    });
  }

  // 绑定返回链接
  var backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.addEventListener("click", function(e) {
      e.preventDefault();
      loadPage("index");
    });
  }
}

// hash 路由
window.addEventListener("hashchange", function() {
  var page = location.hash.replace("#/", "");
  if (page && page !== currentPage) {
    loadPage(PAGES[page] ? page : "index");
  }
});

// 启动
var boot = location.hash.replace("#/", "");
loadPage(PAGES[boot] ? boot : "index");
