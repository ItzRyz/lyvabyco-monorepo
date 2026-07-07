import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://:8000/api/auth/:path*',
      },
    ];
  },
}

export default nextConfig
