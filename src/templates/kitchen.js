'use strict';
// Home intro: the kitchen fly-through as one looping, muted video (AI-made video, the one approved non-photo exception),
// full screen, followed directly by the design's own hero (home.js). Files in static/kitchen/, encoded from the lossless 1280x720 master frames:
// Overlay copy (Joe, 2026-10-24): 'Welcome to Velvet' (sk: 'Vitajte vo Velvet' via t.ui.welcome = 'Vitajte vo').
// AV1 WebM first, H.264 MP4 fallback, a 576x720 centre crop for portrait screens, poster = first frame at full resolution.
const { esc, mins } = require('../lib/format');

const plural = (n, w, ws) => `${n} ${n === 1 ? w : (ws || w + 's')}`;
const VIDEO = { w: 1280, h: 720, mw: 576, mh: 720 };
function kitchenHome(ctx) {
  const { u } = ctx;
  const V = n => u(`kitchen/${n}`);
  return `<section class="kx" aria-label="A walk through the kitchen">
<video class="kx-v" autoplay muted loop playsinline preload="auto" poster="${V('kitchen-poster-1280x720.webp')}" width="${VIDEO.w}" height="${VIDEO.h}" aria-hidden="true" disablepictureinpicture disableremoteplayback>
<source media="(max-aspect-ratio: 1/1)" src="${V('kitchen-576x720.av1.webm')}" type="video/webm; codecs=av01.0.04M.10">
<source media="(max-aspect-ratio: 1/1)" src="${V('kitchen-576x720.mp4')}" type="video/mp4; codecs=avc1.64001E">
<source src="${V('kitchen-1280x720.av1.webm')}" type="video/webm; codecs=av01.0.05M.10">
<source src="${V('kitchen-1280x720.mp4')}" type="video/mp4; codecs=avc1.64001F">
</video><div class="kx-shade"></div>
<div class="kx-in"><p class="kx-h">${esc((ctx.t.ui && ctx.t.ui.welcome) || 'Welcome to')} <span>${esc(ctx.cfg.brand)}</span></p></div>
<a class="kx-cue" href="#home-hero"><span></span>Scroll</a>
</section>`;
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
module.exports = { kitchenHome, drinksShowcase, VIDEO };
