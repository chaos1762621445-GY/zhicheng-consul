'use client';
import Link from 'next/link';
import Reveal from './Reveal';

const IconDoc = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconBot = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/><circle cx="9" cy="15" r="1" fill="var(--brand)"/><circle cx="15" cy="15" r="1" fill="var(--brand)"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGrad = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSnow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5-5-5 5M17 17l-5 5-5-5M2 12l5-5-5 5 5 5M22 12l-5-5 5 5-5 5"/>
  </svg>
);
const IconShake = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);

const services = [
  { Icon: IconDoc,   tag: '整体上限 1 亿',   name: '省力化补助金（一般型）',   amount: '最高 1,500万円', rate: '补助率最高 50%', desc: '导入 DX 系统、自动化设备实现降本增效。6〜20 人企业最高 1,500 万円，5 人以下企业最高 750 万円，整体上限 1 亿円。', slug: 'seiryoka' },
  { Icon: IconBot,   tag: '个人亦可申请',   name: 'AI 导入补助金',  amount: '最高 350万円',   rate: '无员工规模限制',  desc: 'AI 软件采购、系统定制开发、部署调试均可申请。赤字企业、个人事业主门槛宽松。',         slug: 'ai-it' },
  { Icon: IconUsers, tag: '两档补助',       name: '员工转正助成金', amount: '最高 80万円/人', rate: '半年以上 40万／非新卒首次 80万',    desc: '半年以上员工转正每人 40 万日元，非新卒首次转正每人 80 万日元，与培训助成金同步申请时翻倍。',      slug: 'career-up' },
  { Icon: IconGrad,  tag: '同步申请翻倍',   name: '员工培训助成金', amount: '最高 1亿円',     rate: '每人百万级支持', desc: 'AI 营销、AI 运营自动化、AI 效率工具、AI 行情分析课程纳入范围，同步转正申请时补贴翻倍。',   slug: 'training' },
  { Icon: IconSnow,  tag: '东京零负担',      name: '空调节能补助',   amount: '东京 1,000万 / 全国 3亿', rate: '政府 2/3 + 我社 1/3', desc: '东京限定：政府补 2/3、我社补 1/3，零负担换新；其他地区政府补贴 1/2，大阪最高 500 万円。', slug: 'aircon' },
  { Icon: IconShake, tag: '最高 60% 分成',  name: '代理合作',       amount: '最高 60% 分成',  rate: '零加盟费用',     desc: '将您的存量客户与我们对接，即享最高 60% 透明分成。周期短、回流稳，无须缴纳任何加盟费。', slug: null },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="sec" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ marginBottom: 52 }}>
            <div className="eyebrow">可申请补助金范围</div>
            <h2 className="h2" style={{ marginBottom: 12 }}>六大主力补助金，全程代办</h2>
            <p className="sub">以下是在日华人企业最常申请的补助金类别，我们为您全程操办，不获批不收费。</p>
          </div>
        </Reveal>

        <div className="grid-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
              <div
                className="card card-glow"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '3px solid transparent',
                  transition: 'box-shadow .25s ease, transform .22s ease, border-color .22s ease, border-left-color .22s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--brand)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'; }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div className="icon-circle"><s.Icon /></div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', background: 'var(--brand-bg)', padding: '3px 9px', borderRadius: 100 }}>{s.tag}</span>
                </div>

                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{s.name}</div>
                <div className="amount" style={{ fontSize: 28, marginBottom: 4 }}>{s.amount}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>{s.rate}</div>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--surface-3)' }}>
                  {s.slug ? (
                    <Link href={`/subsidies/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--brand)' }}>
                      了解详情 <ArrowIcon />
                    </Link>
                  ) : (
                    <Link href="/partner" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--brand)' }}>
                      了解代理合作 <ArrowIcon />
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
