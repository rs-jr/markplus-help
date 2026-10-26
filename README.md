# MarkPlus Help

User guide for **MarkPlus**, the Markdown editor for macOS.

**Read it at https://rs-jr.github.io/markplus-help/**

Built with [Starlight](https://starlight.astro.build) and published to GitHub Pages on every push to `main`.

## Local preview

```sh
npm install
npm run dev     # http://localhost:4321/markplus-help/
npm run build   # static site in dist/
```

## Editing

- Pages live in `src/content/docs/` (one Markdown file per topic). The sidebar order is in `astro.config.mjs`.
- The menu shortcut tables in `shortcuts.md` are generated from the app's menu by `scripts/generate-shortcuts.mjs` (run inside the app project). Edit the text around the `<!-- shortcuts:start -->` / `<!-- shortcuts:end -->` markers, not between them.
