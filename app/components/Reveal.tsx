'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  direction?: 'up' | 'left' | 'right' | 'scale';
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 若浏览器不支持 IO 或用户偏好减少动画 → 立即显示，绝不隐藏内容
    if (typeof IntersectionObserver === 'undefined' ||
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      setShown(true);
      return;
    }

    // 元素已在视口（首屏/开屏帘幕覆盖期间）→ 直接显示，避免 observer 错过
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); setShown(true); obs.unobserve(el); }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);

    // 兜底：1.5s 后无论如何都显示，杜绝内容永久隐藏
    const safety = setTimeout(() => { el.classList.add('visible'); setShown(true); }, 1500);

    return () => { obs.disconnect(); clearTimeout(safety); };
  }, []);

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal';
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    // @ts-ignore
    <Tag ref={ref} className={`${dirClass} ${delayClass} ${shown ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
