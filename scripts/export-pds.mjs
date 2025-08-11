import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const outDir = "dist";
const htmlPath = path.resolve(outDir, "index.html");
const pdfPath = path.resolve(outDir, "jonathan-resume.pdf");

// ensure HTML exists
await fs.access(htmlPath).catch(() => {
  throw new Error("dist/index.html not found. Run `npm run html` first.");
});

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
});
await browser.close();

console.log(`✓ PDF written to ${pdfPath}`);
