import Link from 'next/link';

const cols = [
  { title: '补助金', links: [
    { label: '省力化补助金', href: '/subsidies/seiryoka' },
    { label: 'AI 导入补助金', href: '/subsidies/ai-it' },
    { label: '员工转正助成金', href: '/subsidies/career-up' },
    { label: '员工培训助成金', href: '/subsidies/training' },
    { label: '空调省能补助', href: '/subsidies/aircon' },
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
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,.85)' }}>
      {/* Main */}
      <div className="wrap" style={{ padding: '72px 28px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="志成咨询" style={{ height: 30, filter: 'brightness(10)', marginBottom: 20 }} />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, maxWidth: 260, marginBottom: 24 }}>
              专为在日华人企业主提供日本政府补助金全程代办服务。四类国家认证专家联合团队，全程中文，不获批不收费。
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {['不获批不收费', '全程中文', '四类持牌专家'].map(t => (
                <span key={t} style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', background: 'rgba(255,255,255,.07)', padding: '3px 10px', borderRadius: 100 }}>{t}</span>
              ))}
            </div>

            {/* QR */}
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 14 }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginBottom: 8, textAlign: 'center', letterSpacing: '.05em' }}>微信扫码咨询</div>
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 130, height: 130, borderRadius: 8, background: '#fff', padding: 4 }} />
            </div>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 20 }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,.65)' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
            {[
              { label: '微信', value: 'pr2024188' },
              { label: '电话', value: '03-6265-9756' },
              { label: '邮箱', value: 'knakano.sekiyoshi@gmail.com' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 6, fontSize: 14 }}>
                <span style={{ color: 'rgba(255,255,255,.35)' }}>{c.label}：</span>
                <span style={{ color: 'rgba(255,255,255,.8)' }}>{c.value}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.35)' }}>
            〒542-0082 大阪府大阪市中央区島之内1-13-3
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.3)' }}>© 2026 株式会社志成咨询 保留所有权利</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.3)' }}>行政书士 · 社会保险劳务士 · 税理士 · 中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
