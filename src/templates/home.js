'use strict';
const { esc, mins } = require('../lib/format');
const { ad } = require('./layout');

// Home: scroll-linked "Stack" story. The page always keeps scrolling; only the burger rides along
// (sticky inside the story track) and splits into layers, then lands in the featured-recipe card.
const LAYERS = [['Sesame brioche', 16], ['Cheddar', 31], ['Beef patty', 45], ['Tomato', 58], ['Lettuce', 69], ['Toasted base', 85]];

function homeStory(ctx, featured) {
  const { u, t } = ctx;
  const f = featured;
  return `<div class="story" id="story" data-frames="${u('hero/frames/')}" data-count="30">
 <div class="bstage" aria-hidden="true"><div class="bwrap" id="bwrap"><canvas id="cv" width="432" height="600"></canvas>
  <div class="labels">${LAYERS.map(([l, top], i) => `<div class="lab" style="top:${top}%"><span><em>0${i + 1}</em>${l}</span></div>`).join('')}</div></div></div>
 <section class="st st-hero"><div class="wrap"><div class="st-copy">
  <p class="kicker">// 01 · The Stack</p>
  <h1 class="display">The<br>Stack</h1>
  <p class="serif sub">recipes worth stacking up</p>
  <p class="st-lead">Metric recipes, honest nutrition per serving, no life stories. Scroll down.</p>
 </div></div><span class="kicker hint">${t.ui.scroll}</span></section>
 <section class="st st-split"><div class="wrap"><div class="st-copy">
  <p class="kicker">// 02 · Smashed to order</p>
  <h2 class="display">Six layers.<br><span class="gold">One perfect bite.</span></h2>
  <p class="st-lead">Every layer earns its place: a toasted base, crisp lettuce, ripe tomato, a thin patty smashed onto a smoking pan, melting cheddar and a soft sesame brioche.</p>
  <ol class="layer-list">${LAYERS.map(([l]) => `<li>${l}</li>`).join('')}</ol>
 </div></div></section>
 <section class="st st-land"><div class="wrap">
  <p class="kicker">// 03 · Tonight's stack</p>
  <article class="feat-card">
   <a class="plate" id="slot" href="${f ? u(f.url) : u('recipes/')}" tabindex="-1" aria-hidden="true"><img id="slot-img" src="${u('hero/frames/f01.webp')}" alt="" width="432" height="600" loading="lazy" decoding="async"></a>
   <div class="feat-info">
    ${f ? `<h2 class="display">${esc(f.title)}</h2>
    <p class="st-lead">${esc(f.summary)}</p>
    <p class="feat-meta"><span>${mins(f.total_min)}</span><span>${t.difficulty[f.difficulty]}</span><span>${Math.round(f.nutrition_per_serving.kcal)} kcal</span><span>${f.servings} servings</span></p>
    <p class="cta"><a class="btn" href="${u(f.url)}">Cook it →</a> <a class="btn ghost" href="${u('recipes/')}">${t.ui.allRecipes}</a></p>` : `<h2 class="display">Recipes coming soon</h2>`}
   </div>
  </article>
 </div></section>
</div>`;
}

const HOME_CSS = `
.page-home main{background:#000}
.story{position:relative;background:#000;color:#f3ece0;--ink:#f3ece0;overflow:clip}
.bstage{position:sticky;top:0;height:100vh;height:100svh;margin-bottom:-100vh;margin-bottom:-100svh;pointer-events:none;z-index:1}
.bwrap{position:absolute;left:50%;top:14svh;height:46svh;aspect-ratio:432/600;transform-origin:50% 50%;will-change:transform;margin-left:calc(-46svh*.36);background:url(FRAME0) center/cover no-repeat}
.bwrap canvas{width:100%;height:100%;display:block;-webkit-mask:radial-gradient(closest-side,#000 78%,#0000);mask:radial-gradient(closest-side,#000 78%,#0000)}
.js .bwrap{background:none}
.labels{position:absolute;inset:0}
.lab{position:absolute;left:78%;transform:translateY(-50%);display:flex;align-items:center;gap:6px;opacity:0;white-space:nowrap}
.lab::before{content:"";width:16px;height:1px;background:#d4a24c}
.lab span{font:600 9.5px/1 ui-monospace,Menlo,monospace;letter-spacing:.06em;text-transform:uppercase;background:rgba(0,0,0,.72);border:1px solid rgba(212,162,76,.4);padding:5px 6px;border-radius:4px;color:#f3ece0}
.lab em{color:#d4a24c;font-style:normal;margin-right:5px}
.st{position:relative;z-index:2;min-height:100vh;min-height:100svh;display:flex;align-items:flex-end;padding:0 0 9svh}
.st .wrap{width:100%}
.st-copy{max-width:34rem;background:linear-gradient(transparent,rgba(0,0,0,.78) 30%);padding:28px 0 0}
.st h1.display{font-size:clamp(64px,19vw,168px);color:#f3ece0}
.st h2.display{font-size:clamp(38px,10vw,84px);color:#f3ece0}
.st .gold{color:#f0c873}
.st .kicker{color:#d4a24c}
.sub{font-size:clamp(20px,5vw,34px);color:#f0c873;margin-top:4px}
.st-lead{color:#b9ad9b;font-size:16px;max-width:40ch;margin-top:12px}
.hint{position:absolute;left:20px;bottom:calc(16px + env(safe-area-inset-bottom));color:#a89f90}
.st-split{min-height:140svh}
.layer-list{list-style:none;counter-reset:l;margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;color:#d8cdb9;font-size:14px}
.layer-list li{counter-increment:l}.layer-list li::before{content:"0" counter(l) " ";color:#d4a24c;font:600 11px ui-monospace,monospace}
.st-land{min-height:115svh;align-items:center;padding:12svh 0}
.feat-card{margin-top:18px;display:grid;gap:22px;align-items:center;border:1px solid rgba(212,162,76,.3);border-radius:22px;padding:18px;background:radial-gradient(60% 60% at 30% 50%,rgba(212,162,76,.14),transparent 70%),#0b0a08}
.plate{position:relative;display:block;width:min(62vw,300px);aspect-ratio:432/600;margin:0 auto;border-radius:50%/36%;background:radial-gradient(closest-side,#1d1913,#000);box-shadow:0 0 0 1px rgba(212,162,76,.35),0 30px 60px -20px rgba(212,162,76,.25)}
.plate img{width:100%;height:100%;object-fit:cover;opacity:0;-webkit-mask:radial-gradient(closest-side,#000 78%,#0000);mask:radial-gradient(closest-side,#000 78%,#0000)}
.no-js .plate img,.plate.landed img{opacity:1}
.plate.landed{box-shadow:0 0 0 1px rgba(212,162,76,.6),0 30px 80px -10px rgba(212,162,76,.4)}
.feat-info h2.display{font-size:clamp(34px,8vw,64px)}
.feat-meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.feat-meta span{font:600 12px/1 ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;border:1px solid rgba(212,162,76,.35);border-radius:999px;padding:7px 10px;color:#f0c873}
.feat-info .cta{margin-top:20px;display:flex;gap:10px;flex-wrap:wrap}
.home-rest{background:var(--bg);padding:8px 0 20px}
@media(min-width:900px){
 .bwrap{left:auto;right:max(170px,calc(50vw - 590px + 150px));margin-left:0;top:9svh;height:80svh}
 .lab{left:86%}.lab span{font-size:11px;padding:6px 8px}.lab::before{width:28px}
 .st{align-items:center;padding:0}
 .st-copy{background:none;max-width:min(44vw,560px);padding:0}
 .st-split{min-height:150svh}
 .feat-card{grid-template-columns:auto 1fr;padding:28px 40px;gap:48px}
 .plate{width:min(24vw,330px);margin:0}
}
@media(prefers-reduced-motion:reduce){
 .bstage{position:absolute;inset:0 0 auto 0}
 .lab{opacity:1}
 .plate img{opacity:1}
}`;

function homePage(ctx, P, recipes, cats, counts) {
  const { t, u } = ctx;
  const featured = recipes.find(r => r.category === 'burgers-sandwiches') || recipes[0];
  const latest = recipes.filter(r => r !== featured).concat(featured ? [featured] : []).slice(0, 6);
  const body = `${homeStory(ctx, featured)}
<div class="home-rest"><div class="wrap">
${ad(ctx, 1)}
<section><p class="kicker">// 04 · The lineup</p><h2 class="sec-h">Latest recipes</h2>${P.grid(ctx, latest)}<p class="cta"><a class="btn ghost" href="${u('recipes/')}">${t.ui.seeAll}</a></p></section>
<section class="duo">
 <a class="promo reveal" href="${u('high-protein/')}"><span class="kicker">// ${counts.hp} recipe${counts.hp === 1 ? '' : 's'}</span><h2>${t.nav.protein}</h2><p>At least 10 g protein per 100 kcal, calculated from the numbers.</p><span class="more">See them →</span></a>
 <a class="promo reveal" href="${u('who-healthy/')}"><span class="kicker">// ${counts.who} recipe${counts.who === 1 ? '' : 's'}</span><h2>${t.nav.who}</h2><p>Fat, saturated fat, free sugars, salt and fibre within WHO limits per serving.</p><span class="more">See the rule →</span></a>
</section>
<section><h2 class="sec-h">Categories</h2><ul class="cat-tiles">${cats.map(c => `<li class="reveal"><a href="${u(`category/${c.key}/`)}"><b>${t.categories[c.key]}</b><small>${c.list.length} recipe${c.list.length === 1 ? '' : 's'}</small></a></li>`).join('')}</ul></section>
${ad(ctx, 2)}
</div></div>`;
  return {
    path: '', description: `${ctx.cfg.brand}: metric recipes with nutrition per serving, High Protein and WHO Healthy picks, cook mode and a servings scaler.`,
    body, overlayHeader: true, bodyClass: 'page-home',
    head: `<link rel="preload" as="image" href="${u('hero/frames/f01.webp')}" fetchpriority="high"><style>${HOME_CSS.replace('FRAME0', u('hero/frames/f01.webp')).replace(/\n/g, '')}</style>`,
    scripts: [ctx.assets.js.hero]
  };
}
module.exports = { homePage };
