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

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      transition: 'border-color .2s',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="株式会社 志成コンサル" style={{ height: 36, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div ref={ref} className="nav-desktop" style={{ alignItems: 'center', gap: 0 }}>
          {NAV.map(item => (
            <div key={item.href} style={{ position: 'relative' }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setDrop(drop === item.label ? null : item.label)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '6px 12px', border: 'none',
                      background: 'transparent', cursor: 'pointer',
                      fontSize: 14, fontWeight: 500, color: '#171717',
                      fontFamily: 'inherit',
                      borderRadius: 6,
                      transition: 'background .1s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ opacity: 0.5, transition: 'transform .15s', transform: drop === item.label ? 'rotate(180deg)' : 'none' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {drop === item.label && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 8px)',
                      left: '50%', transform: 'translateX(-50%)',
                      background: '#fff',
                      borderRadius: 8, minWidth: 180,
                      boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px',
                      overflow: 'hidden',
                      padding: 4,
                    }}>
                      {item.children.map(c => (
                        <Link key={c.href} href={c.href} onClick={() => setDrop(null)}
                          style={{ display: 'block', padding: '9px 12px', fontSize: 13.5, fontWeight: 500, color: '#171717', borderRadius: 6, transition: 'background .1s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} style={{ display: 'block', padding: '6px 12px', borderRadius: 6, fontSize: 14, fontWeight: 500, color: '#171717', transition: 'background .1s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/contact" className="nav-cta-desktop" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#171717', color: '#fff',
            padding: '8px 16px',
            borderRadius: 6, fontSize: 13.5, fontWeight: 500,
          }}>
            免费诊断
          </Link>
          <button
            className="nav-mobile-toggle"
            style={{ padding: 8, border: '1px solid #eaeaea', background: '#fff', cursor: 'pointer', borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <div style={{ width: 18, height: 12, position: 'relative' }}>
              <span style={{ position:'absolute', left:0, right:0, top: open? 5: 0, height: 1.5, background: '#171717', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(45deg)' : 'none' }} />
              <span style={{ position:'absolute', left:0, right:0, top: 5, height: 1.5, background: '#171717', borderRadius: 2, transition: 'opacity .15s', opacity: open ? 0 : 1 }} />
              <span style={{ position:'absolute', left:0, right:0, top: open? 5: 10, height: 1.5, background: '#171717', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '100%',
        background: '#fff',
        borderBottom: '1px solid #eaeaea',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        maxHeight: open ? 'calc(100vh - 56px)' : 0,
        overflow: 'hidden auto',
        transition: 'max-height .28s cubic-bezier(.4,0,.2,1)',
      }}>
        <div style={{ padding: '12px 20px 24px' }}>
          {NAV.map(item => (
            <div key={item.href} style={{ marginBottom: 2 }}>
              <Link href={item.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '11px 10px', fontSize: 15, fontWeight: 600, color: '#171717', borderRadius: 6 }}>
                {item.label}
              </Link>
              {item.children?.map(c => (
                <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '9px 10px 9px 26px', fontSize: 13.5, color: '#666', borderRadius: 6 }}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#171717', color: '#fff',
            padding: '12px 20px', borderRadius: 6,
            fontSize: 14, fontWeight: 500, marginTop: 12,
          }}>
            免费诊断
          </Link>
        </div>
      </div>
    </nav>
  );
}
