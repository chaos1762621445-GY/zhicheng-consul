import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavClient from "./components/NavClient";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const credentials = [
  { emoji: "📋", name: "行政书士", role: "申请材料专家", desc: "负责补助金申请书类制作与各类行政许可手续，确保材料规范、提交准时。" },
  { emoji: "👷", name: "社会保险劳务士", role: "雇用关系专家", desc: "专精员工转正助成金、劳务管理合规，助力企业在规范用工中最大化补贴收益。" },
  { emoji: "📊", name: "税理士",     role: "财务税务专家", desc: "负责财务资料审查与税务申报，确保申请数据准确可信，提升获批可能性。" },
  { emoji: "🏢", name: "中小企业诊断士", role: "经营战略专家", desc: "制定事业计划书与经营战略，以专业的商业逻辑打动审查机关。" },
];

const reasons = [
  { icon: "💬", title: "全程中文，无语言障碍",   desc: "从初次咨询到资金到账，所有日语文件由我们的专业人员处理，您只需提供企业信息。" },
  { icon: "🛡️", title: "不获批不收费，零风险",   desc: "申请不成功无需支付任何费用，包括资料制作费与咨询费，风险由我们承担。" },
  { icon: "✅", title: "四类国家认证专家全程操办", desc: "行政书士、社劳士、税理士、经营诊断士分工协作，覆盖补助金申请全环节。" },
  { icon: "🏆", title: "3,000+ 真实成功案例",    desc: "累计服务超过 3,000 家在日华人企业，覆盖餐饮、IT、制造、美容等多个行业。" },
];

const steps = [
  { n: "01", title: "免费诊断",   desc: "微信联系，3 分钟说清企业情况，专家当日回复匹配方案。" },
  { n: "02", title: "方案制定",   desc: "从 6 种以上补助金中筛选最优组合，预估可获批金额。" },
  { n: "03", title: "资料整备",   desc: "专业团队代为收集、整理、翻译所有申请材料。" },
  { n: "04", title: "专业递交",   desc: "持牌专家代为提交，格式合规，审查期间进度定期汇报。" },
  { n: "05", title: "获批到账",   desc: "资金到账后按约定支付成功服务费，全程透明。" },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <main>
      <NavClient />
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {/* ── 专家团队 ── */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 52px' }}>
              <div className="eyebrow">四类持牌专家</div>
              <h2 className="h2" style={{ marginBottom: 12 }}>专业团队，你不用懂日语</h2>
              <p className="sub" style={{ margin: '0 auto' }}>国家认证资格持有者分工合作，从材料准备到递交审核，全程代办。</p>
            </div>
          </Reveal>
          <div className="grid-4">
            {credentials.map((c, i) => (
              <Reveal key={i} delay={(i % 4) as 0|1|2|3|4|5}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{c.emoji}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{c.role}</div>
                  <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--brand)', background: 'var(--brand-bg)', padding: '3px 10px', borderRadius: 100, marginBottom: 14 }}>{c.name}</div>
                  <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 为什么选我们 ── */}
      <section className="sec" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="max-md:grid-cols-1 max-md:gap-12">
            <Reveal direction="left">
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }} className="max-md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                  alt="专业团队"
                  style={{ width: '100%', height: 460, objectFit: 'cover' }}
                />
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="eyebrow">选择我们的理由</div>
              <h2 className="h2" style={{ marginBottom: 36 }}>与其他中介的本质区别</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className="icon-circle" style={{ fontSize: 20, flexShrink: 0 }}>{r.icon}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 5 }}>{r.title}</div>
                      <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 申请流程 ── */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: 520, marginBottom: 52 }}>
              <div className="eyebrow">申请流程</div>
              <h2 className="h2" style={{ marginBottom: 12 }}>五步完成全程代办</h2>
              <p className="sub">整个过程，您需要做的极少，主要是配合提供资料，其余全程由我们处理。</p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={(i % 5) as 0|1|2|3|4|5}>
                <div className="card" style={{ borderLeft: '3px solid var(--brand)' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--brand)', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 6, marginBottom: 16, letterSpacing: '.05em' }}>
                    STEP {s.n}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{s.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 最新文章 ── */}
      {posts.length > 0 && (
        <section className="sec" style={{ background: 'var(--surface)' }}>
          <div className="wrap">
            <Reveal>
              <div style={{ maxWidth: 520, marginBottom: 48 }}>
                <div className="eyebrow">知识库</div>
                <h2 className="h2" style={{ marginBottom: 12 }}>补助金政策深度解析</h2>
                <p className="sub">为在日华人企业主提供最新的补助金政策解读与申请指南。</p>
              </div>
            </Reveal>
            <div className="grid-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) as 0|1|2|3|4|5}>
                  <Link href={`/blog/${post.slug}`} style={{ display: 'block' }}>
                    <div className="card">
                      <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>{post.date}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 12 }}>{post.title}</div>
                      <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.7 }}>{post.excerpt?.slice(0, 80)}...</p>
                      <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: 'var(--brand)' }}>
                        阅读全文 <ArrowIcon />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/blog" className="btn btn-ghost">查看全部文章</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ position: 'relative', padding: '96px 0', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)', borderTop: '1px solid var(--line)' }}>
        <div className="hero-orb" style={{ width: 480, height: 480, background: 'rgba(30,64,175,0.08)', top: -140, right: -80 }} />
        <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -100, left: -60, filter: 'blur(70px)' }} />
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="eyebrow" style={{ margin: '0 auto 20px' }}>免费诊断</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              不确定能申请哪些？<br />
              <span style={{ color: 'var(--brand)' }}>免费诊断，当日回复</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              专家团队为您精准匹配最优补助金方案，完全免费，无任何购买义务。
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-fill">
                立即免费诊断
                <ArrowIcon />
              </Link>
              <Link href="/subsidies" className="btn btn-ghost">
                查看补助金种类
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
