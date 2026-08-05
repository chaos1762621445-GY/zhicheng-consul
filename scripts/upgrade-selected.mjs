#!/usr/bin/env node
/**
 * 存量高价值文章原地升级：保留原 slug/文件名/date，用新三模板引擎重写正文。
 * 老 URL 已被 Google 收录，绝不能换 slug（否则丢收录权重）。
 * 用法: node scripts/upgrade-selected.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY) { console.error("no key"); process.exit(1); }

// 要升级的文章：文件名 + 其标题 + keywords（沿用话题池原定义，保证 slug 与关键词不变）
const TARGETS = [
  { title: "省力化补助金vs AI导入补助金：哪个更适合你？", keywords: ["省力化补助金比较","AI导入补助金","在日华人选择补助金"] },
  { title: "省力化补助金（一般型·目录型）区别与选择指南", keywords: ["省力化补助金类型","目录型省力化","一般型省力化"] },
  { title: "省力化补助金完整指南：在日华人企业如何申请最高1500万円", keywords: ["省力化補助金","在日华人补助金","日本补助金申请"] },
  { title: "IT导入补助金2025最新版：在日华人企业上系统怎么申请", keywords: ["IT導入補助金2025","IT导入补助金","在日华人数字化补助"] },
  { title: "东京都空调省能更新补助：换空调几乎不花钱的秘密", keywords: ["東京都省エネ補助","空调以旧换新","在日华人东京补助"] },
  { title: "持续化补助金（小规模事业者持续化补助金）在日华人小店申请攻略", keywords: ["持续化补助金","小規模事業者持続化補助金","在日华人小店补助"] },
  { title: "事业承继·继承时能申请哪些补助金？在日华人二代经营者必看", keywords: ["事業承継補助金","事业承继补助金","在日华人二代经营"] },
  { title: "员工培训助成金：AI研修费最高75%由政府承担，在日华人企业必看", keywords: ["人材開発支援助成金","在日华人培训补贴","AI研修補助"] },
];

function inferType(t){
  if (/vs|VS|还是|区别|对比|怎么选|哪个|哪些更|TOP\d|最值得|该找谁|该选|比较/.test(t)) return "compare";
  if (/怎么办|怎么写|怎么做|怎么准备|如何应对|失败|驳回|被骗|骗局|黑中介|风险|返还|退还|注意事项|应对|踩的?坑|避坑|被要求|义务/.test(t)) return "solve";
  return "guide";
}
function buildStructure(type){
  if(type==="compare") return `【本篇为「横向评测型」内容——用户正在比较选择，帮他做决策】
结构要求：
1. 开头1段（约150字）：点明这是哪几个选项的对比、各适合什么样的企业，给读者一个总览判断。
2. 为每个被对比对象各写一个独立H2大节，每节必须覆盖：核心参数（补助上限/补助率/对象/期限等具体数字）、适用场景（什么样的在日华人企业该选它）、优点、缺点/门槛。
3. 中段插入一个对比小结（可用条列或「一句话总结」形式），让差异一目了然。
4. 结尾H2「怎么选？按你的情况对号入座」：按企业规模/预算/行业/紧急度分3-4种典型情况，各给明确推荐（"如果你是XX，就选YY，因为ZZ"）。`;
  if(type==="solve") return `【本篇为「问题解决型」内容——用户遇到具体痛点，要结论+可执行步骤】
结构要求：
1. 第一段（约120字）直接给结论/最关键的一句话答案，别铺垫。
2. 中间用3-5个H2大节，每节是一个可执行步骤或一个关键要点，步骤要具体到"做什么、找谁、准备什么材料、大概多久、要花多少钱"。
3. 穿插1个"真实场景举例"（虚构但合理的在日华人企业案例）。
4. 结尾H2「核心建议总结」：3-5条一句话可带走的行动建议。`;
  return `【本篇为「终极指南型」内容——用户在了解认知阶段，要系统全面】
结构要求：
1. 开头1段（约150字）：一句话讲清这个补助金/主题是什么、给谁、能拿多少。
2. 5-8个H2核心模块，每模块300-400字，覆盖：制度概要、补助金额与补助率、申请对象/资格要件、对象经费范围、申请流程与时间线、常见误区或加分要点等。每个模块至少含1-2个具体数据点。
3. 适当用条列、表格化描述让信息易扫读。`;
}
async function gen(topic){
  const type=inferType(topic.title);
  const prompt=`你是一个专业的日本补助金顾问，同时也是精通 SEO 与 GEO（AI搜索引用优化）的内容专家。
请为以下主题写一篇面向在日华人企业主的中文知识库文章。

主题：${topic.title}
目标关键词：${topic.keywords.join("、")}

${buildStructure(type)}

通用要求（所有类型都必须满足）：
1. 字数2500-3000字（中文字符，内容要深度、具体、可操作，绝不空话套话）。
2. 用H2（##）/H3（###）分级标题，标题里自然含目标关键词。
3. 【数据密度铁律·GEO核心】平均每150-200字就要出现一个可量化指标——具体金额（万円）、补助率（%/分数）、期限（月/日）、件数、通过率、人数等。AI搜索引擎优先引用含明确数字的段落，纯文字段落引用率低3倍。数字必须符合日本补助金真实口径，不确定的数字宁可写"以官方公募要领为准"也绝不编造。
4. 必须包含「## 常见问题解答（FAQ）」板块，至少6个常见问题，每个用「### Q1：问题内容」格式，答案用「**A：**」开头，每个答案不少于80字且尽量含具体数字。
5. 语言亲切专业，适合华人老板阅读；多用真实场景举例。
6. 合规红线：补助金不保证获批，禁用"保証拿到/一定通过/最快N个月到账"等承诺性表述，涉及成败一律加"以主管机关审查结果为准"。
7. 结尾自然引导读者免费咨询（不要写死联系方式）。

只输出文章正文的Markdown格式，不要包含frontmatter。`;
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":KEY,"anthropic-version":"2023-06-01"},body:JSON.stringify({model:"claude-haiku-4-5",max_tokens:8000,messages:[{role:"user",content:prompt}]})});
  if(!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  return (await r.json()).content[0].text;
}
// 按 frontmatter title 找到对应存量文件
function findFile(title){
  for(const f of fs.readdirSync(POSTS_DIR).filter(x=>x.endsWith(".md"))){
    const raw=fs.readFileSync(path.join(POSTS_DIR,f),"utf-8");
    const m=raw.match(/^---\s*\n([\s\S]*?)\n---/);
    const t=(m&&m[1].match(/title:\s*"?(.*?)"?\s*$/m)||[])[1];
    if(t&&t.trim()===title) return f;
  }
  return null;
}
const yamlSafe=(s)=>String(s).replace(/[\u201C\u201D]/g,m=>m==="\u201D"?"\u300D":"\u300C").replace(/"([^"]*)"/g,"\u300C$1\u300D").replace(/"/g,"\u300C");

async function main(){
  for(const topic of TARGETS){
    const fname=findFile(topic.title);
    if(!fname){ console.log(`⚠️ 未找到: ${topic.title}`); continue; }
    const orig=fs.readFileSync(path.join(POSTS_DIR,fname),"utf-8");
    // 保留原 frontmatter 的 date（不改发布日，维持收录信号稳定）
    const dm=orig.match(/date:\s*"?(.*?)"?\s*$/m);
    const date=dm?dm[1].trim():new Date().toISOString().split("T")[0];
    let raw;
    try{ raw=await gen(topic); }catch(e){ console.log(`❌ 生成失败 ${topic.title}: ${e.message}`); continue; }
    const content=raw.replace(/\]\((?:联系方式|预约链接|预约地址|企业咨询通道|咨询入口(?:链接)?|在此[^)]*链接[^)]*|您的?联系方式|你的?链接[^)]*|链接地址)\)/g,"](/contact)");
    const excerpt=content.replace(/#{1,3} .+\n/g,"").replace(/\*\*/g,"").trim().split("\n").find(l=>l.length>20)||topic.title;
    const fm=`---\ntitle: "${yamlSafe(topic.title)}"\ndate: "${date}"\nexcerpt: "${yamlSafe(excerpt.substring(0,120))}..."\nkeywords: [${topic.keywords.map(k=>`"${yamlSafe(k)}"`).join(", ")}]\n---\n\n`;
    fs.writeFileSync(path.join(POSTS_DIR,fname),fm+content,"utf-8");
    const cjk=(content.match(/[\u4e00-\u9fff]/g)||[]).length;
    const nums=(content.match(/[0-9]+(万円|%|％|件|个月|\/[0-9])/g)||[]).length;
    const faq=(content.match(/^### Q/gm)||[]).length;
    console.log(`✅ ${fname} [${inferType(topic.title)}] 字${cjk} 数字${nums} FAQ${faq} ← ${topic.title.slice(0,26)}`);
  }
  console.log("完成");
}
main().catch(e=>{console.error(e);process.exit(1);});
