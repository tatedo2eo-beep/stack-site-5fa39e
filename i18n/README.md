# Adding a language
1. Copy `en.js` to `ar.js` / `es.js`, translate the strings, set `code`, `dir` (`'rtl'` for Arabic) and `ogLocale`.
2. Add the code to `locales` in `site.config.js`. The first locale is built at the site root, others under `/<code>/`; hreflang links are added automatically.
3. Recipe text is English-only for now. Planned: `content/recipes/<code>/<slug>.json` overrides for title, summary, steps, tips and storage.
4. RTL: the CSS uses logical layout where it matters; check the recipe page and filters in RTL before launch.
