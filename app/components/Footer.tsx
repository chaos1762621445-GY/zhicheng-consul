import Link from 'next/link';

const links = [
  { label: '补助金种类', href: '/subsidies' },
  { label: '服务流程', href: '/service' },
  { label: '成功案例', href: '/cases' },
  { label: '常见问题', href: '/faq' },
  { label: '关于我们', href: '/about' },
  { label: '代理合作', href: '/partner' },
  { label: '知识库', href: '/blog' },
  { label: '免费咨询', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,0.85)' }}>
      <div className="page-wrap" style={{ padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 1fr', gap: 48 }} className="max-md:grid-cols-1 max-md:gap-10">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="志成コンサル" style={{ height: 32, marginBottom: 16, filter: 'brightness(10)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 280, marginBottom: 20 }}>
              专为在日华人企业主提供日本政府补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合团队，全程中文无障碍。
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['拿不到不收费', '全程中文', '四类持牌专家'].map(t => (
                <span key={t} style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.07)', padding: '3px 8px', borderRadius: 100 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
              快速导航
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
              联系我们
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                { label: '微信', value: 'pr2024188' },
                { label: '电话', value: '03-6265-9756' },
                { label: '邮箱', value: 'knakano.sekiyoshi@gmail.com' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 8, fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>{c.label}：</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)' }}>{c.value}</span>
                </div>
              ))}
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                〒542-0082 大阪府大阪市中央区島之内1-13-3<br />おおきに東心斎橋ビル301号室
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 16, display: 'inline-block' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 8, textAlign: 'center' }}>微信扫码</div>
              <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 140, height: 140, borderRadius: 8, background: '#fff', padding: 4 }} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© 2026 株式会社志成コンサル 保留所有权利</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>行政书士·社会保险劳务士·税理士·中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
