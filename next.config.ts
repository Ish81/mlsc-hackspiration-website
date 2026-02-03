import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Skip font optimization during build if fonts can't be fetched
  // This is handled by adding fallback fonts in layout.tsx
};

export default nextConfig;
