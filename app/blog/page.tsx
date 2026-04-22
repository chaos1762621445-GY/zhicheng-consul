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
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(83,58,253,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(234,34,97,0.15)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
            知识库
          </div>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-light text-white tracking-[-0.5px] leading-[1.15] mb-4">
            补助金申请资讯
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.75] max-w-[560px]">
            最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会
          </p>
        </div>
      </div>

      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-base text-[#64748d] mb-6">暂无文章，敬请期待</div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#533afd] text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-[#4434d4] transition-colors">
                联系我们咨询
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-[#e5edf5] rounded-lg p-7 no-underline text-[#061b31] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-xs text-[#64748d] mb-2">{post.date}</div>
                  <div className="text-[17px] font-semibold text-[#061b31] mb-3 leading-snug">{post.title}</div>
                  <p className="text-sm text-[#64748d] leading-[1.8] mb-4">{(post.excerpt || "").slice(0, 100)}...</p>
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-[#533afd]">
                    阅读全文
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
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
