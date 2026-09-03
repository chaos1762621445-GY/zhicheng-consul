'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { localeFromPathname } from '@/lib/i18n/from-path';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/href';

/**
 * 移动端底部固定操作栏：电话｜企业微信｜免费诊断。
 * 仅 <768px 显示；滚动超过 40% 视口后出现；contact 页隐藏（避免与表单重叠）。
 */
export default function MobileActionBar() {
  const pathname = usePathname() || '/';
  const locale = localeFromPathname(pathname);
  const m = getDictionary(locale).mobileBar;
  const [show, setShow] = useState(false);
  const onContact = /\/contact(\/|$)/.test(pathname);

  useEffect(() => {
    const h = () => setShow(window.scrollY > window.innerHeight * 0.4);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  if (onContact) return null;
  return (
    <div className={`zc-mbar${show ? ' show' : ''}`} role="navigation" aria-label={m.diagnose}>
      <a href="tel:0362659756" className="zc-mbar-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>{m.call}</span>
      </a>
      <a href="https://work.weixin.qq.com/kfid/kfcdeef8ec4573ef9f3" target="_blank" rel="noopener noreferrer" className="zc-mbar-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span>{m.wecom}</span>
      </a>
      <Link href={localizedHref(locale, '/contact')} className="zc-mbar-btn zc-mbar-primary">
        <span>{m.diagnose}</span>
      </Link>
    </div>
  );
}
