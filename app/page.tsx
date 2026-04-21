import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

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

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">🎌 专为在日华人企业主服务</div>
          <h1>在日本经营，<br />政府补助金<em>你拿到了吗？</em></h1>
          <p className="hero-sub">
            株式会社志成コンサル · 专注在日华人企业补助金申请代办<br />
            全程中文沟通 · 无成功不收费 · 省力化/AI/转正/培训多种补助
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn-gold">免费测试补助金资格 →</Link>
            <Link href="/subsidies" className="btn-ghost" style={{color:"rgba(255,255,255,0.85)", borderColor:"rgba(255,255,255,0.25)"}}>了解补助金种类</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-inner">
          <div><div className="stat-num">500+</div><div className="stat-label">成功申请案例</div></div>
          <div><div className="stat-num">¥8.5億+</div><div className="stat-label">累计获批补助金额</div></div>
          <div><div className="stat-num">无成功</div><div className="stat-label">不收费 · 零风险保障</div></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <h2>我们代办的补助金种类</h2>
            <p>6种主要补助金，覆盖在日华人企业最常见的需求场景</p>
          </div>
          <div className="card-grid">
            {[
              { icon:"🤖", tag:"最高1,500万円", title:"省力化补助金", amount:"最高1,500万円", rate:"补助率最大50%", desc:"IoT·机器人·DX系统导入，人手不足企业的最佳选择。收银系统、库存管理、顾客AI均可申请。" },
              { icon:"🧠", tag:"最高350万円", title:"AI导入补助金", amount:"最高350万円", rate:"补助率1/2〜2/3", desc:"AI营销工具、CRM、自动化软件、云服务。赤字企业、新设企业均可申请，无从业规模限制。" },
              { icon:"👔", tag:"最高80万円/人", title:"员工转正助成金", amount:"最高80万円/人", rate:"全额由厚生劳动省支给", desc:"将兼职/合同社员转为正社员，每人最高获得80万円政府助成金，无需企业垫付。" },
              { icon:"📚", tag:"最高75%培训费", title:"员工培训助成金", amount:"经费最高75%", rate:"＋时薪960円补贴", desc:"AI营销/运营/数据分析研修，培训费大部分由政府承担。可与转正助成金同时申请，效果翻倍。" },
              { icon:"❄️", tag:"东京限定", title:"空调省能更新补助", amount:"自费极少", rate:"东京都环境局支持", desc:"将旧空调更换为高效省能空调，补助比例极高，餐饮店、民宿、学习塾、办公室均适用。" },
              { icon:"🤝", tag:"分成60%", title:"代理合作", amount:"介绍报酬60%分成", rate:"零加盟费", desc:"已有客户资源？将客户推荐给我们即可获得60%分成报酬，无需自己处理申请手续。" },
            ].map((s,i) => (
              <div key={i} className="card">
                <div className="card-icon">{s.icon}</div>
                <span className="card-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <div className="card-amount">{s.amount}</div>
                <div className="card-rate">{s.rate}</div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center", marginTop:36}}>
            <Link href="/subsidies" className="nav-link" style={{color:"var(--primary)", fontWeight:500}}>查看各补助金详细条件 →</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-dark">
        <div className="section-inner">
          <div className="section-head">
            <h2>为什么选择志成コンサル？</h2>
            <p>在日华人企业专属，不是中介，是全程陪跑的顾问团队</p>
          </div>
          <div className="feature-grid">
            {[
              { fi:"🀄", title:"全程中文", desc:"母语沟通，所有日文材料由我们处理，您只需提供信息" },
              { fi:"✅", title:"无成功不收费", desc:"申请未通过则零收费，真正的零风险委托" },
              { fi:"📋", title:"行政书士·税理士联合", desc:"专业持证团队，材料合规、申请成功率业界领先" },
              { fi:"⚡", title:"一站式服务", desc:"从资格判断→材料准备→提交申请→事后报告，全程包办" },
            ].map((f,i) => (
              <div key={i} className="feature-card">
                <div className="fi">{f.fi}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      {recentPosts.length > 0 && (
        <section className="section-light">
          <div className="section-inner">
            <div className="section-head">
              <h2>最新补助金资讯</h2>
              <p>每天更新日本最新补助金政策解读，帮你第一时间掌握申请机会</p>
            </div>
            <div className="card-grid">
              {recentPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="read-more">阅读全文 →</div>
                </Link>
              ))}
            </div>
            <div style={{textAlign:"center", marginTop:32}}>
              <Link href="/blog" style={{color:"var(--primary)", fontWeight:500, fontSize:14, textDecoration:"none"}}>查看全部文章 →</Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="section-inner">
          <div className="cta-block" style={{maxWidth:600, margin:"0 auto"}}>
            <h2>立即测试您的补助金资格</h2>
            <p>3分钟问卷，了解您的企业可以申请哪些补助金及预计可获金额，完全免费</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn-primary-lg">开始免费自测 →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved. | 微信：pr2024188</p>
      </footer>
    </main>
  );
}
