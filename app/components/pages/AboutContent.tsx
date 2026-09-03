import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

// 本页三语文案（结构一致，翻译值并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  philoHeading1: string; philoHeading2: string; philoP1: string; philoP2: string; philoP3: string;
  statsCardLabel: string;
  teamHeading: string; teamSub: string;
  storyHeading: string; storyQuote: string; storyAttr: string; storyP1: string; storyP2: string; storyP3: string;
  companyHeading: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string; ctaPrimary: string; ctaSecondary: string;
  stats: { num: string; label: string }[];
  team: { title: string; name: string; en: string; specialty: string; desc: string; initial: string }[];
  companyInfo: { label: string; value: string }[];
}> = {
  zh: {
    heroEyebrow: "关于我们",
    heroTitle1: "跨越语言边界", heroTitle2: "让补助金触手可及",
    heroDesc: "我们是一支跨越语言与文化边界的专业团队，致力于让每一位在日华人企业主，都能平等地享受日本政府补助金政策的红利。",
    philoHeading1: "让语言不再成为", philoHeading2: "机会的壁垒",
    philoP1: "日本政府每年提供超过数千亿日元的补助金与助成金，专门用于扶持中小企业创新、雇用与发展。然而，对于大多数在日华人企业主而言，这些资金往往因为语言门槛和繁琐的申请程序而遥不可及。",
    philoP2: "我们相信，每一位用心经营、努力创业的在日华人，都应当平等地获得这些政策支持。志成コンサル成立的初衷，正是要消除这道语言与文化的屏障，让补助金申请变得简单、透明、真正可及。",
    philoP3: "全程中文对接，不获批不收费——这不只是我们的服务承诺，更是我们对在日华人社区责任与信任的体现。",
    statsCardLabel: "核心数据",
    teamHeading: "四士联合，全方位保障",
    teamSub: "行政书士·社会保险劳务士·税理士·中小企业诊断士，四种国家资格专家组成跨学科团队，覆盖补助金申请的每一个环节。",
    storyHeading: "从一次痛心的错过说起",
    storyQuote: "我亲眼看到一位认识多年的华人朋友，因为看不懂日语申请指南，错过了最高可获 500 万円事业重构补助金的申请截止日期。那一刻，我意识到——这不是个案，而是整个在日华人创业群体面临的系统性困境。",
    storyAttr: "—— 创始人 李 忠良",
    storyP1: "2022年，李忠良与几位志同道合的专业人士共同创立了志成コンサル。他们有一个共同的信念：在日华人企业主所面临的，不是能力不足，而是信息不对称和语言障碍所造成的机会不平等。",
    storyP2: "创业初期，团队走访了大阪、东京、名古屋的数十家华人经营的企业。他们发现，许多企业主甚至不知道自己符合申请条件，更不知道这些补助金是真实存在、可以申请的。语言不通、信息缺失，让他们在不知不觉中与本该属于自己的资金擦肩而过。",
    storyP3: "如今，志成コンサル已累计服务 3,000 余家在日华人企业，协助获批补助金总额超过 8.5 亿日元。每一个成功案例背后，都是一个华人家庭的创业梦想得到了应有的支持。我们会继续走下去，直到语言不再是任何在日华人获取发展机会的阻碍。",
    companyHeading: "公司信息",
    ctaTitle1: "与我们一起", ctaTitle2: "让补助金触手可及",
    ctaDesc: "免费咨询资格诊断，专业顾问当日回复，助您把握每一次政策红利。",
    ctaPrimary: "申请免费咨询", ctaSecondary: "了解代理合作",
    stats: [
      { num: "3,000+", label: "累计服务企业" },
      { num: "¥8.5億", label: "协助获批总额" },
      { num: "92%", label: "申请成功率" },
      { num: "4类", label: "国家认定资质" },
    ],
    team: [
      { title: "行政书士", name: "佐藤 健一", en: "Kenichi Sato", specialty: "补助金申请书类制作专家", desc: "拥有10年以上行政书士经验，专精各类补助金及助成金申请书的制作与提交。擅长以准确、有力的日语表达复杂的事业计划书，大幅提升申请通过率。", initial: "佐藤" },
      { title: "社会保险劳务士", name: "田中 裕子", en: "Yuko Tanaka", specialty: "雇用助成金·劳务管理专家", desc: "专注于员工转正助成金、人才开发支援助成金等劳务类助成金申请。同时提供劳动合同审查、就业规则制定等配套服务，助力企业在合规框架内最大化资金支持。", initial: "田" },
      { title: "税理士", name: "陈 建华", en: "Chen Jianhua", specialty: "财务审查·税务申报专家", desc: "精通日本税务法规与中小企业财务管理，专为在日华人企业主提供税务规划与财务咨询。在补助金申请中负责财务资料准备和审查，确保数据准确无误，赢得审查机关信任。", initial: "陈" },
      { title: "中小企业诊断士", name: "王 浩然", en: "Wang Haoran", specialty: "事业计划·经营战略专家", desc: "国家资格中小企业诊断士，拥有深厚的经营战略与商业模式分析能力。负责事业重构补助金、制造业补助金等需要高质量事业计划书的申请，从战略层面提升申请竞争力。", initial: "王" },
    ],
    companyInfo: [
      { label: "商号", value: "株式会社 志成コンサル" },
      { label: "成立时间", value: "2022年4月" },
      { label: "所在地", value: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階" },
      { label: "业务内容", value: "补助金·助成金申请代办、经营咨询、行政书士业务、税务申报支援" },
      { label: "专业资质", value: "行政书士事务所登记 / 社会保险劳务士事务所登记 / 税理士事务所登记 / 中小企业诊断士登记" },
      { label: "服务语言", value: "日语 · 普通话 · 广东话" },
      { label: "营业时间", value: "周一至周五 9:00〜18:00（周末及节假日需预约）" },
    ],
  },
  en: {
    heroEyebrow: "About Us",
    heroTitle1: "Beyond the Language Barrier", heroTitle2: "Making Subsidies Within Reach",
    heroDesc: "We are a professional team that bridges language and cultural divides, dedicated to helping every Chinese business owner in Japan share equally in the benefits of Japan's government subsidy programs.",
    philoHeading1: "So Language No Longer", philoHeading2: "Blocks Opportunity",
    philoP1: "Each year the Japanese government provides hundreds of billions of yen in subsidies and grants to support the innovation, employment, and growth of small and medium-sized enterprises. Yet for most Chinese business owners in Japan, these funds remain out of reach due to the language barrier and complex application procedures.",
    philoP2: "We believe every Chinese entrepreneur in Japan who runs their business with care deserves equal access to this policy support. Shisei Consulting was founded precisely to remove this barrier of language and culture — to make subsidy applications simple, transparent, and genuinely accessible.",
    philoP3: "Full support in Chinese, no approval no fee — this is not just our service promise, but an expression of our responsibility to, and trust within, the Chinese community in Japan.",
    statsCardLabel: "Key Figures",
    teamHeading: "Four Specialists, Complete Coverage",
    teamSub: "Gyoseishoshi, Sharoshi (labor & social security attorney), Zeirishi, and SME Management Consultant — four national qualifications form a cross-disciplinary team covering every stage of the subsidy application.",
    storyHeading: "It Began With One Painful Missed Chance",
    storyQuote: "I watched a Chinese friend I'd known for years miss the deadline for a Business Restructuring Subsidy worth up to 5 million yen, simply because he couldn't read the Japanese application guide. In that moment I realized — this wasn't an isolated case, but a systemic difficulty faced by the entire Chinese entrepreneurial community in Japan.",
    storyAttr: "— Founder, Li Zhongliang",
    storyP1: "In 2022, Li Zhongliang founded Shisei Consulting together with several like-minded professionals. They shared one conviction: what Chinese business owners in Japan face is not a lack of ability, but an inequality of opportunity created by information asymmetry and the language barrier.",
    storyP2: "In its early days, the team visited dozens of Chinese-run businesses in Osaka, Tokyo, and Nagoya. They found that many owners did not even know they were eligible to apply, nor that these subsidies were real and available. Language gaps and missing information meant they were unknowingly letting funds that should have been theirs slip away.",
    storyP3: "Today, Shisei Consulting has served over 3,000 Chinese-owned businesses in Japan and helped secure more than 850 million yen in approved subsidies. Behind every success story is a Chinese family's entrepreneurial dream that received the support it deserved. We will keep going — until language is no longer an obstacle for any Chinese person in Japan seeking the chance to grow.",
    companyHeading: "Company Information",
    ctaTitle1: "Together With Us,", ctaTitle2: "Make Subsidies Within Reach",
    ctaDesc: "A free eligibility consultation, with a professional advisor replying the same day, to help you seize every policy opportunity.",
    ctaPrimary: "Request a Free Consultation", ctaSecondary: "Explore Partner Program",
    stats: [
      { num: "3,000+", label: "Businesses served" },
      { num: "¥8.5億", label: "Total subsidies secured (JPY)" },
      { num: "92%", label: "Application success rate" },
      { num: "4", label: "National qualifications" },
    ],
    team: [
      { title: "Gyoseishoshi", name: "佐藤 健一", en: "Kenichi Sato", specialty: "Subsidy application document specialist", desc: "With over 10 years of experience as a Gyoseishoshi, specializing in preparing and submitting applications for all kinds of subsidies and grants. Skilled at expressing complex business plans in accurate, compelling Japanese, significantly raising approval rates.", initial: "佐藤" },
      { title: "Sharoshi", name: "田中 裕子", en: "Yuko Tanaka", specialty: "Employment grant & labor management specialist", desc: "Focused on labor-related grants such as the Career-Up (Regularization) Grant and the Human Resource Development Grant. Also provides supporting services such as labor contract review and work-rule drafting, helping companies maximize funding within a compliant framework.", initial: "田" },
      { title: "Zeirishi", name: "陈 建华", en: "Chen Jianhua", specialty: "Financial review & tax filing specialist", desc: "Well-versed in Japanese tax law and SME financial management, providing tax planning and financial consulting for Chinese business owners in Japan. Responsible for preparing and reviewing financial documents in subsidy applications, ensuring accuracy that earns the reviewing authority's trust.", initial: "陈" },
      { title: "SME Management Consultant", name: "王 浩然", en: "Wang Haoran", specialty: "Business planning & management strategy specialist", desc: "A nationally qualified SME Management Consultant with deep expertise in management strategy and business-model analysis. Handles applications requiring high-quality business plans, such as the Business Restructuring Subsidy and Monozukuri Subsidy, strengthening competitiveness at the strategic level.", initial: "王" },
    ],
    companyInfo: [
      { label: "Company name", value: "Shisei Consulting Co., Ltd. (株式会社 志成コンサル)" },
      { label: "Founded", value: "April 2022" },
      { label: "Address", value: "Hanzomon Palace 8F, 1-8-2 Hirakawacho, Chiyoda-ku, Tokyo 102-0093" },
      { label: "Business", value: "Subsidy & grant application services, management consulting, Gyoseishoshi services, tax filing support" },
      { label: "Qualifications", value: "Registered Gyoseishoshi office / Registered Sharoshi office / Registered Zeirishi office / Registered SME Management Consultant" },
      { label: "Languages", value: "Japanese · Mandarin · Cantonese" },
      { label: "Business hours", value: "Mon–Fri 9:00–18:00 (weekends & holidays by appointment)" },
    ],
  },
  ja: {
    heroEyebrow: "私たちについて",
    heroTitle1: "言語の壁を越えて", heroTitle2: "補助金を身近なものに",
    heroDesc: "私たちは言語と文化の境界を越える専門チームです。在日華人の企業経営者お一人おひとりが、日本政府の補助金制度の恩恵を平等に受けられるよう尽力しています。",
    philoHeading1: "言語を、機会の", philoHeading2: "壁にしないために",
    philoP1: "日本政府は毎年、中小企業の革新・雇用・発展を支援するために、数千億円を超える補助金・助成金を提供しています。しかし多くの在日華人の企業経営者にとって、これらの資金は言語の壁と煩雑な申請手続きにより、手の届かないものになりがちです。",
    philoP2: "真摯に経営し、懸命に起業するすべての在日華人が、こうした政策支援を平等に受けられるべきだと私たちは信じています。志成コンサル設立の原点は、まさにこの言語と文化の壁を取り除き、補助金申請をシンプルで透明、そして本当に身近なものにすることにあります。",
    philoP3: "全工程中国語対応・不採択なら無料——これは単なるサービスの約束ではなく、在日華人コミュニティに対する私たちの責任と信頼の表れです。",
    statsCardLabel: "主要データ",
    teamHeading: "四士連携、あらゆる面で万全",
    teamSub: "行政書士・社会保険労務士・税理士・中小企業診断士。4つの国家資格を持つ専門家が学際的チームを組み、補助金申請のあらゆる工程をカバーします。",
    storyHeading: "ある痛ましい機会損失から",
    storyQuote: "長年の知り合いである華人の友人が、日本語の申請ガイドを読めなかったために、最大500万円の事業再構築補助金の申請締切を逃すのを、私は目の当たりにしました。その瞬間、これは個別の事例ではなく、在日華人の起業家全体が直面する構造的な困難なのだと気づいたのです。",
    storyAttr: "—— 創業者 李 忠良",
    storyP1: "2022年、李忠良は志を同じくする数名の専門家とともに志成コンサルを設立しました。彼らには共通の信念がありました——在日華人の企業経営者が直面しているのは能力不足ではなく、情報の非対称性と言語の壁がもたらす機会の不平等だ、と。",
    storyP2: "創業初期、チームは大阪・東京・名古屋の華人経営の企業数十社を訪ねました。多くの経営者が自社が申請条件を満たしていることすら知らず、こうした補助金が実在し申請できることも知らなかったのです。言葉が通じず情報も不足し、本来自分のものであるはずの資金を、知らぬ間に取り逃していました。",
    storyP3: "今日、志成コンサルは在日華人企業3,000社超にサービスを提供し、補助金の採択総額8.5億円超を支援してきました。一つひとつの成功の背後には、しかるべき支援を得た華人家族の起業の夢があります。言語が、いかなる在日華人にとっても発展の機会を得る障害でなくなるその日まで、私たちは歩み続けます。",
    companyHeading: "会社概要",
    ctaTitle1: "私たちとともに、", ctaTitle2: "補助金を身近なものに",
    ctaDesc: "無料の資格診断相談、専門顧問が当日中にご返答し、あらゆる政策のチャンスを逃さずお手伝いします。",
    ctaPrimary: "無料相談を申し込む", ctaSecondary: "代理店提携について",
    stats: [
      { num: "3,000+", label: "累計支援企業数" },
      { num: "¥8.5億", label: "採択支援総額" },
      { num: "92%", label: "申請成功率" },
      { num: "4種", label: "国家認定資格" },
    ],
    team: [
      { title: "行政書士", name: "佐藤 健一", en: "Kenichi Sato", specialty: "補助金申請書類作成の専門家", desc: "行政書士として10年以上の経験を持ち、各種補助金・助成金の申請書類の作成と提出を専門とします。複雑な事業計画書を正確で説得力のある日本語で表現することに長け、申請の採択率を大きく高めます。", initial: "佐藤" },
      { title: "社会保険労務士", name: "田中 裕子", en: "Yuko Tanaka", specialty: "雇用助成金・労務管理の専門家", desc: "キャリアアップ助成金、人材開発支援助成金など労務系助成金の申請に注力。労働契約の審査、就業規則の策定などの付帯サービスも提供し、コンプライアンスの枠内で企業の資金支援を最大化します。", initial: "田" },
      { title: "税理士", name: "陈 建华", en: "Chen Jianhua", specialty: "財務審査・税務申告の専門家", desc: "日本の税務法規と中小企業の財務管理に精通し、在日華人の企業経営者に税務プランニングと財務コンサルティングを提供します。補助金申請では財務資料の準備と審査を担当し、データの正確性を確保して審査機関の信頼を得ます。", initial: "陈" },
      { title: "中小企業診断士", name: "王 浩然", en: "Wang Haoran", specialty: "事業計画・経営戦略の専門家", desc: "国家資格の中小企業診断士であり、経営戦略とビジネスモデル分析に深い知見を持ちます。事業再構築補助金、ものづくり補助金など質の高い事業計画書を要する申請を担当し、戦略面から申請の競争力を高めます。", initial: "王" },
    ],
    companyInfo: [
      { label: "商号", value: "株式会社 志成コンサル" },
      { label: "設立", value: "2022年4月" },
      { label: "所在地", value: "〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階" },
      { label: "事業内容", value: "補助金・助成金申請サポート、経営コンサルティング、行政書士業務、税務申告支援" },
      { label: "専門資格", value: "行政書士事務所登録 / 社会保険労務士事務所登録 / 税理士事務所登録 / 中小企業診断士登録" },
      { label: "対応言語", value: "日本語 · 標準中国語 · 広東語" },
      { label: "営業時間", value: "月〜金 9:00〜18:00（土日祝は予約制）" },
    ],
  },
};

export default function AboutContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span style={{ color: 'var(--gold)' }}>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      {/* 公司理念 + 数据 */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="grid-cols-about">
            <div>
              <h2 className="h2 ed-h" style={{ marginBottom: 24 }}>{t.philoHeading1}<br />{t.philoHeading2}</h2>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>{t.philoP1}</p>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>{t.philoP2}</p>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9 }}>{t.philoP3}</p>
            </div>

            {/* 数据卡片 */}
            <div>
              <div style={{
                background: 'linear-gradient(180deg, #fff 0%, var(--surface-2) 100%)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: 8,
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}>
                <div style={{
                  height: 4,
                  borderRadius: '16px 16px 0 0',
                  background: 'linear-gradient(90deg, var(--brand) 0%, var(--gold) 100%)',
                  margin: '-1px -1px 0',
                }} />
                <div style={{ padding: '32px 36px 28px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>
                    {t.statsCardLabel}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                    {t.stats.map((s, i) => (
                      <div key={i}>
                        <div className="amount" style={{ fontSize: 34, lineHeight: 1, marginBottom: 8 }}>
                          {s.num}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 500 }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 四士团队 — 深 teal 色块 */}
      <section className="sec sec-dark">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 52, maxWidth: 640, margin: '0 auto 52px' }}>
            <h2 className="h2 ed-h ed-h-center serif" style={{ marginBottom: 14, color: '#fff' }}>{t.teamHeading}</h2>
            <p className="sub" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.68)' }}>
              {t.teamSub}
            </p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {t.team.map((m, i) => (
              <div key={i} className="ed-row" style={{ borderTop: '1px solid rgba(255,255,255,0.14)', padding: '28px 0' }}>
                <span className="ed-row-n" style={{ color: 'transparent', WebkitTextStroke: '1.2px var(--gold)' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span className="serif" style={{ fontSize: 19, fontWeight: 700, color: '#fff' }}>{m.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.06em' }}>{m.title}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', letterSpacing: '.02em' }}>{m.en}</span>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'rgba(255,255,255,0.85)' }}>{m.specialty}</div>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '64ch' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创业故事 */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <h2 className="h2 ed-h ed-h-center">{t.storyHeading}</h2>
          </div>
          <div className="quote-block">
            <p className="quote-text">
              {t.storyQuote}
            </p>
            <div className="quote-attr">{t.storyAttr}</div>
          </div>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>{t.storyP1}</p>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>{t.storyP2}</p>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9 }}>{t.storyP3}</p>
        </div>
      </section>

      {/* 公司概要 */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div style={{ marginBottom: 36, textAlign: 'center' }}>
            <h2 className="h2 ed-h ed-h-center">{t.companyHeading}</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="info-table">
              <tbody>
                {t.companyInfo.map((row, i) => (
                  <tr key={i}>
                    <td className="info-label">{row.label}</td>
                    <td className="info-value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
        primary={{ href: '/contact', label: t.ctaPrimary }}
        secondary={{ href: '/partner', label: t.ctaSecondary }}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
