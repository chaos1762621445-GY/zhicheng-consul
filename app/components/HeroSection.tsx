'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,flexShrink:0}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const PIconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);
const PIconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M12 3v8M8 3h8"/>
  </svg>
);
const PIconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
  </svg>
);
const PIconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <path d="M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const PIconSnow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0}}>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5M17 17l-5 5-5-5"/>
  </svg>
);

const panelItems = [
  { icon: <PIconDoc />, name: '省力化补助金', amount: '最高1,500万円' },
  { icon: <PIconRobot />, name: 'AI导入补助金', amount: '最高350万円' },
  { icon: <PIconUsers />, name: '员工转正助成金', amount: '最高80万円/人' },
  { icon: <PIconGraduate />, name: '员工培训助成金', amount: '最高1亿円' },
  { icon: <PIconSnow />, name: '空调省能更新补助', amount: '最高1,000万円' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div>
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0, ease }}
          >
            在日本经营，{'\n'}政府有钱可以拿
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
          >
            很多华人老板不知道：日本政府每年有大量补助金，专门给中小企业。我们帮你查清楚、申请下来，拿不到不收费。
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
          >
            <Link href="/contact" className="btn-primary">
              立即免费咨询
              <IconArrow />
            </Link>
            <Link href="/subsidies" className="btn-ghost">
              了解补助金种类
              <IconChevron />
            </Link>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
          >
            <div className="hero-trust-item">
              <IconCheck />
              拿不到补助金，一分钱不收
            </div>
            <div className="hero-trust-item">
              <IconCheck />
              已帮 3,000+ 华人老板成功申请
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease }}
        >
          <div className="hero-panel-title">你可能可以申请的补助金</div>
          {panelItems.map((item, i) => (
            <div key={i} className="hero-panel-item">
              <div className="hero-panel-left">
                {item.icon}
                <span className="hero-panel-name">{item.name}</span>
              </div>
              <span className="hero-panel-amount">{item.amount}</span>
            </div>
          ))}
          <div style={{marginTop:16,paddingTop:14,borderTop:'1px solid var(--border)'}}>
            <a href="/contact" style={{fontSize:13,color:'var(--primary)',textDecoration:'none',fontWeight:500}}>→ 不清楚从哪申请？先微信咨询</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
