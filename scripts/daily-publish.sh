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

# 2) 生成文章。节奏（2026-09-05 依据 GSC 3个月数据调整）：
#    周一/三/五 = 中文 1 篇；周二/四 = 日文原创 1 篇（针对 GSC 已有展示但排名 20〜90 的日文长尾词）；周末不发。
#    可用 LANG_OVERRIDE=zh|ja 强制。
DOW=$(date +%u)
if [ -n "${LANG_OVERRIDE:-}" ]; then GEN_LANG="$LANG_OVERRIDE"
elif [ "$DOW" = "2" ] || [ "$DOW" = "4" ]; then GEN_LANG="ja"
elif [ "$DOW" = "6" ] || [ "$DOW" = "7" ]; then echo "ℹ️ 周末不发文" | tee -a "$LOG"; exit 0
else GEN_LANG="zh"; fi
echo ">> 生成文章（lang=$GEN_LANG）..." | tee -a "$LOG"
if ! node scripts/generate-post.mjs --lang "$GEN_LANG" 2>&1 | tee -a "$LOG"; then
  echo "❌ 文章生成失败" | tee -a "$LOG"; exit 1
fi

# 2.5) 发布关卡：机器校验（合规红线 / 事实依据 / 占位 / 官方来源）。通过→published；拦截→pending_review（不上线、不翻译）
echo ">> 发布关卡 publish-check..." | tee -a "$LOG"
node scripts/publish-check.mjs 2>&1 | tee -a "$LOG"
PC=${PIPESTATUS[0]}
if [ "$PC" = "2" ]; then echo "⚠️ 有草稿被拦截为 pending_review（见上方原因），已通过的照常发布" | tee -a "$LOG"; fi

# 3) 把已发布的中文文章翻译成 ja（幂等，只译缺的；草稿不译）。
#    2026-09-05 起停止新增 en 译文：GSC 显示英文页 2,922 展示中 1,966 来自美国、0 点击，无客户价值，省 API 费。
#    历史 en 译文保留在线。需要恢复时去掉 --skip-en。
echo ">> 翻译新文章为 ja（en 已停）..." | tee -a "$LOG"
if ! node scripts/translate-new-posts.mjs --skip-en 2>&1 | tee -a "$LOG"; then
  echo "⚠️ 部分文章翻译失败，已成功的照常提交，缺失的下次补译（前端会回退中文，不影响上线）" | tee -a "$LOG"
fi

# 4) 提交所有未提交的文章(含 en/ja 译文 + 历史堆积的)
git add content/posts/ 2>&1 | tee -a "$LOG"
if git diff --cached --quiet; then
  echo "ℹ️ 无新文章需提交" | tee -a "$LOG"; exit 0
fi
ZH_COUNT=$(git diff --cached --name-only | grep -E "content/posts/[^/]+\.md$" | grep -c .)
JA_NATIVE=$(git diff --cached --name-only | grep -E "content/posts/ja/" | xargs -r grep -l "^native: true" 2>/dev/null | grep -c .)
TR_COUNT=$(git diff --cached --name-only | grep -E "content/posts/(en|ja)/" | grep -c .)
git commit -m "chore: 自动文章 $(date +%F)（中文${ZH_COUNT} / 日文原创${JA_NATIVE} / 译文${TR_COUNT}；lang=${GEN_LANG}）" 2>&1 | tee -a "$LOG"

# 5) 推送(带3次重试)
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
