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
};

export default nextConfig;
