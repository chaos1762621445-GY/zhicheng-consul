'use client';
import { useEffect, useState } from 'react';

export default function PageCurtain() {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Only show on first navigation of the session
    if (typeof window === 'undefined') return;
    const shown = sessionStorage.getItem('zc-curtain-shown');
    if (shown) { setMounted(false); return; }

    const exitT = setTimeout(() => setExiting(true), 1400);
    const hideT = setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('zc-curtain-shown', '1');
    }, 2200);
    return () => { clearTimeout(exitT); clearTimeout(hideT); };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`intro-curtain${exiting ? ' is-exiting' : ''}`} aria-hidden="true">
      {/* mesh glow */}
      <div className="intro-glow intro-glow-1" />
      <div className="intro-glow intro-glow-2" />
      {/* subtle grid */}
      <div className="intro-grid" />

      <div className="intro-content">
        <div className="intro-logo-ring">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="32" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
            <circle
              cx="36" cy="36" r="32"
              stroke="var(--gold-bright)" strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="201"
              className="intro-ring-arc"
            />
          </svg>
          <img src="/logo.png" alt="志成コンサル" className="intro-logo" />
        </div>

        <div className="intro-title">
          <span className="intro-kanji">志成コンサル</span>
        </div>
        <div className="intro-sub">在日华人补助金 · 全程代办专家</div>

        <div className="intro-progress">
          <div className="intro-progress-bar" />
        </div>
      </div>
    </div>
  );
}
