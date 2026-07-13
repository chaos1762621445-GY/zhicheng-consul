import Link from 'next/link';

// Unsplash photos — free commercial use
// Tokyo night cityscape / Japan business
const BG = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1800&q=80&auto=format&fit=crop'; // Tokyo night

const trust = [
  '不获批不收费',
  '3,000+ 企业成功',
  '四类国家认定专家',
  '全程中文',
];

export default function HeroSection() {
  return (
    <>
      {/* ── HERO — dark cinematic ── */}
      <section className="hero-section">
        {/* Photo */}
        <img
          src={BG}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: 0.30,
          }}
        />
        {/* Brand-tinted gradient overlay — teal 调，与开屏帘幕统一 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,57,55,0.72) 0%, rgba(10,43,41,0.86) 55%, #0a2b29 100%)',
        }} />
        {/* 金色径向光晕 — 右上呼吸 */}
        <div className="hero-glow" style={{
          position: 'absolute', top: '-12%', right: '-6%',
          width: 620, height: 620, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,162,58,0.16) 0%, rgba(196,162,58,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* 细网格纹理（极淡） */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)',
        }} />

        {/* Content */}
        <div className="wrap hero-content">
          {/* Label */}
          <div className="hero-anim hero-anim-1" style={{
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontSize: 11, fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 24,
          }}>
            国家认定 · 四类持牌专家联合团队
          </div>

          {/* Main headline — 衬线体，金色实色强调（无渐变文字） */}
          <h1 className="hero-anim hero-anim-2 serif" style={{
            fontSize: 'clamp(38px, 6vw, 82px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.14,
            letterSpacing: '0',
            marginBottom: 28,
            maxWidth: 860,
          }}>
            在日经营<br />
            <span style={{ color: '#e3c766' }}>政府补助金</span><br />
            全程代办到账
          </h1>

          {/* Sub */}
          <p className="hero-anim hero-anim-3" style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.68)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 40,
          }}>
            日本政府每年向中小企业发放大量补助金，大多数企业因不了解政策而白白错过。
            <strong style={{ color: '#fff', fontWeight: 600 }}>不获批，不收费。</strong>
          </p>

          {/* CTA */}
          <div className="hero-cta-row hero-anim hero-anim-4" style={{ marginBottom: 52 }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#1a5c5a',
              padding: '13px 28px',
              fontSize: 14, fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'opacity .15s',
            }}>
              免费获取诊断报告
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link href="/subsidies" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '13px 28px',
              fontSize: 14, fontWeight: 500,
              letterSpacing: '0.04em',
            }}>
              查看补助金种类
            </Link>
          </div>

          {/* Trust bar — 细竖线分隔（无装饰点） */}
          <div className="hero-trust-bar hero-anim hero-anim-5">
            {trust.map((t, i) => (
              <div key={t} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                fontSize: 12.5, color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.08em',
              }}>
                {i > 0 && <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />}
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — white editorial ── */}
      <section style={{
        background: '#fff',
        borderBottom: '1px solid #e8e8e8',
      }}>
        <div className="wrap">
          <div className="grid-stats-3">
            {[
              { val: '3,000+', label: '企业成功申请', note: '餐饮·零售·制造·IT' },
              { val: '¥8.5億+', label: '累计到账补助金', note: '真实到账金额' },
              { val: '4 种', label: '国家认定专业资质', note: '行政书士·社劳士·税理士·诊断士' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '52px 0',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid #e8e8e8' : 'none',
              }}>
                <div className="stat-v" style={{ marginBottom: 10 }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: '#6e6e73' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
