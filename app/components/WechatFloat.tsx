'use client';
import Link from 'next/link';

const WechatIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="24" height="24" style={{flexShrink:0}}>
    <path d="M9.5 4C5.91 4 3 6.69 3 10c0 1.88.94 3.56 2.41 4.69L4.5 17l2.83-1.4c.71.19 1.44.29 2.17.29.33 0 .65-.02.97-.06-.3-.7-.47-1.45-.47-2.23C10 10.26 13.36 7.5 17.5 7.5H18c-.5-2.04-2.32-3.5-8.5-3.5z"/>
    <path d="M14.5 9C11.46 9 9 11.01 9 13.5c0 1.38.65 2.62 1.68 3.48L9.5 19l2.5-1.24c.82.23 1.69.36 2.5.36 3.04 0 5.5-2.01 5.5-4.62 0-2.6-2.46-4.5-5.5-4.5z"/>
  </svg>
);

export default function WechatFloat() {
  return (
    <Link href="/contact" className="wechat-float" aria-label="微信咨询 pr2024188">
      <WechatIcon />
      <span className="wechat-float-label">微信：pr2024188</span>
    </Link>
  );
}
