#!/bin/bash
# 续跑：文章已生成，仅完成 翻译(补缺) → 提交 → 推送 → 验证
# 用于 daily-publish.sh 因翻译超时被中断后的续跑，避免重复生成新文章。
set -uo pipefail
cd "$(dirname "$0")/.."
LOG=/tmp/zhicheng_daily_publish.log
echo "===== $(date '+%F %T') 续跑开始 =====" | tee -a "$LOG"

KEY=$(python3 -c "
import os, json, sqlite3, glob, re
key=None
env='/home/userchaos/.hermes/.env'
if os.path.exists(env):
    for line in open(env):
        m=re.match(r'\s*ANTHROPIC_API_KEY\s*=\s*[\"\x27]?([^\"\x27\s]+)', line)
        if m: key=m.group(1); break
if not key:
    base='/home/userchaos/.openclaw/agents/main/agent'
    db=os.path.join(base,'openclaw-agent.sqlite')
    if os.path.exists(db):
        try:
            c=sqlite3.connect(db)
            row=c.execute(\"SELECT store_json FROM auth_profile_store WHERE store_key='primary'\").fetchone()
            if row: key=json.loads(row[0]).get('profiles',{}).get('anthropic:default',{}).get('key')
        except Exception: pass
if not key:
    base='/home/userchaos/.openclaw/agents/main/agent'
    for path in [os.path.join(base,'auth-profiles.json')]+sorted(glob.glob(os.path.join(base,'auth-profiles.json*.bak')),reverse=True):
        if os.path.exists(path):
            try:
                k=json.load(open(path)).get('profiles',{}).get('anthropic:default',{}).get('key')
                if k: key=k; break
            except Exception: pass
if not key: raise SystemExit('ERROR: no anthropic key')
print(key)
")
if [ -z "$KEY" ]; then echo "❌ 无法获取API key" | tee -a "$LOG"; exit 1; fi
export ANTHROPIC_API_KEY="$KEY"

echo ">> 补译缺失的 en/ja..." | tee -a "$LOG"
if ! node scripts/translate-new-posts.mjs 2>&1 | tee -a "$LOG"; then
  echo "⚠️ 部分文章翻译失败，已成功的照常提交，缺失的下次补译（前端会回退中文，不影响上线）" | tee -a "$LOG"
fi

git add content/posts/ 2>&1 | tee -a "$LOG"
if git diff --cached --quiet; then
  echo "ℹ️ 无新文章需提交" | tee -a "$LOG"; exit 0
fi
ZH_COUNT=$(git diff --cached --name-only | grep -E "content/posts/[^/]+\.md$" | grep -c .)
TR_COUNT=$(git diff --cached --name-only | grep -E "content/posts/(en|ja)/" | grep -c .)
git commit -m "chore: 每日自动文章 $(date +%F)（中文${ZH_COUNT}篇 + 译文${TR_COUNT}个）" 2>&1 | tee -a "$LOG"

PUSHED=0
for i in 1 2 3; do
  if git push 2>&1 | tee -a "$LOG"; then PUSHED=1; break; fi
  echo ">> push第${i}次失败，10秒后重试..." | tee -a "$LOG"; sleep 10
done
if [ "$PUSHED" != "1" ]; then echo "❌ push三次均失败，文章已commit在本地待下次补推" | tee -a "$LOG"; exit 1; fi

echo ">> 等待Vercel部署(70s)..." | tee -a "$LOG"
sleep 70
ONLINE=$(curl -s https://shisei-consult.jp/sitemap.xml 2>/dev/null | grep -c "<loc>")
echo "✅ 完成。线上sitemap文章数: ${ONLINE}" | tee -a "$LOG"
echo "===== $(date '+%F %T') 结束 =====" | tee -a "$LOG"
