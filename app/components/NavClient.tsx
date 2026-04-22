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
    const h = () => setScrolled(window.scrollY > 8);
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

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.88)' : 'rgba(255,255,255,.72)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 0 rgba(11,31,58,.03), 0 4px 20px rgba(11,31,58,.04)' : 'none',
      transition: 'all .22s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="志成咨询" style={{ height: 34, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div ref={ref} className="nav-desktop" style={{ alignItems: 'center', gap: 4 }}>
          {NAV.map(item => (
            <div key={item.href} style={{ position: 'relative' }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setDrop(drop === item.label ? null : item.label)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '9px 14px', borderRadius: 8, border: 'none',
                      background: 'transparent', cursor: 'pointer',
                      fontSize: 14.5, fontWeight: 500, color: 'var(--ink-2)',
                      fontFamily: 'inherit',
                      transition: 'color .15s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--brand)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--ink-2)')}
                  >
                    {item.label}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ transition: 'transform .2s', transform: drop === item.label ? 'rotate(180deg)' : 'none' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {drop === item.label && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 10px)',
                      left: '50%', transform: 'translateX(-50%)',
                      background: '#fff', border: '1px solid var(--line)',
                      borderRadius: 14, minWidth: 200,
                      boxShadow: 'var(--shadow-lg)',
                      overflow: 'hidden',
                      padding: 6,
                    }}>
                      {item.children.map(c => (
                        <Link key={c.href} href={c.href} onClick={() => setDrop(null)}
                          style={{ display: 'block', padding: '10px 14px', fontSize: 14, fontWeight: 500, color: 'var(--ink-2)', borderRadius: 8, transition: 'background .12s, color .12s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'; (e.currentTarget as HTMLElement).style.color = 'var(--brand)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} style={{ display: 'block', padding: '9px 14px', borderRadius: 8, fontSize: 14.5, fontWeight: 500, color: 'var(--ink-2)', transition: 'color .15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--brand)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--ink-2)')}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/contact" className="btn btn-fill nav-cta-desktop" style={{ padding: '10px 20px', fontSize: 14 }}>
            免费诊断
          </Link>
          <button
            className="nav-mobile-toggle"
            style={{ padding: 10, border: '1px solid var(--line)', background: '#fff', cursor: 'pointer', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <div style={{ width: 20, height: 14, position: 'relative' }}>
              <span style={{ position:'absolute', left:0, right:0, top: open? 6: 0, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all .22s', transform: open ? 'rotate(45deg)' : 'none' }} />
              <span style={{ position:'absolute', left:0, right:0, top: 6, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'opacity .15s', opacity: open ? 0 : 1 }} />
              <span style={{ position:'absolute', left:0, right:0, top: open? 6: 12, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all .22s', transform: open ? 'rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — full slide-down panel */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '100%',
        background: '#fff',
        borderBottom: '1px solid var(--line)',
        boxShadow: '0 16px 40px rgba(11,31,58,.08)',
        maxHeight: open ? 'calc(100vh - 72px)' : 0,
        overflow: 'hidden auto',
        transition: 'max-height .3s cubic-bezier(.4,0,.2,1)',
      }}>
        <div style={{ padding: '16px 20px 24px' }}>
          {NAV.map(item => (
            <div key={item.href} style={{ marginBottom: 4 }}>
              <Link href={item.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '13px 12px', fontSize: 16, fontWeight: 600, color: 'var(--ink)', borderRadius: 8 }}>
                {item.label}
              </Link>
              {item.children?.map(c => (
                <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '10px 12px 10px 28px', fontSize: 14.5, color: 'var(--ink-3)', borderRadius: 8 }}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-fill" style={{ width: '100%', marginTop: 16 }}>
            免费诊断
          </Link>
        </div>
      </div>
    </nav>
  );
}
