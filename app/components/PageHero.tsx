import React from 'react';
import Link from 'next/link';

interface Crumb { label: string; href?: string }
interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
  crumbs?: Crumb[];
  /** 右侧速查标签（如 受付状态 / 截止 / 对象） */
  facts?: { label: string; value: string }[];
  /** 默认浅暖底；仅少数页需要深底时传 'dark' */
  tone?: 'light' | 'dark';
}

/**
 * 内页开场带（2026-09 改版）：默认浅暖底 + 左金竖条 + 面包屑 + 可选速查标签。
 * 深底只保留首页 hero / CTA / Footer，减少全站深色比例。
 */
export default function PageHero({ eyebrow, title, desc, children, crumbs, facts, tone = 'light' }: PageHeroProps) {
  const dark = tone === 'dark';
  return (
    <section className={`ph ${dark ? 'ph-dark' : 'ph-light'}`}>
      <div className="wrap ph-inner">
        <div className="ph-main">
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="breadcrumb" className="ph-crumbs">
              {crumbs.map((c, i) => (
                <span key={i}>
                  {i > 0 && <span className="ph-crumb-sep">/</span>}
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <div className="ph-eyebrow">{eyebrow}</div>
          <h1 className="serif ph-title">{title}</h1>
          {desc && <p className="ph-desc">{desc}</p>}
          {children}
        </div>
        {facts && facts.length > 0 && (
          <aside className="ph-facts" aria-label="quick facts">
            {facts.map((f, i) => (
              <div key={i} className="ph-fact">
                <span className="ph-fact-label">{f.label}</span>
                <span className="ph-fact-value">{f.value}</span>
              </div>
            ))}
          </aside>
        )}
      </div>
    </section>
  );
}
