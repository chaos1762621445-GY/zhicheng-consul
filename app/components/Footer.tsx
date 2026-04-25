'use client';
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
    <footer style={{ background: '#111', color: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Main */}
      <div className="wrap" style={{ padding: '64px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="株式会社 志成コンサル" style={{ height: 38, marginBottom: 20, filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 240, marginBottom: 24 }}>
              专为在日华人企业主提供日本政府补助金全程代办服务。四类国家认证专家联合团队，全程中文，不获批不收费。
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
              {['不获批不收费', '全程中文', '四类持牌专家'].map(t => (
                <span key={t} style={{
                  fontSize: 11, fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '4px 10px', borderRadius: 9999,
                }}>{t}</span>
              ))}
            </div>

            {/* QR */}
            <div style={{ display: 'inline-block', background: '#fff', borderRadius: 10, padding: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#888', marginBottom: 8, textAlign: 'center', letterSpacing: '.05em', textTransform: 'uppercase' }}>微信扫码咨询</div>
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 120, height: 120, borderRadius: 6 }} />
            </div>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 10, fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 16,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} style={{
                    fontSize: 13.5, color: 'rgba(255,255,255,0.55)',
                    transition: 'color .12s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div style={{
          marginTop: 48,
          padding: '20px 24px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px' }}>
            {[
              { label: '微信', value: 'pr2024188' },
              { label: '电话', value: '03-6265-9756' },
              { label: '邮箱', value: 'knakano.sekiyoshi@gmail.com' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 6, fontSize: 13.5 }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{c.label}：</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{c.value}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            〒542-0082 大阪府大阪市中央区島之内1-13-3
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 株式会社 志成コンサル 保留所有权利</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>行政书士 · 社会保险劳务士 · 税理士 · 中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
