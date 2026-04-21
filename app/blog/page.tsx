import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "知识库",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金等最新申请攻略",
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
        <Link href="/blog" className="nav-link active">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">知识库</div>
          <h1>补助金申请资讯</h1>
          <p>最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 16, color: "var(--text-3)", marginBottom: 24 }}>暂无文章，敬请期待</div>
              <Link href="/contact" className="btn-primary">联系我们咨询</Link>
            </div>
          ) : (
            <div className="blog-list-grid">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-title">{post.title}</div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-more">阅读全文 <IconChevron /></div>
                </Link>
              ))}
            </div>
          )}
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
          </div>
        </div>
        <div className="footer-bottom">© 2025 株式会社志成コンサル. All rights reserved.</div>
      </footer>
    </main>
  );
}
