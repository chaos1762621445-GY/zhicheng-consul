import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金知识库",
  description: "在日华人企业主补助金申请指南，最新政策解读，每周更新。",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>志成コンサル</Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#1a56db", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>知识库</Link>
            <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "8px 20px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: "#f9fafb", padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>补助金知识库</h1>
          <p style={{ color: "#6b7280", fontSize: 16 }}>在日华人企业主最全补助金申请指南，每周更新最新政策</p>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#9ca3af" }}>文章即将上线，敬请期待</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 10 }}>{post.date}</div>
                    <h2 style={{ fontSize: 20, marginBottom: 10, color: "#111928" }}>{post.title}</h2>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{post.excerpt}</p>
                    <div style={{ marginTop: 16, color: "#1a56db", fontSize: 13, fontWeight: 600 }}>阅读全文 →</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
