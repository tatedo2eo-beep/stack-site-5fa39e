'use strict';
// The 5 designs x 3 palettes, ported from the earlier cookbook site (Joe's own code).
// Every page is rendered once per design at build time. The default design (E) is in the DOM;
// the others sit in <template> tags and an inline script swaps one in before first paint.
const { esc } = require('../lib/format');
const DESIGNS = require('../lib/designs-data');
const KEYS = DESIGNS.map(d => d.k);                       // e b c d g
const ALT = KEYS.filter(k => k !== 'e');

// palette CSS: html[data-pal=x]{--vars}. The design decides the fonts.
function paletteCss(def) {
  const vars = o => Object.entries(o).map(([k, v]) => `--${k}:${v}`).join(';');
  const d0 = DESIGNS.find(d => d.k === def.design), p0 = d0.pals.find(p => p.id === def.palette);
  let css = `:root{${vars(p0.vars)};--fh:${d0.fonts[0]};--fb:${d0.fonts[1]}}\n`;
  for (const d of DESIGNS) {
    css += `html[data-design=${d.k}]{--fh:${d.fonts[0]};--fb:${d.fonts[1]}}\n`;
    for (const p of d.pals) css += `html[data-pal=${p.id}]{${vars(p.vars)}}\n`;
  }
  return css;
}

const ICON = {
  pal: '<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10.5" cy="7.5" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/></svg>',
  search: '<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  user: '<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" class="ic hrt" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};
const NI = {
  home: '<path d="M3 11 12 4l9 7v9h-6v-6H9v6H3z"/>',
  chapters: '<path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/>',
  recipes: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  protein: '<path d="M6 8v8M3.5 10v4M18 8v8M20.5 10v4M6 12h12"/>',
  who: '<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h1M11.5 12h1M15 12h1M8 16h1M11.5 16h1M15 16h1"/>',
  plans: '<path d="m12 3 2.6 5.5 6 .8-4.4 4.1 1.1 6L12 16.6 6.7 19.4l1.1-6L3.4 9.3l6-.8z"/>',
  favourites: '<path d="M12 20s-7-4.4-8.6-8.6C2.3 8.4 4.2 5 7.4 5c2 0 3.3 1.1 4.6 2.8C13.3 6.1 14.6 5 16.6 5c3.2 0 5.1 3.4 4 6.4C19 15.6 12 20 12 20z"/>'
};
const ni = k => `<svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${NI[k]}</svg>`;

// Preview thumbnails in the "Choose a look" panel (same markup as the original picker)
const PV = brand => ({
  e: `<span class="pv-mast"><b class="pv-fh">${brand}</b></span><span class="pv-nav"><i></i><i></i><i></i><i></i><i></i></span><span class="pv-full"><span class="pv-fh">Aa</span></span><span class="pv-row"><i></i><i></i><i></i><i></i></span>`,
  b: '<span class="pv-sb"><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="pv-book"><span class="pv-pg"><span class="pv-ph"></span><span class="pv-fh">Aa</span><i></i><i></i></span><span class="pv-pg"><i></i><i></i><i></i><i></i><i></i></span></span>',
  c: '<span class="pv-cork"><span class="pv-pol p1"><i></i></span><span class="pv-pol p2"><i></i></span><span class="pv-note"><span class="pv-fh">Aa</span></span><span class="pv-pol p3"><i></i></span><span class="pv-pol p4"><i></i></span></span>',
  d: '<span class="pv-arch"></span><span class="pv-bub"><span class="pv-fh">Aa</span></span><span class="pv-arches"><i></i><i></i><i></i></span><span class="pv-dock"></span>',
  g: '<span class="pv-rail"><i></i><i></i><i></i><i></i></span><span class="pv-bento"><i class="w2 h2 im"></i><i class="ac"><span class="pv-fh">Aa</span></i><i></i><i class="im"></i><i class="w2"></i><i class="im"></i></span>'
});
function palPanel(ctx) {
  const pv = PV(esc(ctx.cfg.brand));
  return `<div id="palpanel" class="palpanel" hidden><div class="palbox" role="dialog" aria-modal="true" aria-labelledby="pal-h"><div class="palhead"><div><h3 id="pal-h">Choose a look</h3><p>5 designs, each in 3 colours. Your choice is saved on this device.</p></div><button type="button" class="palx" data-act="palclose" aria-label="Close">×</button></div><div class="palgrid">${DESIGNS.map(D => {
    const c = D.pals[0].vars;
    return `<div class="pald" data-d="${D.k}"><button type="button" class="prev prev-${D.k}" data-act="theme" data-d="${D.k}" data-p="${D.pals[0].id}" aria-label="${esc(D.name)}" style="--pbg:${c.bg};--psf:${c.surface};--pac:${c.accent};--ptx:${c.text};--pln:${c.line};--pmu:${c.muted};--pside:${c.side || c.surface2};--pfh:${D.fonts[0]};font-family:${D.fonts[1]}">${pv[D.k]}</button><div class="palmeta"><b>${esc(D.name)}</b><span class="dots">${D.pals.map(p => `<button type="button" class="dot" title="${esc(p.name)}" aria-label="${esc(D.name)}: ${esc(p.name)}" data-act="theme" data-d="${D.k}" data-p="${p.id}" style="--d1:${p.vars.bg};--d2:${p.vars.accent};--d3:${p.vars.side || p.vars.surface2}"></button>`).join('')}</span></div><div class="palname"><span class="pn">${esc(D.pals[0].name)}</span> · <span class="lay">${esc(D.lay)}</span></div></div>`;
  }).join('')}</div></div></div>`;
}

// nav items: [key, path, label]
function navItems(ctx) {
  const { t } = ctx;
  return [['home', '', t.nav.home], ['chapters', 'chapters/', t.ui.chapters], ['recipes', 'recipes/', t.nav.recipes], ...(ctx.cfg.healthyLabels === false ? [] : [['protein', 'high-protein/', t.nav.protein], ['who', 'who-healthy/', t.nav.who]]), ['calculator', 'calculator/', 'Calculator'], ['plans', 'plans/', t.nav.plans], ['favourites', 'recipes/?fav=1', 'Favourites']];
}

function chrome(ctx, d, p) {
  const { t, u, cfg } = ctx;
  const nav = navItems(ctx), route = p.navKey || '';
  const nR = ctx.counts.recipes, nCh = ctx.chapters.length;
  const links = icons => nav.map(([k, h, l]) => `<a href="${u(h)}"${route === k ? ' class="on" aria-current="page"' : ''}${icons ? ` title="${esc(l)}"` : ''}>${icons ? `<span class="ni">${ni(k)}</span>` : ''}<span class="nl">${esc(l)}</span></a>`).join('');
  const b1 = esc(cfg.brand.replace(/\s*\S+$/, '')), b2 = esc(cfg.brand.split(/\s+/).pop());
  const brandTxt = `${b1} <i>${b2}</i>`;
  const tools = `<div class="tools"><a class="palbtn" href="${u('login/')}" title="${t.nav.login}" aria-label="${t.nav.login}">${ICON.user}<span>${t.nav.login}</span></a><button type="button" class="palbtn" data-act="pal" aria-haspopup="dialog" aria-controls="palpanel" title="Change the look">${ICON.pal}<span>Look</span></button></div>`;
  const qs = `<form class="qs" action="${u('recipes/')}" method="get" role="search"><span class="qsi">${ICON.search}</span><input name="q" type="search" placeholder="${esc(t.ui.searchPh)}" aria-label="${esc(t.ui.search)}"></form>`;
  const brand = `<a class="brand" href="${u('')}"><span class="logo">${b1.charAt(0)}</span><span class="bt">${brandTxt}</span></a>`;
  const more = [['about/', 'About'], ['contact/', 'Contact'], ['privacy/', 'Privacy (draft)'], ['terms/', 'Terms (draft)']];
  const moreL = `<span class="soonwrap"><span class="soonlab">More:</span>${more.map(([h, l]) => `<a class="soon" href="${u(h)}">${l}</a>`).join('')}</span>`;
  const sub = `${nR} recipes · ${nCh} chapters`;
  const chGroups = ['salty', 'sweet', 'more'].map(g => [g, ctx.chapters.filter(c => c.group === g)]).filter(g => g[1].length);
  let top = '', toc = '';
  if (d === 'b') {
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    top = `<div class="topbar"><div class="wrap topin"><span class="runner">${brandTxt}</span>${qs}${tools}</div></div>`;
    toc = `<a class="tocbrand" href="${u('')}">${brandTxt}</a><div class="toch">Contents</div><nav class="tocnav" aria-label="Main">${nav.map(([k, h, l], i) => `<a href="${u(h)}"${route === k ? ' class="on" aria-current="page"' : ''}><span class="rn">${roman[i]}.</span><span>${esc(l)}</span></a>`).join('')}</nav><details class="tocch" open><summary class="toch"><span>${t.ui.chapters}</span><b>${nCh}</b></summary>${chGroups.map(([g, list]) => `<div class="tocg">${t.groups[g]}</div>${list.map(c => `<a href="${u(`chapter/${c.key}/`)}" class="tc${p.chapterKey === c.key ? ' on' : ''}"><span>${esc(t.chapters[c.key].name)}</span><em></em><b>${c.n}</b></a>`).join('')}`).join('')}</details><div class="toch">More</div>${more.map(([h, l]) => `<a href="${u(h)}" class="tc soon">${l}</a>`).join('')}`;
  } else if (d === 'c') {
    top = `<div class="cbar"><div class="wrap cbarin">${brand}<nav class="cnotes" aria-label="Main">${links(false)}</nav></div><div class="wrap cbar2">${qs}${tools}${moreL}</div></div>`;
  } else if (d === 'd') {
    top = `<div class="wrap dtop">${brand}${qs}${tools}</div><nav class="dock" aria-label="Main">${links(true)}</nav>`;
  } else if (d === 'g') {
    top = `<div class="wrap gtop"><div class="greet"><b>Hi there</b><span>${sub}</span></div>${qs}${tools}</div>`;
    toc = `<a class="glogo" href="${u('')}" title="${esc(cfg.brand)}">${b1.charAt(0)}</a><nav class="rail" aria-label="Main">${links(true)}</nav><div class="railsoon"><span>More</span>${more.slice(0, 2).map(([h, l]) => `<a href="${u(h)}" title="${l}">${l}</a>`).join('')}</div>`;
  } else {
    top = `<div class="mast"><div class="wrap mastin"><span class="dateline">${sub}</span>${brand}${tools}</div></div><nav class="mainnav" aria-label="Main"><div class="wrap navin">${links(false)}<span class="navq">${qs}</span></div></nav>`;
  }
  const foot = `<div class="wrap footin"><span class="fb">${brandTxt}</span>${moreL}<span>${sub}</span></div><div class="wrap fine"><p>Nutrition values are estimates per serving and not medical advice. Always check product labels for allergens. ${cfg.noindex ? '<b>Test deployment:</b> not indexed, ads and payments are placeholders.' : ''} © ${new Date().getFullYear()} ${esc(cfg.brand)}</p></div>`;
  return { top, toc, foot };
}

// Whole page body for one design. view: HTML string, or null = shared view moved in at swap time.
function shell(ctx, d, p, view) {
  const c = chrome(ctx, d, p);
  return `<div class="shell"><aside id="toc" class="toc"${c.toc ? '' : ' hidden'}>${c.toc}</aside><div class="main"><header id="top" class="top">${c.top}</header><main id="view" class="view">${view == null ? '' : view}</main><footer id="foot" class="foot">${c.foot}</footer></div></div>`;
}

// p.views: {e,b,c,d,g} for pages with per-design layouts; otherwise p.body is used for every design.
function body(ctx, p) {
  const views = p.views || null;
  const vE = views ? views.e : p.body;
  let h = `<div id="dz">${shell(ctx, 'e', p, vE)}</div>`;
  for (const d of ALT) {
    h += `<template id="dv-${d}">${shell(ctx, d, p, null)}</template>`;
    if (views && views[d] !== views.e) h += `<template id="vv-${d}">${views[d]}</template>`;
  }
  // swap before first paint: same DOM ids, so the page scripts (deferred) see the active design only
  h += `<script>(function(){var d=document.documentElement.dataset.design;if(!d||d=='e')return;var s=document.getElementById('dv-'+d);if(!s)return;var z=document.getElementById('dz'),f=s.content.cloneNode(true),m=f.getElementById?f.getElementById('view'):f.querySelector('#view'),v=document.getElementById('vv-'+d),old=z.querySelector('#view');if(v)m.appendChild(v.content.cloneNode(true));else while(old.firstChild)m.appendChild(old.firstChild);z.replaceChildren(f)})()</script>`;
  return h;
}

module.exports = { DESIGNS, KEYS, ALT, paletteCss, palPanel, chrome, shell, body, ICON, ni };
