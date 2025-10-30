import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/westshgit",
  assetPrefix: "/westshgit",
  trailingSlash: true,
};

export default nextConfig;
