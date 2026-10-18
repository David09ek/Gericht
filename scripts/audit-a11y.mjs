import puppeteer from "puppeteer-core";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core");
import { readFileSync } from "node:fs";
const axeSource = readFileSync(axePath, "utf8");

const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
for (const width of [1440, 390]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900 });
  await page.goto(process.argv[2] ?? "http://localhost:3000/", { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
  });
  await page.evaluate(axeSource);
  const results = await page.evaluate(async () => await window.axe.run(document, { resultTypes: ["violations"] }));
  console.log(`\n=== axe @ ${width}px — ${results.violations.length} violation(s) ===`);
  for (const v of results.violations) {
    console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s))`);
    for (const n of v.nodes.slice(0, 3)) console.log(`      ${n.html.slice(0, 110)}`);
  }
  await page.close();
}
await browser.close();
