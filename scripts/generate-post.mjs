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
  { title: "在日华人企业主如何申请IT导入补助金？完整流程详解", keywords: ["在日华人补助金", "IT导入补助金", "日本补助金申请"] },
  { title: "2025年日本小型事业者持续化补助金申请指南", keywords: ["小型事业者持续化补助金", "在日华人创业", "日本补助金2025"] },
  { title: "在日本开餐厅也能拿补助金？华人餐饮业补助金全攻略", keywords: ["日本餐饮补助金", "在日华人餐厅", "餐饮业补助金申请"] },
  { title: "事业再构筑补助金：在日华人企业转型的资金支持", keywords: ["事业再构筑补助金", "在日华人企业转型", "日本补助金"] },
  { title: "日本补助金申请常见失败原因及避坑指南", keywords: ["日本补助金失败原因", "补助金申请技巧", "在日华人补助金"] },
  { title: "个人事业主在日本也能申请补助金吗？", keywords: ["个人事业主补助金", "在日华人个体经营", "日本補助金"] },
  { title: "在日华人企业主最常问的补助金10个问题", keywords: ["在日华人补助金FAQ", "日本补助金常见问题", "补助金申请"] },
  { title: "ものづくり补助金：制造业华人企业主的设备升级资金", keywords: ["ものづくり补助金", "在日华人制造业", "日本设备补助"] },
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

function slugify(title) {
  const map = { "？": "", "！": "", "：": "", "、": "-", " ": "-", "（": "", "）": "", "？": "" };
  return title
    .replace(/[？！：、（）\s]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60)
    + "-" + Date.now();
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
