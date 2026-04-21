import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免费咨询",
  description: "免费测试您的补助金申请资格——3分钟问卷，志成コンサル专业团队当日回复匹配方案",
};

const Nav = () => (
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
        <Link href="/subsidies" className="nav-link">补助金种类</Link>
        <Link href="/service" className="nav-link">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">免费咨询</div>
          <h1>测试您的补助金资格</h1>
          <p>填写下方问卷，我们将当日为您匹配最适合的补助金方案，完全免费</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="contact-layout">
            <div>
              <div className="contact-iframe-wrap">
                <iframe
                  src="/quiz.html"
                  style={{ width: "100%", height: 640, border: "none", display: "block" }}
                  title="补助金资格自测"
                />
              </div>
            </div>
            <div className="contact-info">
              <h3>全程中文无障碍服务</h3>
              <p>
                填写问卷后，我们的专业顾问将在当日（工作日）通过微信联系您，
                为您详细说明可申请的补助金种类、预估金额及申请流程。
                完全免费，无任何购买义务。
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-title">微信咨询</div>
                  <div className="contact-detail-value">pr2024188</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-title">营业时间</div>
                  <div className="contact-detail-value">周一〜周六 9:00〜18:00</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-title">对应地域</div>
                  <div className="contact-detail-value">日本全国（オンライン対応）</div>
                </div>
              </div>

              <div style={{ marginTop: 32, background: "var(--bg-2)", borderRadius: "var(--r-lg)", padding: "24px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>
                  服务承诺
                </div>
                {[
                  "无成功不收费，申请失败零费用",
                  "全程中文对接，语言障碍由我们承担",
                  "行政书士·税理士专业团队",
                  "当日回复，快速响应",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-2)", marginBottom: 10 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,color:"var(--blue)",flexShrink:0}}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">株式会社志成コンサル</div>
            <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
          </div>
          <div className="footer-contact">
            <h4>联系我们</h4>
            <div className="footer-contact-item">微信：<strong>pr2024188</strong></div>
            <div className="footer-contact-item">营业时间：周一至周六 9:00〜18:00</div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 株式会社志成コンサル. All rights reserved.</div>
      </footer>
    </main>
  );
}
