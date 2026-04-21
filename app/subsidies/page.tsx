import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金种类",
  description: "详细介绍6种主要补助金：省力化補助金、AI导入补助金、员工转正助成金、员工培训助成金、空调省能补助、代理合作",
};

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </span>
        志成コンサル
      </Link>
      <div className="nav-links">
        <Link href="/subsidies" className="nav-link active">补助金种类</Link>
        <Link href="/service" className="nav-link">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const subsidies = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 2v4M8 11V9a4 4 0 018 0v2"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/>
      </svg>
    ),
    tag: "経済産業省",
    name: "省力化補助金",
    amount: "最高 1,500万円",
    rate: "補助率 最大50%",
    desc: "IoT・ロボット・DXシステムの導入費用を政府が最大50%補助する制度です。レジシステム、在庫管理、顧客AIなど幅広い設備が対象。在日華人の飲食店・小売店・サービス業に特に人気が高い補助金です。",
    conditions: [
      "中小企業・個人事業主（業種問わず）",
      "日本国内に事業所を有すること",
      "従業員の賃金引き上げ計画を提出",
      "補助対象：IoT機器、ロボット、DXシステム等",
      "設備購入費・導入工事費が対象",
    ],
    points: [
      "赤字企業・設立間もない企業も申請可",
      "複数台の設備をまとめて申請可能",
      "補助率最大50%、上限1,500万円",
      "成果報告後に補助金が入金",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.16z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.16z"/>
      </svg>
    ),
    tag: "経済産業省",
    name: "AI導入補助金（IT導入補助金）",
    amount: "最高 350万円",
    rate: "補助率 1/2〜2/3",
    desc: "AIマーケティングツール、CRM、クラウドサービスなどのソフトウェア導入を支援する制度です。赤字企業や新設企業でも申請可能で、従業員規模の制限がないため幅広い在日華人企業に対応しています。",
    conditions: [
      "中小企業・小規模事業者・個人事業主",
      "IT導入支援事業者（認定業者）経由で申請",
      "対象ソフト：AIツール・CRM・業務管理等",
      "クラウドサービスのサブスクも対象",
      "セキュリティ対策ツールも別枠で補助",
    ],
    points: [
      "補助率2/3（通常枠は1/2）",
      "ソフトウェア購入費+導入費が対象",
      "複数年のサブスク費用も補助対象",
      "申請はIT導入支援事業者が代行",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    tag: "厚生労働省",
    name: "キャリアアップ助成金（員工転正）",
    amount: "最高 80万円/人",
    rate: "政府直接支給",
    desc: "有期雇用（パート・アルバイト・契約社員）を正社員に転換した場合、従業員1人あたり最高80万円が支給されます。企業が立替不要で、厚生労働省から直接入金されます。複数人の転換で大きな助成が見込めます。",
    conditions: [
      "有期雇用労働者を正規雇用に転換",
      "転換後6ヶ月分の賃金支払いが必要",
      "就業規則に転換制度の規定が必要",
      "社会保険加入が必須",
      "転換前と転換後で賃金増額が必要",
    ],
    points: [
      "1人あたり最高80万円",
      "複数人の転換で累計申請可能",
      "申請企業の立替不要",
      "人材開発助成金との併用可",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    tag: "厚生労働省",
    name: "人材開発支援助成金（员工培训）",
    amount: "経費最高 75%",
    rate: "＋960円/時間の賃金補填",
    desc: "従業員にAI研修・技能訓練を受けさせた際、研修費用の最大75%と研修時間の賃金の一部（960円/時間）を政府が負担します。AI営業・マーケティング・データ分析研修が特に人気です。",
    conditions: [
      "雇用保険適用事業所であること",
      "OFF-JTまたはOJT研修が対象",
      "訓練計画書を事前に提出",
      "研修修了後に支給申請",
      "対象：AI研修、IT研修、語学研修等",
    ],
    points: [
      "研修費用の最大75%を補助",
      "賃金補填：960円/時間",
      "キャリアアップ助成金と同時申請可",
      "年間複数回の申請が可能",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5-5-5 5M17 17l-5 5-5-5"/>
        <line x1="2" y1="12" x2="22" y2="12"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/>
      </svg>
    ),
    tag: "東京都限定",
    name: "東京都空調省エネ更新補助金",
    amount: "自己負担 極少",
    rate: "東京都環境局",
    desc: "東京都内の事業者が古いエアコンを高効率省エネ型に買い替える際、補助率が非常に高く、自己負担がほぼゼロに近い場合もあります。飲食店・ゲストハウス・オフィス等が対象で、電気代の大幅削減も期待できます。",
    conditions: [
      "東京都内に事業所を有する中小企業・個人事業主",
      "既存の業務用エアコンを高効率機器に更新",
      "省エネ基準を満たした機器の購入",
      "東京都認定の施工業者による工事",
      "工事完了後に申請・精算",
    ],
    points: [
      "補助率が極めて高く自己負担が少ない",
      "電気代節約で長期的にコスト削減",
      "他の補助金との併用可能な場合あり",
      "東京都内の飲食・宿泊業に特におすすめ",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
      </svg>
    ),
    tag: "代理店プログラム",
    name: "代理合作（介绍报酬60%）",
    amount: "成功報酬の 60%",
    rate: "加盟費ゼロ",
    desc: "補助金に興味のある経営者を志成コンサルにご紹介いただくだけで、申請が成功した際の成功報酬の60%をご紹介者に還元します。加盟費・登録費は一切不要。税理士・社労士・コンサルタントの方に特に人気です。",
    conditions: [
      "紹介者として登録（無料・審査なし）",
      "補助金に関心のある経営者を紹介",
      "申請・実務はすべて志成コンサルが担当",
      "成功報酬確定後に報酬をお支払い",
      "個人・法人どちらでも登録可",
    ],
    points: [
      "成功報酬の60%がそのまま収入に",
      "加盟費・登録費ゼロ",
      "申請業務は一切不要",
      "税理士・社労士・会計士に最適",
    ],
  },
];

export default function SubsidiesPage() {
  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">补助金种类</div>
          <h1>6种主要补助金，全面覆盖</h1>
          <p>从省力化设备到AI导入，从员工转正到培训助成——精准匹配您企业的实际需求</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="subsidy-cards">
            {subsidies.map((s, i) => (
              <div key={i} className="subsidy-detail-card">
                <div className="subsidy-detail-header">
                  <div className="subsidy-detail-icon">{s.icon}</div>
                  <div className="subsidy-detail-meta">
                    <div className="subsidy-detail-tag">{s.tag}</div>
                    <div className="subsidy-detail-name">{s.name}</div>
                    <div className="subsidy-detail-amount">{s.amount}</div>
                  </div>
                </div>
                <div className="subsidy-detail-body">
                  <div>
                    <p className="subsidy-detail-desc">{s.desc}</p>
                    <div style={{ marginTop: 20 }}>
                      <div className="subsidy-detail-list">
                        <h4>申请要点</h4>
                        <ul>
                          {s.points.map((p, j) => (
                            <li key={j}><IconCheck />{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="subsidy-detail-list">
                      <h4>主要条件</h4>
                      <ul>
                        {s.conditions.map((c, j) => (
                          <li key={j}><IconCheck />{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>哪种补助金适合您？</h2>
          <p>填写3分钟问卷，我们为您精准匹配最适合的补助金组合方案</p>
          <Link href="/contact" className="btn-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            免费自测资格
          </Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">株式会社志成コンサル</div>
            <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
          </div>
          <div className="footer-contact">
            <h4>联系我们</h4>
            <div className="footer-contact-item">微信：<strong>pr2024188</strong></div>
            <div className="footer-contact-item">营业时间：周一至周六 9:00〜18:00</div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 株式会社志成コンサル. All rights reserved.</div>
      </footer>
    </main>
  );
}
