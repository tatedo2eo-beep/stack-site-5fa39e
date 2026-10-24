'use strict';
// Home (Joe, 2026-10-24, v3): a full-screen intro video ABOVE the normal site (no header, nav or search on it; only the gold
// Velvet wordmark and 'Welcome to Velvet'), SCROLL-DRIVEN: no autoplay, a pinned sticky track maps scroll progress to
// video.currentTime (assets/js/kitchen.js). When the video ends the page snaps to the header + design hero; scrolling back
// up scrubs the video in reverse. The AI-made kitchen video is the one approved non-photo exception.
// Files in static/kitchen/, encoded from the lossless 1280x720 master frames at the source size (no upscaling), H.264 with a
// keyframe every 12 frames and no B-frames so seeking is cheap in both directions; a 576x720 centre crop for portrait screens.
// Overlay copy: 'Welcome to Velvet' (sk: 'Vitajte vo Velvet' via t.ui.welcome = 'Vitajte vo').
const { esc, mins } = require('../lib/format');

const plural = (n, w, ws) => `${n} ${n === 1 ? w : (ws || w + 's')}`;
const VIDEO = { w: 1280, h: 720, mw: 576, mh: 720 };
function kitchenIntro(ctx) {
  const { u, cfg } = ctx;
  const V = n => u(`kitchen/${n}`);
  const brand = esc(cfg.brand);
  return `<section class="kx" id="intro" aria-label="${esc((ctx.t.ui && ctx.t.ui.welcome) || 'Welcome to')} ${brand}">
<div class="kx-pin"><video class="kx-v" muted playsinline preload="auto" poster="${V('kitchen-scrub-poster-1280x720.webp')}" width="${VIDEO.w}" height="${VIDEO.h}" aria-hidden="true" disablepictureinpicture disableremoteplayback>
<source media="(max-aspect-ratio: 1/1)" src="${V('kitchen-scrub-576x720.mp4')}" type="video/mp4">
<source src="${V('kitchen-scrub-1280x720.mp4')}" type="video/mp4">
</video><div class="kx-shade"></div>
<div class="kx-in"><p class="kx-logo">${brand}</p><span class="kx-rule"></span><p class="kx-h">${esc((ctx.t.ui && ctx.t.ui.welcome) || 'Welcome to')} ${brand}</p></div>
<a class="kx-cue" href="#dz"><span></span>Scroll</a><div class="kx-bar"><i></i></div></div>
</section>`;
}

// Below the design hero (all designs): the pinned featured recipe, the numbers (no '30 minutes or less' figure, Joe
// 2026-10-24) and 'Pick a craving' cards. The old 'Browse the chapters' end caption is gone.
function homeExtras(ctx, P, { recipes, chapters, featured }) {
  const { u, t } = ctx;
  const nR = recipes.length, nD = new Set(recipes.map(r => r.dish)).size, nCh = chapters.length;
  const f = featured;
  const n = (f && f.nutrition_per_serving) || {};
  const facts = f ? [
    [mins(f.total_min), 'from start to plate'],
    [plural(f.servings, 'serving'), `${t.difficulty[f.difficulty] || f.difficulty}`],
    [`${Math.round(n.kcal)} kcal`, 'per serving'],
    [`${Math.round(n.protein_g != null ? n.protein_g : n.protein)} g`, 'protein per serving']
  ].filter(x => !/NaN|undefined/.test(x[0])) : [];
  const feat = f && f.img ? `<section class="kf" aria-label="Featured recipe"><div class="kf-stage"><a class="kf-photo" href="${u(f.url)}" tabindex="-1"><img src="${u(f.img.w1200)}" alt="${esc(f.image_alt || f.title)}" width="${f.img.width}" height="${f.img.height}" loading="lazy" decoding="async"></a>
<div class="kf-info"><p class="kx-k kf-i" style="--d:0">Featured recipe · ${esc(t.chapters[f.chapter] ? t.chapters[f.chapter].name : f.dish_title)}</p><h2 class="kf-i" style="--d:1"><a href="${u(f.url)}">${esc(f.title)}</a></h2><p class="kf-sum kf-i" style="--d:2">${esc(f.summary)}</p>
<ul>${facts.map((x, i) => `<li class="kf-i" style="--d:${i + 3}"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></li>`).join('')}</ul><a class="btn kf-i" style="--d:${facts.length + 3}" href="${u(f.url)}">Open the recipe</a></div></div></section>` : '';
  const nums = `<section class="kn wrap" aria-label="The site in numbers">${[[nR, 'recipes live'], [nD, 'dishes'], [nCh, 'chapters']].map(([v, l]) => `<div><b data-c="${v}">${v}</b><span>${l}</span></div>`).join('')}</section>`;
  const pickFor = k => { const L = recipes.filter(r => r.book_chapter === k || r.chapter === k).filter(r => r !== f && r.img && r.img.orig); return L.find(r => r.access === 'free') || L[0]; };
  const crave = ['burgers', 'pasta', 'rice', 'curries', 'cakes-cupcakes', 'drinks'].map(pickFor).filter(Boolean);
  const cards = crave.length ? `<section class="sec kc"><div class="wrap"><div class="sh2"><h2>Pick a craving</h2><span><a href="${u('recipes/')}">${t.ui.seeAll}</a></span></div>${P.grid(ctx, crave)}</div></section>` : '';
  return feat + nums + cards;
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
<div class="dk-info"><p class="kx-k">${String(i + 1).padStart(2, '0')} · ${esc(r.dish_title)}${r.flavour && r.flavour !== r.dish_title && r.flavour !== 'Classic' ? ' · ' + esc(r.flavour) : ''}</p><h2><a href="${u(r.url)}">${esc(r.title)}</a></h2><p class="dk-sum">${esc(r.summary)}</p>
<p class="dk-meta"><span><b>${mins(r.total_min)}</b>to make</span><span><b>${Math.round(n.kcal)}</b>kcal per serving</span><span><b>${esc(t.difficulty[r.difficulty] || r.difficulty)}</b>difficulty</span></p><a class="btn" href="${u(r.url)}">Get the recipe</a></div></article>`;
  };
  return `<section class="dk${many ? ' many' : ''}" aria-roledescription="carousel" aria-label="${esc(t.chapters.drinks ? t.chapters.drinks.name : 'Drinks')}" style="--tone:${list[0].img.tone || '#2a2016'}">
<div class="dk-bgs" aria-hidden="true">${list.map((r, i) => `<img class="dk-bg${i ? '' : ' on'}" src="${u(r.img.w1200)}" alt="" width="${r.img.width}" height="${r.img.height}" ${i ? 'loading="lazy"' : ''} decoding="async">`).join('')}</div>
<div class="dk-in"><p class="dk-count">${plural(list.length, 'drink')} on the site${many ? ' · swipe or use the arrows' : ''}</p><div class="dk-track">${list.map(card).join('')}</div>
${many ? `<div class="dk-ui"><button class="dk-prev" type="button" aria-label="Previous drink">&#8592;</button><div class="dk-dots">${list.map((r, i) => `<button type="button" aria-label="${esc(r.title)}"${i ? '' : ' class="on"'}></button>`).join('')}</div><button class="dk-next" type="button" aria-label="Next drink">&#8594;</button></div>` : ''}</div></section>`;
}
module.exports = { kitchenIntro, homeExtras, drinksShowcase, VIDEO };
