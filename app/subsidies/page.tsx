import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "补助金种类",
  description: "详解6种主要日本政府补助金：省力化补助金、AI·IT导入补助金、员工转正助成金、小规模持续化补助金、事业重构补助金、制造业补助金",
};

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const subsidies = [
  {
    slug: "seiryoka",
    tag: "省力化",
    name: "省力化补助金",
    amount: "最高1,500万円",
    rate: "补助率：1/2〜2/3（小规模事业者为3/4）",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    desc: "面向中小企业和小规模事业者的劳动力不足对策补助金。机械设备、机器人、IT系统的导入费用最高补助2/3。适合希望降低人工成本、提升生产效率的企业。不仅制造业，餐饮、零售、服务业等各行业均在申请范围内。",
    conditions: [
      "须为中小企业或小规模事业者",
      "须导入补助对象设备或系统",
      "须制定生产效率提升计划",
      "须提交薪资提升计划",
    ],
    usage: [
      "生产线自动化设备导入",
      "POS收银及订单管理系统导入",
      "清洁·搬运机器人导入",
      "自动仓库·物流系统建设",
    ],
  },
  {
    slug: "ai-it",
    tag: "IT导入",
    name: "AI·IT导入补助金",
    amount: "最高450万円",
    rate: "补助率：最高2/3（普通类型1/2）",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
        <circle cx="9" cy="15" r="1" fill="currentColor"/>
        <circle cx="15" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    desc: "支持企业推进业务效率化和数字化转型，补助IT工具及软件的导入费用。会计软件、订单管理系统、电商平台搭建工具等各类IT工具均在补助范围内。发票制度、电子账簿保存法等合规对应工具同样可以申请。",
    conditions: [
      "中小企业、小规模事业者、个人事业主均可",
      "须与已注册的IT导入支援事业者合作",
      "须制定劳动生产效率提升计划",
      "须符合安全对策基准",
    ],
    usage: [
      "会计·财务软件导入",
      "客户管理（CRM）系统导入",
      "电商平台·网店建设",
      "AI聊天机器人·自动回复系统",
    ],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    amount: "最高80万円/人",
    rate: "正社员转换：57万円〜80万円/人",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    desc: "将非正规雇用劳动者（兼职、临时工、合同工）转为正规雇用时可领取的助成金。大力支持致力于优秀人才留用与雇用稳定的企业。满足生产效率要求时，每转换一人最高可获80万円助成。",
    conditions: [
      "须为雇用保险适用事业所",
      "须制定并提交员工职业提升计划",
      "转换前须雇用6个月以上",
      "转换后须作为正社员持续雇用6个月以上",
    ],
    usage: [
      "兼职·临时工转为正社员",
      "合同工·派遣工转为直接雇用",
      "有期雇用转为无期雇用",
      "待遇改善（薪资·福利）",
    ],
  },
  {
    tag: "持续化",
    name: "小规模持续化补助金",
    amount: "最高250万円",
    rate: "补助率：2/3（上限50〜250万円）",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    desc: "支持小规模事业者和个人事业主开拓销售渠道、提升生产效率。宣传单制作、网站建设、展会参展、商品开发等多种用途均可申请。发票特例、创业特例等各类加算制度十分完善。",
    conditions: [
      "小规模事业者（商业·服务业5人以下，制造业20人以下）",
      "个人事业主同样可以申请",
      "须接受商工会·商工会议所的支援",
      "须制定持续经营计划",
    ],
    usage: [
      "官网·电商平台建设",
      "宣传单·手册等广告宣传",
      "参加展会·洽谈会费用",
      "新产品开发·试制品制作费",
    ],
  },
  {
    tag: "事业重构",
    name: "事业重构补助金",
    amount: "最高7,000万円",
    rate: "补助率：1/2〜2/3（中小企业）",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="12"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    desc: "大规模支持因新冠疫情及经济环境变化而进行新业务拓展、业态转换的企业。推动新商品·服务开发、进军新市场、业态转换等重大变革。中小企业最高可申请7,000万円（补助率2/3）。",
    conditions: [
      "须有2020年4月以后营业额下降的实绩",
      "须与金融机关等共同制定事业计划",
      "须获得认定经营革新等支援机关的确认",
      "须在补助事业完成后3〜5年内实现附加价值额提升计划",
    ],
    usage: [
      "新业态·新品牌创立",
      "海外拓展·入境旅游事业",
      "线上化·数字化转型投资",
      "新产品线·制造设备导入",
    ],
  },
  {
    tag: "制造业",
    name: "制造业补助金",
    amount: "最高4,000万円",
    rate: "补助率：1/2〜2/3（中小企业）",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    desc: "支持从事创新服务开发、试制品开发及生产流程改善的中小企业。适合希望通过设备投资提升附加价值和生产效率的企业。设有一般型、全球拓展型等多种申请框架，可根据企业实际情况灵活选择。",
    conditions: [
      "须为中小企业或小规模事业者",
      "须有创新产品·服务开发计划",
      "须制定并提交薪资提升计划",
      "须获得认定支援机关的协助",
    ],
    usage: [
      "CNC机床·激光加工机导入",
      "3D打印机·试制设备导入",
      "IoT系统·传感器设备导入",
      "品质管理系统·检测装置导入",
    ],
  },
];

export default function SubsidiesPage() {
  return (
    <main>
      <NavClient />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">补助金种类</div>
          <h1>主要补助金与助成金一览</h1>
          <p>志成コンサル代办的6种主要补助金·助成金详细介绍。申请条件及使用方法欢迎随时咨询。</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="subsidy-cards">
            {subsidies.map((s, i) => (
              <div key={i} className="subsidy-detail-card">
                <div className="subsidy-detail-header">
                  <div className="subsidy-detail-icon">{s.icon}</div>
                  <div className="subsidy-detail-meta">
                    <div className="subsidy-detail-tag">{s.tag}</div>
                    <div className="subsidy-detail-name">{s.name}</div>
                    <div className="subsidy-detail-amount">{s.amount}</div>
                    <div style={{fontSize:13,color:"var(--body)",marginTop:4}}>{s.rate}</div>
                  </div>
                </div>
                <div className="subsidy-detail-body">
                  <div>
                    <p className="subsidy-detail-desc">{s.desc}</p>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
                    <div className="subsidy-detail-list">
                      <h4>申请条件</h4>
                      <ul>
                        {s.conditions.map((c, j) => (
                          <li key={j}>
                            <IconCheck />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="subsidy-detail-list">
                      <h4>主要用途</h4>
                      <ul>
                        {s.usage.map((u, j) => (
                          <li key={j}>
                            <IconCheck />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {s.slug && (
                    <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"flex-end"}}>
                      <Link href={`/subsidies/${s.slug}`} style={{
                        display:"inline-flex",alignItems:"center",gap:6,
                        fontSize:13,color:"var(--primary)",fontWeight:500,
                      }}>
                        查看详情
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:64,padding:"56px 0",borderTop:"1px solid var(--border)"}}>
            <div style={{fontSize:24,fontWeight:700,color:"var(--heading)",marginBottom:12}}>
              哪种补助金最适合您？
            </div>
            <p style={{fontSize:16,color:"var(--body)",marginBottom:32,lineHeight:1.75}}>
              3分钟免费诊断，为您的企业精准匹配最优补助金方案。
            </p>
            <Link href="/contact" className="btn-primary" style={{fontSize:16,padding:"14px 36px"}}>
              开始免费诊断
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
