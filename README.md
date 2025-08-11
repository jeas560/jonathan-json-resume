# Jonathan’s JSON Resume

My résumé in the [JSON Resume](https://jsonresume.org/) format, built with the modern **[Resumed](https://github.com/JsonResume/resumed)** CLI and rendered with community themes.

## Quick start

```bash
# 0) Clone and open in Codespaces (or local with Node 18+)
npm install

# 1) (first time) create a starter file — skip if you already have resume.json
npx resumed init resume.json

# 2) Validate against the official schema
npm run validate

# 3) Generate HTML and preview locally
npm run html
npm run preview   # opens http://localhost:4000

# 4) Export PDF (uses Puppeteer headless Chromium)
npm run pdf
