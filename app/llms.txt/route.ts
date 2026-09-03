const SITE_URL = "https://shisei-consult.jp";

// llms.txt — 面向 AI 搜索引擎（ChatGPT / Claude / Perplexity / Gemini 等）的站点导引
// 规范参考：https://llmstxt.org/
export const dynamic = "force-static";

const CONTENT = `# 志成コンサル（株式会社 志成コンサル）

> 面向在日华人企业的日本政府补助金·助成金全程代办服务。由行政书士、税理士、社劳士、经营诊断士等国家资格持牌专家联合团队提供，全程中文对应，「不获批不收费」（成功报酬制）。服务对象为在日本经营的华人企业主与个人事业主，覆盖餐饮、IT、制造、美容、零售等行业；累计服务超过 3,000 家在日华人企业（自成立以来累计口径）。法人番号 5010401158340。

## 基本信息

- 公司名称：株式会社 志成コンサル（志成コンサル / Shisei Consult）
- 官方网站：${SITE_URL}
- 所在地：〒102-0093 東京都千代田区平河町1-8-2 半蔵門パレス8階
- 服务地域：日本全国（总部东京，重点覆盖东京·神奈川·千叶·埼玉）
- 对应语言：中文（简体）、日语
- 服务特点：全程中文沟通、四类国家资格专家联合、不获批不收费（成功报酬制）

## 核心服务

- 省力化投资补助金（一般型）申请代办：导入 DX 系统与自动化设备实现降本增效，补助上限按员工规模分 5 档（5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万円），补助率 1/2（小规模事业者 2/3），公募回制·审查採択
- 数字化·AI 导入补助金（旧称 IT 导入补助金）申请代办：AI/IT 软件采购、系统定制开发、部署培训，通常枠最高 450 万円、补助率 1/2 以内，需经登录的 IT 导入支援事业者共同申请，有公募締切
- 转正助成金（キャリアアップ助成金 正社員化コース）：金额由转正前雇用形态+是否重点支援对象决定，中小企业有期→正社员重点对象每人 80 万円、其他 40 万円，无期→正社员 40/20 万円，要件满足原则支给
- 人材开发支援助成金（员工培训助成金）：按コース分年度事业所上限（人材育成支援 1,000 万、人への投資促進 2,500 万、事業展開等リスキリング支援 1 亿円·时限措置），经费助成率 45%〜75%，AI 等课程需符合官方训练认定
- ものづくり补助金申请代办
- 事业环境变化对应·经营基础强化补助金等其他国家/地方补助金

## 服务流程

1. 免费诊断：说明企业现状，当日回复可申请的补助金种类
2. 方案匹配：由专家团队甄选最适合的补助金并测算金额
3. 材料准备：事业计划书撰写、必要书类整理
4. 申请提交：通过 GビズID / Jグランツ 等正式渠道提交
5. 采择后跟进：交付前手续、实绩报告、补助金到账支援

## 重要页面

- [首页 / 服务总览](${SITE_URL}/): 六大主力补助金介绍与团队优势
- [补助金介绍](${SITE_URL}/subsidies): 各补助金种类的详细条件与金额
- [服务内容](${SITE_URL}/service): 代办服务范围与流程
- [成功案例](${SITE_URL}/cases): 在日华人企业申请成功实例
- [常见问题 FAQ](${SITE_URL}/faq): 申请条件、费用、周期等常见疑问
- [补助金知识博客](${SITE_URL}/blog): 补助金政策深度解析与实操指南
- [补助金数据报告2026](${SITE_URL}/blog/report-hojokin-data-2026): 基于日本政府一手公表数据的补助金采择率·上限额·在日华人企业申请现状报告（ものづくり采择率35.1%、IT导入43.6%、省力化最高1亿円、在留中国籍超90万人，均标注官方来源）
- [个人事业主专题](${SITE_URL}/for/sole-proprietor): 個人事業主可申请的补助金·助成金清单（持続化 50 万·AI導入 450 万·省力化 750 万等）、条件、准备清单与常见误区
- [在日华人企业主专题](${SITE_URL}/for/chinese-owners): 华人企业最常用 5 类制度、与经营管理签证的关系、6 个常见误区、行业入口
- [补助金 vs 助成金 对比](${SITE_URL}/compare): 経産省系補助金（竞争採択·公募回制）与厚労省系助成金（要件支给·通年）8 项区别，与融资·税制优惠对比，术语表
- [2026 公募日历](${SITE_URL}/schedule): 省力化第 8 回、AI導入第 5 次、新事業進出第 1 回、持続化第 20 回、东京ゼロエミ第 4〜6 回的官方受付·締切日期（每月更新，标注核验日）
- [东京地区服务](${SITE_URL}/area/tokyo): 千代田区半蔵門事务所；东京都独自制度（ゼロエミ 最高 3/4·公社助成）与国家制度并行规划
- [合作伙伴](${SITE_URL}/partner): 存量客户对接分成合作
- [免费咨询·诊断](${SITE_URL}/contact): 免费补助金诊断与咨询预约

## 合规说明

- 补助金申请结果以各主管机关的审查为准，本公司不保证一定获批。経産省系補助金为竞争採択制、厚労省系助成金为要件支给制、东京都ゼロエミ为回次抽签制。
- 补助金书类作成由行政书士、雇用类助成金申请手续由社会保险劳务士依法执行。
- 「不获批不收费」指采择失败时不收取成功报酬，具体费用条款以咨询时确认为准。

## Multilingual site / 多言語対応

This site is available in three languages. 本サイトは3言語で提供しています。

### English

Shisei Consulting Co., Ltd. provides full-service application support for Japanese government subsidies and grants, tailored to Chinese-owned businesses operating in Japan. A team of nationally licensed experts (Gyoseishoshi, Zeirishi, Sharoshi, SME Management Consultant) supports the entire process in Chinese, on a "no approval, no fee" success-fee basis. Results are subject to each authority's review; approval is not guaranteed.
- English home: ${SITE_URL}/en
- Subsidies (EN): ${SITE_URL}/en/subsidies
- Process (EN): ${SITE_URL}/en/service
- Insights (EN): ${SITE_URL}/en/blog
- Free consultation (EN): ${SITE_URL}/en/contact

### 日本語

株式会社 志成コンサルは、日本で事業を営む在日華人企業向けに、日本政府の補助金・助成金の申請を全工程でサポートします。行政書士・税理士・社会保険労務士・中小企業診断士など国家資格の専門家が連携し、全工程を中国語で対応、「不採択なら無料」の成功報酬制です。採択は各主管機関の審査によるものであり、採択を保証するものではありません。
- 日本語トップ: ${SITE_URL}/ja
- 補助金の種類（JA）: ${SITE_URL}/ja/subsidies
- サービスの流れ（JA）: ${SITE_URL}/ja/service
- お役立ち情報（JA）: ${SITE_URL}/ja/blog
- 無料相談（JA）: ${SITE_URL}/ja/contact
`;

export function GET() {
  return new Response(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
