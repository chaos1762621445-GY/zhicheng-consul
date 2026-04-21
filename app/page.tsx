import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const Nav = ({ active }: { active?: string }) => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </span>
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
    <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5-5-5 5M17 17l-5 5-5-5"/>
    <line x1="2" y1="12" x2="22" y2="12"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
  { icon: <IconRobot />, tag: "最高1,500万円", name: "省力化补助金", amount: "1,500万円", rate: "补助率最大 50%", desc: "IoT、机器人、DX系统导入费用补贴。收银系统、库存管理、顾客AI等均在对象范围内。" },
  { icon: <IconBrain />, tag: "最高350万円", name: "AI导入补助金", amount: "350万円", rate: "补助率 1/2〜2/3", desc: "AI营销工具、CRM、云服务。赤字或新设企业均可申请，无从业规模限制。" },
  { icon: <IconUsers />, tag: "最高80万円/人", name: "员工转正助成金", amount: "80万円/人", rate: "政府直接支给", desc: "兼职、合同社员转为正社员，每人最高80万円，无需企业垫付，厚生劳动省直付。" },
  { icon: <IconGraduate />, tag: "培训费最高75%", name: "员工培训助成金", amount: "经费75%", rate: "＋960円/小时补贴", desc: "AI营销/运营/数据分析研修，培训费政府承担大部分。可与转正助成金同时申请。" },
  { icon: <IconSnow />, tag: "东京限定", name: "空调省能更新补助", amount: "自费极少", rate: "东京都环境局", desc: "旧空调更换高效省能型，补助比例极高。餐饮、民宿、办公室均适用，东京经营者必申。" },
  { icon: <IconHandshake />, tag: "介绍报酬60%", name: "代理合作", amount: "60% 分成", rate: "零加盟费", desc: "推荐客户给我们，全程由我们处理申请，您获得60%成功报酬分成，零前期投入。" },
];

const processSteps = [
  { num: "01", label: "初步评估", title: "免费资格诊断", desc: "填写3分钟问卷，我们当日回复适合您的补助金种类及预估金额。" },
  { num: "02", label: "方案确认", title: "签订委托协议", desc: "确认方案后签订委托合同，明确补助率与服务范围，零风险启动。" },
  { num: "03", label: "材料准备", title: "收集企业资料", desc: "我们提供清单指引，您只需准备基础资料，所有日文材料由我们撰写。" },
  { num: "04", label: "提交申请", title: "专业团队提交", desc: "行政书士审核材料后，通过官方渠道提交申请，确保合规无误。" },
  { num: "05", label: "审核跟进", title: "全程跟踪进度", desc: "定期向您汇报审核进展，如有补充要求第一时间响应处理。" },
  { num: "06", label: "获批入账", title: "补助金到账", desc: "获批后指导实绩报告提交，补助金直接划入您的企业账户。" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-tag">
            <svg viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
            专为在日华人企业主服务
          </div>
          <h1>
            让日本政府<br />
            <em>为你的企业出资</em>
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
      </section>

      {/* STATS */}
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
            <div className="stat-num">6种</div>
            <div className="stat-label">主要补助金类型</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0円</div>
            <div className="stat-label">申请未成功时的收费</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
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
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/subsidies" className="link-arrow">
              查看各补助金详细条件 <IconChevron />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="feature-split">
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="专业咨询团队"
                className="feature-split-img"
              />
            </div>
            <div>
              <div className="section-label">服务优势</div>
              <h2 className="section-title" style={{ marginBottom: 40 }}>为什么选择<br />志成コンサル</h2>
              <div className="feature-list">
                {[
                  { title: "全程中文沟通", desc: "母语对接，所有日文材料由我们处理。您只需提供基础信息，无需担心语言障碍，从初次咨询到获批全程中文。" },
                  { title: "无成功不收费", desc: "申请未通过则零收费。我们的利益与您完全一致——只有在您成功获批时才收取服务费用，真正零风险。" },
                  { title: "行政书士·税理士联合", desc: "专业持证团队操刀，材料合规准确，申请成功率业界领先，经得起官方审查，避免因材料问题被驳回。" },
                  { title: "一站式全程包办", desc: "从资格判断、材料准备、申请提交到实绩报告，全程包办。您只需专注经营，申请事务完全交给我们。" },
                ].map((f, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="feature-body">
                      <div className="feature-title">{f.title}</div>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">申请流程</div>
            <h2 className="section-title">从咨询到获批，全程6步</h2>
            <p className="section-desc">透明、高效的标准化流程，平均40天内完成申请提交</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="process-item">
                <div className="process-circle">{step.num}</div>
                <div className="process-body">
                  <div className="process-step-label">{step.label}</div>
                  <div className="process-step-title">{step.title}</div>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/service" className="link-arrow">
              了解详细申请流程 <IconChevron />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      {recentPosts.length > 0 && (
        <section className="section-alt">
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
              <Link href="/blog" className="link-arrow">
                查看全部文章 <IconChevron />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>立即了解您的补助金资格</h2>
          <p>3分钟问卷，精准匹配适合您企业的补助金方案，完全免费，无任何义务</p>
          <Link href="/contact" className="btn-gold">开始免费自测 <IconArrow /></Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">株式会社志成コンサル</div>
            <p className="footer-tagline">
              专为在日华人企业主提供日本政府补助金申请代办服务。<br />
              全程中文，专业团队，无成功不收费。
            </p>
          </div>
          <div className="footer-contact">
            <h4>联系我们</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16,flexShrink:0}}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              微信：<strong>pr2024188</strong>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16,flexShrink:0}}>
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              营业时间：周一至周六 9:00〜18:00
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16,flexShrink:0}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              日本全国対応（オンライン）
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 株式会社志成コンサル. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
