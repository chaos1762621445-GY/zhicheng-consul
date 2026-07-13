#!/usr/bin/env node
/**
 * 自动生成补助金知识库文章
 * 调用 Claude API，抓取最新政策关键词，生成中文SEO文章
 * 用法: node scripts/generate-post.mjs [--topic "主题"]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY) {
  console.error("ERROR: ANTHROPIC_API_KEY 环境变量未设置");
  process.exit(1);
}

// 预设主题池：每个主题唯一，覆盖不同长尾关键词，避免关键词自相残杀。
// 选题以"在日华人真实会搜的中文句子"为准，不与已有标题撞车。
const TOPIC_POOL = [
  // ── 各补助金制度深度解读 ──
  { title: "省力化补助金完整指南：在日华人企业如何申请最高1500万円", keywords: ["省力化補助金", "在日华人补助金", "日本补助金申请"] },
  { title: "AI导入补助金2025：在日华人企业导入AI工具最高获补350万円", keywords: ["AI導入補助金", "IT导入补助金", "在日华人AI补助"] },
  { title: "员工转正助成金：将兼职转为正社员每人最高获80万円", keywords: ["キャリアアップ助成金", "在日华人员工转正", "正社員化補助"] },
  { title: "员工培训助成金：AI研修费最高75%由政府承担，在日华人企业必看", keywords: ["人材開発支援助成金", "在日华人培训补贴", "AI研修補助"] },
  { title: "东京都空调省能更新补助：换空调几乎不花钱的秘密", keywords: ["東京都省エネ補助", "空调以旧换新", "在日华人东京补助"] },
  { title: "持续化补助金（小规模事业者持续化补助金）在日华人小店申请攻略", keywords: ["持续化补助金", "小規模事業者持続化補助金", "在日华人小店补助"] },
  { title: "事业再构筑补助金：在日华人企业转型升级最高补6000万円", keywords: ["事业再构筑补助金", "事業再構築補助金", "在日华人企业转型"] },
  { title: "制造业补助金（ものづくり补助金）：在日华人工厂设备投资攻略", keywords: ["ものづくり補助金", "制造业补助金", "在日华人工厂"] },
  { title: "业务改善助成金：上调最低时薪也能拿补贴，在日华人企业必看", keywords: ["業務改善助成金", "最低工资补贴", "在日华人雇用助成"] },
  { title: "雇用调整助成金：员工停工期间工资由政府补贴", keywords: ["雇用調整助成金", "在日华人雇用补贴", "停工补助"] },
  // ── 行业 × 补助金（长尾人群词）──
  { title: "在日华人餐饮店怎么拿补助金？省力化+转正双管齐下攻略", keywords: ["在日华人餐饮补助金", "餐饮店省力化", "日本补助金"] },
  { title: "在日华人开小卖铺·零售店能拿哪些补助金？", keywords: ["在日华人零售补助", "小売店补助金", "日本补助金"] },
  { title: "美容院·美容沙龙如何申请日本政府补助金？全行业适用指南", keywords: ["美容院补助金", "在日华人美容业", "日本补助金申请"] },
  { title: "在日华人民宿·旅馆业能申请哪些补助金？", keywords: ["在日华人民宿补助", "旅馆业补助金", "宿泊业助成金"] },
  { title: "在日华人按摩·整体院补助金申请指南", keywords: ["按摩院补助金", "整体院助成金", "在日华人理疗"] },
  { title: "在日华人IT·软件公司能拿哪些补助金？", keywords: ["IT企业补助金", "在日华人软件公司", "数字化补助"] },
  { title: "在日华人贸易公司·物流业补助金申请攻略", keywords: ["贸易公司补助金", "物流业助成金", "在日华人贸易"] },
  { title: "在日华人建筑·装修公司补助金申请全解析", keywords: ["建筑业补助金", "在日华人装修公司", "建設業助成金"] },
  { title: "在日华人教育·培训机构能申请哪些补助金？", keywords: ["教育机构补助金", "在日华人培训学校", "塾补助金"] },
  { title: "在日华人不动产中介补助金申请指南", keywords: ["不动产补助金", "在日华人不动产", "宅建業助成金"] },
  // ── 资格 / 流程 / 实操（高意图词）──
  { title: "个人事业主在日本也能申请补助金吗？详解申请资格", keywords: ["个人事业主补助金", "在日华人个体经营", "日本補助金"] },
  { title: "日本补助金申请最常见的5个失败原因（附规避方法）", keywords: ["日本补助金失败", "补助金申请技巧", "在日华人补助金"] },
  { title: "转正+培训双补贴：一人最多获超100万円政府支持的实操方案", keywords: ["キャリアアップ助成金", "人材开发支援助成金", "补助金组合申请"] },
  { title: "GビズID注册全流程：申请日本补助金的第一步", keywords: ["GビズID注册", "日本补助金前期准备", "在日华人补助申请"] },
  { title: "在日华人企业主必看：2025年日本补助金政策全面盘点", keywords: ["2025年日本补助金", "在日华人企业补助", "补助金最新政策"] },
  { title: "省力化补助金vs AI导入补助金：哪个更适合你？", keywords: ["省力化补助金比较", "AI导入补助金", "在日华人选择补助金"] },
  { title: "补助金申请需要准备哪些材料？在日华人企业必备清单", keywords: ["补助金申请材料", "在日华人补助清单", "申请书类准备"] },
  { title: "补助金采择后多久能拿到钱？资金流程时间线详解", keywords: ["补助金入金时间", "采择后流程", "补助金支付"] },
  { title: "补助金和助成金有什么区别？在日华人企业主一文搞懂", keywords: ["补助金助成金区别", "在日华人补助", "助成金是什么"] },
  { title: "刚成立的公司能申请补助金吗？创业初期补助金指南", keywords: ["创业补助金", "新公司补助金", "在日华人创业"] },
  { title: "认定支援机关是什么？为什么申请补助金需要它", keywords: ["认定经营革新等支援机关", "认定支援机关", "补助金支援"] },
  { title: "补助金申请被驳回怎么办？再申请与异议流程", keywords: ["补助金驳回", "补助金再申请", "不采择对策"] },
  { title: "补助金实绩报告怎么写？采择后必做的关键一步", keywords: ["补助金实绩报告", "实施报告", "采择后手续"] },
  { title: "外国人经营者申请日本补助金有哪些注意事项？", keywords: ["外国人补助金", "在留资格补助金", "在日华人经营者"] },
  { title: "补助金是先垫付还是后报销？资金压力如何应对", keywords: ["补助金垫付", "后払い", "补助金资金周转"] },
  // ── 时效 / 政策类 ──
  { title: "2026年日本补助金日程表：各制度募集时间一览", keywords: ["2026补助金日程", "募集期间", "补助金截止时间"] },
  { title: "中小企业·小规模事业者的定义：你符合补助金对象吗？", keywords: ["中小企业定义", "小规模事业者", "补助金对象"] },
  { title: "数字化转型补助金：在日华人企业上系统·建官网也能补", keywords: ["数字化补助金", "DX补助", "在日华人官网补助"] },
  { title: "省力化补助金（一般型·目录型）区别与选择指南", keywords: ["省力化补助金类型", "目录型省力化", "一般型省力化"] },
  { title: "补助金代办费用怎么收？成功报酬制是什么意思", keywords: ["补助金代办费用", "成功报酬", "补助金顾问费"] },
  // ── 地区别补助金（都道府县长尾词）──
  { title: "大阪府·大阪市补助金盘点：在日华人企业能申请哪些地方补助", keywords: ["大阪补助金", "大阪府助成金", "在日华人大阪补助"] },
  { title: "神奈川县·横滨市补助金指南：在日华人企业主必看", keywords: ["神奈川补助金", "横滨市助成金", "在日华人神奈川"] },
  { title: "埼玉县·千叶县补助金一览：首都圈在日华人企业申请攻略", keywords: ["埼玉补助金", "千叶补助金", "在日华人首都圈补助"] },
  { title: "名古屋·爱知县补助金申请指南：中部地区在日华人企业必看", keywords: ["名古屋补助金", "爱知县助成金", "在日华人名古屋"] },
  { title: "福冈·九州地区补助金盘点：在日华人企业能拿哪些地方补助", keywords: ["福冈补助金", "九州助成金", "在日华人福冈"] },
  { title: "东京23区各区独立补助金：你所在区有哪些专属补助？", keywords: ["东京23区补助金", "区役所补助", "在日华人东京区补助"] },
  // ── 更多行业 × 补助金 ──
  { title: "在日华人清扫·保洁公司能申请哪些补助金？", keywords: ["清扫业补助金", "保洁公司助成金", "在日华人清扫业"] },
  { title: "在日华人介护·养老服务业补助金申请全解析", keywords: ["介护补助金", "介護事業助成金", "在日华人介护业"] },
  { title: "在日华人面包店·甜品店补助金申请指南", keywords: ["面包店补助金", "烘焙店助成金", "在日华人甜品店"] },
  { title: "在日华人网店·EC电商能申请哪些补助金？", keywords: ["EC电商补助金", "网店助成金", "在日华人跨境电商"] },
  { title: "在日华人汽车修理·车行补助金申请攻略", keywords: ["汽车修理补助金", "整备工厂助成金", "在日华人车行"] },
  { title: "在日华人诊所·牙科·中医馆补助金申请指南", keywords: ["诊所补助金", "齿科助成金", "在日华人医疗机构"] },
  // ── 更多助成金制度 ──
  { title: "两立支援等助成金：员工育儿·护理休假期间企业获补贴", keywords: ["両立支援等助成金", "育儿假补贴", "在日华人雇用助成"] },
  { title: "特定求职者雇用开发助成金：雇用特定人群最高获240万円", keywords: ["特定求職者雇用開発助成金", "雇用补助金", "在日华人招聘补贴"] },
  { title: "试用雇用助成金（トライアル雇用助成金）：试用期也能拿补贴", keywords: ["トライアル雇用助成金", "试用期补贴", "在日华人雇用"] },
  { title: "65岁超雇用推进助成金：延长退休年龄企业获政府支持", keywords: ["65歳超雇用推進助成金", "高龄者雇用补贴", "在日华人企业"] },
  { title: "IT导入补助金2025最新版：在日华人企业上系统怎么申请", keywords: ["IT導入補助金2025", "IT导入补助金", "在日华人数字化补助"] },
  // ── 税务 / 会计 / 实操进阶 ──
  { title: "补助金要交税吗？在日华人企业主必懂的税务处理", keywords: ["补助金税金", "补助金课税", "在日华人补助金税务"] },
  { title: "补助金的会计处理怎么做？压缩记帐法一文讲清", keywords: ["补助金会计处理", "圧縮記帳", "补助金记帐"] },
  { title: "インボイス制度对在日华人企业的影响与应对补助", keywords: ["インボイス制度", "发票制度补助", "在日华人インボイス"] },
  { title: "电子帐簿保存法：在日华人企业如何合规又能拿补助", keywords: ["電子帳簿保存法", "电子账簿补助", "在日华人合规"] },
  { title: "日元贬值下在日华人企业如何用补助金对冲成本上涨", keywords: ["円安対策补助金", "成本上涨补助", "在日华人円安"] },
  { title: "事业承继·继承时能申请哪些补助金？在日华人二代经营者必看", keywords: ["事業承継補助金", "事业承继补助金", "在日华人二代经营"] },
  { title: "补助金申请事业计划书怎么写？采择率翻倍的写作要点", keywords: ["事业计划书", "補助金事業計画書", "补助金采择率"] },
  { title: "补助金对象经费包括哪些？哪些花费不能报销一次讲清", keywords: ["补助对象经费", "補助対象経費", "补助金报销范围"] },
  { title: "补助金申请后被要求现场检查怎么办？立入检查应对指南", keywords: ["补助金现场检查", "立入検査", "补助金检查应对"] },
  // ===== 2026-07 扩池：签证/身份 × 补助金交叉长尾 =====
  { title: "经营管理签证持有者能申请日本补助金吗？一文讲清资格问题", keywords: ["经营管理签证补助金", "経営管理ビザ", "在日华人签证补助"] },
  { title: "刚成立的新公司能申请补助金吗？创业初期可用补助盘点", keywords: ["新公司补助金", "创业补助金", "在日华人创业"] },
  { title: "个人事业主（个体户）能申请哪些日本补助金？", keywords: ["个人事业主补助金", "個人事業主助成金", "在日华人个体户"] },
  { title: "没有日本员工也能申请补助金吗？雇用要件全解析", keywords: ["补助金雇用要件", "无员工补助金", "在日华人小微企业"] },
  { title: "公司有赤字还能申请补助金吗？财务要件一次说清", keywords: ["赤字企业补助金", "补助金财务要件", "在日华人企业赤字"] },
  // ===== 对比/决策类长尾 =====
  { title: "补助金和助成金有什么区别？在日华人企业主最容易混淆的概念", keywords: ["补助金助成金区别", "補助金と助成金の違い", "日本政府补贴"] },
  { title: "补助金和融资贷款怎么选？政策性资金组合使用攻略", keywords: ["补助金融资", "日本政策金融公库", "在日华人企业融资"] },
  { title: "自己申请补助金 vs 找代办：费用、采择率、时间全对比", keywords: ["补助金自己申请", "补助金代办对比", "补助金采择率"] },
  { title: "找税理士还是补助金顾问？申请补助金该找谁", keywords: ["税理士补助金", "补助金顾问", "认定支援机关"] },
  { title: "2026年在日华人企业最值得申请的补助金TOP5", keywords: ["2026补助金", "补助金推荐", "在日华人企业补助"] },
  // ===== 失败/风险/避坑类 =====
  { title: "补助金申请最常见的10个失败原因，你中了几个？", keywords: ["补助金失败原因", "补助金不采择", "补助金避坑"] },
  { title: "拿了补助金之后有哪些义务？事业化状况报告一文讲清", keywords: ["补助金事后义务", "事業化状況報告", "补助金报告义务"] },
  { title: "补助金会被要求退还吗？返还风险与合规红线", keywords: ["补助金返还", "补助金退还风险", "补助金合规"] },
  { title: "补助金申请找黑中介被骗怎么办？识别不良代办的5个信号", keywords: ["补助金骗局", "补助金黑中介", "补助金代办选择"] },
  { title: "交付申请和实绩报告怎么做？采择后最容易踩的坑", keywords: ["交付申请", "実績報告", "补助金采择后流程"] },
  // ===== 行业扩展 =====
  { title: "在日华人不动产·房产中介公司能申请哪些补助金？", keywords: ["不动产补助金", "房产中介助成金", "在日华人不动产"] },
  { title: "在日华人旅行社·观光业补助金申请指南", keywords: ["旅行社补助金", "观光业助成金", "在日华人旅游业"] },
  { title: "在日华人人材派遣·职业介绍公司补助金攻略", keywords: ["人材派遣补助金", "职业介绍助成金", "在日华人人材公司"] },
  { title: "在日华人酒吧·居酒屋·卡拉OK店能拿哪些补助金？", keywords: ["居酒屋补助金", "夜间餐饮助成金", "在日华人酒吧"] },
  { title: "在日华人食品加工·食品贸易企业补助金申请指南", keywords: ["食品加工补助金", "食品贸易助成金", "在日华人食品业"] },
  // ===== 实操/工具类 =====
  { title: "GビズID是什么？申请补助金前必办的电子账号攻略", keywords: ["GビズID", "gBizID申请", "补助金电子申请"] },
  { title: "Jグランツ电子申请系统使用教程：在日华人企业主图文指南", keywords: ["Jグランツ", "jGrants申请", "补助金在线申请"] },
  { title: "补助金申请需要的决算书·纳税证明怎么准备？", keywords: ["补助金决算书", "纳税证明", "补助金申请材料"] },
  { title: "小规模企业共济和倒产防止共济：补助金之外的节税神器", keywords: ["小規模企業共済", "経営セーフティ共済", "在日华人节税"] },
];

// 读取所有已有文章的 frontmatter title（用于按标题去重）
async function getExistingTitles() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
    return [];
  }
  const titles = [];
  for (const f of fs.readdirSync(POSTS_DIR).filter((x) => x.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const m = raw.match(/^---\s*\n([\s\S]*?)\n---/);
    const tm = m && m[1].match(/^title:\s*"?(.*?)"?\s*$/m);
    if (tm) titles.push(tm[1].trim());
  }
  return titles;
}

async function generateArticle(topic) {
  const prompt = `你是一个专业的日本补助金顾问，同时也是SEO内容专家。
请为以下主题写一篇面向在日华人企业主的中文知识库文章。

主题：${topic.title}
目标关键词：${topic.keywords.join("、")}

要求：
1. 字数2500-3000字（中文字符，内容要深度、具体、可操作，避免空话套话）
2. 结构清晰，用H2/H3分级标题，至少5个H2大节
3. 必须包含「常见问题解答（FAQ）」板块，至少5个常见问题，每个问题用「### Q1：问题内容」格式，答案用「**A：**」开头，答案要详实（每个不少于80字）
4. 语言亲切专业，适合华人企业主阅读，多用具体数字、金额、流程步骤、真实场景举例
5. 自然融入目标关键词，不要堆砌
6. 结尾引导读者免费咨询

只输出文章正文的Markdown格式，不要包含frontmatter。`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`API错误: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

function slugify(_title) {
  // Use ASCII-only slug to avoid URL encoding issues on Vercel
  return "post-" + Date.now();
}

async function main() {
  const existingTitles = await getExistingTitles();
  console.log(`现有文章数: ${existingTitles.length}`);

  // 按标题精确去重：只挑标题没用过的主题
  const available = TOPIC_POOL.filter((t) => !existingTitles.includes(t.title));

  if (available.length === 0) {
    console.log("⚠️ 所有预设主题都已生成，请扩充 TOPIC_POOL 后再运行。本次不生成，避免重复内容。");
    process.exit(0);
  }

  const topic = available[Math.floor(Math.random() * available.length)];
  console.log(`可用主题数: ${available.length}，本次生成: ${topic.title}`);

  const content = await generateArticle(topic);
  const slug = slugify(topic.title);
  const date = new Date().toISOString().split("T")[0];

  const excerpt = content
    .replace(/#{1,3} .+\n/g, "")
    .replace(/\*\*/g, "")
    .trim()
    .split("\n")
    .find((l) => l.length > 20) || topic.title;

  // YAML 双引号字段防断：把内嵌的英文/弯双引号统一转中文引号「」，避免提前截断字符串
  const yamlSafe = (s) =>
    String(s)
      .replace(/[""]/g, (m, i, str) => {
        // 成对弯引号 → 「」；落单的也归一为「
        return m === "\u201D" ? "\u300D" : "\u300C";
      })
      .replace(/"([^"]*)"/g, "\u300C$1\u300D") // 成对英文双引号 → 「」
      .replace(/"/g, "\u300C"); // 残留落单英文双引号 → 「

  const frontmatter = `---
title: "${yamlSafe(topic.title)}"
date: "${date}"
excerpt: "${yamlSafe(excerpt.substring(0, 120))}..."
keywords: [${topic.keywords.map((k) => `"${yamlSafe(k)}"`).join(", ")}]
---

`;

  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + content, "utf-8");
  console.log(`✅ 文章已保存: ${filePath}`);
  console.log(`标题: ${topic.title}`);
  console.log(`日期: ${date}`);
}

main().catch((e) => {
  console.error("生成失败:", e.message);
  process.exit(1);
});
