'use client';
import React, { useEffect, useRef, useState } from 'react';

const IconBriefcase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);
const IconYen = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3l5 8 5-8"/><path d="M7 13h10"/><path d="M7 17h10"/><path d="M12 11v10"/>
  </svg>
);
const IconBadge = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    const duration = 1800;
    const startTime = performance.now();
    const isDecimal = endVal % 1 !== 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
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

  const formatted = endVal % 1 !== 0 ? display.toFixed(1) : display.toLocaleString('en-US');
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
    <section ref={sectionRef} className="stats-wrap">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stats-item">
              <div className="icon-circle-lg" style={{ margin: '0 auto 24px' }}>
                <s.Icon />
              </div>

              <div style={{
                fontSize: 'clamp(56px, 7.5vw, 84px)',
                fontWeight: 800,
                color: '#000',
                letterSpacing: '-2.5px',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 14,
                textShadow: '0 1px 0 rgba(255,255,255,0.8)',
              }}>
                <CountUp endVal={s.endVal} prefix={s.prefix} suffix={s.suffix} started={started} />
              </div>

              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
