import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "知识库",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金等最新申请攻略",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <NavClient />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #533afd 0%, #312ea8 100%)", padding: "80px 0 72px" }}>
        <div className="page-wrap">
          <div className="label-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>知识库</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 16 }}>
            补助金申请资讯
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, maxWidth: 520 }}>
            最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 15, color: "#475569", marginBottom: 24 }}>暂无文章，敬请期待</div>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#533afd", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                联系我们咨询
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: "block", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px", textDecoration: "none", color: "#0f172a" }}
                >
                  <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>{post.date}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 12, lineHeight: 1.4 }}>{post.title}</div>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, marginBottom: 16 }}>{(post.excerpt || "").slice(0, 100)}...</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 600, color: "#533afd" }}>
                    阅读全文
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
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
