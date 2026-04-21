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

      <article className="article">
        <Link href="/blog" className="article-back">← 返回知识库</Link>
        <div style={{fontSize:12, color:"var(--body)", marginBottom:16}}>{post.date}</div>
        <h1>{post.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className="article-cta">
          <h3>想了解自己能申请哪些补助金？</h3>
          <p>3分钟免费自测，志成コンサル专业团队为您精准匹配方案，无成功不收费</p>
          <Link href="/contact" className="btn-primary">免费测试我的资格 →</Link>
        </div>
      </article>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
