import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavClient from "../../components/NavClient";
import Footer from "../../components/Footer";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
type SubsidyData = {
  slug: string;
  tag: string;
  name: string;
  nameJa: string;
  amount: string;
  rate: string;
  deadline: string;
  metaTitle: string;
  metaDesc: string;
  heroDesc: string;
  overview: { label: string; value: string; sub?: string }[];
  qualifications: string[];
  targets: { item: string; detail: string }[];
  steps: { step: string; title: string; desc: string }[];
  materials: string[];
  faq: { q: string; a: string }[];
};

const subsidies: SubsidyData[] = [
  {
    slug: "seiryoka",
    tag: "省力化",
    name: "省力化补助金（一般型）",
    nameJa: "中小企業省力化投資補助金",
    amount: "最高 1,500 万円",
    rate: "补助率最高 50%（1/2）／整体上限 1 亿日元",
    deadline: "随时受理（预算用完为止）",
    metaTitle: "省力化补助金详解 | 6-20 人最高 1,500 万円",
    metaDesc: "省力化补助金（一般型）申请指南。6-20 人规模企业最高 1,500 万日元，5 人以下最高 750 万日元，整体上限 1 亿日元，补助率最高 50%。导入 DX 系统、自动化设备实现降本增效，在日华人企业中文一对一代办。",
    heroDesc: "通过导入 DX 系统、自动化设备实现降本增效、减少人工依赖。6-20 人企业最高 1,500 万日元，5 人以下企业最高 750 万日元，整体上限 1 亿日元",
    overview: [
      { label: "6-20 人企业", value: "1,500 万円", sub: "最高可申请补助金额" },
      { label: "5 人以下企业", value: "750 万円", sub: "小规模企业最高补助金额" },
      { label: "补助率 / 整体上限", value: "50% / 1 亿", sub: "企业承担剩余 50%，项目总上限 1 亿" },
    ],
    qualifications: [
      "中小企业或小规模事业者（依照中小企业基本法定义）",
      "正在导入 DX 系统的企业",
      "希望用 IT 或设备替代人工的企业",
      "人手不足、希望提升运营效率的企业",
      "希望降低系统导入成本的企业",
      "须制定并提交具体的生产效率提升计划",
    ],
    targets: [
      { item: "DX 系统导入", detail: "ERP、CRM、OA 系统、业务流程数字化方案等" },
      { item: "生产线自动化设备", detail: "机械臂、自动装配机、自动检测装置等" },
      { item: "清洁·搬运机器人", detail: "商业清洁机器人、AGV 无人搬运车等" },
      { item: "POS 及订单管理系统", detail: "餐饮 / 零售用智能收银、订单自动化系统" },
      { item: "自动仓库·物流系统", detail: "立体仓库、自动分拣输送系统" },
      { item: "AI 图像检测·品质管理装置", detail: "产品外观自动检测、不良品筛选系统" },
    ],
    steps: [
      { step: "01", title: "补助金可行性判断", desc: "根据企业的业务情况、发展需求和现有条件进行全面分析，判断是否符合申请条件与成功概率。" },
      { step: "02", title: "系统与自动化方案建议", desc: "结合企业行业特点和业务流程，量身定制系统与自动化方案，包括软件功能设计、设备选型、流程优化建议。" },
      { step: "03", title: "申请资料制作与申报支援", desc: "协助准备完整的申请资料（申请书、项目计划书、预算明细、企业资质证明等），并指导申报流程。" },
      { step: "04", title: "交付决定·项目实施", desc: "收到交付决定通知后方可正式采购设备或开始系统导入，切勿在此之前下单或支付。" },
      { step: "05", title: "事后报告及流程支持", desc: "项目完成后协助完成实绩报告的编制和提交，确保符合补助资金使用要求，顺利完成资金申领。" },
    ],
    materials: [
      "法人登记事项证明书（法人）或确定申告书（个人）",
      "最近 2 期决算书（贷借对照表·损益计算书）",
      "法人税申告书（含别表·勘定科目内訳）",
      "省力化投资计划书（我方协助制作）",
      "见积书（设备·系统报价单）",
      "劳动者名册及雇用保险关系书类",
      "薪资提升计划书（我方协助制作）",
      "认定支援机关的确认书（如需要）",
    ],
    faq: [
      {
        q: "我公司只有 5 人以下，可以申请多少？",
        a: "5 人以下企业最高可申请 750 万日元。整体补助率最高 50%，企业只需承担剩余 50% 的费用。适合小微企业或希望启动数字化转型的个人事业主。",
      },
      {
        q: "6-20 人企业和 1 亿日元上限是什么关系？",
        a: "6-20 人规模企业单次最高可申请 1,500 万日元，这是针对单项目的上限；整个事业的补助金总体上限为 1 亿日元，适合分阶段推进大规模数字化改造的企业。",
      },
      {
        q: "已经购买了设备，还能申请吗？",
        a: "不可以。必须在收到「交付决定」通知后才能采购设备。如果先购买再申请，费用将不被认定。这是很多企业主容易犯的错误，请务必在申请前咨询我们。",
      },
      {
        q: "餐饮·服务业等非制造业也可以申请吗？",
        a: "可以。省力化补助金面向所有行业，餐饮业可申请自动洗碗机、配送机器人；服务业可申请 AI 接待系统、POS 系统等。只要能解决劳动力不足、提升效率，各行业均在范围内。",
      },
      {
        q: "从申请到收到补助金大约需要多长时间？",
        a: "一般流程为：申请审核（约 2〜3 个月）→ 交付决定 → 设备采购 → 实绩报告（1 个月内）→ 补助金支付（审核后约 2 个月）。全程约 6〜9 个月。",
      },
    ],
  },
  {
    slug: "ai-it",
    tag: "AI导入",
    name: "AI 导入补助金",
    nameJa: "AI導入補助金（デジタル化転換支援）",
    amount: "最高350万円",
    rate: "个人事业主·赤字企业均可，无员工规模限制",
    deadline: "随时受理（预算用完为止）",
    metaTitle: "AI导入补助金详解 | 最高350万円",
    metaDesc: "AI导入补助金申请指南。最高350万日元，个人事业主·赤字企业均可申请，无员工规模限制。AI软件采购、系统定制、部署培训全流程补贴，在日华人企业中文一对一代办。",
    heroDesc: "日本政府数字化转型专项扶持资金，最高补助350万日元。无员工规模限制，个人事业主·赤字企业均可申请",
    overview: [
      { label: "最高补助金额", value: "350万円", sub: "AI 软件·硬件·培训费用全覆盖" },
      { label: "补助率", value: "无员工限制", sub: "个人事业主·赤字企业均可" },
      { label: "申请期限", value: "随时受理", sub: "预算用完即止，建议尽早申请" },
    ],
    qualifications: [
      "个人事业主（含独立自由职业者、个体工商户）",
      "各类规模企业法人（小微·中型·大型均可）",
      "赤字企业只要 AI 导入计划具可行性亦可申请",
      "须有明确的 AI 技术导入计划及预期效益",
      "在日本合法开展经营活动",
      "不受员工数量限制，0 人企业亦可",
    ],
    targets: [
      { item: "AI 软件采购费用", detail: "智能客服、生产流程优化 AI、AI 营销工具等各类 SaaS 订阅或买断费用" },
      { item: "AI 系统定制开发", detail: "面向业务的定制 AI 系统开发（含需求分析、原型、开发、测试）" },
      { item: "AI 硬件设备购置", detail: "AI 服务器、GPU 设备、专用传感器、摄像头等配套硬件" },
      { item: "AI 实施·培训·咨询", detail: "系统部署调试费、员工 AI 技能培训、专业咨询服务费" },
      { item: "AI 应用配套投入", detail: "数据存储服务器、数据清洗整合、业务数据整备等配套支出" },
    ],
    steps: [
      { step: "01", title: "免费资格诊断", desc: "专业顾问判断您的 AI 导入计划是否符合申请资格，个人事业主·赤字企业皆可评估，1 个工作日内回复。" },
      { step: "02", title: "制定 AI 导入计划", desc: "由我方协助梳理业务痛点、选型 AI 工具，输出具可行性的 AI 导入事业计划书。" },
      { step: "03", title: "准备材料并提交申请", desc: "行政书士团队协助完成申请书、预算明细、效益预估等全部材料，线上提交至主管机关。" },
      { step: "04", title: "交付决定后实施", desc: "收到交付决定通知后方可正式采购 AI 软件·硬件或启动开发，切勿提前支付。" },
      { step: "05", title: "实绩报告·补助金到账", desc: "AI 系统导入完成后提交实绩报告，审核通过后补助金汇入账户，约 2〜3 个月到账。" },
    ],
    materials: [
      "法人登记事项证明书（法人）或开业届（个人事业主）",
      "最近 1〜2 期决算书或确定申告书",
      "AI 导入事业计划书（我方协助制作）",
      "AI 软件·硬件·开发服务见积书（报价单）",
      "效益预估表（销售额提升/成本削减/生产效率量化指标）",
      "数据安全·合规对策说明书（如涉及客户数据）",
      "银行账户证明（补助金汇入用）",
    ],
    faq: [
      {
        q: "个人事业主·自由职业者可以申请 AI 导入补助金吗？",
        a: "完全可以。AI 导入补助金对申请主体门槛宽松，只要在日本合法经营，有明确的 AI 导入计划即可申请。独立软件开发者、自由设计师、个体工商户等都是典型的申请人群。",
      },
      {
        q: "公司目前在亏损状态，还能申请吗？",
        a: "可以。与其他补助金不同，AI 导入补助金不以企业盈利为门槛。即使企业当前处于经营赤字状态，只要 AI 导入计划具有可行性和预期效益（例如能显著降本、提升生产效率），均可提交申请。",
      },
      {
        q: "我们公司只有 1〜2 人，规模太小会不会被拒？",
        a: "不会。本项目无员工规模限制，从 0 人个人事业主到大型企业都在范围内。小规模主体反而往往更容易通过审查，因为 AI 导入带来的效率提升在小团队身上更加显著。",
      },
      {
        q: "采购 ChatGPT Plus、Claude 等订阅也可以申请吗？",
        a: "通用订阅一般不作为单独补助对象，但若作为事业计划的一部分（例如用于定制 AI 客服系统、内部自动化工具），相关订阅费可纳入申请。建议把 AI 订阅与自建系统、培训一并打包申请。",
      },
      {
        q: "AI 系统开发失败或效果不达预期会怎样？",
        a: "本项目关注计划的可行性与实际实施，不以效果达成作为补助金返还条件，但需按计划执行并提交实绩报告。我们会协助您制定稳健的计划，并在实施阶段提供辅导，避免材料瑕疵导致事后追缴。",
      },
    ],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    nameJa: "キャリアアップ助成金（正社員化コース）",
    amount: "最高80万円/人",
    rate: "在职半年以上 40 万円/人，非新卒首次转正 80 万円/人",
    deadline: "全年受理，转正后6个月起申请",
    metaTitle: "员工转正助成金详解 | 最高80万円/人",
    metaDesc: "员工转正助成金申请指南。在职半年以上转正 40 万日元/人，非新卒首次转正 80 万日元/人。配合员工培训助成金，补贴金额翻倍，在日华人企业中文一对一代办。",
    heroDesc: "留住优秀员工，降低用人成本。在职半年以上转正每人 40 万日元，非新卒首次转正每人 80 万日元",
    overview: [
      { label: "在职半年以上", value: "40万円/人", sub: "为企业留住有经验员工" },
      { label: "非新卒首次转正", value: "80万円/人", sub: "针对有工作经验的非应届生" },
      { label: "同步培训", value: "补贴翻倍", sub: "联动员工培训助成金" },
    ],
    qualifications: [
      "须为雇用保险适用事业所（已加入雇用保险）",
      "须事先制定并向劳动局提交「キャリアアップ計画書」",
      "被转换员工须以非正规身份雇用满 6 个月以上",
      "转换后须将该员工作为正社员持续雇用 6 个月以上",
      "转换后须将该员工薪资提升 3% 以上",
      "事业所在过去 3 年内未违反劳动相关法令",
    ],
    targets: [
      { item: "在职半年以上员工转正", detail: "每人 40 万日元补助，支持留住有经验的员工，减少招聘和培训成本" },
      { item: "非新卒首次转正社员", detail: "每人 80 万日元补助，针对有工作经验的非应届毕业生，吸引具备实际工作能力的人才" },
      { item: "派遣员工转为直接雇用", detail: "派遣社員 → 直接雇用正社員" },
      { item: "有期雇用转为无期雇用", detail: "契约工、临时工 → 无期雇用正社员" },
      { item: "联动员工培训助成金", detail: "同步申请员工培训助成金时，补贴资金可翻倍" },
    ],
    steps: [
      { step: "01", title: "免费咨询·确认资格", desc: "确认事业所是否已加入雇用保险，并了解哪些员工符合转换条件，通常1工作日内回复。" },
      { step: "02", title: "提前制定キャリアアップ計画书", desc: "在实施转换前，须向管辖劳动局提交计划书（最迟在实施日前1个月），我们协助制作全部文件。" },
      { step: "03", title: "实施正社员转换", desc: "修改劳动合同，明确无期雇用条件，正式完成转换手续并提升薪资3%以上。" },
      { step: "04", title: "等待6个月实绩期", desc: "转换完成后持续雇用6个月，期间保留薪资支付记录、勤怠记录等证明材料。" },
      { step: "05", title: "提交申请·领取助成金", desc: "6个月实绩期满后2个月内，向管辖劳动局提交申请，审核通过后助成金汇入账户（约3〜6个月）。" },
    ],
    materials: [
      "キャリアアップ計画書（需提前提交）",
      "雇用保険被保険者关联书类",
      "劳动合同书（转换前后两份）",
      "就业规则（含正社员·非正规社员规定）",
      "转换后6个月的工资支付明细",
      "出勤簿或タイムカード记录",
      "生产效率向上计划（如申请加算）",
      "法人登记事项证明书（法人の场合）",
    ],
    faq: [
      {
        q: "キャリアアップ計画书必须在转换前提交吗？",
        a: "是的，这是硬性要求。必须在实施正社员转换的前一天（最迟在实施日前）向管辖劳动局提交キャリアアップ計划书。如果忘记提交，将无法申请助成金，请务必提前联系我们办理。",
      },
      {
        q: "一次可以申请多名员工的转换吗？",
        a: "可以，每次申请可包含多名员工。每名符合条件的员工均可单独领取补助（在职半年以上每人 40 万日元，非新卒首次转正每人 80 万日元）。如果同时转换多名员工，助成金总额相当可观。",
      },
      {
        q: "两档补助金（40 万/80 万）分别适用什么情况？",
        a: "在职半年以上的非正规员工转正为正社员，每人补助 40 万日元；针对有工作经验的非应届毕业生（非新卒）首次转为正社员的情况，每人补助额度提高到 80 万日元。具体适用哪档，我们会结合员工背景为您判断。",
      },
      {
        q: "同步办员工培训，补贴真能翻倍吗？",
        a: "可以。员工培训助成金（人材開発支援助成金）与转正助成金可同步申请，满足条件时补贴金额翻倍，每人可获得百万级资金支持。AI 营销、AI 运营自动化、AI 数字效率工具等课程均在补助范围内。",
      },
      {
        q: "将在日外国人员工转为正社员也可以申请吗？",
        a: "可以。只要该员工持有合法的就劳资格在留资格（如技术·人文知识·国际业务、特定技能等），并已加入雇用保险，就符合申请条件。这也是在日华人企业的一大优势。",
      },
      {
        q: "薪资提升3%的要求是基于什么计算的？",
        a: "是与转换时的时薪或月薪对比，要求转换后至少提升3%以上。例如时薪1,000円转正后须达1,030円以上。同时还须遵守最低工资法。我们会协助您设计合理的薪资结构。",
      },
    ],
  },
  {
    slug: "training",
    tag: "人材育成",
    name: "员工培训助成金",
    nameJa: "人材開発支援助成金（AI 実戦スキル向上）",
    amount: "最高 1 亿日元",
    rate: "AI 实战课程，每人百万级支持；与转正同步申请补贴翻倍",
    deadline: "全年受理（训练开始日前提交计划）",
    metaTitle: "员工培训助成金详解 | 最高 1 亿日元",
    metaDesc: "员工培训助成金申请指南。最高 1 亿日元，每人百万级补助，聚焦 AI 营销获客、AI 运营自动化、AI 数字效率工具、AI 行情分析等实战课程。与员工转正助成金同步申请时补贴翻倍。",
    heroDesc: "聚焦 AI 实战能力提升，最高 1 亿日元，每人百万级支持。与转正助成金同步申请时补贴翻倍，让企业竞争力持续放大",
    overview: [
      { label: "最高补助金额", value: "1 亿日元", sub: "全事业所年度上限" },
      { label: "每人补助", value: "百万级", sub: "AI 实战课程人均支持" },
      { label: "同步转正", value: "补贴翻倍", sub: "联动员工转正助成金" },
    ],
    qualifications: [
      "须为雇用保险适用事业所",
      "须在训练开始前向管辖劳动局提交「职业能力开发推进者」设置届",
      "须在训练开始 1 个月前提出「训练实施计划届」",
      "培训须委托外部机构或使用经认定的 off-JT 形式",
      "训练时间须满足规定（通常每课程 10 小时以上）",
      "受训员工须为雇用保险被保险者",
    ],
    targets: [
      { item: "AI 营销获客", detail: "市场分析、客户画像构建、精准定位目标客户群体、个性化营销策略制定，提升获客能力与转化率" },
      { item: "AI 运营自动化", detail: "订单处理、库存管理、客户服务等业务流程自动化，减少人工操作，降低运营成本" },
      { item: "AI 数字效率工具", detail: "AI 文档处理、数据分析、日程管理等工具的使用方法，全面提升员工工作效率" },
      { item: "AI 行情分析与决策", detail: "借助 AI 进行行业行情分析、市场趋势预测，为企业战略决策提供数据支持" },
      { item: "其他专业技能培训", detail: "语言培训（日·英）、业务管理、专业资格取得课程等亦可纳入申请" },
    ],
    steps: [
      { step: "01", title: "免费咨询·培训计划确认", desc: "确认培训内容是否符合助成金要求，选择合适的申请框架，重点评估 AI 实战课程的匹配度。" },
      { step: "02", title: "设置「职业能力开发推进者」", desc: "在事业所设置负责职业培训的内部担当者，向劳动局提交设置届，我方协助准备全部文件。" },
      { step: "03", title: "提交训练实施计划", desc: "在培训开始 1 个月前，向劳动局提交训练实施计划书，载明培训机构、内容、时长、受训人员等。" },
      { step: "04", title: "实施培训并保存记录", desc: "按计划完成培训，保存出席记录、培训机构发行的修了证明、费用领收书等全部证明材料。" },
      { step: "05", title: "提交支给申请·助成金到账", desc: "培训结束后 2 个月内提交支给申请，审核通过后助成金汇入账户（约 3〜5 个月）。" },
    ],
    materials: [
      "训练实施计划书（训练开始前 1 个月提交）",
      "职业能力开发推进者设置届",
      "雇用保险被保险者相关书类",
      "培训机构的见积书·契约书",
      "受训员工的受讲记录·出席簿",
      "培训机构颁发的修了证明书",
      "费用领收书（训练费·设施费等）",
      "工资支付明细（训练期间）",
    ],
    faq: [
      {
        q: "企业主本人的培训可以申请助成金吗？",
        a: "不可以。员工培训助成金仅针对雇用保险被保险者（受雇员工），企业主本人通常不加入雇用保险，因此不在助成对象内。但员工（含外国籍员工）均可申请。",
      },
      {
        q: "AI 实战课程是否真的可以报销百万级？",
        a: "可以。本项目明确聚焦 AI 实战能力提升，AI 营销获客、AI 运营自动化、AI 数字效率工具、AI 行情分析等课程纳入人均百万级支持范围，同时与转正助成金同步申请时补贴翻倍。",
      },
      {
        q: "培训费须先由公司垫付吗？",
        a: "是的，助成金制度是先垫付、后报销。公司须先支付培训费，完成培训后提交申请，审核通过后助成金打回账户。建议选择金额合理、资金周转允许的培训项目。",
      },
      {
        q: "网络在线课程（e-learning）可以申请吗？",
        a: "可以。在线学习课程也在助成对象内，但须满足一定条件：须有完成率管理功能、记录受讲时间、课程须由外部认定机构提供等。我们可协助确认具体课程是否符合要求。",
      },
      {
        q: "和员工转正助成金同步申请有什么好处？",
        a: "同步安排员工转正 + 员工培训时，补贴资金翻倍。例如非新卒首次转正补助 80 万日元 + 同步完成 AI 实战培训，每人可获得百万级合计支持，让企业在留人、育人两端同时获得最大化资金回馈。",
      },
    ],
  },
  {
    slug: "aircon",
    tag: "节能补助",
    name: "空调节能改造补助",
    nameJa: "空調省エネ更新補助（東京 / 大阪 / 全国）",
    amount: "东京最高 1,000 万 / 大阪最高 500 万 / 全国最高 3 亿",
    rate: "东京零负担（政府 2/3 + 我社 1/3）／其他地区政府补贴 1/2",
    deadline: "全年受理（预算用完为止）",
    metaTitle: "空调节能改造补助金详解 | 东京零负担换新 | 最高 3 亿日元",
    metaDesc: "空调节能改造补助金申请指南。东京限定零负担以旧换新（政府 2/3 + 我社 1/3），东京都以外地区政府补贴 1/2。东京最高 1,000 万、大阪最高 500 万、全国最高 3 亿。餐饮·学校·民宿·企业均可申请。",
    heroDesc: "东京限定：政府补 2/3 + 我社补 1/3 = 零负担换新空调；东京都以外地区政府补贴 1/2；全国最高 3 亿日元、东京最高 1,000 万、大阪最高 500 万",
    overview: [
      { label: "东京（限定）", value: "1,000 万円", sub: "政府 2/3 + 我社 1/3 = 零负担换新" },
      { label: "大阪", value: "500 万円", sub: "政府补贴 1/2 金额" },
      { label: "全国", value: "最高 3 亿円", sub: "覆盖餐饮·学校·民宿·企业等各类主体" },
    ],
    qualifications: [
      "在日本境内有业务用途设施（店铺·事务所·工厂·学校·民宿等）",
      "须将现有老旧空调更换为高效节能型设备",
      "新设备须满足节能基准（APF 等）要求",
      "须提出明确的节能计划及预计节能效果",
      "须委托专业施工业者完成安装，并保存工事相关记录",
      "家用空调不在补助对象内",
    ],
    targets: [
      { item: "餐饮业", detail: "厨房、堂食区空调更新，提升顾客用餐体验" },
      { item: "学校·教育机构", detail: "教室、办公室空调更新，为师生打造舒适学习环境" },
      { item: "民宿·酒店", detail: "客房空调更新，提升住客满意度与品牌评价" },
      { item: "办公·零售企业", detail: "办公室、店铺空调更新，改善员工与顾客体验" },
      { item: "工厂·仓库", detail: "车间、仓库高效节能空调与换气系统更新" },
    ],
    steps: [
      { step: "01", title: "免费资格诊断", desc: "确认现有空调年龄、节能基准差距、所在区域及对应补助标准，1 个工作日内给出初步判断。" },
      { step: "02", title: "选定设备·获取报价", desc: "协助选定符合节能基准的空调型号，向指定施工业者获取正式报价单（含拆旧·安装费）。" },
      { step: "03", title: "制作申请材料并提交", desc: "由我方协助完成线上申请，包括节能计划书、见积书、施工图纸等全部材料。" },
      { step: "04", title: "交付决定后实施施工", desc: "收到交付决定通知后方可签订施工合同、实施空调更换工事，切勿提前施工。" },
      { step: "05", title: "实绩报告·补助金到账", desc: "施工完成后提交完工报告及领收书，审核通过后补助金汇入账户（约 1〜3 个月）。" },
    ],
    materials: [
      "法人登记事项证明书（法人）或确定申告书（个人）",
      "最近期决算书或确定申告书",
      "现有空调的型号·设置年份证明（可附照片）",
      "新设备产品规格书（含 APF·节能基准达成率）",
      "施工见积书（设备费·工事费明细）",
      "节能计划书（我方协助制作）",
      "施工业者登录证明（如需要）",
      "施工完了照片·领收书（完工后）",
    ],
    faq: [
      {
        q: "家用空调也可以申请吗？",
        a: "不可以。本项目针对业务用途设施（店铺·事务所·工厂·学校·民宿等），家用空调不在补助对象内。若住宅兼用于事业，部分情况下可能符合要求，建议具体咨询我们。",
      },
      {
        q: "东京真的可以零负担换新吗？",
        a: "是的。东京限定方案为：政府补助 2/3 + 我社补贴剩余 1/3，合计覆盖全部更换费用，企业实现真正零负担。此方案覆盖餐饮、学校、民宿、企业等各类主体。",
      },
      {
        q: "东京以外地区是什么标准？",
        a: "东京都以外地区，政府补贴空调更换费用的 1/2。此外，全国框架下最高可申请 3 亿日元，大阪区域最高 500 万日元，东京区域最高 1,000 万日元。具体可申请金额我们会根据您的企业情况提供评估。",
      },
      {
        q: "租赁店铺的租户（借方）可以申请吗？",
        a: "一般可以，但须获得房东书面同意。建议在申请前确认租赁合同中关于设备工事的条款，并准备房东同意书。若房东希望作为申请主体，也可以由房东申请。",
      },
      {
        q: "施工可以在申请前先完成吗？",
        a: "绝对不可以。与所有补助金一样，必须在收到「交付决定」通知后才能实施施工。提前施工意味着该费用将不被认定，补助金申请将被驳回，请务必注意。",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// generateStaticParams
// ─────────────────────────────────────────────
export function generateStaticParams() {
  return subsidies.map((s) => ({ slug: s.slug }));
}

// ─────────────────────────────────────────────
// generateMetadata
// ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = subsidies.find((s) => s.slug === slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDesc,
  };
}

// ─────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────
export default async function SubsidyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = subsidies.find((s) => s.slug === slug);
  if (!data) notFound();

  const otherSubsidies = subsidies.filter((s) => s.slug !== slug);

  return (
    <main>
      <NavClient />

      {/* ── Hero ── premium light */}
      <section className="page-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/subsidies" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 24, fontWeight: 500 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            补助金种类一览
          </Link>
          <div className="eyebrow">{data.tag}</div>
          <h1 className="display" style={{ fontSize: 'clamp(32px,4.6vw,52px)', marginBottom: 10 }}>
            {data.name}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20, letterSpacing: '.02em' }}>
            {data.nameJa}
          </p>
          <p className="sub" style={{ fontSize: 17, marginBottom: 32, maxWidth: 680 }}>
            {data.heroDesc}
          </p>
          {/* Premium amount badge — gold */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 14, padding: '16px 24px',
            boxShadow: 'var(--shadow-md)',
          }}>
            <span style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>最高补助金额</span>
            <span className="amount" style={{ fontSize: 30, letterSpacing: '-0.5px' }}>{data.amount}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content + Sidebar ── */}
      <div className="section-inner" style={{ padding: "64px 48px" }}>
        <div className="subsidy-detail-layout">

          {/* ── Left column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>

            {/* Overview cards */}
            <section>
              <div className="section-label">概要</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>基本信息一览</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {data.overview.map((item, i) => (
                  <div key={i} style={{
                    background: "var(--bg-outer)", border: "1px solid var(--border)",
                    borderRadius: 10, padding: "24px 20px",
                  }}>
                    <div style={{ fontSize: 12, color: "var(--body)", marginBottom: 8, fontWeight: 400 }}>{item.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "var(--dark)", marginBottom: 6, lineHeight: 1.2 }}>{item.value}</div>
                    {item.sub && <div style={{ fontSize: 12, color: "var(--body)" }}>{item.sub}</div>}
                  </div>
                ))}
              </div>
            </section>

            {/* Qualifications */}
            <section>
              <div className="section-label">申请资格</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>谁可以申请？</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none" }}>
                {data.qualifications.map((q, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "14px 18px",
                    background: "var(--bg-outer)", border: "1px solid var(--border)", borderRadius: 8,
                    fontSize: 15, color: "var(--heading)", lineHeight: 1.6,
                  }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(30,64,175,0.1)", color: "var(--primary)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <IconCheck />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            {/* Targets */}
            <section>
              <div className="section-label">补助对象</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>哪些费用可以申请？</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {data.targets.map((t, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 16,
                    padding: "16px 20px", border: "1px solid var(--border)", borderRadius: 8,
                    alignItems: "center",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "var(--primary)", flexShrink: 0,
                      }} />
                      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)" }}>{t.item}</span>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--body)", lineHeight: 1.6 }}>{t.detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section>
              <div className="section-label">申请流程</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>从咨询到领取，全程5步</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {data.steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, position: "relative" }}>
                    {/* Step number */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "var(--primary)", color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 700, flexShrink: 0,
                      }}>
                        {s.step}
                      </div>
                      {i < data.steps.length - 1 && (
                        <div style={{ width: 2, flex: 1, minHeight: 24, background: "var(--border)", margin: "4px 0" }} />
                      )}
                    </div>
                    {/* Step content */}
                    <div style={{ paddingBottom: i < data.steps.length - 1 ? 28 : 0, paddingTop: 8 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.7 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Materials */}
            <section>
              <div className="section-label">必要材料</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>申请所需主要材料</h2>
              <div style={{
                background: "var(--bg-outer)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "24px 28px",
              }}>
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                  {data.materials.map((m, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--heading)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 3 }}><IconCheck /></span>
                      {m}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 16, fontSize: 13, color: "var(--body)" }}>
                  ※ 以上为主要材料，具体所需文件依据申请类型及企业情况有所差异。我们提供全程材料清单对应服务。
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <div className="section-label">常见问题</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>关于{data.name}的常见问题</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {data.faq.map((item, i) => (
                  <div key={i} style={{
                    border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden",
                  }}>
                    <div style={{
                      padding: "16px 20px",
                      background: "var(--bg-outer)",
                      display: "flex", alignItems: "flex-start", gap: 12,
                    }}>
                      <span style={{
                        background: "var(--primary)", color: "#fff",
                        fontSize: 12, fontWeight: 700, padding: "2px 7px", borderRadius: 3,
                        flexShrink: 0, marginTop: 2,
                      }}>Q</span>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "var(--heading)", lineHeight: 1.6 }}>{item.q}</span>
                    </div>
                    <div style={{
                      padding: "16px 20px",
                      display: "flex", alignItems: "flex-start", gap: 12,
                    }}>
                      <span style={{
                        background: "rgba(30,64,175,0.12)", color: "var(--primary)",
                        fontSize: 12, fontWeight: 700, padding: "2px 7px", borderRadius: 3,
                        flexShrink: 0, marginTop: 2,
                      }}>A</span>
                      <span style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75 }}>{item.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Sidebar ── */}
          <aside className="subsidy-detail-sidebar" style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 88 }}>

            {/* Quick contact */}
            <div style={{
              background: "linear-gradient(135deg, var(--dark) 0%, #2d1b8e 100%)",
              borderRadius: 12, padding: "28px 24px", color: "#fff",
            }}>
              <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>免费咨询</div>
              <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4, marginBottom: 12 }}>
                {data.name}申请资格<br />免费诊断
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 20, lineHeight: 1.7 }}>
                3分钟问卷，专业顾问1个工作日内给出诊断结果，全程中文，无成功不收费。
              </p>
              <Link href="/contact" className="btn-primary" style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 8, width: "100%", padding: "12px 0", borderRadius: 6,
                fontSize: 14, fontWeight: 500,
              }}>
                开始免费诊断
                <IconArrow />
              </Link>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>也可直接联系我们</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>微信：pr2024188</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>电话：03-6265-9756</div>
              </div>
            </div>

            {/* Other subsidies */}
            <div style={{
              border: "1px solid var(--border)", borderRadius: 12, padding: "24px",
            }}>
              <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "var(--primary)", marginBottom: 14 }}>其他补助金</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {otherSubsidies.map((s) => (
                  <Link key={s.slug} href={`/subsidies/${s.slug}`} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 7,
                    fontSize: 13, color: "var(--heading)",
                    transition: "border-color 0.15s, color 0.15s",
                  }}>
                    <div>
                      <span style={{
                        fontSize: 10, background: "rgba(30,64,175,0.08)", color: "var(--primary)",
                        padding: "2px 6px", borderRadius: 3, marginRight: 8,
                      }}>{s.tag}</span>
                      {s.name}
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0, opacity: 0.4 }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
                <Link href="/subsidies" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "10px 14px", fontSize: 13, color: "var(--primary)",
                  marginTop: 4,
                }}>
                  查看全部补助金 →
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section style={{
        position: 'relative',
        padding: '96px 0',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)',
        borderTop: '1px solid var(--line)',
      }}>
        <div className="hero-orb" style={{ width: 480, height: 480, background: 'rgba(30,64,175,0.08)', top: -140, right: -80 }} />
        <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -100, left: -60, filter: 'blur(70px)' }} />
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ margin: '0 auto 20px' }}>免费服务</div>
          <h2 className="h2" style={{ marginBottom: 18 }}>
            {data.name}申请<br />
            <span style={{ color: 'var(--brand)' }}>从咨询到领取全程代办</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, marginBottom: 36, maxWidth: 540, margin: '0 auto 36px' }}>
            行政书士·社会保险劳务士·税理士组成的专业团队，全程中文无障碍。不获批不收费，风险为零。
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-fill">
              立即免费咨询
              <IconArrow />
            </Link>
            <Link href="/subsidies" className="btn btn-ghost">
              查看其他补助金
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
