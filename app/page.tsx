import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const Nav = ({ active }: { active?: string }) => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-dot" />
        志成コンサル
      </Link>
      <div className="nav-links">
        <Link href="/subsidies" className={`nav-link ${active === 'subsidies' ? 'active' : ''}`}>补助金种类</Link>
        <Link href="/service" className={`nav-link ${active === 'service' ? 'active' : ''}`}>服务流程</Link>
        <Link href="/blog" className={`nav-link ${active === 'blog' ? 'active' : ''}`}>知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 2v4M8 11V9a4 4 0 018 0v2"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/>
  </svg>
);
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.16z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.16z"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5-5-5 5M17 17l-5 5-5-5M2 12l5-5-5 5 5 5M22 12l-5-5 5 5-5 5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const services = [
  { icon: <IconRobot />, tag: "最高1,500万円", name: "省力化补助金", amount: "1,500万円", rate: "补助率最大 50%", desc: "IoT·机器人·DX系统导入费用补贴。收银系统、库存管理、顾客AI等均在对象范围内。" },
  { icon: <IconBrain />, tag: "最高350万円", name: "AI导入补助金", amount: "350万円", rate: "补助率 1/2〜2/3", desc: "AI营销工具、CRM、云服务。赤字·新设企业均可申请，无从业规模限制。" },
  { icon: <IconUsers />, tag: "最高80万円/人", name: "员工转正助成金", amount: "80万円/人", rate: "政府直接支给", desc: "兼职·合同社员转为正社员，每人最高80万円，无需企业垫付。" },
  { icon: <IconGraduate />, tag: "培训费最高75%", name: "员工培训助成金", amount: "经费75%", rate: "＋960円/小时补贴", desc: "AI营销/运营/数据分析研修，培训费政府承担大部分。可与转正助成金同时申请。" },
  { icon: <IconSnow />, tag: "东京限定", name: "空调省能更新补助", amount: "自费极少", rate: "东京都环境局", desc: "旧空调更换高效省能型，补助比例极高。餐饮、民宿、办公室均适用。" },
  { icon: <IconHandshake />, tag: "介绍报酬60%", name: "代理合作", amount: "60% 分成", rate: "零加盟费", desc: "推荐客户给我们，全程由我们处理申请，您获得60%成功报酬分成。" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-fade" />
        <div className="hero-inner">
          <div>
            <div className="hero-tag">
              <svg viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
              专为在日华人企业主服务
            </div>
            <h1>
              让日本政府<br />
              <strong>为你的企业出资</strong>
            </h1>
            <p className="hero-sub">
              株式会社志成コンサル 专注补助金申请代办<br />
              6种主要补助金，最高1,500万円，全程中文，无成功不收费
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                免费测试补助金资格 <IconArrow />
              </Link>
              <Link href="/subsidies" className="btn-secondary">
                了解补助金种类
              </Link>
            </div>
            <div className="hero-trust">
              {["全程中文沟通", "无成功不收费", "行政书士·税理士联合"].map(t => (
                <div key={t} className="hero-trust-item">
                  <IconCheck />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="hero-panel">
            <div className="hero-panel-title">可申请的补助金一览</div>
            {[
              { icon: <IconRobot />, name: "省力化补助金", sub: "IoT · 机器人 · DX", amount: "1,500万円", bg: "#EFF6FF" },
              { icon: <IconBrain />, name: "AI导入补助金", sub: "软件 · AI工具", amount: "350万円", bg: "#F0FDF4" },
              { icon: <IconUsers />, name: "员工转正助成金", sub: "厚生劳动省直接支给", amount: "80万円/人", bg: "#FFF7ED" },
              { icon: <IconGraduate />, name: "员工培训助成金", sub: "AI研修 · 技能培训", amount: "经费75%", bg: "#FDF4FF" },
              { icon: <IconSnow />, name: "空调省能补助", sub: "东京限定", amount: "自费极少", bg: "#F0F9FF" },
            ].map((s, i) => (
              <div key={i} className="subsidy-item">
                <div className="subsidy-item-left">
                  <div className="subsidy-dot" style={{ background: s.bg }}>
                    <span style={{ color: "#1B4FD8" }}>{s.icon}</span>
                  </div>
                  <div>
                    <div className="subsidy-name">{s.name}</div>
                    <div className="subsidy-sub">{s.sub}</div>
                  </div>
                </div>
                <div className="subsidy-amount">¥{s.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">成功申请案例</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">¥8.5億+</div>
            <div className="stat-label">累计获批补助金额</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0円</div>
            <div className="stat-label">申请未成功时的收费<br /><span style={{fontSize:12,color:'var(--text-3)'}}>真正零风险</span></div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">我们的服务</div>
            <h2 className="section-title">6种主要补助金，全程代办</h2>
            <p className="section-desc">覆盖省力化、AI导入、人才育成、省能改造等在日华人企业最常见的需求场景</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-tag">{s.tag}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-amount">¥{s.amount}</div>
                <div className="service-rate">{s.rate}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/subsidies" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--blue-3)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              查看各补助金详细条件 <IconChevron />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">服务优势</div>
            <h2 className="section-title">为什么选择志成コンサル</h2>
            <p className="section-desc">不只是代办，是真正理解在日华人经营困境的专业顾问团队</p>
          </div>
          <div className="feature-grid">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: "全程中文沟通", desc: "母语对接，所有日文材料由我们处理。您只需提供信息，无需担心语言障碍。" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "无成功不收费", desc: "申请未通过则零收费。我们的利益与您完全一致——我们只有在您成功时才收费。" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, title: "行政书士·税理士联合", desc: "专业持证团队操刀，材料合规准确，申请成功率业界领先，经得起审查。" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "一站式全程包办", desc: "从资格判断→材料准备→申请提交→实绩报告，全程包办，您专注经营即可。" },
            ].map((f, i) => (
              <div key={i} className="feature-cell">
                <div className="feature-icon-wrap">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      {recentPosts.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-label">知识库</div>
              <h2 className="section-title">最新补助金资讯</h2>
              <p className="section-desc">每天更新日本最新补助金政策解读，帮你第一时间掌握申请机会</p>
            </div>
            <div className="blog-grid">
              {recentPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-title">{post.title}</div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-more">阅读全文 <IconChevron /></div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--blue-3)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                查看全部文章 <IconChevron />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>立即了解您的补助金资格</h2>
          <p>3分钟问卷，精准匹配适合您企业的补助金方案，完全免费，无任何义务</p>
          <Link href="/contact" className="btn-gold">开始免费自测 <IconArrow /></Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">© 2025 株式会社志成コンサル. All rights reserved.</div>
          <div className="footer-wechat">微信咨询：<strong>pr2024188</strong></div>
        </div>
      </footer>
    </main>
  );
}
