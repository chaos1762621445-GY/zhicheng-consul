'use client';
import React, { useEffect, useRef, useState } from 'react';

const IconBriefcase = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12.01"/>
  </svg>
);
const IconYen = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);
const IconBadge = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

interface StatItem {
  endVal: number;
  prefix: string;
  suffix: string;
  label: string;
  desc: string;
  Icon: () => React.ReactElement;
}

const stats: StatItem[] = [
  { endVal: 3000, prefix: '', suffix: '+', label: '企业成功申请', desc: '覆盖餐饮、零售、制造、IT等多个行业', Icon: IconBriefcase },
  { endVal: 8.5,  prefix: '¥', suffix: '億+', label: '累计到账补助金', desc: '真实到账，非预估获批金额', Icon: IconYen },
  { endVal: 4,    prefix: '', suffix: '种', label: '国家认定专业资质', desc: '行政书士·社劳士·税理士·诊断士', Icon: IconBadge },
];

function CountUp({ endVal, prefix, suffix, started }: { endVal: number; prefix: string; suffix: string; started: boolean }) {
  const [display, setDisplay] = useState(endVal);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!started || startedRef.current) return;
    startedRef.current = true;
    const duration = 1600;
    const startTime = performance.now();
    const isDecimal = endVal % 1 !== 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * endVal;
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(endVal);
      }
    };

    setDisplay(0);
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [started, endVal]);

  const formatted = endVal % 1 !== 0 ? display.toFixed(1) : display.toString();
  return <>{prefix}{formatted}{suffix}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--ink)',
        padding: '72px 0',
        overflow: 'hidden',
      }}
    >
      {/* Radial gradient decorations */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(83,58,253,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 90% 50%, rgba(139,92,246,0.12) 0%, transparent 55%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stats-item"
              style={{
                textAlign: 'center',
                padding: '0 40px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              {/* Icon */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(255,255,255,0.08)',
                marginBottom: 20,
              }}>
                <s.Icon />
              </div>

              {/* Number */}
              <div style={{
                fontSize: 'clamp(52px,7vw,80px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-2px',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 10,
              }}>
                <CountUp endVal={s.endVal} prefix={s.prefix} suffix={s.suffix} started={started} />
              </div>

              <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
