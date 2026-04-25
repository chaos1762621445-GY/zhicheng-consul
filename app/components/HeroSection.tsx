import Link from 'next/link';

const pipeline = [
  { step: '01', color: '#0a72ef', label: '免费诊断', desc: '精准匹配可申请补助金' },
  { step: '02', color: '#de1d8d', label: '资料代办', desc: '四类持牌专家全程操作' },
  { step: '03', color: '#ff5b4f', label: '到账收费', desc: '不获批，零收费' },
];

export default function HeroSection() {
  return (
    <section style={{
      paddingTop: 120,
      paddingBottom: 120,
      background: '#fff',
      borderBottom: '1px solid #eaeaea',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(#eaeaea 1px, transparent 1px), linear-gradient(90deg, #eaeaea 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        opacity: 0.3,
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860 }}>
        {/* Eyebrow badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#f5f5f5',
          border: '1px solid #e5e5e5',
          borderRadius: 9999,
          padding: '5px 14px',
          fontSize: 12, fontWeight: 600,
          color: '#555',
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          marginBottom: 36,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0a72ef', flexShrink: 0 }} />
          国家认定 · 四类持牌专家联合团队
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 80px)',
          fontWeight: 800,
          color: '#171717',
          lineHeight: 1.02,
          letterSpacing: '-2.4px',
          marginBottom: 32,
          fontStyle: 'normal',
        }}>
          在日华人企业主<br />
          <span style={{ color: '#171717' }}>政府补助金全程代办</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: 20,
          color: '#4d4d4d',
          lineHeight: 1.8,
          maxWidth: 580,
          margin: '0 auto 44px',
          fontWeight: 400,
        }}>
          日本政府每年向中小企业发放大量补助金，大多数企业因不了解政策而错过。
          <strong style={{ color: '#171717', fontWeight: 600 }}>不获批，不收费。</strong>
        </p>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#171717', color: '#fff',
            padding: '12px 24px',
            borderRadius: 6, fontSize: 15, fontWeight: 500,
            transition: 'background .15s',
          }}>
            免费获取诊断报告
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
          <Link href="/subsidies" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#171717',
            padding: '12px 24px',
            borderRadius: 6, fontSize: 15, fontWeight: 500,
            boxShadow: 'rgb(235,235,235) 0px 0px 0px 1px',
            transition: 'box-shadow .15s',
          }}>
            查看补助金种类
          </Link>
        </div>

        {/* Pipeline — Develop / Preview / Ship style */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px inset',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fff',
        }}>
          {pipeline.map((p, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              textAlign: 'left',
              borderRight: i < pipeline.length - 1 ? '1px solid #eaeaea' : 'none',
            }}>
              <div style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 11, fontWeight: 500,
                color: p.color,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
                STEP {p.step}
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#171717', letterSpacing: '-0.3px', marginBottom: 6 }}>
                {p.label}
              </div>
              <div style={{ fontSize: 13, color: '#4d4d4d', lineHeight: 1.6 }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
