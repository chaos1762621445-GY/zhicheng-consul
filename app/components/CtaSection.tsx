import Link from 'next/link';
import React from 'react';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';

interface CtaSectionProps {
  title: React.ReactNode;
  desc?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  locale?: Locale;
  dict?: Dictionary;
}

export default function CtaSection({
  title,
  desc,
  primary,
  secondary,
  locale = 'zh',
  dict,
}: CtaSectionProps) {
  const d = dict ?? (zh as unknown as Dictionary);
  const c = d.cta;
  const L = (p: string) => localizedHref(locale, p);

  const resolvedDesc = desc ?? c.descDefault;
  const resolvedPrimary = primary ?? { href: '/contact', label: c.primaryDefault };
  const resolvedSecondary = secondary ?? { href: '/subsidies', label: c.secondaryDefault };

  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(88px, 10vw, 140px) 0',
      overflow: 'hidden',
      background: 'linear-gradient(165deg, #0f3937 0%, #114240 48%, #0d3331 100%)',
      borderTop: '3px solid var(--gold)',
    }}>
      <div aria-hidden="true" className="serif cta-watermark">診断</div>

      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-40%', left: '-8%',
        width: 620, height: 620, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(196,162,58,0.10) 0%, transparent 68%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cta-grid">
          <div>
            <div style={{ width: 42, height: 3, background: 'var(--gold)', marginBottom: 26 }} />
            <h2 className="serif" style={{
              fontSize: 'clamp(28px, 3.6vw, 50px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.22,
              letterSpacing: '-0.3px',
              wordBreak: 'keep-all',
              margin: 0,
            }}>
              {title}
            </h2>
            {resolvedDesc && (
              <p style={{
                fontSize: 15.5, color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.85, maxWidth: '38em', marginTop: 22,
              }}>
                {resolvedDesc}
              </p>
            )}
          </div>

          <div className="cta-panel">
            <Link href={L(resolvedPrimary.href)} className="cta-btn-gold">
              {resolvedPrimary.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            {resolvedSecondary && (
              <Link href={L(resolvedSecondary.href)} className="cta-btn-ghost">
                {resolvedSecondary.label}
              </Link>
            )}

            <div style={{ marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
              {c.guarantees.map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', alignItems: 'baseline', gap: 12,
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.14)',
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap' }}>{k}</span>
                  <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
