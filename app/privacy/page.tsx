import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    "株式会社志成コンサル隐私政策——说明我们如何收集、使用、保管和保护您在使用本网站及咨询服务时提供的个人信息，依据日本《个人信息保护法》制定。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "1. 关于个人信息的处理方针",
    body: [
      "株式会社志成コンサル（以下简称「本公司」）在提供补助金·助成金申请代办及相关咨询服务的过程中，会取得客户的个人信息。本公司充分认识到保护个人信息的重要性，遵守日本《个人信息保护法》及相关法令，妥善处理个人信息。",
    ],
  },
  {
    h: "2. 收集的个人信息范围",
    body: [
      "本公司在以下场景收集个人信息：",
    ],
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
    body: [
      "除下列情形外，本公司不会在未经本人同意的情况下向第三方提供个人信息：",
    ],
    list: [
      "已取得本人同意时",
      "为申请补助金·助成金，需向主管行政机关、事务局或协助申请的持牌专家（行政书士·税理士·社会保险劳务士·中小企业诊断士等）提供必要信息时（仅在您委托代办并同意后）",
      "依据法令须提供时",
      "为保护人的生命、身体或财产而有必要，且难以取得本人同意时",
    ],
  },
  {
    h: "5. 关于外部服务的利用",
    body: [
      "本网站的诊断·咨询表单使用第三方服务（Google 提供的表单·数据处理服务等）进行数据的收集与保管。透过表单提交的信息会保存在上述服务的服务器上，其处理遵循各服务提供商的隐私政策。本公司仅在本政策所载使用目的范围内访问和使用这些数据。",
    ],
  },
  {
    h: "6. 个人信息的保管与安全管理",
    body: [
      "本公司对所保管的个人信息采取合理的安全管理措施，防止信息的泄露、灭失或毁损。个人信息在达成使用目的所需的范围内保管，超过必要期间或应本人请求时，将适当地删除或废弃。",
    ],
  },
  {
    h: "7. 本人的权利（查询·更正·删除·停止使用）",
    body: [
      "对于本公司保管的您本人的个人信息，您有权请求查询、更正、追加、删除、停止使用或停止向第三方提供。如需行使上述权利，请通过下方联系方式与本公司联系，在确认本人身份后，本公司将依据法令在合理期间内予以响应。",
    ],
  },
  {
    h: "8. 关于 Cookie 等",
    body: [
      "本网站可能使用 Cookie 及类似技术，以改善网站的使用体验并进行访问分析。这些信息不包含可直接识别个人的内容。您可通过浏览器设置拒绝 Cookie，但部分功能可能因此无法正常使用。",
    ],
  },
  {
    h: "9. 隐私政策的修订",
    body: [
      "本公司可能因法令变更或业务需要，对本隐私政策进行修订。修订后的内容自本网站公布之时起生效。",
    ],
  },
  {
    h: "10. 咨询窗口",
    body: [
      "关于个人信息处理的咨询、以及行使前述权利的请求，请联系：",
    ],
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ background: "#fff" }}>
      <NavClient />

      <PageHero
        eyebrow="Privacy Policy"
        title={<>隐私政策</>}
        desc="本政策说明株式会社志成コンサル如何收集、使用、保管和保护您的个人信息。我们依据日本《个人信息保护法》妥善处理您的信息。"
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
            最后更新：2026 年 8 月 1 日
          </div>

          {sections.map((s, i) => (
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
                    株式会社 志成コンサル
                  </div>
                  <div>〒169-0075 東京都新宿区高田馬場1-25-32 7階</div>
                  <div>电话：03-6265-9756</div>
                  <div>
                    邮箱：
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

      <Footer />
    </main>
  );
}
