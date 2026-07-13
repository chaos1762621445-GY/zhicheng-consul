'use client';
import Link from 'next/link';
import Reveal from './Reveal';

const services = [
  { tag: '上限 1 亿', name: '省力化补助金', amount: '最高 1,500万', unit: '円', rate: '补助率最高 50%', desc: '导入 DX 系统、自动化设备实现降本增效。5人以下最高 750 万，6〜20 人最高 1,500 万円。', slug: 'seiryoka' },
  { tag: '个人亦可', name: 'AI 导入补助金', amount: '最高 350万', unit: '円', rate: '无员工规模限制', desc: 'AI 软件采购、系统定制开发、部署调试均可申请。赤字企业、个人事业主门槛宽松。', slug: 'ai-it' },
  { tag: '两档补助', name: '员工转正助成金', amount: '最高 80万', unit: '円/人', rate: '转正 40万 / 首次 80万', desc: '半年以上员工转正每人 40 万，非新卒首次转正每人 80 万，与培训助成金同步申请翻倍。', slug: 'career-up' },
  { tag: '同步翻倍', name: '员工培训助成金', amount: '最高 1亿', unit: '円', rate: '每人百万级支持', desc: 'AI 营销、自动化运营、效率工具课程纳入范围，同步转正申请时补贴翻倍。', slug: 'training' },
  { tag: '东京零负担', name: '空调节能补助', amount: '东京 1,000万', unit: '/ 全国 3亿', rate: '政府 2/3 + 我社 1/3', desc: '东京限定：政府补 2/3、我社补 1/3，零负担换新；其他地区政府补贴 1/2。', slug: 'aircon' },
  { tag: '零加盟费', name: '代理合作', amount: '最高 60%', unit: '分成', rate: '零加盟费用', desc: '将您的存量客户与我们对接，即享最高 60% 透明分成。周期短、回流稳，无须缴纳任何加盟费。', slug: null },
];

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function ServicesSection() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e8e8' }}>
      <div className="wrap services-cards-wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
        {/* Header — 垂直堆叠（单一信息焦点） */}
        <Reveal>
          <div style={{ maxWidth: 620, marginBottom: 56 }}>
            <h2 className="h2 ed-h" style={{ marginBottom: 16 }}>
              六大主力补助金 全程代办
            </h2>
            <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.75, maxWidth: '46ch' }}>
              以下是在日华人企业最常申请的补助金类别，我们为您全程操办，不获批不收费。
            </p>
          </div>
        </Reveal>

        {/* 编辑式服务表 — hairline 行，衬线大数 */}
        <div className="svc-table">
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
              <Link href={s.slug ? `/subsidies/${s.slug}` : '/partner'} className="svc-item">
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.08em', marginBottom: 6 }}>{s.tag}</div>
                  <div className="svc-name">{s.name}</div>
                </div>
                <div>
                  <div className="svc-amount">{s.amount}<span className="svc-unit">{s.unit}</span></div>
                  <div style={{ fontSize: 12, color: '#86868b', marginTop: 4 }}>{s.rate}</div>
                </div>
                <p className="svc-desc">{s.desc}</p>
                <span className="svc-arrow"><Arrow /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
