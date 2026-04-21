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
    name: "省力化补助金",
    nameJa: "中小企業省力化投資補助金",
    amount: "最高1,500万円",
    rate: "1/2〜2/3（小规模3/4）",
    deadline: "随时受理（预算用完为止）",
    metaTitle: "省力化补助金详解 | 最高1,500万円",
    metaDesc: "省力化补助金（中小企業省力化投資補助金）申请指南。最高1,500万円，补助率2/3。申请资格、流程、材料清单全面解说，在日华人企业主中文一对一代办。",
    heroDesc: "通过导入机械设备·机器人·IT系统解决劳动力不足问题，政府最高补助2/3费用",
    overview: [
      { label: "最高补助金额", value: "1,500万円", sub: "小规模事业者最高补助率3/4" },
      { label: "补助率", value: "1/2〜2/3", sub: "小规模事业者 3/4" },
      { label: "申请期限", value: "随时受理", sub: "预算用完即止，建议尽早申请" },
    ],
    qualifications: [
      "中小企业或小规模事业者（依照中小企业基本法定义）",
      "须导入补助金目录内的设备或系统",
      "须制定并提交具体的生产效率提升计划",
      "须提交未来3年内提升员工薪资的计划",
      "须与已注册的IT导入支援事业者合作（IT工具类）",
      "不得为反社会势力关联企业",
    ],
    targets: [
      { item: "生产线自动化设备", detail: "机械臂、自动装配机、自动检测装置等" },
      { item: "清洁·搬运机器人", detail: "商业清洁机器人、AGV无人搬运车等" },
      { item: "POS及订单管理系统", detail: "餐饮/零售用智能收银、订单自动化系统" },
      { item: "自动仓库·物流系统", detail: "立体仓库、自动分拣输送系统" },
      { item: "AI图像检测·品质管理装置", detail: "产品外观自动检测、不良品筛选系统" },
    ],
    steps: [
      { step: "01", title: "免费资格诊断", desc: "填写简单问卷，由专业顾问判断贵公司是否符合申请资格，通常1个工作日内回复。" },
      { step: "02", title: "制定事业计划", desc: "与我们的行政书士团队共同制作「省力化投资计划书」，明确导入设备的效果与薪资提升目标。" },
      { step: "03", title: "选定设备并提交申请", desc: "从补助金目录中选定设备，完成申请材料并提交至主管机构（中小企業基盤整備機構）。" },
      { step: "04", title: "交付决定·设备采购", desc: "收到交付决定通知后方可正式采购设备，切勿在此之前下单。" },
      { step: "05", title: "实绩报告·补助金领取", desc: "设备导入完成后提交实绩报告，审核通过后补助金汇入账户，一般为完成后2〜3个月。" },
    ],
    materials: [
      "法人登记事项证明书（法人の場合）",
      "最近2期决算书（贷借对照表·损益计算书）",
      "法人税申告书（含别表·勘定科目内訳）",
      "省力化投资计划书（我方协助制作）",
      "见积书（设备报价单）",
      "劳动者名册及雇用保险关系书类",
      "薪资提升计划书（我方协助制作）",
      "认定支援机关的确认书（如需要）",
    ],
    faq: [
      {
        q: "个人事业主可以申请省力化补助金吗？",
        a: "可以。只要符合小规模事业者的要求（制造业等20人以下、商业·服务业5人以下），个人事业主同样可以申请，且补助率最高可达3/4。",
      },
      {
        q: "已经购买了设备，还能申请吗？",
        a: "不可以。必须在收到「交付决定」通知后才能采购设备。如果先购买再申请，费用将不被认定。这是很多企业主容易犯的错误，请务必在申请前咨询我们。",
      },
      {
        q: "补助金目录以外的设备可以申请吗？",
        a: "省力化补助金有严格的「目录制度」，只有目录内登录的设备才能申请。目录会定期更新，建议联系我们确认最新目录内容。",
      },
      {
        q: "从申请到收到补助金大约需要多长时间？",
        a: "一般流程为：申请审核（约2〜3个月）→ 交付决定 → 设备采购 → 实绩报告（1个月内）→ 补助金支付（审核后约2个月）。全程约6〜9个月。",
      },
      {
        q: "餐饮·服务业等非制造业也可以申请吗？",
        a: "可以。省力化补助金面向所有行业，餐饮业可申请自动洗碗机、配送机器人；服务业可申请AI接待系统等。只要解决劳动力不足，各行业均在范围内。",
      },
    ],
  },
  {
    slug: "ai-it",
    tag: "IT导入",
    name: "AI·IT导入补助金",
    nameJa: "IT導入補助金（デジタル化基盤導入枠含む）",
    amount: "最高450万円",
    rate: "最高2/3（普通类型1/2）",
    deadline: "每年分多次公募（具体日期以官网为准）",
    metaTitle: "AI·IT导入补助金详解 | 最高450万円",
    metaDesc: "IT导入补助金申请指南。会计软件、CRM、电商平台、AI工具最高补助2/3。申请条件、流程全程中文解说，在日华人企业代办专家。",
    heroDesc: "支持企业数字化转型，会计·CRM·电商·AI工具导入费用最高补助2/3",
    overview: [
      { label: "最高补助金额", value: "450万円", sub: "デジタル化基盤导入枠最高350万円" },
      { label: "补助率", value: "最高2/3", sub: "普通IT工具类型为1/2" },
      { label: "申请期限", value: "多次公募", sub: "每次公募约1〜2个月，错过需等下次" },
    ],
    qualifications: [
      "中小企业、小规模事业者或个人事业主均可",
      "须与已注册的「IT导入支援事業者」合作，不能独立申请",
      "须导入已登录补助金系统的IT工具（不限软件类别）",
      "须制定3年内劳动生产效率提升1%以上的计划",
      "须满足セキュリティ对策基准（安全对策）",
      "须参加IT工具实施后的效果报告义务",
    ],
    targets: [
      { item: "会计·财务管理软件", detail: "freee会計、マネーフォワード、弥生会計等及相关导入费" },
      { item: "客户管理（CRM）系统", detail: "Salesforce、HubSpot、kintone等CRM/SFA工具" },
      { item: "电商平台·网店建设", detail: "EC-CUBE、Shopify等含订单管理的电商系统" },
      { item: "AI聊天机器人·自动回复", detail: "ChatGPT API集成、LINE对话自动化工具" },
      { item: "勤怠·人事管理系统", detail: "SmartHR、ジョブカン等HR数字化工具" },
    ],
    steps: [
      { step: "01", title: "免费资格诊断", desc: "确认企业是否为中小企业，以及所需IT工具是否在补助对象范围内，通常1个工作日内回复。" },
      { step: "02", title: "选择IT工具与支援事业者", desc: "我方协助您在IT导入补助金系统中选定合适的IT工具，并确认合作的IT支援事業者资质。" },
      { step: "03", title: "制作申请材料", desc: "由行政书士协助制作「IT导入计划书」，填写gBizIDプライム账户相关信息，完成线上申请。" },
      { step: "04", title: "交付决定后导入工具", desc: "收到交付决定通知后才可正式签约并实施IT工具，导入完成后留存相关证明材料。" },
      { step: "05", title: "实绩报告·补助金到账", desc: "提交导入完成报告及使用效果证明，审核通过后补助金直接汇入企业账户。" },
    ],
    materials: [
      "法人登记事项证明书（または开业届）",
      "最近2期决算书或确定申告书",
      "gBizIDプライム账户（需提前1〜2周申请）",
      "IT工具报价单及导入计划书",
      "安全对策实施证明（SECURITY ACTION宣言）",
      "劳动生产效率向上计划书（我方协助制作）",
      "银行账户证明（补助金汇入用）",
    ],
    faq: [
      {
        q: "个人事业主可以申请IT导入补助金吗？",
        a: "可以。个人事业主只要有确定申告书和开业届，即可申请IT导入补助金。gBizIDプライム账户的申请对个人事业主也开放，我们可全程协助办理。",
      },
      {
        q: "我已经在使用某款软件，续费或升级可以申请吗？",
        a: "部分情况可以。新功能模块的追加导入或上位版本升级，如符合IT工具登录要求，可能纳入补助范围。但单纯的续费一般不在补助对象内，请联系我们具体确认。",
      },
      {
        q: "gBizIDプライム账户是什么？怎么申请？",
        a: "gBizIDプライムは日本政府的企业数字化身份认证账户，申请IT导入补助金时必须持有。申请需提交法人印鑑证明，审批约需1〜2周。建议尽早申请，我方可协助全程操作。",
      },
      {
        q: "为什么不能自己直接申请，必须通过IT支援事業者？",
        a: "这是制度规定。IT导入补助金必须由企业与已注册的「IT导入支援事業者」联合申请，目的是确保工具真正落地实施。我们作为代办方会协调您与合适的支援事業者对接。",
      },
      {
        q: "网站制作或APP开发费用可以申请IT导入补助金吗？",
        a: "纯网站制作一般不在普通型范围内，但带有订单管理、会员管理等功能的电商系统可以申请。APP开发也视功能而定。建议提供具体需求让我们判断是否符合条件。",
      },
    ],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    nameJa: "キャリアアップ助成金（正社員化コース）",
    amount: "最高80万円/人",
    rate: "57万円〜80万円/人（满足生产效率要求）",
    deadline: "全年受理，转正后6个月起申请",
    metaTitle: "キャリアアップ助成金（员工转正）详解 | 最高80万円/人",
    metaDesc: "キャリアアップ助成金正社員化コース申请指南。将兼职·临时工转为正社员，每人最高领取80万円。申请资格、流程中文全解说。",
    heroDesc: "将兼职·合同工转为正社员，每转换一人最高获得80万円助成，雇用安定与补助双赢",
    overview: [
      { label: "每人助成金额", value: "57〜80万円", sub: "满足生产效率基准时80万円" },
      { label: "申请时机", value: "转正后6个月", sub: "须持续雇用6个月后方可申请" },
      { label: "受理期间", value: "全年受理", sub: "每年均可申请，无特定公募期" },
    ],
    qualifications: [
      "须为雇用保险适用事业所（已加入雇用保险）",
      "须事先制定并向劳动局提交「キャリアアップ計画書」",
      "被转换员工须在该事业所以非正规身份雇用满6个月以上",
      "转换后须将该员工作为正社员持续雇用6个月以上",
      "转换后须将该员工薪资提升3%以上",
      "事业所在过去3年内未违反劳动相关法令",
    ],
    targets: [
      { item: "兼职·临时工转为正社员", detail: "パート・アルバイト → 正社員（无期雇用）" },
      { item: "有期合同工转为正社员", detail: "有期雇用契約社員 → 正社員" },
      { item: "派遣员工转为直接雇用正社员", detail: "派遣社員 → 直接雇用正社員" },
      { item: "有期转无期雇用", detail: "有期 → 無期雇用（非正规→無期パート等也可）" },
      { item: "待遇改善（薪资·福利同等化）", detail: "转正时薪资不低于转换前的3%以上提升" },
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
        a: "可以，每次申请可包含多名员工。每名符合条件的员工均可单独领取57〜80万円。如果同时转换多名员工，助成金总额可以相当可观。",
      },
      {
        q: "什么是「生产效率要求」？满足后可以多拿多少？",
        a: "生产效率要求是指事业主近3年的企业生产效率（付加価値額/雇用保険被保険者数）提升了1%以上。满足该要求时，每人助成金可从57万円提升至80万円，差额为23万円/人。",
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
    nameJa: "人材開発支援助成金",
    amount: "最高1,200万円/年",
    rate: "训练费用45〜75%，讲师费·设施费另行补助",
    deadline: "全年受理（训练开始日前提交计划）",
    metaTitle: "人材開発支援助成金（员工培训）详解 | 最高75%补助 | 志成コンサル",
    metaDesc: "人材開発支援助成金申请指南。员工培训费最高75%补助，薪资期间额外领助成。IT·DX·专业技能培训均可申请，全程中文代办。",
    heroDesc: "员工培训费最高补助75%，培训期间薪资另行助成，打造企业核心人才无负担",
    overview: [
      { label: "训练费补助率", value: "45〜75%", sub: "中小企业最高75%，含DX·IT训练特别加算" },
      { label: "薪资助成", value: "760〜960円/时", sub: "训练期间员工薪资另行补助" },
      { label: "受理期间", value: "全年受理", sub: "须在训练开始1个月前提交计划书" },
    ],
    qualifications: [
      "须为雇用保险适用事业所",
      "须在训练开始前向管辖劳动局提交「职业能力開発推进者」设置届",
      "须在训练开始1个月前提出「训练实施计划届」",
      "培训须委托外部机构或使用经认定的off-JT形式",
      "训练时间须满足规定（通常每课程10小时以上）",
      "受训员工须为雇用保险被保险者",
    ],
    targets: [
      { item: "IT·DX数字化相关培训", detail: "Python编程、AI应用、数据分析、DX推进人才培训" },
      { item: "业务·管理专业技能培训", detail: "管理会计、财务分析、项目管理认证课程" },
      { item: "语言培训（日语·英语）", detail: "商务日语、日语能力考试备考、英语商务会话" },
      { item: "专业资格取得课程", detail: "社会保険劳务士、簿记、安全卫生管理者等资格培训" },
      { item: "OJT·职场实践训练", detail: "在职训练（须配合off-JT，满足一定比例要求）" },
    ],
    steps: [
      { step: "01", title: "免费咨询·训练计划确认", desc: "确认培训内容是否符合助成金要求，选择合适的申请框架（一般型、特定訓練、長期教育訓練等）。" },
      { step: "02", title: "设置「职业能力开发推进者」", desc: "在事业所设置负责职业培训的内部担当者，向劳动局提交设置届，我方协助准备全部文件。" },
      { step: "03", title: "提交训练实施计划", desc: "在培训开始1个月前，向劳动局提交训练实施计划书，载明培训机构、内容、时长、受训人员等。" },
      { step: "04", title: "实施培训并保存记录", desc: "按计划完成培训，保存出席记录、培训机构发行的修了证明、费用领收书等全部证明材料。" },
      { step: "05", title: "提交支给申请·助成金到账", desc: "培训结束后2个月内提交支给申请，审核通过后助成金汇入账户（约3〜5个月）。" },
    ],
    materials: [
      "训练实施计划书（训练开始前1个月提交）",
      "职业能力开发推进者设置届",
      "雇用保险被保险者相关书类",
      "培训机构的见积书·契约书",
      "受训员工的受讲记录·出席簿",
      "培训机构颁发的修了証明书",
      "费用领收书（训练费·设施费等）",
      "工资支付明细（训练期间）",
    ],
    faq: [
      {
        q: "老板本人的培训可以申请助成金吗？",
        a: "不可以。人材開発支援助成金仅针对雇用保険被保険者（受雇员工），企业主本人通常不加入雇用保险，因此不在助成对象内。但员工（含外国籍员工）均可申请。",
      },
      {
        q: "培训费须先由公司垫付吗？",
        a: "是的，助成金制度是先垫付、后报销。公司须先支付培训费，完成培训后提交申请，审核通过后助成金打回账户。因此建议选择金额合理、资金周转允许的培训项目。",
      },
      {
        q: "网络在线课程可以申请吗？",
        a: "可以，eラーニング（在线学习）也在助成对象内，但须满足一定条件：须有完成率管理功能、记录受讲时间、课程须由外部认定机构提供等。我们可协助确认具体课程是否符合要求。",
      },
      {
        q: "DX·IT相关培训有特别的加算吗？",
        a: "有。「デジタル人材育成支援コース」对于IT·DX相关培训提供特别加算，训练费补助率最高可达75%，且薪资助成额也更高。强烈建议有IT培训需求的企业优先考虑这一框架。",
      },
      {
        q: "一个员工一年可以申请多次培训吗？",
        a: "理论上同一员工可以参与多次不同的培训，但须注意每次训练的申请间隔和年度上限要求。整个事业所全年助成金总额有上限（通常1,200万円以内），合理规划培训计划更为重要。",
      },
    ],
  },
  {
    slug: "aircon",
    tag: "节能补助",
    name: "空调节能改造补助",
    nameJa: "空調省エネ更新補助（省エネ設備導入支援）",
    amount: "最高100万円",
    rate: "补助率1/2〜2/3（依设备节能效果）",
    deadline: "每年春季公募（具体日期以官网为准）",
    metaTitle: "空调省エネ补助金详解 | 最高100万円 | 志成コンサル",
    metaDesc: "空调节能改造补助金申请指南。将老旧空调更换为高效节能型，最高补助100万円。店铺·办公室·工厂均可申请，中文全程代办。",
    heroDesc: "更换老旧空调为节能型，削减电费同时最高获100万円补助，门店·办公室·工厂均可申请",
    overview: [
      { label: "最高补助金额", value: "100万円", sub: "依节能效果评分，金额有所差异" },
      { label: "补助率", value: "1/2〜2/3", sub: "高节能效果设备可享2/3补助" },
      { label: "申请期限", value: "每年春季公募", sub: "通常4〜6月受理，需提前准备" },
    ],
    qualifications: [
      "中小企业及小规模事业者（含个人事业主）",
      "须将现有老旧空调（一般10年以上）更换为高效节能型设备",
      "新设备须满足省エネ基準达成率的要求",
      "须提出明确的节能计划及预计节能效果",
      "须委托专业施工业者完成安装，并保存工事相关记录",
      "店铺·事务所·工厂·仓库等业务用途设施均可",
    ],
    targets: [
      { item: "高效率业务用空调设备", detail: "更换APF（通年エネルギー消費効率）高的新型空调" },
      { item: "业务用多联空调系统", detail: "ビル用マルチエアコン更新（大型店铺·办公楼适用）" },
      { item: "全热交换型换气系统", detail: "降低空调负荷的全热交换器一并更新" },
      { item: "设备监控·智能控制系统", detail: "BEMS（楼宇能源管理系统）导入与空调联动控制" },
      { item: "施工费用（部分）", detail: "拆旧·安装工事费用在一定范围内可纳入补助" },
    ],
    steps: [
      { step: "01", title: "免费资格诊断", desc: "确认现有空调年龄、节能基准差距及预计补助金额，通常1个工作日内给出初步判断。" },
      { step: "02", title: "选定设备·获取报价", desc: "协助选定符合省エネ基準的空调型号，向指定施工业者获取正式报价单（含拆旧·安装费）。" },
      { step: "03", title: "制作申请材料并提交", desc: "在公募期间内，由我方协助完成线上申请，包括节能计划书、见积书、施工图纸等全部材料。" },
      { step: "04", title: "交付决定后实施施工", desc: "收到交付决定通知后方可签订施工合同、实施空调更换工事，切勿提前施工。" },
      { step: "05", title: "实绩报告·补助金到账", desc: "施工完成后提交完工报告及领收书，审核通过后补助金汇入账户（约1〜3个月）。" },
    ],
    materials: [
      "法人登记事项证明书（法人の場合）",
      "最近期决算书或确定申告书",
      "现有空调的型号·设置年份证明（なければ写真可）",
      "新设备产品规格书（含APF·省エネ基準达成率）",
      "施工见积书（设备费·工事费明细）",
      "节能计划书（我方协助制作）",
      "施工业者の登録証明（如需要）",
      "施工完了写真·领收书（完工后）",
    ],
    faq: [
      {
        q: "家用空调（家庭用）也可以申请吗？",
        a: "不可以。空调节能补助金针对的是业务用途设施（店铺·事务所·工厂等），家用空调不在补助对象内。但如果住宅兼用于事业，部分情况下可能符合要求，建议具体咨询我们。",
      },
      {
        q: "租赁店铺的租户（借方）可以申请吗？",
        a: "一般可以，但须获得房东书面同意。建议在申请前确认租赁合同中关于设备工事的条款，并准备房东同意书。若房东希望作为申请主体，也可以由房东申请。",
      },
      {
        q: "更换多台空调可以一并申请吗？",
        a: "可以，同一事业所内多台空调的更换可以合并一次申请，补助金总额以上限100万円为准。如有多个事业所，可分别申请，每个事业所单独计算上限。",
      },
      {
        q: "施工可以在申请前先完成吗？",
        a: "绝对不可以。与所有补助金一样，必须在收到「交付决定」通知后才能实施施工。提前施工意味着该费用将不被认定，补助金申请将被驳回，请务必注意。",
      },
      {
        q: "节能效果达不到预期怎么办？",
        a: "如实际节能效果低于申请时计划的节能率，可能需要返还部分补助金。因此在制定节能计划时，我们会协助您做出保守稳健的计划，避免事后追缴风险。",
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

      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(135deg, var(--dark) 0%, #2d1b8e 100%)",
        padding: "80px 0 72px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: "radial-gradient(circle at 70% 50%, #fff 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="section-inner">
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
            <Link href="/subsidies" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              补助金种类一览
            </Link>
          </div>
          <div style={{
            display: "inline-block", background: "var(--primary)", color: "#fff",
            fontSize: 11, fontWeight: 400, letterSpacing: 1, textTransform: "uppercase",
            padding: "4px 12px", borderRadius: 3, marginBottom: 20,
          }}>
            {data.tag}
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300,
            color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.15,
            marginBottom: 12,
          }}>
            {data.name}
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
            {data.nameJa}
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, maxWidth: 640, marginBottom: 36 }}>
            {data.heroDesc}
          </p>
          {/* Amount badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 8, padding: "14px 24px",
          }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>最高补助金额</span>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>{data.amount}</span>
          </div>
        </div>
      </div>

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
                      background: "rgba(83,58,253,0.1)", color: "var(--primary)",
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
                        background: "rgba(83,58,253,0.12)", color: "var(--primary)",
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
                        fontSize: 10, background: "rgba(83,58,253,0.08)", color: "var(--primary)",
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
      <div style={{
        background: "linear-gradient(135deg, var(--dark) 0%, #2d1b8e 100%)",
        padding: "72px 0",
      }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>免费服务</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 300, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
            {data.name}申请，<br />从咨询到领取全程代办
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", marginBottom: 36, lineHeight: 1.75, maxWidth: 540, margin: "0 auto 36px" }}>
            行政书士·社会保険労務士·税理士组成的专业团队，全程中文无障碍。无成功不收费，风险为零。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              立即免费咨询
              <IconArrow />
            </Link>
            <Link href="/subsidies" style={{
              fontSize: 16, padding: "14px 36px", borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              查看其他补助金
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
