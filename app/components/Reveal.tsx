'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  direction?: 'up' | 'left' | 'right' | 'scale';
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal';
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    // @ts-ignore
    <Tag ref={ref} className={`${dirClass} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
