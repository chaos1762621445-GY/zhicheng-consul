import { getPost, getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, keywords: post.keywords };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>志成コンサル</Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>知识库</Link>
            <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "8px 20px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <Link href="/blog" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none", display: "inline-block", marginBottom: 32 }}>← 返回知识库</Link>
        <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>{post.date}</div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 24, lineHeight: 1.3 }}>{post.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div style={{ marginTop: 48, padding: 28, background: "#eff6ff", borderRadius: 12, border: "1px solid #bfdbfe" }}>
          <h3 style={{ fontSize: 18, marginBottom: 12, color: "#1e3a8a" }}>想了解自己能申请哪些补助金？</h3>
          <p style={{ fontSize: 14, color: "#374151", marginBottom: 20, lineHeight: 1.7 }}>3分钟免费自测，志成コンサル专业团队为您解答</p>
          <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "10px 24px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-block" }}>
            免费测试我的资格 →
          </Link>
        </div>
      </article>
    </main>
  );
}
