// ══════════════════════════════════════════════════════════════
// 简体中文字典（权威结构）。en.ts / ja.ts 必须保持完全相同的 key 结构。
// slug 三语共用（路径加语言前缀），不翻译。
// ══════════════════════════════════════════════════════════════

export const zh = {
  // ── 通用 ──
  common: {
    freeConsult: "免费咨询",
    viewMore: "查看更多",
    learnMore: "了解详情",
    contactUs: "联系我们",
    langLabel: "语言",
  },

  // ── 导航 ──
  nav: {
    subsidies: "补助金种类",
    service: "服务流程",
    cases: "成功案例",
    whitepaper: "白皮书",
    about: "关于我们",
    companyIntro: "公司介绍",
    partner: "代理合作",
    faq: "常见问题",
    blog: "知识库",
    subItems: {
      seiryoka: "省力化补助金",
      "ai-it": "AI 导入补助金",
      "career-up": "员工转正助成金",
      training: "员工培训助成金",
      aircon: "空调省能补助",
    },
    who: "谁能申请",
    sole: "个人事业主",
    owners: "在日华人企业主",
    compare: "补助金 vs 助成金",
    schedule: "公募日历",
    tokyo: "东京地区服务",
    ctaButton: "免费诊断",
  },

  // ── 首页 Hero ──
  hero: {
    label: "国家认定 · 四类持牌专家联合团队",
    h1Line1: "在日华人企业的",
    h1Highlight: "补助金·助成金",
    h1Line3: "申请支持",
    sub: "3 分钟判断你能申请哪种制度，全程中文，四类持牌专家分工执行。",
    subStrong: "不获批，不收费。",
    ctaPrimary: "免费确认申请条件",
    ctaSecondary: "查看可申请项目",
    trust: ["全程中文", "四类国家认定专家", "不获批不收费", "3,000+ 企业成功※"],
    stats: [
      { val: "3,000+", label: "企业成功申请", note: "餐饮·零售·制造·IT" },
      { val: "¥8.5億+", label: "累计到账补助金", note: "真实到账金额" },
      { val: "4 种", label: "国家认定专业资质", note: "行政书士·社劳士·税理士·诊断士" },
    ],
    statsNote: "※ 以上为自成立以来累计口径（截至 2026 年 8 月）：企业成功申请=累计咨询委托并获交付决定/支給決定的案件数；累计到账=已确认入金合计；通过率=已完成审查案件的採択比例。个案结果以主管机关审查为准，不构成获批承诺。",
  },

  // ── 首页服务表 ──
  services: {
    heading: "六大主力制度：你能报哪一个",
    sub: "在日华人企业最常申请的制度。看对象、状态与截止，点「确认条件」由我们判断你能不能报。",
    items: [
      { tag: "按规模分档", name: "省力化补助金", amount: "750万〜8,000万", unit: "円", rate: "补助率 1/2（小规模 2/3）", desc: "导入 DX 系统、自动化设备实现降本增效。按员工规模分 5 档，5 人以下 750 万、6〜20 人 1,500 万，最高 8,000 万円。", slug: "seiryoka" },
      { tag: "含个人事业主", name: "数字化·AI 导入补助金", amount: "最高 450万", unit: "円", rate: "补助率 1/2 以内", desc: "AI/IT 软件采购、系统定制、部署培训可申请（旧称 IT 导入补助金）。需经 IT 导入支援事业者共同申请，有公募締切。", slug: "ai-it" },
      { tag: "中小企业", name: "员工转正助成金", amount: "最高 80万", unit: "円/人", rate: "按雇用形态+重点对象判定", desc: "有期→正社员重点对象每人 80 万、其他 40 万；无期→正社员 40/20 万/人（中小企业·分 2 期）。", slug: "career-up" },
      { tag: "按コース分档", name: "员工培训助成金", amount: "1,000万〜1亿", unit: "円", rate: "经费助成 45%〜75%", desc: "人材開発支援助成金。人材育成 1,000 万、人への投資 2,500 万、事業展開リスキリング 1 亿円（时限）。", slug: "training" },
      { tag: "东京都·3/4", name: "空调节能补助", amount: "东京 4,500万", unit: "円", rate: "助成率最高 3/4", desc: "东京都省エネ设备更新补助（クール・ネット东京）。按 CO2 削减量分 3 档，助成率最高 3/4、上限 4,500 万；回次制抽签。", slug: "aircon" },
      { tag: "零加盟费", name: "代理合作", amount: "最高 60%", unit: "分成", rate: "零加盟费用", desc: "将您的存量客户与我们对接，即享最高 60% 透明分成。周期短、回流稳，无须缴纳任何加盟费。", slug: null },
    ],
  },

  // ── 首页正文各段 ──
  home: {
    whoTitle: "先看你属于哪一类",
    whoSub: "不同身份、不同需求，能申请的制度不一样。先对号入座，再看细节。",
    who: [
      { t: "在日华人企业主", d: "法人经营者最常用的 5 类制度、与经营管理签证的关系、6 个常见误区。", a: "查看华人企业主专题", href: "/for/chinese-owners" },
      { t: "个人事业主", d: "没有法人、没有员工也能报：持続化 50 万、AI導入 450 万、省力化 750 万。", a: "查看个人事业主清单", href: "/for/sole-proprietor" },
      { t: "看截止时间", d: "省力化第 8 回、AI導入 10/7、持続化第 20 回、东京空调第 4 回——官方日期每月核验。", a: "查看公募日历", href: "/schedule" },
    ],
    casesTitle: "和你类似的企业，拿到了什么",
    casesSub: "真实案例，已匿名化处理；金额以区间展示，个案结果以主管机关审查为准。",
    casesAll: "查看全部案例",
    detailBtn: "查看详情", checkBtn: "确认条件",
    stepSplit: [
      { you: "说清在留资格·行业·员工数·想做的事", we: "1 个营业日内回复能报的制度" },
      { you: "提供決算書／申告書、見積", we: "制度匹配、金额测算、日程倒推" },
      { you: "确认计划、签约、办 GビズID", we: "行政书士／社劳士制作书类" },
      { you: "配合补充资料", we: "提交、跟进审查、处理补正" },
      { you: "按计划实施、保留凭证", we: "实绩报告、入金确认" },
    ],
    youLabel: "您需要", weLabel: "我们负责",
    teamVert: "専門家連携",
    teamTitle1: "专业团队，",
    teamTitle2: "你不用懂日语",
    teamSub: "四类国家认证资格持有者分工合作，从材料准备到递交审核，全程代办。",
    credentials: [
      { name: "行政书士", role: "申请材料专家", desc: "负责补助金申请书类制作与各类行政许可手续，确保材料规范、提交准时。" },
      { name: "社会保险劳务士", role: "雇用关系专家", desc: "专精员工转正助成金、劳务管理合规，助力企业在规范用工中最大化补贴收益。" },
      { name: "税理士", role: "财务税务专家", desc: "负责财务资料审查与税务申报，确保申请数据准确可信，提升获批可能性。" },
      { name: "中小企业诊断士", role: "经营战略专家", desc: "制定事业计划书与经营战略，以专业的商业逻辑打动审查机关。" },
    ],
    reasonsTitle1: "与其他中介的",
    reasonsTitle2: "本质区别",
    panelRateLabel: "申请通过率",
    panelRateValue: "92",
    panelCredentials: ["行政书士", "社会保险劳务士", "税理士", "中小企业诊断士"],
    panelBadge1: "成功报酬制",
    panelBadge2: "不获批，不收费。",
    reasons: [
      { title: "全程中文，无语言障碍", desc: "从初次咨询到资金到账，所有日语文件由我们的专业人员处理，您只需提供企业信息。" },
      { title: "不获批不收费，零风险", desc: "申请不成功无需支付任何费用，包括资料制作费与咨询费，风险由我们承担。" },
      { title: "四类国家认证专家全程操办", desc: "行政书士、社劳士、税理士、经营诊断士分工协作，覆盖补助金申请全环节。" },
      { title: "3,000+ 真实成功案例", desc: "累计服务超过 3,000 家在日华人企业，覆盖餐饮、IT、制造、美容等多个行业。" },
    ],
    stepsTitle: "五步流程：您做什么，我们做什么",
    stepsSub: "整个过程，您需要做的极少，主要是配合提供资料，其余全程由我们处理。",
    steps: [
      { n: "01", title: "免费诊断", desc: "扫码加企业微信，3 分钟说清企业情况，专家当日回复匹配方案。" },
      { n: "02", title: "方案制定", desc: "从 6 种以上补助金中筛选最优组合，预估可获批金额。" },
      { n: "03", title: "资料整备", desc: "专业团队代为收集、整理、翻译所有申请材料。" },
      { n: "04", title: "专业递交", desc: "持牌专家代为提交，格式合规，审查期间进度定期汇报。" },
      { n: "05", title: "获批到账", desc: "资金到账后按约定支付成功服务费，全程透明。" },
    ],
    postsTitle: "补助金政策深度解析",
    postsViewAll: "查看全部文章",
    ctaTitle1: "不确定能申请哪些？",
    ctaTitle2: "免费诊断，当日回复",
    ctaDesc: "专家团队为您精准匹配最优补助金方案，完全免费，无任何购买义务。",
  },

  // ── CTA 组件默认值 ──
  cta: {
    descDefault: "3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，不获批不收费。",
    primaryDefault: "立即免费诊断",
    secondaryDefault: "查看补助金种类",
    guarantees: [
      ["不获批不收费", "成功报酬制，申请失败分文不取"],
      ["工作日当日回复", "扫码加企业微信直连中文顾问"],
    ],
  },

  // ── 悬浮客服 ──
  wechat: {
    main: "免费咨询",
    sub: "在线顾问 · 即时回复",
    aria: "联系在线客服 免费咨询",
  },
  mobileBar: {
    call: "电话",
    wecom: "企业微信",
    diagnose: "免费诊断",
  },

  // ── 页脚 ──
  footer: {
    tagline1: "让每一位在日华人企业主，",
    tagline2Pre: "都能平等享受",
    tagline2Highlight: "政府补助金",
    tagline2Post: "的红利。",
    badges: ["不获批不收费", "全程中文", "四类持牌专家"],
    wechatLabel: "企业微信扫码咨询",
    wechatTitle: "营业部客服群",
    wechatDesc1: "点击联系客服 · 免费咨询",
    wechatDesc2: "工作日当日回复",
    colSubsidies: "补助金",
    colService: "服务",
    colCompany: "公司",
    colContact: "联络",
    linkJpSite: "日文官网 志成コンサル",
    contactPhone: "电话",
    contactEmail: "邮箱",
    contactEmailVal: "info@shisei-consult.jp",
    contactWechat: "企业微信",
    contactWechatVal: "扫码添加营业部",
    contactAddr: "地址",
    contactAddrVal: "東京都千代田区平河町1-8-2 半蔵門パレス8階",
    copyright: "© 2026 株式会社 志成コンサル",
    credentials: "行政书士 · 社労士 · 税理士 · 中小企業診断士",
  },
} as const;

// 把 as const 的字面量放宽成基础类型，readonly 元组放宽成数组，
// 这样 en/ja 可以填任意值，但结构（key/嵌套形状）仍被强校验。
type DeepWiden<T> = T extends readonly (infer U)[]
  ? DeepWiden<U>[]
  : T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends null
  ? string | null
  : { -readonly [K in keyof T]: DeepWiden<T[K]> };

export type Dictionary = DeepWiden<typeof zh>;
