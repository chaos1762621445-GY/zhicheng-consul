import Link from 'next/link';

const cols = [
  { title: '补助金', links: [
    { label: '省力化补助金', href: '/subsidies/seiryoka' },
    { label: 'AI 导入补助金', href: '/subsidies/ai-it' },
    { label: '员工转正助成金', href: '/subsidies/career-up' },
    { label: '员工培训助成金', href: '/subsidies/training' },
    { label: '空调节能补助', href: '/subsidies/aircon' },
  ]},
  { title: '服务', links: [
    { label: '服务流程', href: '/service' },
    { label: '成功案例', href: '/cases' },
    { label: '代理合作', href: '/partner' },
    { label: '常见问题', href: '/faq' },
    { label: '知识库', href: '/blog' },
  ]},
  { title: '公司', links: [
    { label: '关于我们', href: '/about' },
    { label: '免费咨询', href: '/contact' },
  ]},
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-2)', color: 'var(--ink-3)', borderTop: '1px solid var(--line)' }}>
      {/* Main */}
      <div className="wrap" style={{ padding: '72px 28px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="株式会社 志成コンサル" style={{ height: 44, marginBottom: 20 }} />
            <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.8, maxWidth: 260, marginBottom: 24 }}>
              专为在日华人企业主提供日本政府补助金全程代办服务。四类国家认证专家联合团队，全程中文，不获批不收费。
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {['不获批不收费', '全程中文', '四类持牌专家'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'var(--brand)', background: 'var(--brand-bg)', border: '1px solid var(--brand-mid)', padding: '4px 10px', borderRadius: 100 }}>{t}</span>
              ))}
            </div>

            {/* QR */}
            <div style={{ display: 'inline-block', background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 14, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', marginBottom: 8, textAlign: 'center', letterSpacing: '.05em', textTransform: 'uppercase' }}>微信扫码咨询</div>
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 130, height: 130, borderRadius: 8 }} />
            </div>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact bar — 亮色，清晰可读 */}
        <div style={{
          marginTop: 48,
          padding: '24px 28px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 14,
          boxShadow: 'var(--shadow-xs)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 32px' }}>
            {[
              { label: '微信', value: 'pr2024188' },
              { label: '电话', value: '03-6265-9756' },
              { label: '邮箱', value: 'knakano.sekiyoshi@gmail.com' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 6, fontSize: 14 }}>
                <span style={{ color: 'var(--muted)', fontWeight: 500 }}>{c.label}：</span>
                <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{c.value}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-3)', fontWeight: 500 }}>
            〒542-0082 大阪府大阪市中央区島之内1-13-3
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 株式会社 志成コンサル 保留所有权利</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>行政书士 · 社会保险劳务士 · 税理士 · 中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
