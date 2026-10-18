/**
 * One-off asset pipeline: pulls the original PNG/SVG assets out of the legacy
 * Gericht repo, renames them to lowercase kebab-case (the originals had spaces
 * and mixed case, which 404'd on Render's case-sensitive filesystem) and
 * re-encodes the raster ones to WebP at ~2x their real display size.
 *
 * Usage: node scripts/optimize-assets.mjs <path-to-legacy-repo>
 */
import sharp from "sharp";
import { mkdir, copyFile, stat } from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2] ?? path.join(process.env.HOME, "Desktop/Gericht-original");
const OUT_IMG = path.resolve("public/images");
const OUT_ICON = path.resolve("public/icons");

// width = 2x the largest size the image is ever displayed at, capped at the
// source's native width so nothing is upscaled.
const RASTER = [
  { from: "images/Hero img.png",    to: "hero-dish.webp",    width: 900,  quality: 82 },
  { from: "images/BG.png",          to: "bg-texture.webp",   width: 2560, quality: 62 },
  { from: "images/Chef Image.png",  to: "chef.webp",         width: 1000, quality: 82 },
  { from: "images/cocktail.png",    to: "cocktail.webp",     width: 640,  quality: 82 },
  { from: "images/contact-img.png", to: "contact.webp",      width: 1000, quality: 82 },
  { from: "images/awards-side.png", to: "awards-side.webp",  width: 1024, quality: 82 },
  { from: "images/Video.png",       to: "video-still.webp",  width: 1920, quality: 72 },
  { from: "images/savernake-knives-f4jl2ezowuM-unsplash 2.png", to: "knife.webp", width: 168, quality: 90 },
  { from: "images/double-spoon.png", to: "double-spoon.webp", width: 292, quality: 90 },
  { from: "images/1.png", to: "gallery-1.webp", width: 618, quality: 82 },
  { from: "images/2.png", to: "gallery-2.webp", width: 618, quality: 82 },
  { from: "images/3.png", to: "gallery-3.webp", width: 618, quality: 82 },
  { from: "images/5.png", to: "gallery-4.webp", width: 618, quality: 82 },
  { from: "images/awards-1.png", to: "award-rising-star.webp",  width: 158, quality: 90 },
  { from: "images/awards-2.png", to: "award-bib-gourmand.webp", width: 158, quality: 90 },
  { from: "images/awards-3.png", to: "award-outstanding.webp",  width: 158, quality: 90 },
  { from: "images/awards-5.png", to: "award-aa-hospitality.webp", width: 158, quality: 90 },
];

const VECTOR = [
  { from: "icons/Gericht Logo.svg", to: "logo.svg" },
  { from: "icons/G.svg",            to: "g-watermark.svg" },
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function run() {
  await mkdir(OUT_IMG, { recursive: true });
  await mkdir(OUT_ICON, { recursive: true });

  let before = 0;
  let after = 0;

  for (const { from, to, width, quality } of RASTER) {
    const src = path.join(SRC, from);
    const dest = path.join(OUT_IMG, to);
    const meta = await sharp(src).metadata();
    const target = Math.min(width, meta.width);

    await sharp(src)
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(dest);

    const inSize = (await stat(src)).size;
    const outSize = (await stat(dest)).size;
    before += inSize;
    after += outSize;
    console.log(
      `${to.padEnd(26)} ${String(meta.width).padStart(4)}px -> ${String(target).padStart(4)}px   ` +
      `${kb(inSize).padStart(8)} -> ${kb(outSize).padStart(8)}`
    );
  }

  for (const { from, to } of VECTOR) {
    const src = path.join(SRC, from);
    const dest = path.join(OUT_ICON, to);
    await copyFile(src, dest);
    const size = (await stat(src)).size;
    before += size;
    after += size;
    console.log(`${to.padEnd(26)} (svg, copied)              ${kb(size).padStart(8)} -> ${kb(size).padStart(8)}`);
  }

  console.log("\n" + "-".repeat(72));
  console.log(`TOTAL  ${kb(before)} -> ${kb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
