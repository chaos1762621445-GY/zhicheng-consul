import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 构建时间戳内联进服务端与客户端 bundle（同一字面量），供制度受付状态按日期推导；
  // 不能在组件里直接 new Date()——客户端加载时间≠构建时间会导致水合不一致。
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        // 旧 vercel.app 域名 308 永久跳转到正式域名，传递权重、消除重复内容
        source: "/:path*",
        has: [{ type: "host", value: "zhicheng-consul.vercel.app" }],
        destination: "https://shisei-consult.jp/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // 白皮书是 5.8MB 的独立阅读物（非 SEO 页面），禁止索引以免浪费抓取预算
        source: "/whitepaper/2026-hakusho.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
    ];
  },
};

export default nextConfig;
