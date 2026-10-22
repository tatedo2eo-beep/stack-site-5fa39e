'use strict';
const { esc } = require('../lib/format');
const D = require('./designs');

// Shared page shell. ctx: {cfg, t, u(path), abs(path), assets, locale}
function layout(ctx, p) {
  const { cfg, t, u, abs, assets } = ctx;
  const title = p.title ? `${p.title} · ${cfg.brand}` : `${cfg.brand} · ${cfg.tagline}`;
  const desc = p.description || cfg.tagline;
  const canonical = abs(p.path);
  const ogImg = p.image ? abs(p.image) : abs('img/og.png');
  const alt = ctx.locales.length > 1 ? ctx.locales.map(l => `<link rel="alternate" hreflang="${l.code}" href="${ctx.absFor(l, p.path)}">`).join('') : '';
  return `<!doctype html>
<html lang="${t.code}" dir="${t.dir}" data-design="${cfg.defaultDesign}" data-pal="${cfg.defaultPalette}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${cfg.noindex ? '<meta name="robots" content="noindex,nofollow">\n' : ''}<link rel="canonical" href="${canonical}">${alt}
<meta property="og:site_name" content="${esc(cfg.brand)}"><meta property="og:type" content="${p.ogType || 'website'}"><meta property="og:title" content="${esc(p.title || cfg.brand)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImg}"><meta property="og:locale" content="${t.ogLocale}"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#111010">
<link rel="icon" href="${u('favicon.svg')}" type="image/svg+xml">
<script>(function(h){h.classList.replace('no-js','js');try{var L=${JSON.stringify(Object.fromEntries(D.DESIGNS.map(x => [x.k, x.pals.map(p => p.id)])))},d=localStorage.getItem('design'),p=localStorage.getItem('pal');if(L[d]){h.dataset.design=d;h.dataset.pal=L[d].indexOf(p)>-1?p:L[d][0]}var q=location.search.match(/[?&]preview=(premium|off)/);if(q){if(q[1]=='off')localStorage.removeItem('preview');else localStorage.setItem('preview','premium')}if(localStorage.getItem('preview')=='premium')h.classList.add('is-premium')}catch(e){}})(document.documentElement)</script>
<link rel="stylesheet" href="${assets.css}">
${p.head || ''}${p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body class="${p.bodyClass || ''}">
<a class="skip-link" href="#view">Skip to content</a>
${D.body(ctx, p)}
${D.palPanel(ctx)}
<script src="${assets.js.site}" defer></script>
${(p.scripts || []).map(s => `<script src="${s}" defer></script>`).join('')}
</body>
</html>`;
}

// Exactly two of these per page. Reserved height prevents layout shift when real ads arrive.
function ad(ctx, n) {
  return `<aside class="ad-slot" data-ad-slot="${n}" aria-label="${ctx.t.ui.ad} (${ctx.t.ui.adPlaceholder.toLowerCase()})"><span>${ctx.t.ui.ad} · ${ctx.t.ui.adPlaceholder} ${n}</span></aside>`;
}

module.exports = { layout, ad };
