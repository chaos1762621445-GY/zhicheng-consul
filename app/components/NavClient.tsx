'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV = [
  { label: '补助金种类', href: '/subsidies', children: [
    { label: '省力化补助金', href: '/subsidies/seiryoka' },
    { label: 'AI 导入补助金', href: '/subsidies/ai-it' },
    { label: '员工转正助成金', href: '/subsidies/career-up' },
    { label: '员工培训助成金', href: '/subsidies/training' },
    { label: '空调省能补助', href: '/subsidies/aircon' },
  ]},
  { label: '服务流程', href: '/service' },
  { label: '成功案例', href: '/cases' },
  { label: '关于我们', href: '/about', children: [
    { label: '公司介绍', href: '/about' },
    { label: '代理合作', href: '/partner' },
    { label: '常见问题', href: '/faq' },
    { label: '知识库', href: '/blog' },
  ]},
];

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setDrop(null);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 24px rgba(12,21,37,.07)' : 'none',
      transition: 'box-shadow .2s, border-color .2s',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="志成咨询" style={{ height: 32, width: 'auto' }} />
        </Link>

        {/* Desktop */}
        <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="max-md:hidden">
          {NAV.map(item => (
            <div key={item.href} style={{ position: 'relative' }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setDrop(drop === item.label ? null : item.label)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '8px 14px', borderRadius: 8, border: 'none',
                      background: 'transparent', cursor: 'pointer',
                      fontSize: 14, fontWeight: 500, color: 'var(--ink-3)',
                    }}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ transition: 'transform .18s', transform: drop === item.label ? 'rotate(180deg)' : 'none' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {drop === item.label && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 8px)',
                      left: '50%', transform: 'translateX(-50%)',
                      background: '#fff', border: '1px solid var(--line)',
                      borderRadius: 14, minWidth: 180,
                      boxShadow: '0 16px 48px rgba(12,21,37,.12)',
                      overflow: 'hidden',
                    }}>
                      {item.children.map(c => (
                        <Link key={c.href} href={c.href} onClick={() => setDrop(null)}
                          style={{ display: 'block', padding: '11px 18px', fontSize: 14, fontWeight: 500, color: 'var(--ink-3)', borderBottom: '1px solid var(--surface-3)', transition: 'background .12s, color .12s' }}
                          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--surface-2)'; (e.target as HTMLElement).style.color = 'var(--brand)'; }}
                          onMouseLeave={e => { (e.target as HTMLElement).style.background = ''; (e.target as HTMLElement).style.color = 'var(--ink-3)'; }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} style={{ display: 'block', padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'var(--ink-3)', transition: 'color .15s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--brand)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--ink-3)')}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/contact" className="btn btn-fill" style={{ padding: '9px 20px', fontSize: 14 }} data-hide-mobile>
            免费诊断
          </Link>
          <button
            className="max-md:flex md:hidden"
            style={{ display: 'none', padding: 8, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 8 }}
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <div style={{ width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ display: 'block', height: 2, background: 'var(--ink-2)', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(45deg) translate(5px,6px)' : 'none' }} />
              <span style={{ display: 'block', height: 2, background: 'var(--ink-2)', borderRadius: 2, transition: 'all .2s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', height: 2, background: 'var(--ink-2)', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(-45deg) translate(5px,-6px)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        display: open ? 'block' : 'none',
        background: '#fff',
        borderTop: '1px solid var(--surface-3)',
        padding: '12px 0 16px',
      }}>
        {NAV.map(item => (
          <div key={item.href}>
            <Link href={item.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 24px', fontSize: 15, fontWeight: 600, color: 'var(--ink-2)' }}>
              {item.label}
            </Link>
            {item.children?.map(c => (
              <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '9px 40px', fontSize: 14, color: 'var(--body)' }}>
                {c.label}
              </Link>
            ))}
          </div>
        ))}
        <div style={{ padding: '12px 24px 4px' }}>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-fill" style={{ width: '100%', justifyContent: 'center' }}>
            免费诊断
          </Link>
        </div>
      </div>
    </nav>
  );
}
