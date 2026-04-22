'use client';
import Link from 'next/link';
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
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(83,58,253,0.10) 0%, transparent 60%)' }}
      />
      {/* Decorative orb top-right */}
      <div
        className="absolute top-[-100px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(83,58,253,0.08)', filter: 'blur(80px)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_420px] gap-16 items-center relative z-10">

        {/* Left content */}
        <div>
          <div className="inline-flex items-center bg-[rgba(83,58,253,0.08)] text-[#533afd] text-xs px-3 py-1.5 rounded-full font-medium mb-6 tracking-wide">
            在日本政府认定补助金代办
          </div>

          <h1
            className="font-light text-[#061b31] text-center md:text-left"
            style={{ fontSize: 'clamp(40px,5.5vw,56px)', letterSpacing: '-1.2px', lineHeight: 1.08 }}
          >
            在日本经营，<br />政府有钱可以拿
          </h1>

          <p className="text-[17px] text-[#64748d] leading-[1.8] mt-6 max-w-[480px] text-center md:text-left mx-auto md:mx-0">
            很多华人老板不知道：日本政府每年有大量补助金，专门给中小企业。我们帮你查清楚、申请下来，拿不到不收费。
          </p>

          <div className="flex gap-3 items-center mt-9 flex-wrap justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#533afd] text-white px-7 py-3.5 rounded-lg font-medium text-[15px] hover:bg-[#4434d4] transition-all shadow-[0_4px_14px_rgba(83,58,253,0.35)] hover:shadow-[0_6px_20px_rgba(83,58,253,0.45)] hover:-translate-y-0.5"
            >
              立即免费咨询
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/subsidies"
              className="inline-flex items-center gap-2 bg-white text-[#533afd] border border-[#d6d9fc] px-7 py-3.5 rounded-lg font-medium text-[15px] hover:bg-[rgba(83,58,253,0.04)] transition-all hover:-translate-y-0.5"
            >
              了解补助金种类
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-[13px] text-[#64748d]">
              <CheckCircleIcon className="w-4 h-4 text-[#15be53] flex-shrink-0" strokeWidth={2.5} />
              拿不到不收费，零风险
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#64748d]">
              <CheckCircleIcon className="w-4 h-4 text-[#15be53] flex-shrink-0" strokeWidth={2.5} />
              3,000+ 华人老板成功申请
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#64748d]">
              <CheckCircleIcon className="w-4 h-4 text-[#15be53] flex-shrink-0" strokeWidth={2.5} />
              全程中文，四类持牌专家
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div
          className="hidden md:block bg-white border border-[#e5edf5] rounded-2xl p-7"
          style={{ boxShadow: 'rgba(50,50,93,0.15) 0px 30px 60px -12px, rgba(0,0,0,0.08) 0px 18px 36px -18px' }}
        >
          <div className="text-[11px] font-semibold text-[#64748d] uppercase tracking-[1.5px] mb-5">你可能可以申请的补助金</div>
          {panelItems.map(({ Icon, name, amount }, i) => (
            <div
              key={i}
              className={`flex items-center justify-between py-3.5${i < panelItems.length - 1 ? ' border-b border-[#f0f4f8]' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(83,58,253,0.08)] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#533afd]" strokeWidth={1.8} />
                </div>
                <span className="text-sm font-medium text-[#273951]">{name}</span>
              </div>
              <span className="text-sm font-bold text-[#533afd] whitespace-nowrap ml-3">{amount}</span>
            </div>
          ))}
          <div className="mt-5 pt-4 border-t border-[#f0f4f8]">
            <a href="/contact" className="inline-flex items-center gap-1.5 text-[13px] text-[#533afd] font-medium hover:underline">
              <ArrowRightIcon className="w-3.5 h-3.5" />
              不清楚能申请什么？先微信咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
