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
  themes: [
    { id: 'noir-gold', name: 'Noir & Gold', dark: true },
    { id: 'midnight-rose', name: 'Midnight & Rose Gold', dark: true },
    { id: 'emerald-brass', name: 'Emerald & Brass', dark: true },
    { id: 'espresso-apricot', name: 'Espresso & Apricot', dark: true },
    { id: 'ivory-oxblood', name: 'Ivory & Oxblood', dark: false },
    { id: 'lavender-mint', name: 'Lavender & Mint', dark: false }
  ],
  defaultTheme: 'noir-gold'
};
