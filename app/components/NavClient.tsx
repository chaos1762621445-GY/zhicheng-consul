'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavClient() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block'}} />
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/subsidies" className="nav-link">补助金种类</Link>
          <Link href="/service" className="nav-link">服务流程</Link>
          <Link href="/blog" className="nav-link">知识库</Link>
          <Link href="/contact" className="nav-cta">免费咨询</Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          aria-label="菜单"
          onClick={() => setOpen(o => !o)}
        >
          <span className={open ? 'hb-line hb-top open' : 'hb-line hb-top'} />
          <span className={open ? 'hb-line hb-mid open' : 'hb-line hb-mid'} />
          <span className={open ? 'hb-line hb-bot open' : 'hb-line hb-bot'} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu">
          <Link href="/subsidies" className="nav-mobile-link" onClick={() => setOpen(false)}>补助金种类</Link>
          <Link href="/service" className="nav-mobile-link" onClick={() => setOpen(false)}>服务流程</Link>
          <Link href="/blog" className="nav-mobile-link" onClick={() => setOpen(false)}>知识库</Link>
          <Link href="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>免费咨询</Link>
        </div>
      )}
    </nav>
  );
}
