import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金种类",
  description: "详解6种主要日本政府补助金：省力化補助金、AI導入補助金、キャリアアップ助成金、小規模持続化補助金、事業再構築補助金、ものづくり補助金",
};

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <img src="/logo.png" alt="志成コンサル" style={{height:40}} />
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

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="志成コンサル" style={{height:40, filter:"brightness(10)"}} />
        </div>
        <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
      </div>
      <div className="footer-nav">
        <h4>快速导航</h4>
        <div className="footer-nav-links">
          <Link href="/subsidies" className="footer-nav-link">补助金种类</Link>
          <Link href="/service" className="footer-nav-link">服务流程</Link>
          <Link href="/blog" className="footer-nav-link">知识库</Link>
          <Link href="/contact" className="footer-nav-link">免费咨询</Link>
        </div>
      </div>
      <div className="footer-contact-col">
        <h4>联系我们</h4>
        <div className="footer-contact-row"><strong>微信：</strong>pr2024188</div>
        <div className="footer-contact-row"><strong>电话：</strong>03-6265-9756</div>
        <div className="footer-contact-row"><strong>邮箱：</strong>knakano.sekiyoshi@gmail.com</div>
        <div className="footer-contact-row" style={{flexDirection:"column",gap:4}}>
          <strong>地址：</strong>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div className="footer-qr">
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:80,height:80,borderRadius:4}} />
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 株式会社志成コンサル. All rights reserved.</span>
    </div>
  </footer>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const subsidies = [
  {
    tag: "省力化",
    name: "省力化補助金",
    amount: "最大1,500万円",
    rate: "補助率：1/2〜2/3（小規模事業者は3/4）",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    desc: "中小企業・小規模事業者の人手不足解消を目的とした補助金制度です。機械設備・ロボット・ITシステムの導入費用を最大2/3補助します。人件費の削減や生産性向上を目指す企業に最適です。製造業はもちろん、飲食・小売・サービス業など幅広い業種が対象となります。",
    conditions: [
      "中小企業・小規模事業者であること",
      "補助対象の設備・システムを導入すること",
      "生産性向上計画を策定していること",
      "賃金引上げ計画を提出していること",
    ],
    usage: [
      "製造ラインの自動化設備導入",
      "POSレジ・受発注システム導入",
      "清掃・搬送ロボットの導入",
      "自動倉庫・物流システム構築",
    ],
  },
  {
    tag: "IT導入",
    name: "AI・IT導入補助金",
    amount: "最大450万円",
    rate: "補助率：最大2/3（通常枠1/2）",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M12 3v8M8 3h8M5 21v-2M19 21v-2"/>
        <circle cx="9" cy="15" r="1" fill="currentColor"/>
        <circle cx="15" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    desc: "業務効率化・デジタル化を推進するためのITツール・ソフトウェア導入を支援します。会計ソフト・受発注システム・ECサイト構築ツールなど幅広いITツールが対象です。インボイス制度・電子帳簿保存法への対応ツールも補助対象に含まれます。",
    conditions: [
      "中小企業・小規模事業者・個人事業主",
      "IT導入支援事業者（登録済み）と連携",
      "労働生産性の向上を目指す計画",
      "セキュリティ対策基準を満たすこと",
    ],
    usage: [
      "会計・財務ソフトウェア導入",
      "顧客管理（CRM）システム導入",
      "ECサイト・ネットショップ構築",
      "AIチャットボット・自動応答システム",
    ],
  },
  {
    tag: "助成金",
    name: "キャリアアップ助成金",
    amount: "最大80万円/人",
    rate: "正社員転換：57.0万円〜80万円",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    desc: "非正規雇用労働者（パート・アルバイト・契約社員）を正規雇用に転換した際に受給できる助成金です。優秀な人材の定着促進と雇用安定を図る企業を強力にサポートします。転換1人あたり最大80万円（生産性要件充足時）が支給されます。",
    conditions: [
      "雇用保険の適用事業所であること",
      "キャリアアップ計画を作成・提出していること",
      "転換前に6ヶ月以上雇用していること",
      "転換後に正社員として6ヶ月以上雇用すること",
    ],
    usage: [
      "パート・アルバイトの正社員転換",
      "契約社員・派遣社員の直接雇用化",
      "有期雇用から無期雇用への転換",
      "処遇改善（賃金・福利厚生）",
    ],
  },
  {
    tag: "持続化",
    name: "小規模事業者持続化補助金",
    amount: "最大250万円",
    rate: "補助率：2/3（上限50〜250万円）",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    desc: "小規模事業者・個人事業主の販路開拓・生産性向上の取り組みを支援します。チラシ作成・ウェブサイト制作・展示会出展・商品開発など幅広い用途に活用可能です。インボイス特例・創業特例など各種加算制度も充実しています。",
    conditions: [
      "小規模事業者（商業・サービス業5人以下、製造業20人以下）",
      "個人事業主も申請可能",
      "商工会・商工会議所の支援を受けること",
      "持続的な経営に向けた経営計画の策定",
    ],
    usage: [
      "ホームページ・ECサイト制作",
      "チラシ・パンフレット等広告宣伝",
      "展示会・商談会への出展費用",
      "新商品開発・試作品作成費",
    ],
  },
  {
    tag: "再構築",
    name: "事業再構築補助金",
    amount: "最大7,000万円",
    rate: "補助率：1/2〜2/3（中小企業）",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="12"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    desc: "コロナ禍・経済環境変化に対応するための新事業展開・業態転換・事業転換を大規模に支援します。新商品・サービス開発、新市場参入、業態転換など大きな挑戦を後押しします。中小企業は最大7,000万円（補助率2/3）が申請可能です。",
    conditions: [
      "2020年4月以降に売上減少の実績があること",
      "事業計画を金融機関等と策定すること",
      "認定経営革新等支援機関の確認を受けること",
      "補助事業完了後3〜5年で付加価値額向上計画",
    ],
    usage: [
      "新業態・新ブランドの立ち上げ",
      "海外進出・インバウンド事業",
      "オンライン化・DX推進投資",
      "新規製品ライン・製造設備導入",
    ],
  },
  {
    tag: "ものづくり",
    name: "ものづくり補助金",
    amount: "最大4,000万円",
    rate: "補助率：1/2〜2/3（中小企業）",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    desc: "革新的サービス開発・試作品開発・生産プロセスの改善を行う中小企業を支援します。設備投資を通じて付加価値・生産性を向上させたい企業に最適です。一般型・グローバル展開型など複数の申請枠があり、企業の状況に応じた活用が可能です。",
    conditions: [
      "中小企業・小規模事業者であること",
      "革新的な製品・サービス開発の計画",
      "賃金引上げ計画の策定と提出",
      "認定支援機関のサポートを受けること",
    ],
    usage: [
      "CNC工作機械・レーザー加工機導入",
      "3Dプリンター・試作設備導入",
      "IoTシステム・センサー設備導入",
      "品質管理システム・検査装置導入",
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
          <h1>主要対応補助金・助成金 一覧</h1>
          <p>志成コンサルが対応する6種の主要補助金・助成金を詳しくご紹介します。申請要件や活用方法についてお気軽にご相談ください。</p>
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
                    <div style={{fontSize:13,color:"var(--text-3)",marginTop:4}}>{s.rate}</div>
                  </div>
                </div>
                <div className="subsidy-detail-body">
                  <div>
                    <p className="subsidy-detail-desc">{s.desc}</p>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
                    <div className="subsidy-detail-list">
                      <h4>申请条件</h4>
                      <ul>
                        {s.conditions.map((c, j) => (
                          <li key={j}>
                            <IconCheck />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="subsidy-detail-list">
                      <h4>主な活用用途</h4>
                      <ul>
                        {s.usage.map((u, j) => (
                          <li key={j}>
                            <IconCheck />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:64,padding:"56px 0",borderTop:"1px solid var(--border)"}}>
            <div style={{fontFamily:"var(--font-serif)",fontSize:24,fontWeight:700,color:"var(--navy)",marginBottom:12}}>
              どの補助金があなたに最適か？
            </div>
            <p style={{fontSize:16,color:"var(--text-2)",marginBottom:32,lineHeight:1.75}}>
              3分間の無料診断で、あなたの企業に最適な補助金をご提案します。
            </p>
            <Link href="/contact" className="btn-primary" style={{fontSize:16,padding:"14px 36px"}}>
              無料診断を開始する
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
