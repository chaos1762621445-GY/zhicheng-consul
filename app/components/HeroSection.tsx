import Link from 'next/link';

const subsidies = [
  { name: '省力化补助金', amount: '最高1,500万円' },
  { name: 'AI导入补助金', amount: '最高350万円' },
  { name: '员工转正助成金', amount: '最高80万円/人' },
  { name: '员工培训助成金', amount: '最高1亿円' },
  { name: '空调省能更新补助', amount: '最高1,000万円' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
      {/* Subtle bg decoration */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 60% -10%, rgba(83,58,253,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="page-wrap relative">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 64, alignItems: 'center' }}
          className="max-md:grid-cols-1 max-md:gap-12">

          {/* Left */}
          <div>
            <div className="label-tag">在日本政府认定补助金代办</div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              marginBottom: 20,
            }}>
              在日本经营，<br />政府有钱可以拿
            </h1>

            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}>
              很多华人老板不知道：日本政府每年有大量补助金，专门给中小企业。
              我们帮你查清楚、申请下来，<strong style={{ color: '#0f172a', fontWeight: 600 }}>拿不到不收费</strong>。
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary">
                立即免费咨询
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/subsidies" className="btn-secondary">
                查看补助金种类
              </Link>
            </div>

            {/* Trust */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              {['拿不到不收费，零风险', '3,000+ 华人老板成功申请', '全程中文，无需懂日语'].map(t => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748b' }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,0.15)" />
                    <path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div
            className="hidden md:block"
            style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: '28px 28px 24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>
              你可能可以申请的补助金
            </div>

            {subsidies.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: i < subsidies.length - 1 ? '1px solid #f1f5f9' : 'none',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 500, color: '#334155' }}>{s.name}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#533afd', whiteSpace: 'nowrap', marginLeft: 12 }}>{s.amount}</span>
              </div>
            ))}

            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #f1f5f9' }}>
              <Link
                href="/contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  background: 'rgba(83,58,253,0.06)',
                  color: '#533afd',
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'background 0.15s',
                }}
              >
                微信咨询能申请哪些
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
