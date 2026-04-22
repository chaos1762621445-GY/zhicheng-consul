'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV = [
  {
    label: '补助金种类',
    href: '/subsidies',
    children: [
      { label: '省力化补助金', href: '/subsidies/seiryoka', desc: '最高1,500万円' },
      { label: 'AI·IT导入补助金', href: '/subsidies/ai-it', desc: '最高350万円' },
      { label: '员工转正助成金', href: '/subsidies/career-up', desc: '最高80万円/人' },
      { label: '员工培训助成金', href: '/subsidies/training', desc: '最高1亿円' },
      { label: '空调省能更新补助', href: '/subsidies/aircon', desc: '最高1,000万円' },
    ],
  },
  { label: '服务流程', href: '/service' },
  {
    label: '关于我们',
    href: '/about',
    children: [
      { label: '成功案例', href: '/cases', desc: '3000+ 真实案例' },
      { label: '关于志成', href: '/about', desc: '四类持牌专家团队' },
      { label: '常见问题', href: '/faq', desc: '快速答疑' },
      { label: '知识库', href: '/blog', desc: '政策深度解析' },
    ],
  },
  { label: '代理合作', href: '/partner' },
];

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="page-wrap flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="志成コンサル" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div ref={dropRef} className="hidden md:flex items-center gap-1">
          {NAV.map(item => (
            <div key={item.href} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-white border border-slate-200 shadow-lg overflow-hidden"
                      style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
                    >
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdown(null)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                        >
                          <span className="text-[14px] font-medium text-slate-700">{child.label}</span>
                          <span className="text-[12px] text-slate-400">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="px-4 py-2 rounded-lg text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            免费咨询
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-slate-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-slate-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-slate-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4">
          {NAV.map(item => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-[15px] font-medium text-slate-700 hover:text-[#533afd] hover:bg-slate-50"
              >
                {item.label}
              </Link>
              {item.children?.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-10 py-2 text-[14px] text-slate-500 hover:text-[#533afd] hover:bg-slate-50"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 pt-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              免费咨询
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
