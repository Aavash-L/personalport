import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevents false-positive workspace root detection when this project
  // is inside a parent directory that also has a package-lock.json.
  outputFileTracingRoot: process.cwd(),
  distDir: process.env.NEXT_BUILD_DIR || ".next",

  // Serve the lightweight homepage before App Router pages.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/portfolio/index.html" }],
    };
  },

  images: {
    formats: ["image/webp", "image/avif"],
    // Required to serve local SVG placeholder screenshots via next/image.
    // Safe here because all SVGs are authored by us, not user-uploaded.
    // Remove once you replace placeholders with real WebP screenshots.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
