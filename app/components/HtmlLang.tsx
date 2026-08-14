'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { localeFromPathname } from '@/lib/i18n/from-path';
import { localeHreflang } from '@/lib/i18n/config';

/**
 * 根 layout 的 <html lang> 只能设一次（zh-CN）。
 * 本组件在客户端根据路径把 documentElement.lang 同步为当前语言，
 * 保证 /en /ja 页面在浏览器与可访问性工具中语言标记正确。
 * （metadata 里的 hreflang / og:locale 仍是各页 SSR 输出的权威 SEO 信号。）
 */
export default function HtmlLang() {
  const pathname = usePathname() || '/';
  useEffect(() => {
    const lc = localeFromPathname(pathname);
    document.documentElement.lang = localeHreflang[lc] === 'zh-Hans' ? 'zh-CN' : localeHreflang[lc];
  }, [pathname]);
  return null;
}
