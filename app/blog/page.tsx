import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金知识库",
  description: "在日华人企业主补助金申请指南，最新政策解读，每天更新。",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">志成コンサル</Link>
          <div className="nav-links">
            <Link href="/subsidies" className="nav-link">补助金种类</Link>
            <Link href="/service" className="nav-link">服务流程</Link>
            <Link href="/blog" className="nav-link active">知识库</Link>
            <Link href="/contact" className="btn-primary">免费咨询</Link>
          </div>
        </div>
      </nav>

      <section className="section-light" style={{padding:"48px 24px", textAlign:"center"}}>
        <h1 style={{fontSize:36, fontWeight:300, color:"var(--heading)", letterSpacing:"-0.5px", marginBottom:12}}>补助金知识库</h1>
        <p style={{color:"var(--body)", fontSize:16}}>在日华人企业主最全补助金申请指南，每天更新最新政策</p>
      </section>

      <section className="section">
        <div className="section-inner" style={{maxWidth:720}}>
          {posts.length === 0 ? (
            <p style={{textAlign:"center", color:"var(--body)"}}>文章即将上线，敬请期待</p>
          ) : (
            <div className="blog-list">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="date">{post.date}</div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="read-more">阅读全文 →</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
