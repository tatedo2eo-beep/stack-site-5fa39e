'use strict';
// Home scroll stories: one per design. Each is about five screens long, flows with the page (never pinned:
// only the stage rides along, sticky inside the story track) and hands off straight into that design's
// home page. All colour comes from the active palette's CSS variables (--bg, --surface2, --accent, --text,
// --muted), so switching the palette recolours the story live. The food is a cut-out frame sequence
// scrubbed by scroll, so the palette shows behind it; E adds two macro close-ups.
const fs = require('fs'), path = require('path');
const { esc, mins } = require('../lib/format');
const STATIC = path.join(__dirname, '../../static/hero');
const manifest = d => { try { return JSON.parse(fs.readFileSync(path.join(STATIC, d, 'manifest.json'), 'utf8')); } catch (e) { return null; } };

// timeline keys: [progress, value] pairs, eased between (see hero.js)
const SCENES = {
  e: {
    food: 'Double smash cheeseburger', lab: ['Toasted sesame brioche', 'Pickles + diced onion', 'Smashed beef, lacy crust', 'American cheese, melting'],
    seq: [[0.08, 0], [0.46, 1]], scale: [[0, 1], [0.3, 1.12], [0.46, 1.2], [0.8, 0.92], [1, 0.86]], y: [[0, 0], [0.46, -4], [1, 0]],
    k: [[0, 0], [0.2, 0.1], [0.5, 0.22], [0.8, 0.1], [0.96, 0]], g: [[0, 0.25], [0.3, 0.55], [0.6, 0.8], [0.9, 0.3], [1, 0]],
    macros: [{ id: 'crust', o: [[0.47, 0], [0.52, 1], [0.6, 1], [0.64, 0]], z: [[0.47, 1.04], [0.64, 1.22]] }, { id: 'cheese', o: [[0.6, 0], [0.64, 1], [0.72, 1], [0.77, 0]], z: [[0.6, 1.05], [0.77, 1.25]] }],
    copy: [
      ['01 · The Stack', 'The<br>Stack', 'Recipes worth stacking up. Metric, with nutrition per serving and no life stories.'],
      ['02 · Lift off', 'Built in<br><span>layers.</span>', 'Toasted brioche, sharp pickles, two thin patties and cheese that has just let go.'],
      ['03 · The crust', 'Smash it thin.<br><span>Let it crust.</span>', 'A blazing-hot pan and two minutes of patience: that lacy brown edge is the whole point.'],
      ['04 · The melt', 'Cheese on,<br><span>lid off.</span>', 'It goes on the moment the patty flips and melts into every crisp edge.'],
      ['05 · Your stack', 'Pick your<br><span>flavour.</span>', 'Every dish has a free classic flavour and more to unlock.']],
    pick: ['signature-smash-burger', 'classic-smash-burger']
  },
  b: {
    food: 'Four-layer chocolate cake', lab: ['Ganache drip', 'Chocolate sponge', 'Fudge frosting', 'Baked in three tins'],
    seq: [[0.1, 0], [0.7, 1]], scale: [[0, 1], [0.4, 1.1], [0.7, 1.18], [1, 0.9]], y: [[0, 0], [0.7, -3], [1, 0]],
    k: [[0, 0], [0.3, 0.12], [0.6, 0.24], [0.85, 0.1], [0.96, 0]], g: [[0, 0.2], [0.4, 0.6], [0.7, 0.85], [1, 0]],
    copy: [
      ['Chapter one', 'A cake<br><span>in chapters.</span>', 'Every recipe is written to the gram, with nutrition per slice.'],
      ['Layer by layer', 'Moist crumb,<br><span>deep cocoa.</span>', 'Dark sponge baked in separate tins so each layer stays tender.'],
      ['The filling', 'Fudge between<br><span>every layer.</span>', 'Spread thick and level, then chilled so the stack stands tall.'],
      ['The finish', 'Ganache,<br><span>left to drip.</span>', 'Poured warm over the top edge and let it find its own way down.'],
      ['Your book', 'Turn the<br><span>page.</span>', 'Pick a chapter, then a dish, then your flavour.']],
    pick: ['signature-fudgy-brownies', 'chewy-chocolate-chip-cookies']
  },
  c: {
    frame: 'polaroid', cap: 'Hot slice · No. 06',
    food: 'New York cheese pizza', lab: ['Blistered crust', 'Bright tomato sauce', 'Molten mozzarella', 'The stretch'],
    seq: [[0.08, 0], [0.72, 1]], scale: [[0, 0.96], [0.35, 1.08], [0.72, 1.2], [1, 0.9]], y: [[0, 2], [0.72, 6], [1, 0]],
    k: [[0, 0], [0.3, 0.12], [0.62, 0.24], [0.86, 0.1], [0.96, 0]], g: [[0, 0.3], [0.4, 0.7], [0.72, 0.9], [1, 0]],
    copy: [
      ['Hot from the oven', 'What do you<br><span>feel like?</span>', 'Comfort food, measured properly. Scroll and grab a slice.'],
      ['The crust', 'Blistered,<br><span>leopard-spotted.</span>', 'A long, cold rise and the hottest oven you have.'],
      ['The pull', 'Lift it<br><span>slowly.</span>', 'Mozzarella that stretches is mozzarella melted just right.'],
      ['The stretch', 'Longer.<br><span>Longer.</span>', 'Low moisture cheese, a thin layer of sauce, no soggy middle.'],
      ['Your table', 'Grab a<br><span>plate.</span>', 'Pick a chapter, then a dish, then your flavour.']],
    pick: ['classic-cheeseburger', 'signature-smash-burger']
  },
  d: {
    food: 'Buttermilk pancake stack', lab: ['Melting butter', 'Maple syrup', 'Fluffy buttermilk stack', 'Fresh berries'],
    seq: [[0.08, 0], [0.74, 1]], scale: [[0, 0.95], [0.4, 1.06], [0.74, 1.14], [1, 0.9]], y: [[0, 2], [0.74, 4], [1, 0]],
    k: [[0, 0], [0.3, 0.1], [0.6, 0.2], [0.86, 0.08], [0.96, 0]], g: [[0, 0.3], [0.4, 0.6], [0.74, 0.9], [1, 0]],
    copy: [
      ['Once upon a breakfast', 'Stack them<br><span>high.</span>', 'Soft, golden and measured to the gram.'],
      ['Golden hour', 'Here comes<br><span>the syrup.</span>', 'Warm maple, poured slowly over a melting pat of butter.'],
      ['The cascade', 'Down every<br><span>layer.</span>', 'Buttermilk keeps each pancake tender enough to soak it up.'],
      ['Happy ending', 'Berries on<br><span>the side.</span>', 'A little sharpness to balance all that sweetness.'],
      ['Your turn', 'Pick a<br><span>story.</span>', 'Pick a chapter, then a dish, then your flavour.']],
    pick: ['banana-bread', 'shakshuka']
  },
  g: {
    food: 'Spaghetti al pomodoro', frame: 'tile', tag: 'No. 07', cap: 'Spaghetti al pomodoro', lab: ['Glossy tomato sauce', 'Fresh basil', 'Parmesan snow', 'The perfect twirl'],
    seq: [[0.08, 0], [0.74, 1]], scale: [[0, 0.96], [0.4, 1.08], [0.74, 1.16], [1, 0.9]], y: [[0, 0], [0.74, 3], [1, 0]],
    k: [[0, 0], [0.3, 0.12], [0.62, 0.22], [0.86, 0.1], [0.96, 0]], g: [[0, 0.3], [0.4, 0.65], [0.74, 0.9], [1, 0]],
    copy: [
      ['Hi there', 'What are we<br><span>cooking?</span>', 'Quick, measured, honest recipes. Scroll for a twirl.'],
      ['Twirl', 'One fork,<br><span>one nest.</span>', 'Sauce that clings because the pasta finished cooking in it.'],
      ['Lift', 'Higher<br><span>still.</span>', 'Starchy pasta water makes the sauce glossy, not greasy.'],
      ['Snow', 'Parmesan,<br><span>freshly grated.</span>', 'Off the heat, right before it goes to the table.'],
      ['Your plate', 'Make it<br><span>yours.</span>', 'Pick a chapter, then a dish, then your flavour.']],
    pick: ['beef-chili', 'shakshuka']
  }
};

function story(ctx, d, recipes) {
  const S = SCENES[d], M = manifest(d);
  if (!S || !M) return '';
  const { u, t } = ctx;
  const F = i => u(`hero/${d}/${String(i).padStart(2, '0')}.webp`);
  const f = S.pick.map(s => recipes.find(r => r.slug === s)).find(Boolean) || recipes.find(r => r.access === 'free');
  const cfg = { d, n: M.frames, w: M.w, h: M.h, base: u(`hero/${d}/`), seq: S.seq, scale: S.scale, y: S.y, k: S.k, g: S.g, macros: (S.macros || []).map(m => ({ id: m.id, o: m.o, z: m.z })) };
  const macros = (S.macros || []).map(m => `<div class="s5-macro" data-m="${m.id}"><img data-src="${u(`hero/${d}/macro-${m.id}-900.webp`)}" data-src-lg="${u(`hero/${d}/macro-${m.id}-1600.webp`)}" alt="" decoding="async"><i class="s5-sweep"></i></div>`).join('');
  const labs = S.lab.map((l, i) => `<li style="--i:${i}"><em>${String(i + 1).padStart(2, '0')}</em>${esc(l)}</li>`).join('');
  const sec = (c, i) => `<section class="s5 s5-${i + 1}"><div class="s5-wrap"><div class="s5-copy">
<p class="s5-k">${esc(c[0])}</p>${i === 0 ? `<h2 class="s5-h s5-hx">${c[1]}</h2>` : `<h2 class="s5-h">${c[1]}</h2>`}<p class="s5-lead">${esc(c[2])}</p>
${i === 0 ? `<p class="s5-hint" aria-hidden="true">Scroll</p>` : ''}${i === 2 ? `<img class="s5-still" src="${F(Math.round((M.frames - 1) / 2))}" alt="${esc(S.food)}" loading="lazy" decoding="async" width="${M.w}" height="${M.h}">` : ''}${i === 3 ? `<img class="s5-still" src="${F(M.frames - 1)}" alt="${esc(S.food)}" loading="lazy" decoding="async" width="${M.w}" height="${M.h}">` : ''}
${i === 4 ? `<div class="s5-cta">${f ? `<a class="s5-card" href="${u(f.url)}">${f.img ? `<img src="${u(f.img.w600)}" alt="${esc(f.image_alt || f.title)}" loading="lazy" decoding="async" width="${f.img.width || 1280}" height="${f.img.height || 720}">` : ''}<span><small>${esc(f.dish_title)} · ${esc(f.flavour)}</small><b>${esc(f.title)}</b><em>${mins(f.total_min)} · ${Math.round(f.nutrition_per_serving.kcal)} kcal</em></span></a>` : ''}<a class="s5-btn" href="${u('chapters/')}">${t.ui.chapters} →</a></div>` : ''}
</div></div></section>`;
  return `<div class="story5" id="story" data-scene="${d}" data-cfg='${JSON.stringify(cfg)}'>
<div class="s5-stage" aria-hidden="true"><div class="s5-bg"></div><div class="s5-glow"></div><div class="s5-grid"></div>${macros}
<div class="s5-obj${S.frame ? ` s5-${S.frame}` : ''}" style="--ar:${M.w}/${M.h}"><img class="s5-poster" src="${F(0)}" alt="" width="${M.w}" height="${M.h}" fetchpriority="high" decoding="async"><canvas class="s5-cv"></canvas><i class="s5-scan"></i>${S.tag ? `<b class="s5-num">${esc(S.tag)}</b>` : ''}${S.cap ? `<b class="s5-cap">${esc(S.cap)}</b>` : ''}</div>
<ol class="s5-labs">${labs}</ol>
<div class="s5-hud"><span class="s5-tag">${esc(S.food)}</span><span class="s5-n"><b>01</b> / 05</span><span class="s5-rail"><i></i></span></div><div class="s5-grain"></div></div>
${S.copy.map(sec).join('')}
</div>`;
}
module.exports = { story, SCENES };
