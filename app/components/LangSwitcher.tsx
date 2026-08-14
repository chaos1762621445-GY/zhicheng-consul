'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n/config';

// 把当前路径换成目标语言的等价路径。
// zh 无前缀；en/ja 带前缀。切换时保留后续 path。
function swapLocalePath(pathname: string, target: Locale): string {
  // 剥掉现有语言前缀
  let rest = pathname;
  const m = pathname.match(/^\/(en|ja)(\/.*|$)/);
  if (m) rest = m[2] || '/';
  if (rest === '') rest = '/';
  if (target === 'zh') return rest;
  return `/${target}${rest === '/' ? '' : rest}`;
}

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export default function LangSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div ref={ref} className="zc-lang" style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="切换语言 / Switch language / 言語切替"
        aria-expanded={open}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'transparent', border: 'none', cursor: 'pointer',
          font: 'inherit', color: 'inherit', padding: compact ? '6px 4px' : '8px 6px',
          fontSize: 13.5, fontWeight: 500, letterSpacing: '0.02em',
        }}
      >
        <GlobeIcon />
        <span>{localeNames[locale]}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="zc-lang-menu" style={{
          position: 'absolute', top: '100%', right: 0, marginTop: 6, minWidth: 132,
          background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(14px)',
          border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10,
          boxShadow: '0 8px 28px rgba(0,0,0,0.12)', overflow: 'hidden', zIndex: 1200,
        }}>
          {locales.map(lc => (
            <a
              key={lc}
              href={swapLocalePath(pathname, lc)}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px', fontSize: 13.5, textDecoration: 'none',
                color: lc === locale ? 'var(--brand)' : '#333',
                fontWeight: lc === locale ? 700 : 500,
                background: lc === locale ? 'rgba(26,92,90,0.06)' : 'transparent',
              }}
            >
              {localeNames[lc]}
              {lc === locale && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
