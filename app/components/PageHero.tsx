import React from 'react';

interface PageHeroProps {
  eyebrow: string; // 保留 API 兼容——现渲染为金线上方的小字引导
  title: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, desc, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="display ed-h" style={{ marginBottom: desc ? 22 : 0, fontSize: 'clamp(34px, 4.6vw, 54px)' }}>
          {title}
        </h1>
        {desc && (
          <p className="sub" style={{ fontSize: 17.5, maxWidth: 640 }}>
            {desc}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
