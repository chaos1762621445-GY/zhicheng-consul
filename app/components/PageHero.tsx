import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, desc, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display" style={{ marginBottom: desc ? 20 : 0, fontSize: 'clamp(34px, 4.6vw, 52px)' }}>
          {title}
        </h1>
        {desc && (
          <p className="sub" style={{ fontSize: 18, maxWidth: 640 }}>
            {desc}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
