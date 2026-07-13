import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavClient from "./components/NavClient";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import CtaSection from "./components/CtaSection";

// ── 专业线性 SVG 图标（品牌 teal，替代 emoji）──
const Icon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split('|').map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const ICONS = {
  chat: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z|M9 12l2 2 4-4",
  check: "M22 11.08V12a10 10 0 1 1-5.93-9.14|M22 4L12 14.01l-3-3",
  trophy: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6|M18 9h1.5a2.5 2.5 0 0 0 0-5H18|M4 22h16|M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22|M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22|M18 2H6v7a6 6 0 0 0 12 0V2z",
};

const credentials = [
  { name: "行政书士", role: "申请材料专家", desc: "负责补助金申请书类制作与各类行政许可手续，确保材料规范、提交准时。" },
  { name: "社会保险劳务士", role: "雇用关系专家", desc: "专精员工转正助成金、劳务管理合规，助力企业在规范用工中最大化补贴收益。" },
  { name: "税理士", role: "财务税务专家", desc: "负责财务资料审查与税务申报，确保申请数据准确可信，提升获批可能性。" },
  { name: "中小企业诊断士", role: "经营战略专家", desc: "制定事业计划书与经营战略，以专业的商业逻辑打动审查机关。" },
];

const reasons = [
  { icon: ICONS.chat, title: "全程中文，无语言障碍", desc: "从初次咨询到资金到账，所有日语文件由我们的专业人员处理，您只需提供企业信息。" },
  { icon: ICONS.shield, title: "不获批不收费，零风险", desc: "申请不成功无需支付任何费用，包括资料制作费与咨询费，风险由我们承担。" },
  { icon: ICONS.check, title: "四类国家认证专家全程操办", desc: "行政书士、社劳士、税理士、经营诊断士分工协作，覆盖补助金申请全环节。" },
  { icon: ICONS.trophy, title: "3,000+ 真实成功案例", desc: "累计服务超过 3,000 家在日华人企业，覆盖餐饮、IT、制造、美容等多个行业。" },
];

const steps = [
  { n: "01", title: "免费诊断", desc: "微信联系，3 分钟说清企业情况，专家当日回复匹配方案。" },
  { n: "02", title: "方案制定", desc: "从 6 种以上补助金中筛选最优组合，预估可获批金额。" },
  { n: "03", title: "资料整备", desc: "专业团队代为收集、整理、翻译所有申请材料。" },
  { n: "04", title: "专业递交", desc: "持牌专家代为提交，格式合规，审查期间进度定期汇报。" },
  { n: "05", title: "获批到账", desc: "资金到账后按约定支付成功服务费，全程透明。" },
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
      <ServicesSection />

      {/* ── 专家团队 — 深 teal 色块（色彩勇气节点） ── */}
      <section className="sec sec-dark">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="team-grid">
            <Reveal>
              <div className="team-sticky" style={{ position: 'sticky', top: 100, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <span className="ed-vert">専門家連携</span>
                <div style={{ maxWidth: 340 }}>
                  <h2 className="h2 ed-h" style={{ marginBottom: 16 }}>专业团队，<br />你不用懂日语</h2>
                  <p className="sub" style={{ fontSize: 15 }}>四类国家认证资格持有者分工合作，从材料准备到递交审核，全程代办。</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="ed-rows">
                {credentials.map((c, i) => (
                  <div key={i} className="ed-row">
                    <span className="ed-row-n">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                        <span className="serif" style={{ fontSize: 19, fontWeight: 700, color: '#fff' }}>{c.role}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-bright)', letterSpacing: '.06em' }}>{c.name}</span>
                      </div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.75, maxWidth: '56ch' }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 为什么选我们 ── */}
      <section className="sec" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="grid-2col-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <Reveal direction="left">
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                    alt="志成コンサル 专业团队办公场景"
                    style={{ width: '100%', height: 'clamp(280px, 40vw, 480px)', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div className="serif about-img-badge" style={{
                  background: 'var(--brand)', color: '#fff',
                  padding: '18px 26px', maxWidth: 240,
                  fontSize: 15, fontWeight: 700, lineHeight: 1.6,
                  borderBottom: '3px solid var(--gold)',
                }}>
                  成功报酬制<br /><span style={{ color: 'var(--gold-bright)' }}>不获批，不收费。</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <h2 className="h2 ed-h" style={{ marginBottom: 40 }}>与其他中介的<br />本质区别</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)' }}>
                {reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ flexShrink: 0, color: 'var(--brand)', marginTop: 2 }}><Icon d={r.icon} size={22} /></div>
                    <div>
                      <div className="serif" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 5 }}>{r.title}</div>
                      <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 申请流程 — 大描边序号时间线 ── */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: 520, marginBottom: 64 }}>
              <h2 className="h2 ed-h" style={{ marginBottom: 14 }}>五步完成全程代办</h2>
              <p className="sub">整个过程，您需要做的极少，主要是配合提供资料，其余全程由我们处理。</p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0 }} className="grid-steps-5">
            {steps.map((s, i) => (
              <Reveal key={i} delay={(i % 5) as 0|1|2|3|4|5} className="h-full">
                <div className="step-cell" style={{
                  height: '100%', padding: '8px 24px 8px 0',
                  marginRight: i < 4 ? 24 : 0,
                  borderRight: i < 4 ? '1px solid var(--line)' : 'none',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div className="ed-num" style={{ fontSize: 'clamp(44px,4.6vw,64px)', marginBottom: 20 }}>{s.n}</div>
                  <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{s.title}</div>
                  <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 最新文章 — 编辑式列表 ── */}
      {posts.length > 0 && (
        <section className="sec sec-posts">
          <div className="wrap">
            <Reveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
                <h2 className="h2 ed-h">补助金政策深度解析</h2>
                <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--brand)', paddingBottom: 6 }}>
                  查看全部文章 <ArrowIcon />
                </Link>
              </div>
            </Reveal>
            <div className="ed-rows">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) as 0|1|2|3|4|5}>
                  <Link href={`/blog/${post.slug}`} className="ed-row" style={{ textDecoration: 'none' }}>
                    <span style={{ fontSize: 12.5, color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>{post.date}</span>
                    <div>
                      <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.5, marginBottom: 6 }}>{post.title}</div>
                      <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.7, maxWidth: '72ch' }}>{post.excerpt?.slice(0, 80)}...</p>
                    </div>
                    <span style={{ color: 'var(--brand)' }}><ArrowIcon /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — 编辑式收尾（共享组件 V2：診断水印+行动栏） ── */}
      <CtaSection
        title={<>不确定能申请哪些？<br /><span style={{ color: 'var(--gold-bright)' }}>免费诊断，当日回复</span></>}
        desc="专家团队为您精准匹配最优补助金方案，完全免费，无任何购买义务。"
      />

      <Footer />
    </main>
  );
}
