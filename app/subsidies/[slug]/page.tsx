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
  officialName?: string;
  officialUrl?: string;
  verifiedDate?: string;
  note?: string;
};

const subsidies: SubsidyData[] = [
  {
    slug: "seiryoka",
    tag: "省力化",
    name: "省力化补助金（一般型）",
    nameJa: "中小企業省力化投資補助事業（一般型）",
    amount: "按员工规模分档：750 万〜8,000 万円（101 人以上·大幅涨薪特例可达 1 亿円）",
    rate: "补助率 1/2（小规模·再生事业者 2/3）；超过 1,500 万円部分为 1/3",
    deadline: "公募回制（有申请截止日，非随时受理）",
    metaTitle: "省力化补助金（一般型）详解 | 按员工规模 750 万〜8,000 万円",
    metaDesc: "中小企业省力化投资补助事业（一般型）申请指南。按员工规模分 5 档：5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万（大幅涨薪特例最高 1 亿円）。补助率 1/2（小规模 2/3）。公募回制，导入 DX 系统·自动化设备降本增效，在日华人企业中文一对一代办。",
    heroDesc: "通过导入 DX 系统、自动化设备实现降本增效、减少人工依赖。补助上限按员工规模分档：5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万円（满足大幅涨薪特例，101 人以上最高可达 1 亿円）",
    overview: [
      { label: "补助上限（按员工规模）", value: "750 万〜8,000 万円", sub: "5 人以下 750 万 / 6〜20 人 1,500 万 / 21〜50 人 3,000 万 / 51〜100 人 5,000 万 / 101 人以上 8,000 万" },
      { label: "补助率", value: "1/2", sub: "小规模·再生事业者 2/3；超 1,500 万円部分 1/3" },
      { label: "受理方式", value: "公募回制", sub: "有明确申请截止日，非随时受理" },
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
        a: "5 人以下企业补助上限为 750 万日元（满足大幅涨薪特例时可达 1,000 万日元）。补助率为 1/2（小规模事业者可达 2/3），企业承担剩余部分。适合小微企业或希望启动数字化转型的个人事业主。",
      },
      {
        q: "补助上限是怎么按员工规模分档的？",
        a: "官方按常勤员工数分 5 档：5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万日元。只有「101 人以上且满足大幅涨薪特例」这一组合的上限才达到 1 亿日元，并非所有企业都能申请 1 亿。具体适用哪档，我们会按贵司实际人数判断。",
      },
      {
        q: "补助率是多少？全额都能补吗？",
        a: "补助率为 1/2（中小企业），小规模事业者·再生事业者为 2/3。需注意：超过 1,500 万日元的部分补助率降为 1/3。企业需自行承担剩余费用，不存在「全额补助」。",
      },
      {
        q: "这个补助金是随时都能申请吗？",
        a: "不是。一般型采用「公募回制」，每一轮有明确的申请开始日和截止日，逾期需等下一轮。这与竞争审查制补助金一样属于「审查採択制」，提交后由事务局审查，并不保证一定通过。我们会帮您把握公募时间窗并提高採択概率。",
      },
      {
        q: "已经购买了设备，还能申请吗？",
        a: "不可以。必须在收到「交付决定」通知后才能采购设备。如果先购买再申请，费用将不被认定。这是很多企业主容易犯的错误，请务必在申请前咨询我们。",
      },
      {
        q: "餐饮·服务业等非制造业也可以申请吗？",
        a: "可以。省力化补助金面向所有行业，餐饮业可申请自动洗碗机、配送机器人；服务业可申请 AI 接待系统、POS 系统等。只要能解决劳动力不足、提升效率，各行业均在范围内。",
      },
    ],
    officialName: "中小企業省力化投資補助事業（一般型）事務局",
    officialUrl: "https://shoryokuka.smrj.go.jp/ippan",
    verifiedDate: "2026-08-01",
    note: "本页金额·补助率以官方最新公募要領为准。省力化补助金为审查採択制，提交申请不保证一定採択。",
  },
  {
    slug: "ai-it",
    tag: "AI导入",
    name: "数字化·AI 导入补助金",
    nameJa: "デジタル化・AI導入補助金2026（旧 IT導入補助金）",
    amount: "通常枠最高 450 万円（インボイス枠软件最高 350 万円）",
    rate: "通常枠 1/2 以内（满足最低工资要件 2/3 以内）",
    deadline: "有公募締切轮次（需经 IT 导入支援事业者共同申请）",
    metaTitle: "数字化·AI 导入补助金 2026 详解 | 通常枠最高 450 万円",
    metaDesc: "デジタル化・AI導入補助金2026（旧 IT導入補助金）申请指南。通常枠 5 万〜450 万円，补助率 1/2 以内（满足最低工资要件 2/3 以内）。需经登记的「IT 导入支援事业者」+ 登录 IT 工具共同申请，有明确公募締切。AI 软件采购·系统定制·部署培训，在日华人企业中文一对一代办。",
    heroDesc: "日本政府数字化转型专项扶持资金（旧称 IT 导入补助金），通常枠补助最高 450 万日元、补助率 1/2 以内。需经登记的 IT 导入支援事业者共同申请，有公募締切轮次",
    overview: [
      { label: "通常枠补助上限", value: "450 万円", sub: "5 万〜450 万円；インボイス枠软件档最高 350 万" },
      { label: "补助率", value: "1/2 以内", sub: "满足最低工资要件可达 2/3 以内" },
      { label: "受理方式", value: "公募締切制", sub: "需经 IT 导入支援事业者+登录 IT 工具申请" },
    ],
    qualifications: [
      "个人事业主（含独立自由职业者、个体工商户）",
      "中小企业·小规模事业者（依业种有资本金/员工数上限）",
      "赤字企业只要 IT 导入计划具可行性亦可申请",
      "须选用登录在官方名录的「IT 工具」并经「IT 导入支援事业者」共同申请",
      "在日本合法开展经营活动",
      "须在公募締切前完成交付申请（非随时受理）",
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
        q: "个人事业主·自由职业者可以申请吗？",
        a: "可以。个人事业主也在对象范围内，只要在日本合法经营、选用官方登录的 IT 工具并经 IT 导入支援事业者共同申请即可。独立软件开发者、个体工商户等都是典型申请人群。",
      },
      {
        q: "公司目前在亏损状态，还能申请吗？",
        a: "可以。本补助金不以企业盈利为门槛，即使当前赤字，只要 IT/AI 导入计划具有可行性和预期效益即可提交申请。但最终能否採択由事务局审查决定，并非申请即通过。",
      },
      {
        q: "这个补助金是随时都能申请吗？中小企业规模有要求吗？",
        a: "不是随时受理——本补助金有明确的公募締切轮次，需在各轮截止日前完成交付申请。对象为中小企业·小规模事业者及个人事业主（依业种有资本金/员工数上限，大企业不适用）。且必须先由「IT 导入支援事业者」登录 IT 工具后共同申请，不能个人单独提交。",
      },
      {
        q: "采购 ChatGPT Plus、Claude 等订阅也可以申请吗？",
        a: "通用订阅本身不作为补助对象——本补助金只补助登录在官方名录里的「IT 工具」。若您需要的 AI 功能由登录工具或 IT 导入支援事业者提供的定制方案实现，则相关费用可纳入申请。我们会帮您匹配符合条件的登录工具。",
      },
      {
        q: "AI 系统开发失败或效果不达预期会怎样？",
        a: "本项目关注计划的可行性与实际实施，不以效果达成作为补助金返还条件，但需按计划执行并提交实绩报告。我们会协助您制定稳健的计划，并在实施阶段提供辅导，避免材料瑕疵导致事后追缴。",
      },
    ],
    officialName: "デジタル化・AI導入補助金2026 事務局（中小機構）",
    officialUrl: "https://it-shien.smrj.go.jp/",
    verifiedDate: "2026-08-01",
    note: "本补助金为审查採択制（旧称 IT 导入补助金），需经登录的 IT 导入支援事业者共同申请，有公募締切。金额·締切以官方最新公募要領为准，提交申请不保证採択。",
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    nameJa: "キャリアアップ助成金（正社員化コース）",
    amount: "中小企业最高 80 万円/人",
    rate: "有期→正規·重点支援对象 80 万円；有期→正規·其他 40 万円；无期→正規 40/20 万円",
    deadline: "通年受付（要件满足原则支给），转正后 6 个月起申请",
    metaTitle: "员工转正助成金详解 | 中小企业最高 80 万円/人",
    metaDesc: "キャリアアップ助成金（正社員化コース）申请指南。金额由「转正前雇用形态+是否重点支援对象」决定：有期→正規·重点支援对象 80 万/人，有期→正規·其他 40 万/人，无期→正規 40/20 万/人（均为中小企业·分 2 期支给）。通年受付、要件满足原则支给，在日华人企业中文一对一代办。",
    heroDesc: "留住优秀员工，降低用人成本。中小企业将有期雇用的重点支援对象员工转为正社员，每人最高 80 万日元；金额按「转正前雇用形态+是否重点支援对象」判定",
    overview: [
      { label: "有期→正規·重点支援对象", value: "80万円/人", sub: "中小企业，40 万×2 期" },
      { label: "有期→正規·其他", value: "40万円/人", sub: "中小企业，40 万×1 期" },
      { label: "无期→正規", value: "40 / 20万円/人", sub: "重点支援对象 40 万 / 其他 20 万" },
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
      { item: "有期雇用·重点支援对象转正", detail: "有期雇用的重点支援对象者转为正社员，中小企业每人 80 万日元（40 万×2 期）" },
      { item: "有期雇用·其他员工转正", detail: "有期雇用的其他员工转为正社员，中小企业每人 40 万日元（40 万×1 期）" },
      { item: "无期雇用转为正社员", detail: "无期雇用（如契约社員）转正，中小企业重点支援对象 40 万、其他 20 万日元/人" },
      { item: "派遣员工转为直接雇用", detail: "派遣社員 → 直接雇用正社員（属重点支援对象，适用较高档）" },
      { item: "重点支援对象者认定", detail: "雇入满 3 年以上的有期员工、派遣工、单亲父母等符合重点支援对象定义者适用较高补助额" },
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
        a: "可以，每次申请可包含多名员工（1 事业所每年度支给申请上限 20 名）。每名符合条件的员工均可单独领取补助，金额按各自的转正前雇用形态和是否重点支援对象判定。如果同时转换多名员工，助成金总额相当可观。",
      },
      {
        q: "40 万和 80 万分别适用什么情况？",
        a: "金额由「转正前雇用形态」+「是否重点支援对象者」两个条件共同决定，不是看是否应届毕业：① 有期雇用→正社员，重点支援对象者中小企业 80 万/人、其他 40 万/人；② 无期雇用→正社员，重点支援对象 40 万、其他 20 万/人。「重点支援对象者」指雇入满 3 年以上的有期员工、派遣工、单亲父母等。此外，新规学卒者（雇入满 1 年内的应届生）不在支给对象内。具体适用哪档，我们会结合员工背景为您判断。",
      },
      {
        q: "同步办员工培训，补贴会不会翻倍？",
        a: "不存在「自动翻倍」的说法。正社員化コース与人材開発支援助成金可以组合申请、分别领取各自的助成金，此外「有期実習型訓練」结束后转正可使经费助成率提高。这不是「翻倍」，而是「两个制度分别达成要件、各自支给」。我们会帮您做合理的组合规划。",
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
    officialName: "厚生労働省 キャリアアップ助成金（正社員化コース）",
    officialUrl: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html",
    verifiedDate: "2026-08-01",
    note: "本页金额为中小企业·令和7年度框架（令和8年度延续），以厚生労働省最新案内为准。属要件满足原则支给的助成金，非竞争審査制。",
  },
  {
    slug: "training",
    tag: "人材育成",
    name: "员工培训助成金",
    nameJa: "人材開発支援助成金",
    amount: "按コース分：人材育成 1,000 万円 / 人への投資 2,500 万円 / 事業展開リスキリング 1 亿円（时限）",
    rate: "中小企业经费助成率 45%〜75%（达要件加算）＋每人每小时 800〜1,000 円赁金助成",
    deadline: "训练开始前 1〜6 个月提交训练实施计划届（非公募制）",
    metaTitle: "员工培训助成金（人材開発支援助成金）详解 | 按コース分档",
    metaDesc: "人材開発支援助成金申请指南。按コース分年度事业所上限：人材育成支援 1,000 万、人への投資促進 2,500 万、事業展開等リスキリング支援 1 亿円（至令和8年度末的时限措置）。中小企业经费助成率 45%〜75%＋赁金助成每人每小时 800〜1,000 円。AI 实战等课程需符合官方训练认定，在日华人企业中文一对一代办。",
    heroDesc: "聚焦员工能力提升，按コース年度事业所上限分档：人材育成支援 1,000 万、人への投資促進 2,500 万、事業展開等リスキリング支援最高 1 亿円（时限至令和8年度末）。经费助成率 45%〜75%＋赁金助成",
    overview: [
      { label: "人材育成支援コース", value: "1,000 万円", sub: "1 事业所年度经费助成上限" },
      { label: "人への投資促進コース", value: "2,500 万円", sub: "1 事业所年度经费助成上限" },
      { label: "事業展開リスキリング", value: "1 亿円", sub: "时限措置（至令和8年度末），非普遍上限" },
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
        q: "AI 实战课程能拿到多少补助？",
        a: "补助由两部分构成：① 经费助成——中小企业按训练类型补助训练费的 45%〜75%（满足赁上/资格手当等要件可再加算）；② 赁金助成——训练时间每人每小时 800〜1,000 円（每人每训练限 1,200 小时）。AI 营销、AI 运营自动化等课程若归入「高度デジタル人材訓練/成長分野等人材訓練」，经费助成率可达 75%，但须符合官方训练认定。所谓「每人百万级」只在特定长时训练+加算下才可能达到，并非普遍标准。",
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
        q: "和员工转正助成金一起申请有什么好处？",
        a: "两个制度可以组合、分别领取各自的助成金——这不是「翻倍」，而是各自达成要件后各自支给。此外，采用「有期実習型訓練」并在训练后将员工转为正社员，可使经费助成率提高。我们会帮您把培训与转正做合理的组合规划，最大化合规范围内的资金回馈。",
      },
    ],
    officialName: "厚生労働省 人材開発支援助成金",
    officialUrl: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/shokugyounouryoku/d01-1.html",
    verifiedDate: "2026-08-01",
    note: "「1 亿円」仅为「事業展開等リスキリング支援コース」的 1 事业所年度上限，且为至令和8年度末的时限措置；一般 AI/IT 训练走人材育成支援コース（1,000 万）或人への投資促進コース（2,500 万）。属要件满足原则支给的助成金，金额以厚生労働省最新案内为准。",
  },
  {
    slug: "aircon",
    tag: "节能补助",
    name: "空调节能改造补助",
    nameJa: "ゼロエミッション化に向けた省エネ設備導入・運用改善支援事業（東京都）",
    amount: "东京都最高 4,500 万円（助成率 3/4）",
    rate: "东京都：助成率最高 3/4（按 CO2 削减量·诊断方式分 3 档）",
    deadline: "回次制申请（预算超额时全件抽签，非先着顺）",
    metaTitle: "空调节能改造补助金详解 | 东京都最高 4,500 万円·助成率 3/4",
    metaDesc: "东京都空调节能改造补助（ゼロエミッション化 省エネ設備導入支援事业）申请指南。按 CO2 削减量·诊断方式分 3 档：年削减 28t-CO2 以上助成率 3/4 上限 4,500 万；事前省エネ诊断+削减 3t 或 30% 上限 2,500 万（2/3）；自作计画上限 1,000 万（2/3）。回次制抽签，餐饮·学校·民宿·企业均可，在日华人企业中文一对一代办。",
    heroDesc: "东京都中小规模事业所空调等省エネ设备更新补助（クール・ネット东京）。按 CO2 削减量与诊断方式分档，助成率最高 3/4、最高 4,500 万日元；回次制申请、预算超额时抽签",
    overview: [
      { label: "最高档（削减 28t-CO2 以上）", value: "4,500 万円", sub: "助成率 3/4" },
      { label: "诊断+削减 3t 或 30%", value: "2,500 万円", sub: "助成率 2/3" },
      { label: "自作计画+削减 3t 或 30%", value: "1,000 万円", sub: "助成率 2/3" },
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
        q: "东京都的补助能补多少？",
        a: "东京都「ゼロエミッション化 省エネ設備導入支援事业」按 CO2 削减量和是否做事前省エネ诊断分 3 档：① 年削减 28t-CO2 以上，助成率 3/4、上限 4,500 万日元；② 事前诊断+削减 3t 或 30% 以上，助成率 2/3、上限 2,500 万；③ 自作计画+削减 3t 或 30%，助成率 2/3、上限 1,000 万。企业需自行承担助成率以外的部分，不存在「零负担」。具体适用哪档、能补多少，我们会按现场情况评估。",
      },
      {
        q: "这个补助是先到先得吗？",
        a: "不是先着顺。东京都采用「回次制」，各回次预算超额时对全部合格申请进行抽签决定，因此提交申请不保证一定当选。我们会协助您在受付期内完成合规申请、提高材料完整度。",
      },
      {
        q: "东京都以外地区有类似补助吗？",
        a: "各都道府县·市区町村和国家层面都有不同的省エネ设备更新补助制度，条件、上限和补助率各不相同，需按您所在地区单独核实。请把您的所在地和设施情况告诉我们，我们会帮您匹配当地可用的现行制度。",
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
    officialName: "クール・ネット東京（公益財団法人東京都環境公社）",
    officialUrl: "https://www.tokyo-co2down.jp/subsidy/zeroemi-shoene",
    verifiedDate: "2026-08-01",
    note: "本页为东京都令和7年度现行口径（回次制·抽签），令和8年度新一轮受付时期截至核验日官方尚未公告。东京都以外地区及国家层面的省エネ补助制度各异，需按所在地单独核实。金额·助成率以主管机关最新公告为准。",
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
  const canonicalPath = `/subsidies/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: { canonical: canonicalPath },
    openGraph: {
      url: `https://shisei-consult.jp${canonicalPath}`,
      title: data.metaTitle,
      description: data.metaDesc,
    },
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

  const SITE_URL = "https://shisei-consult.jp";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.name}申请代办`,
    name: `${data.name}（${data.nameJa}）申请代办`,
    description: data.metaDesc,
    inLanguage: "zh-CN",
    areaServed: { "@type": "Country", name: "日本" },
    provider: {
      "@type": "Organization",
      name: "株式会社 志成コンサル",
      url: SITE_URL,
    },
    audience: { "@type": "BusinessAudience", name: "在日华人中小企业" },
    url: `${SITE_URL}/subsidies/${slug}`,
  };
  const faqJsonLd = data.faq && data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <NavClient />

      {/* ── Hero ── premium light */}
      <section className="page-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/subsidies" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 24, fontWeight: 500 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            补助金种类一览
          </Link>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.12em', marginBottom: 16 }}>{data.tag}</div>
          <h1 className="display" style={{ fontSize: 'clamp(32px,4.6vw,52px)', marginBottom: 10 }}>
            {data.name}
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20, letterSpacing: '.02em' }}>
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
                      background: "rgba(26,92,90,0.1)", color: "var(--primary)",
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
                        background: "rgba(26,92,90,0.12)", color: "var(--primary)",
                        fontSize: 12, fontWeight: 700, padding: "2px 7px", borderRadius: 3,
                        flexShrink: 0, marginTop: 2,
                      }}>A</span>
                      <span style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75 }}>{item.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 官方来源与最后核验（合规声明） ── */}
            {(data.officialUrl || data.note) && (
              <section style={{ marginTop: 40 }}>
                <div style={{
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--primary)",
                  borderRadius: 10,
                  padding: "18px 22px",
                  background: "var(--bg-outer)",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 8 }}>
                    数据来源与核验
                  </div>
                  {data.note && (
                    <p style={{ fontSize: 13, color: "var(--body)", lineHeight: 1.75, margin: "0 0 10px" }}>
                      {data.note}
                    </p>
                  )}
                  <div style={{ fontSize: 12.5, color: "var(--muted, #6b6b6b)", lineHeight: 1.7 }}>
                    {data.officialUrl && (
                      <div>
                        官方来源：
                        <a href={data.officialUrl} target="_blank" rel="noopener" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                          {data.officialName || data.officialUrl}
                        </a>
                      </div>
                    )}
                    {data.verifiedDate && <div>最后核验：{data.verifiedDate}</div>}
                    <div>※ 补助金·助成金制度与金额随官方公募要領更新，最终以主管机关最新公告为准。</div>
                  </div>
                </div>
              </section>
            )}

          </div>
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
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>企业微信：扫码添加营业部</div>
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
                        fontSize: 10, background: "rgba(26,92,90,0.08)", color: "var(--primary)",
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
        <div className="hero-orb" style={{ width: 480, height: 480, background: 'rgba(26,92,90,0.08)', top: -140, right: -80 }} />
        <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -100, left: -60, filter: 'blur(70px)' }} />
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 className="h2 ed-h ed-h-center" style={{ marginBottom: 18 }}>
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
