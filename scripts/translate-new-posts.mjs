#!/usr/bin/env node
/**
 * 把 content/posts/ 下"英文或日文缺失"的中文文章翻译成 en / ja，写入子目录。
 * 幂等：只翻缺的语言；已存在的跳过。供 daily-publish.sh 在生成中文后调用，实现每日三语。
 * 用法: node scripts/translate-new-posts.mjs
 *   环境: ANTHROPIC_API_KEY 必需
 *   可选: --only <slug1,slug2>  只处理指定文件（不带 .md）
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const EN_DIR = path.join(POSTS_DIR, "en");
const JA_DIR = path.join(POSTS_DIR, "ja");
const KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.TRANSLATE_MODEL || "claude-haiku-4-5";

if (!KEY) { console.error("ERROR: ANTHROPIC_API_KEY 未设置"); process.exit(1); }
for (const d of [EN_DIR, JA_DIR]) fs.mkdirSync(d, { recursive: true });

// —— 术语表 + 规则（对齐 BLOG_TRANSLATE_CONTEXT.md）——
const GLOSSARY = `补助金=subsidy/補助金；助成金=grant/助成金；省力化补助金=Labor-Saving Subsidy/省力化補助金；AI导入补助金/IT导入补助金=AI / IT Adoption Subsidy/AI・IT導入補助金；员工转正助成金=Career-Up (Regularization) Grant/キャリアアップ助成金；员工培训助成金/人材开发支援助成金=Human Resource Development Grant/人材開発支援助成金；空调节能补助=Energy-Efficient AC Subsidy/空調省エネ補助；持续化补助金=Sustainability Subsidy/持続化補助金；事业再构筑补助金=Business Restructuring Subsidy/事業再構築補助金；制造业补助金/ものづくり补助金=Monozukuri Subsidy/ものづくり補助金；事业承继=Business Succession/事業承継；行政书士=Gyoseishoshi/行政書士；税理士=Zeirishi/税理士；社会保险劳务士/社劳士=Sharoshi/社会保険労務士；中小企业诊断士=SME Management Consultant/中小企業診断士；认定支援机关=Certified Support Agency/認定支援機関；在日华人企业主=Chinese business owners in Japan/在日華人の企業経営者；不获批不收费/成功报酬制=No approval, no fee / success-fee model/不採択なら無料 / 成功報酬制；免费诊断=free diagnosis/無料診断；企业微信=WeChat Work/企業WeChat；株式会社 志成コンサル=Shisei Consulting Co., Ltd./株式会社 志成コンサル；公募締切=public-offering deadline/公募締切；补助率=subsidy rate/補助率；GビズID=GビズID/GビズID`;

function rulesFor(lang) {
  const langName = lang === "en" ? "English" : "Japanese";
  const tone = lang === "en"
    ? "clear professional business English, idiomatic (not machine-literal)"
    : "日本語の敬体（です・ます調）、地道で自然な表現（機械翻訳調を避ける）";
  return `You are a professional translator localizing a Chinese-language blog post for a Japanese government-subsidy consulting firm serving Chinese business owners in Japan. Translate the ENTIRE markdown document below into ${langName}.

STRICT RULES:
1. Output ONLY the translated markdown (frontmatter + body). No preamble, no code fences, nothing else.
2. Keep the YAML frontmatter structure identical (---, title/date/excerpt/keywords). Translate title/excerpt; translate keywords array into ${langName} keywords; keep the "date" value UNCHANGED.
3. Inside any double-quoted YAML value, DO NOT use raw ASCII double quotes " (they break YAML) — replace any inner quotes with 「」. Ensure valid YAML.
4. Preserve every markdown structure exactly: ##/### headings, Q1–Qn Q&A blocks, tables, bold, lists, blockquotes, code blocks. Preserve any internal links like ](/contact) verbatim.
5. Copy ALL amounts / numbers / percentages / dates verbatim (e.g. 750万円→7.5 million yen for EN / 750万円 for JA; 92%; 3,000+). ${lang === "en" ? "Use JPY for money." : "金額は「円」表記のまま。"}
6. Compliance red lines: no "guaranteed approval" wording; keep success/failure phrasing conditional (${lang === "en" ? "\"subject to the reviewing authority's decision\"" : "「審査結果によります」"}). Keep any disclaimers.
7. Tone: ${tone}.

Glossary (must apply consistently, zh=EN/JA):
${GLOSSARY}

=== SOURCE (Simplified Chinese) ===
`;
}

async function callClaude(system, userText) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 16000,
      system,
      messages: [{ role: "user", content: userText }],
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  let out = (data.content?.[0]?.text || "").trim();
  // 去掉模型可能包裹的 ``` 代码围栏
  out = out.replace(/^```(?:markdown|md)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
  return out;
}

// 极简 YAML frontmatter 合法性校验：--- 包裹 + 能取到 title
function looksValid(md) {
  if (!md.startsWith("---")) return false;
  const end = md.indexOf("\n---", 3);
  if (end < 0) return false;
  const fm = md.slice(3, end);
  return /(^|\n)\s*title\s*:/.test(fm) && /(^|\n)\s*date\s*:/.test(fm);
}

async function translateOne(slug, srcMd, lang, destPath) {
  const system = rulesFor(lang);
  let last = "";
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const out = await callClaude(system, srcMd);
      if (looksValid(out)) { fs.writeFileSync(destPath, out, "utf-8"); return true; }
      last = "frontmatter invalid";
    } catch (e) { last = e.message; }
    if (attempt < 2) await new Promise(r => setTimeout(r, 3000));
  }
  console.error(`  ✗ ${lang} 失败(${slug}): ${last}`);
  return false;
}

async function main() {
  const onlyArg = process.argv.indexOf("--only");
  const onlySet = onlyArg > -1 ? new Set(process.argv[onlyArg + 1].split(",")) : null;

  const srcFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
  const jobs = [];
  for (const f of srcFiles) {
    const slug = f.replace(/\.md$/, "");
    if (onlySet && !onlySet.has(slug)) continue;
    const needEn = !fs.existsSync(path.join(EN_DIR, f));
    const needJa = !fs.existsSync(path.join(JA_DIR, f));
    if (needEn) jobs.push({ f, slug, lang: "en", dest: path.join(EN_DIR, f) });
    if (needJa) jobs.push({ f, slug, lang: "ja", dest: path.join(JA_DIR, f) });
  }

  if (jobs.length === 0) { console.log("✓ 无待翻译文章（en/ja 均已齐全）"); return; }
  console.log(`待翻译任务: ${jobs.length} 个（${new Set(jobs.map(j => j.slug)).size} 篇缺 en/ja）`);

  let ok = 0, fail = 0;
  for (const job of jobs) {
    const srcMd = fs.readFileSync(path.join(POSTS_DIR, job.f), "utf-8");
    process.stdout.write(`→ ${job.lang} ${job.slug} ... `);
    const done = await translateOne(job.slug, srcMd, job.lang, job.dest);
    if (done) { ok++; console.log("✓"); } else { fail++; }
  }
  console.log(`\n完成: 成功 ${ok} / 失败 ${fail}`);
  if (fail > 0) process.exitCode = 1; // 让上层脚本知道有失败（但已成功的仍写盘）
}

main().catch(e => { console.error("翻译脚本异常:", e.message); process.exit(1); });
