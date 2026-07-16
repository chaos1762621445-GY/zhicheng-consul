'use client';

export default function WechatFloat() {
  return (
    <a
      href="https://work.weixin.qq.com/kfid/kfcdeef8ec4573ef9f3"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="联系在线客服 免费咨询"
      className="zc-cs-fab"
    >
      {/* 在线脉冲灯 */}
      <span className="zc-cs-dot" aria-hidden>
        <span className="zc-cs-dot-core" />
      </span>

      {/* 客服对话气泡图标 */}
      <span className="zc-cs-icon" aria-hidden>
        <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="8.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="11.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </span>

      {/* 文案 */}
      <span className="zc-cs-text">
        <span className="zc-cs-text-main">免费咨询</span>
        <span className="zc-cs-text-sub">在线顾问 · 即时回复</span>
      </span>

      <style jsx>{`
        .zc-cs-fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          height: 60px;
          padding: 0 22px 0 16px;
          border-radius: 34px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #1f6b68 0%, #1a5c5a 45%, #114240 100%);
          box-shadow: 0 6px 22px rgba(17, 66, 64, 0.34),
            0 2px 6px rgba(17, 66, 64, 0.28),
            inset 0 0 0 1px rgba(196, 162, 58, 0.45);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.28s ease;
          overflow: hidden;
        }
        /* 金色微光扫过 */
        .zc-cs-fab::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 30%, rgba(196, 162, 58, 0.28) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.7s ease;
          pointer-events: none;
        }
        .zc-cs-fab:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(17, 66, 64, 0.42),
            0 4px 10px rgba(17, 66, 64, 0.3),
            inset 0 0 0 1px rgba(196, 162, 58, 0.75);
        }
        .zc-cs-fab:hover::before {
          transform: translateX(120%);
        }
        .zc-cs-fab:active {
          transform: translateY(-1px) scale(0.985);
        }

        /* 图标圆底 */
        .zc-cs-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
        }

        /* 在线脉冲灯 */
        .zc-cs-dot {
          position: absolute;
          top: 11px;
          left: 44px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #34d07f;
          box-shadow: 0 0 0 2px rgba(31, 107, 104, 1);
          z-index: 2;
        }
        .zc-cs-dot-core {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #34d07f;
          animation: zc-cs-pulse 1.9s ease-out infinite;
        }
        @keyframes zc-cs-pulse {
          0% { transform: scale(1); opacity: 0.85; }
          70% { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }

        /* 文案 */
        .zc-cs-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.2;
          white-space: nowrap;
        }
        .zc-cs-text-main {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .zc-cs-text-sub {
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.72);
          margin-top: 2px;
        }

        /* 移动端稍微收窄 */
        @media (max-width: 767px) {
          .zc-cs-fab {
            right: 16px;
            bottom: 16px;
            height: 54px;
            padding: 0 18px 0 13px;
            gap: 10px;
          }
          .zc-cs-icon { width: 36px; height: 36px; }
          .zc-cs-dot { top: 9px; left: 39px; }
          .zc-cs-text-main { font-size: 14px; }
          .zc-cs-text-sub { font-size: 10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .zc-cs-dot-core { animation: none; }
          .zc-cs-fab, .zc-cs-fab::before { transition: none; }
        }
      `}</style>
    </a>
  );
}
