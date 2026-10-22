// ONE place to change brand, URLs and launch flags.
module.exports = {
  brand: "Joe's Stack",            // placeholder brand name
  brandHtml: "Joe's <b>Stack</b>", // brand as shown in the header
  tagline: 'Recipes worth stacking up',
  siteUrl: 'https://tatedo2eo-beep.github.io', // origin, no trailing slash (Cloudflare later: https://example.com)
  basePath: '/stack-site-5fa39e/',               // path prefix incl. slashes ('/' on a custom domain)
  // TEST link: keep true until launch. true = <meta robots noindex> + robots.txt Disallow: /
  noindex: true,
  contactEmail: 'hello@example.com', // PLACEHOLDER address
  contactEmailIsPlaceholder: true,
  // Ads: placeholders only for now (exactly 2 slots per page). Set provider later.
  ads: { provider: null },
  // i18n: first locale is the default and is built at the site root. Add 'ar' / 'es' later (see i18n/README.md)
  locales: ['en'],
  outDir: 'docs',                   // GitHub Pages serves /docs from main
  // Looks: exactly the 5 designs x 3 palettes of the original cookbook (src/lib/designs-data.js).
  // Visitors switch with the palette button; the choice is saved on their device.
  defaultDesign: 'e',           // E · Magazine
  defaultPalette: 'noir-gold',  // Noir & Gold
  // Top-level browse: chapter -> dish -> flavour -> recipe. The 34 chapters of the book (src/lib/book-chapters.json,
  // slugs from the cookbook's data/ch/*.json) plus 'more'. A recipe's `book_chapter` (or `chapter`) picks one;
  // chapters with no recipes yet are hidden everywhere.
  chapters: [...require('./src/lib/book-chapters.json').map(c => ({ key: c.key, stem: c.stem, group: c.group })), { key: 'more', group: 'more' }],
  // High Protein / WHO Healthy labels are paused: no badges, filters, nav links or "why" boxes. Set true to bring them back.
  healthyLabels: false
};
