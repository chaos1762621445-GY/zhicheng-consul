#!/usr/bin/env node
/**
 * 给 FAQ 不足6条的已升级文章补齐 FAQ（不重写全文，只在 FAQ 区追加条目）。
 * 保留原 slug/frontmatter/正文，只在「## 常见问题解答（FAQ）」节内补充问答。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY) { console.error("no key"); process.exit(1); }

const TARGETS = [
  { file: "post-1784674914162.md", need: 2, topic: "事业承继补助金（在日华人二代经营者承继时可申请的补助金）" },
  { file: "post-1778367729621.md", need: 4, topic: "员工培训助成金·人材開発支援助成金（AI研修费最高75%政府承担）" },
];

async function genFaq(topic, existQs, need){
  const prompt = `你是日本补助金顾问。针对主题「${topic}」，为面向在日华人企业主的文章补充 ${need} 个新的 FAQ 问答。

已有的问题（不要重复这些角度）：
${existQs.map((q,i)=>`${i+1}. ${q}`).join("\n")}

要求：
1. 补充 ${need} 个全新角度的常见问题（在日华人老板真实会问的，如申请时机/材料/资格边界/资金/税务/失败对策等已有问题没覆盖的角度）。
2. 每个用「### Q${existQs.length+1}：问题」格式，序号从 Q${existQs.length+1} 开始递增。
3. 答案用「**A：**」开头，不少于80字，尽量含具体数字（金额万円/补助率%/期限/件数）。
4. 合规：不保证获批，涉及成败加"以主管机关审查结果为准"，数字不确定写"以官方公募要领为准"。

只输出这 ${need} 个「### Q…」问答的 Markdown，不要任何前后说明文字。`;
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":KEY,"anthropic-version":"2023-06-01"},body:JSON.stringify({model:"claude-haiku-4-5",max_tokens:2000,messages:[{role:"user",content:prompt}]})});
  if(!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  return (await r.json()).content[0].text.trim();
}

async function main(){
  for(const t of TARGETS){
    const fp=path.join(POSTS_DIR,t.file);
    let raw=fs.readFileSync(fp,"utf-8");
    // 提取 FAQ 区已有问题
    const existQs=[...raw.matchAll(/^### Q\d*[：:]\s*(.+)$/gm)].map(m=>m[1].trim());
    let add=await genFaq(t.topic, existQs, t.need);
    add=add.replace(/\]\((?:联系方式|预约链接|预约地址|企业咨询通道|咨询入口(?:链接)?|您的?联系方式)\)/g,"](/contact)");
    // 找到最后一个 FAQ 问答之后、下一个 ## 之前的位置追加；若 FAQ 是最后一节则追加到文末（结尾引导语前）
    // 简单策略：在最后一个 "### Q...要点" 块结束处插入。定位 FAQ 区最后一个 ### Q 之后到下一个 ^## 或文末
    const faqStart=raw.search(/^## 常见问题解答/m);
    if(faqStart<0){ console.log(`⚠️ ${t.file} 无FAQ区,跳过`); continue; }
    // FAQ 区之后的下一个 ## 标题位置
    const after=raw.slice(faqStart+3);
    const nextH2Rel=after.search(/^## /m);
    let insertPos;
    if(nextH2Rel>=0){ insertPos=faqStart+3+nextH2Rel; } // 下一节标题前
    else { insertPos=raw.length; } // FAQ 是最后一节，插到文末
    raw = raw.slice(0,insertPos).replace(/\s*$/,"\n\n") + add + "\n\n" + raw.slice(insertPos);
    fs.writeFileSync(fp,raw,"utf-8");
    const total=(raw.match(/^### Q\d*[：:]/gm)||[]).length;
    console.log(`✅ ${t.file} 补${t.need}条, 现FAQ共${total}条`);
  }
  console.log("完成");
}
main().catch(e=>{console.error(e);process.exit(1);});
