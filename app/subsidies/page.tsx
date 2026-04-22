'use client';
import Link from "next/link";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

type Subsidy = {
  slug?: string;
  tag: string;
  name: string;
  amount: string;
  rate: string;
  desc: string;
  conditions: string[];
  usage: string[];
};

const subsidies: Subsidy[] = [
  {
    slug: "seiryoka",
    tag: "省力化",
    name: "省力化补助金",
    amount: "最高1,500万円",
    rate: "补助率：1/2〜2/3（小规模事业者为3/4）",
    desc: "面向中小企业和小规模事业者的劳动力不足对策补助金。机械设备、机器人、IT系统的导入费用最高补助2/3。适合希望降低人工成本、提升生产效率的企业。不仅制造业，餐饮、零售、服务业等各行业均在申请范围内。",
    conditions: ["须为中小企业或小规模事业者", "须导入补助对象设备或系统", "须制定生产效率提升计划", "须提交薪资提升计划"],
    usage: ["生产线自动化设备导入", "POS收银及订单管理系统导入", "清洁·搬运机器人导入", "自动仓库·物流系统建设"],
  },
  {
    slug: "ai-it",
    tag: "AI导入",
    name: "AI·IT导入补助金",
    amount: "最高450万円",
    rate: "补助率：最高2/3（普通类型1/2）",
    desc: "支持企业推进业务效率化和数字化转型，补助IT工具及软件的导入费用。会计软件、订单管理系统、电商平台搭建工具等各类IT工具均在补助范围内。发票制度、电子账簿保存法等合规对应工具同样可以申请。",
    conditions: ["中小企业、小规模事业者、个人事业主均可", "须与已注册的IT导入支援事业者合作", "须制定劳动生产效率提升计划", "须符合安全对策基准"],
    usage: ["会计·财务软件导入", "客户管理（CRM）系统导入", "电商平台·网店建设", "AI聊天机器人·自动回复系统"],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    amount: "最高80万円/人",
    rate: "正社员转换：57万円〜80万円/人",
    desc: "将非正规雇用劳动者（兼职、临时工、合同工）转为正规雇用时可领取的助成金。大力支持致力于优秀人才留用与雇用稳定的企业。满足生产效率要求时，每转换一人最高可获80万円助成。",
    conditions: ["须为雇用保险适用事业所", "须制定并提交员工职业提升计划", "转换前须雇用6个月以上", "转换后须作为正社员持续雇用6个月以上"],
    usage: ["兼职·临时工转为正社员", "合同工·派遣工转为直接雇用", "有期雇用转为无期雇用", "待遇改善（薪资·福利）"],
  },
  {
    tag: "补助金",
    name: "小规模持续化补助金",
    amount: "最高250万円",
    rate: "补助率：2/3（上限50〜250万円）",
    desc: "支持小规模事业者和个人事业主开拓销售渠道、提升生产效率。宣传单制作、网站建设、展会参展、商品开发等多种用途均可申请。发票特例、创业特例等各类加算制度十分完善。",
    conditions: ["小规模事业者（商业·服务业5人以下，制造业20人以下）", "个人事业主同样可以申请", "须接受商工会·商工会议所的支援", "须制定持续经营计划"],
    usage: ["官网·电商平台建设", "宣传单·手册等广告宣传", "参加展会·洽谈会费用", "新产品开发·试制品制作费"],
  },
  {
    tag: "补助金",
    name: "事业重构补助金",
    amount: "最高7,000万円",
    rate: "补助率：1/2〜2/3（中小企业）",
    desc: "大规模支持因新冠疫情及经济环境变化而进行新业务拓展、业态转换的企业。推动新商品·服务开发、进军新市场、业态转换等重大变革。中小企业最高可申请7,000万円（补助率2/3）。",
    conditions: ["须有2020年4月以后营业额下降的实绩", "须与金融机关等共同制定事业计划", "须获得认定经营革新等支援机关的确认", "须在补助事业完成后3〜5年内实现附加价值额提升计划"],
    usage: ["新业态·新品牌创立", "海外拓展·入境旅游事业", "线上化·数字化转型投资", "新产品线·制造设备导入"],
  },
  {
    tag: "补助金",
    name: "制造业补助金",
    amount: "最高4,000万円",
    rate: "补助率：1/2〜2/3（中小企业）",
    desc: "支持从事创新服务开发、试制品开发及生产流程改善的中小企业。适合希望通过设备投资提升附加价值和生产效率的企业。设有一般型、全球拓展型等多种申请框架，可根据企业实际情况灵活选择。",
    conditions: ["须为中小企业或小规模事业者", "须有创新产品·服务开发计划", "须制定并提交薪资提升计划", "须获得认定支援机关的协助"],
    usage: ["CNC机床·激光加工机导入", "3D打印机·试制设备导入", "IoT系统·传感器设备导入", "品质管理系统·检测装置导入"],
  },
];

const tabCategories = [
  { value: "省力化", label: "省力化", items: subsidies.filter(s => s.tag === "省力化") },
  { value: "AI导入", label: "AI导入", items: subsidies.filter(s => s.tag === "AI导入") },
  { value: "助成金", label: "助成金", items: subsidies.filter(s => s.tag === "助成金") },
  { value: "补助金", label: "补助金", items: subsidies.filter(s => s.tag === "补助金") },
];

function SubsidyCard({ s }: { s: Subsidy }) {
  return (
    <Card className="rounded-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div>
            <Badge className="mb-3 bg-[rgba(83,58,253,0.1)] text-[#533afd] border border-[rgba(83,58,253,0.2)] hover:bg-[rgba(83,58,253,0.1)]">
              {s.tag}
            </Badge>
            <div className="text-xl font-semibold text-[#061b31] mb-1">{s.name}</div>
            <div className="text-[28px] font-light text-[#533afd] tracking-[-0.5px] leading-none mb-1 tabular-nums">{s.amount}</div>
            <div className="text-sm text-[#64748d] mt-1">{s.rate}</div>
          </div>
        </div>
        <p className="text-sm text-[#64748d] leading-7 mb-6">{s.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-[#061b31] mb-3">申请条件</h4>
            <ul className="flex flex-col gap-2">
              {s.conditions.map((c, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-[#64748d]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#533afd] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#061b31] mb-3">主要用途</h4>
            <ul className="flex flex-col gap-2">
              {s.usage.map((u, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-[#64748d]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#533afd] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {s.slug && (
          <div className="mt-5 pt-4 border-t border-gray-100 flex justify-end">
            <Link href={`/subsidies/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-[#533afd]">
              查看详情
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function SubsidiesPage() {
  return (
    <main>
      <NavClient />

      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(83,58,253,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(234,34,97,0.15)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
            补助金种类
          </div>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-light text-white tracking-[-0.5px] leading-[1.15] mb-4">
            主要补助金与助成金一览
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.75] max-w-[560px]">
            志成コンサル代办的6种主要补助金·助成金详细介绍。申请条件及使用方法欢迎随时咨询。
          </p>
        </div>
      </div>

      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <Tabs defaultValue="省力化">
            <TabsList className="mb-8 h-auto bg-white border border-gray-200 rounded-lg p-1 flex gap-1 flex-wrap">
              {tabCategories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="px-5 py-2.5 text-sm rounded-md data-active:bg-[#533afd] data-active:text-white data-active:shadow-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabCategories.map(cat => (
              <TabsContent key={cat.value} value={cat.value} className="flex flex-col gap-5">
                {cat.items.map((s, i) => (
                  <SubsidyCard key={i} s={s} />
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-16 pt-14 border-t border-gray-200">
            <div className="text-2xl font-bold text-[#061b31] mb-3">哪种补助金最适合您？</div>
            <p className="text-base text-[#64748d] mb-8 leading-7">3分钟免费诊断，为您的企业精准匹配最优补助金方案。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#533afd] text-white px-9 py-3.5 rounded-md font-medium text-base hover:bg-[#4434d4] transition-colors">
              开始免费诊断
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
