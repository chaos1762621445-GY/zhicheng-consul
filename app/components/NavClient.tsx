'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, y: -8, scaleY: 0.95, transition: { duration: 0.1 } },
};

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-[#e5edf5] h-[68px] transition-shadow${scrolled ? ' shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="志成コンサル" className="h-9 block" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.href)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm text-[#273951] hover:text-[#533afd] transition-colors"
              >
                {item.label}
                {item.children && (
                  <motion.span
                    animate={{ rotate: hoveredMenu === item.href ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-3 h-3 opacity-50" />
                  </motion.span>
                )}
              </Link>

              {item.children && (
                <AnimatePresence>
                  {hoveredMenu === item.href && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: 'top' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-white border border-[#e5edf5] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] py-2 z-[200]"
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e5edf5] rotate-45" />
                      {item.children.map((child, i) => (
                        <span key={child.href}>
                          {item.label === '补助金种类' && i === item.children!.length - 1 && (
                            <div className="h-px bg-[#f0f4f8] my-1" />
                          )}
                          <Link
                            href={child.href}
                            className="flex items-center px-4 py-2.5 text-sm text-[#273951] hover:bg-[#f8fafc] hover:text-[#533afd] transition-colors min-h-[44px]"
                            onClick={() => setHoveredMenu(null)}
                          >
                            {child.label}
                          </Link>
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium text-white bg-[#533afd] px-4 py-2 rounded-md hover:bg-[#4434d4] transition-colors inline-flex items-center"
          >
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
