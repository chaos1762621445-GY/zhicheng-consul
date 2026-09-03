'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LangSwitcher from './LangSwitcher';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';

export default function NavClient({ locale = 'zh', dict }: { locale?: Locale; dict?: Dictionary }) {
  const t = (dict ?? (zh as unknown as Dictionary)).nav;
  const L = (p: string) => localizedHref(locale, p);

  const NAV = [
    { label: t.subsidies, href: '/subsidies', children: [
      { label: t.subItems.seiryoka, href: '/subsidies/seiryoka' },
      { label: t.subItems['ai-it'], href: '/subsidies/ai-it' },
      { label: t.subItems['career-up'], href: '/subsidies/career-up' },
      { label: t.subItems.training, href: '/subsidies/training' },
      { label: t.subItems.aircon, href: '/subsidies/aircon' },
    ]},
    { label: t.who, href: '/for/chinese-owners', children: [
      { label: t.owners, href: '/for/chinese-owners' },
      { label: t.sole, href: '/for/sole-proprietor' },
      { label: t.compare, href: '/compare' },
      { label: t.tokyo, href: '/area/tokyo' },
    ]},
    { label: t.schedule, href: '/schedule' },
    { label: t.service, href: '/service' },
    { label: t.cases, href: '/cases' },
    { label: t.whitepaper, href: '/whitepaper' },
    { label: t.about, href: '/about', children: [
      { label: t.companyIntro, href: '/about' },
      { label: t.partner, href: '/partner' },
      { label: t.faq, href: '/faq' },
      { label: t.blog, href: '/blog' },
    ]},
  ];

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
    <nav className="nav-material">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        {/* Logo */}
        <Link href={L('/')} onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
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
                    <div className="nav-drop" style={{
                      position: 'absolute', top: 'calc(100% + 8px)',
                      left: '50%', transform: 'translateX(-50%)',
                      minWidth: 180,
                      overflow: 'hidden',
                      padding: 4,
                    }}>
                      {item.children.map(c => (
                        <Link key={c.href} href={L(c.href)} onClick={() => setDrop(null)}
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
                <Link href={L(item.href)} style={{ display: 'block', padding: '6px 12px', borderRadius: 6, fontSize: 14, fontWeight: 500, color: '#171717', transition: 'background .1s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div style={{ marginLeft: 4, color: '#171717' }}><LangSwitcher locale={locale} /></div>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href={L('/contact')} className="nav-cta-desktop" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'linear-gradient(180deg,#2a7a77,#1a5c5a)', color: '#fff',
            padding: '8px 16px',
            borderRadius: 6, fontSize: 13.5, fontWeight: 500,
          }}>
            {t.ctaButton}
          </Link>
          <button
            className="nav-mobile-toggle"
            style={{ padding: 8, border: '1px solid #eaeaea', background: '#fff', cursor: 'pointer', borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <div style={{ width: 18, height: 12, position: 'relative' }}>
              <span style={{ position:'absolute', left:0, right:0, top: open? 5: 0, height: 1.5, background: '#171717', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(45deg)' : 'none' }} />
              <span style={{ position:'absolute', left:0, right:0, top: 5, height: 1.5, background: '#171717', borderRadius: 2, transition: 'opacity .15s', opacity: open ? 0 : 1 }} />
              <span style={{ position:'absolute', left:0, right:0, top: open? 5: 10, height: 1.5, background: '#171717', borderRadius: 2, transition: 'all .2s', transform: open ? 'rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — 材质层，compositor 动画，镜像 easing 对称进出（design.md §A2/A5） */}
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <div style={{ padding: '12px 20px 24px' }}>
          {NAV.map(item => (
            <div key={item.href} style={{ marginBottom: 2 }}>
              <Link href={L(item.href)} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '11px 10px', fontSize: 15, fontWeight: 600, color: '#171717', borderRadius: 6 }}>
                {item.label}
              </Link>
              {item.children?.map(c => (
                <Link key={c.href} href={L(c.href)} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '9px 10px 9px 26px', fontSize: 13.5, color: '#666', borderRadius: 6 }}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href={L('/contact')} onClick={() => setOpen(false)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(180deg,#2a7a77,#1a5c5a)', color: '#fff',
            padding: '12px 20px', borderRadius: 6,
            fontSize: 14, fontWeight: 500, marginTop: 12,
          }}>
            {t.ctaButton}
          </Link>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #eee', color: '#171717' }}>
            <LangSwitcher locale={locale} compact />
          </div>
        </div>
      </div>
    </nav>
  );
}
