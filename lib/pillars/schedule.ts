import type { PillarSet } from "./types";
import { UI } from "./types";
import { SUBSIDY_SCHEDULE as DATES } from "../subsidies/status";

// 全量核验基线保留 2026-09-03；三项日程的单独复核见 DATES.verifiedAt。
// 已集中管理的日期只从 content/facts/subsidies.json 读取，避免三语及详情不同步。
const VERIFIED = "2026-09-03";
const SRC = {
  seiryoka: DATES.seiryoka.source,
  itshien: DATES["ai-it"].source,
  shinmono: "https://shinjigyou-monodukuri.smrj.go.jp/",
  jizokuka: "https://r6.jizokukahojokin.info/",
  zeroemi: DATES.aircon.source,
  career: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html",
  jinzai: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
};

// 三语共用的日期行（日期是事实，不翻译）
const HEAD = {
  zh: ["制度", "回次", "受付开始", "締切", "状态（核验日）", "备注"],
  en: ["Program", "Round", "Opens", "Deadline", "Status (as verified)", "Note"],
  ja: ["制度", "回次", "受付開始", "締切", "状況（確認日）", "備考"],
};
const ROWS = {
  zh: [
    ["中小企業省力化投資補助事業（一般型）", "第 8 回", DATES.seiryoka.opens, DATES.seiryoka.deadline, "公募中·待受付", `日程核验 ${DATES.seiryoka.verifiedAt}；日本时间`],
    ["デジタル化・AI導入補助金2026", "通常枠 第 5 次締切", DATES["ai-it"].opens, DATES["ai-it"].deadline, "受付中", `日程核验 ${DATES["ai-it"].verifiedAt}；须经 IT 導入支援事業者；日本时间`],
    ["新事業進出・ものづくり商業サービス補助金", "第 1 回", "2026-09-30", "2026-10-30 18:00 厳守", "公募开始", "两制度合并后首回；按经费区分有上限"],
    ["小規模事業者持続化補助金〈一般型 通常枠〉", "第 20 回", "2026-11-05", "2026-12-15 17:00", "受付前（公募要領第 8 版已公开）", "様式4（事業支援計画書）发行截止 12-04；须提前联系商工会"],
    ["東京都 ゼロエミ 省エネ設備導入支援事業", "令和 8 年度 第 4 回", DATES.aircon.opens, DATES.aircon.deadline, "受付前", `日程核验 ${DATES.aircon.verifiedAt}；日本时间；预算超额抽签；第 5 回 ${DATES.aircon.round5}；第 6 回 ${DATES.aircon.round6}`],
    ["キャリアアップ助成金（正社員化コース）", "—", "通年", "—", "受付中", "转正前提交キャリアアップ計画届（届出のみ）；2026-04 新设情报公表加算 20 万円"],
    ["人材開発支援助成金", "—", "通年（训练开始前 1〜6 个月提计划届）", "—", "受付中", "事業展開等リスキリング支援コース·人への投資促進コース：令和 8 年度（至 2027-03-31）为最终年度，官方尚未公布延长"],
  ],
  en: [
    ["Labor-Saving Investment Subsidy (general)", "Round 8", DATES.seiryoka.opens, DATES.seiryoka.deadline, "Call open · intake pending", `Dates checked ${DATES.seiryoka.verifiedAt}; JST`],
    ["Digitalization & AI Adoption Subsidy 2026", "Normal frame · 5th deadline", DATES["ai-it"].opens, DATES["ai-it"].deadline, "Open", `Dates checked ${DATES["ai-it"].verifiedAt}; registered IT vendor required; JST`],
    ["New Business / Monozukuri Subsidy", "Round 1", "2026-09-30", "2026-10-30 18:00", "Call open", "First round after merger; caps vary by cost category"],
    ["Small Business Sustainability Subsidy (general)", "Round 20", "2026-11-05", "2026-12-15 17:00", "Pre-intake (guidelines v8 published)", "Form 4 from Chamber by 12-04"],
    ["Tokyo Zero-Emission energy-saving grant", "FY2026 Round 4", DATES.aircon.opens, DATES.aircon.deadline, "Pre-intake", `Dates checked ${DATES.aircon.verifiedAt}; JST; lottery if oversubscribed; Round 5 ${DATES.aircon.round5}; Round 6 ${DATES.aircon.round6}`],
    ["Career-Up Grant (regularization)", "—", "Year-round", "—", "Open", "File plan before conversion; new ¥200k disclosure bonus from Apr 2026"],
    ["HR Development Grant", "—", "Year-round (plan 1–6 months before training)", "—", "Open", "Reskilling and Investment-in-People courses end FY2026 (2027-03-31) unless extended"],
  ],
  ja: [
    ["中小企業省力化投資補助事業（一般型）", "第8回", DATES.seiryoka.opens, DATES.seiryoka.deadline, "公募中・受付前", `日程確認 ${DATES.seiryoka.verifiedAt}；日本時間`],
    ["デジタル化・AI導入補助金2026", "通常枠 第5次締切", DATES["ai-it"].opens, DATES["ai-it"].deadline, "受付中", `日程確認 ${DATES["ai-it"].verifiedAt}；IT導入支援事業者経由；日本時間`],
    ["新事業進出・ものづくり商業サービス補助金", "第1回", "2026-09-30", "2026-10-30 18:00厳守", "公募開始", "統合後初回；経費区分別に上限"],
    ["小規模事業者持続化補助金〈一般型 通常枠〉", "第20回", "2026-11-05", "2026-12-15 17:00", "受付前（公募要領第8版公開）", "様式4発行締切 12-04；商工会へ早めに"],
    ["東京都 ゼロエミ 省エネ設備導入支援事業", "令和8年度 第4回", DATES.aircon.opens, DATES.aircon.deadline, "受付前", `日程確認 ${DATES.aircon.verifiedAt}；日本時間；予算超過時は抽選；第5回 ${DATES.aircon.round5}；第6回 ${DATES.aircon.round6}`],
    ["キャリアアップ助成金（正社員化コース）", "—", "通年", "—", "受付中", "転換前にキャリアアップ計画届；2026-04新設 情報公表加算20万円"],
    ["人材開発支援助成金", "—", "通年（訓練開始1〜6か月前に計画届）", "—", "受付中", "事業展開等リスキリング支援・人への投資促進コースは令和8年度が最終年度（延長未公表）"],
  ],
};

export const schedule: PillarSet = {
  zh: {
    path: "/schedule",
    metaTitle: "2026 日本补助金·助成金公募日历｜截止时间一览与倒推准备清单（每月更新）",
    metaDesc: "省力化補助金第 8 回、デジタル化・AI導入補助金第 5 次、新事業進出・ものづくり第 1 回、持続化補助金第 20 回、东京ゼロエミ第 4〜6 回的受付与締切日期，来源官方页面并标注核验日。附「离截止还有几周该做什么」倒推清单。",
    keywords: ["补助金 截止 2026", "公募 日程 2026", "省力化 補助金 第8回 締切", "持続化補助金 第20回", "IT導入補助金 締切 2026", "补助金 什么时候 申请"],
    heroEyebrow: "公募日历",
    heroTitle1: "2026 补助金·助成金",
    heroTitle2: "公募日历与截止时间",
    heroDesc: "只列志成核验过的官方日期。补助金的第一道门槛不是条件，是时间——多数人是错过締切，不是不符合要件。",
    summary: `最近一次日期复核：${DATES["ai-it"].verifiedAt}。通常枠 AI 导入补助金第 5 次截止 ${DATES["ai-it"].deadline}；省力化一般型第 8 回受付 ${DATES.seiryoka.opens} 至 ${DATES.seiryoka.deadline}；东京ゼロエミ第 4 回受付 ${DATES.aircon.opens} 至 ${DATES.aircon.deadline}，预算超额时抽签。以上时间均为日本时间。其余制度资料沿用 ${VERIFIED} 核验版本，见下表与官方来源；本次日期更新不代表金额或申请要件重新核验。`,
    quickFacts: [
      { label: "最近截止", value: `AI 导入第 5 次 · ${DATES["ai-it"].deadline}`, sub: "日本时间；需经登记的 IT 支援事业者" },
      { label: "10 月", value: `东京ゼロエミ ${DATES.aircon.deadline.slice(5, 10)} · 省力化 ${DATES.seiryoka.deadline.slice(5, 10)}`, sub: "东京抽签制；省力化审查採択制" },
      { label: "年底前", value: "持続化 第 20 回 12/15", sub: "様式4 须 12/4 前向商工会申请" },
      { label: "随时", value: "キャリアアップ · 人材開発", sub: "通年，但要在转正/训练前提计划届" },
    ],
    sections: [
      {
        id: "calendar",
        h2: "2026 年 9 月〜2027 年 1 月 公募一览",
        blocks: [
          { type: "table", caption: "全部日期来自各制度官方页面；「予定」为官方预告值，正式公告后更新", head: HEAD.zh, rows: ROWS.zh },
          { type: "note", text: `省力化・AI 导入・东京ゼロエミ日程复核日：${DATES["ai-it"].verifiedAt}；其他制度资料核验基线：${VERIFIED}。提交前请再次确认官方公告。` },
        ],
      },
      {
        id: "countdown",
        h2: "离截止还有几周，该做什么",
        blocks: [
          { type: "table", head: ["距締切", "省力化 / 新事業進出 / 持続化（公募型）", "AI導入（须 IT 支援事業者）", "东京ゼロエミ（抽签型）"], rows: [
            ["8 周以上", "办 GビズID プライム（1〜2 周）；确定投资内容与見積；决定是否委托", "选定 IT 導入支援事業者与登记工具；办 GビズID", "选定登记施工业者；确认设备在对象范围；准备省エネ诊断（若走该档）"],
            ["4〜8 周", "事业计划书初稿；財務資料（決算書/申告書）齐备；持続化向商工会预约様式4", "支援事業者侧发起申请；确认交付申请材料", "取得見積；填写交付申请书；确认工事完了期限可达成"],
            ["2〜4 周", "计划书定稿、加分项材料（賃上げ宣言等）；电子申请系统预填", "确认最低工资要件是否能拿 2/3；补全企业信息", "受付开始当日提交（抽签与提交先后无关，但要在受付期内）"],
            ["最后 1 周", "提交并保存受付完了画面；不要拖到 17:00 前最后一小时（系统拥堵）", "同左；締切 17:00 后一律不受理", "确认受付完了；等待抽签结果公示"],
          ] },
          { type: "note", text: "个人事业主与新设法人最常卡在 GビズID 与商工会様式4，两项都有独立审核周期，务必在 8 周前启动。" },
        ],
      },
      {
        id: "types",
        h2: "三种受付方式，节奏完全不同",
        blocks: [
          { type: "ul", items: [
            "公募回制（省力化、AI導入、新事業進出、持続化）：有明确締切，竞争審査。错过等下一回，通常间隔 2〜4 个月。",
            "回次抽签制（东京ゼロエミ）：受付期内提交即入抽签池，预算超额抽签，非先着顺。落选可下回再报。",
            "通年受付（キャリアアップ、人材開発支援）：随时可报，但都要求「实施前」提交计划届——转正之后、训练开始之后再来就来不及了。",
          ] },
          { type: "links", items: [{ label: "补助金 vs 助成金 区别", href: "/compare" }, { label: "个人事业主专题", href: "/for/sole-proprietor" }] },
        ],
      },
      {
        id: "deadline-risk",
        h2: "2026 年度需要特别留意的时限",
        blocks: [
          { type: "ul", items: [
            "人材開発支援助成金「事業展開等リスキリング支援コース」（年度上限 1 亿円）与「人への投資促進コース」（2,500 万円）：令和 8 年度（至 2027-03-31）为最终年度，官方尚未公布延长。计划用这两档的企业本年度内必须提出计划届。",
            "东京ゼロエミ事业实施至令和 8 年度，助成金交付至令和 9 年度；年度预算约 102.3 亿円。各回预算超额时抽签。",
            "省力化一般型自 2026 起 21 人以上企业新增「一般事業主行動計画公表」要件，需在申请前完成公表。",
          ] },
        ],
      },
    ],
    faq: [
      { q: "省力化補助金第 8 回具体哪天截止？", a: `第 8 回受付从 ${DATES.seiryoka.opens} 开始，截止为 ${DATES.seiryoka.deadline}（日本时间），已于 ${DATES.seiryoka.verifiedAt} 对照官方日程页确认。` },
      { q: "デジタル化・AI導入補助金还能报今年的吗？", a: `截至 ${DATES["ai-it"].verifiedAt}，通常枠第 5 次受付中，截止为 ${DATES["ai-it"].deadline}（日本时间）。须先对接登记的 IT 導入支援事業者；后续轮次请确认官方日程页。` },
      { q: "持続化補助金第 20 回什么时候开始？", a: "受付开始 2026-11-05，締切 12-15 17:00；商工会/商工会議所发行様式4 的截止为 12-04。公募要領第 8 版已公开，可提前准备。" },
      { q: "东京空调助成是先到先得吗？", a: `不是。预算超额时对受付期间内的申请抽签。第 4 回为 ${DATES.aircon.opens} 至 ${DATES.aircon.deadline}（日本时间）；第 5 回 ${DATES.aircon.round5}，第 6 回 ${DATES.aircon.round6}。` },
      { q: "助成金通年受付，是不是随时报都行？", a: "受付是通年，但キャリアアップ需在转正前提交計画届、人材開発支援需在训练开始前 1〜6 个月提计划届。实施后再报不受理。" },
      { q: "错过締切怎么办？", a: "公募型等下一回（通常 2〜4 个月后），利用这段时间把 GビズID、見積、计划书做扎实；抽签型下回再报；通年型随时可报但要重排实施日期。" },
      { q: "这些日期会变吗？", a: "会。事务局会因系统维护、灾害等调整（如第 7 回对熊本地震受灾事业者延长）。本页标注核验日期，重大变化当周更新，提交前请再确认官方页面。" },
      { q: "可以让志成帮我盯截止吗？", a: "可以。免费诊断后我们会按你的目标制度给出倒推时间表，并在受付开始与締切前提醒。" },
    ],
    sources: [
      { label: "中小企業省力化投資補助事業（一般型）公式 — 第 8 回スケジュール", url: SRC.seiryoka },
      { label: "デジタル化・AI導入補助金2026 — スケジュール", url: SRC.itshien },
      { label: "新事業進出・ものづくり商業サービス補助金 公式", url: SRC.shinmono },
      { label: "小規模事業者持続化補助金〈一般型〉— 第 20 回", url: SRC.jizokuka },
      { label: "東京都 ゼロエミッション化 省エネ設備導入支援事業 — 受付期間", url: SRC.zeroemi },
      { label: "キャリアアップ助成金（厚生労働省）", url: SRC.career },
      { label: "人材開発支援助成金（厚生労働省）", url: SRC.jinzai },
    ],
    verifiedDate: VERIFIED,
    related: [
      { label: "省力化補助金详解", href: "/subsidies/seiryoka" },
      { label: "AI導入補助金详解", href: "/subsidies/ai-it" },
      { label: "东京空调助成详解", href: "/subsidies/aircon" },
      { label: "补助金 vs 助成金", href: "/compare" },
      { label: "知识库最新文章", href: "/blog" },
    ],
    ctaTitle1: "想赶这一回？",
    ctaTitle2: "先做 3 分钟免费诊断",
    ctaDesc: "告诉我们目标制度与现状，1 个营业日内给出「能不能赶上、现在该办什么」的倒推表。不获批不收费。",
    breadcrumbParent: { label: "补助金种类", href: "/subsidies" },
    ui: UI.zh,
  },
  en: {
    path: "/schedule",
    metaTitle: "2026 Japan Subsidy & Grant Calendar | Deadlines and Countdown Checklist (Updated Monthly)",
    metaDesc: "Intake and deadline dates for Labor-Saving Round 8, AI Adoption 5th deadline, New Business/Monozukuri Round 1, Sustainability Round 20 and Tokyo Zero-Emission Rounds 4–6, all from official pages with verification date.",
    keywords: ["Japan subsidy deadline 2026", "hojokin schedule 2026", "IT subsidy deadline Japan"],
    heroEyebrow: "Calendar",
    heroTitle1: "2026 subsidy & grant",
    heroTitle2: "calendar and deadlines",
    heroDesc: "Only dates we have verified against official pages. The first barrier is time, not eligibility — most people miss the deadline rather than fail the requirements.",
    summary: `Latest date check: ${DATES["ai-it"].verifiedAt}. Normal frame AI Adoption 5th deadline: ${DATES["ai-it"].deadline}; Labor-Saving Round 8 applications: ${DATES.seiryoka.opens} to ${DATES.seiryoka.deadline}; Tokyo Zero-Emission Round 4: ${DATES.aircon.opens} to ${DATES.aircon.deadline}, with a lottery if oversubscribed. All times are JST. Other program information retains its ${VERIFIED} verification baseline; see the table and official sources. This date update does not re-verify amounts or eligibility.`,
    quickFacts: [
      { label: "Next deadline", value: `AI Adoption 5th · ${DATES["ai-it"].deadline} JST`, sub: "Apply via a registered IT vendor" },
      { label: "October", value: `Tokyo ${DATES.aircon.deadline.slice(5, 10)} · Labor-Saving ${DATES.seiryoka.deadline.slice(5, 10)}`, sub: "Tokyo lottery; Labor-Saving competitive review" },
      { label: "Year-end", value: "Sustainability R20 12/15", sub: "Form 4 by 12/4" },
      { label: "Anytime", value: "Career-Up · HR Development", sub: "Plan filing before implementation" },
    ],
    sections: [
      { id: "calendar", h2: "September 2026 – January 2027", blocks: [
        { type: "table", caption: "All dates from official pages; 'planned' values updated when announced", head: HEAD.en, rows: ROWS.en },
        { type: "note", text: `Labor-Saving, AI Adoption and Tokyo Zero-Emission dates checked on ${DATES["ai-it"].verifiedAt}. Other program information retains its ${VERIFIED} verification baseline. Check official announcements before submitting.` },
      ] },
      { id: "countdown", h2: "Countdown checklist", blocks: [
        { type: "table", head: ["Time left", "Round-based (Labor-Saving / New Business / Sustainability)", "AI Adoption (via IT vendor)", "Tokyo Zero-Emission (lottery)"], rows: [
          ["8+ weeks", "GビズID Prime (1–2 weeks); define investment and quotes", "Select registered vendor and tool; GビズID", "Select registered contractor; confirm eligible equipment"],
          ["4–8 weeks", "Business plan draft; financials; Sustainability: book Form 4", "Vendor initiates application", "Quotes; application form; confirm completion deadline"],
          ["2–4 weeks", "Finalize plan and bonus items; pre-fill e-application", "Confirm wage condition for 2/3", "Submit on opening day (order irrelevant for lottery)"],
          ["Final week", "Submit and save confirmation; avoid last hour", "17:00 cutoff is absolute", "Confirm receipt; await lottery"],
        ] },
      ] },
      { id: "types", h2: "Three intake types", blocks: [
        { type: "ul", items: [
          "Round-based competitive (Labor-Saving, AI Adoption, New Business, Sustainability): hard deadlines, 2–4 months between rounds.",
          "Lottery rounds (Tokyo Zero-Emission): submit within the window; lottery if oversubscribed.",
          "Year-round (Career-Up, HR Development): apply anytime but plan must be filed before implementation.",
        ] },
        { type: "links", items: [{ label: "Subsidy vs. grant", href: "/compare" }, { label: "Sole proprietors", href: "/for/sole-proprietor" }] },
      ] },
      { id: "deadline-risk", h2: "FY2026 time-limited items", blocks: [
        { type: "ul", items: [
          "HR Development Grant Reskilling (¥100M cap) and Investment-in-People (¥25M) courses end FY2026 (2027-03-31) unless extended.",
          "Tokyo Zero-Emission implementation continues through FY2026, with grant disbursement through FY2027 and a FY2026 budget of about ¥10.23B; lottery if oversubscribed.",
          "Labor-Saving: 21+ staff must publish a general employer action plan from 2026.",
        ] },
      ] },
    ],
    faq: [
      { q: "Exact Round 8 Labor-Saving deadline?", a: `Applications open ${DATES.seiryoka.opens} and close ${DATES.seiryoka.deadline} JST, checked against the official schedule on ${DATES.seiryoka.verifiedAt}.` },
      { q: "Can I still apply for AI Adoption this year?", a: `As of ${DATES["ai-it"].verifiedAt}, Normal frame round 5 is open with a deadline of ${DATES["ai-it"].deadline} JST. Apply through a registered IT vendor and check the official schedule for later rounds.` },
      { q: "When does Sustainability Round 20 open?", a: "Intake 2026-11-05 to 12-15 17:00; Form 4 by 12-04." },
      { q: "Is Tokyo AC first-come?", a: `Lottery if oversubscribed. Round 4: ${DATES.aircon.opens} to ${DATES.aircon.deadline} JST; Round 5: ${DATES.aircon.round5}; Round 6: ${DATES.aircon.round6}.` },
      { q: "Grants are year-round — apply anytime?", a: "Intake is year-round, but plans must be filed before conversion/training." },
      { q: "Missed the deadline?", a: "Wait for the next round and use the time to prepare GビズID, quotes and the plan." },
      { q: "Do dates change?", a: "Yes. Verify the official page before submitting." },
      { q: "Can Shisei track deadlines for me?", a: "Yes, after the free diagnosis we provide a reverse timeline and reminders." },
    ],
    sources: [
      { label: "Labor-Saving Investment Subsidy — Round 8 schedule", url: SRC.seiryoka },
      { label: "Digitalization & AI Adoption Subsidy 2026 — schedule", url: SRC.itshien },
      { label: "New Business / Monozukuri Subsidy", url: SRC.shinmono },
      { label: "Small Business Sustainability Subsidy — Round 20", url: SRC.jizokuka },
      { label: "Tokyo Zero-Emission energy-saving grant — intake periods", url: SRC.zeroemi },
      { label: "Career-Up Grant (MHLW)", url: SRC.career },
      { label: "HR Development Grant (MHLW)", url: SRC.jinzai },
    ],
    verifiedDate: VERIFIED,
    related: [
      { label: "Labor-Saving Subsidy", href: "/subsidies/seiryoka" },
      { label: "AI Adoption Subsidy", href: "/subsidies/ai-it" },
      { label: "Tokyo AC grant", href: "/subsidies/aircon" },
      { label: "Subsidy vs. grant", href: "/compare" },
      { label: "Insights", href: "/blog" },
    ],
    ctaTitle1: "Aiming for this round? ",
    ctaTitle2: "Start with a free diagnosis",
    ctaDesc: "Tell us the program and your status; we reply within one business day with a reverse timeline. No approval, no fee.",
    breadcrumbParent: { label: "Subsidies", href: "/subsidies" },
    ui: UI.en,
  },
  ja: {
    path: "/schedule",
    metaTitle: "2026年 補助金・助成金 公募カレンダー｜締切一覧と逆算チェックリスト（毎月更新）",
    metaDesc: "省力化補助金第8回、デジタル化・AI導入補助金第5次、新事業進出・ものづくり第1回、持続化補助金第20回、東京都ゼロエミ第4〜6回の受付・締切を公式ページに基づき確認日付きで掲載。締切までの週数別の準備事項も。",
    keywords: ["補助金 締切 2026", "公募 スケジュール 2026", "省力化補助金 第8回 締切", "持続化補助金 第20回", "IT導入補助金 締切"],
    heroEyebrow: "公募カレンダー",
    heroTitle1: "2026年 補助金・助成金",
    heroTitle2: "公募カレンダーと締切",
    heroDesc: "当社が公式ページで確認した日付のみ掲載。最初の壁は要件ではなく時間——多くの方は要件不足ではなく締切を逃しています。",
    summary: `直近日程確認：${DATES["ai-it"].verifiedAt}。AI導入補助金通常枠第5次締切は ${DATES["ai-it"].deadline}、省力化一般型第8回受付は ${DATES.seiryoka.opens} から ${DATES.seiryoka.deadline}、東京ゼロエミ第4回受付は ${DATES.aircon.opens} から ${DATES.aircon.deadline}（予算超過時は抽選）です。すべて日本時間です。その他の制度情報は ${VERIFIED} 確認版を維持しています。今回の日程更新は金額・要件の再確認を意味しません。`,
    quickFacts: [
      { label: "直近締切", value: `AI導入第5次 · ${DATES["ai-it"].deadline}`, sub: "日本時間；登録IT導入支援事業者経由" },
      { label: "10月", value: `東京ゼロエミ ${DATES.aircon.deadline.slice(5, 10)}・省力化 ${DATES.seiryoka.deadline.slice(5, 10)}`, sub: "東京は抽選；省力化は審査採択" },
      { label: "年内", value: "持続化 第20回 12/15", sub: "様式4は12/4までに商工会へ" },
      { label: "随時", value: "キャリアアップ・人材開発", sub: "通年；転換・訓練前に計画届" },
    ],
    sections: [
      { id: "calendar", h2: "2026年9月〜2027年1月 公募一覧", blocks: [
        { type: "table", caption: "全日付は公式ページに基づく。「予定」は公式予告値で正式公表後に更新", head: HEAD.ja, rows: ROWS.ja },
        { type: "note", text: `省力化・AI導入・東京ゼロエミの日程確認：${DATES["ai-it"].verifiedAt}。その他の制度情報の確認基準日は ${VERIFIED} です。提出前に公式公告をご確認ください。` },
      ] },
      { id: "countdown", h2: "締切までの週数別チェックリスト", blocks: [
        { type: "table", head: ["残り期間", "公募型（省力化・新事業進出・持続化）", "AI導入（IT支援事業者経由）", "東京ゼロエミ（抽選型）"], rows: [
          ["8週以上", "GビズIDプライム取得（1〜2週）；投資内容と見積確定", "登録支援事業者・ツール選定；GビズID", "登録施工業者選定；対象設備確認"],
          ["4〜8週", "事業計画書初稿；財務資料整備；持続化は様式4を商工会に依頼", "支援事業者が申請開始", "見積取得；交付申請書作成；工事完了期限確認"],
          ["2〜4週", "計画書確定・加点資料；電子申請の事前入力", "最低賃金要件（2/3）の確認", "受付開始日に提出（抽選のため順不同）"],
          ["最終週", "提出・受付完了画面保存；最終1時間は避ける", "17:00以降は一切受付不可", "受付確認；抽選結果待ち"],
        ] },
      ] },
      { id: "types", h2: "3つの受付方式", blocks: [
        { type: "ul", items: [
          "公募回制（省力化・AI導入・新事業進出・持続化）：明確な締切、競争審査。次回まで2〜4か月。",
          "回次抽選制（東京ゼロエミ）：受付期間内提出で抽選対象。先着ではない。",
          "通年受付（キャリアアップ・人材開発支援）：随時申請可だが実施前に計画届が必要。",
        ] },
        { type: "links", items: [{ label: "補助金と助成金の違い", href: "/compare" }, { label: "個人事業主向け", href: "/for/sole-proprietor" }] },
      ] },
      { id: "deadline-risk", h2: "令和8年度に注意すべき時限", blocks: [
        { type: "ul", items: [
          "人材開発支援助成金「事業展開等リスキリング支援コース」（上限1億円）・「人への投資促進コース」（2,500万円）は令和8年度（2027-03-31）が最終年度、延長未公表。",
          "東京ゼロエミの事業実施は令和8年度まで、助成金交付は令和9年度まで。令和8年度予算約102.3億円、予算超過時は抽選。",
          "省力化一般型は2026年から21人以上に一般事業主行動計画の公表要件。",
        ] },
      ] },
    ],
    faq: [
      { q: "省力化補助金第8回の締切日は？", a: `第8回受付は ${DATES.seiryoka.opens} から、締切は ${DATES.seiryoka.deadline}（日本時間）です。${DATES.seiryoka.verifiedAt} に公式日程で確認しました。` },
      { q: "AI導入補助金は今年まだ申請できますか？", a: `${DATES["ai-it"].verifiedAt} 確認時点で通常枠第5次は受付中、締切は ${DATES["ai-it"].deadline}（日本時間）です。登録IT導入支援事業者経由で申請し、以降の募集回は公式日程をご確認ください。` },
      { q: "持続化補助金第20回はいつから？", a: "受付 2026-11-05〜12-15 17:00。様式4の発行締切は12-04。" },
      { q: "東京の空調助成は先着ですか？", a: `予算超過時は受付期間内の申請を対象に抽選します。第4回は ${DATES.aircon.opens}〜${DATES.aircon.deadline}（日本時間）、第5回 ${DATES.aircon.round5}、第6回 ${DATES.aircon.round6} です。` },
      { q: "助成金は通年ならいつでも？", a: "受付は通年ですが、転換・訓練開始前に計画届が必要です。" },
      { q: "締切を逃したら？", a: "公募型は次回（2〜4か月後）へ。GビズID・見積・計画書の準備期間に充ててください。" },
      { q: "日付は変わりますか？", a: "変わることがあります。提出前に公式ページをご確認ください。" },
      { q: "締切管理を依頼できますか？", a: "可能です。無料診断後に逆算スケジュールとリマインドをご提供します。" },
    ],
    sources: [
      { label: "中小企業省力化投資補助事業（一般型）— 第8回スケジュール", url: SRC.seiryoka },
      { label: "デジタル化・AI導入補助金2026 — スケジュール", url: SRC.itshien },
      { label: "新事業進出・ものづくり商業サービス補助金", url: SRC.shinmono },
      { label: "小規模事業者持続化補助金〈一般型〉— 第20回", url: SRC.jizokuka },
      { label: "東京都 ゼロエミッション化 省エネ設備導入支援事業 — 受付期間", url: SRC.zeroemi },
      { label: "キャリアアップ助成金（厚生労働省）", url: SRC.career },
      { label: "人材開発支援助成金（厚生労働省）", url: SRC.jinzai },
    ],
    verifiedDate: VERIFIED,
    related: [
      { label: "省力化補助金", href: "/subsidies/seiryoka" },
      { label: "AI導入補助金", href: "/subsidies/ai-it" },
      { label: "東京 空調助成", href: "/subsidies/aircon" },
      { label: "補助金と助成金の違い", href: "/compare" },
      { label: "お役立ち情報", href: "/blog" },
    ],
    ctaTitle1: "この回を狙うなら ",
    ctaTitle2: "まず3分の無料診断",
    ctaDesc: "目標制度と現状をお知らせください。1営業日以内に「間に合うか・今やること」の逆算表をご回答。不採択なら費用はいただきません。",
    breadcrumbParent: { label: "補助金の種類", href: "/subsidies" },
    ui: UI.ja,
  },
};
