'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    label: '补助金种类',
    href: '/subsidies',
    children: [
      { label: '省力化补助金', href: '/subsidies/seiryoka' },
      { label: 'AI·IT导入补助金', href: '/subsidies/ai-it' },
      { label: '员工转正助成金', href: '/subsidies/career-up' },
      { label: '员工培训助成金', href: '/subsidies/training' },
      { label: '空调省能更新补助', href: '/subsidies/aircon' },
      { label: '全部补助金', href: '/subsidies' },
    ],
  },
  {
    label: '服务流程',
    href: '/service',
  },
  {
    label: '案例&资讯',
    href: '/cases',
    children: [
      { label: '成功案例', href: '/cases' },
      { label: '关于我们', href: '/about' },
      { label: '常见问题 FAQ', href: '/faq' },
      { label: '知识库', href: '/blog' },
    ],
  },
  {
    label: '代理合作',
    href: '/partner',
  },
];

export default function NavClient() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-item { position: relative; }
        .nav-dropdown {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          min-width: 200px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
          padding: 6px 0;
          z-index: 200;
          transition: opacity 0.18s cubic-bezier(.22,1,.36,1), transform 0.18s cubic-bezier(.22,1,.36,1);
        }
        .nav-item:hover .nav-dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: -6px; left: 50%; transform: translateX(-50%);
          width: 12px; height: 12px;
          background: #fff;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          rotate: 45deg;
        }
        .nav-dropdown-item {
          display: block;
          padding: 9px 18px 9px 20px;
          font-size: 14px;
          font-weight: 400;
          color: var(--label);
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: background 0.12s, color 0.12s, border-color 0.15s;
          white-space: nowrap;
          min-height: 44px;
          display: flex;
          align-items: center;
        }
        .nav-dropdown-item:hover {
          background: var(--bg-outer);
          color: var(--primary);
          border-left-color: var(--primary);
        }
        .nav-dropdown-divider { height: 1px; background: rgba(0,0,0,0.07); margin: 4px 0; }
        .nav-link-arrow {
          font-size: 10px;
          margin-left: 3px;
          opacity: 0.5;
          vertical-align: middle;
        }
        /* Mobile submenu */
        .nav-mobile-submenu {
          padding: 0 0 4px 16px;
        }
        .nav-mobile-sublink {
          display: block;
          font-size: 14px;
          color: var(--body);
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          min-height: 44px;
          display: flex;
          align-items: center;
        }
        .nav-mobile-sublink:last-child { border-bottom: none; }
        .nav-mobile-group-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--label);
          padding: 12px 0 4px;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      `}</style>

      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-inner">
          <Link href="/" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block'}} />
          </Link>

          {/* Desktop */}
          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <div key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                  {item.children && <span className="nav-link-arrow">▾</span>}
                </Link>
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child, i) => (
                      <span key={child.href}>
                        {item.label === '补助金种类' && i === item.children!.length - 1 && (
                          <div className="nav-dropdown-divider" />
                        )}
                        <Link href={child.href} className="nav-dropdown-item">{child.label}</Link>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="nav-cta">免费咨询</Link>
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" aria-label="菜单" onClick={() => setOpen(o => !o)}>
            <span className={open ? 'hb-line hb-top open' : 'hb-line hb-top'} />
            <span className={open ? 'hb-line hb-mid open' : 'hb-line hb-mid'} />
            <span className={open ? 'hb-line hb-bot open' : 'hb-line hb-bot'} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="nav-mobile-menu">
            {NAV_ITEMS.map(item => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <div className="nav-mobile-group-label">
                      <Link href={item.href} className="nav-mobile-link" style={{border:'none',padding:0,fontWeight:500,color:'var(--label)',minHeight:'auto'}} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    </div>
                    <div className="nav-mobile-submenu">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href} className="nav-mobile-sublink" onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>免费咨询</Link>
          </div>
        )}
      </nav>
    </>
  );
}
