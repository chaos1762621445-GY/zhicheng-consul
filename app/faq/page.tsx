'use client';
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircleIcon } from "lucide-react";

type FaqItem = { q: string; a: string };
type FaqCategory = { title: string; items: FaqItem[] };

const faqCategories: FaqCategory[] = [
  {
    title: "申请资格类",
    items: [
      {
        q: "我是外国人（中国籍），在日本经营公司，可以申请日本政府补助金吗？",
        a: "可以。日本政府补助金的申请资格以公司登记地和纳税状况为准，与经营者国籍无关。只要您的公司在日本合法登记（株式会社、合同会社等），在日本正常纳税、缴纳社会保险，即可申请绝大多数中小企业补助金。"
      },
      {
        q: "公司成立多久才能申请补助金？",
        a: "不同补助金对成立年限要求不同。IT导入补助金、小规模事业者持续化补助金等通常无特别年限限制，成立1个月以上即可申请；事业再构筑补助金等通常要求已申报法人税或确定申告的实绩，建议成立6个月以上。我们会根据您的具体情况匹配最合适的补助金。"
      },
      {
        q: "个人事业主（自营业者）也可以申请吗？",
        a: "可以。多数日本政府补助金对个人事业主和法人均开放，例如小规模事业者持续化补助金明确支持个人事业主。部分补助金（如事业再构筑补助金）仅限法人，建议咨询我们进行个案评估。"
      },
      {
        q: "公司员工人数很少（1～5人），也算补助对象吗？",
        a: "完全符合。日本中小企业补助金政策的主要扶持对象正是小规模事业者（常时雇用员工20人以下，商业·服务业为5人以下）。员工越少、规模越小，越容易满足「小规模事业者」认定标准，享受更高比例的补贴率。"
      },
      {
        q: "最近一年公司处于亏损状态，还能申请吗？",
        a: "部分补助金对财务状况有要求，但亏损本身通常不构成硬性门槛。例如事业再构筑补助金设有「业绩悬念枠」，专门面向因疫情或市场变化导致销售额下降的企业，亏损反而可能更容易符合条件。请联系我们做具体评估。"
      },
    ]
  },
  {
    title: "费用类",
    items: [
      {
        q: "委托志成コンサル申请，需要支付多少费用？",
        a: "我们采用「前期零费用+成功报酬制」。前期咨询、资格诊断、申请书撰写均不收取固定费用；仅在补助金实际获批并收到资金后，按获批金额的一定比例收取成功报酬（一般为10%～15%，视补助金种类而定）。未获批则无需支付任何费用，风险完全由我们承担。"
      },
      {
        q: "补助金本身是完全免费的吗？需要还款吗？",
        a: "是的，日本政府补助金属于无偿给付，不需要偿还，也不产生利息。这与融资贷款（补助金）完全不同。补助金用于支持企业在获批项目上的实际支出，由政府直接拨付，是真正意义上的「白拿」资金。"
      },
      {
        q: "申请过程中有没有需要先垫付的费用？",
        a: "补助金的机制是「先支出、后报销」——您需要先按照获批方案实施项目、支付相关费用，再向行政机关提交实绩报告，审核通过后资金才会拨付到账。因此在资金到账前，企业需自行垫付项目费用。我们会详细辅导您准备实绩报告，确保顺利完成资金申领。"
      },
    ]
  },
  {
    title: "流程类",
    items: [
      {
        q: "从咨询到最终拿到补助金，大概需要多长时间？",
        a: "整体周期因补助金种类不同而有差异。通常：初次咨询至提交申请约需2～6周；审查期约1～4个月；获批后实施项目并完成实绩报告约需3～12个月；资金到账一般在实绩报告审核通过后1～2个月内。全程合计，多数客户在6～18个月内完成全流程并收到资金。"
      },
      {
        q: "申请书需要用日语写吗？我的日语不好怎么办？",
        a: "申请书必须以日语提交，这是日本行政规定。但您无需担心语言问题——志成コンサル的团队将全程用中文与您沟通，由我方负责撰写所有日语申请材料，确保用词专业、符合审查要求。您只需提供相关经营信息和配合签字确认即可。"
      },
      {
        q: "申请被拒绝了还可以重新申请吗？",
        a: "可以。大多数补助金每年开放多个「公募期」（申请窗口），一次落选并不影响下次申请资格。我们会详细分析落选原因，针对性优化申请书内容，提升下次通过率。我们的历史客户中，有部分在第二次申请时成功获批。"
      },
      {
        q: "获批后如果没有按计划实施项目，会有什么后果？",
        a: "获批补助金附有明确的实施要求和时间节点。如未按计划执行，可能导致补助金被取消、已收款项需退还，严重情况下还会被列入限制名单影响后续申请。我们在整个实施阶段提供辅导，帮助您合规完成项目并顺利通过实绩审查。"
      },
    ]
  },
  {
    title: "材料类",
    items: [
      {
        q: "申请补助金需要准备哪些基本材料？",
        a: "基本材料通常包括：法人登记事项证明书（履历事项全部証明書）、直近1～2期确定申告书（法人税·消费税）、会社概要、经营计划书/事业计划书、取得见积书（报价单）。具体材料因补助金种类不同有所差异，我们会根据您申请的项目提供详细清单。"
      },
      {
        q: "经营计划书怎么写？有什么格式要求吗？",
        a: "各补助金的申请表格中均有规定格式的经营计划书栏位。评审委员最看重：① 现状分析（市场·竞争·自身优势）；② 课题与解决方案；③ 补助金项目的具体内容与必要性；④ 数字化目标（销售额提升/成本削减预测）。我们提供专业中日文双语辅导，协助您撰写高质量的事业计划书。"
      },
      {
        q: "公司的财务报表需要由税理士签章吗？",
        a: "申请补助金时提交的财务资料（确定申告书等）通常需要附上税务署受理印章，或e-Tax申报的受理通知，无需专门由税理士额外出具签章报告。若您的申告是由税理士代办，直接使用税理士提交的申告书副本即可。我们合作的税理士团队可协助准备相关文件。"
      },
    ]
  },
  {
    title: "其他问题",
    items: [
      {
        q: "可以同时申请多个补助金吗？",
        a: "通常可以，但需注意部分补助金之间存在「併用制限」（禁止同时领取限制），以及同一设备/项目不能用多个补助金重复申请的规定。我们会根据您的情况制定最优的多补助金组合申请方案，在合规前提下最大化您能获得的资金支持。"
      },
      {
        q: "获批的补助金需要缴纳所得税吗？",
        a: "是的，日本政府补助金属于法人收入，需计入当期收益并缴纳法人税。但由于补助金通常用于购买资产或支付经费（可抵扣），实际税负较低。建议在制定申请计划时与税理士共同核算税务影响，我们可协助安排。"
      },
      {
        q: "志成コンサル的服务范围涵盖哪些地区？",
        a: "我们总部位于大阪，服务范围覆盖全日本。由于补助金申请大部分流程为线上办理，无论您在东京、大阪、名古屋还是其他城市，均可通过微信·电话·视频会议进行全程中文服务。如有需要，我们也可安排上门拜访（关西地区）。"
      },
    ]
  },
];

export default function FaqPage() {
  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="FAQ · 常见问题"
        title={<>补助金申请<br /><span style={{ color: 'var(--brand)' }}>常见问题解答</span></>}
        desc="汇整在日华人企业主最常问到的问题，从申请资格、费用构成到流程细节，一次性为您解答清楚。"
      />

      {/* FAQ Content */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          {/* Category nav */}
          <nav style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }} aria-label="问题分类">
            {faqCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#faq-${cat.title}`}
                style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", borderRadius: 100, fontSize: 13, color: "#0f172a", background: "#f8fafc", border: "1px solid #e2e8f0", whiteSpace: "nowrap", textDecoration: "none", minHeight: 36 }}
              >
                {cat.title}
              </a>
            ))}
          </nav>

          {faqCategories.map((cat) => (
            <div key={cat.title} id={`faq-${cat.title}`} style={{ marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ width: 32, height: 32, background: "#1e40af", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <HelpCircleIcon style={{ width: 16, height: 16, color: "#fff" }} />
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{cat.title}</div>
              </div>
              <Accordion multiple className="gap-2.5">
                {cat.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.title}-${i}`}
                    className="border border-gray-200 rounded-md overflow-hidden mb-2.5 not-last:border-b"
                  >
                    <AccordionTrigger className="px-6 py-5 text-[15px] font-medium leading-snug hover:no-underline" style={{ color: "#0f172a" }}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-sm leading-[1.8] border-t border-gray-100" style={{ color: "#475569" }}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title={<>没找到您想要的答案？<br /><span style={{ color: 'var(--brand)' }}>免费咨询顾问</span></>}
        desc="直接联系我们，专业顾问将在工作日当日以中文为您解答，完全免费，无任何购买义务。"
        primary={{ href: '/contact', label: '免费咨询顾问' }}
        secondary={{ href: '/cases', label: '查看成功案例' }}
      />

      <Footer />
    </main>
  );
}
