import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The site is a single statically-prerendered marketing page served from a
     Render Web Service. Cache Components and Partial Prefetching (both on by
     default in the create-next-app template) add moving parts this page has no
     use for, so they stay off. */
  reactStrictMode: true,

  images: {
    /* Assets are pre-encoded to WebP by scripts/optimize-assets.mjs; AVIF is
       offered first for browsers that take it. */
    formats: ["image/avif", "image/webp"],
    /* Widths actually used by the layout, so next/image does not generate
       variants nothing requests. */
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 158, 200, 292, 309, 400, 640],
  },

  /* Long-lived immutable caching for the fingerprinted static assets, plus a
     baseline set of security headers. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/icons/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
