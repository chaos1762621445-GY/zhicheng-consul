#!/bin/bash
# Read the Anthropic API key from the openclaw agent auth store and run generate-post.mjs
# Auth was migrated from auth-profiles.json to SQLite (auth_profile_store); fall back to JSON if present.
set -e

KEY=$(python3 -c "
import os, json, sqlite3, re

base = '/home/userchaos/.openclaw/agents/main/agent'
key = None

# 1) Preferred: live SQLite auth store
db = os.path.join(base, 'openclaw-agent.sqlite')
if os.path.exists(db):
    try:
        c = sqlite3.connect(db)
        row = c.execute(\"SELECT store_json FROM auth_profile_store WHERE store_key='primary'\").fetchone()
        if row:
            d = json.loads(row[0])
            key = d.get('profiles', {}).get('anthropic:default', {}).get('key')
    except Exception:
        pass

# 2) Fallback: legacy / backup JSON files
if not key:
    candidates = [os.path.join(base, 'auth-profiles.json')]
    import glob
    candidates += sorted(glob.glob(os.path.join(base, 'auth-profiles.json*.bak')), reverse=True)
    for path in candidates:
        if not os.path.exists(path):
            continue
        try:
            d = json.load(open(path))
            k = d.get('profiles', {}).get('anthropic:default', {}).get('key')
            if k:
                key = k
                break
        except Exception:
            pass

if not key:
    raise SystemExit('ERROR: could not locate anthropic:default API key')
print(key)
")

export ANTHROPIC_API_KEY="$KEY"
cd "$(dirname "$0")/.."
if [ $# -gt 0 ]; then "$@"; else node scripts/generate-post.mjs; fi
