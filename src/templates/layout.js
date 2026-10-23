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
<meta property="og:site_name" content="${esc(cfg.brand)}"><meta property="og:type" content="${p.ogType || 'website'}"><meta property="og:title" content="${esc(p.title || cfg.brand)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImg}">${p.imageAlt ? `<meta property="og:image:alt" content="${esc(p.imageAlt)}">` : ''}<meta property="og:locale" content="${t.ogLocale}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(p.title || cfg.brand)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${ogImg}">
<meta name="theme-color" content="#111010">
<link rel="icon" href="${u('favicon.svg')}" type="image/svg+xml"><link rel="icon" href="${u('favicon-32.png')}" type="image/png" sizes="32x32"><link rel="apple-touch-icon" href="${u('apple-touch-icon.png')}">
<script>(function(h){h.classList.replace('no-js','js');try{var L=${JSON.stringify(Object.fromEntries(D.DESIGNS.map(x => [x.k, x.pals.map(p => p.id)])))},d=localStorage.getItem('design'),p=localStorage.getItem('pal');if(L[d]){h.dataset.design=d;h.dataset.pal=L[d].indexOf(p)>-1?p:L[d][0]}var q=location.search.match(/[?&]preview=(premium|off)/);if(q){if(q[1]=='off')localStorage.removeItem('preview');else localStorage.setItem('preview','premium')}if(localStorage.getItem('preview')=='premium')h.classList.add('is-premium')}catch(e){}})(document.documentElement)</script>
${p.preload ? `<link rel="preload" as="image" href="${p.preload}" fetchpriority="high">
` : ''}<link rel="stylesheet" href="${assets.css}">${(p.styles || []).map(s => `<link rel="stylesheet" href="${s}">`).join('')}
${p.head || ''}${p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body class="${p.bodyClass || ''}">
<a class="skip-link" href="#view">Skip to content</a>
${D.body(ctx, p)}
${D.palPanel(ctx)}
<div id="cc" class="cc" role="dialog" aria-label="Cookie choices" hidden><p>We use necessary storage to run this site. With your consent we and our partners (such as Google) also use cookies for analytics and ads. <a href="${u('cookie-policy/')}">Cookie Policy</a> · <a href="${u('privacy/')}">Privacy Policy</a></p><div id="cc-opts" hidden><label><input type="checkbox" checked disabled> Necessary</label> <label><input type="checkbox" id="cc-an"> Analytics</label> <label><input type="checkbox" id="cc-ad"> Advertising</label></div><p class="cc-b"><button type="button" class="btn" data-cc="all">Accept all</button> <button type="button" class="btn" data-cc="none">Reject non-essential</button> <button type="button" class="btn" data-cc="custom">Customise</button></p></div>
<style>.cc{position:fixed;z-index:999;left:1rem;right:1rem;bottom:1rem;max-width:40rem;margin:auto;padding:1rem 1.2rem;background:var(--surface2,#222);color:inherit;border:1px solid var(--accent,#c9a24a);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.4);font-size:.9rem}.cc[hidden],#cc-opts[hidden]{display:none}.cc p{margin:.3rem 0}.cc label{margin-right:.8rem}.cc .btn{margin:.2rem .3rem .2rem 0}</style>
<script>(function(){var K='consent',b=document.getElementById('cc'),o=document.getElementById('cc-opts'),an=document.getElementById('cc-an'),ad=document.getElementById('cc-ad');function get(){try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}}function apply(c){window.siteConsent=c;document.documentElement.dataset.consentAds=c&&c.ads?'1':'0';/* Load ad/analytics scripts here ONLY when c.ads / c.analytics is true. No ad code yet. */document.dispatchEvent(new CustomEvent('consentchange',{detail:c}))}function save(c){c.t=Date.now();try{localStorage.setItem(K,JSON.stringify(c))}catch(e){}b.hidden=true;apply(c)}function open(){var c=get()||{};an.checked=!!c.analytics;ad.checked=!!c.ads;b.hidden=false}b.addEventListener('click',function(e){var a=e.target.getAttribute('data-cc');if(a=='all')save({analytics:true,ads:true});else if(a=='none')save({analytics:false,ads:false});else if(a=='custom'){if(o.hidden){o.hidden=false;e.target.textContent='Save choices'}else save({analytics:an.checked,ads:ad.checked})}});document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('[data-consent-open]')){e.preventDefault();open()}});var c=get();if(c)apply(c);else b.hidden=false})()</script>
<script src="${assets.js.site}" defer></script>
${(p.scripts || []).map(s => `<script src="${s}" defer></script>`).join('')}
</body>
</html>`;
}

// Exactly two of these per page. Reserved height prevents layout shift when real ads arrive.
function ad(ctx, n) {
  return `<aside class="ad-slot" data-ad-slot="${n}" aria-label="${ctx.t.ui.ad}"><span>${ctx.t.ui.ad}</span></aside>`;
}

module.exports = { layout, ad };
