'use client';
import { useEffect, useState } from 'react';

export default function PageCurtain() {
  const [mounted, setMounted] = useState(true);
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shown = sessionStorage.getItem('zc-curtain-shown');
    if (shown) { setMounted(false); return; }

    // in → hold → out
    const t1 = setTimeout(() => setPhase('hold'), 400);
    const t2 = setTimeout(() => setPhase('out'), 1600);
    const t3 = setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('zc-curtain-shown', '1');
    }, 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        transition: phase === 'out'
          ? 'opacity 0.55s cubic-bezier(.76,0,.24,1), transform 0.55s cubic-bezier(.76,0,.24,1)'
          : 'none',
        opacity: phase === 'out' ? 0 : 1,
        transform: phase === 'out' ? 'translateY(-12px)' : 'none',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #d4d4d4 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)',
      }} />

      {/* Logo + name */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        animation: 'curtain-fadein 0.5s cubic-bezier(.22,1,.36,1) both',
      }}>
        <img
          src="/logo.png"
          alt="志成コンサル"
          style={{ height: 52, width: 'auto', marginBottom: 20 }}
        />
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 11, fontWeight: 500,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: '#999',
          animation: 'curtain-fadein 0.5s cubic-bezier(.22,1,.36,1) 0.15s both',
        }}>
          在日华人补助金 · 全程代办专家
        </div>
      </div>

      {/* Thin progress line at bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 2,
        background: '#f0f0f0',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: '#171717',
          animation: 'curtain-progress 1.5s cubic-bezier(.4,0,.2,1) 0.2s both',
          transformOrigin: 'left',
        }} />
      </div>

      <style>{`
        @keyframes curtain-fadein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes curtain-progress {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
