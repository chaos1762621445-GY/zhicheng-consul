#!/bin/bash
# Read the API key from auth-profiles.json and run generate-post.mjs
set -e

KEY=$(python3 -c "
import json
with open('/home/userchaos/.openclaw/agents/main/agent/auth-profiles.json', 'rb') as f:
    import re
    raw = f.read()
    text = raw.decode('utf-8')
    m = re.search(r'\"key\"\s*:\s*\"([^\"]+)\"', text)
    if m:
        print(m.group(1))
    else:
        # try reading raw bytes
        idx = raw.find(b'\"key\"')
        start = raw.find(b'\"', idx+5) + 1
        end = raw.find(b'\"', start)
        print(raw[start:end].decode('utf-8'))
")

export ANTHROPIC_API_KEY="$KEY"
cd "$(dirname "$0")/.."
node scripts/generate-post.mjs
