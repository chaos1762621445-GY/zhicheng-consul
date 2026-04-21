'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
    <circle cx="9" cy="15" r="1" fill="#533afd"/>
    <circle cx="15" cy="15" r="1" fill="#533afd"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5M17 17l-5 5-5-5M2 12l5-5-5 5 5 5M22 12l-5-5 5 5-5 5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,flexShrink:0}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const services = [
  {
    icon: <IconDoc />,
    badge: '整体上限极高',
    name: '省力化补助金',
    amount: '最高1,500万円',
    rate: '补助率最高50%',
    desc: '导入DX系统、自动化设备实现降本增效。6〜20人企业最高1,500万円，5人以下最高750万円，整体上限1亿円。',
    slug: 'seiryoka',
  },
  {
    icon: <IconRobot />,
    badge: '个人也能申请',
    name: 'AI导入补助金',
    amount: '最高350万円',
    rate: '个人事业主亦可申请',
    desc: 'AI软件采购、系统定制开发、部署调试费用均可申请。个人事业主、赤字企业均可，门槛宽松。',
    slug: 'ai-it',
  },
  {
    icon: <IconUsers />,
    badge: '员工转正有补贴',
    name: '员工转正助成金',
    amount: '最高80万円/人',
    rate: '在职半年以上转正补助',
    desc: '将兼职或合同员工转为正社员。在职半年以上转正补助40万円/人，首次转正非新卒最高80万円/人。',
    slug: 'career-up',
  },
  {
    icon: <IconGraduate />,
    badge: '员工培训有补贴',
    name: '员工培训助成金',
    amount: '最高1亿円',
    rate: '同步转正申请翻倍',
    desc: '同步转正申请，补贴资金翻倍。AI营销获客、运营自动化、数据分析等课程，每人百万级支持。',
    slug: 'training',
  },
  {
    icon: <IconSnow />,
    badge: '以旧换新省大钱',
    name: '空调省能更新补助',
    amount: '最高1,000万円',
    rate: '东京政府补助2/3',
    desc: '旧空调以旧换新：东京政府补助2/3+我社补贴1/3=几乎零负担。大阪最高500万円，全国最高3亿円。',
    slug: 'aircon',
  },
  {
    icon: <IconHandshake />,
    badge: '推荐客户得分成',
    name: '代理合作',
    amount: '60% 分成',
    rate: '周期短、回流稳',
    desc: '将您的存量客户与我们对接，即可获得60%透明分成。周期短、回流稳，无需缴纳任何加盟费用。',
    slug: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-std" style={{ background: '#ffffff' }}>
      <div className="section-inner" ref={ref}>
        <motion.div
          style={{ maxWidth: 600, marginBottom: 56 }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">你能申请什么</div>
          <h2 className="section-title">主要补助金种类</h2>
          <p className="section-desc">以下是在日华人企业最常申请的补助金，我们为你全程操办。</p>
        </motion.div>

        <motion.div
          className="service-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="service-icon-wrap">{s.icon}</div>
              <div className="service-badge">{s.badge}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-amount">{s.amount}</div>
              <div className="service-rate">{s.rate}</div>
              <p className="service-desc">{s.desc}</p>
              {s.slug && (
                <Link href={`/subsidies/${s.slug}`} className="service-link">
                  查看详情
                  <span className="service-link-arrow"><IconArrowRight /></span>
                </Link>
              )}
              <div style={{marginTop:12,paddingTop:10,borderTop:'1px solid var(--border)',fontSize:12,color:'var(--body)'}}>→ 微信咨询：pr2024188</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
