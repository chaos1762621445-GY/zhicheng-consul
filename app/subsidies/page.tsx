import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金种类详解",
  description: "在日华人企业主可申请的6种日本政府补助金详细说明：省力化补助金、AI导入补助金、员工转正助成金、员工培训助成金、东京空调省能补助、代理合作。",
};

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">志成コンサル</Link>
      <div className="nav-links">
        <Link href="/subsidies" className="nav-link active">补助金种类</Link>
        <Link href="/service" className="nav-link">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="btn-primary">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const subsidies = [
  {
    icon: "🤖",
    name: "省力化补助金（一般型）",
    tag: "IoT · 机器人 · DX",
    amount: "最高1,500万円",
    rate: "补助率最大50%",
    target: "中小企业、小规模事业者、个人事业主，业种无限制",
    desc: "人手不足企业导入IoT设备、机器人、DX系统的费用，由中小企業庁补贴最高50%。6〜20人企业最高1,500万円，5人以下最高750万円。",
    items: ["收银系统（POS）", "库存管理系统", "顾客管理AI", "自动化生产设备", "排班管理系统", "机器人·IoT设备", "DX系统构建费"],
    note: "申请前需先取得GビズIDプライム账号（需数周），请提前准备。",
    url: "https://shoryokuka.smrj.go.jp/",
  },
  {
    icon: "🧠",
    name: "AI导入补助金（IT导入补助金2025 AI枠）",
    tag: "AI · 软件 · 云服务",
    amount: "最高350万円",
    rate: "补助率1/2〜2/3",
    target: "中小企业、个人事业主，赤字企业·新设企业也可申请",
    desc: "2025年度扩充版，专门支持中小企业导入AI工具和数字化服务。软件+云服务费用最高获补350万円，无从业规模限制。",
    items: ["AI营业·营销工具", "AI顾客管理（CRM）", "AI库存管理系统", "AI会计软件（freee等）", "聊天机器人", "AI数据分析工具", "自动翻译工具", "云服务费（最长2年）"],
    note: "需通过已注册的IT导入支援事業者申请，交付决定前不可提前签合同。",
    url: "https://it-shien.smrj.go.jp/2025/",
  },
  {
    icon: "👔",
    name: "员工转正助成金（キャリアアップ助成金 正社員化コース）",
    tag: "兼职→正社员 · 厚生劳动省",
    amount: "最高80万円/人",
    rate: "政府直接支给，企业无需垫付",
    target: "有雇用保险加入、就业规定中有转正制度规定的企业",
    desc: "将兼职、合同社员转为正社员，每人最高获得80万円政府助成金。在日华人餐饮、美容、零售业最常用。",
    items: ["有期→正社员：最高80万円/人（重点对象）", "无期→正社员：最高40万円/人", "可同时与培训助成金并用", "转正后6个月薪资需提升3%以上"],
    note: "必须在转换前提交キャリアアップ計画書，转换后才申请。顺序错误则不受理。",
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html",
  },
  {
    icon: "📚",
    name: "员工培训助成金（人材開発支援助成金）",
    tag: "AI研修 · 培训费补贴",
    amount: "培训费最高75%补贴",
    rate: "＋每人每小时最高960円工资补贴",
    target: "有雇用保险加入的事业所，个人事业主也可申请",
    desc: "企业为员工开展职业培训时，最高补贴75%培训费用及培训期间工资。AI营销/运营/数据分析研修均在对象范围内。",
    items: ["AI营业研修", "AI运营自动化研修", "AI数据分析研修", "DX数字化转型研修", "一般职业技能培训（OJT可）"],
    note: "培训实施计划须在培训开始1个月前提前申报，事后申报无效。与转正助成金同时申请效果最大化。",
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
  },
  {
    icon: "❄️",
    name: "东京都 空调省能更新补助",
    tag: "东京限定 · 绿色能源",
    amount: "补助比例极高",
    rate: "自费极少，部分情况几乎全额覆盖",
    target: "东京都内事业者（法人·个人事业主），餐饮、民宿、补习班、办公室等",
    desc: "东京都为实现2030碳中和目标推出的省能设备更新补助。将旧空调更换为高效省能型，旧机回收+新机安装费用大部分由都政府承担。",
    items: ["业务用空调（天花板嵌入式·壁挂式等）", "旧机回收费", "新机设备费", "安装工事费"],
    note: "仅限东京都事业者。年度预算有限，额满即止。交付决定前不可开工。须使用认定施工业者。",
    url: "https://www.syoenesaiene-pf.metro.tokyo.lg.jp/",
  },
  {
    icon: "🤝",
    name: "代理合作（パートナー制度）",
    tag: "介绍报酬60%分成",
    amount: "介绍报酬60%",
    rate: "零加盟费，零风险",
    target: "在日华人企业法人、税务·行政·经营顾问、个人事业主",
    desc: "已有客户资源？将您的客户推荐给志成コンサル，我们处理全部申请手续，您获得60%的成功报酬分成，无需支付任何加盟费。",
    items: ["无需自己处理申请手续", "分成比例60%（业界最高水平）", "零加盟费", "适合税务士、行政书士、经营顾问等专业人士"],
    note: "联系我们了解合作详情，初次咨询完全免费。",
    url: "",
  },
];

export default function SubsidiesPage() {
  return (
    <main>
      <Nav />
      <section className="section-light" style={{padding:"48px 24px"}}>
        <div style={{maxWidth:760, margin:"0 auto", textAlign:"center"}}>
          <h1 style={{fontSize:36, fontWeight:300, color:"var(--heading)", letterSpacing:"-0.5px", marginBottom:12}}>在日华人可申请的补助金</h1>
          <p style={{color:"var(--body)", fontSize:16}}>6种主要补助金，覆盖省力化·AI·人才·省能各类需求</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner" style={{maxWidth:900}}>
          {subsidies.map((s, i) => (
            <div key={i} className="subsidy-card">
              <div className="subsidy-header">
                <div className="subsidy-icon">{s.icon}</div>
                <div style={{flex:1, minWidth:240}}>
                  <div style={{display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:8}}>
                    <h2 style={{fontSize:20, fontWeight:500, color:"var(--heading)"}}>{s.name}</h2>
                    <span className="card-tag">{s.tag}</span>
                  </div>
                  <div className="subsidy-amounts">
                    <div><div className="label" style={{fontSize:11, color:"var(--body)"}}>最高补助额</div><div className="val" style={{fontSize:20, fontWeight:300, color:"var(--primary)"}}>{s.amount}</div></div>
                    <div><div className="label" style={{fontSize:11, color:"var(--body)"}}>补助比例/形式</div><div className="val" style={{fontSize:14, fontWeight:500, color:"var(--label)"}}>{s.rate}</div></div>
                  </div>
                  <p style={{fontSize:13, color:"var(--label)", marginBottom:12, lineHeight:1.7}}><strong>适用对象：</strong>{s.target}</p>
                  <p style={{fontSize:14, color:"var(--body)", marginBottom:14, lineHeight:1.75}}>{s.desc}</p>
                  <div className="tags">
                    {s.items.map((item, j) => <span key={j} className="tag">{item}</span>)}
                  </div>
                  {s.note && (
                    <div style={{marginTop:16, padding:"10px 14px", background:"rgba(234,34,97,0.05)", border:"1px solid rgba(234,34,97,0.15)", borderRadius:4, fontSize:13, color:"var(--label)", lineHeight:1.6}}>
                      ⚠️ {s.note}
                    </div>
                  )}
                  {s.url && (
                    <div style={{marginTop:14}}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" style={{color:"var(--primary)", fontSize:13, fontWeight:500, textDecoration:"none"}}>官方详细说明 →</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="section-inner">
          <div className="cta-block dark" style={{maxWidth:560, margin:"0 auto"}}>
            <h2>不确定能申请哪个？</h2>
            <p>3分钟免费测试，我们为您精准匹配最合适的补助金方案</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn-gold">开始免费自测 →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
