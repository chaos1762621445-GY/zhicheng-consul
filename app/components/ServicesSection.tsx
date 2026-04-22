import Link from 'next/link';
import { FileTextIcon, BotIcon, UsersIcon, GraduationCapIcon, SnowflakeIcon, HeartHandshakeIcon, ArrowRightIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    Icon: FileTextIcon,
    badge: '整体上限极高',
    name: '省力化补助金',
    amount: '最高1,500万円',
    rate: '补助率最高50%',
    desc: '导入DX系统、自动化设备实现降本增效。6〜20人企业最高1,500万円，5人以下最高750万円，整体上限1亿円。',
    slug: 'seiryoka',
  },
  {
    Icon: BotIcon,
    badge: '个人也能申请',
    name: 'AI导入补助金',
    amount: '最高350万円',
    rate: '个人事业主亦可申请',
    desc: 'AI软件采购、系统定制开发、部署调试费用均可申请。个人事业主、赤字企业均可，门槛宽松。',
    slug: 'ai-it',
  },
  {
    Icon: UsersIcon,
    badge: '员工转正有补贴',
    name: '员工转正助成金',
    amount: '最高80万円/人',
    rate: '在职半年以上转正补助',
    desc: '将兼职或合同员工转为正社员。在职半年以上转正补助40万円/人，首次转正非新卒最高80万円/人。',
    slug: 'career-up',
  },
  {
    Icon: GraduationCapIcon,
    badge: '员工培训有补贴',
    name: '员工培训助成金',
    amount: '最高1亿円',
    rate: '同步转正申请翻倍',
    desc: '同步转正申请，补贴资金翻倍。AI营销获客、运营自动化、数据分析等课程，每人百万级支持。',
    slug: 'training',
  },
  {
    Icon: SnowflakeIcon,
    badge: '以旧换新省大钱',
    name: '空调省能更新补助',
    amount: '最高1,000万円',
    rate: '东京政府补助2/3',
    desc: '旧空调以旧换新：东京政府补助2/3+我社补贴1/3=几乎零负担。大阪最高500万円，全国最高3亿円。',
    slug: 'aircon',
  },
  {
    Icon: HeartHandshakeIcon,
    badge: '推荐客户得分成',
    name: '代理合作',
    amount: '60% 分成',
    rate: '周期短、回流稳',
    desc: '将您的存量客户与我们对接，即可获得60%透明分成。周期短、回流稳，无需缴纳任何加盟费用。',
    slug: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-std bg-white">
      <div className="section-inner">
        <div className="max-w-[600px] mb-14">
          <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">你能申请什么</div>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">主要补助金种类</h2>
          <p className="text-base text-[#64748d] leading-7">以下是在日华人企业最常申请的补助金，我们为你全程操办。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ Icon, badge, name, amount, rate, desc, slug }, i) => (
            <Card
              key={i}
              className="border-l-[3px] border-l-transparent hover:border-l-[#533afd] hover:shadow-2xl transition-all duration-300 rounded-lg"
            >
              <CardContent className="p-7">
                <div className="w-[52px] h-[52px] bg-[rgba(83,58,253,0.08)] rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#533afd]" strokeWidth={1.8} />
                </div>
                <Badge className="mb-2.5 text-[10px] font-normal bg-[rgba(21,190,83,0.1)] text-[#108c3d] border border-[rgba(21,190,83,0.25)] hover:bg-[rgba(21,190,83,0.1)]">
                  {badge}
                </Badge>
                <div className="text-[17px] font-semibold text-[#061b31] mb-2">{name}</div>
                <div className="text-[28px] font-light text-[#533afd] tracking-[-0.5px] leading-none mb-1 tabular-nums">{amount}</div>
                <div className="text-xs text-[#64748d] mb-3.5">{rate}</div>
                <p className="text-sm text-[#64748d] leading-7">{desc}</p>
                {slug && (
                  <Link href={`/subsidies/${slug}`} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#533afd] mt-3.5 group">
                    查看详情
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                <div className="mt-3 pt-2.5 border-t border-gray-100 text-xs text-[#64748d]">→ 微信咨询：pr2024188</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
