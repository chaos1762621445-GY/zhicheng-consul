import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
const HOME_LABEL: Record<Locale, string> = { zh: "首页", en: "Home", ja: "ホーム" };
import { localizedHref } from "@/lib/i18n/href";
import CaseGrid from "../CaseGrid";

export type CaseItem = {
  industry: string;
  company: string;
  subsidy: string;
  amount: string;
  period: string;
  quote: string;
};

// 本页三语文案（结构一致，翻译值并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  statsNote: string;
  sectionTag: string; sectionHeading: string; sectionSub: string;
  amountLabel: string; periodLabel: string;
  disclaimer: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string; ctaPrimary: string; ctaSecondary: string;
  stats: { num: string; label: string }[];
  cases: CaseItem[];
}> = {
  zh: {
    heroEyebrow: "Success Cases · 成功案例",
    heroTitle1: "客户", heroTitle2: "成功案例",
    heroDesc: "来自餐饮、美容、IT、建设等多个行业的真实获批案例，印证我们在日本政府补助金领域的专业实力。",
    statsNote: "※ 以上为本团队及合作持牌专家自 2022 年成立以来的累计口径（截至 2026 年 7 月）：服务企业数为累计咨询·委托家数；获批总额为经手申请中已收到交付决定的补助金·助成金合计；通过率为已完成审查案件中的採択比例，因补助金种类与公募回而异，个案结果以主管机关审查为准。",
    sectionTag: "真实案例 · 匿名脱敏处理",
    sectionHeading: "各行业获批实例",
    sectionSub: "以下案例均来自我们服务过的真实客户，已做匿名化处理，补助金金额及周期均为实际数据。",
    amountLabel: "获批金额", periodLabel: "申请周期",
    disclaimer: "※ 以上案例均已征得客户同意并做匿名化处理，补助金获批金额因企业规模、申请内容、审查年度等因素而异，不代表所有申请均可达到相同金额。具体可获批额度请咨询我们进行个案评估。",
    ctaTitle1: "您的企业也能", ctaTitle2: "获得补助金",
    ctaDesc: "免费咨询资格诊断，专业顾问当日回复，助您了解可申请的补助金方案。",
    ctaPrimary: "立即免费咨询", ctaSecondary: "查看常见问题",
    stats: [
      { num: "3,000+", label: "累计服务客户" },
      { num: "8.5億円", label: "累计获批补助金总额" },
      { num: "92%", label: "申请通过率" },
      { num: "4年", label: "专业服务年限" },
    ],
    cases: [
      { industry: "餐饮业", company: "大阪某中华料理餐厅", subsidy: "事業再構築補助金", amount: "2,000万円", period: "约3个月", quote: "受疫情影响，该餐厅堂食收入骤降超40%。志成コンサル协助规划外卖+预制菜业务转型方案，成功获批2000万补助金，完成厨房设备升级和线上运营系统搭建，目前外卖营业额已占总收入的55%。" },
      { industry: "美容行业", company: "东京某美甲美睫沙龙", subsidy: "IT導入補助金", amount: "450万円", period: "约2个月", quote: "该沙龙之前一直用纸质预约本，漏单、撞单情况不断。志成コンサル顾问建议申请IT导入补助，引入预约管理+会员CRM系统，费用几乎全额报销。导入后客户复购率提升了30%，节省了大量人工成本。" },
      { industry: "IT·软件", company: "福冈某系统开发公司", subsidy: "ものづくり補助金", amount: "1,000万円", period: "约4个月", quote: "该公司希望开发一套面向中小企业的AI自动化工具，但研发成本压力较大。志成コンサル协助撰写技术创新方案，顺利通过审查，获批1000万円研发补贴，提前两年实现了产品化目标。" },
      { industry: "建设·装修", company: "埼玉某华人内装工程公司", subsidy: "小規模事業者持続化補助金", amount: "200万円", period: "约6周", quote: "该公司规模较小，仅5名员工，一直不知道能申请什么补助。顾问推荐了最适合小规模公司的持续化补助金，协助更新施工设备并制作中日双语营销资料，顺利获批200万円，申请过程非常顺畅。" },
      { industry: "零售·电商", company: "名古屋某日本酒·土产零售店", subsidy: "事業再構築補助金", amount: "1,500万円", period: "约3.5个月", quote: "该零售店受疫情影响外国游客断绝，实体店经营困难。志成コンサル协助制定跨境电商转型计划，面向中国和东南亚市场，成功获批1500万円，实现了线上线下双轨经营。" },
      { industry: "教育·培训", company: "京都某华人日语学校", subsidy: "IT導入補助金", amount: "350万円", period: "约2个月", quote: "该学校希望引入线上课程管理平台和互动教学软件，但预算有限。志成コンサル识别出符合IT导入补助金的条件，全程中文辅导完成申请，最终获批350万円，成功上线线上教学系统。" },
      { industry: "制造·加工", company: "爱知县某食品加工工厂", subsidy: "ものづくり補助金", amount: "3,000万円", period: "约5个月", quote: "该工厂自动化改造一直是最大瓶颈，人工成本居高不下。志成コンサル团队协助制作专业的技术创新计划书，成功申请3000万円设备升级补助，生产效率提升45%，残次品率下降60%。" },
      { industry: "物流·运输", company: "横滨某货物运输公司", subsidy: "事業再構築補助金", amount: "1,800万円", period: "约4个月", quote: "该公司希望从传统货运转型冷链物流，需要购置冷藏车和建设冷库，资金缺口较大。志成コンサル制定完整的事业再构筑计划，获批1800万円补助，成功打入高端冷链市场，年营业额增长超80%。" },
    ],
  },
  en: {
    heroEyebrow: "Success Cases · Client Results",
    heroTitle1: "Client", heroTitle2: "Success Stories",
    heroDesc: "Real approved cases across food service, beauty, IT, construction, and more — proof of our expertise in Japan's government subsidy field.",
    statsNote: "※ The figures above are cumulative for our team and affiliated licensed professionals since our founding in 2022 (as of July 2026): businesses served counts cumulative consultations and engagements; total secured is the sum of subsidies and grants that have received a disbursement decision among the applications handled; the success rate is the proportion of adopted cases among those with completed review, varying by subsidy type and public-offering round. Individual results are subject to the reviewing authority's decision.",
    sectionTag: "Real cases · Anonymized",
    sectionHeading: "Approved Cases by Industry",
    sectionSub: "The following cases are all from real clients we have served, anonymized for privacy. Subsidy amounts and timelines are actual figures.",
    amountLabel: "Amount approved", periodLabel: "Timeline",
    disclaimer: "※ All cases above are used with client consent and anonymized. Approved subsidy amounts vary by company size, application content, review year, and other factors, and do not indicate that every application reaches the same amount. For the specific amount you may qualify for, please consult us for an individual assessment.",
    ctaTitle1: "Your Business Can Also", ctaTitle2: "Secure a Subsidy",
    ctaDesc: "A free eligibility consultation, with a professional advisor replying the same day, to help you understand which subsidies you can apply for.",
    ctaPrimary: "Get a Free Consultation Now", ctaSecondary: "View FAQ",
    stats: [
      { num: "3,000+", label: "Clients served" },
      { num: "8.5億円", label: "Total subsidies secured (JPY)" },
      { num: "92%", label: "Application success rate" },
      { num: "4yrs", label: "Years of specialist service" },
    ],
    cases: [
      { industry: "Food Service", company: "A Chinese restaurant in Osaka", subsidy: "Business Restructuring Subsidy", amount: "2,000万円", period: "About 3 months", quote: "Hit by the pandemic, this restaurant saw dine-in revenue plunge over 40%. Shisei Consulting helped plan a transformation into takeout plus ready-to-cook meals, securing a 20-million-yen subsidy to upgrade kitchen equipment and build an online operations system. Takeout now accounts for 55% of total revenue." },
      { industry: "Beauty", company: "A nail & lash salon in Tokyo", subsidy: "IT Adoption Subsidy", amount: "450万円", period: "About 2 months", quote: "The salon had long used a paper appointment book, leading to constant missed and double bookings. A Shisei Consulting advisor recommended applying for the IT Adoption Subsidy to introduce a booking-management and member CRM system, with costs almost fully reimbursed. Afterward, repeat-customer rates rose 30% and labor costs fell sharply." },
      { industry: "IT · Software", company: "A system development firm in Fukuoka", subsidy: "Monozukuri Subsidy", amount: "1,000万円", period: "About 4 months", quote: "The company wanted to build an AI automation tool for SMEs but faced heavy R&D cost pressure. Shisei Consulting helped write the technical-innovation proposal, which passed review smoothly, securing a 10-million-yen R&D subsidy and achieving productization two years ahead of target." },
      { industry: "Construction · Interiors", company: "A Chinese-run interior contractor in Saitama", subsidy: "Small-Business Sustainability Subsidy", amount: "200万円", period: "About 6 weeks", quote: "This small firm with only 5 employees had no idea what subsidies it could apply for. The advisor recommended the Sustainability Subsidy best suited to small businesses, helping upgrade construction equipment and produce bilingual CN/JP marketing materials, securing 2 million yen through a very smooth application." },
      { industry: "Retail · E-commerce", company: "A sake & souvenir retailer in Nagoya", subsidy: "Business Restructuring Subsidy", amount: "1,500万円", period: "About 3.5 months", quote: "With foreign tourists cut off during the pandemic, this retailer struggled to keep its physical store running. Shisei Consulting helped devise a cross-border e-commerce transformation plan targeting China and Southeast Asia, securing 15 million yen and achieving combined online-offline operations." },
      { industry: "Education · Training", company: "A Chinese-run Japanese language school in Kyoto", subsidy: "IT Adoption Subsidy", amount: "350万円", period: "About 2 months", quote: "The school wanted to introduce an online course-management platform and interactive teaching software but had a limited budget. Shisei Consulting identified that it qualified for the IT Adoption Subsidy and guided the application fully in Chinese, securing 3.5 million yen and successfully launching an online teaching system." },
      { industry: "Manufacturing · Processing", company: "A food processing plant in Aichi", subsidy: "Monozukuri Subsidy", amount: "3,000万円", period: "About 5 months", quote: "Automation upgrades had long been this plant's biggest bottleneck, with persistently high labor costs. The Shisei Consulting team helped prepare a professional technical-innovation plan, securing a 30-million-yen equipment-upgrade subsidy that raised production efficiency 45% and cut the defect rate 60%." },
      { industry: "Logistics · Transport", company: "A freight transport company in Yokohama", subsidy: "Business Restructuring Subsidy", amount: "1,800万円", period: "About 4 months", quote: "The company wanted to shift from traditional freight to cold-chain logistics, requiring refrigerated trucks and a cold-storage facility, with a large funding gap. Shisei Consulting drew up a complete restructuring plan, securing an 18-million-yen subsidy, breaking into the premium cold-chain market with annual revenue growth over 80%." },
    ],
  },
  ja: {
    heroEyebrow: "Success Cases · 成功事例",
    heroTitle1: "お客様の", heroTitle2: "成功事例",
    heroDesc: "飲食・美容・IT・建設など多様な業種の実際の採択事例。日本政府の補助金分野における私たちの専門性を証明します。",
    statsNote: "※ 上記は当チームおよび提携有資格専門家の2022年設立以来の累計値（2026年7月時点）です。支援企業数は累計の相談・委託件数、採択総額は手がけた申請のうち交付決定を受けた補助金・助成金の合計、採択率は審査完了案件のうち採択された割合で、補助金の種類や公募回により異なります。個別の結果は主管機関の審査結果によります。",
    sectionTag: "実際の事例 · 匿名化処理済み",
    sectionHeading: "各業種の採択実例",
    sectionSub: "以下の事例はすべて実際にご支援したお客様のもので、匿名化処理を施しています。補助金額・期間はいずれも実データです。",
    amountLabel: "採択金額", periodLabel: "申請期間",
    disclaimer: "※ 上記の事例はすべてお客様の同意を得たうえで匿名化しています。採択された補助金額は企業規模・申請内容・審査年度などの要因により異なり、すべての申請が同額に達することを示すものではありません。具体的な採択可能額は、当社にご相談のうえ個別診断を承ります。",
    ctaTitle1: "貴社も", ctaTitle2: "補助金を獲得できます",
    ctaDesc: "無料の資格診断相談、専門顧問が当日中にご返答し、申請可能な補助金プランをご案内します。",
    ctaPrimary: "今すぐ無料相談", ctaSecondary: "よくある質問を見る",
    stats: [
      { num: "3,000+", label: "累計支援顧客数" },
      { num: "8.5億円", label: "累計採択補助金総額" },
      { num: "92%", label: "申請採択率" },
      { num: "4年", label: "専門サービス実績年数" },
    ],
    cases: [
      { industry: "飲食業", company: "大阪の某中華料理店", subsidy: "事業再構築補助金", amount: "2,000万円", period: "約3か月", quote: "コロナ禍の影響で店内飲食の売上が40%超も急減。志成コンサルがテイクアウト＋中食への事業転換プランを策定支援し、2,000万円の補助金採択に成功。厨房設備の更新とオンライン運営システムの構築を実現し、現在テイクアウトの売上は総売上の55%を占めています。" },
      { industry: "美容業", company: "東京の某ネイル・まつげサロン", subsidy: "IT導入補助金", amount: "450万円", period: "約2か月", quote: "このサロンは長らく紙の予約帳を使い、予約漏れやダブルブッキングが絶えませんでした。志成コンサルの顧問がIT導入補助金の申請を提案し、予約管理＋会員CRMシステムを導入、費用はほぼ全額補助されました。導入後はリピート率が30%向上し、人件費も大幅に削減しました。" },
      { industry: "IT・ソフトウェア", company: "福岡の某システム開発会社", subsidy: "ものづくり補助金", amount: "1,000万円", period: "約4か月", quote: "同社は中小企業向けのAI自動化ツールの開発を望んでいましたが、研究開発費の負担が大きい状況でした。志成コンサルが技術革新提案の作成を支援し、審査を無事通過、1,000万円の研究開発補助を採択され、製品化目標を2年前倒しで実現しました。" },
      { industry: "建設・内装", company: "埼玉の某華人内装工事会社", subsidy: "小規模事業者持続化補助金", amount: "200万円", period: "約6週間", quote: "同社は従業員わずか5名の小規模で、どの補助金を申請できるのか分かっていませんでした。顧問が小規模事業者に最適な持続化補助金を提案し、施工設備の更新と中日バイリンガルの営業資料作成を支援、200万円をスムーズに採択されました。" },
      { industry: "小売・EC", company: "名古屋の某日本酒・土産小売店", subsidy: "事業再構築補助金", amount: "1,500万円", period: "約3.5か月", quote: "この小売店はコロナ禍で外国人観光客が途絶え、実店舗の経営が困難に。志成コンサルが中国・東南アジア市場向けの越境EC転換計画の策定を支援し、1,500万円の採択に成功、オンライン・オフラインの二本柱経営を実現しました。" },
      { industry: "教育・研修", company: "京都の某華人日本語学校", subsidy: "IT導入補助金", amount: "350万円", period: "約2か月", quote: "同校はオンライン講座管理プラットフォームと双方向教育ソフトの導入を望んでいましたが、予算に限りがありました。志成コンサルがIT導入補助金の要件該当を見極め、全工程中国語でサポートして申請を完了、350万円を採択され、オンライン教育システムの立ち上げに成功しました。" },
      { industry: "製造・加工", company: "愛知県の某食品加工工場", subsidy: "ものづくり補助金", amount: "3,000万円", period: "約5か月", quote: "この工場では自動化改造が最大のボトルネックで、人件費が高止まりしていました。志成コンサルのチームが専門的な技術革新計画書の作成を支援し、3,000万円の設備更新補助の申請に成功、生産効率は45%向上、不良品率は60%低下しました。" },
      { industry: "物流・運送", company: "横浜の某貨物運送会社", subsidy: "事業再構築補助金", amount: "1,800万円", period: "約4か月", quote: "同社は従来の貨物輸送から冷蔵物流への転換を望み、冷蔵車の購入と冷蔵倉庫の建設が必要で、資金不足が大きい状況でした。志成コンサルが完全な事業再構築計画を策定し、1,800万円の補助を採択、高付加価値の冷蔵物流市場への参入に成功、年間売上は80%超の伸びとなりました。" },
    ],
  },
};

export function getCases(locale: Locale): CaseItem[] { return T[locale].cases; }

export default function CasesContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        crumbs={[{ label: HOME_LABEL[locale], href: localizedHref(locale, "/") }, { label: `${t.heroTitle1}${t.heroTitle2}` }]}
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<span>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      {/* Stats Bar — premium light */}
      <section className="stats-wrap">
        <div className="wrap">
          <div className="grid-stats-4">
            {t.stats.map((s) => (
              <div key={s.label} className="stat-cell" style={{ textAlign: 'center', padding: '40px 20px', position: 'relative' }}>
                <div className="amount" style={{ fontSize: 'clamp(30px,4.2vw,52px)', lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', margin: '4px auto 0', maxWidth: 760, lineHeight: 1.7, padding: '0 20px' }}>
            {t.statsNote}
          </p>
        </div>
      </section>
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div style={{ display: "inline-block", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "2px" }}>{t.sectionTag}</div>
          </div>
          <h2 className="section-heading" style={{ textAlign: "center" }}>{t.sectionHeading}</h2>
          <p className="section-sub" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            {t.sectionSub}
          </p>

          <CaseGrid locale={locale} cases={t.cases} amountLabel={t.amountLabel} periodLabel={t.periodLabel} />

          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted)", marginTop: 40, padding: "16px 24px", background: "#fff", border: "1px solid var(--line)", borderRadius: 8, lineHeight: 1.8 }}>
            {t.disclaimer}
          </p>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
        primary={{ href: '/contact', label: t.ctaPrimary }}
        secondary={{ href: '/faq', label: t.ctaSecondary }}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
