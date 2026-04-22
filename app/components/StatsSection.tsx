const stats = [
  { num: '3,000+', label: '华人老板成功申请' },
  { num: '¥8.5億+', label: '已到账补助金总额' },
  { num: '4种', label: '国家认定专业资质' },
];

export default function StatsSection() {
  return (
    <section style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '48px 0' }}>
      <div className="page-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '0 32px',
                borderRight: i < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
              }}
            >
              <div style={{
                fontSize: 'clamp(40px,5vw,60px)',
                fontWeight: 800,
                color: '#533afd',
                letterSpacing: '-1px',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: 14, color: '#64748b', marginTop: 8, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
