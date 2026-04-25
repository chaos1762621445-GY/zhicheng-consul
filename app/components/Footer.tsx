'use client';
import Link from 'next/link';

// Unsplash — dark professional workspace / Tokyo office
const FOOTER_BG = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop';

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
    <footer style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
      {/* Dark photo background */}
      <img
        src={FOOTER_BG}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Main */}
        <div className="wrap" style={{ padding: '72px 32px 48px' }}>
          <div className="grid-footer" style={{
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            {/* Brand */}
            <div>
              <img src="/logo.png" alt="株式会社 志成コンサル" style={{ height: 36, marginBottom: 20, filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.85, maxWidth: 240, marginBottom: 24 }}>
                专为在日华人企业主提供日本政府补助金全程代办服务。四类国家认证专家联合团队，全程中文，不获批不收费。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {['不获批不收费', '全程中文', '四类持牌专家'].map(t => (
                  <span key={t} style={{
                    fontSize: 10, fontWeight: 600,
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '5px 10px',
                  }}>{t}</span>
                ))}
              </div>
              {/* QR */}
              <div style={{ display: 'inline-block', background: '#fff', padding: 10 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#86868b', marginBottom: 6, textAlign: 'center', letterSpacing: '.12em', textTransform: 'uppercase', fontFamily: 'ui-monospace, Menlo, monospace' }}>微信扫码咨询</div>
                <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 110, height: 110, display: 'block' }} />
              </div>
            </div>

            {/* Nav cols */}
            {cols.map(col => (
              <div key={col.title}>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                  marginBottom: 20,
                }}>
                  {col.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map(l => (
                    <Link key={l.href} href={l.href} style={{
                      fontSize: 13.5, color: 'rgba(255,255,255,0.5)',
                      transition: 'color .12s',
                      letterSpacing: '0.01em',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
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
            display: 'flex', flexWrap: 'wrap', gap: '12px 36px',
            padding: '24px 0',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { label: '微信', value: 'pr2024188' },
              { label: '电话', value: '03-6265-9756' },
              { label: '邮箱', value: 'knakano.sekiyoshi@gmail.com' },
              { label: '地址', value: '〒542-0082 大阪府大阪市中央区島之内1-13-3' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 8, fontSize: 13 }}>
                <span style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)', paddingTop: 2,
                }}>{c.label}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{c.value}</span>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, paddingTop: 20 }}>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.2)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.04em' }}>
              © 2026 株式会社 志成コンサル
            </span>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.2)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.04em' }}>
              行政书士 · 社労士 · 税理士 · 中小企業診断士
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
