import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavClient from "./components/NavClient";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

const credentials = [
  { emoji: "📋", name: "行政书士", role: "申请材料专家", desc: "专业负责补助金申请书类制作及各类行政许可手续" },
  { emoji: "👷", name: "社会保険労務士", role: "雇佣关系专家", desc: "专业负责雇佣关系助成金申请及劳务管理" },
  { emoji: "📊", name: "税理士", role: "税务财务专家", desc: "专业负责财务会计及税务申报业务" },
  { emoji: "🏢", name: "中小企業診断士", role: "经营规划专家", desc: "专业负责经营战略制定及事业计划书撰写" },
];

const whyUs = [
  { emoji: "💬", title: "全中文，不用学日语", desc: "从第一次咨询到拿到钱，全程中文沟通，我们处理所有日语文件。" },
  { emoji: "🛡️", title: "拿不到钱不收费", desc: "申请不成功无需支付任何费用，零风险承诺。" },
  { emoji: "✅", title: "四类国家认证专家", desc: "行政书士、社劳士、税理士、经营诊断士全部配齐，正规持牌。" },
  { emoji: "🏆", title: "3,000+ 真实成功案例", desc: "3,000+ 在日华人老板已通过我们拿到补助金，案例可查。" },
];

const steps = [
  { n: "01", title: "免费咨询", desc: "微信联系我们，3分钟说清楚你的情况。" },
  { n: "02", title: "补助金诊断", desc: "我们告诉你能申请哪些、大概能拿多少。" },
  { n: "03", title: "方案确认", desc: "确认申请方向，你签字同意即可。" },
  { n: "04", title: "资料整理", desc: "你提供基础资料，我们负责翻译和整理。" },
  { n: "05", title: "专业递交", desc: "持牌专家代为递交，格式合规。" },
  { n: "06", title: "等待到账", desc: "审核通过后，补助金直接打入你的账户。" },
];

export default async function HomePage() {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 3);

  return (
    <main>
      <NavClient />
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {/* ── Credentials ── */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
            <div className="label-tag">为什么放心交给我们</div>
            <h2 className="section-heading">持牌专家团队，你不用懂日语</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              四类国家认证资格持有者分工合作，从材料准备到递交审核，全程代办。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {credentials.map((c, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}

              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{c.emoji}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{c.role}</div>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: "#533afd", background: "rgba(83,58,253,0.08)", padding: "3px 10px", borderRadius: 100, marginBottom: 12 }}>{c.name}</div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="max-md:grid-cols-1 max-md:gap-12">
            <div className="max-md:hidden" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                alt="专业团队"
                style={{ width: "100%", height: 480, objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="label-tag">选择我们的理由</div>
              <h2 className="section-heading">我们和其他中介有什么不同</h2>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
                {whyUs.map((w, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "rgba(83,58,253,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {w.emoji}
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{w.title}</div>
                      <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 520, marginBottom: 48 }}>
            <div className="label-tag">申请流程</div>
            <h2 className="section-heading">申请流程很简单</h2>
            <p className="section-sub">整个过程你需要做的很少，主要是配合提供资料，其他全程由我们处理。</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="max-md:grid-cols-1 max-lg:grid-cols-2">
            {steps.map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #533afd",
                borderRadius: 16,
                padding: "28px 24px",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}

              >
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#533afd", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, marginBottom: 16, letterSpacing: "0.05em" }}>
                  STEP {s.n}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 520, marginBottom: 48 }}>
            <div className="label-tag">知识库</div>
            <h2 className="section-heading">最新文章</h2>
            <p className="section-sub">深度解析日本政府补助金政策，为在日华人企业主提供实用指南。</p>
          </div>
          {recent.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="max-md:grid-cols-1 max-lg:grid-cols-2">
              {recent.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block" }}>
                  <div style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: "28px",
                    height: "100%",
                    transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
                  }}


                  >
                    <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 12 }}>{post.date}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", lineHeight: 1.4, marginBottom: 12 }}>{post.title}</div>
                    <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{post.excerpt?.slice(0, 80)}...</p>
                    <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: "#533afd", display: "flex", alignItems: "center", gap: 4 }}>
                      阅读更多
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/blog" className="btn-secondary">查看全部文章</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #533afd 0%, #312ea8 100%)", padding: "80px 0", textAlign: "center" }}>
        <div className="page-wrap" style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.3px" }}>
            不知道能拿多少？
            <br />先问一下没有损失
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36 }}>
            微信联系我们，免费告诉你能申请哪些补助金、大概能拿多少。
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "#533afd",
              padding: "14px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 700,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "opacity 0.15s, transform 0.15s",
            }}>
              立即免费咨询
            </Link>
            <Link href="/subsidies" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#fff",
              padding: "14px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 600,
              border: "1.5px solid rgba(255,255,255,0.35)",
              transition: "background 0.15s",
            }}>
              了解补助金种类
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
