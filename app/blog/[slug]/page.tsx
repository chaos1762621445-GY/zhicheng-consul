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
          <Link href="/" className="nav-logo">
            <img src="/logo.png" alt="志成コンサル" style={{height:40}} />
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
          <Link href="/contact" className="btn-primary">
            免费测试我的资格
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 0 }}>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src="/logo.png" alt="志成コンサル" style={{height:40, filter:"brightness(10)"}} />
            </div>
            <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
          </div>
          <div className="footer-nav">
            <h4>快速导航</h4>
            <div className="footer-nav-links">
              <Link href="/subsidies" className="footer-nav-link">补助金种类</Link>
              <Link href="/service" className="footer-nav-link">服务流程</Link>
              <Link href="/blog" className="footer-nav-link">知识库</Link>
              <Link href="/contact" className="footer-nav-link">免费咨询</Link>
            </div>
          </div>
          <div className="footer-contact-col">
            <h4>联系我们</h4>
            <div className="footer-contact-row"><strong>微信：</strong>pr2024188</div>
            <div className="footer-contact-row"><strong>电话：</strong>03-6265-9756</div>
            <div className="footer-contact-row"><strong>邮箱：</strong>knakano.sekiyoshi@gmail.com</div>
            <div className="footer-contact-row" style={{flexDirection:"column",gap:4}}>
              <strong>地址：</strong>
              <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
            </div>
            <div className="footer-qr">
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:80,height:80,borderRadius:4}} />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 株式会社志成コンサル. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
