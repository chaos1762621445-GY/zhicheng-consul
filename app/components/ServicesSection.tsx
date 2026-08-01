'use client';
import Link from 'next/link';
import Reveal from './Reveal';

const services = [
  { tag: '按规模分档', name: '省力化补助金', amount: '750万〜8,000万', unit: '円', rate: '补助率 1/2（小规模 2/3）', desc: '导入 DX 系统、自动化设备实现降本增效。按员工规模分 5 档，5 人以下 750 万、6〜20 人 1,500 万，最高 8,000 万円。', slug: 'seiryoka' },
  { tag: '含个人事业主', name: '数字化·AI 导入补助金', amount: '最高 450万', unit: '円', rate: '补助率 1/2 以内', desc: 'AI/IT 软件采购、系统定制、部署培训可申请（旧称 IT 导入补助金）。需经 IT 导入支援事业者共同申请，有公募締切。', slug: 'ai-it' },
  { tag: '中小企业', name: '员工转正助成金', amount: '最高 80万', unit: '円/人', rate: '按雇用形态+重点对象判定', desc: '有期→正社员重点对象每人 80 万、其他 40 万；无期→正社员 40/20 万/人（中小企业·分 2 期）。', slug: 'career-up' },
  { tag: '按コース分档', name: '员工培训助成金', amount: '1,000万〜1亿', unit: '円', rate: '经费助成 45%〜75%', desc: '人材開発支援助成金。人材育成 1,000 万、人への投資 2,500 万、事業展開リスキリング 1 亿円（时限）。', slug: 'training' },
  { tag: '东京都·3/4', name: '空调节能补助', amount: '东京 4,500万', unit: '円', rate: '助成率最高 3/4', desc: '东京都省エネ设备更新补助（クール・ネット东京）。按 CO2 削减量分 3 档，助成率最高 3/4、上限 4,500 万；回次制抽签。', slug: 'aircon' },
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
