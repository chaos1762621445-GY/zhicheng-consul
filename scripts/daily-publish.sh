#!/bin/bash
# 志成官网每日SEO文章：生成 → 提交 → 推送 → 验证线上 一条龙
# 解决"文章生成了但没部署上线"的间歇性失败问题。
# key来源优先级：~/.hermes/.env → openclaw sqlite → 旧JSON备份
set -uo pipefail
cd "$(dirname "$0")/.."
REPO_DIR="$(pwd)"
LOG=/tmp/zhicheng_daily_publish.log
echo "===== $(date '+%F %T') 开始 =====" | tee -a "$LOG"

# 1) 取 API key
KEY=$(python3 -c "
import os, json, sqlite3, glob, re
key=None
# a) ~/.hermes/.env
env='/home/userchaos/.hermes/.env'
if os.path.exists(env):
    for line in open(env):
        m=re.match(r'\s*ANTHROPIC_API_KEY\s*=\s*[\"\x27]?([^\"\x27\s]+)', line)
        if m: key=m.group(1); break
# b) openclaw sqlite
if not key:
    base='/home/userchaos/.openclaw/agents/main/agent'
    db=os.path.join(base,'openclaw-agent.sqlite')
    if os.path.exists(db):
        try:
            c=sqlite3.connect(db)
            row=c.execute(\"SELECT store_json FROM auth_profile_store WHERE store_key='primary'\").fetchone()
            if row: key=json.loads(row[0]).get('profiles',{}).get('anthropic:default',{}).get('key')
        except Exception: pass
# c) 旧JSON
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

# 2) 生成文章
echo ">> 生成文章..." | tee -a "$LOG"
if ! node scripts/generate-post.mjs 2>&1 | tee -a "$LOG"; then
  echo "❌ 文章生成失败" | tee -a "$LOG"; exit 1
fi

# 3) 提交所有未提交的文章(含历史堆积的)
git add content/posts/ 2>&1 | tee -a "$LOG"
if git diff --cached --quiet; then
  echo "ℹ️ 无新文章需提交" | tee -a "$LOG"; exit 0
fi
NCOUNT=$(git diff --cached --name-only | grep -c "content/posts/")
git commit -m "chore: 每日自动文章 $(date +%F)（${NCOUNT}篇）" 2>&1 | tee -a "$LOG"

# 4) 推送(带3次重试)
PUSHED=0
for i in 1 2 3; do
  if git push 2>&1 | tee -a "$LOG"; then PUSHED=1; break; fi
  echo ">> push第${i}次失败，10秒后重试..." | tee -a "$LOG"; sleep 10
done
if [ "$PUSHED" != "1" ]; then echo "❌ push三次均失败，文章已commit在本地待下次补推" | tee -a "$LOG"; exit 1; fi

# 5) 等待Vercel部署并验证线上文章数
echo ">> 等待Vercel部署(70s)..." | tee -a "$LOG"
sleep 70
ONLINE=$(curl -s https://shisei-consult.jp/sitemap.xml 2>/dev/null | grep -c "<loc>")
echo "✅ 完成。线上sitemap文章数: ${ONLINE}" | tee -a "$LOG"
echo "===== $(date '+%F %T') 结束 =====" | tee -a "$LOG"
