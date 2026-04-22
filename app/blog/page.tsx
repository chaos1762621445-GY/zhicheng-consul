import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "知识库",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金等最新申请攻略",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="知识库 · Knowledge Base"
        title={<>补助金<span style={{ color: 'var(--brand)' }}>申请资讯</span></>}
        desc="最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会。"
      />

      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 15, color: "var(--body)", marginBottom: 24 }}>暂无文章，敬请期待</div>
              <Link href="/contact" className="btn btn-fill">联系我们咨询</Link>
            </div>
          ) : (
            <div className="grid-3">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div className="card-premium" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10, fontWeight: 600, letterSpacing: '.02em' }}>{post.date}</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 12, lineHeight: 1.45 }}>{post.title}</div>
                    <p style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{(post.excerpt || "").slice(0, 100)}...</p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 600, color: "var(--brand)" }}>
                      阅读全文
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        title={<>想了解更多？<br /><span style={{ color: 'var(--brand)' }}>免费咨询顾问</span></>}
      />

      <Footer />
    </main>
  );
}
