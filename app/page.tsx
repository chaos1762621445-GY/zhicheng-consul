import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavClient from "./components/NavClient";

// ─── SVG Icons (stroke #533afd, strokeWidth 1.8, fill none) ──────────────────

// Check icon (white for dark hero background)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,flexShrink:0}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

// Service icons 24px
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
    <circle cx="9" cy="15" r="1" fill="#533afd"/>
    <circle cx="15" cy="15" r="1" fill="#533afd"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5M17 17l-5 5-5-5M2 12l5-5-5 5 5 5M22 12l-5-5 5 5-5 5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);

// Credential icons 32px (light purple #b9b9f9)
const CIconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#b9b9f9" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const CIconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#b9b9f9" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const CIconScale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#b9b9f9" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M3 15l6 4H3zM21 15l-6 4h6z"/>
  </svg>
);
const CIconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#b9b9f9" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

// Panel icons (18px, white for glass panel)
const PIconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);
const PIconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8"/>
  </svg>
);
const PIconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
  </svg>
);
const PIconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const PIconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5M17 17l-5 5-5-5"/>
  </svg>
);

// Why Us feature icons 20px
const FIconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const FIconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const FIconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const FIconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <polyline points="8 21 12 17 16 21"/>
    <path d="M17 4H7l1 7c0 2.2 1.8 4 4 4s4-1.8 4-4l1-7z"/>
    <path d="M3 7h1a3 3 0 0 0 3-3M21 7h-1a3 3 0 0 1-3-3"/>
  </svg>
);

// ─── Nav ─────────────────────────────────────────────────────────────────────
const Nav = () => <NavClient />;

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* 品牌列 */}
      <div>
        <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block',filter:'brightness(10)'}} />
        <p className="footer-brand-desc">
          专为在日华人企业主提供日本政府补助金申请代办服务。
          行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。
        </p>
      </div>

      {/* 快速导航 */}
      <div>
        <div className="footer-col-title">快速导航</div>
        <div className="footer-links">
          {[
            {href:'/subsidies',label:'补助金种类'},
            {href:'/service',label:'服务流程'},
            {href:'/blog',label:'知识库'},
            {href:'/contact',label:'免费咨询'},
          ].map(l => (
            <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>
      </div>

      {/* 联系方式 */}
      <div>
        <div className="footer-col-title">联系我们</div>
        <div className="footer-contact-row">
          <strong className="footer-contact-label">微信：</strong>
          <span>pr2024188</span>
        </div>
        <div className="footer-contact-row">
          <strong className="footer-contact-label">电话：</strong>
          <span>03-6265-9756</span>
        </div>
        <div className="footer-contact-row">
          <strong className="footer-contact-label">邮箱：</strong>
          <span>knakano.sekiyoshi@gmail.com</span>
        </div>
        <div className="footer-contact-row" style={{flexDirection:'column',gap:2}}>
          <strong className="footer-contact-label">地址：</strong>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div style={{marginTop:20,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:6,padding:12,display:'inline-block'}}>
          <p style={{fontSize:11,color:'rgba(255,255,255,0.5)',textAlign:'center',marginBottom:8,fontWeight:400,letterSpacing:'0.5px',textTransform:'uppercase'}}>微信扫码</p>
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:160,height:160,display:'block',borderRadius:4,background:'#fff',padding:6}} />
        </div>
      </div>
    </div>

    <div className="footer-copy">
      <div className="footer-copy-inner">
        <span className="footer-copy-text">© 2025 株式会社志成コンサル 保留所有权利。</span>
        <span className="footer-copy-text">行政书士·社会保险劳务士·税理士·中小企业诊断士</span>
      </div>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  const services = [
    {
      icon: <IconDoc />,
      badge: "最高1亿円",
      name: "省力化补助金",
      amount: "最高1,500万円",
      rate: "补助率最高50%",
      desc: "导入DX系统、自动化设备实现降本增效。6〜20人企业最高1,500万円，5人以下最高750万円，整体上限1亿円。",
    },
    {
      icon: <IconRobot />,
      badge: "无员工规模限制",
      name: "AI导入补助金",
      amount: "最高350万円",
      rate: "个人事业主亦可申请",
      desc: "AI软件采购、系统定制开发、部署调试费用均可申请。个人事业主、赤字企业均可，门槛宽松。",
    },
    {
      icon: <IconUsers />,
      badge: "首次转正非新卒",
      name: "员工转正助成金",
      amount: "最高80万円/人",
      rate: "在职半年以上转正补助",
      desc: "将兼职或合同员工转为正社员。在职半年以上转正补助40万円/人，首次转正非新卒最高80万円/人。",
    },
    {
      icon: <IconGraduate />,
      badge: "AI实战研修补贴",
      name: "员工培训助成金",
      amount: "最高1亿円",
      rate: "同步转正申请翻倍",
      desc: "同步转正申请，补贴资金翻倍。AI营销获客、运营自动化、数据分析等课程，每人百万级支持。",
    },
    {
      icon: <IconSnow />,
      badge: "东京最高1,000万円",
      name: "空调省能更新补助",
      amount: "最高1,000万円",
      rate: "东京政府补助2/3",
      desc: "旧空调以旧换新：东京政府补助2/3+我社补贴1/3=几乎零负担。大阪最高500万円，全国最高3亿円。",
    },
    {
      icon: <IconHandshake />,
      badge: "零加盟费，合规正规",
      name: "代理合作",
      amount: "60% 分成",
      rate: "周期短、回流稳",
      desc: "将您的存量客户与我们对接，即可获得60%透明分成。周期短、回流稳，无需缴纳任何加盟费用。",
    },
  ];

  const credentials = [
    { icon: <CIconDoc />, name: "行政书士", desc: "专业负责补助金申请书类制作及各类行政许可手续" },
    { icon: <CIconUsers />, name: "社会保险劳务士", desc: "专业负责雇佣关系助成金申请及劳务管理" },
    { icon: <CIconScale />, name: "税理士", desc: "专业负责财务会计及税务申报业务" },
    { icon: <CIconAward />, name: "中小企业诊断士", desc: "专业负责经营战略制定及事业计划书撰写" },
  ];

  const whyUs = [
    { icon: <FIconGlobe />, title: "全程中文无障碍", desc: "从初次咨询到最终审批，全程中文对接，语言障碍由我们完全承担。" },
    { icon: <FIconShield />, title: "无成功不收费", desc: "申请失败则无需支付任何费用，彻底消除您的财务风险。" },
    { icon: <FIconStar />, title: "四士联合专业团队", desc: "行政书士·社会保险劳务士·税理士·中小企业诊断士四大专业资质联合，确保申请质量。" },
    { icon: <FIconTrophy />, title: "实绩3000+案例支撑", desc: "累计成功案例超过3000件，获批总额超过8.5亿日元，实绩可靠。" },
  ];

  const steps = [
    { step: "STEP 01", title: "免费咨询", desc: "通过微信或电话联系我们，3分钟快速了解您的基本情况。" },
    { step: "STEP 02", title: "补助金诊断", desc: "专业顾问根据您的业种、规模，匹配最适合的补助金种类。" },
    { step: "STEP 03", title: "申请方案制定", desc: "制定详细申请计划，确认申请要件与必要资料清单。" },
    { step: "STEP 04", title: "资料收集与整理", desc: "专业团队协助收集、整理、翻译所有必要申请文件。" },
    { step: "STEP 05", title: "提交申请", desc: "由持牌专业人员代为提交申请，确保格式合规、按时递交。" },
    { step: "STEP 06", title: "跟进审查与资金到账", desc: "全程跟踪审查进度，获批后协助完成后续手续与资金交付。" },
  ];

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-inner">
          {/* 左侧 */}
          <div>
            <div className="hero-badge fade-up">
              行政书士 · 社会保险劳务士 · 税理士 · 中小企业诊断士
            </div>
            <h1 className="hero-h1 fade-up delay-1">
              在日华人企业主{"\n"}政府补助金{"\n"}<em style={{fontStyle:'normal',background:'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>您申请了吗？</em>
            </h1>
            <p className="hero-sub fade-up delay-2">
              专业四士联合团队，全程中文，无成功不收费。<br/>
              为在日华人中小企业精准匹配补助金，从申请到获批全程代办。
            </p>
            <div className="hero-actions fade-up delay-3">
              <Link href="/contact" className="btn-primary">
                立即免费咨询
                <IconArrow />
              </Link>
              <Link href="/subsidies" className="btn-ghost">
                了解补助金种类
                <IconChevron />
              </Link>
            </div>
            <div className="hero-trust fade-up delay-3">
              {["成功申请3000+案例实绩", "申请失败零费用承诺", "当日回复，中文全程对接"].map((t, i) => (
                <div key={i} className="hero-trust-item">
                  <IconCheck />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 右侧面板 */}
          <div className="hero-panel fade-up delay-3">
            <div className="hero-panel-title">主要补助金一览</div>
            {[
              { icon: <PIconDoc />, name: "省力化补助金", amount: "最高1,500万円" },
              { icon: <PIconRobot />, name: "AI导入补助金", amount: "最高350万円" },
              { icon: <PIconUsers />, name: "员工转正助成金", amount: "最高80万円/人" },
              { icon: <PIconGraduate />, name: "员工培训助成金", amount: "最高1亿円" },
              { icon: <PIconSnow />, name: "空调省能更新补助", amount: "最高1,000万円" },
            ].map((item, i) => (
              <div key={i} className="hero-panel-item">
                <div className="hero-panel-left">
                  {item.icon}
                  <span className="hero-panel-name">{item.name}</span>
                </div>
                <span className="hero-panel-amount">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stats-inner">
          {[
            { num: "3,000+", label: "成功申请案例" },
            { num: "¥8.5億+", label: "累计获批总额" },
            { num: "6项", label: "主要补助金类型" },
            { num: "0円", label: "不成功不收费" },
          ].map((s, i) => (
            <div key={i} className={`stat-item fade-up`} style={{animationDelay:`${i*0.08}s`}}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{padding:'96px 0',background:'#ffffff'}}>
        <div className="section-inner">
          <div style={{maxWidth:600,marginBottom:56}}>
            <div className="section-label">服务项目</div>
            <h2 className="section-title">主要补助金与助成金</h2>
            <p className="section-desc">为在日华人中小企业和个人事业主精准匹配补助金，从申请到获批全程代办。</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card fade-up" style={{animationDelay:`${i*0.07}s`}}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge">{s.badge}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-amount">{s.amount}</div>
                <div className="service-rate">{s.rate}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="credentials-section">
        <div className="section-inner">
          <div style={{textAlign:'center',maxWidth:700,margin:'0 auto 48px'}}>
            <div className="section-label" style={{color:'rgba(255,255,255,0.5)'}}>专业资质</div>
            <h2 className="section-title" style={{color:'#ffffff'}}>四士联合专业团队</h2>
            <p className="section-desc" style={{color:'rgba(255,255,255,0.7)',margin:'0 auto'}}>
              行政书士·社会保险劳务士·税理士·中小企业诊断士，四大专业资质强强联合，为您的申请保驾护航。
            </p>
          </div>
          <div className="credentials-grid">
            {credentials.map((c, i) => (
              <div key={i} className="credential-card">
                <div className="credential-icon">{c.icon}</div>
                <div className="credential-name">{c.name}</div>
                <p className="credential-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{padding:'96px 0',background:'#ffffff'}}>
        <div className="section-inner">
          <div className="feature-split">
            <div>
              {/* 数据可视化卡片组（替换 Unsplash 图片） */}
              <div style={{
                background: 'linear-gradient(145deg, #0f1035 0%, #1c1e54 60%, #2d1b69 100%)',
                borderRadius: 12,
                padding: '36px 32px',
                boxShadow: 'var(--sh3)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 460,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                {/* BG glow */}
                <div style={{position:'absolute',top:'-60px',right:'-60px',width:280,height:280,background:'radial-gradient(circle,rgba(83,58,253,0.25) 0%,transparent 65%)',pointerEvents:'none'}} />
                <div style={{position:'absolute',bottom:'-40px',left:'-40px',width:200,height:200,background:'radial-gradient(circle,rgba(249,107,238,0.15) 0%,transparent 65%)',pointerEvents:'none'}} />

                {/* Header */}
                <div style={{position:'relative',zIndex:1}}>
                  <div style={{fontSize:11,fontWeight:400,color:'rgba(255,255,255,0.45)',textTransform:'uppercase',letterSpacing:'1.5px',marginBottom:6}}>
                    累计实绩数据
                  </div>
                  <div style={{fontSize:15,fontWeight:400,color:'rgba(255,255,255,0.85)'}}>
                    志成コンサル 核心指标
                  </div>
                </div>

                {/* 3 big stats */}
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,position:'relative',zIndex:1,marginTop:28}}>
                  <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:8,padding:'20px 18px'}}>
                    <div style={{fontSize:36,fontWeight:250,color:'#ffffff',letterSpacing:'-2px',lineHeight:1}}>3,000<span style={{fontSize:22,color:'rgba(255,255,255,0.6)'}}>+</span></div>
                    <div style={{fontSize:12,color:'rgba(255,255,255,0.5)',marginTop:8}}>成功申请案例</div>
                    <div style={{marginTop:12,height:3,background:'linear-gradient(90deg,#533afd,#a78bfa)',borderRadius:2}} />
                  </div>
                  <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:8,padding:'20px 18px'}}>
                    <div style={{fontSize:36,fontWeight:250,color:'#ffffff',letterSpacing:'-2px',lineHeight:1}}>8.5<span style={{fontSize:22,color:'rgba(255,255,255,0.6)'}}>億円+</span></div>
                    <div style={{fontSize:12,color:'rgba(255,255,255,0.5)',marginTop:8}}>累计获批总额</div>
                    <div style={{marginTop:12,height:3,background:'linear-gradient(90deg,#ea2261,#f96bee)',borderRadius:2}} />
                  </div>
                  <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:8,padding:'20px 18px',gridColumn:'1/-1'}}>
                    <div style={{display:'flex',alignItems:'baseline',gap:8}}>
                      <div style={{fontSize:52,fontWeight:250,color:'#ffffff',letterSpacing:'-3px',lineHeight:1}}>92<span style={{fontSize:28,color:'rgba(255,255,255,0.6)'}}>%</span></div>
                      <div style={{fontSize:13,color:'rgba(255,255,255,0.6)',lineHeight:1.4}}>申请通过率<br/><span style={{fontSize:11,color:'rgba(255,255,255,0.35)'}}>行业平均约65%</span></div>
                    </div>
                    {/* progress bar */}
                    <div style={{marginTop:14,background:'rgba(255,255,255,0.08)',borderRadius:4,height:6,overflow:'hidden'}}>
                      <div style={{width:'92%',height:'100%',background:'linear-gradient(90deg,#533afd,#60a5fa)',borderRadius:4}} />
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:4}}>
                      <span style={{fontSize:10,color:'rgba(255,255,255,0.3)'}}>0%</span>
                      <span style={{fontSize:10,color:'rgba(255,255,255,0.5)',fontWeight:500}}>92%</span>
                      <span style={{fontSize:10,color:'rgba(255,255,255,0.3)'}}>100%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom badge */}
                <div style={{position:'relative',zIndex:1,marginTop:16,display:'flex',gap:8}}>
                  {['行政书士','社会保険労務士','税理士','中小企業診断士'].map(t => (
                    <div key={t} style={{background:'rgba(83,58,253,0.2)',border:'1px solid rgba(83,58,253,0.4)',borderRadius:5,padding:'4px 8px',fontSize:10,color:'rgba(255,255,255,0.75)',whiteSpace:'nowrap'}}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="section-label">选择我们的理由</div>
              <h2 className="section-title">为什么选择志成コンサル？</h2>
              <div className="feature-list">
                {whyUs.map((item, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-icon-circle">
                      {item.icon}
                    </div>
                    <div>
                      <div className="feature-title">{item.title}</div>
                      <p className="feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{padding:'96px 0',background:'#ffffff'}}>
        <div className="section-inner">
          <div style={{maxWidth:520,marginBottom:56}}>
            <div className="section-label">申请流程</div>
            <h2 className="section-title">6步全程代办</h2>
            <p className="section-desc">从初次咨询到资金到账，我们全程陪伴，让申请变得简单。</p>
          </div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <div key={i} className="process-card fade-up" style={{animationDelay:`${i*0.07}s`}}>
                <div className="process-step-label">{s.step}</div>
                <div className="process-step-title">{s.title}</div>
                <p className="process-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="blog-section">
        <div className="section-inner">
          <div style={{maxWidth:560,marginBottom:56}}>
            <div className="section-label">知识库</div>
            <h2 className="section-title">最新文章</h2>
            <p className="section-desc">深度解析日本政府补助金政策，为在日华人企业主提供实用指南。</p>
          </div>
          {recentPosts.length > 0 ? (
            <div className="blog-grid">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:'none',color:'inherit'}}>
                  <div className="blog-card">
                    <div className="blog-date">{post.date}</div>
                    <div className="blog-title">{post.title}</div>
                    <p className="blog-excerpt">{post.excerpt?.slice(0, 80)}...</p>
                    <div className="blog-more">
                      阅读更多 <IconChevron />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{textAlign:'center',padding:'48px 0',color:'var(--body)',fontSize:15}}>
              文章加载中...
            </div>
          )}
          <div style={{textAlign:'center',marginTop:40}}>
            <Link href="/blog" className="btn-ghost">查看全部文章 <IconChevron /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">立即获取免费补助金诊断</h2>
          <p className="cta-desc">
            专业顾问为您量身匹配最适合的补助金方案，全程中文无障碍
          </p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn-cta-white">
              立即免费咨询
              <IconArrow />
            </Link>
            <Link href="/subsidies" className="btn-cta-ghost">
              了解补助金种类
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
