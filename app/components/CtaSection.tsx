import Link from 'next/link';
import React from 'react';

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
      padding: '96px 0',
      textAlign: 'center',
      background: '#171717',
      borderTop: '1px solid #eaeaea',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="wrap" style={{ maxWidth: 640, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 11, fontWeight: 500,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          免费诊断
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-1.5px',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>{title}</h2>

        {desc && (
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 40px' }}>
            {desc}
          </p>
        )}

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={primary.href} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#171717',
            padding: '12px 24px',
            borderRadius: 6, fontSize: 15, fontWeight: 600,
            transition: 'opacity .15s',
          }}>
            {primary.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
          {secondary && (
            <Link href={secondary.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              padding: '12px 24px',
              borderRadius: 6, fontSize: 15, fontWeight: 500,
              boxShadow: 'rgba(255,255,255,0.16) 0px 0px 0px 1px',
              transition: 'box-shadow .15s',
            }}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
