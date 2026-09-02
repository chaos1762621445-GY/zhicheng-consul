'use client';
import Link from 'next/link';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';

export default function Footer({ locale = 'zh', dict }: { locale?: Locale; dict?: Dictionary }) {
  const d = dict ?? (zh as unknown as Dictionary);
  const f = d.footer;
  const nav = d.nav;
  const L = (p: string) => localizedHref(locale, p);

  const cols = [
    { title: f.colSubsidies, links: [
      { label: nav.subItems.seiryoka, href: '/subsidies/seiryoka' },
      { label: nav.subItems['ai-it'], href: '/subsidies/ai-it' },
      { label: nav.subItems['career-up'], href: '/subsidies/career-up' },
      { label: nav.subItems.training, href: '/subsidies/training' },
      { label: nav.subItems.aircon, href: '/subsidies/aircon' },
    ]},
    { title: f.colService, links: [
      { label: nav.service, href: '/service' },
      { label: nav.cases, href: '/cases' },
      { label: nav.partner, href: '/partner' },
      { label: nav.faq, href: '/faq' },
      { label: nav.blog, href: '/blog' },
    ]},
    { title: f.colCompany, links: [
      { label: nav.about, href: '/about' },
      { label: d.common.freeConsult, href: '/contact' },
      { label: '隐私政策', href: '/privacy', privacyKey: true },
    ]},
  ];
  const privacyLabel = { zh: '隐私政策', en: 'Privacy Policy', ja: 'プライバシーポリシー' }[locale];

  return (
    <footer style={{
      position: 'relative',
      background: '#0b2c2a',
      borderTop: '1px solid rgba(196,162,58,0.35)',
      overflow: 'hidden',
    }}>
      {/* 品牌名巨型描边水印 */}
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
              {f.tagline1}<br />
              {f.tagline2Pre}<span style={{ color: 'var(--gold)' }}>{f.tagline2Highlight}</span>{f.tagline2Post}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 22px', marginTop: 22 }}>
              {f.badges.map(t => (
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

          {/* 企业微信面板 */}
          <a href="https://work.weixin.qq.com/kfid/kfcdeef8ec4573ef9f3" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: 18,
            border: '1px solid rgba(255,255,255,0.13)',
            padding: 18, alignSelf: 'start', textDecoration: 'none',
          }}>
            <img src="/qiwei-qr.png" alt="企业微信二维码" style={{ width: 96, height: 96, display: 'block', flexShrink: 0, background: '#fff', padding: 5, boxShadow: '0 2px 10px rgba(0,0,0,0.25)' }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 8 }}>{f.wechatLabel}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{f.wechatTitle}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.wechatDesc1}<br />{f.wechatDesc2}</div>
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
                  <Link key={l.href} href={L(l.href)} className="footer-link">{(l as { privacyKey?: boolean }).privacyKey ? privacyLabel : l.label}</Link>
                ))}
                {col.title === f.colCompany && (
                  <a href="https://shiseiconsult.com/" rel="noopener" className="footer-link">{f.linkJpSite}</a>
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
              {f.colContact}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 10 }}>{f.contactPhone}</span>
                <span style={{ color: 'rgba(255,255,255,0.62)' }}>03-6265-9756</span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 10 }}>{f.contactEmail}</span>
                <a href={`mailto:${f.contactEmailVal}`} className="footer-link" style={{ color: 'rgba(255,255,255,0.62)' }}>{f.contactEmailVal}</a>
              </div>
              {[
                [f.contactWechat, f.contactWechatVal],
                [f.contactAddr, f.contactAddrVal],
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
            {f.copyright}
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.03em' }}>
            {f.credentials}
          </span>
        </div>
      </div>
    </footer>
  );
}
