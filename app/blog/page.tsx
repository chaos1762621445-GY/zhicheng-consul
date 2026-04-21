import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "知识库",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金等最新申请攻略",
};

const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <NavClient />

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
              <div style={{ fontSize: 16, color: "var(--body)", marginBottom: 24 }}>暂无文章，敬请期待</div>
              <Link href="/contact" className="btn-primary">联系我们咨询</Link>
            </div>
          ) : (
            <div className="blog-list-grid">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{textDecoration:'none',color:'inherit',display:'block'}}>
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-title">{post.title}</div>
                  <p className="blog-excerpt">{(post.excerpt || "").slice(0, 100)}...</p>
                  <div className="blog-more">阅读全文 <IconChevron /></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
