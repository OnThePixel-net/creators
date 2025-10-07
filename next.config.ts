import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
if (process.argv.includes("dev")) {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
