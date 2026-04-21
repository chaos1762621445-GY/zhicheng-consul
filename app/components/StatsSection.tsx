'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

function CountUp({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => {
        const factor = Math.pow(10, decimals);
        setValue(Math.round(v * factor) / factor);
      },
    });
    return controls.stop;
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals ? value.toFixed(decimals) : value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">
            <CountUp target={3000} suffix="+" />
          </div>
          <div className="stat-label">成功申请案例</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            <CountUp target={8.5} decimals={1} prefix="¥" suffix="億+" />
          </div>
          <div className="stat-label">累计获批总额</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            <CountUp target={4} suffix="种" />
          </div>
          <div className="stat-label">持牌专业资质</div>
        </div>
      </div>
    </section>
  );
}
