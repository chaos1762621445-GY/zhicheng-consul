import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
