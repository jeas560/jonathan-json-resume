# JSON Resume (Resumed + Codespaces)

My résumé in the [JSON Resume](https://jsonresume.org/) format, built with the modern **[Resumed](https://github.com/JsonResume/resumed)** CLI and rendered with a community theme.

## Quick start

```bash
# 0) Open in GitHub Codespaces (or local Node 18+)
npm install

# 1) (first time only) create a starter file
npm run init   # generates resume.json (skip if you already have one)

# 2) Validate against the official schema
npm run validate

# 3) Build HTML and preview
npm run html
npm run preview   # http://localhost:4000

# 4) Export PDF
npm run pdf       # writes dist/<your-name>-resume.pdf
