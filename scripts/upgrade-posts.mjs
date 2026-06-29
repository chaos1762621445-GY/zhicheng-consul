#!/usr/bin/env node
/**
 * 批量升级存量文章：保留 slug/date/title/keywords，用强化 prompt 重写正文到 2500-3000 字 + 5问FAQ。
 * 用法: ANTHROPIC_API_KEY=xxx node scripts/upgrade-posts.mjs [--limit N] [--only post-xxx]
 * 串行执行 + 间隔限速，避免 API 429。失败的文章保留原文不动。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY) {
  console.error("ERROR: ANTHROPIC_API_KEY 环境变量未设置");
  process.exit(1);
}

const args = process.argv.slice(2);
const limitArg = args.indexOf("--limit");
const LIMIT = limitArg >= 0 ? parseInt(args[limitArg + 1], 10) : Infinity;
const onlyArg = args.indexOf("--only");
const ONLY = onlyArg >= 0 ? args[onlyArg + 1] : null;
const SLEEP_MS = 4000; // 每篇间隔，限速

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 与 generate-post.mjs 一致的强化 prompt
function buildPrompt(title, keywords) {
  return `你是一个专业的日本补助金顾问，同时也是SEO内容专家。
请为以下主题写一篇面向在日华人企业主的中文知识库文章。

主题：${title}
目标关键词：${(keywords || []).join("、")}

要求：
1. 字数2500-3000字（中文字符，内容要深度、具体、可操作，避免空话套话）
2. 结构清晰，用H2/H3分级标题，至少5个H2大节
3. 必须包含「常见问题解答（FAQ）」板块，至少5个常见问题，每个问题用「### Q1：问题内容」格式，答案用「**A：**」开头，答案要详实（每个不少于80字）
4. 语言亲切专业，适合华人企业主阅读，多用具体数字、金额、流程步骤、真实场景举例
5. 自然融入目标关键词，不要堆砌
6. 结尾引导读者免费咨询

只输出文章正文的Markdown格式，不要包含frontmatter。`;
}

async function generate(title, keywords) {
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
      messages: [{ role: "user", content: buildPrompt(title, keywords) }],
    }),
  });
  if (!response.ok) {
    throw new Error(`API错误: ${response.status} ${await response.text()}`);
  }
  const data = await response.json();
  return data.content[0].text;
}

// 与 generate-post.mjs 一致的 YAML 安全处理
const yamlSafe = (s) =>
  String(s)
    .replace(/[\u201C\u201D]/g, (m) => (m === "\u201D" ? "\u300D" : "\u300C"))
    .replace(/"([^"]*)"/g, "\u300C$1\u300D")
    .replace(/"/g, "\u300C");

async function main() {
  let files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();
  if (ONLY) files = files.filter((f) => f.includes(ONLY));

  let done = 0,
    ok = 0,
    fail = 0;
  for (const file of files) {
    if (done >= LIMIT) break;
    done++;
    const fp = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fp, "utf-8");
    const { data } = matter(raw);
    const title = data.title || file;
    const keywords = data.keywords || [];
    const oldLen = raw.length;
    // 已升级达标的跳过，避免重复消耗 API
    if (oldLen > 5000) {
      console.log(`[${done}/${files.length}] ${title} ... ⏭️ 已达标(${oldLen})跳过`);
      continue;
    }
    process.stdout.write(`[${done}/${files.length}] ${title} ... `);
    try {
      const content = await generate(title, keywords);
      // 重算 excerpt（取正文首个 >20 字的段落）
      const excerpt =
        content
          .replace(/#{1,6} .+\n/g, "")
          .replace(/\*\*/g, "")
          .trim()
          .split("\n")
          .find((l) => l.length > 20) || title;
      const frontmatter = `---
title: "${yamlSafe(title)}"
date: "${data.date || new Date().toISOString().split("T")[0]}"
excerpt: "${yamlSafe(excerpt.substring(0, 120))}..."
keywords: [${(keywords || []).map((k) => `"${yamlSafe(k)}"`).join(", ")}]
---

`;
      const newRaw = frontmatter + content;
      fs.writeFileSync(fp, newRaw, "utf-8");
      ok++;
      console.log(`✅ ${oldLen}→${newRaw.length} 字符`);
    } catch (e) {
      fail++;
      console.log(`❌ ${e.message}（保留原文）`);
    }
    if (done < files.length && done < LIMIT) await sleep(SLEEP_MS);
  }
  console.log(`\n完成：成功 ${ok}，失败 ${fail}，共处理 ${done}`);
}

main().catch((e) => {
  console.error("升级失败:", e.message);
  process.exit(1);
});
