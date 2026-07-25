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

/**
 * Footer V2 — 编辑式页脚（无素材图）
 * 比 CTA 更深一档的墨绿收底 + 金色 hairline 分层 +
 * 衬线品牌题字 + 结构化联络行。手机端双列链接不再无限竖排。
 */
export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      background: '#0b2c2a',
      borderTop: '1px solid rgba(196,162,58,0.35)',
      overflow: 'hidden',
    }}>
      {/* 品牌名巨型描边水印 — 与 CTA「診断」同一语言，右下角退隐 */}
      <div aria-hidden="true" className="serif" style={{
        position: 'absolute', right: -8, bottom: -30,
        fontSize: 'clamp(120px, 16vw, 220px)', fontWeight: 900, lineHeight: 1,
        color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.045)',
        pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
      }}>志成</div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 72, paddingBottom: 28 }}>

        {/* ── 上段：品牌题字 + 微信面板 ── */}
        <div className="footer-top">
          <div>
            <img src="/logo.png" alt="株式会社 志成コンサル" style={{ height: 34, marginBottom: 22, filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
            <p className="serif" style={{
              fontSize: 'clamp(19px, 2.2vw, 25px)', fontWeight: 700, color: '#fff',
              lineHeight: 1.55, letterSpacing: '0.01em', wordBreak: 'keep-all',
              maxWidth: '20em', margin: 0,
            }}>
              让每一位在日华人企业主，<br />
              都能平等享受<span style={{ color: 'var(--gold)' }}>政府补助金</span>的红利。
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 22px', marginTop: 22 }}>
              {['不获批不收费', '全程中文', '四类持牌专家'].map(t => (
                <span key={t} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.55)',
                }}>
                  <span style={{ width: 14, height: 1, background: 'var(--gold)', opacity: 0.8 }} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 企业微信面板：二维码 + 说明，横向组合，可点击进线 */}
          <a href="https://work.weixin.qq.com/kfid/kfcdeef8ec4573ef9f3" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: 18,
            border: '1px solid rgba(255,255,255,0.13)',
            padding: 18, alignSelf: 'start', textDecoration: 'none',
          }}>
            <img src="/qiwei-qr.png" alt="企业微信二维码" style={{ width: 96, height: 96, display: 'block', flexShrink: 0, background: '#fff', padding: 5, boxShadow: '0 2px 10px rgba(0,0,0,0.25)' }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 8 }}>企业微信扫码咨询</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>营业部客服群</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>点击联系客服 · 免费咨询<br />工作日当日回复</div>
            </div>
          </a>
        </div>

        {/* ── 中段：导航列 ── */}
        <div className="footer-nav" style={{
          borderTop: '1px solid rgba(255,255,255,0.09)',
          marginTop: 44, paddingTop: 36, paddingBottom: 40,
        }}>
          {cols.map(col => (
            <div key={col.title}>
              <div className="serif" style={{
                fontSize: 13.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)',
                marginBottom: 16, paddingBottom: 10,
                borderBottom: '1px solid rgba(196,162,58,0.35)',
                display: 'inline-block', paddingRight: 18,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
                ))}
                {col.title === '公司' && (
                  <a href="https://shiseiconsult.com/" rel="noopener" className="footer-link">日文官网 志成コンサル</a>
                )}
              </div>
            </div>
          ))}

          {/* 联络列 */}
          <div>
            <div className="serif" style={{
              fontSize: 13.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)',
              marginBottom: 16, paddingBottom: 10,
              borderBottom: '1px solid rgba(196,162,58,0.35)',
              display: 'inline-block', paddingRight: 18,
            }}>
              联络
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                ['电话', '03-6265-9756'],
                ['企业微信', '扫码添加营业部'],
                ['地址', '東京都新宿区高田馬場 1-25-32 7階'],
              ].map(([k, v]) => (
                <div key={k} style={{ fontSize: 13, lineHeight: 1.6 }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 10 }}>{k}</span>
                  <span style={{ color: 'rgba(255,255,255,0.62)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 底段：版权 ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: 20,
        }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.03em' }}>
            © 2026 株式会社 志成コンサル
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.03em' }}>
            行政书士 · 社労士 · 税理士 · 中小企業診断士
          </span>
        </div>
      </div>
    </footer>
  );
}
