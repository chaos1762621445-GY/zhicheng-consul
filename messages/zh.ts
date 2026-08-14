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
    ctaButton: "免费诊断",
  },

  // ── 首页 Hero ──
  hero: {
    label: "国家认定 · 四类持牌专家联合团队",
    h1Line1: "在日经营",
    h1Highlight: "政府补助金",
    h1Line3: "全程代办到账",
    sub: "日本政府每年向中小企业发放大量补助金，大多数企业因不了解政策而白白错过。",
    subStrong: "不获批，不收费。",
    ctaPrimary: "免费获取诊断报告",
    ctaSecondary: "查看补助金种类",
    trust: ["不获批不收费", "3,000+ 企业成功", "四类国家认定专家", "全程中文"],
    stats: [
      { val: "3,000+", label: "企业成功申请", note: "餐饮·零售·制造·IT" },
      { val: "¥8.5億+", label: "累计到账补助金", note: "真实到账金额" },
      { val: "4 种", label: "国家认定专业资质", note: "行政书士·社劳士·税理士·诊断士" },
    ],
  },

  // ── 首页服务表 ──
  services: {
    heading: "六大主力补助金 全程代办",
    sub: "以下是在日华人企业最常申请的补助金类别，我们为您全程操办，不获批不收费。",
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
    stepsTitle: "五步完成全程代办",
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
