import Link from 'next/link';
import React from 'react';

interface CtaSectionProps {
  title: React.ReactNode;
  desc?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function CtaSection({
  title,
  desc = '3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，不获批不收费。',
  primary = { href: '/contact', label: '立即免费诊断' },
  secondary = { href: '/subsidies', label: '查看补助金种类' },
}: CtaSectionProps) {
  return (
    <section style={{
      position: 'relative',
      padding: '96px 0',
      textAlign: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)',
      borderTop: '1px solid var(--line)',
    }}>
      <div className="hero-orb" style={{ width: 480, height: 480, background: 'rgba(30,64,175,0.08)', top: -140, right: -80 }} />
      <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -100, left: -60, filter: 'blur(70px)' }} />
      <div className="wrap" style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="eyebrow" style={{ margin: '0 auto 20px' }}>免费诊断</div>
        <h2 className="h2" style={{ marginBottom: 18 }}>{title}</h2>
        {desc && (
          <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 36px' }}>
            {desc}
          </p>
        )}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={primary.href} className="btn btn-fill">
            {primary.label}
            <ArrowIcon />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
