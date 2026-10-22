'use strict';
// Home hero: the kitchen fly-through (frame sequence in static/kitchen, scrubbed by scroll; AI-made video frames,
// the one approved non-photo exception), then a pinned featured recipe, real counts and real recipe cards.
// Every food photo below the hero is a recipe's own photo (Tami's file, served by build.js), linked to its recipe page.
// All numbers are computed from the live recipe set at build time.
const { esc, mins } = require('../lib/format');

const FRAMES = 721;
// fly-through scenes, in the order the camera passes them, and the chapter each one belongs to
const SCENES = [
  { ch: 'burgers', k: '01', name: 'Burgers', h: 'Lacy edges,<br>melted cheese.', r: '.09,.13,.24,.28' },
  { ch: 'pasta', k: '02', name: 'Pasta', h: 'Rigatoni, red<br>and glossy.', r: '.285,.31,.36,.385', side: 'r' },
  { ch: 'rice', k: '03', name: 'Sushi rice &amp; bowls', h: 'Rice done<br>properly.', r: '.39,.41,.46,.48' },
  { ch: 'curries', k: '04', name: 'Curries', h: 'Low, slow<br>and fragrant.', r: '.485,.51,.6,.635', side: 'r' },
  { ch: ['cakes-cupcakes', 'drinks'], k: '05', name: 'Cakes &amp; cold drinks', h: 'Save room.', r: '.645,.67,.8,.84' }
];
const plural = (n, w, ws) => `${n} ${n === 1 ? w : (ws || w + 's')}`;

function kitchenHome(ctx, P, { recipes, chapters, featured }) {
  const { u, t } = ctx;
  const live = new Map(chapters.map(c => [c.key, c]));
  const nR = recipes.length, nD = new Set(recipes.map(r => r.dish)).size, nCh = chapters.length, nQ = recipes.filter(r => r.total_min <= 30).length;
  const chN = k => (live.get(k) || { n: 0 }).n;
  const F = (tier, i) => u(`kitchen/${tier}/${String(i).padStart(3, '0')}.webp`);
  const scene = s => {
    const keys = [].concat(s.ch).filter(k => chN(k));
    const line = keys.length ? keys.map(k => `<a href="${u(`chapter/${k}/`)}">${esc(t.chapters[k] && t.chapters[k].name || k)} · ${plural(chN(k), 'recipe')} &rarr;</a>`).join(' · ') : '';
    return `<div class="kx-ch side${s.side ? ' r' : ''}" data-r="${s.r}"><p class="kx-k">${s.k} · ${s.name}</p><h2>${s.h}</h2>${line ? `<p class="kx-l">${line}</p>` : ''}</div>`;
  };
  const hero = `<section class="kx" data-n="${FRAMES}" data-base="${u('kitchen/')}" aria-label="A walk through the kitchen">
<div class="kx-stage"><picture class="kx-po"><source media="(max-aspect-ratio: 1/1)" srcset="${F('m', 0)}"><img src="${F('d', 0)}" alt="" width="1280" height="720" fetchpriority="high" decoding="async"></picture>
<picture class="kx-endp"><source media="(max-aspect-ratio: 1/1)" srcset="${F('m', FRAMES - 1)}"><img src="${F('d', FRAMES - 1)}" alt="" width="1280" height="720" loading="lazy" decoding="async"></picture>
<canvas class="kx-cv" aria-hidden="true"></canvas><div class="kx-shade"></div>
<div class="kx-ch kx-in" data-r="0,0,.04,.085"><p class="kx-k">${esc(ctx.cfg.tagline || ctx.cfg.brand)}</p><h2>Come in.<br><span>Dinner's on.</span></h2><p class="kx-lede">${nR} recipes live, metric, with nutrition per serving.</p><p class="kx-cue"><span></span>Scroll to walk through</p></div>
${SCENES.map(scene).join('\n')}
<div class="kx-ch kx-end" data-r=".87,.9,2,2"><h2>One kitchen.<br><span>${nR} recipes.</span></h2><p class="kx-l">${plural(nD, 'dish', 'dishes')} · ${plural(nCh, 'chapter')} · ${nQ} ready in 30 minutes or less</p><a class="btn kx-btn" href="${u('chapters/')}">Browse the chapters</a></div>
</div></section>`;

  const f = featured;
  const n = f.nutrition_per_serving || {};
  const facts = [
    [mins(f.total_min), 'from start to plate'],
    [plural(f.servings, 'serving'), `${t.difficulty[f.difficulty] || f.difficulty}`],
    [`${Math.round(n.kcal)} kcal`, 'per serving'],
    [`${Math.round(n.protein_g != null ? n.protein_g : n.protein)} g`, 'protein per serving']
  ].filter(x => !/NaN|undefined/.test(x[0]));
  const feat = f && f.img ? `<section class="kf" aria-label="Featured recipe"><div class="kf-stage"><a class="kf-photo" href="${u(f.url)}" tabindex="-1"><img src="${u(f.img.w1200)}" alt="${esc(f.image_alt || f.title)}" width="${f.img.width}" height="${f.img.height}" loading="lazy" decoding="async"></a>
<div class="kf-info"><p class="kx-k kf-i" style="--d:0">Featured recipe · ${esc(t.chapters[f.chapter] ? t.chapters[f.chapter].name : f.dish_title)}</p><h2 class="kf-i" style="--d:1"><a href="${u(f.url)}">${esc(f.title)}</a></h2><p class="kf-sum kf-i" style="--d:2">${esc(f.summary)}</p>
<ul>${facts.map((x, i) => `<li class="kf-i" style="--d:${i + 3}"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></li>`).join('')}</ul><a class="btn kf-i" style="--d:${facts.length + 3}" href="${u(f.url)}">Open the recipe</a></div></div></section>` : '';

  const nums = `<section class="kn wrap" aria-label="The site in numbers">${[[nR, 'recipes live'], [nD, 'dishes'], [nCh, 'chapters'], [nQ, 'ready in 30 min or less']].map(([v, l]) => `<div><b data-c="${v}">${v}</b><span>${l}</span></div>`).join('')}</section>`;

  const pickFor = k => { const L = recipes.filter(r => r.book_chapter === k || r.chapter === k).filter(r => r !== f && r.img && r.img.orig); return L.find(r => r.access === 'free') || L[0]; };
  const crave = ['burgers', 'pasta', 'rice', 'curries', 'cakes-cupcakes', 'drinks'].map(pickFor).filter(Boolean);
  const cards = crave.length ? `<section class="sec kc"><div class="wrap"><div class="sh2"><h2>Pick a craving</h2><span><a href="${u('recipes/')}">${t.ui.seeAll}</a></span></div>${P.grid(ctx, crave)}</div></section>` : '';
  return hero + feat + nums + cards;
}

// Drinks chapter showcase: every drink recipe the site has, as rounded photo cards (the photo whole, never cut out),
// a blurred copy of the same photo behind for depth, and a background tone taken from each photo at build time.
function drinksShowcase(ctx, drinks) {
  const { u, t } = ctx;
  const list = drinks.filter(r => r.img);
  if (!list.length) return '';
  const many = list.length > 1;
  const card = (r, i) => {
    const n = r.nutrition_per_serving || {};
    return `<article class="dk-it${i ? '' : ' on'}" data-i="${i}" style="--tone:${r.img.tone || '#2a2016'}" aria-roledescription="slide" aria-label="${i + 1} of ${list.length}: ${esc(r.title)}">
<a class="dk-card" href="${u(r.url)}"><img src="${u(r.img.w1200)}" alt="${esc(r.image_alt || r.title)}" width="${r.img.width}" height="${r.img.height}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></a>
<div class="dk-info"><p class="kx-k">${String(i + 1).padStart(2, '0')} · ${esc(r.dish_title)} · ${esc(r.flavour)}</p><h2><a href="${u(r.url)}">${esc(r.title)}</a></h2><p class="dk-sum">${esc(r.summary)}</p>
<p class="dk-meta"><span><b>${mins(r.total_min)}</b>to make</span><span><b>${Math.round(n.kcal)}</b>kcal per serving</span><span><b>${esc(t.difficulty[r.difficulty] || r.difficulty)}</b>difficulty</span></p><a class="btn" href="${u(r.url)}">Get the recipe</a></div></article>`;
  };
  return `<section class="dk${many ? ' many' : ''}" aria-roledescription="carousel" aria-label="${esc(t.chapters.drinks ? t.chapters.drinks.name : 'Drinks')}" style="--tone:${list[0].img.tone || '#2a2016'}">
<div class="dk-bgs" aria-hidden="true">${list.map((r, i) => `<img class="dk-bg${i ? '' : ' on'}" src="${u(r.img.w1200)}" alt="" width="${r.img.width}" height="${r.img.height}" ${i ? 'loading="lazy"' : ''} decoding="async">`).join('')}</div>
<div class="dk-in"><p class="dk-count">${plural(list.length, 'drink')} on the site${many ? ' · swipe or use the arrows' : ''}</p><div class="dk-track">${list.map(card).join('')}</div>
${many ? `<div class="dk-ui"><button class="dk-prev" type="button" aria-label="Previous drink">&#8592;</button><div class="dk-dots">${list.map((r, i) => `<button type="button" aria-label="${esc(r.title)}"${i ? '' : ' class="on"'}></button>`).join('')}</div><button class="dk-next" type="button" aria-label="Next drink">&#8594;</button></div>` : ''}</div></section>`;
}
module.exports = { kitchenHome, drinksShowcase, FRAMES };
