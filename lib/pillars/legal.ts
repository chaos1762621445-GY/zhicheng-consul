import type { PillarSet } from "./types";
import { UI } from "./types";

const V = "2026-09-03";
const NAP = { addr: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階", tel: "03-6265-9756", mail: "info@shisei-consult.jp", hojin: "5010401158340" };

export const legal: PillarSet = {
  zh: {
    path: "/legal",
    metaTitle: "特定商取引法表记·服务范围与责任边界｜株式会社志成コンサル",
    metaDesc: "株式会社志成コンサル的事业者信息（法人番号 5010401158340）、服务内容、费用结构（成功报酬制）、责任边界、持牌人分工、与「不保证获批」的合规说明。",
    keywords: ["志成コンサル 特定商取引法", "补助金 咨询 责任边界", "成功报酬 补助金"],
    heroEyebrow: "法定信息",
    heroTitle1: "事业者信息与",
    heroTitle2: "服务责任边界",
    heroDesc: "依据特定商取引法及相关规范，公开事业者信息、费用与服务边界。",
    summary: "株式会社志成コンサル（法人番号 5010401158340，東京都千代田区平河町1-8-2 半蔵門パレス8階，电话 03-6265-9756）提供日本补助金·助成金申请支持服务，采用成功报酬制；补助金书类作成由行政书士、雇用类助成金申请代理由社会保险劳务士依法执行；本公司不保证获批，结果以各主管机关审查为准。",
    sections: [
      { id: "company", h2: "事业者信息", blocks: [{ type: "table", head: ["项目", "内容"], rows: [["事业者名", "株式会社 志成コンサル"], ["法人番号", NAP.hojin], ["所在地", NAP.addr], ["电话", NAP.tel + "（工作日 9:00〜18:00）"], ["邮箱", NAP.mail], ["事业内容", "补助金·助成金申请支持、经营咨询；相关手续由持牌行政书士·社会保险劳务士·税理士执行"]] }] },
      { id: "fee", h2: "费用与支付", blocks: [{ type: "ul", items: ["成功报酬制：以交付決定／支給決定金额的一定比例计算，比例按制度与金额在签约前书面告知。", "着手金、实费（公证·翻译等）如有，签约时明示；不採択时不收取成功报酬。", "支付时点：原则上在补助金入金后；具体以合同为准。", "客户单方中止、提供虚假资料导致的不採択或返还，不在「不获批不收费」范围内。"] }] },
      { id: "scope", h2: "服务范围与责任边界", blocks: [{ type: "ul", items: ["本公司提供制度匹配、日程规划、材料整理与进度跟进；补助金申请书类的有偿作成由行政书士、雇用类助成金申请代理由社会保险劳务士、财务确认由税理士、事业计划由中小企业诊断士依法执行。", "本公司不保证採択、不承诺金额与入金时间；補助金为竞争审查、助成金为要件审查、东京都ゼロエミ为抽签制，结果以主管机关为准。", "本站所载金额·补助率·受付时间以各制度官方公募要領为准，并标注核验日期；实际申请前请再次确认官方最新公告。", "在留资格、税务等专业问题由相应持牌人提供意见；本站内容不构成法律或税务意见。", "客户须对提供资料的真实性负责；因虚假申报产生的返还、加算金由客户承担。"] }] },
      { id: "privacy", h2: "个人信息", blocks: [{ type: "p", text: "个人信息的取得、利用、保管依据个人情報保護法及本站隐私政策执行。" }, { type: "links", items: [{ label: "隐私政策", href: "/privacy" }] }] },
    ],
    faq: [
      { q: "签约后可以解除吗？", a: "可以，按合同约定的解除条款处理。已发生的实费按实结算；尚未提交申请的阶段通常不产生成功报酬。" },
      { q: "分成合作的法律关系是什么？", a: "介绍合作方仅负责介绍与客户关系，不代客申请、不收取申请代理费；分成基于本公司实际收到的成功报酬。详见合作页。" },
    ],
    sources: [{ label: "GビズINFO 法人情報", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010401158340" }],
    verifiedDate: V,
    related: [{ label: "隐私政策", href: "/privacy" }, { label: "服务流程与费用", href: "/service" }, { label: "合作伙伴", href: "/partner" }],
    ctaTitle1: "还有疑问？", ctaTitle2: "直接联系我们", ctaDesc: "工作日 1 个营业日内中文回复。",
    ui: UI.zh,
  },
  en: {
    path: "/legal",
    metaTitle: "Business Disclosure & Scope of Service | Shisei Consulting Co., Ltd.",
    metaDesc: "Business information (corporate number 5010401158340), fees (success-fee basis), scope, licensed division of work and no-guarantee disclosure.",
    keywords: ["Shisei Consulting disclosure", "subsidy consulting terms Japan"],
    heroEyebrow: "Legal",
    heroTitle1: "Business disclosure and",
    heroTitle2: "scope of responsibility",
    heroDesc: "Disclosures under the Act on Specified Commercial Transactions and related rules.",
    summary: "Shisei Consulting Co., Ltd. (corporate number 5010401158340, Hanzomon Palace 8F, 1-8-2 Hirakawacho, Chiyoda-ku, Tokyo; tel. 03-6265-9756) provides subsidy and grant application support on a success-fee basis; subsidy documents are prepared by Gyoseishoshi and employment-grant representation by Sharoshi. Approval is not guaranteed; outcomes rest with the reviewing authority.",
    sections: [
      { id: "company", h2: "Business information", blocks: [{ type: "table", head: ["Item", "Detail"], rows: [["Company", "Shisei Consulting Co., Ltd."], ["Corporate number", NAP.hojin], ["Address", "Hanzomon Palace 8F, 1-8-2 Hirakawacho, Chiyoda-ku, Tokyo 102-0093"], ["Tel", NAP.tel + " (weekdays 9:00–18:00)"], ["Email", NAP.mail], ["Business", "Subsidy/grant application support and consulting; procedures executed by licensed professionals"]] }] },
      { id: "fee", h2: "Fees and payment", blocks: [{ type: "ul", items: ["Success fee: a percentage of the approved amount, disclosed in writing before contract.", "Any retainer or out-of-pocket costs are stated at contract; no success fee if not adopted.", "Payment in principle after disbursement; per contract.", "Client withdrawal or false information is excluded from the no-fee guarantee."] }] },
      { id: "scope", h2: "Scope and responsibility", blocks: [{ type: "ul", items: ["We provide matching, scheduling, document organization and follow-up; subsidy documents by Gyoseishoshi, grant representation by Sharoshi, financials by Zeirishi, plans by SME consultants.", "No guarantee of adoption, amount or timing; subsidies are competitive, grants requirement-based, Tokyo Zero-Emission a lottery.", "Figures on this site follow official guidelines with verification dates; confirm the latest notice before applying.", "Immigration and tax questions are answered by licensed professionals; site content is not legal or tax advice.", "Clients are responsible for the accuracy of information provided."] }] },
      { id: "privacy", h2: "Personal information", blocks: [{ type: "p", text: "Handled under the Act on the Protection of Personal Information and our Privacy Policy." }, { type: "links", items: [{ label: "Privacy Policy", href: "/privacy" }] }] },
    ],
    faq: [
      { q: "Can we terminate after signing?", a: "Yes, per the contract's termination clause; incurred costs are settled, and no success fee applies before submission." },
      { q: "What is the legal nature of referral partnerships?", a: "Partners refer and manage relationships only; they do not apply or charge representation fees. Revenue share is based on success fees actually received." },
    ],
    sources: [{ label: "gBizINFO corporate record", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010401158340" }],
    verifiedDate: V,
    related: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Process & fees", href: "/service" }, { label: "Partners", href: "/partner" }],
    ctaTitle1: "Questions? ", ctaTitle2: "Contact us", ctaDesc: "Reply within one business day.",
    ui: UI.en,
  },
  ja: {
    path: "/legal",
    metaTitle: "特定商取引法に基づく表記・業務範囲と責任｜株式会社志成コンサル",
    metaDesc: "株式会社志成コンサル（法人番号5010401158340）の事業者情報、料金（成功報酬制）、業務範囲、士業の分担、採択を保証しない旨の表記。",
    keywords: ["志成コンサル 特定商取引法", "補助金 コンサル 責任範囲"],
    heroEyebrow: "法定表記",
    heroTitle1: "事業者情報と",
    heroTitle2: "業務範囲・責任",
    heroDesc: "特定商取引法および関連法令に基づき、事業者情報・料金・業務範囲を表記します。",
    summary: "株式会社志成コンサル（法人番号5010401158340、東京都千代田区平河町1-8-2 半蔵門パレス8階、電話03-6265-9756）は補助金・助成金の申請サポートを成功報酬制で提供。補助金書類の作成は行政書士、雇用関係助成金の申請代理は社会保険労務士が法令に基づき執行。採択を保証せず、結果は各主管機関の審査によります。",
    sections: [
      { id: "company", h2: "事業者情報", blocks: [{ type: "table", head: ["項目", "内容"], rows: [["事業者名", "株式会社 志成コンサル"], ["法人番号", NAP.hojin], ["所在地", NAP.addr], ["電話", NAP.tel + "（平日9:00〜18:00）"], ["メール", NAP.mail], ["事業内容", "補助金・助成金申請サポート、経営コンサルティング；手続きは有資格の行政書士・社労士・税理士が執行"]] }] },
      { id: "fee", h2: "料金と支払", blocks: [{ type: "ul", items: ["成功報酬制：交付決定・支給決定額の一定割合。料率は契約前に書面提示。", "着手金・実費（公証・翻訳等）がある場合は契約時に明示。不採択時は成功報酬なし。", "支払時期：原則として補助金入金後。契約書に準じます。", "お客様の一方的中止、虚偽資料による不採択・返還は対象外。"] }] },
      { id: "scope", h2: "業務範囲と責任", blocks: [{ type: "ul", items: ["当社は制度マッチング・スケジュール・資料整理・進捗管理を提供。補助金書類は行政書士、助成金申請代理は社労士、財務確認は税理士、事業計画は中小企業診断士が執行。", "採択・金額・入金時期を保証しません。補助金は競争審査、助成金は要件審査、東京都ゼロエミは抽選。", "本サイトの金額・補助率・受付期間は公式公募要領に準じ確認日を明記。申請前に最新公告をご確認ください。", "在留資格・税務は有資格者が回答。本サイトの内容は法的・税務的助言ではありません。", "提供資料の真実性はお客様の責任。虚偽申請による返還・加算金はお客様負担。"] }] },
      { id: "privacy", h2: "個人情報", blocks: [{ type: "p", text: "個人情報保護法およびプライバシーポリシーに基づき取扱います。" }, { type: "links", items: [{ label: "プライバシーポリシー", href: "/privacy" }] }] },
    ],
    faq: [
      { q: "契約後の解除は可能ですか？", a: "契約書の解除条項に従います。発生済みの実費は精算、提出前の段階では成功報酬は発生しません。" },
      { q: "紹介提携の法的関係は？", a: "提携先は紹介と顧客関係のみを担い、申請代理・代理報酬の受領は行いません。分配は当社が実際に受領した成功報酬に基づきます。" },
    ],
    sources: [{ label: "GビズINFO 法人情報", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010401158340" }],
    verifiedDate: V,
    related: [{ label: "プライバシーポリシー", href: "/privacy" }, { label: "サービスの流れ・費用", href: "/service" }, { label: "提携について", href: "/partner" }],
    ctaTitle1: "ご不明点は ", ctaTitle2: "お問い合わせください", ctaDesc: "1営業日以内にご回答します。",
    ui: UI.ja,
  },
};
