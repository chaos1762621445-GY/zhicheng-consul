'use client';
import Link from "next/link";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";

type Subsidy = { slug?: string; tag: string; name: string; amount: string; rate: string; desc: string; conditions: string[]; usage: string[] };

const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  condLabel: string; usageLabel: string; detailLabel: string;
  bottomTitle: string; bottomDesc: string; bottomCta: string;
  tabs: { value: string; label: string }[];
  subsidies: Subsidy[];
}> = {
  zh: {
    heroEyebrow: "补助金种类 · Subsidies",
    heroTitle1: "主要补助金", heroTitle2: "与助成金一览",
    heroDesc: "志成コンサル代办的6种主要补助金·助成金详细介绍。申请条件及使用方法欢迎随时咨询。",
    condLabel: "申请条件", usageLabel: "主要用途", detailLabel: "查看详情",
    bottomTitle: "哪种补助金最适合您？", bottomDesc: "3分钟免费诊断，为您的企业精准匹配最优补助金方案。", bottomCta: "开始免费诊断",
    tabs: [{ value: "all", label: "全部" }, { value: "seiryoka", label: "省力化 / AI" }, { value: "grant", label: "助成金" }, { value: "aircon", label: "节能补助" }],
    subsidies: [
      { slug: "seiryoka", tag: "省力化", name: "省力化补助金（一般型）", amount: "750 万〜8,000 万円", rate: "按员工规模分 5 档；补助率 1/2（小规模 2/3）", desc: "按员工规模定制方案，导入 DX 系统、自动化设备实现降本增效。补助上限：5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万円（满足大幅涨薪特例最高 1 亿円）。公募回制、审查採択。", conditions: ["正在导入 DX 系统的企业", "想用 IT 或设备替代人工的企业", "人手不足、希望提升效率的企业", "希望降低系统导入成本的企业"], usage: ["DX 系统·ERP·CRM 导入", "生产线自动化设备 / 机器人", "POS 收银及订单管理系统", "自动仓库·物流系统建设"] },
      { slug: "ai-it", tag: "AI导入", name: "数字化·AI 导入补助金", amount: "通常枠最高 450 万円", rate: "补助率 1/2 以内；需经 IT 导入支援事业者共同申请", desc: "日本政府数字化转型专项扶持资金（旧称 IT 导入补助金），AI/IT 软件采购、系统定制、部署培训可申请。需选用官方登录的 IT 工具并经 IT 导入支援事业者共同申请，有公募締切轮次。", conditions: ["个人事业主·中小企业·小规模事业者", "赤字企业只要计划可行亦可申请", "须选用官方登录的 IT 工具", "须在公募締切前完成申请"], usage: ["AI/IT 软件采购（客服·营销·流程）", "系统定制开发", "云服务·硬件配套", "部署调试·员工培训"] },
      { slug: "career-up", tag: "助成金", name: "员工转正助成金", amount: "中小企业最高 80 万円/人", rate: "按雇用形态+是否重点支援对象判定 80/40/20 万", desc: "政府助力企业留住优秀员工。金额由「转正前雇用形态+是否重点支援对象」决定：有期→正社员重点对象 80 万/人、其他 40 万/人；无期→正社员 40/20 万/人（中小企业·分 2 期）。属要件满足原则支给的助成金。", conditions: ["须为雇用保险适用事业所", "被转换员工须以非正规身份雇用满 6 个月以上", "转换后须持续雇用 6 个月以上", "转换后薪资须提升 3% 以上"], usage: ["有期·重点对象转正（80 万/人）", "有期·其他转正（40 万/人）", "无期→正社员（40/20 万/人）", "派遣员工转为直接雇用"] },
      { slug: "training", tag: "助成金", name: "员工培训助成金", amount: "按コース 1,000 万〜1 亿円", rate: "经费助成率 45%〜75%＋赁金助成", desc: "人材開発支援助成金，按コース分年度事业所上限：人材育成支援 1,000 万、人への投资促进 2,500 万、事業展開等リスキリング支援 1 亿円（至令和8年度末的时限措置）。AI 实战等课程需符合官方训练认定。", conditions: ["须为雇用保险适用事业所", "训练开始前 1〜6 个月须提交计划届", "培训须由外部机构或认定 off-JT 形式实施", "受训员工须为雇用保险被保险者"], usage: ["AI 营销获客培训", "AI 运营自动化培训", "AI 数字效率工具培训", "AI 行情分析与决策培训"] },
      { slug: "aircon", tag: "节能补助", name: "空调节能改造补助", amount: "东京都最高 4,500 万円", rate: "东京都助成率最高 3/4（回次制·抽签）", desc: "东京都中小规模事业所空调等省エネ设备更新补助（クール・ネット东京）。按 CO2 削减量·诊断方式分 3 档，助成率最高 3/4、上限 4,500 万日元。回次制申请、预算超额时抽签。餐饮、学校、民宿、企业等均可申请。", conditions: ["在日本境内业务用途设施（非家用）", "将现有老旧空调更换为高效节能型", "新设备须满足节能基准（APF 等）", "须提出明确的节能计划"], usage: ["餐饮·门店空调更新", "学校·教育机构空调更新", "民宿·酒店客房空调", "工厂·仓库节能空调系统"] },
    ],
  },
  en: {
    heroEyebrow: "Subsidies",
    heroTitle1: "Major Subsidies", heroTitle2: "& Grants at a Glance",
    heroDesc: "A detailed overview of the six major subsidies and grants Shisei Consulting handles. Feel free to ask about eligibility and uses anytime.",
    condLabel: "Eligibility", usageLabel: "Main Uses", detailLabel: "View Details",
    bottomTitle: "Which subsidy fits you best?", bottomDesc: "A 3-minute free diagnosis to precisely match your company with the optimal subsidy plan.", bottomCta: "Start Free Diagnosis",
    tabs: [{ value: "all", label: "All" }, { value: "seiryoka", label: "Labor-Saving / AI" }, { value: "grant", label: "Grants" }, { value: "aircon", label: "Energy Subsidy" }],
    subsidies: [
      { slug: "seiryoka", tag: "Labor-Saving", name: "Labor-Saving Subsidy (General)", amount: "7.5M–80M JPY", rate: "5 tiers by headcount; subsidy rate 1/2 (small-scale 2/3)", desc: "Plans tailored by headcount, adopting DX systems and automation equipment to cut costs and boost efficiency. Caps: 7.5M JPY for under 5 staff, 15M for 6–20, 30M for 21–50, 50M for 51–100, 80M for 101+ (up to 100M JPY with the large wage-increase exception). Round-based public offering, selection by review.", conditions: ["Companies adopting DX systems", "Companies wanting IT/equipment to replace manual labor", "Understaffed companies seeking efficiency", "Companies wanting to lower system adoption costs"], usage: ["DX system · ERP · CRM adoption", "Production-line automation / robots", "POS and order management systems", "Automated warehouse · logistics systems"] },
      { slug: "ai-it", tag: "AI Adoption", name: "Digital / AI Adoption Subsidy", amount: "Up to 4.5M JPY (standard frame)", rate: "Subsidy rate within 1/2; joint application via certified IT vendor required", desc: "Japan's dedicated digital-transformation support fund (formerly the IT Introduction Subsidy). AI/IT software purchases, custom systems, and deployment training are eligible. Requires officially listed IT tools and joint application via a certified IT vendor; has public-offering deadline rounds.", conditions: ["Sole proprietors · SMEs · small businesses", "Loss-making firms may apply if the plan is viable", "Must use officially listed IT tools", "Must complete application before the public-offering deadline"], usage: ["AI/IT software (support · marketing · workflow)", "Custom system development", "Cloud services · hardware bundles", "Deployment · staff training"] },
      { slug: "career-up", tag: "Grant", name: "Career-Up (Regularization) Grant", amount: "Up to 800K JPY/person (SME)", rate: "80/40/20万 by employment type + priority target", desc: "Government support to help firms retain talent. The amount is set by \"employment type before conversion + whether a priority target\": fixed-term → regular priority target 800K/person, others 400K/person; indefinite → regular 400K/200K per person (SME, in 2 installments). A grant paid on meeting the requirements.", conditions: ["Must be an employment-insurance-covered establishment", "Converted staff must have been non-regular for 6+ months", "Must continue employment 6+ months after conversion", "Wages must rise 3%+ after conversion"], usage: ["Fixed-term · priority target regularization (800K/person)", "Fixed-term · other regularization (400K/person)", "Indefinite → regular (400K/200K per person)", "Dispatched staff to direct employment"] },
      { slug: "training", tag: "Grant", name: "Human Resource Development Grant", amount: "10M–100M JPY by course", rate: "Cost subsidy rate 45%–75% + wage subsidy", desc: "The Human Resource Development Support Grant, with annual per-establishment caps by course: HR training support 10M, investment-in-people promotion 25M, business-development reskilling support 100M JPY (a time-limited measure through end of FY Reiwa 8). Courses such as hands-on AI must meet official training certification.", conditions: ["Must be an employment-insurance-covered establishment", "Plan notification must be filed 1–6 months before training starts", "Training must be by an external body or certified off-JT format", "Trainees must be employment-insurance insured"], usage: ["AI marketing & lead-gen training", "AI operations automation training", "AI digital efficiency tools training", "AI market analysis & decision training"] },
      { slug: "aircon", tag: "Energy Subsidy", name: "Energy-Efficient AC Retrofit Subsidy", amount: "Up to 45M JPY (Tokyo)", rate: "Tokyo subsidy rate up to 3/4 (round-based · lottery)", desc: "Tokyo's subsidy for updating AC and other energy-saving equipment at small/mid establishments (Cool Net Tokyo). Three tiers by CO2 reduction and diagnosis method, subsidy rate up to 3/4, cap 45M JPY. Round-based application, lottery when the budget is exceeded. F&B, schools, guesthouses, businesses, etc. may apply.", conditions: ["Business-use facilities in Japan (not residential)", "Replace existing old AC with high-efficiency models", "New equipment must meet energy standards (APF, etc.)", "Must present a clear energy-saving plan"], usage: ["F&B · storefront AC updates", "School · educational institution AC updates", "Guesthouse · hotel room AC", "Factory · warehouse energy-saving AC systems"] },
    ],
  },
  ja: {
    heroEyebrow: "補助金の種類 · Subsidies",
    heroTitle1: "主要な補助金", heroTitle2: "・助成金の一覧",
    heroDesc: "志成コンサルがサポートする6種類の主要な補助金・助成金を詳しくご紹介。申請条件やご利用方法はお気軽にご相談ください。",
    condLabel: "申請条件", usageLabel: "主な用途", detailLabel: "詳細を見る",
    bottomTitle: "どの補助金があなたに最適？", bottomDesc: "3分の無料診断で、貴社に最適な補助金プランを的確にマッチングします。", bottomCta: "無料診断を始める",
    tabs: [{ value: "all", label: "すべて" }, { value: "seiryoka", label: "省力化 / AI" }, { value: "grant", label: "助成金" }, { value: "aircon", label: "省エネ補助" }],
    subsidies: [
      { slug: "seiryoka", tag: "省力化", name: "省力化補助金（一般型）", amount: "750万〜8,000万円", rate: "従業員規模で5区分；補助率 1/2（小規模 2/3）", desc: "従業員規模に応じたプランで、DXシステム・自動化設備を導入しコスト削減と効率化を実現。補助上限：5人以下750万、6〜20人1,500万、21〜50人3,000万、51〜100人5,000万、101人以上8,000万円（大幅賃上げ特例で最大1億円）。公募回次制、審査採択。", conditions: ["DXシステムを導入中の企業", "IT・設備で人手を代替したい企業", "人手不足で効率化を図りたい企業", "システム導入コストを下げたい企業"], usage: ["DXシステム・ERP・CRM導入", "生産ラインの自動化設備 / ロボット", "POSレジ・受注管理システム", "自動倉庫・物流システム構築"] },
      { slug: "ai-it", tag: "AI導入", name: "デジタル・AI導入補助金", amount: "通常枠 最大450万円", rate: "補助率 1/2以内；IT導入支援事業者との共同申請が必要", desc: "日本政府のデジタル変革専門支援資金（旧IT導入補助金）。AI/ITソフトの購入、システムのカスタマイズ、導入研修が対象。公式登録のITツールを選び、IT導入支援事業者との共同申請が必要、公募締切の回次あり。", conditions: ["個人事業主・中小企業・小規模事業者", "赤字企業も計画が実行可能なら申請可", "公式登録のITツールを使用すること", "公募締切までに申請を完了すること"], usage: ["AI/ITソフト購入（顧客対応・マーケ・業務）", "システムのカスタマイズ開発", "クラウドサービス・ハード付帯", "導入調整・従業員研修"] },
      { slug: "career-up", tag: "助成金", name: "キャリアアップ助成金", amount: "中小企業 最大80万円/人", rate: "雇用形態+重点支援対象か否かで80/40/20万を判定", desc: "従業員の定着を政府が支援。金額は「転換前の雇用形態＋重点支援対象か否か」で決定：有期→正社員の重点対象80万/人、その他40万/人；無期→正社員40/20万/人（中小企業・2期分割）。要件を満たせば支給される助成金です。", conditions: ["雇用保険適用事業所であること", "転換対象者を非正規で6か月以上雇用していること", "転換後6か月以上継続雇用すること", "転換後に賃金を3%以上引き上げること"], usage: ["有期・重点対象の正社員化（80万/人）", "有期・その他の正社員化（40万/人）", "無期→正社員（40/20万/人）", "派遣社員の直接雇用化"] },
      { slug: "training", tag: "助成金", name: "人材開発支援助成金", amount: "コース別 1,000万〜1億円", rate: "経費助成率 45%〜75%＋賃金助成", desc: "人材開発支援助成金。コース別の年度事業所上限：人材育成支援1,000万、人への投資促進2,500万、事業展開等リスキリング支援1億円（令和8年度末までの時限措置）。AI実践等の講座は公式の訓練認定に適合が必要。", conditions: ["雇用保険適用事業所であること", "訓練開始の1〜6か月前に計画届を提出", "外部機関または認定off-JT形式で実施", "受講者は雇用保険被保険者であること"], usage: ["AIマーケティング集客研修", "AI業務自動化研修", "AIデジタル効率化ツール研修", "AI市況分析・意思決定研修"] },
      { slug: "aircon", tag: "省エネ補助", name: "空調省エネ改修補助", amount: "東京都 最大4,500万円", rate: "東京都 助成率 最大3/4（回次制・抽選）", desc: "東京都の中小規模事業所向け空調等省エネ設備更新補助（クール・ネット東京）。CO2削減量・診断方式で3区分、助成率最大3/4、上限4,500万円。回次制申請、予算超過時は抽選。飲食・学校・民宿・企業などが申請可能。", conditions: ["日本国内の業務用途施設（家庭用不可）", "既存の老朽空調を高効率省エネ型に更新", "新設備が省エネ基準（APF等）を満たすこと", "明確な省エネ計画を提出すること"], usage: ["飲食・店舗の空調更新", "学校・教育機関の空調更新", "民宿・ホテル客室の空調", "工場・倉庫の省エネ空調システム"] },
    ],
  },
};

function SubsidyCard({ s, ui, L }: { s: Subsidy; ui: (typeof T)["zh"]; L: (p: string) => string }) {
  return (
    <Card style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16 }}>
      <CardContent className="p-8">
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
          <div>
            <Badge style={{ marginBottom: 12, background: "var(--brand-bg)", color: "#1a5c5a", border: "1px solid var(--brand-mid)" }} className="hover:bg-[var(--brand-bg)]">{s.tag}</Badge>
            <div style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>{s.name}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#1a5c5a", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 4 }}>{s.amount}</div>
            <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>{s.rate}</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 12 }}>{ui.condLabel}</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.conditions.map((c, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--ink-3)" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1a5c5a", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />{c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 12 }}>{ui.usageLabel}</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.usage.map((u, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--ink-3)" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1a5c5a", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />{u}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {s.slug && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "flex-end" }}>
            <Link href={L(`/subsidies/${s.slug}`)} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#1a5c5a", textDecoration: "none" }}>
              {ui.detailLabel}<ArrowRightIcon style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function SubsidiesContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];
  const L = (p: string) => localizedHref(locale, p);
  const filterFor = (v: string) => {
    if (v === "all") return t.subsidies;
    if (v === "seiryoka") return t.subsidies.filter(s => s.slug === "seiryoka" || s.slug === "ai-it");
    if (v === "grant") return t.subsidies.filter(s => s.slug === "career-up" || s.slug === "training");
    return t.subsidies.filter(s => s.slug === "aircon");
  };

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span style={{ color: 'var(--gold)' }}>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="page-wrap">
          <Tabs defaultValue="all">
            <TabsList style={{ marginBottom: 32, height: "auto", background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
              {t.tabs.map(cat => (
                <TabsTrigger key={cat.value} value={cat.value} className="px-5 py-2.5 text-sm rounded-md data-active:bg-[#1a5c5a] data-active:text-white data-active:shadow-none">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {t.tabs.map(cat => (
              <TabsContent key={cat.value} value={cat.value} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {filterFor(cat.value).map((s, i) => (
                  <SubsidyCard key={i} s={s} ui={t} L={L} />
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 56, borderTop: "1px solid var(--line)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>{t.bottomTitle}</div>
            <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 32, lineHeight: 1.75 }}>{t.bottomDesc}</p>
            <Link href={L("/contact")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a5c5a", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              {t.bottomCta}<ArrowRightIcon style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
