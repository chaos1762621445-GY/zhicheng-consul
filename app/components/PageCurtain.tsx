'use client';
import { useEffect, useState } from 'react';

export default function PageCurtain() {
  const [mounted, setMounted] = useState(true);
  const [stage, setStage] = useState(0);
  // stage 0 = black full, 1 = content in, 2 = slide up out

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('zc-curtain')) { setMounted(false); return; }

    const t1 = setTimeout(() => setStage(1), 100);   // logo appears
    const t2 = setTimeout(() => setStage(2), 1500);  // slide up
    const t3 = setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('zc-curtain', '1');
    }, 2350);
    return () => [t1,t2,t3].forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#000',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transition: stage === 2 ? 'transform 0.7s cubic-bezier(.76,0,.24,1)' : 'none',
      transform: stage === 2 ? 'translateY(-100%)' : 'translateY(0)',
      pointerEvents: 'none',
    }} aria-hidden="true">
      {/* Logo */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
        transition: 'opacity 0.6s ease',
        opacity: stage >= 1 ? 1 : 0,
      }}>
        <img
          src="/logo.png"
          alt="志成コンサル"
          style={{ height: 48, width: 'auto', filter: 'brightness(0) invert(1)' }}
        />
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}>
          在日华人补助金 · 全程代办
        </div>
      </div>
      {/* Bottom progress line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', background: 'rgba(255,255,255,0.3)',
          animation: stage >= 1 ? 'cprog 1.3s cubic-bezier(.4,0,.2,1) forwards' : 'none',
        }} />
      </div>
      <style>{`
        @keyframes cprog { from{width:0} to{width:100%} }
      `}</style>
    </div>
  );
}
