import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1447CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16,flexShrink:0}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
    <circle cx="9" cy="15" r="1" fill="currentColor"/>
    <circle cx="15" cy="15" r="1" fill="currentColor"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5M17 17l-5 5-5-5M2 12l5-5-5 5 5 5M22 12l-5-5 5 5-5 5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);
const IconScale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M3 15l6 4H3zM21 15l-6 4h6z"/>
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

// ─── Nav ─────────────────────────────────────────────────────────────────────
const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/">
        <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block'}} />
      </Link>
      <div className="nav-links">
        <Link href="/subsidies" className="nav-link">补助金种类</Link>
        <Link href="/service" className="nav-link">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* 品牌列 */}
      <div>
        <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block'}} />
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
        {[
          {label:'微信', value:'pr2024188'},
          {label:'电话', value:'03-6265-9756'},
          {label:'邮箱', value:'knakano.sekiyoshi@gmail.com'},
        ].map(r => (
          <div key={r.label} className="footer-contact-row">
            <span className="footer-contact-label">{r.label}：</span>
            <span>{r.value}</span>
          </div>
        ))}
        <div className="footer-contact-row" style={{flexDirection:'column',gap:2}}>
          <span className="footer-contact-label">地址：</span>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div className="footer-qr-wrap">
          <div className="footer-qr-caption">微信扫码咨询</div>
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:200,height:200,borderRadius:6,display:'block'}} />
          <div style={{fontSize:12,color:'#6B7280',textAlign:'center',marginTop:8}}>微信号：pr2024188</div>
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
      name: "省力化补助金",
      amount: "最高1,500万円",
      rate: "补助率最高50%",
      desc: "导入DX系统、自动化设备实现降本增效。6〜20人企业最高1,500万円，5人以下最高750万円，整体上限1亿円。",
    },
    {
      icon: <IconRobot />,
      name: "AI导入补助金",
      amount: "最高350万円",
      rate: "无员工规模限制",
      desc: "AI软件采购、系统定制开发、部署调试费用均可申请。个人事业主、赤字企业均可，门槛宽松。",
    },
    {
      icon: <IconUsers />,
      name: "员工转正助成金",
      amount: "最高80万円/人",
      rate: "首次转正非新卒",
      desc: "将兼职或合同员工转为正社员。在职半年以上转正补助40万円/人，首次转正非新卒最高80万円/人。",
    },
    {
      icon: <IconGraduate />,
      name: "员工培训助成金",
      amount: "最高1亿円",
      rate: "补贴AI实战研修",
      desc: "同步转正申请，补贴资金翻倍。AI营销获客、运营自动化、数据分析等课程，每人百万级支持。",
    },
    {
      icon: <IconSnow />,
      name: "空调省能更新补助",
      amount: "最高1,000万円",
      rate: "东京最高1,000万円",
      desc: "旧空调以旧换新：东京政府补助2/3+我社补贴1/3=几乎零负担。大阪最高500万円，全国最高3亿円。",
    },
    {
      icon: <IconHandshake />,
      name: "代理合作",
      amount: "60% 分成",
      rate: "零加盟费，合规正规",
      desc: "将您的存量客户与我们对接，即可获得60%透明分成。周期短、回流稳，无需缴纳任何加盟费用。",
    },
  ];

  const credentials = [
    { icon: <IconDoc />, name: "行政书士", desc: "专业负责补助金申请书类制作及各类行政许可手续" },
    { icon: <IconUsers />, name: "社会保险劳务士", desc: "专业负责雇佣关系助成金申请及劳务管理" },
    { icon: <IconScale />, name: "税理士", desc: "专业负责财务会计及税务申报业务" },
    { icon: <IconAward />, name: "中小企业诊断士", desc: "专业负责经营战略制定及事业计划书撰写" },
  ];

  const whyUs = [
    { title: "全程中文无障碍", desc: "从初次咨询到最终审批，全程中文对接，语言障碍由我们完全承担。" },
    { title: "无成功不收费", desc: "申请失败则无需支付任何费用，彻底消除您的财务风险。" },
    { title: "四士联合专业团队", desc: "行政书士·社会保险劳务士·税理士·中小企业诊断士四大专业资质联合，确保申请质量。" },
    { title: "实绩3000+案例支撑", desc: "累计成功案例超过3000件，获批总额超过8.5亿日元，实绩可靠。" },
  ];

  const steps = [
    { step: "第一步", title: "免费咨询", desc: "通过微信或电话联系我们，3分钟快速了解您的基本情况。" },
    { step: "第二步", title: "补助金诊断", desc: "专业顾问根据您的业种、规模，匹配最适合的补助金种类。" },
    { step: "第三步", title: "申请方案制定", desc: "制定详细申请计划，确认申请要件与必要资料清单。" },
    { step: "第四步", title: "资料收集与整理", desc: "专业团队协助收集、整理、翻译所有必要申请文件。" },
    { step: "第五步", title: "提交申请", desc: "由持牌专业人员代为提交申请，确保格式合规、按时递交。" },
    { step: "第六步", title: "跟进审查与资金到账", desc: "全程跟踪审查进度，获批后协助完成后续手续与资金交付。" },
  ];

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section style={{background:'#FFFFFF', borderBottom:'1px solid #E5E7EB'}}>
        <div className="hero-inner">
          {/* 左侧 */}
          <div>
            <div className="hero-tag">
              行政书士 · 社会保险劳务士 · 税理士 · 中小企业诊断士
            </div>
            <h1 className="hero-h1">{`在日华人企业主\n政府补助金\n您申请了吗？`}</h1>
            <p className="hero-sub">
              专业四士联合团队，全程中文，无成功不收费。<br/>
              为在日华人中小企业精准匹配补助金，从申请到获批全程代办。
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                立即免费咨询
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/subsidies" className="btn-secondary">
                了解补助金种类
                <IconChevron />
              </Link>
            </div>
            <div className="hero-trust">
              {["成功申请3000+案例实绩", "申请失败零费用承诺", "当日回复，中文全程对接"].map((t, i) => (
                <div key={i} className="hero-trust-item">
                  <IconCheck />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 右侧面板 */}
          <div className="hero-panel">
            <div className="hero-panel-title">主要补助金一览</div>
            {[
              { icon: <IconDoc />, name: "省力化补助金", amount: "最高1,500万円" },
              { icon: <IconRobot />, name: "AI导入补助金", amount: "最高350万円" },
              { icon: <IconUsers />, name: "员工转正助成金", amount: "最高80万円/人" },
              { icon: <IconGraduate />, name: "员工培训助成金", amount: "最高1亿円" },
              { icon: <IconSnow />, name: "空调省能更新补助", amount: "最高1,000万円" },
            ].map((item, i) => (
              <div key={i} className="hero-panel-item">
                <div className="hero-panel-icon">{item.icon}</div>
                <span className="hero-panel-name">{item.name}</span>
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
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">服务项目</div>
            <h2 className="section-title">主要补助金与助成金</h2>
            <p className="section-desc">为在日华人中小企业和个人事业主精准匹配补助金，从申请到获批全程代办。</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
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
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">专业资质</div>
            <h2 className="section-title">四士联合专业团队</h2>
            <p className="section-desc">四大专业资质联合，为您提供全方位的补助金申请与经营支援服务。</p>
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
      <section className="section">
        <div className="section-inner">
          <div className="feature-split">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="专业顾问团队"
                style={{width:'100%', height:'480px', objectFit:'cover', borderRadius:'12px', display:'block'}}
                crossOrigin="anonymous"
              />
            </div>
            <div>
              <div className="section-label">选择我们的理由</div>
              <h2 className="section-title" style={{marginBottom:36}}>为什么选择志成コンサル？</h2>
              <div className="feature-list">
                {whyUs.map((item, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-num">{i + 1}</div>
                    <div className="feature-body">
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
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">申请流程</div>
            <h2 className="section-title">申请流程 — 6步全程代办</h2>
            <p className="section-desc">从初次咨询到资金到账，我们全程陪同，省心省力。</p>
          </div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <div key={i} className="process-item">
                <div className="process-circle">{i + 1}</div>
                <div className="process-body">
                  <div className="process-step-label">{s.step}</div>
                  <div className="process-step-title">{s.title}</div>
                  <p className="process-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">知识库</div>
            <h2 className="section-title">最新文章</h2>
            <p className="section-desc">深度解析日本政府补助金政策，为在日华人企业主提供实用指南。</p>
          </div>
          {recentPosts.length > 0 ? (
            <div className="blog-grid">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:'none'}}>
                  <div className="blog-card">
                    <div className="blog-date">{post.date}</div>
                    <div className="blog-title">{post.title}</div>
                    <p className="blog-excerpt">{post.excerpt?.slice(0, 80)}...</p>
                    <div className="blog-more">
                      阅读全文 <IconChevron />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{textAlign:'center',padding:'48px 0',color:'#6B7280',fontSize:15}}>
              文章加载中...
            </div>
          )}
          <div style={{textAlign:'center',marginTop:40}}>
            <Link href="/blog" className="btn-secondary">查看全部文章 <IconChevron /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div style={{maxWidth:640,margin:'0 auto',padding:'0 48px'}}>
          <h2 className="cta-title">立即获取免费补助金诊断</h2>
          <p className="cta-desc">
            专业顾问为您量身匹配最适合的补助金方案，全程中文无障碍。<br/>
            申请失败零费用，无风险咨询。
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn-primary">
              立即免费咨询
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/subsidies" className="btn-secondary">
              了解补助金种类
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
