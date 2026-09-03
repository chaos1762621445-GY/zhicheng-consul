import NavClient from "../NavClient";
import Footer from "../Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import PageHero from "../PageHero";
import Link from "next/link";
import { localizedHref } from "@/lib/i18n/href";
const HOME: Record<Locale, string> = { zh: "首页", en: "Home", ja: "ホーム" };
const PRIV: Record<Locale, { pre: string; link: string; post: string }> = {
  zh: { pre: "提交即表示您已阅读并同意", link: "隐私政策", post: "。我们仅用于回复您的咨询，不会提供给第三方。" },
  en: { pre: "By submitting you agree to our ", link: "Privacy Policy", post: ". Used only to respond to your inquiry; never shared with third parties." },
  ja: { pre: "送信により", link: "プライバシーポリシー", post: "に同意したものとみなします。お問い合わせへの回答のみに使用し、第三者に提供しません。" },
};

// 结构性图标（不随语言变化），按顺序对应 contacts 数组
const contactIcons = [
  (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
];

// 本页三语文案（结构一致，翻译值可并行维护）
const T: Record<Locale, {
  badge: string;
  heroTitle1: string; heroTitle2: string; heroDesc: string;
  leftEyebrow: string; leftHeading: string; leftSub: string;
  contacts: { label: string; value: string }[];
  qrAlt: string; qrTitle: string;
  qrDesc1: string; qrDescStrong: string; qrDesc2: string;
  qrHours: string; qrBtn: string;
  rightEyebrow: string; rightHeading: string; rightSub: string;
  iframeTitle: string;
}> = {
  zh: {
    badge: "工作日当日回复",
    heroTitle1: "免费补助金", heroTitle2: "资格诊断",
    heroDesc: "填写下方问卷，专业顾问当日为您匹配最适合的补助金方案。完全免费，无任何购买义务。",
    leftEyebrow: "联系方式", leftHeading: "直接联系我们", leftSub: "工作日当日回复，全程中文服务。",
    contacts: [
      { label: "企业微信 WeCom", value: "扫码添加营业部客服" },
      { label: "电话 Tel", value: "03-6265-9756" },
      { label: "邮箱 Email", value: "info@shisei-consult.jp" },
      { label: "地址 Address", value: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階" },
    ],
    qrAlt: "企业微信二维码", qrTitle: "扫码添加企业微信",
    qrDesc1: "扫码添加 ", qrDescStrong: "营业部客服", qrDesc2: "，专业顾问当日（工作日）免费诊断。",
    qrHours: "营业时间：周一〜周六 9:00〜18:00", qrBtn: "联系客服·免费咨询",
    rightEyebrow: "补助金资格自测", rightHeading: "3分钟快速测试",
    rightSub: "填写下方问卷，了解您能申请哪些补助金。",
    iframeTitle: "补助金资格自测",
  },
  en: {
    badge: "Same-day reply on business days",
    heroTitle1: "Free Subsidy", heroTitle2: "Eligibility Diagnosis",
    heroDesc: "Fill out the questionnaire below and a professional advisor will match you with the best-fit subsidy plan the same day. Completely free, with no obligation to buy.",
    leftEyebrow: "Contact", leftHeading: "Reach Us Directly", leftSub: "Same-day reply on business days, service entirely in Chinese.",
    contacts: [
      { label: "WeChat Work", value: "Scan to add our sales support" },
      { label: "Tel", value: "03-6265-9756" },
      { label: "Email", value: "info@shisei-consult.jp" },
      { label: "Address", value: "〒102-0093 Hanzomon Palace 8F, 1-8-2 Hirakawacho, Chiyoda-ku, Tokyo" },
    ],
    qrAlt: "WeChat Work QR code", qrTitle: "Scan to add us on WeChat Work",
    qrDesc1: "Scan to add our ", qrDescStrong: "sales support", qrDesc2: ", and a professional advisor will provide a free diagnosis the same day (business days).",
    qrHours: "Hours: Mon–Sat 9:00–18:00", qrBtn: "Contact Support · Free Consultation",
    rightEyebrow: "Subsidy Eligibility Self-Check", rightHeading: "3-Minute Quick Test",
    rightSub: "Fill out the questionnaire below to see which subsidies you can apply for.",
    iframeTitle: "Subsidy eligibility self-check",
  },
  ja: {
    badge: "営業日当日にご返答",
    heroTitle1: "無料 補助金", heroTitle2: "資格診断",
    heroDesc: "下記のアンケートにご記入いただければ、専門顧問が当日、最適な補助金プランをマッチングします。完全無料、購入義務は一切ありません。",
    leftEyebrow: "お問い合わせ", leftHeading: "直接ご連絡ください", leftSub: "営業日当日にご返答、全工程を中国語でサービスします。",
    contacts: [
      { label: "企業WeChat", value: "QRコードで営業部の担当者を追加" },
      { label: "電話", value: "03-6265-9756" },
      { label: "メール", value: "info@shisei-consult.jp" },
      { label: "住所", value: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階" },
    ],
    qrAlt: "企業WeChat QRコード", qrTitle: "QRコードで企業WeChatを追加",
    qrDesc1: "QRコードで ", qrDescStrong: "営業部の担当者", qrDesc2: " を追加すると、専門顧問が当日（営業日）に無料診断します。",
    qrHours: "営業時間：月〜土 9:00〜18:00", qrBtn: "担当者に連絡・無料相談",
    rightEyebrow: "補助金資格セルフチェック", rightHeading: "3分クイックテスト",
    rightSub: "下記のアンケートにご記入いただき、申請できる補助金をご確認ください。",
    iframeTitle: "補助金資格セルフチェック",
  },
};

export default function ContactContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main style={{ background: "#fff" }}>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        crumbs={[{ label: HOME[locale], href: localizedHref(locale, "/") }, { label: `${t.heroTitle1}${t.heroTitle2}` }]}
        eyebrow={t.badge}
        title={<>{t.heroTitle1}<span>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      {/* Main two-col */}
      <section className="contact-main" style={{ background: "white" }}>
        <div className="wrap">
          <div className="grid-contact">

            {/* Left: contacts */}
            <div className="contact-info" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11, fontWeight: 500,
                color: "#888", letterSpacing: ".12em",
                textTransform: "uppercase", marginBottom: 16,
              }}>{t.leftEyebrow}</div>

              <h2 style={{
                fontSize: 26, fontWeight: 700, color: "#171717",
                letterSpacing: "-0.6px", marginBottom: 8,
              }}>{t.leftHeading}</h2>
              <p style={{ fontSize: 14, color: "#4d4d4d", lineHeight: 1.7, marginBottom: 32 }}>
                {t.leftSub}
              </p>

              {/* Contact list */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}>
                {t.contacts.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    padding: "18px 0",
                    borderBottom: "1px solid #eaeaea",
                  }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      background: "#f5f5f5", borderRadius: 8,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#171717",
                    }}>
                      {contactIcons[i]}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#888", marginBottom: 4, fontWeight: 500, letterSpacing: ".04em" }}>{c.label}</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: "#171717", lineHeight: 1.5 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* QR card */}
              <div style={{
                display: "flex", gap: 20, alignItems: "center",
                background: "#fafafa",
                boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px inset",
                borderRadius: 8, padding: "24px",
                flex: 1, minHeight: 140,
              }}>
                <div style={{ background: "#fff", borderRadius: 8, padding: 8, flexShrink: 0, boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px" }}>
                  <img src="/qiwei-qr.png" alt={t.qrAlt} style={{ width: 100, height: 100, display: "block", borderRadius: 4 }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#171717", marginBottom: 8 }}>{t.qrTitle}</div>
                  <p style={{ fontSize: 13.5, color: "#4d4d4d", lineHeight: 1.65, marginBottom: 8 }}>
                    {t.qrDesc1}<strong style={{ color: "#171717" }}>{t.qrDescStrong}</strong>{t.qrDesc2}
                  </p>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 14 }}>{t.qrHours}</div>
                  <a
                    href="https://work.weixin.qq.com/kfid/kfcdeef8ec4573ef9f3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "#1a5c5a", color: "#fff",
                      fontSize: 13.5, fontWeight: 600,
                      padding: "10px 18px", borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    {t.qrBtn}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: quiz iframe */}
            <div className="contact-quiz">
              <div style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11, fontWeight: 500,
                color: "#888", letterSpacing: ".12em",
                textTransform: "uppercase", marginBottom: 16,
              }}>{t.rightEyebrow}</div>
              <h2 style={{
                fontSize: 26, fontWeight: 700, color: "#171717",
                letterSpacing: "-0.6px", marginBottom: 8,
              }}>{t.rightHeading}</h2>
              <p style={{ fontSize: 14, color: "#4d4d4d", lineHeight: 1.7, marginBottom: 24 }}>
                {t.rightSub}
              </p>

              <div style={{
                boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px inset",
                borderRadius: 8, overflow: "hidden",
                background: "#fff",
              }}>
                <iframe
                  src="https://zhicheng-subsidy.surge.sh/?client=official_website"
                  style={{ width: "100%", height: 660, border: "none", display: "block" }}
                  title={t.iframeTitle}
                />
              </div>
              <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 12 }}>
                {PRIV[locale].pre}<Link href={localizedHref(locale, "/privacy")} style={{ color: "var(--brand)", textDecoration: "underline" }}>{PRIV[locale].link}</Link>{PRIV[locale].post}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
