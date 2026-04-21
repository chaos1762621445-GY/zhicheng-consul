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

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

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

      <div className="article-wrap">
        <div className="article-header">
          <Link href="/blog" className="article-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            返回知识库
          </Link>
          <div className="article-date">{post.date}</div>
          <h1 className="article-title">{post.title}</h1>
          {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
        </div>

        <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div style={{ margin: "64px 0", background: "var(--navy)", borderRadius: "var(--r-lg)", padding: "40px", maxWidth: 760 }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
            想了解自己能申请哪些补助金？
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 24, lineHeight: 1.7 }}>
            3分钟免费自测，志成コンサル专业团队为您精准匹配方案，无成功不收费
          </p>
          <Link href="/contact" className="btn-gold">
            免费测试我的资格 <IconArrow />
          </Link>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 80 }}>
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
