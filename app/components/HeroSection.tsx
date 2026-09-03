import Link from 'next/link';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';

// 自托管 hero 背景（webp 195KB）
const BG = '/hero-tokyo.webp';

export default function HeroSection({ locale = 'zh', dict }: { locale?: Locale; dict?: Dictionary }) {
  const d = dict ?? (zh as unknown as Dictionary);
  const h = d.hero;
  const L = (p: string) => localizedHref(locale, p);

  return (
    <>
      {/* ── HERO — dark cinematic ── */}
      <section className="hero-section">
        <img
          src={BG}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: 0.30,
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,57,55,0.72) 0%, rgba(10,43,41,0.86) 55%, #0a2b29 100%)',
        }} />
        <div className="hero-glow" style={{
          position: 'absolute', top: '-12%', right: '-6%',
          width: 620, height: 620, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,162,58,0.16) 0%, rgba(196,162,58,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)',
        }} />

        {/* Content */}
        <div className="wrap hero-content">
          <div className="hero-anim hero-anim-1" style={{
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontSize: 11, fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 24,
          }}>
            {h.label}
          </div>

          <h1 className="hero-anim hero-anim-2 serif" style={{
            fontSize: 'clamp(38px, 6vw, 82px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.14,
            letterSpacing: '0',
            marginBottom: 28,
            maxWidth: 860,
          }}>
            {h.h1Line1}<br />
            <span style={{ color: '#e3c766' }}>{h.h1Highlight}</span><br />
            {h.h1Line3}
          </h1>

          <p className="hero-anim hero-anim-3" style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.68)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 40,
          }}>
            {h.sub}
            <strong style={{ color: '#fff', fontWeight: 600 }}>{h.subStrong}</strong>
          </p>

          <div className="hero-cta-row hero-anim hero-anim-4" style={{ marginBottom: 52 }}>
            <Link href={L('/contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#1a5c5a',
              padding: '13px 28px',
              fontSize: 14, fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'opacity .15s',
            }}>
              {h.ctaPrimary}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link href={L('/subsidies')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '13px 28px',
              fontSize: 14, fontWeight: 500,
              letterSpacing: '0.04em',
            }}>
              {h.ctaSecondary}
            </Link>
          </div>

          <div className="hero-trust-bar hero-anim hero-anim-5">
            {h.trust.map((t, i) => (
              <div key={t} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                fontSize: 12.5, color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.08em',
              }}>
                {i > 0 && <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />}
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — 深 teal 数据带 ── */}
      <section className="stats-band">
        <div className="wrap">
          <div className="grid-stats-3">
            {h.stats.map((s, i) => (
              <div key={i} style={{
                padding: '46px 0',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,.12)' : 'none',
              }}>
                <div className="stat-v" style={{ marginBottom: 10 }}>
                  {s.val}
                </div>
                <div className="stat-label" style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                <div className="stat-note" style={{ fontSize: 12 }}>{s.note}</div>
              </div>
            ))}
          </div>
          <p className="stat-footnote">{h.statsNote}</p>
        </div>
      </section>
    </>
  );
}
