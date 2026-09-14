import type { Locale } from "@/lib/i18n/config";

// Existing company-approved figures and /legal fee terms; do not infer disbursements.
export const companyClaims: Record<Locale, {
  statsNote: string; noSuccessFee: string; feeScope: string; feeRate: string; feeTiming: string;
}> = {
  zh: {
    statsNote: "※ 以上为本团队及合作持牌专家自成立以来的累计口径（截至 2026 年 8 月）：累计获批案件为已获交付決定／支給決定的申请案件数（同一企业多件申请按件计）；累计获批金额为上述案件的批准金额合计（非到账金额）；通过率为已完成审查案件的採択比例，因制度及公募回而异。个案结果以主管机关审查为准。",
    noSuccessFee: "不获批不收成功报酬",
    feeScope: "申请不採択时不收取成功报酬；着手金、实费（公证·翻译等）如有，签约时明示。客户单方中止、虚假资料导致的不採択或返还，按合同约定处理。",
    feeRate: "成功报酬以交付決定／支給決定金额的一定比例计算，比例按制度与金额在签约前书面告知；没有适用于所有案件的固定费率。",
    feeTiming: "成功报酬原则上在补助金到账后支付，具体支付时点以合同为准。",
  },
  en: {
    statsNote: "※ Cumulative figures for our team and affiliated licensed professionals since founding, as of August 2026. Approved applications are those with a grant/payment decision (交付決定／支給決定); multiple applications by one business count separately. Total approved funding is the sum of amounts in those decisions, not funds disbursed. The approval rate is the share adopted among reviewed cases and varies by program and round. Individual outcomes depend on the reviewing authority.",
    noSuccessFee: "No approval, no success fee",
    feeScope: "No success fee is charged if an application is rejected. Any retainer or out-of-pocket costs, such as notarization or translation, are disclosed when signing. Client withdrawal or false information leading to rejection or repayment is handled under the contract.",
    feeRate: "The success fee is a percentage of the grant/payment decision amount (交付決定／支給決定). The rate depends on the program and amount and is disclosed in writing before signing; there is no single rate for every case.",
    feeTiming: "The success fee is normally payable after subsidy disbursement; the exact payment date follows the contract.",
  },
  ja: {
    statsNote: "※ 当チームおよび提携有資格専門家の設立以来の累計値（2026年8月時点）です。累計決定件数は交付決定・支給決定を受けた申請案件数（同一企業の複数申請は案件ごとに計上）、累計決定額はその決定額の合計（入金額ではありません）です。採択率は審査完了案件に占める採択の割合で、制度・公募回により異なります。個別の結果は主管機関の審査によります。",
    noSuccessFee: "不採択なら成功報酬なし",
    feeScope: "不採択時は成功報酬をいただきません。着手金・実費（公証・翻訳等）がある場合は契約時に明示します。お客様の一方的中止、虚偽資料による不採択・返還は契約の定めに従います。",
    feeRate: "成功報酬は交付決定・支給決定額の一定割合で計算します。料率は制度と金額に応じて契約前に書面で提示し、すべての案件に一律の料率を適用するものではありません。",
    feeTiming: "成功報酬の支払時期は原則として補助金入金後とし、具体的な時期は契約書に準じます。",
  },
};
