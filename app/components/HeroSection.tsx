import Link from 'next/link';

const items = [
  { name: '省力化补助金',    amount: '最高 1,500万円' },
  { name: 'AI 导入补助金',   amount: '最高 350万円' },
  { name: '员工转正助成金',  amount: '最高 80万円/人' },
  { name: '员工培训助成金',  amount: '最高 1亿円' },
  { name: '空调节能补助',    amount: '东京最高 1,000万 / 全国最高 3亿' },
];

export default function HeroSection() {
  return (
    <section className="hero-bg" style={{ paddingTop: 72, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
      {/* Subtle orbs */}
      <div className="hero-orb" style={{ width: 520, height: 520, background: 'rgba(30,64,175,0.10)', top: -140, right: -100 }} />
      <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -80, left: -60, filter: 'blur(70px)' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">

          {/* Left column */}
          <div>
            <div className="eyebrow">国家认定 · 持牌专家代办</div>

            <h1 className="display" style={{ marginBottom: 28 }}>
              在日经营<br />
              政府补助金<br />
              <span style={{ color: 'var(--brand)' }}>全程代办到账</span>
            </h1>

            <p className="sub" style={{ marginBottom: 40, fontSize: 18 }}>
              日本政府每年向中小企业发放大量补助金，大多数企业主因不了解政策而白白错过。
              四类国家认证专家团队，全程中文代办，<strong style={{ color: 'var(--ink)', fontWeight: 700 }}>不获批不收费</strong>。
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
              {[
                { t: '不获批不收费，零风险' },
                { t: '3,000+ 企业已成功申请' },
                { t: '四类国家认定持牌专家' },
                { t: '全程中文，无需懂日语' },
              ].map(({ t }) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--ink-3)', fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,.12)" />
                    <path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel — premium card */}
          <div>
            <div
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: 8,
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: 4,
                borderRadius: '16px 16px 0 0',
                background: 'linear-gradient(90deg, var(--brand) 0%, var(--gold) 100%)',
                margin: '-1px -1px 0',
              }} />

              <div style={{ padding: '24px 26px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    适合您的补助金
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', background: 'var(--gold-soft)', padding: '3px 9px', borderRadius: 100, letterSpacing: '.05em' }}>
                    精选
                  </div>
                </div>

                {items.map((it, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '13px 0',
                    borderBottom: i < items.length - 1 ? '1px solid var(--surface-3)' : 'none',
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-2)' }}>{it.name}</span>
                    <span className="amount" style={{ fontSize: 14, marginLeft: 16, whiteSpace: 'nowrap' }}>{it.amount}</span>
                  </div>
                ))}

                <Link href="/contact" style={{
                  marginTop: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  background: 'var(--ink)',
                  color: '#fff',
                  padding: '13px 16px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all .18s ease',
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
