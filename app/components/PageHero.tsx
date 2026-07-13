import React from 'react';

interface PageHeroProps {
  eyebrow: string; // 渲染为金线上方的小字引导
  title: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
}

/**
 * 内页深 teal 开场带 — 与首页 hero/数据带同一深色世界。
 * 白衬线大标题 + 金色短线 + 金色径向光晕，底部 3px 金线收边。
 */
export default function PageHero({ eyebrow, title, desc, children }: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0f3937 0%, #114240 55%, #12403d 100%)',
        borderBottom: '3px solid var(--gold)',
        padding: 'clamp(88px, 12vw, 148px) 0 clamp(56px, 7vw, 88px)',
        overflow: 'hidden',
      }}
    >
      {/* 金色径向光晕（右上角，呼应首页团队区） */}
      <div aria-hidden style={{
        position: 'absolute', top: '-30%', right: '-10%',
        width: 560, height: 560, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(196,162,58,0.13) 0%, rgba(196,162,58,0.04) 40%, transparent 70%)',
      }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: 12, fontWeight: 600, letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.55)', marginBottom: 14,
        }}>{eyebrow}</div>
        <div style={{ width: 40, height: 2, background: 'var(--gold)', marginBottom: 22 }} />
        <h1 className="serif" style={{
          fontSize: 'clamp(30px, 4.6vw, 54px)', fontWeight: 900,
          color: '#fff', lineHeight: 1.2, letterSpacing: '-0.3px',
          margin: 0, wordBreak: 'keep-all',
        }}>{title}</h1>
        {desc && (
          <p style={{
            fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.72)',
            maxWidth: '46em', marginTop: 20,
          }}>{desc}</p>
        )}
        {children}
      </div>
    </section>
  );
}
