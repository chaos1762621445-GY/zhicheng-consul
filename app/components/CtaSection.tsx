import Link from 'next/link';
import React from 'react';

interface CtaSectionProps {
  title: React.ReactNode;
  desc?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

/**
 * CTA V2 — 编辑式收尾（无素材图）
 * 深 teal 场 + 巨型描边「診断」水印（白皮书封面基因）
 * 左：衬线大标题；右：行动栏（金色主按钮 + 保障微文案）
 */
export default function CtaSection({
  title,
  desc = '3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，不获批不收费。',
  primary = { href: '/contact', label: '立即免费诊断' },
  secondary = { href: '/subsidies', label: '查看补助金种类' },
}: CtaSectionProps) {
  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(88px, 10vw, 140px) 0',
      overflow: 'hidden',
      background: 'linear-gradient(165deg, #0f3937 0%, #114240 48%, #0d3331 100%)',
      borderTop: '3px solid var(--gold)',
    }}>
      {/* 巨型描边水印 — 白皮书封面「2026」同款基因 */}
      <div aria-hidden="true" className="serif cta-watermark">診断</div>

      {/* 金色径向光晕 */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-40%', left: '-8%',
        width: 620, height: 620, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(196,162,58,0.10) 0%, transparent 68%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cta-grid">
          {/* 左栏：陈述 */}
          <div>
            <div style={{ width: 42, height: 3, background: 'var(--gold)', marginBottom: 26 }} />
            <h2 className="serif" style={{
              fontSize: 'clamp(28px, 3.6vw, 50px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.22,
              letterSpacing: '-0.3px',
              wordBreak: 'keep-all',
              margin: 0,
            }}>
              {title}
            </h2>
            {desc && (
              <p style={{
                fontSize: 15.5, color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.85, maxWidth: '38em', marginTop: 22,
              }}>
                {desc}
              </p>
            )}
          </div>

          {/* 右栏：行动栏 */}
          <div className="cta-panel">
            <Link href={primary.href} className="cta-btn-gold">
              {primary.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            {secondary && (
              <Link href={secondary.href} className="cta-btn-ghost">
                {secondary.label}
              </Link>
            )}

            {/* 保障微文案 — hairline 分隔 */}
            <div style={{ marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
              {[
                ['不获批不收费', '成功报酬制，申请失败分文不取'],
                ['工作日当日回复', '微信 lzl238888 直连中文顾问'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', alignItems: 'baseline', gap: 12,
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.14)',
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap' }}>{k}</span>
                  <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
