import Link from 'next/link';
import React from 'react';

// Unsplash — Japan business meeting / office
const BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop';

interface CtaSectionProps {
  title: React.ReactNode;
  desc?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export default function CtaSection({
  title,
  desc = '3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，不获批不收费。',
  primary = { href: '/contact', label: '立即免费诊断' },
  secondary = { href: '/subsidies', label: '查看补助金种类' },
}: CtaSectionProps) {
  return (
    <section style={{
      position: 'relative',
      padding: '120px 0',
      overflow: 'hidden',
      background: '#000',
    }}>
      {/* Photo */}
      <img
        src={BG}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 40%',
          opacity: 0.25,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
      }} />

      <div className="wrap" style={{ maxWidth: 680, position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: 11, fontWeight: 400,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: 24,
        }}>
          免费诊断
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.5vw, 52px)',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-1px',
          lineHeight: 1.08,
          marginBottom: 24,
        }}>{title}</h2>

        {desc && (
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, marginBottom: 44 }}>
            {desc}
          </p>
        )}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href={primary.href} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#000',
            padding: '13px 28px',
            fontSize: 14, fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            {primary.label}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
          {secondary && (
            <Link href={secondary.href} style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '13px 28px',
              fontSize: 14, fontWeight: 500,
              letterSpacing: '0.04em',
            }}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
