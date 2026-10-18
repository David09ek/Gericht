import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.argv[2] ?? "http://localhost:3000/";
const widths = [1440, 1024, 768, 390, 360];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });

for (const width of widths) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle0" });

  const report = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      // Skip scroll containers and anything inside one — content wider than
      // the viewport is the point of a horizontal scroller.
      let inScroller = false;
      for (let node = el; node && node !== document.body; node = node.parentElement) {
        const ox = getComputedStyle(node).overflowX;
        if (ox === "auto" || ox === "scroll") {
          inScroller = true;
          break;
        }
      }
      if (inScroller) continue;
      if (r.right > docWidth + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className?.baseVal ?? el.className ?? "").toString().slice(0, 60),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        });
      }
    }
    return {
      docWidth,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      offenders: offenders.slice(0, 12),
      offenderCount: offenders.length,
    };
  });

  console.log(`\n=== ${width}px ===  client=${report.docWidth} scrollWidth=${report.scrollWidth} overflowing=${report.offenderCount}`);
  for (const o of report.offenders) {
    console.log(`   ${o.tag.padEnd(8)} ${o.cls.padEnd(42)} L${String(o.left).padStart(5)} R${String(o.right).padStart(5)} W${String(o.width).padStart(5)}`);
  }
  await page.close();
}

await browser.close();
