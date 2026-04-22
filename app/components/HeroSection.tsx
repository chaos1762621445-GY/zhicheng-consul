'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon, ChevronRightIcon, CheckCircleIcon,
  FileTextIcon, BotIcon, UsersIcon, GraduationCapIcon, SnowflakeIcon,
} from 'lucide-react';

const panelItems = [
  { Icon: FileTextIcon, name: '省力化补助金', amount: '最高1,500万円' },
  { Icon: BotIcon, name: 'AI导入补助金', amount: '最高350万円' },
  { Icon: UsersIcon, name: '员工转正助成金', amount: '最高80万円/人' },
  { Icon: GraduationCapIcon, name: '员工培训助成金', amount: '最高1亿円' },
  { Icon: SnowflakeIcon, name: '空调省能更新补助', amount: '最高1,000万円' },
];

export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden py-24">
      {/* Radial gradient halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />
      {/* Decorative orb top-right */}
      <div
        className="absolute top-[-100px] right-[-150px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'rgba(83,58,253,0.12)', filter: 'blur(80px)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_440px] gap-16 items-center relative z-10">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center bg-[rgba(83,58,253,0.08)] text-[#533afd] text-xs px-3 py-1 rounded-full font-medium mb-6">
            在日本政府认定补助金代办
          </div>

          <h1
            className="font-light text-[#061b31] whitespace-pre-line text-center md:text-left"
            style={{ fontSize: 'clamp(44px,5.5vw,58px)', letterSpacing: '-1.4px', lineHeight: 1.03 }}
          >
            在日本经营，{'\n'}政府有钱可以拿
          </h1>

          <p className="text-lg text-[#64748d] leading-[1.75] mt-5 max-w-[500px] text-center md:text-left mx-auto md:mx-0">
            很多华人老板不知道：日本政府每年有大量补助金，专门给中小企业。我们帮你查清楚、申请下来，拿不到不收费。
          </p>

          <div className="flex gap-3 items-center mt-9 flex-wrap justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#533afd] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#4434d4] transition-all shadow-[0_4px_15px_rgba(83,58,253,0.4)] hover:shadow-[0_6px_20px_rgba(83,58,253,0.5)]"
              >
                立即免费咨询
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/subsidies"
                className="inline-flex items-center gap-2 bg-white text-[#533afd] border border-[#b9b9f9] px-6 py-3 rounded-md font-medium text-base hover:bg-[rgba(83,58,253,0.05)] transition-all"
              >
                了解补助金种类
                <ChevronRightIcon className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4 mt-7 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-sm text-[#64748d]">
              <CheckCircleIcon className="w-4 h-4 text-[#15be53] flex-shrink-0" strokeWidth={2} />
              拿不到补助金，一分钱不收
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748d]">
              <CheckCircleIcon className="w-4 h-4 text-[#15be53] flex-shrink-0" strokeWidth={2} />
              已帮 3,000+ 华人老板成功申请
            </div>
          </div>
        </motion.div>

        {/* Right panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block bg-white border border-[#e5edf5] rounded-xl p-7"
          style={{ boxShadow: 'rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px' }}
        >
          <div className="text-[11px] font-medium text-[#64748d] uppercase tracking-[1px] mb-5">你可能可以申请的补助金</div>
          {panelItems.map(({ Icon, name, amount }, i) => (
            <div
              key={i}
              className={`flex items-center justify-between py-3${i < panelItems.length - 1 ? ' border-b border-[#f0f4f8]' : ''}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-[18px] h-[18px] text-[#533afd] flex-shrink-0" strokeWidth={1.8} />
                <span className="text-sm text-[#061b31]">{name}</span>
              </div>
              <span className="text-sm font-semibold text-[#533afd] whitespace-nowrap">{amount}</span>
            </div>
          ))}
          <div className="mt-4 pt-3.5 border-t border-[#f0f4f8]">
            <a href="/contact" className="text-[13px] text-[#533afd] font-medium">→ 不清楚从哪申请？先微信咨询</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
