import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>
            志成コンサル
          </Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>知识库</Link>
            <Link href="/contact" style={{
              background: "#1a56db", color: "#fff", padding: "8px 20px",
              borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600
            }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1a56db 60%, #2563eb 100%)", color: "#fff", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "6px 16px", fontSize: 13, marginBottom: 24 }}>
            🎌 专为在日华人企业主服务
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
            在日本经营，<br />政府补助金<span style={{ color: "#fbbf24" }}>你拿到了吗？</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.7 }}>
            株式会社志成コンサル 专注在日华人企业补助金申请代办<br />
            成功率业界领先 · 无成功不收费 · 全程中文服务
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              background: "#fbbf24", color: "#111928", padding: "14px 32px",
              borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700
            }}>
              免费测试补助金资格 →
            </Link>
            <Link href="/subsidies" style={{
              background: "rgba(255,255,255,0.15)", color: "#fff", padding: "14px 32px",
              borderRadius: 8, textDecoration: "none", fontSize: 16, border: "1px solid rgba(255,255,255,0.3)"
            }}>
              了解补助金种类
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#f9fafb", padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "500+", label: "成功申请案例" },
            { num: "¥8.5億+", label: "累计获批补助金额" },
            { num: "无成功", label: "不收费", sub: "零风险保障" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "24px 16px" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#1a56db", marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 15, color: "#374151", fontWeight: 600 }}>{s.label}</div>
              {s.sub && <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>{s.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* SUBSIDIES */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 8 }}>主要补助金种类</h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48 }}>华人企业主最常申请的三大补助金</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "💻", title: "IT导入补助金",
                desc: "引入会计软件、ERP、收银系统等IT工具最高补助75万円，补助率最高3/4",
                tag: "申请难度低"
              },
              {
                icon: "🏪", title: "小型事业者持续化补助金",
                desc: "广告宣传、展会出展、设备购置等最高补助250万円，个人事业主也可申请",
                tag: "最受欢迎"
              },
              {
                icon: "🏭", title: "事业再构筑补助金",
                desc: "业务转型、新领域进入最高补助1.5億円，大规模事业变革的最佳选择",
                tag: "金额最大"
              },
            ].map((item, i) => (
              <div key={i} style={{
                border: "1px solid #e5e7eb", borderRadius: 12, padding: 28,
                background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <div style={{ display: "inline-block", background: "#eff6ff", color: "#1a56db", fontSize: 11, padding: "3px 10px", borderRadius: 10, marginBottom: 12, fontWeight: 600 }}>{item.tag}</div>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/subsidies" style={{ color: "#1a56db", textDecoration: "none", fontWeight: 600, fontSize: 15 }}>查看全部补助金种类 →</Link>
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      {recentPosts.length > 0 && (
        <section style={{ background: "#f9fafb", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 8 }}>最新补助金资讯</h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48 }}>每周更新日本最新补助金政策解读</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
                    padding: 24, height: "100%", transition: "box-shadow 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
                  }}>
                    <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>{post.date}</div>
                    <h3 style={{ fontSize: 17, marginBottom: 12, color: "#111928", lineHeight: 1.5 }}>{post.title}</h3>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{post.excerpt}</p>
                    <div style={{ marginTop: 16, color: "#1a56db", fontSize: 13, fontWeight: 600 }}>阅读全文 →</div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/blog" style={{ color: "#1a56db", textDecoration: "none", fontWeight: 600, fontSize: 15 }}>查看全部文章 →</Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "#1e3a8a", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 16 }}>立即测试您的补助金资格</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, lineHeight: 1.7 }}>
            3分钟问卷，了解您的企业可以申请哪些补助金<br />完全免费，无任何义务
          </p>
          <Link href="/contact" style={{
            background: "#fbbf24", color: "#111928", padding: "14px 40px",
            borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700, display: "inline-block"
          }}>
            开始免费自测 →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111928", color: "rgba(255,255,255,0.5)", padding: "32px 24px", textAlign: "center", fontSize: 13 }}>
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
