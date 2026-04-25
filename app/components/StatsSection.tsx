'use client';
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { endVal: 3000, prefix: '', suffix: '+', label: '企业成功申请', desc: '餐饮·零售·制造·IT' },
  { endVal: 8.5,  prefix: '¥', suffix: '億+', label: '累计到账补助金', desc: '真实到账金额' },
  { endVal: 4,    prefix: '', suffix: '种', label: '国家认定专业资质', desc: '行政书士·社劳士·税理士·诊断士' },
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
    <section ref={sectionRef} style={{
      borderBottom: '1px solid #eaeaea',
      background: '#fafafa',
    }}>
      <div className="wrap" style={{ padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '64px 0',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid #eaeaea' : 'none',
            }}>
              {/* Big number */}
              <div style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 800,
                color: '#171717',
                letterSpacing: '-2.5px',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 12,
              }}>
                <CountUp endVal={s.endVal} prefix={s.prefix} suffix={s.suffix} started={started} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#171717', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
