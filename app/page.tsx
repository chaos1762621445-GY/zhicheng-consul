import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
    <circle cx="9" cy="15" r="1" fill="currentColor"/>
    <circle cx="15" cy="15" r="1" fill="currentColor"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconStore = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <path d="M2 12h20"/>
  </svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);
const IconScale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M3 15l6 4H3zM21 15l-6 4h6z"/>
  </svg>
);
const IconTrendUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.71a16 16 0 0 0 7.34 7.34l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

// ─── Nav Component ─────────────────────────────────────────────────────────
const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <img src="/logo.png" alt="志成コンサル" style={{height:40}} />
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

// ─── Footer Component ───────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="志成コンサル" style={{height:40, filter:"brightness(10)"}} />
        </div>
        <p className="footer-tagline">
          专为在日华人企业主提供日本政府补助金申请代办服务。
          行政书士·社労士·税理士·中小企業診断士联合专业团队，全程中文无障碍。
        </p>
      </div>
      <div className="footer-nav">
        <h4>快速导航</h4>
        <div className="footer-nav-links">
          <Link href="/subsidies" className="footer-nav-link">补助金种类</Link>
          <Link href="/service" className="footer-nav-link">服务流程</Link>
          <Link href="/blog" className="footer-nav-link">知识库</Link>
          <Link href="/contact" className="footer-nav-link">免费咨询</Link>
        </div>
      </div>
      <div className="footer-contact-col">
        <h4>联系我们</h4>
        <div className="footer-contact-row">
          <strong>微信：</strong>pr2024188
        </div>
        <div className="footer-contact-row">
          <strong>电话：</strong>03-6265-9756
        </div>
        <div className="footer-contact-row">
          <strong>邮箱：</strong>knakano.sekiyoshi@gmail.com
        </div>
        <div className="footer-contact-row" style={{flexDirection:"column", gap:4}}>
          <strong>地址：</strong>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div className="footer-qr">
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:80,height:80,borderRadius:4}} />
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 株式会社志成コンサル. All rights reserved.</span>
      <span style={{color:"rgba(255,255,255,0.25)"}}>行政書士・社労士・税理士・中小企業診断士</span>
    </div>
  </footer>
);

// ─── Page Component ─────────────────────────────────────────────────────────
export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  const services = [
    {
      icon: <IconDoc />,
      name: "省力化補助金",
      amount: "最大1,500万円",
      rate: "補助率 1/2〜2/3",
      desc: "機械設備・ITシステム導入による生産性向上を強力支援。製造業・サービス業問わず申請可能。",
    },
    {
      icon: <IconRobot />,
      name: "AI・IT導入補助金",
      amount: "最大450万円",
      rate: "補助率 最大2/3",
      desc: "AIシステム・業務ソフト導入費を最大2/3補助。インボイス対応ITツールも対象。",
    },
    {
      icon: <IconUsers />,
      name: "キャリアアップ助成金",
      amount: "最大80万円/人",
      rate: "正社員転換支援",
      desc: "非正規社員の正規転換に対して一人当たり最大80万円。継続的な人材確保に。",
    },
    {
      icon: <IconStore />,
      name: "小規模事業者持続化補助金",
      amount: "最大250万円",
      rate: "補助率 2/3",
      desc: "販路開拓・マーケティング・HP制作等に活用可能。個人事業主も申請対象。",
    },
    {
      icon: <IconBriefcase />,
      name: "事業再構築補助金",
      amount: "最大7,000万円",
      rate: "補助率 1/2〜2/3",
      desc: "新事業展開・業態転換を大規模支援。売上減少企業の事業変革に最適。",
    },
    {
      icon: <IconTrendUp />,
      name: "ものづくり補助金",
      amount: "最大4,000万円",
      rate: "補助率 1/2〜2/3",
      desc: "革新的サービス開発・試作品開発・生産プロセス改善を強力バックアップ。",
    },
  ];

  const whyUs = [
    { title: "全程中文无障碍", desc: "从初次咨询到最终审批，全程中文对接，语言障碍由我们完全承担。" },
    { title: "无成功不收费", desc: "申请失败则无需支付任何费用，彻底消除您的财务风险。" },
    { title: "四士联合专业团队", desc: "行政书士·社労士·税理士·中小企業診断士四大专业资质联合，确保申请质量。" },
    { title: "实绩3000+案例支撑", desc: "累计成功案例超过3000件，获批总额超过8.5亿日元，实绩可靠。" },
  ];

  const steps = [
    { step: "STEP 01", title: "免费咨询", desc: "通过微信或电话联系我们，3分钟快速了解您的基本情况。" },
    { step: "STEP 02", title: "补助金诊断", desc: "专业顾问根据您的业种・规模，匹配最适合的补助金种类。" },
    { step: "STEP 03", title: "申请方案制定", desc: "制定详细申请计划，确认申请要件与必要资料清单。" },
    { step: "STEP 04", title: "资料收集・作成", desc: "专业团队协助收集、整理、翻译所有必要申请文件。" },
    { step: "STEP 05", title: "提交申请", desc: "由持牌专业人员代为提交申请，确保格式合规、按时递交。" },
    { step: "STEP 06", title: "审查对应・交付", desc: "全程跟踪审查进度，获批后协助完成后续手续与资金交付。" },
  ];

  const credentials = [
    {
      icon: <IconDoc />,
      name: "行政書士",
      desc: "補助金申請書類作成・許認可手続きの専門家",
    },
    {
      icon: <IconUsers />,
      name: "社会保険労務士",
      desc: "雇用関係助成金・労務管理の専門家",
    },
    {
      icon: <IconScale />,
      name: "税理士",
      desc: "財務・会計・税務申告の専門家",
    },
    {
      icon: <IconAward />,
      name: "中小企業診断士",
      desc: "経営戦略・事業計画策定の専門家",
    },
  ];

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">
              行政书士 · 社労士 · 税理士 · 中小企業診断士 联合
            </div>
            <h1>{"在日华人企业，\n政府补助金\n您申请了吗？"}</h1>
            <p className="hero-sub">专业四士联合团队，全程中文，无成功不收费</p>
            <div className="hero-actions">
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
            <div className="hero-trust">
              {["成功申请3000+案例实绩", "申请失败零费用承诺", "当日回复，中文全程对接"].map((t, i) => (
                <div key={i} className="hero-trust-item">
                  <IconCheck />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-title">主要対応補助金一覧</div>
            {[
              { icon: <IconDoc />, name: "省力化補助金", amount: "最大1,500万円" },
              { icon: <IconRobot />, name: "AI・IT導入補助金", amount: "最大450万円" },
              { icon: <IconUsers />, name: "キャリアアップ助成金", amount: "最大80万円/人" },
              { icon: <IconStore />, name: "小規模持続化補助金", amount: "最大250万円" },
              { icon: <IconBriefcase />, name: "事業再構築補助金", amount: "最大7,000万円" },
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
      <section className="stats">
        <div className="stats-inner">
          {[
            { num: "3,000+", label: "成功申請案例" },
            { num: "¥8.5億+", label: "获批总额" },
            { num: "6種", label: "主要補助金対応" },
            { num: "0円", label: "不成功不收費" },
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
            <div className="section-label">SERVICES</div>
            <h2 className="section-title">主要対応補助金・助成金</h2>
            <p className="section-desc">中小企業・個人事業主の皆様に最適な補助金をご提案。申請から交付まで完全サポートいたします。</p>
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
            <div className="section-label">OUR EXPERTISE</div>
            <h2 className="section-title">行政书士 · 社労士 · 税理士 · 中小企業診断士 联合</h2>
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                alt="专业咨询服务"
                className="feature-split-img"
                crossOrigin="anonymous"
              />
            </div>
            <div>
              <div className="section-label">WHY CHOOSE US</div>
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
            <div className="section-label">PROCESS</div>
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
      {recentPosts.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <div className="section-head" style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end"}}>
              <div>
                <div className="section-label">INSIGHTS</div>
                <h2 className="section-title" style={{marginBottom:0}}>最新资讯</h2>
              </div>
              <Link href="/blog" className="link-arrow">
                查看全部 <IconChevron />
              </Link>
            </div>
            <div className="blog-grid">
              {recentPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-title">{post.title}</div>
                  <p className="blog-excerpt">{(post.excerpt || "").slice(0, 80)}...</p>
                  <div className="blog-more">阅读全文 <IconChevron /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>立即测试您的补助金申请资格</h2>
          <p>3分钟问卷，专业顾问当日回复，完全免费，无任何购买义务</p>
          <Link href="/contact" className="btn-cta-outline">
            开始免费诊断
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
