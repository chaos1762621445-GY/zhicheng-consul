import Link from 'next/link';
import { ArrowRightIcon, ChevronRightIcon, CheckIcon, FileTextIcon, BotIcon, UsersIcon, GraduationCapIcon, SnowflakeIcon } from 'lucide-react';

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
      <div className="absolute top-[-160px] right-[-120px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,rgba(96,165,250,0.04)_45%,transparent_70%)] blur-[48px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_440px] gap-20 items-center relative z-10">
        <div>
          <h1 className="text-[clamp(40px,5.5vw,56px)] font-light text-[#061b31] tracking-[-1.4px] leading-[1.03] whitespace-pre-line text-center md:text-left">
            在日本经营，{'\n'}政府有钱可以拿
          </h1>
          <p className="text-lg text-[#64748d] leading-[1.75] mt-5 max-w-[520px] text-center md:text-left mx-auto md:mx-0">
            很多华人老板不知道：日本政府每年有大量补助金，专门给中小企业。我们帮你查清楚、申请下来，拿不到不收费。
          </p>
          <div className="flex gap-3 items-center mt-9 flex-wrap justify-center md:justify-start">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#533afd] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#4434d4] transition-colors shadow-sm">
              立即免费咨询
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <Link href="/subsidies" className="inline-flex items-center gap-2 bg-white text-[#533afd] border border-blue-200 px-6 py-3 rounded-md font-medium text-base hover:bg-blue-50 transition-colors">
              了解补助金种类
              <ChevronRightIcon className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-7 items-center md:items-start">
            <div className="flex items-center gap-2 text-sm text-[#64748d]">
              <CheckIcon className="w-3.5 h-3.5 text-[#533afd] flex-shrink-0" strokeWidth={2} />
              拿不到补助金，一分钱不收
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748d]">
              <CheckIcon className="w-3.5 h-3.5 text-[#533afd] flex-shrink-0" strokeWidth={2} />
              已帮 3,000+ 华人老板成功申请
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-white border border-gray-200 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] p-7">
          <div className="text-[11px] font-medium text-[#64748d] uppercase tracking-[1px] mb-5">你可能可以申请的补助金</div>
          {panelItems.map(({ Icon, name, amount }, i) => (
            <div key={i} className={`flex items-center justify-between py-3 ${i < panelItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-center gap-3">
                <Icon className="w-[18px] h-[18px] text-[#533afd] flex-shrink-0" strokeWidth={1.8} />
                <span className="text-sm text-[#061b31]">{name}</span>
              </div>
              <span className="text-sm font-semibold text-[#533afd] whitespace-nowrap">{amount}</span>
            </div>
          ))}
          <div className="mt-4 pt-3.5 border-t border-gray-100">
            <a href="/contact" className="text-[13px] text-[#533afd] font-medium">→ 不清楚从哪申请？先微信咨询</a>
          </div>
        </div>
      </div>
    </section>
  );
}
