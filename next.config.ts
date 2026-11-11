import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      "customcyclinglab.cz",
      "www.customcyclinglab.cz",
      "customcyclinglab.com",
    ].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.customcyclinglab.com/:path*",
      permanent: true,
    }));
  },
};
export default nextConfig;
