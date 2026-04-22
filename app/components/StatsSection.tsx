const stats = [
  { num: '3,000+', label: '企业成功申请', desc: '覆盖餐饮、零售、制造、IT等多个行业' },
  { num: '¥8.5億+', label: '累计到账补助金', desc: '真实到账，非预估获批金额' },
  { num: '4种', label: '国家认定专业资质', desc: '行政书士·社劳士·税理士·诊断士' },
];

export default function StatsSection() {
  return (
    <section style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '60px 0' }}>
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stats-item"
              style={{
                textAlign: 'center',
                padding: '0 40px',
                borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <div style={{
                fontSize: 'clamp(42px,5vw,64px)',
                fontWeight: 800,
                color: 'var(--brand)',
                letterSpacing: '-1.5px',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 8,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-2)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
