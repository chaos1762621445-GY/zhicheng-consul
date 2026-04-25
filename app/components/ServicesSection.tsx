'use client';
import Link from 'next/link';
import Reveal from './Reveal';

const services = [
  { tag: '整体上限 1 亿',   name: '省力化补助金（一般型）',   amount: '最高 1,500万円', rate: '补助率最高 50%', desc: '导入 DX 系统、自动化设备实现降本增效。6〜20 人企业最高 1,500 万円，5 人以下企业最高 750 万円，整体上限 1 亿円。', slug: 'seiryoka' },
  { tag: '个人亦可申请',   name: 'AI 导入补助金',  amount: '最高 350万円',   rate: '无员工规模限制',  desc: 'AI 软件采购、系统定制开发、部署调试均可申请。赤字企业、个人事业主门槛宽松。', slug: 'ai-it' },
  { tag: '两档补助',       name: '员工转正助成金', amount: '最高 80万円/人', rate: '半年以上 40万／非新卒首次 80万', desc: '半年以上员工转正每人 40 万日元，非新卒首次转正每人 80 万日元，与培训助成金同步申请时翻倍。', slug: 'career-up' },
  { tag: '同步申请翻倍',   name: '员工培训助成金', amount: '最高 1亿円',     rate: '每人百万级支持', desc: 'AI 营销、AI 运营自动化、AI 效率工具、AI 行情分析课程纳入范围，同步转正申请时补贴翻倍。', slug: 'training' },
  { tag: '东京零负担',      name: '空调节能补助',   amount: '东京 1,000万 / 全国 3亿', rate: '政府 2/3 + 我社 1/3', desc: '东京限定：政府补 2/3、我社补 1/3，零负担换新；其他地区政府补贴 1/2，大阪最高 500 万円。', slug: 'aircon' },
  { tag: '最高 60% 分成',  name: '代理合作',       amount: '最高 60% 分成',  rate: '零加盟费用', desc: '将您的存量客户与我们对接，即享最高 60% 透明分成。周期短、回流稳，无须缴纳任何加盟费。', slug: null },
];

export default function ServicesSection() {
  return (
    <section className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ marginBottom: 64 }}>
            <div style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 11, fontWeight: 500,
              color: '#888',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              可申请补助金范围
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              fontWeight: 700,
              color: '#171717',
              letterSpacing: '-1.2px',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>六大主力补助金，全程代办</h2>
            <p style={{ fontSize: 16, color: '#4d4d4d', lineHeight: 1.7, maxWidth: 520 }}>
              以下是在日华人企业最常申请的补助金类别，我们为您全程操办，不获批不收费。
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
              <div
                style={{
                  padding: '32px 28px',
                  background: '#fff',
                  borderRight: (i % 3 < 2) ? '1px solid #eaeaea' : 'none',
                  borderBottom: i < 3 ? '1px solid #eaeaea' : 'none',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  transition: 'background .15s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fafafa'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
              >
                {/* Tag */}
                <div style={{
                  display: 'inline-flex', marginBottom: 20,
                  background: '#f5f5f5',
                  padding: '3px 10px',
                  borderRadius: 9999,
                  fontSize: 11, fontWeight: 600, color: '#555',
                  alignSelf: 'flex-start',
                }}>
                  {s.tag}
                </div>

                <div style={{ fontSize: 15, fontWeight: 600, color: '#171717', marginBottom: 8, letterSpacing: '-0.2px' }}>{s.name}</div>
                <div style={{
                  fontSize: 28, fontWeight: 800,
                  color: '#171717',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  marginBottom: 4,
                  fontVariantNumeric: 'tabular-nums',
                }}>{s.amount}</div>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 16, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>{s.rate}</div>
                <p style={{ fontSize: 13.5, color: '#4d4d4d', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #eaeaea' }}>
                  {s.slug ? (
                    <Link href={`/subsidies/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: '#171717' }}>
                      了解详情
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  ) : (
                    <Link href="/partner" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: '#171717' }}>
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
  );
}
