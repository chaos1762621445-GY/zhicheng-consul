'use client';
import { useEffect, useState } from 'react';

export default function PageCurtain() {
  const [mounted, setMounted] = useState(true);
  const [stage, setStage] = useState(0);
  // stage 0 = 初始, 1 = logo入场, 2 = 上滑退场

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('zc-curtain')) { setMounted(false); return; }

    const t1 = setTimeout(() => setStage(1), 120);   // logo + 内容入场
    const t2 = setTimeout(() => setStage(2), 1850);  // 幕布上滑
    const t3 = setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('zc-curtain', '1');
    }, 2750);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background:
          'radial-gradient(120% 90% at 50% 38%, #155350 0%, #0f3937 45%, #0a2b29 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        transition: stage === 2
          ? 'transform 0.85s cubic-bezier(.76,0,.24,1), opacity 0.85s ease'
          : 'none',
        transform: stage === 2 ? 'translateY(-100%)' : 'translateY(0)',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* 金色呼吸光晕 */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 720, height: 720, transform: 'translate(-50%,-58%)',
          background:
            'radial-gradient(circle, rgba(196,162,58,0.16) 0%, rgba(196,162,58,0.05) 35%, transparent 70%)',
          opacity: stage >= 1 ? 1 : 0,
          transition: 'opacity 1s ease',
          animation: stage >= 1 ? 'cglow 3.2s ease-in-out infinite' : 'none',
        }}
      />

      {/* 编织结纹理母题（极淡） */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0 2px, transparent 2px 26px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.012) 0 2px, transparent 2px 26px)',
          opacity: stage >= 1 ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* 主体内容 */}
      <div
        style={{
          position: 'relative',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22,
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(.22,1,.36,1)',
        }}
      >
        {/* Logo + 扫光 */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '4px 8px' }}>
          <img
            src="/logo.png"
            alt="志成コンサル"
            style={{ height: 52, width: 'auto', filter: 'brightness(0) invert(1)', display: 'block' }}
          />
          {/* 金色扫光 */}
          <div
            style={{
              position: 'absolute', top: 0, left: '-60%', width: '60%', height: '100%',
              background:
                'linear-gradient(105deg, transparent 0%, rgba(217,189,94,0.55) 50%, transparent 100%)',
              animation: stage >= 1 ? 'csheen 1.4s ease-in-out 0.5s forwards' : 'none',
            }}
          />
        </div>

        {/* 金色分隔线（从中间展开） */}
        <div
          style={{
            width: stage >= 1 ? 56 : 0, height: 1.5,
            background: 'linear-gradient(90deg, transparent, #c4a23a, transparent)',
            transition: 'width 0.9s cubic-bezier(.22,1,.36,1) 0.3s',
          }}
        />

        {/* 副标题 */}
        <div
          style={{
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontSize: 11, fontWeight: 400,
            letterSpacing: stage >= 1 ? '0.34em' : '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            paddingLeft: '0.34em',
            transition: 'letter-spacing 1.1s cubic-bezier(.22,1,.36,1)',
          }}
        >
          在日华人补助金 · 全程代办
        </div>
      </div>

      {/* 底部金色进度条 */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #c4a23a, #d9bd5e)',
            boxShadow: '0 0 12px rgba(196,162,58,0.6)',
            animation: stage >= 1 ? 'cprog 1.65s cubic-bezier(.4,0,.2,1) forwards' : 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes cprog { from { width: 0 } to { width: 100% } }
        @keyframes csheen { from { left: -60% } to { left: 130% } }
        @keyframes cglow {
          0%, 100% { transform: translate(-50%,-58%) scale(1); opacity: .85 }
          50% { transform: translate(-50%,-58%) scale(1.08); opacity: 1 }
        }
      `}</style>
    </div>
  );
}
