'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuIcon, ChevronDownIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
  { label: '服务流程', href: '/service' },
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
  { label: '代理合作', href: '/partner' },
];

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-[100] bg-white/[0.92] backdrop-blur-sm border-b border-gray-200 h-[68px] transition-shadow${scrolled ? ' shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="志成コンサル" className="h-9 block" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <div key={item.href} className="relative group">
              <Link href={item.href} className="flex items-center gap-1 text-sm text-[#273951] hover:text-[#533afd] transition-colors">
                {item.label}
                {item.children && <ChevronDownIcon className="w-3 h-3 opacity-50" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-white border border-black/[0.08] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-1.5 z-[200] opacity-0 pointer-events-none translate-y-[-6px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-black/[0.08] rotate-45" />
                  {item.children.map((child, i) => (
                    <span key={child.href}>
                      {item.label === '补助金种类' && i === item.children!.length - 1 && (
                        <div className="h-px bg-black/[0.07] my-1" />
                      )}
                      <Link
                        href={child.href}
                        className="flex items-center px-5 py-2.5 text-sm text-[#273951] border-l-2 border-transparent hover:bg-[#f6f9fc] hover:text-[#533afd] hover:border-[#533afd] transition-all min-h-[44px]"
                      >
                        {child.label}
                      </Link>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="text-sm font-medium text-white bg-[#533afd] px-5 py-2.5 rounded-md hover:bg-[#4434d4] transition-colors inline-flex items-center">
            免费咨询
          </Link>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <button className="md:hidden flex items-center justify-center w-10 h-10" aria-label="菜单">
              <MenuIcon className="w-5 h-5 text-[#273951]" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] pt-14 px-0" showCloseButton>
            <nav className="flex flex-col">
              {NAV_ITEMS.map(item => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className="flex items-center px-6 py-3 text-base font-medium text-[#273951] border-b border-gray-100 min-h-[44px]"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="bg-gray-50/50">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center pl-10 pr-6 py-2.5 text-sm text-[#64748d] border-b border-gray-100 min-h-[44px]"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-6 py-3 text-base font-medium text-[#273951] border-b border-gray-100 min-h-[44px]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-6 pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-[#533afd] text-white rounded-md py-3.5 text-base font-medium hover:bg-[#4434d4] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  免费咨询
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
