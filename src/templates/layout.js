'use strict';
const { esc } = require('../lib/format');

// Shared page shell. ctx: {cfg, t, u(path), abs(path), assets, locale}
function layout(ctx, p) {
  const { cfg, t, u, abs, assets } = ctx;
  const title = p.title ? `${p.title} · ${cfg.brand}` : `${cfg.brand} · ${cfg.tagline}`;
  const desc = p.description || cfg.tagline;
  const canonical = abs(p.path);
  const ogImg = p.image ? abs(p.image) : abs('img/og.png');
  const navItems = [['', t.nav.home], ['recipes/', t.nav.recipes], ['high-protein/', t.nav.protein], ['who-healthy/', t.nav.who], ['plans/', t.nav.plans]];
  const nav = navItems.map(([h, l]) => `<a href="${u(h)}"${p.path === h ? ' aria-current="page"' : ''}>${l}</a>`).join('');
  const themes = cfg.themes.map(th => `<button type="button" role="menuitemradio" data-theme-id="${th.id}" aria-checked="false"><i class="sw sw-${th.id}"></i>${esc(th.name)}<small>${th.dark ? 'dark' : 'light'}</small></button>`).join('');
  const alt = ctx.locales.length > 1 ? ctx.locales.map(l => `<link rel="alternate" hreflang="${l.code}" href="${ctx.absFor(l, p.path)}">`).join('') : '';
  return `<!doctype html>
<html lang="${t.code}" dir="${t.dir}" data-theme="${cfg.defaultTheme}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${cfg.noindex ? '<meta name="robots" content="noindex,nofollow">\n' : ''}<link rel="canonical" href="${canonical}">${alt}
<meta property="og:site_name" content="${esc(cfg.brand)}"><meta property="og:type" content="${p.ogType || 'website'}"><meta property="og:title" content="${esc(p.title || cfg.brand)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImg}"><meta property="og:locale" content="${t.ogLocale}"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b0a08">
<link rel="icon" href="${u('favicon.svg')}" type="image/svg+xml">
<script>document.documentElement.classList.replace('no-js','js');try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="${assets.css}">
${p.head || ''}${p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body class="${p.bodyClass || ''}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-head${p.overlayHeader ? ' over' : ''}">
 <div class="wrap head-in">
  <a class="brand" href="${u('')}">${cfg.brandHtml}</a>
  <nav class="main-nav" id="main-nav" aria-label="Main">${nav}</nav>
  <div class="head-actions">
   <a class="icon-btn" href="${u('login/')}" aria-label="${t.nav.login}" title="${t.nav.login}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a>
   <div class="theme-pick"><button type="button" class="icon-btn" id="theme-btn" aria-haspopup="true" aria-expanded="false" aria-controls="theme-menu" title="${t.ui.theme}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg><span class="sr">${t.ui.theme}</span></button>
    <div class="theme-menu" id="theme-menu" role="menu" hidden>${themes}</div></div>
   <button type="button" class="icon-btn menu-btn" id="menu-btn" aria-expanded="false" aria-controls="main-nav"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8"/></svg><span class="sr">${t.ui.menu}</span></button>
  </div>
 </div>
</header>
<main id="main">
${p.body}
</main>
<footer class="site-foot"><div class="wrap">
 <div class="foot-grid">
  <div><a class="brand" href="${u('')}">${cfg.brandHtml}</a><p class="mute">${esc(cfg.tagline)}. Metric measurements, nutrition per serving, no life stories.</p></div>
  <nav aria-label="Recipes"><b>Cook</b><a href="${u('recipes/')}">${t.ui.allRecipes}</a><a href="${u('high-protein/')}">${t.nav.protein}</a><a href="${u('who-healthy/')}">${t.nav.who}</a><a href="${u('recipes/')}?fav=1">My favourites</a></nav>
  <nav aria-label="Site"><b>Site</b><a href="${u('plans/')}">${t.nav.plans}</a><a href="${u('about/')}">About</a><a href="${u('contact/')}">Contact</a><a href="${u('privacy/')}">Privacy (draft)</a><a href="${u('terms/')}">Terms (draft)</a></nav>
 </div>
 <p class="fine">Nutrition values are estimates per serving and not medical advice. Always check product labels for allergens. ${cfg.noindex ? '<b>Test deployment:</b> not indexed, ads and payments are placeholders.' : ''} © ${new Date().getFullYear()} ${esc(cfg.brand)}</p>
</div></footer>
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
