import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "在日华人补助金知识库｜省力化·AI导入·转正助成金最新攻略",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金、东京空调补助金等最新申请攻略与政策解读，行政书士·税理士团队原创，全程中文。",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="知识库 · Knowledge Base"
        title={<>补助金<span style={{ color: 'var(--gold)' }}>申请资讯</span></>}
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
            <div className="ed-rows" style={{ background: 'var(--surface)', padding: '0 32px' }}>
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  prefetch={false}
                  className="ed-row"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ fontSize: 12.5, color: "var(--muted)", fontVariantNumeric: 'tabular-nums' }}>{post.date}</span>
                  <div>
                    <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.5 }}>{post.title}</div>
                    <p style={{ fontSize: 13.5, color: "var(--body)", lineHeight: 1.7, maxWidth: '72ch' }}>{(post.excerpt || "").slice(0, 100)}...</p>
                  </div>
                  <span style={{ color: "var(--brand)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        title={<>想了解更多？<br /><span style={{ color: 'var(--gold-bright)' }}>免费咨询顾问</span></>}
      />

      <Footer />
    </main>
  );
}
