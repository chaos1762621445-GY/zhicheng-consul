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
const SUBSIDY_HINT = /省力化|AI导入|IT导入|数字化|转正|キャリアアップ|培训|人材開発|リスキリング|業務改善|业务改善|持续化|持続化|空调|空調|ゼロエミ|补助金|助成金/;

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
  const used = Array.isArray(data.facts_used) ? data.facts_used : [];
  if (SUBSIDY_HINT.test(String(data.title)) && used.length === 0) notes.push("标题涉及制度但 facts_used 为空：缺事实依据");
  const now = new Date();
  for (const id of used) {
    const f = FACTS.subsidies.find((s) => s.id === id);
    if (!f) { notes.push(`facts_used 引用了不存在的制度 ${id}`); continue; }
    if (!/^verified_/.test(f.status)) notes.push(`制度 ${id} 状态=${f.status} 未核验`);
    if (f.verified_at && daysBetween(new Date(f.verified_at), now) > CYCLE) notes.push(`制度 ${id} 核验已超 ${CYCLE} 天（${f.verified_at}）`);
  }
  const hasSource = /官方依据与核验|https?:\/\/(www\.)?(mhlw\.go\.jp|smrj\.go\.jp|meti\.go\.jp|jizokukanb\.com|it-shien\.smrj\.go\.jp|shoryokuka\.smrj\.go\.jp|tokyo-co2down\.jp)/.test(content);
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

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
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
