import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* Exported as plain HTML/CSS/JS into `out/`, which Render serves as a
     Static Site. The site has no server-side needs: there are no raster
     images to resize and no API routes. */
  output: "export",

  images: {
    /* next/image is used only for the two SVGs (logo and G watermark),
       which are served as-is. */
    unoptimized: true,
  },

  /* `headers()` is not available in a static export — Render serves the
     security headers instead (see render.yaml). */
};

export default nextConfig;
