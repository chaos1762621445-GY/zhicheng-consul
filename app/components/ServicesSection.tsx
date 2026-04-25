'use client';
import Link from 'next/link';
import Reveal from './Reveal';

// Unsplash — Japan office / professional
const SECTION_BG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop';

const services = [
  { tag: '上限 1 亿', name: '省力化补助金', amount: '最高 1,500万円', rate: '补助率最高 50%', desc: '导入 DX 系统、自动化设备实现降本增效。5人以下最高 750 万，6〜20 人最高 1,500 万円。', slug: 'seiryoka' },
  { tag: '个人亦可', name: 'AI 导入补助金', amount: '最高 350万円', rate: '无员工规模限制', desc: 'AI 软件采购、系统定制开发、部署调试均可申请。赤字企业、个人事业主门槛宽松。', slug: 'ai-it' },
  { tag: '两档补助', name: '员工转正助成金', amount: '最高 80万円/人', rate: '转正 40万 / 首次 80万', desc: '半年以上员工转正每人 40 万，非新卒首次转正每人 80 万，与培训助成金同步申请翻倍。', slug: 'career-up' },
  { tag: '同步翻倍', name: '员工培训助成金', amount: '最高 1亿円', rate: '每人百万级支持', desc: 'AI 营销、自动化运营、效率工具课程纳入范围，同步转正申请时补贴翻倍。', slug: 'training' },
  { tag: '东京零负担', name: '空调节能补助', amount: '东京 1,000万 / 全国 3亿', rate: '政府 2/3 + 我社 1/3', desc: '东京限定：政府补 2/3、我社补 1/3，零负担换新；其他地区政府补贴 1/2。', slug: 'aircon' },
  { tag: '最高 60% 分成', name: '代理合作', amount: '最高 60% 分成', rate: '零加盟费用', desc: '将您的存量客户与我们对接，即享最高 60% 透明分成。周期短、回流稳，无须缴纳任何加盟费。', slug: null },
];

export default function ServicesSection() {
  return (
    <>
      {/* ── Section header — white editorial ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
        <div className="wrap" style={{ padding: '80px 32px 72px' }}>
          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'end',
            }}>
              <div>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: 11, color: '#6e6e73',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>
                  可申请补助金范围
                </div>
                <h2 style={{
                  fontSize: 'clamp(28px,3.8vw,52px)',
                  fontWeight: 700, color: '#1d1d1f',
                  letterSpacing: '-1.2px', lineHeight: 1.05,
                }}>
                  六大主力补助金<br />全程代办
                </h2>
              </div>
              <div>
                <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.75, maxWidth: 400 }}>
                  以下是在日华人企业最常申请的补助金类别，我们为您全程操办，不获批不收费。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cards grid — no radius, hairline borders ── */}
      <section style={{ background: '#f5f5f7' }}>
        <div className="wrap" style={{ padding: '0 32px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            borderLeft: '1px solid #d2d2d7',
            borderTop: '1px solid #d2d2d7',
          }}>
            {services.map((s, i) => (
              <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
                <div style={{
                  background: '#fff',
                  borderRight: '1px solid #d2d2d7',
                  borderBottom: '1px solid #d2d2d7',
                  padding: '36px 28px',
                  display: 'flex', flexDirection: 'column',
                  minHeight: 280,
                  transition: 'background .15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#fafafa')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                >
                  {/* Tag */}
                  <div style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 10, color: '#6e6e73',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: 16,
                  }}>{s.tag}</div>

                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1d1d1f', marginBottom: 10, letterSpacing: '-0.2px' }}>{s.name}</div>

                  <div style={{
                    fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800,
                    color: '#1d1d1f', letterSpacing: '-0.8px',
                    lineHeight: 1.1, marginBottom: 4,
                    fontVariantNumeric: 'tabular-nums',
                  }}>{s.amount}</div>

                  <div style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 11, color: '#86868b',
                    marginBottom: 16,
                  }}>{s.rate}</div>

                  <p style={{ fontSize: 13.5, color: '#6e6e73', lineHeight: 1.75, flex: 1 }}>{s.desc}</p>

                  <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid #e8e8e8' }}>
                    {s.slug ? (
                      <Link href={`/subsidies/${s.slug}`} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 12.5, fontWeight: 600, color: '#1d1d1f',
                        letterSpacing: '0.04em',
                      }}>
                        了解详情
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </Link>
                    ) : (
                      <Link href="/partner" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 12.5, fontWeight: 600, color: '#1d1d1f',
                        letterSpacing: '0.04em',
                      }}>
                        了解代理合作
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
