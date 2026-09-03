'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { localeFromPathname } from '@/lib/i18n/from-path';

const CURTAIN_TAGLINE: Record<string, string> = {
  zh: '在日华人 · 补助金全程代办',
  en: 'Japan Subsidies · Full-Service Support in Chinese',
  ja: '在日華人 · 補助金の全工程サポート',
};

/**
 * 开屏帘幕 V2 — 编辑式题词卡
 * 逐字升起的衬线品牌名 + 金线展开 + 帘幕上提退场（内容视差）。
 * 每个会话只播一次；总时长约 1.2s（提速版，改善移动端 LCP，观感层次保留）。
 */
export default function PageCurtain() {
  const pathname = usePathname() || '/';
  const tagline = CURTAIN_TAGLINE[localeFromPathname(pathname)] ?? CURTAIN_TAGLINE.zh;
  const [mounted, setMounted] = useState(true);
  const [stage, setStage] = useState(0);
  // 0 = 初始, 1 = 入场, 2 = 上提退场

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('zc-curtain')) { setMounted(false); return; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMounted(false);
      sessionStorage.setItem('zc-curtain', '1');
      return;
    }

    const t1 = setTimeout(() => setStage(1), 40);
    const t2 = setTimeout(() => setStage(2), 720);
    const t3 = setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('zc-curtain', '1');
    }, 1230);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  const chars = ['志', '成', 'コ', 'ン', 'サ', 'ル'];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'linear-gradient(180deg, #0f3937 0%, #114240 55%, #0d3331 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        transition: stage === 2 ? 'transform .55s cubic-bezier(.83,0,.17,1)' : 'none',
        transform: stage === 2 ? 'translateY(-100.5%)' : 'translateY(0)',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      {/* 金色光晕（静态，不呼吸——克制） */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 640, height: 640, transform: 'translate(-50%,-52%)',
        background: 'radial-gradient(circle, rgba(196,162,58,0.10) 0%, transparent 65%)',
      }} />

      {/* 主体：内容在退场时轻微下坠形成视差 */}
      <div
        style={{
          position: 'relative', textAlign: 'center',
          transition: stage === 2 ? 'transform .55s cubic-bezier(.83,0,.17,1), opacity .35s ease' : 'none',
          transform: stage === 2 ? 'translateY(60px)' : 'translateY(0)',
          opacity: stage === 2 ? 0.4 : 1,
        }}
      >
        {/* 品牌名 — 逐字升起 */}
        <div className="serif" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'baseline',
          fontSize: 'clamp(38px, 7vw, 64px)', fontWeight: 900,
          color: '#fff', letterSpacing: '0.04em', lineHeight: 1,
        }}>
          {chars.map((ch, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
              <span style={{
                display: 'inline-block',
                transform: stage >= 1 ? 'translateY(0)' : 'translateY(110%)',
                transition: `transform .42s cubic-bezier(.22,1,.36,1) ${0.05 + i * 0.03}s`,
                // 假名比汉字小一号，形成节奏
                fontSize: i >= 2 ? '0.62em' : '1em',
                color: i >= 2 ? 'rgba(255,255,255,0.85)' : '#fff',
              }}>{ch}</span>
            </span>
          ))}
        </div>

        {/* 金线 — 从中心展开 */}
        <div style={{
          width: stage >= 1 ? 64 : 0, height: 2, margin: '26px auto 22px',
          background: 'var(--gold, #c4a23a)',
          transition: 'width .5s cubic-bezier(.22,1,.36,1) .24s',
        }} />

        {/* 题词 — 衬线，淡入 */}
        <div className="serif" style={{
          fontSize: 14, fontWeight: 600, letterSpacing: '0.42em',
          paddingLeft: '0.42em',
          color: 'rgba(255,255,255,0.55)',
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity .45s ease .3s, transform .45s cubic-bezier(.22,1,.36,1) .3s',
        }}>
          {tagline}
        </div>
      </div>

      {/* 帘幕下摆的金色缘线——上提时像布料的收边 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, transparent 8%, #c4a23a 50%, transparent 92%)',
        opacity: stage >= 1 ? 1 : 0,
        transition: 'opacity .6s ease .3s',
      }} />
    </div>
  );
}
