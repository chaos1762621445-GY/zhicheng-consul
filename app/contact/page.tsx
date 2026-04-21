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

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="志成コンサル" style={{height:40, filter:"brightness(10)"}} />
        </div>
        <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
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
        <div className="footer-contact-row"><strong>微信：</strong>pr2024188</div>
        <div className="footer-contact-row"><strong>电话：</strong>03-6265-9756</div>
        <div className="footer-contact-row"><strong>邮箱：</strong>knakano.sekiyoshi@gmail.com</div>
        <div className="footer-contact-row" style={{flexDirection:"column",gap:4}}>
          <strong>地址：</strong>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div className="footer-qr">
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:80,height:80,borderRadius:4}} />
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 株式会社志成コンサル 保留所有权利。</span>
    </div>
  </footer>
);

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">免费咨询</div>
          <h1>免费补助金资格诊断</h1>
          <p>填写下方问卷，专业顾问当日为您匹配最适合的补助金方案，完全免费，无任何购买义务。</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">

          {/* Contact Info Cards */}
          <div style={{marginBottom:48}}>
            <div className="section-label" style={{marginBottom:20}}>联系方式</div>
            <div className="contact-info-grid">
              <div className="contact-card">
                <div className="contact-card-icon" style={{width:44,height:44,borderRadius:10,background:'rgba(83,58,253,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">微信 WeChat</div>
                  <div className="contact-card-value">pr2024188</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon" style={{width:44,height:44,borderRadius:10,background:'rgba(83,58,253,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.71a16 16 0 0 0 7.34 7.34l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">电话 Tel</div>
                  <div className="contact-card-value">03-6265-9756</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon" style={{width:44,height:44,borderRadius:10,background:'rgba(83,58,253,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">邮箱 Email</div>
                  <div className="contact-card-value" style={{fontSize:14}}>knakano.sekiyoshi@gmail.com</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon" style={{width:44,height:44,borderRadius:10,background:'rgba(83,58,253,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">地址 Address</div>
                  <div className="contact-card-value" style={{fontSize:13,lineHeight:1.5}}>
                    〒542-0082 大阪府大阪市中央区<br/>島之内1-13-3 おおきに東心斎橋ビル301号室
                  </div>
                </div>
              </div>
            </div>

            {/* WeChat QR Card */}
            <div className="contact-qr-card">
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:160, height:160, borderRadius:8, flexShrink:0}} />
              <div>
                <div style={{fontSize:18,fontWeight:700,color:"var(--navy)",marginBottom:8}}>扫码添加微信</div>
                <div style={{fontSize:15,color:"var(--text-2)",lineHeight:1.75,marginBottom:12}}>
                  添加微信 <strong>pr2024188</strong>，专业顾问将在当日（工作日）为您提供免费补助金诊断服务。
                </div>
                <div style={{fontSize:14,color:"var(--text-3)"}}>营业时间：周一〜周六 9:00〜18:00</div>
              </div>
            </div>
          </div>

          {/* Quiz iframe */}
          <div>
            <div className="section-label" style={{marginBottom:20}}>补助金资格自测</div>
            <div className="contact-iframe-wrap">
              <iframe
                src="/quiz.html"
                style={{ width: "100%", height: 680, border: "none", display: "block" }}
                title="补助金资格自测"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
