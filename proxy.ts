import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ⚠️ 全站临时下线开关（用户要求撤下官网所有信息，2026-09）。
// 恢复上线 = 删除本文件（或 git revert 本次 commit）再 push，代码与内容全部保留。
// 拦截所有页面/接口请求，统一返回 503，不渲染任何业务内容。
export function proxy(_request: NextRequest) {
  const body = `<!doctype html><html lang="zh"><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<meta name="robots" content="noindex,nofollow">` +
    `<title>サービス停止中 / 服务暂停</title>` +
    `<style>html,body{height:100%;margin:0}body{display:flex;align-items:center;justify-content:center;` +
    `font-family:system-ui,"Noto Sans SC",sans-serif;background:#f6f4ef;color:#1a5c5a;text-align:center}` +
    `.b{max-width:520px;padding:40px}h1{font-size:22px;font-weight:700;margin:0 0 12px}` +
    `p{color:#555;line-height:1.7;margin:6px 0;font-size:15px}</style></head>` +
    `<body><div class="b"><h1>サービス一時停止中</h1>` +
    `<p>本サイトは現在一時的に公開を停止しています。</p>` +
    `<p>本网站暂时停止对外公开，给您带来不便敬请谅解。</p></div></body></html>`
  return new NextResponse(body, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store, max-age=0',
      'retry-after': '86400',
    },
  })
}

export const config = {
  // 拦截一切，包括页面、API、sitemap、robots；仅放行 Next 静态资源以免 503 页样式/字体异常。
  matcher: ['/((?!_next/static|_next/image).*)'],
}
