'use client';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

function useCounter(end: number, duration: number, active: boolean) {
  // Start at end value so SSR/static screenshots show correct numbers
  const [value, setValue] = useState(end);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active || started) return;
    setStarted(true);
    setValue(0);
    const startTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(Math.round(eased * end));
      if (elapsed < 1) rafId = requestAnimationFrame(tick);
      else setValue(end);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  return value;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const c1 = useCounter(3000, 2, isInView);
  const c2 = useCounter(85, 2, isInView);
  const c3 = useCounter(4, 1.5, isInView);

  return (
    <section className="bg-[#F8FAFC] py-20 border-t border-b border-[#e5edf5]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 grid grid-cols-3">
        <div className="text-center px-4 md:px-8 border-r border-[#e5edf5]">
          <div
            className="font-bold text-[#533afd] tracking-[-3px] leading-none tabular-nums"
            style={{ fontSize: 'clamp(48px,6vw,72px)' }}
          >
            {c1.toLocaleString()}+
          </div>
          <div className="text-sm text-[#64748d] mt-3">华人老板成功申请</div>
        </div>
        <div className="text-center px-4 md:px-8 border-r border-[#e5edf5]">
          <div
            className="font-bold text-[#533afd] tracking-[-3px] leading-none tabular-nums"
            style={{ fontSize: 'clamp(48px,6vw,72px)' }}
          >
            ¥{(c2 / 10).toFixed(1)}億+
          </div>
          <div className="text-sm text-[#64748d] mt-3">已到账补助金总额</div>
        </div>
        <div className="text-center px-4 md:px-8">
          <div
            className="font-bold text-[#533afd] tracking-[-3px] leading-none tabular-nums"
            style={{ fontSize: 'clamp(48px,6vw,72px)' }}
          >
            {c3}种
          </div>
          <div className="text-sm text-[#64748d] mt-3">国家认定专业资质</div>
        </div>
      </div>
    </section>
  );
}
