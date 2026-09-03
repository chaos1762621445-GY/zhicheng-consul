import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
const HOME_LABEL: Record<Locale, string> = { zh: "首页", en: "Home", ja: "ホーム" };
import { localizedHref } from "@/lib/i18n/href";

type FaqItem = { q: string; a: string };
type FaqCategory = { title: string; items: FaqItem[] };

// 本页三语文案（结构一致，翻译值可并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  indexAria: string; countSuffix: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string;
  ctaPrimary: string; ctaSecondary: string;
  faqCategories: FaqCategory[];
}> = {
  zh: {
    heroEyebrow: "FAQ · 常见问题",
    heroTitle1: "补助金申请", heroTitle2: "常见问题解答",
    heroDesc: "汇整在日华人企业主最常问到的问题，从申请资格、费用构成到流程细节，一次性为您解答清楚。",
    indexAria: "问题分类", countSuffix: "问",
    ctaTitle1: "没找到您想要的答案？", ctaTitle2: "免费咨询顾问",
    ctaDesc: "直接联系我们，专业顾问将在工作日当日以中文为您解答，完全免费，无任何购买义务。",
    ctaPrimary: "免费咨询顾问", ctaSecondary: "查看成功案例",
    faqCategories: [
      {
        title: "申请资格",
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
        title: "费用",
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
        title: "流程",
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
        title: "材料",
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
        title: "赤字企业·新设法人",
        items: [
          { q: "公司目前赤字，能申请补助金吗？", a: "可以。省力化補助金、デジタル化・AI導入補助金、持続化補助金均不以盈利为要件，审查看的是事业计划的可行性与效果。但赤字状态下自筹资金与融资能力会被关注，建议同步规划政策融资。厚劳省系助成金与盈亏无关，满足雇用要件即可。" },
          { q: "刚成立、还没有第一期決算的公司能申请吗？", a: "省力化与 AI導入没有硬性年限，但审查需要财务基础；新设法人通常建议先用持続化補助金（创业型特例），或等第一期決算后再报大额制度。具体按当回公募要領。" },
          { q: "员工人数会影响能申请的制度和金额吗？", a: "会。省力化一般型按常勤员工数分 5 档（5 人以下 750 万〜101 人以上 8,000 万円）；持続化要求商业·服务业常时员工 5 人以下、制造业等 20 人以下；助成金则要求有雇用保险被保险者。人数以申请时的常勤员工为准。" },
        ]
      },
      {
        title: "采购与合同时间",
        items: [
          { q: "什么时候才能签合同、付款？", a: "補助金原则上只补助「交付決定」之后签订合同并支付的费用。採択（审查通过）不等于交付決定，中间还要提交交付申请。在交付決定前签约付款，该费用将不被认可——这是最常见的失误。部分制度设有「事前着手承认」，需另行申请获准。" },
          { q: "已经和供应商签了合同，还能补申请吗？", a: "原则上不能。若尚未付款且合同可撤回，可先解除合同，等交付決定后重签。若已付款，该费用无法作为补助对象，只能考虑其他尚未发生的投资项目。" },
          { q: "採択后能改变采购内容吗？", a: "可以但须事前提交计划变更申请并获批。未经批准擅自变更设备型号、数量、金额或供应商，实绩报告时可能被减额甚至取消交付決定。" },
        ]
      },
      {
        title: "未获批时的处理",
        items: [
          { q: "不採択了怎么办？", a: "补助金多回公募，不採択可在下一回改善计划后重报，没有次数惩罚。我们会先分析原因：要件不满足（先补要件）还是计划评分低（改计划书）。不採択时不收取成功报酬。" },
          { q: "不获批不收费的范围是什么？", a: "指申请不採択时不收取成功报酬。着手金、实费（公证·翻译等）如有，签约时明示。客户单方中止、提供虚假资料导致的不採択或返还，不在该范围内。" },
          { q: "採択了但最后没拿到钱，可能吗？", a: "可能。採択后若交付申请不通过、实施期间违规变更、实绩报告不合规、或未在期限内完成，都可能减额或取消。这就是为什么我们的服务覆盖到入金确认为止。" },
        ]
      },
      {
        title: "其他",
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
            a: "我们总部位于东京（千代田区平河町），服务范围覆盖全日本。由于补助金申请大部分流程为线上办理，无论您在东京、大阪、名古屋还是其他城市，均可通过微信·电话·视频会议进行全程中文服务。如有需要，我们也可安排上门拜访（关东地区）。"
          },
        ]
      },
    ],
  },
  en: {
    heroEyebrow: "FAQ · Frequently Asked Questions",
    heroTitle1: "Subsidy Applications", heroTitle2: "Frequently Asked Questions",
    heroDesc: "The questions Chinese business owners in Japan ask us most — from eligibility and fee structure to process details, all answered clearly in one place.",
    indexAria: "Question categories", countSuffix: "Qs",
    ctaTitle1: "Didn't find the answer you were looking for?", ctaTitle2: "Free Consultation",
    ctaDesc: "Contact us directly and a professional advisor will answer in Chinese on the same business day — completely free, with no obligation to buy.",
    ctaPrimary: "Free Consultation", ctaSecondary: "View Success Stories",
    faqCategories: [
      {
        title: "Eligibility",
        items: [
          {
            q: "I am a foreign national (Chinese citizen) running a company in Japan. Can I apply for Japanese government subsidies?",
            a: "Yes. Eligibility for Japanese government subsidies is based on where the company is registered and its tax status, not on the owner's nationality. As long as your company is legally registered in Japan (Kabushiki Kaisha, Godo Kaisha, etc.) and properly pays taxes and social insurance in Japan, you can apply for the vast majority of SME subsidies."
          },
          {
            q: "How long must a company have been established before it can apply for a subsidy?",
            a: "Different subsidies have different requirements for years in business. The IT Adoption Subsidy, Small-Business Sustainability Subsidy, and similar programs usually have no particular minimum, and you can apply once established for at least one month; programs like the Business Restructuring Subsidy generally require a track record of filed corporate tax or final tax returns, so at least six months in business is recommended. We match the most suitable subsidy to your specific situation."
          },
          {
            q: "Can sole proprietors (self-employed) also apply?",
            a: "Yes. Most Japanese government subsidies are open to both sole proprietors and corporations — for example, the Small-Business Sustainability Subsidy explicitly supports sole proprietors. Some subsidies (such as the Business Restructuring Subsidy) are limited to corporations, so we recommend consulting us for a case-by-case assessment."
          },
          {
            q: "Our company has very few employees (1–5 people). Do we still qualify as a subsidy target?",
            a: "You fully qualify. The primary beneficiaries of Japan's SME subsidy policy are precisely small-scale businesses (20 or fewer regular employees, or 5 or fewer in commerce and services). The fewer employees and the smaller the scale, the more easily you meet the \"small-scale business\" criteria and enjoy a higher subsidy rate."
          },
          {
            q: "Our company has been operating at a loss over the past year. Can we still apply?",
            a: "Some subsidies have financial requirements, but a loss itself is usually not a hard barrier. For example, the Business Restructuring Subsidy has a \"performance-concern track\" specifically for companies whose sales have declined due to the pandemic or market changes, so a loss may actually make it easier to qualify. Please contact us for a specific assessment."
          },
        ]
      },
      {
        title: "Fees",
        items: [
          {
            q: "How much does it cost to have Shisei Consulting handle my application?",
            a: "We work on a \"zero upfront cost + success-fee\" basis. Initial consultation, eligibility diagnosis, and application drafting carry no fixed fee; we charge a success fee only after the subsidy is actually approved and the funds are received, as a set percentage of the approved amount (generally 10%–15%, depending on the subsidy type). If it is not approved, you pay nothing at all — we bear the risk entirely."
          },
          {
            q: "Is the subsidy itself completely free? Does it have to be repaid?",
            a: "Yes. Japanese government subsidies are non-repayable grants — they do not need to be repaid and carry no interest. This is entirely different from financing or loans. A subsidy supports a company's actual spending on an approved project and is disbursed directly by the government — genuinely money you get to keep."
          },
          {
            q: "Are there any costs I need to pay out of pocket first during the application?",
            a: "The subsidy mechanism is \"spend first, get reimbursed later\" — you must first implement the project per the approved plan and pay the related costs, then submit a performance report to the administrative authority, and the funds are disbursed only after the report is approved. Therefore, before the funds arrive, the company must advance the project costs itself. We provide detailed guidance in preparing the performance report to ensure the disbursement goes through smoothly."
          },
        ]
      },
      {
        title: "Process",
        items: [
          {
            q: "From consultation to finally receiving the subsidy, roughly how long does it take?",
            a: "The overall timeline varies by subsidy type. Typically: about 2–6 weeks from initial consultation to submission; a review period of about 1–4 months; about 3–12 months to implement the project and complete the performance report after approval; and disbursement generally within 1–2 months after the performance report is approved. All told, most clients complete the entire process and receive the funds within 6–18 months."
          },
          {
            q: "Does the application have to be written in Japanese? What if my Japanese isn't good?",
            a: "The application must be submitted in Japanese — this is a Japanese administrative requirement. But you needn't worry about the language: the Shisei Consulting team communicates with you entirely in Chinese and prepares all Japanese application materials on your behalf, ensuring professional wording that meets review requirements. You only need to provide relevant business information and cooperate with signing off."
          },
          {
            q: "If the application is rejected, can I apply again?",
            a: "Yes. Most subsidies open several \"public-offering periods\" (application windows) each year, and one rejection does not affect your eligibility to apply again. We analyze the reasons for rejection in detail and optimize the application content accordingly to improve the pass rate next time. Among our past clients, some were successfully approved on their second application."
          },
          {
            q: "What happens if I don't implement the project as planned after approval?",
            a: "An approved subsidy comes with clear implementation requirements and deadlines. Failing to execute as planned can result in the subsidy being canceled and funds already received having to be returned; in serious cases it can lead to being placed on a restricted list, affecting future applications. We provide guidance throughout the implementation phase to help you complete the project in compliance and pass the performance review smoothly."
          },
        ]
      },
      {
        title: "Documents",
        items: [
          {
            q: "What basic documents do I need to prepare to apply for a subsidy?",
            a: "Basic documents typically include: a corporate registration certificate (certificate of all historical matters), the most recent 1–2 periods of final tax returns (corporate tax and consumption tax), a company overview, a business/management plan, and quotations (estimates). Specific documents vary by subsidy type, and we provide a detailed checklist based on the program you are applying for."
          },
          {
            q: "How do I write the management plan? Are there any format requirements?",
            a: "Each subsidy's application form includes a management-plan section in a prescribed format. Reviewers care most about: ① current-state analysis (market, competition, your own strengths); ② challenges and solutions; ③ the specific content and necessity of the subsidized project; ④ quantified targets (projected sales increase / cost reduction). We provide professional bilingual (Chinese–Japanese) guidance to help you write a high-quality business plan."
          },
          {
            q: "Do the company's financial statements need to be sealed by a Zeirishi (tax accountant)?",
            a: "The financial materials submitted for a subsidy application (final tax returns, etc.) usually need to bear the tax office's acceptance stamp, or the e-Tax acceptance notice; a separately issued sealed report from a Zeirishi is not required. If your filing was handled by a Zeirishi, simply use the copy of the return they submitted. Our partner Zeirishi team can assist in preparing the relevant documents."
          },
        ]
      },
      {
        title: "Loss-making & new companies",
        items: [
          { q: "We are loss-making. Can we apply?", a: "Yes. Labor-Saving, AI Adoption and Sustainability subsidies do not require profitability; reviews assess plan feasibility and effect. Cash and financing capacity are scrutinized, so plan policy loans in parallel. MHLW grants are unrelated to profit." },
          { q: "Newly founded, no first-year financials?", a: "No hard minimum for Labor-Saving or AI Adoption, but financial basis is reviewed; new companies usually start with the Sustainability Subsidy (startup track) or wait for the first closing." },
          { q: "Does headcount affect eligibility and amount?", a: "Yes. Labor-Saving has 5 tiers by regular staff (¥7.5M for ≤5 to ¥80M for 101+); Sustainability requires ≤5 (retail/services) or ≤20 (manufacturing); grants require employment-insured staff." },
        ]
      },
      {
        title: "Purchase & contract timing",
        items: [
          { q: "When can we sign and pay?", a: "Only costs contracted and paid after the grant decision (交付決定) are eligible. Adoption is not the grant decision. Signing earlier makes the cost ineligible — the most common mistake." },
          { q: "Already signed with a vendor?", a: "Generally ineligible. If unpaid and cancellable, cancel and re-sign after the grant decision. If paid, consider other future investments." },
          { q: "Can we change the purchase after adoption?", a: "Only with a prior change request approved. Unapproved changes can reduce or cancel the grant." },
        ]
      },
      {
        title: "If not adopted",
        items: [
          { q: "Rejected — what now?", a: "Reapply next round after fixing requirements or improving the plan; no penalty. No success fee is charged on rejection." },
          { q: "What does 'no approval, no fee' cover?", a: "No success fee if not adopted. Any retainer or out-of-pocket costs are stated at contract. Client withdrawal or false information is excluded." },
          { q: "Adopted but no payment — possible?", a: "Yes, if the grant application fails, unapproved changes occur, the final report is non-compliant, or deadlines are missed. That is why our service runs to disbursement." },
        ]
      },
      {
        title: "Other",
        items: [
          {
            q: "Can I apply for multiple subsidies at the same time?",
            a: "Usually yes, but note that some subsidies are subject to \"concurrent-use restrictions\" (rules prohibiting receiving them simultaneously), and the same equipment/project cannot be claimed under multiple subsidies. We design an optimal multi-subsidy combination plan for your situation, maximizing the funding support you can obtain while staying compliant."
          },
          {
            q: "Do approved subsidies have to be reported for income tax?",
            a: "Yes. Japanese government subsidies count as corporate income and must be included in the current period's earnings and subject to corporate tax. However, because subsidies are usually used to purchase assets or pay expenses (which are deductible), the actual tax burden is relatively low. We recommend calculating the tax impact together with a Zeirishi when drawing up the application plan, and we can help arrange this."
          },
          {
            q: "Which regions does Shisei Consulting's service cover?",
            a: "Our headquarters is in Tokyo (Hirakawacho, Chiyoda-ku), and our service covers all of Japan. Since most of the subsidy application process is handled online, whether you are in Tokyo, Osaka, Nagoya, or another city, we provide full Chinese-language service via WeChat, phone, and video conference. If needed, we can also arrange on-site visits (Kanto region)."
          },
        ]
      },
    ],
  },
  ja: {
    heroEyebrow: "FAQ · よくあるご質問",
    heroTitle1: "補助金申請", heroTitle2: "よくあるご質問",
    heroDesc: "在日華人の企業経営者から最も多くいただくご質問を、申請資格・費用構成から手続きの詳細まで、一度でわかりやすくお答えします。",
    indexAria: "質問カテゴリ", countSuffix: "問",
    ctaTitle1: "お探しの答えが見つかりませんでしたか？", ctaTitle2: "顧問に無料相談",
    ctaDesc: "直接お問い合わせいただければ、専門顧問が営業日当日に中国語でお答えします。完全無料、購入義務は一切ありません。",
    ctaPrimary: "顧問に無料相談", ctaSecondary: "成功事例を見る",
    faqCategories: [
      {
        title: "申請資格",
        items: [
          {
            q: "私は外国人（中国籍）で、日本で会社を経営しています。日本政府の補助金を申請できますか？",
            a: "できます。日本政府の補助金の申請資格は会社の登記地と納税状況によって決まり、経営者の国籍は問われません。会社が日本で適法に登記されており（株式会社・合同会社など）、日本で適正に納税し社会保険に加入していれば、大多数の中小企業向け補助金を申請できます。"
          },
          {
            q: "会社を設立してからどのくらいで補助金を申請できますか？",
            a: "補助金によって設立年数の要件は異なります。IT導入補助金、小規模事業者持続化補助金などは通常特別な年数制限がなく、設立1か月以上で申請できます。事業再構築補助金などは通常、法人税や確定申告の実績が求められるため、設立6か月以上をおすすめします。お客様の具体的な状況に応じて、最適な補助金をマッチングします。"
          },
          {
            q: "個人事業主（自営業者）でも申請できますか？",
            a: "できます。多くの日本政府の補助金は個人事業主・法人のいずれにも開かれており、たとえば小規模事業者持続化補助金は個人事業主を明確に対象としています。一部の補助金（事業再構築補助金など）は法人限定のため、個別評価は当社にご相談ください。"
          },
          {
            q: "従業員数が非常に少ない（1～5名）のですが、補助対象になりますか？",
            a: "完全に該当します。日本の中小企業補助金政策が主に支援する対象は、まさに小規模事業者（常時雇用従業員20名以下、商業・サービス業は5名以下）です。従業員が少なく規模が小さいほど「小規模事業者」の認定基準を満たしやすく、より高い補助率を受けられます。"
          },
          {
            q: "直近1年は赤字状態ですが、それでも申請できますか？",
            a: "一部の補助金には財務状況の要件がありますが、赤字そのものが通常ハードルになるわけではありません。たとえば事業再構築補助金には「業況懸念枠」が設けられており、コロナや市場変化により売上が減少した企業を対象としているため、赤字がかえって条件に合いやすい場合もあります。具体的な評価は当社にご連絡ください。"
          },
        ]
      },
      {
        title: "費用",
        items: [
          {
            q: "志成コンサルに申請を委託すると、費用はいくらかかりますか？",
            a: "当社は「初期費用ゼロ＋成功報酬制」を採用しています。初期相談・資格診断・申請書作成には固定費用をいただきません。補助金が実際に採択され資金を受給した後にのみ、採択額の一定割合を成功報酬として頂戴します（一般に10%～15%、補助金の種類によります）。不採択の場合は費用は一切不要で、リスクは当社が全面的に負担します。"
          },
          {
            q: "補助金そのものは完全に無料ですか？返済は必要ですか？",
            a: "はい、日本政府の補助金は無償給付であり、返済は不要で利息も発生しません。これは融資やローン（借入）とはまったく異なります。補助金は採択された事業での企業の実際の支出を支援するもので、政府から直接支給される、文字どおり「もらえる」資金です。"
          },
          {
            q: "申請の過程で、先に立て替えが必要な費用はありますか？",
            a: "補助金の仕組みは「先に支出、後で精算」です。まず採択された計画に沿って事業を実施し関連費用を支払い、その後、行政機関に実績報告を提出し、審査を通過してはじめて資金が支給されます。そのため資金の入金前は、企業が事業費用を自ら立て替える必要があります。当社が実績報告の準備を詳しくサポートし、資金の受給を確実に完了させます。"
          },
        ]
      },
      {
        title: "手続きの流れ",
        items: [
          {
            q: "相談から最終的に補助金を受け取るまで、どのくらいかかりますか？",
            a: "全体の期間は補助金の種類によって異なります。通常、初回相談から申請提出まで約2～6週間、審査期間は約1～4か月、採択後の事業実施と実績報告の完了に約3～12か月、資金の入金は一般に実績報告の審査通過後1～2か月以内です。合計で、多くのお客様が6～18か月以内に全工程を完了し資金を受け取ります。"
          },
          {
            q: "申請書は日本語で書く必要がありますか？日本語が苦手なのですが、どうすればよいですか？",
            a: "申請書は日本語で提出しなければならず、これは日本の行政上の規定です。ですが言語の心配は無用です——志成コンサルのチームが全工程を中国語でやり取りし、日本語の申請書類はすべて当社が作成、専門的で審査要件に合った表現を確保します。お客様には関連する経営情報のご提供と、署名・確認へのご協力をいただくだけで結構です。"
          },
          {
            q: "申請が不採択になった場合、再申請できますか？",
            a: "できます。多くの補助金は年に複数の「公募期」（申請窓口）を設けており、一度の不採択は次回の申請資格に影響しません。当社は不採択の理由を詳しく分析し、申請内容を的確に改善して次回の採択率を高めます。当社の過去のお客様の中には、2回目の申請で採択された方もいます。"
          },
          {
            q: "採択後に計画どおり事業を実施しなかった場合、どうなりますか？",
            a: "採択された補助金には明確な実施要件と期限が付されています。計画どおり実施しない場合、補助金の取消しや、受給済み資金の返還が生じるおそれがあり、重い場合には制限リストに載り以後の申請に影響します。当社は実施段階を通じてサポートし、コンプライアンスを守って事業を完了し、実績審査をスムーズに通過できるよう支援します。"
          },
        ]
      },
      {
        title: "必要書類",
        items: [
          {
            q: "補助金の申請にはどのような基本書類を準備する必要がありますか？",
            a: "基本書類には通常、法人登記事項証明書（履歴事項全部証明書）、直近1～2期の確定申告書（法人税・消費税）、会社概要、経営計画書／事業計画書、取得見積書（見積り）が含まれます。具体的な書類は補助金の種類によって異なり、申請される事業に応じて詳細なリストをご提供します。"
          },
          {
            q: "経営計画書はどう書けばよいですか？書式の要件はありますか？",
            a: "各補助金の申請様式には所定の書式の経営計画書欄があります。審査委員が最も重視するのは、① 現状分析（市場・競争・自社の強み）、② 課題と解決策、③ 補助事業の具体的な内容と必要性、④ 数値目標（売上向上／コスト削減の予測）です。当社は専門的な中日バイリンガルのサポートを提供し、質の高い事業計画書の作成をお手伝いします。"
          },
          {
            q: "会社の財務諸表には税理士の押印が必要ですか？",
            a: "補助金申請時に提出する財務資料（確定申告書など）には通常、税務署の受付印、またはe-Tax申告の受付通知を添付する必要があり、税理士による別途の押印付き報告書は必要ありません。申告を税理士が代行している場合は、税理士が提出した申告書の控えをそのまま使えます。当社の提携税理士チームが関連書類の準備をお手伝いします。"
          },
        ]
      },
      {
        title: "赤字企業・新設法人",
        items: [
          { q: "赤字でも申請できますか？", a: "可能です。省力化・AI導入・持続化は利益を要件とせず、計画の実現性と効果を審査します。自己資金・融資能力は注視されるため政策融資も並行検討を。厚労省系助成金は損益と無関係です。" },
          { q: "設立直後で第1期決算がありません", a: "省力化・AI導入に年数要件はありませんが財務基盤が審査されます。新設法人は持続化補助金（創業型）や第1期決算後の申請が現実的です。" },
          { q: "従業員数は影響しますか？", a: "します。省力化一般型は常勤従業員数で5区分（5人以下750万〜101人以上8,000万円）、持続化は商業・サービス業5人以下等、助成金は雇用保険被保険者が必要です。" },
        ]
      },
      {
        title: "購入・契約のタイミング",
        items: [
          { q: "いつ契約・支払いできますか？", a: "交付決定後に契約・支払った経費のみ対象です。採択＝交付決定ではありません。それ以前の契約は対象外——最も多い失敗です。事前着手承認制度がある場合は別途申請。" },
          { q: "既に業者と契約済みです", a: "原則対象外。未払いで解約可能なら解約し、交付決定後に再契約。支払済みなら別の未実施投資を検討。" },
          { q: "採択後に購入内容を変えられますか？", a: "事前の計画変更申請と承認が必要。無断変更は減額・取消の対象。" },
        ]
      },
      {
        title: "不採択の場合",
        items: [
          { q: "不採択になったら？", a: "要件を整えるか計画を改善して次回再申請、ペナルティなし。不採択時は成功報酬をいただきません。" },
          { q: "「不採択なら無料」の範囲は？", a: "不採択時に成功報酬なし。着手金・実費がある場合は契約時に明示。お客様の一方的中止・虚偽資料は対象外。" },
          { q: "採択されても入金されないことは？", a: "あります。交付申請不承認、無断変更、実績報告不備、期限超過で減額・取消。だから当社は入金確認まで対応します。" },
        ]
      },
      {
        title: "その他",
        items: [
          {
            q: "複数の補助金を同時に申請できますか？",
            a: "通常は可能ですが、一部の補助金の間には「併用制限」（同時受給を禁じる制限）があり、また同一の設備・事業を複数の補助金で重複申請できない規定がある点にご注意ください。当社はお客様の状況に応じて最適な複数補助金の組み合わせ申請プランを策定し、コンプライアンスを前提に得られる資金支援を最大化します。"
          },
          {
            q: "採択された補助金には所得税がかかりますか？",
            a: "はい、日本政府の補助金は法人の収入にあたり、当期の収益に計上し法人税の対象となります。ただし補助金は通常、資産の購入や経費の支払い（損金算入可能）に充てられるため、実際の税負担は比較的低くなります。申請計画の策定時に税理士とともに税務への影響を試算されることをおすすめし、当社が手配をお手伝いします。"
          },
          {
            q: "志成コンサルのサービス対応地域はどこですか？",
            a: "当社の本部は東京（千代田区平河町）にあり、サービスは日本全国をカバーします。補助金申請の大部分の工程はオンラインで対応するため、東京・大阪・名古屋その他どの都市にいらしても、WeChat・電話・ビデオ会議で全工程を中国語でサービスします。ご希望に応じて訪問（関東地域）も手配可能です。"
          },
        ]
      },
    ],
  },
};

export default function FaqContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavClient locale={locale} dict={dict} />

      <PageHero
        crumbs={[{ label: HOME_LABEL[locale], href: localizedHref(locale, "/") }, { label: `${t.heroTitle1}${t.heroTitle2}` }]}
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      {/* FAQ — 编辑式行表 */}
      <section className="sec" style={{ background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 1080 }}>
          {/* 分类目录 — hairline 索引行 */}
          <nav className="faq-index" aria-label={t.indexAria}>
            {t.faqCategories.map((cat, ci) => (
              <a key={cat.title} href={`#faq-${ci}`} className="faq-index-item">
                <span className="faq-index-num">{String(ci + 1).padStart(2, '0')}</span>
                <span className="serif" style={{ fontWeight: 700 }}>{cat.title}</span>
                <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{cat.items.length} {t.countSuffix}</span>
              </a>
            ))}
          </nav>

          {t.faqCategories.map((cat, ci) => (
            <div key={cat.title} id={`faq-${ci}`} className="faq-cat">
              {/* 左：分类题字（桌面 sticky） */}
              <div className="faq-cat-head">
                <div className="faq-cat-num serif">{String(ci + 1).padStart(2, '0')}</div>
                <h2 className="serif" style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 900, color: 'var(--ink)', margin: '10px 0 0' }}>
                  {cat.title}
                </h2>
                <div style={{ width: 30, height: 2, background: 'var(--gold)', marginTop: 14 }} />
              </div>

              {/* 右：问题行表 */}
              <div className="faq-list">
                {cat.items.map((item, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-marker serif">Q</span>
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <div className="faq-a">
                      <span className="faq-a-marker serif">A</span>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
        primary={{ href: '/contact', label: t.ctaPrimary }}
        secondary={{ href: '/cases', label: t.ctaSecondary }}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
