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
```

## Scripts

These are defined in `package.json`:

```json
{
  "scripts": {
    "init": "resumed init resume.json",
    "validate": "resumed validate resume.json",
    "html": "mkdir -p dist && resumed render resume.json -o dist/index.html",
    "pdf": "node scripts/export-pdf.mjs",
    "preview": "npx http-server dist -p 4000"
  }
}
```

`pdf` uses a small Puppeteer script (`scripts/export-pdf.mjs`) that loads the built HTML and prints to A4 with backgrounds.

## Themes

Default theme: **Even**.  
Change by editing your JSON (no flags needed):

```json
{ "meta": { "theme": "jsonresume-theme-even" } }
```

Browse themes: https://jsonresume.org/themes/  
Install another theme: `npm i -D jsonresume-theme-<name>`

## Project structure

```
.
├─ resume.json          # source of truth (JSON Resume schema)
├─ dist/                # build outputs (HTML/PDF) – gitignored
├─ scripts/
│  └─ export-pdf.mjs    # Puppeteer-based PDF export
├─ package.json
└─ .devcontainer/       # Codespaces setup (installs Chromium deps)
```

## Codespaces notes

This repo includes a devcontainer that installs Chromium system libraries needed by Puppeteer.  
If you ever see a missing-lib error again, rebuild the container (Command Palette → **Codespaces: Rebuild Container**).

## License

- **Code & config**: MIT (see `LICENSE`)
- **Resume content** (`resume.json`, exported `.html/.pdf`): **CC BY 4.0** — © Jonathan Silva. Please attribute if reused.

---
**Tip:** Keep `resume.json` under version control and generate multiple outputs (different themes/sections) for different roles without duplicating content.