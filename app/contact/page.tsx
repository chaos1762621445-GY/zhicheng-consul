import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免费咨询 & 补助金自测",
  description: "免费测试您的补助金申请资格，3分钟了解可获得多少补助金。微信：pr2024188",
};

export default function ContactPage() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">志成コンサル</Link>
          <div className="nav-links">
            <Link href="/subsidies" className="nav-link">补助金种类</Link>
            <Link href="/service" className="nav-link">服务流程</Link>
            <Link href="/blog" className="nav-link">知识库</Link>
            <Link href="/contact" className="btn-primary">免费咨询</Link>
          </div>
        </div>
      </nav>

      <section className="section-light" style={{padding:"48px 24px", textAlign:"center"}}>
        <h1 style={{fontSize:36, fontWeight:300, color:"var(--heading)", letterSpacing:"-0.5px", marginBottom:12}}>免费补助金资格测试</h1>
        <p style={{color:"var(--body)", fontSize:16}}>3分钟问卷，精准了解您能申请哪些补助金</p>
      </section>

      {/* 留资自测工具 */}
      <iframe
        src="/quiz.html"
        style={{width:"100%", border:"none", minHeight:"900px", display:"block"}}
        title="补助金资格自测"
      />

      <section className="section-light" style={{padding:"40px 24px"}}>
        <div style={{maxWidth:480, margin:"0 auto", textAlign:"center"}}>
          <h2 style={{fontSize:20, fontWeight:500, color:"var(--heading)", marginBottom:12}}>或者直接联系我们</h2>
          <p style={{color:"var(--body)", fontSize:14, lineHeight:1.75}}>
            微信：<strong style={{color:"var(--heading)"}}>pr2024188</strong><br />
            添加微信，发送「补助金」即可获得专属顾问服务，初次咨询完全免费
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
