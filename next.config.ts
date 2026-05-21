import type { NextConfig } from "next";

// REMINDER: For each project you own (Rotgen, Mogfit, Dominus, True Star, Wings Citi, Urmi),
// add these headers to allow iframe embedding from your portfolio domain:
//
// async headers() {
//   return [{
//     source: '/(.*)',
//     headers: [
//       { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://aavashlamichhane.com" }
//     ]
//   }]
// }

const nextConfig: NextConfig = {
  // Prevents false-positive workspace root detection when this project
  // is inside a parent directory that also has a package-lock.json.
  outputFileTracingRoot: process.cwd(),

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
