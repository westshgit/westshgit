import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

export default function (phase: string, { defaultConfig }: { defaultConfig: NextConfig }): NextConfig {
  //  base next config
  const nextConfig: NextConfig = {
    ...defaultConfig,
    reactCompiler: true,
    output: "export",
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      // Add other development config over here
    };
  }

  // We can build this dynamically by checking if we are running in CI
  return {
    ...nextConfig,
    basePath: "/westshgit",
    assetPrefix: "/westshgit",
  };
}
