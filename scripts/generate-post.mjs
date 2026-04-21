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

// 预设主题池，每次随机选一个没写过的
const TOPIC_POOL = [
  { title: "省力化补助金完整指南：在日华人企业如何申请最高1500万円", keywords: ["省力化補助金", "在日华人补助金", "日本补助金申请"] },
  { title: "AI导入补助金2025：在日华人企业导入AI工具最高获补350万円", keywords: ["AI導入補助金", "IT导入补助金", "在日华人AI补助"] },
  { title: "员工转正助成金：将兼职转为正社员每人最高获80万円", keywords: ["キャリアアップ助成金", "在日华人员工转正", "正社員化補助"] },
  { title: "员工培训助成金：AI研修费最高75%由政府承担，在日华人企业必看", keywords: ["人材開発支援助成金", "在日华人培训补贴", "AI研修補助"] },
  { title: "东京都空调省能更新补助：换空调几乎不花钱的秘密", keywords: ["東京都省エネ補助", "空调以旧换新", "在日华人东京补助"] },
  { title: "在日华人餐饮店怎么拿补助金？省力化+转正双管齐下攻略", keywords: ["在日华人餐饮补助金", "餐饮店省力化", "日本补助金"] },
  { title: "日本补助金申请最常见的5个失败原因（附规避方法）", keywords: ["日本补助金失败", "补助金申请技巧", "在日华人补助金"] },
  { title: "个人事业主在日本也能申请补助金吗？详解申请资格", keywords: ["个人事业主补助金", "在日华人个体经营", "日本補助金"] },
  { title: "转正+培训双补贴：一人最多获超100万円政府支持的实操方案", keywords: ["キャリアアップ助成金", "人材开发支援助成金", "补助金组合申请"] },
  { title: "美容院·美容沙龙如何申请日本政府补助金？全行业适用指南", keywords: ["美容院补助金", "在日华人美容业", "日本补助金申请"] },
  { title: "在日华人企业主必看：2025年日本补助金政策全面盘点", keywords: ["2025年日本补助金", "在日华人企业补助", "补助金最新政策"] },
  { title: "GビズID注册全流程：申请日本补助金的第一步", keywords: ["GビズID注册", "日本补助金前期准备", "在日华人补助申请"] },
  { title: "省力化补助金vs AI导入补助金：哪个更适合你？", keywords: ["省力化补助金比较", "AI导入补助金", "在日华人选择补助金"] },
  { title: "在日华人开小卖铺·零售店能拿哪些补助金？", keywords: ["在日华人零售补助", "小売店补助金", "日本补助金"] },
];

async function getExistingTopics() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
    return [];
  }
  return fs.readdirSync(POSTS_DIR).map((f) => f.replace(/\.md$/, ""));
}

async function generateArticle(topic) {
  const prompt = `你是一个专业的日本补助金顾问，同时也是SEO内容专家。
请为以下主题写一篇面向在日华人企业主的中文知识库文章。

主题：${topic.title}
目标关键词：${topic.keywords.join("、")}

要求：
1. 字数1500-2000字
2. 结构清晰，用H2/H3分级标题
3. 包含FAQ板块（至少3个常见问题）
4. 语言亲切专业，适合华人企业主阅读
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
      max_tokens: 3000,
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
  const existing = await getExistingTopics();
  console.log(`现有文章数: ${existing.length}`);

  // 找一个还没写过的主题
  const available = TOPIC_POOL.filter(
    (t) => !existing.some((e) => e.includes(t.keywords[0].replace(/\s/g, "")))
  );

  if (available.length === 0) {
    console.log("所有预设主题已生成，从头开始循环");
  }

  const topic = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : TOPIC_POOL[Math.floor(Math.random() * TOPIC_POOL.length)];

  console.log(`生成文章: ${topic.title}`);

  const content = await generateArticle(topic);
  const slug = slugify(topic.title);
  const date = new Date().toISOString().split("T")[0];

  const excerpt = content
    .replace(/#{1,3} .+\n/g, "")
    .replace(/\*\*/g, "")
    .trim()
    .split("\n")
    .find((l) => l.length > 20) || topic.title;

  const frontmatter = `---
title: "${topic.title}"
date: "${date}"
excerpt: "${excerpt.substring(0, 120)}..."
keywords: [${topic.keywords.map((k) => `"${k}"`).join(", ")}]
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
