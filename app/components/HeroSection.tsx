import Link from 'next/link';

const items = [
  { name: '省力化补助金', amount: '最高 1,500万円' },
  { name: 'AI 导入补助金', amount: '最高 350万円' },
  { name: '员工转正助成金', amount: '最高 80万円/人' },
  { name: '员工培训助成金', amount: '最高 1亿円' },
  { name: '空调省能更新补助', amount: '最高 1,000万円' },
];

export default function HeroSection() {
  return (
    <section className="hero-bg" style={{ paddingTop: 88, paddingBottom: 96 }}>
      <div className="wrap">
        <div className="hero-grid">

          {/* Left */}
          <div>
            <div className="eyebrow">国家认定补助金代办专家</div>

            <h1 className="display" style={{ marginBottom: 24 }}>
              在日经营，<br />政府补助金<br />
              <span style={{ color: 'var(--brand)' }}>全程代办到账</span>
            </h1>

            <p className="sub" style={{ marginBottom: 36 }}>
              日本政府每年向中小企业发放大量补助金，大多数企业主因不了解政策而白白错过。
              我们以四类国家认证专家团队，全程中文代办，<strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>不获批不收费</strong>。
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <Link href="/contact" className="btn btn-fill">
                免费获取诊断报告
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link href="/subsidies" className="btn btn-ghost">
                查看补助金种类
              </Link>
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px' }}>
              {['不获批不收费，零风险', '3,000+ 企业已成功申请', '四类国家认定持牌专家', '全程中文，无需懂日语'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--ink-3)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,.12)" />
                    <path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="hero-panel-col">
            <div style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 20,
              padding: '28px 28px 24px',
              boxShadow: '0 24px 64px rgba(12,21,37,.10), 0 4px 16px rgba(12,21,37,.06)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
                适合您的补助金
              </div>

              {items.map((it, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: i < items.length - 1 ? '1px solid var(--surface-3)' : 'none',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-3)' }}>{it.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', marginLeft: 16, whiteSpace: 'nowrap' }}>{it.amount}</span>
                </div>
              ))}

              <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--surface-3)' }}>
                <Link href="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  background: 'var(--brand-bg)',
                  color: 'var(--brand)',
                  padding: '11px 16px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                }}>
                  立即咨询，精准匹配方案
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
