'use client';
import Link from 'next/link';

const services = [
  {
    icon: '📄',
    name: '省力化补助金',
    amount: '最高1,500万円',
    tag: '整体上限极高',
    desc: '导入DX系统、自动化设备实现降本增效。6〜20人企业补助率50%，整体上限1亿円。',
    slug: 'seiryoka',
  },
  {
    icon: '🤖',
    name: 'AI导入补助金',
    amount: '最高350万円',
    tag: '个人也能申请',
    desc: 'AI软件采购、系统定制开发均可申请。个人事业主、赤字企业均可，门槛宽松。',
    slug: 'ai-it',
  },
  {
    icon: '👥',
    name: '员工转正助成金',
    amount: '最高80万円/人',
    tag: '员工转正有补贴',
    desc: '将兼职或合同员工转为正社员。在职半年以上转正，最高80万円/人补贴。',
    slug: 'career-up',
  },
  {
    icon: '🎓',
    name: '员工培训助成金',
    amount: '最高1亿円',
    tag: '同步转正翻倍',
    desc: '同步转正申请，补贴翻倍。AI营销、运营自动化等课程，每人百万级支持。',
    slug: 'training',
  },
  {
    icon: '❄️',
    name: '空调省能更新补助',
    amount: '最高1,000万円',
    tag: '以旧换新省大钱',
    desc: '旧空调以旧换新：东京政府补助2/3+我司补贴1/3，几乎零负担。',
    slug: 'aircon',
  },
  {
    icon: '🤝',
    name: '代理合作',
    amount: '60% 分成',
    tag: '推荐客户得分成',
    desc: '将存量客户与我们对接，即可获得60%透明分成。周期短、回流稳，零加盟费。',
    slug: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="page-wrap">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="label-tag">你能申请什么</div>
          <h2 className="section-heading">主要补助金种类</h2>
          <p className="section-sub">以下是在日华人企业最常申请的补助金，我们为你全程代办。</p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="max-md:grid-cols-1 max-lg:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '28px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.10)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.borderColor = '#c7d2fe';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
              }}
            >
              {/* Icon + tag row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>{s.icon}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#533afd',
                  background: 'rgba(83,58,253,0.08)',
                  padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap',
                }}>
                  {s.tag}
                </span>
              </div>

              {/* Name */}
              <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{s.name}</div>

              {/* Amount */}
              <div style={{ fontSize: 26, fontWeight: 800, color: '#533afd', letterSpacing: '-0.5px', marginBottom: 14, fontVariantNumeric: 'tabular-nums' }}>
                {s.amount}
              </div>

              {/* Desc */}
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>

              {/* Footer */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {s.slug ? (
                  <Link href={`/subsidies/${s.slug}`} style={{ fontSize: 13, fontWeight: 600, color: '#533afd', display: 'flex', alignItems: 'center', gap: 4 }}>
                    查看详情
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <Link href="/contact" style={{ fontSize: 13, fontWeight: 600, color: '#533afd', display: 'flex', alignItems: 'center', gap: 4 }}>
                    了解详情
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
                <span style={{ fontSize: 12, color: '#94a3b8' }}>微信：pr2024188</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
