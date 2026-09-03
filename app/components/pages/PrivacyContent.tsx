import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

// 本页三语文案（结构一致，翻译值可并行维护）
type Section = { h: string; body: string[]; list?: string[]; contact?: boolean };
const T: Record<Locale, {
  heroEyebrow: string; heroTitle: string; heroDesc: string;
  lastUpdated: string;
  contactCompany: string; contactAddr: string; contactPhoneLabel: string; contactPhone: string; contactEmailLabel: string;
  sections: Section[];
}> = {
  zh: {
    heroEyebrow: "Privacy Policy",
    heroTitle: "隐私政策",
    heroDesc: "本政策说明株式会社志成コンサル如何收集、使用、保管和保护您的个人信息。我们依据日本《个人信息保护法》妥善处理您的信息。",
    lastUpdated: "最后更新：2026 年 8 月 1 日",
    contactCompany: "株式会社 志成コンサル",
    contactAddr: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階",
    contactPhoneLabel: "电话：", contactPhone: "03-6265-9756",
    contactEmailLabel: "邮箱：",
    sections: [
      {
        h: "1. 关于个人信息的处理方针",
        body: ["株式会社志成コンサル（以下简称「本公司」）在提供补助金·助成金申请代办及相关咨询服务的过程中，会取得客户的个人信息。本公司充分认识到保护个人信息的重要性，遵守日本《个人信息保护法》及相关法令，妥善处理个人信息。"],
      },
      {
        h: "2. 收集的个人信息范围",
        body: ["本公司在以下场景收集个人信息："],
        list: [
          "通过本网站的「免费诊断·咨询表单」提交时：公司名称、负责人姓名、电话号码、微信号、以及您主动填写的经营·咨询内容",
          "通过企业微信、电话、电子邮件与本公司联系时：您在沟通中提供的姓名、联系方式及咨询内容",
          "补助金·助成金申请代办过程中：为制作申请材料所必需的法人登记信息、财务·纳税相关资料、雇用相关资料等（仅在您委托代办并同意后取得）",
        ],
      },
      {
        h: "3. 个人信息的使用目的",
        body: ["本公司将收集的个人信息用于以下目的，不会超出以下范围使用："],
        list: [
          "对咨询·诊断请求进行回复与联系",
          "补助金·助成金申请代办服务的提供与相关联络",
          "服务相关的资料寄送、通知及售后跟进",
          "在您同意的范围内，提供与您需求相关的补助金·助成金信息",
          "服务质量改善及统计分析（以无法识别个人的形式）",
        ],
      },
      {
        h: "4. 向第三方提供个人信息",
        body: ["除下列情形外，本公司不会在未经本人同意的情况下向第三方提供个人信息："],
        list: [
          "已取得本人同意时",
          "为申请补助金·助成金，需向主管行政机关、事务局或协助申请的持牌专家（行政书士·税理士·社会保险劳务士·中小企业诊断士等）提供必要信息时（仅在您委托代办并同意后）",
          "依据法令须提供时",
          "为保护人的生命、身体或财产而有必要，且难以取得本人同意时",
        ],
      },
      {
        h: "5. 关于外部服务的利用",
        body: ["本网站的诊断·咨询表单使用第三方服务（Google 提供的表单·数据处理服务等）进行数据的收集与保管。透过表单提交的信息会保存在上述服务的服务器上，其处理遵循各服务提供商的隐私政策。本公司仅在本政策所载使用目的范围内访问和使用这些数据。"],
      },
      {
        h: "6. 个人信息的保管与安全管理",
        body: ["本公司对所保管的个人信息采取合理的安全管理措施，防止信息的泄露、灭失或毁损。个人信息在达成使用目的所需的范围内保管，超过必要期间或应本人请求时，将适当地删除或废弃。"],
      },
      {
        h: "7. 本人的权利（查询·更正·删除·停止使用）",
        body: ["对于本公司保管的您本人的个人信息，您有权请求查询、更正、追加、删除、停止使用或停止向第三方提供。如需行使上述权利，请通过下方联系方式与本公司联系，在确认本人身份后，本公司将依据法令在合理期间内予以响应。"],
      },
      {
        h: "8. 关于 Cookie 等",
        body: ["本网站可能使用 Cookie 及类似技术，以改善网站的使用体验并进行访问分析。这些信息不包含可直接识别个人的内容。您可通过浏览器设置拒绝 Cookie，但部分功能可能因此无法正常使用。"],
      },
      {
        h: "9. 隐私政策的修订",
        body: ["本公司可能因法令变更或业务需要，对本隐私政策进行修订。修订后的内容自本网站公布之时起生效。"],
      },
      {
        h: "10. 咨询窗口",
        body: ["关于个人信息处理的咨询、以及行使前述权利的请求，请联系："],
        contact: true,
      },
    ],
  },
  en: {
    heroEyebrow: "Privacy Policy",
    heroTitle: "Privacy Policy",
    heroDesc: "This policy explains how Shisei Consulting Co., Ltd. collects, uses, stores, and protects your personal information. We handle your information appropriately in accordance with Japan's Act on the Protection of Personal Information.",
    lastUpdated: "Last updated: August 1, 2026",
    contactCompany: "株式会社 志成コンサル (Shisei Consulting Co., Ltd.)",
    contactAddr: "〒102-0093 Hanzomon Palace 8F, 1-8-2 Hirakawacho, Chiyoda-ku, Tokyo",
    contactPhoneLabel: "Tel: ", contactPhone: "03-6265-9756",
    contactEmailLabel: "Email: ",
    sections: [
      {
        h: "1. Our Approach to Handling Personal Information",
        body: ["In the course of providing subsidy and grant application agency services and related consulting, Shisei Consulting Co., Ltd. (\"the Company\") obtains customers' personal information. The Company fully recognizes the importance of protecting personal information and handles it appropriately in compliance with Japan's Act on the Protection of Personal Information and related laws."],
      },
      {
        h: "2. Scope of Personal Information Collected",
        body: ["The Company collects personal information in the following situations:"],
        list: [
          "When you submit the website's \"Free Diagnosis / Consultation Form\": company name, contact person's name, phone number, WeChat ID, and the business or consultation details you voluntarily provide",
          "When you contact the Company via WeChat Work, phone, or email: the name, contact details, and inquiry content you provide during communication",
          "During subsidy and grant application agency work: corporate registration information, financial and tax-related documents, employment-related documents, and other materials necessary to prepare the application (obtained only after you engage our services and consent)",
        ],
      },
      {
        h: "3. Purposes of Using Personal Information",
        body: ["The Company uses the personal information it collects for the following purposes and will not use it beyond this scope:"],
        list: [
          "To respond to and follow up on consultation and diagnosis requests",
          "To provide subsidy and grant application agency services and related communication",
          "To send service-related materials, notices, and after-service follow-up",
          "To provide subsidy and grant information relevant to your needs, within the scope of your consent",
          "To improve service quality and conduct statistical analysis (in a form that cannot identify individuals)",
        ],
      },
      {
        h: "4. Provision of Personal Information to Third Parties",
        body: ["Except in the following cases, the Company will not provide personal information to third parties without the individual's consent:"],
        list: [
          "When the individual's consent has been obtained",
          "When it is necessary to provide required information to the competent administrative authority, secretariat, or licensed professionals assisting the application (Gyoseishoshi, Zeirishi, Sharoshi, SME Management Consultant, etc.) in order to apply for a subsidy or grant (only after you engage our services and consent)",
          "When provision is required by law",
          "When it is necessary to protect a person's life, body, or property and it is difficult to obtain the individual's consent",
        ],
      },
      {
        h: "5. Use of External Services",
        body: ["The website's diagnosis and consultation form uses third-party services (such as form and data-processing services provided by Google) to collect and store data. Information submitted through the form is stored on the servers of those services, and its handling follows the privacy policy of each service provider. The Company accesses and uses this data only within the scope of the purposes stated in this policy."],
      },
      {
        h: "6. Storage and Security Management of Personal Information",
        body: ["The Company takes reasonable security measures for the personal information it holds to prevent leakage, loss, or damage. Personal information is retained only to the extent necessary to achieve the purpose of use, and will be appropriately deleted or discarded when it exceeds the necessary period or upon the individual's request."],
      },
      {
        h: "7. Your Rights (Access, Correction, Deletion, Suspension of Use)",
        body: ["Regarding your own personal information held by the Company, you have the right to request access, correction, addition, deletion, suspension of use, or suspension of provision to third parties. To exercise these rights, please contact the Company using the contact information below; after verifying your identity, the Company will respond within a reasonable period in accordance with the law."],
      },
      {
        h: "8. About Cookies and Similar Technologies",
        body: ["This website may use cookies and similar technologies to improve the usability of the site and analyze access. This information does not contain content that can directly identify an individual. You can refuse cookies through your browser settings, but some functions may then not work properly."],
      },
      {
        h: "9. Revisions to This Privacy Policy",
        body: ["The Company may revise this Privacy Policy due to changes in laws or business needs. The revised content takes effect from the time it is published on this website."],
      },
      {
        h: "10. Contact Point",
        body: ["For inquiries regarding the handling of personal information and requests to exercise the rights described above, please contact:"],
        contact: true,
      },
    ],
  },
  ja: {
    heroEyebrow: "Privacy Policy",
    heroTitle: "プライバシーポリシー",
    heroDesc: "本ポリシーは、株式会社志成コンサルがお客様の個人情報をどのように収集・利用・保管・保護するかを説明します。当社は日本の「個人情報保護法」に基づき、お客様の情報を適切に取り扱います。",
    lastUpdated: "最終更新：2026年8月1日",
    contactCompany: "株式会社 志成コンサル",
    contactAddr: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階",
    contactPhoneLabel: "電話：", contactPhone: "03-6265-9756",
    contactEmailLabel: "メール：",
    sections: [
      {
        h: "1. 個人情報の取扱い方針について",
        body: ["株式会社志成コンサル（以下「当社」といいます）は、補助金・助成金の申請サポートおよび関連する相談サービスを提供する過程で、お客様の個人情報を取得します。当社は個人情報保護の重要性を十分に認識し、日本の「個人情報保護法」および関連法令を遵守して、個人情報を適切に取り扱います。"],
      },
      {
        h: "2. 収集する個人情報の範囲",
        body: ["当社は以下の場面で個人情報を収集します："],
        list: [
          "本ウェブサイトの「無料診断・相談フォーム」からご送信いただく際：会社名、ご担当者様のお名前、電話番号、WeChat ID、およびお客様が自発的にご記入いただく経営・相談内容",
          "企業WeChat、電話、電子メールで当社にご連絡いただく際：やり取りの中でご提供いただくお名前、連絡先、およびお問い合わせ内容",
          "補助金・助成金の申請サポートの過程で：申請書類の作成に必要な法人登記情報、財務・納税関連資料、雇用関連資料など（お客様がサポートをご依頼のうえ同意された場合にのみ取得します）",
        ],
      },
      {
        h: "3. 個人情報の利用目的",
        body: ["当社は収集した個人情報を以下の目的で利用し、以下の範囲を超えて利用することはありません："],
        list: [
          "ご相談・診断のご依頼への回答およびご連絡",
          "補助金・助成金の申請サポートサービスの提供および関連するご連絡",
          "サービスに関する資料の送付、通知およびアフターフォロー",
          "お客様の同意の範囲内で、ご要望に関連する補助金・助成金情報のご提供",
          "サービス品質の改善および統計分析（個人を識別できない形式で）",
        ],
      },
      {
        h: "4. 第三者への個人情報の提供",
        body: ["次の場合を除き、当社は本人の同意なく第三者に個人情報を提供することはありません："],
        list: [
          "本人の同意を得ている場合",
          "補助金・助成金を申請するため、主管行政機関、事務局、または申請を補助する有資格の専門家（行政書士・税理士・社会保険労務士・中小企業診断士など）に必要な情報を提供する必要がある場合（お客様がサポートをご依頼のうえ同意された場合にのみ）",
          "法令に基づき提供する必要がある場合",
          "人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合",
        ],
      },
      {
        h: "5. 外部サービスの利用について",
        body: ["本ウェブサイトの診断・相談フォームは、第三者サービス（Google が提供するフォーム・データ処理サービスなど）を利用してデータの収集と保管を行います。フォームを通じて送信された情報は上記サービスのサーバーに保存され、その取扱いは各サービス提供者のプライバシーポリシーに従います。当社は本ポリシーに記載された利用目的の範囲内でのみ、これらのデータにアクセスし利用します。"],
      },
      {
        h: "6. 個人情報の保管と安全管理",
        body: ["当社は、保管する個人情報について、情報の漏えい、滅失または毀損を防止するため、合理的な安全管理措置を講じます。個人情報は利用目的の達成に必要な範囲で保管し、必要な期間を超えた場合または本人のご請求があった場合には、適切に削除または廃棄します。"],
      },
      {
        h: "7. ご本人の権利（開示・訂正・削除・利用停止）",
        body: ["当社が保管するご本人の個人情報について、お客様は開示、訂正、追加、削除、利用停止、または第三者への提供の停止を請求する権利を有します。これらの権利を行使される場合は、下記の連絡先より当社にご連絡ください。ご本人であることを確認のうえ、当社は法令に基づき合理的な期間内に対応いたします。"],
      },
      {
        h: "8. Cookie などについて",
        body: ["本ウェブサイトは、サイトの利便性向上およびアクセス解析のため、Cookie および類似の技術を使用することがあります。これらの情報には個人を直接識別できる内容は含まれません。ブラウザの設定により Cookie を拒否することができますが、一部の機能が正常に利用できなくなる場合があります。"],
      },
      {
        h: "9. プライバシーポリシーの改定",
        body: ["当社は、法令の変更や業務上の必要に応じて、本プライバシーポリシーを改定することがあります。改定後の内容は、本ウェブサイトに掲載された時点から効力を生じます。"],
      },
      {
        h: "10. お問い合わせ窓口",
        body: ["個人情報の取扱いに関するお問い合わせ、および前述の権利の行使のご請求は、以下までご連絡ください："],
        contact: true,
      },
    ],
  },
};

export default function PrivacyContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main style={{ background: "#fff" }}>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle}</>}
        desc={t.heroDesc}
      />

      <section className="sec" style={{ background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div
            style={{
              fontSize: 13,
              color: "var(--muted, #6b6b6b)",
              marginBottom: 40,
              paddingBottom: 20,
              borderBottom: "1px solid var(--border)",
            }}
          >
            {t.lastUpdated}
          </div>

          {t.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--heading)",
                  marginBottom: 14,
                }}
              >
                {s.h}
              </h2>
              {s.body.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: 15,
                    color: "var(--body)",
                    lineHeight: 1.9,
                    marginBottom: 12,
                  }}
                >
                  {p}
                </p>
              ))}
              {s.list && (
                <ul
                  style={{
                    margin: "8px 0 0",
                    paddingLeft: 22,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {s.list.map((li, k) => (
                    <li
                      key={k}
                      style={{
                        fontSize: 15,
                        color: "var(--body)",
                        lineHeight: 1.8,
                      }}
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {s.contact && (
                <div
                  style={{
                    marginTop: 14,
                    padding: "20px 24px",
                    background: "var(--bg-outer)",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    fontSize: 14.5,
                    color: "var(--body)",
                    lineHeight: 2,
                  }}
                >
                  <div style={{ fontWeight: 700, color: "var(--heading)", marginBottom: 6 }}>
                    {t.contactCompany}
                  </div>
                  <div>{t.contactAddr}</div>
                  <div>{t.contactPhoneLabel}{t.contactPhone}</div>
                  <div>
                    {t.contactEmailLabel}
                    <a href="mailto:info@shisei-consult.jp" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                      info@shisei-consult.jp
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
