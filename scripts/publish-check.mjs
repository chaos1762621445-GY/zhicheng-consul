#!/usr/bin/env node
/**
 * 发布关卡：把 content/posts/*.md 中 status=draft 的文章做机器校验，通过 → status=published；不通过 → status=pending_review + review_notes。
 * 机器校验 ≠ 专家事实审核：expert_reviewed 字段单独保存，机器不会把它置 true。
 *
 * 校验项（任一失败即不发布）：
 *  1. frontmatter 合法（gray-matter 可解析，title/date/excerpt 存在）
 *  2. 合规红线：无「保证获批/一定通过/100%通过/最快N个月到账/零风险/风险为零」等承诺
 *  3. 事实依据：标题命中制度关键词时 facts_used 不能为空；facts_used 里的制度在 facts 源里必须存在且 status=verified_*，
 *     且 verified_at 未超过 review_cycle_days
 *  4. 正文不含未清洗占位链接 ](联系方式) 等、不含 "XX万"/"○○" 占位
 *  5. 正文含「官方依据与核验」节（guide 类要求）或至少一条 official_url（任一即可）
 *  6. 无 status 字段的历史文章：视为 legacy_published，不动
 *
 * 用法：node scripts/publish-check.mjs [--dry]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const FACTS = JSON.parse(fs.readFileSync(path.join(__dirname, "../content/facts/subsidies.json"), "utf-8"));
const CYCLE = FACTS._meta.review_cycle_days || 45;
const DRY = process.argv.includes("--dry");

const FORBIDDEN = [
  /保[证証]拿到/, /保[证証]获批/, /保[证証]通过/, /一定(能)?通过/, /100%\s*通过/, /必[定然]获批/,
  /最快\s*\d+\s*个?月(内)?到账/, /零风险/, /风险为零/, /无风险/, /包过/, /稳拿/,
];
const PLACEHOLDER = [/\]\((联系方式|预约链接|预约地址|企业咨询通道|链接地址)\)/, /XX\s*万/, /○○/, /〇〇/, /\[在此/];
const SUBSIDY_HINT = /省力化|AI导入|IT导入|AI導入|IT導入|转正|正社员|キャリアアップ|培训助成|人材開発|業務改善|业务改善|持続化|持续化|空调|空調|ゼロエミ|ものづくり|再構築|再构筑|事業承継|事业承继|雇用調整|両立支援|トライアル雇用|特定求職者/; // 只对点名具体制度的标题要求事实依据

function daysBetween(a, b) { return Math.round((b - a) / 86400000); }

function check(file) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
  let parsed;
  try { parsed = matter(raw); } catch (e) { return { ok: false, notes: [`frontmatter 解析失败: ${e.message}`] }; }
  const { data, content } = parsed;
  const notes = [];
  if (!data.title || !data.date || !data.excerpt) notes.push("frontmatter 缺 title/date/excerpt");
  for (const re of FORBIDDEN) if (re.test(content) || re.test(String(data.title))) notes.push(`合规红线命中: ${re}`);
  for (const re of PLACEHOLDER) if (re.test(content)) notes.push(`占位内容未清洗: ${re}`);
  // 中文正文里混入整句日文（制度名等日文名词允许，句子级助词/句尾不允许）
  const isJaNative = data.lang === "ja" || file.startsWith("ja/");
  const zhInJa = isJaNative ? content.split("\n").filter((l) => /[们这那您吗呢啊吧的了]/.test(l) && !/[\u3040-\u30ff]/.test(l) && l.trim().length > 6) : [];
  if (zhInJa.length) notes.push(`日文正文混入中文句子 ${zhInJa.length} 行（如：${zhInJa[0].trim().slice(0, 40)}）`);
  const jaSentences = isJaNative ? [] : content.split("\n").filter((l) => /(?:だった|である|ます。|です。|ました。|ください。|でしょう|場合、|ことが|ことを|については)/.test(l));
  if (jaSentences.length) notes.push(`中文正文混入日文句子 ${jaSentences.length} 行（如：${jaSentences[0].trim().slice(0, 40)}）`);
  const used = Array.isArray(data.facts_used) ? data.facts_used : [];
  if (SUBSIDY_HINT.test(String(data.title)) && used.length === 0) notes.push("标题涉及制度但 facts_used 为空：缺事实依据");
  // 无事实依据时不允许出现任何具体比例/金额（模型自编数字最常见的形态）
  // 标了「示例/假设/例：/代入」的行是演示算法，不算事实主张，数字检查跳过这些行
  const factualLines = content.split("\n").filter((l) => !/示例|假设|假定|例[：:]|代入|情景/.test(l)).join("\n");
  if (used.length === 0) {
    // 只拦「政策主张形态」的数字：同一行同时出现 上限/补助率/助成率/采択率/补助额/最高/最多 等制度措辞
    const claimLines = factualLines.split("\n").filter((l) => /上限|补助率|助成率|補助率|采択率|採択率|通过率|补助额|助成额|最高可|最多可|可获|获补|定额|定額/.test(l));
    const ungrounded = claimLines.join("\n").match(/\d+(?:\.\d+)?\s*[%％]|\d[\d,\.]*\s*(?:万円|億円|万日元|亿日元)/g) || [];
    if (ungrounded.length) notes.push(`无事实依据却出现具体数字 ${ungrounded.length} 处（如 ${[...new Set(ungrounded)].slice(0, 4).join(" / ")}）`);
  }
  // 有事实依据时：正文中的金额/比例必须能在事实清单原文里找到
  if (used.length > 0) {
    const factText = used.map((id) => JSON.stringify(FACTS.subsidies.find((s) => s.id === id) || {})).join(" ");
    const nums = factualLines.match(/\d[\d,\.]*\s*(?:万円|億円)|\d+\/\d+|\d+(?:\.\d+)?\s*[%％]/g) || [];
    // 归一：去空格/千分位，全角%，亿↔億，「万円」「万日元」「万」等价，「1億円」=「10000万円」
    const norm = (x) => {
      let v = String(x).replace(/[\s,，]/g, "").replace("％", "%").replace(/亿/g, "億").replace(/万日元|万元/g, "万円").replace(/億日元/g, "億円");
      const m = v.match(/^(\d+(?:\.\d+)?)億円?$/);
      if (m) v = String(Math.round(parseFloat(m[1]) * 10000)) + "万円";
      return v.replace(/万$/, "万円");
    };
    const factNorm = norm(factText).replace(/(\d+(?:\.\d+)?)億/g, (_, n) => String(Math.round(parseFloat(n) * 10000)) + "万");
    const bad = [...new Set(nums.map(norm))].filter((n) => {
      if (/^\d+\/\d+$/.test(n)) return !factText.includes(n);
      const core = n.replace(/%$/, "").replace(/円$/, "");
      return !factNorm.includes(core);
    });
    if (bad.length) notes.push(`正文数字不在事实清单内 ${bad.length} 处（如 ${bad.slice(0, 4).join(" / ")}）`);
  }
  const now = new Date();
  for (const id of used) {
    const f = FACTS.subsidies.find((s) => s.id === id);
    if (!f) { notes.push(`facts_used 引用了不存在的制度 ${id}`); continue; }
    if (!/^verified_/.test(f.status)) notes.push(`制度 ${id} 状态=${f.status} 未核验`);
    if (f.verified_at && daysBetween(new Date(f.verified_at), now) > CYCLE) notes.push(`制度 ${id} 核验已超 ${CYCLE} 天（${f.verified_at}）`);
  }
  const hasSource = /官方依据与核验|公式情報・確認日|https?:\/\/(www\.)?(it-shien\.smrj\.go\.jp|jizokukanb\.com|meti\.go\.jp|mhlw\.go\.jp|official\.jizokukanb\.com|shoryokuka\.smrj\.go\.jp|smrj\.go\.jp|tokyo-co2down\.jp)/.test(content);
  if (used.length > 0 && !hasSource) notes.push("正文缺官方依据链接/核验节");
  return { ok: notes.length === 0, notes, data, content, raw };
}

function rewriteStatus(file, raw, data, status, extra) {
  const parsed = matter(raw);
  const fm = { ...parsed.data, status, ...extra };
  // 保持原 frontmatter 字段顺序，只追加/覆盖状态字段
  const out = matter.stringify(parsed.content, fm);
  fs.writeFileSync(path.join(POSTS_DIR, file), out, "utf-8");
}

// 中文草稿在 posts/，日文原创草稿在 posts/ja/（native: true）；译文由翻译脚本沿用状态，不在此处审
const files = [
  ...fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md")),
  ...(fs.existsSync(path.join(POSTS_DIR, "ja")) ? fs.readdirSync(path.join(POSTS_DIR, "ja")).filter((f) => f.endsWith(".md")).map((f) => "ja/" + f) : []),
];
let pub = 0, hold = 0, legacy = 0;
for (const f of files) {
  const r = check(f);
  const status = r.data?.status;
  if (!status) { legacy++; continue; }               // 历史文章：不动
  if (status === "published") continue;
  if (status !== "draft" && status !== "pending_review") continue;
  if (r.ok) {
    pub++;
    console.log(`✅ 通过 → published: ${f}`);
    if (!DRY) rewriteStatus(f, r.raw, r.data, "published", { machine_checked_at: new Date().toISOString(), expert_reviewed: r.data.expert_reviewed ?? false });
  } else {
    hold++;
    console.log(`⛔ 拦截 → pending_review: ${f}\n   - ${r.notes.join("\n   - ")}`);
    if (!DRY) rewriteStatus(f, r.raw, r.data, "pending_review", { review_notes: r.notes.join("；"), machine_checked_at: new Date().toISOString() });
  }
}
console.log(`\n发布关卡汇总：published+${pub} / pending_review ${hold} / legacy(无status,不动) ${legacy} / 总 ${files.length}`);
if (hold > 0) process.exitCode = 2;
