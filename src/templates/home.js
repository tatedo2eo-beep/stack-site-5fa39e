'use strict';
const fs = require('fs'), path = require('path');
const { esc, mins } = require('../lib/format');
const { ICON } = require('./designs');

// Home: a flowing (never pinned) scroll story, about five screens long. The page keeps scrolling;
// only the burger stage rides along (sticky inside the story track). Black -> deep ember -> the
// theme's accent. The burger splits into its layers, the camera dives into the patty crust and the
// melting cheddar, then the layers restack and land in the featured recipe card.
const LAYOUT = JSON.parse(fs.readFileSync(path.join(__dirname, '../../tools/hero-layout.json'), 'utf8')).layers;

function homeStory(ctx, f) {
  const { u, t } = ctx;
  const V = p => u(`hero/v4/${p}`);
  const layers = LAYOUT.map((l, i) => `<img class="s4-l" data-src="${V(l.id + '.webp')}" data-y="${l.y}" data-ey="${l.ey}" data-s="${l.s}" data-k="${l.id}" alt="" decoding="async" style="z-index:${i + 1}">`).join('');
  const labels = LAYOUT.slice().reverse().map((l, i) => `<div class="s4-lab" data-k="${l.id}"><span><em>0${i + 1}</em>${esc(l.label)}</span></div>`).join('');
  const macro = (id, k, alt) => `<div class="s4-macro" id="${id}"><img data-src="${V(k + '-900.webp')}" data-src-lg="${V(k + '-1600.webp')}" alt="${alt}" decoding="async"><i class="s4-sweep"></i></div>`;
  const fImg = f && f.img ? u(f.img.w1200) : V('poster.webp');
  return `<div class="story4" id="story" data-lg="900">
 <div class="s4-stage" aria-hidden="true">
  ${macro('m-crust', 'macro-crust', '')}${macro('m-cheese', 'macro-cheese', '')}
  <div class="s4-burger" id="burger"><img class="s4-poster" src="${V('poster.webp')}" alt="" width="448" height="600" fetchpriority="high">${layers}<div class="s4-labs">${labels}</div></div>
  <div class="s4-hud"><span class="s4-count"><b id="s4-n">01</b> / 05</span><span class="s4-rail"><i id="s4-bar"></i></span></div>
  <div class="s4-grain"></div>
 </div>
 <section class="s4 s4-1"><div class="wrap"><div class="s4-copy">
  <p class="s4-k">01 · The Stack</p>
  <h1 class="s4-h">The<br>Stack</h1>
  <p class="s4-sub">recipes worth stacking up</p>
  <p class="s4-lead">Metric recipes, honest nutrition per serving, no life stories. Scroll to take one apart.</p>
 </div></div><span class="s4-hint">${t.ui.scroll}</span></section>
 <section class="s4 s4-2"><div class="wrap"><div class="s4-copy">
  <p class="s4-k">02 · Five layers</p>
  <h2 class="s4-h2">Five layers.<br><span>One perfect bite.</span></h2>
  <p class="s4-lead">A toasted base, cold crisp lettuce, ripe tomato, a thin patty smashed onto a smoking pan under melting cheddar, and a soft sesame brioche on top.</p>
 </div></div></section>
 <section class="s4 s4-3"><div class="wrap"><div class="s4-copy">
  <p class="s4-k">03 · The crust</p>
  <h2 class="s4-h2">Smash it thin.<br><span>Let it crust.</span></h2>
  <p class="s4-lead">Press the beef flat on a very hot pan, then leave it alone for two minutes. More surface on the steel means more browning: crisp, lacy edges and deep flavour.</p>
  <img class="s4-still" src="${V('macro-crust-900.webp')}" alt="Close-up of the browned, lacy edge of a smashed beef patty" width="900" height="506" loading="lazy" decoding="async">
 </div></div></section>
 <section class="s4 s4-4"><div class="wrap"><div class="s4-copy">
  <p class="s4-k">04 · The melt</p>
  <h2 class="s4-h2">Flip. Cheddar on.<br><span>Under a minute to melt.</span></h2>
  <p class="s4-lead">Cheese goes on the moment the patty is flipped, then 45 to 60 seconds more on the heat. It slumps into every crisp edge while the beef finishes cooking.</p>
  <img class="s4-still" src="${V('macro-cheese-900.webp')}" alt="Close-up of melted cheddar dripping over a seared patty" width="900" height="506" loading="lazy" decoding="async">
 </div></div></section>
 <section class="s4 s4-5"><div class="wrap">
  <p class="s4-k">05 · Tonight's stack</p>
  <article class="s4-card">
   <a class="s4-slot" id="slot" href="${f ? u(f.url) : u('recipes/')}" tabindex="-1" aria-hidden="true"><img id="slot-img" src="${fImg}" alt="" width="1200" height="900" loading="lazy" decoding="async"></a>
   <div class="s4-info">
    ${f ? `<span class="s4-k">${esc(f.dish_title)} · ${esc(f.flavour)} · ${t.ui.free}</span><h2 class="s4-h2">${esc(f.title)}</h2>
    <p class="s4-lead">${esc(f.summary)}</p>
    <p class="s4-meta"><span>${mins(f.total_min)}</span><span>${t.difficulty[f.difficulty]}</span><span>${Math.round(f.nutrition_per_serving.kcal)} kcal</span><span>${Math.round(f.nutrition_per_serving.protein_g)} g protein</span></p>
    <p class="s4-cta"><a class="btn" href="${u(f.url)}">Cook it →</a> <a class="btn ghost" href="${u(`dish/${f.dish}/`)}">All ${esc(f.dish_title.toLowerCase())} flavours</a></p>` : '<h2 class="s4-h2">Recipes coming soon</h2>'}
   </div>
  </article>
 </div></section>
</div>`;
}

const HOME_CSS = fs.readFileSync(path.join(__dirname, '../assets/css/home.css'), 'utf8');

// design-specific home sections below the story (ported from the cookbook home screens)
function designHome(ctx, d, P, data) {
  const { t, u } = ctx;
  const { recipes, chapters, featured, counts } = data;
  const HL = ctx.cfg.healthyLabels !== false;
  const nR = recipes.length, nCh = chapters.length;
  const sub = `${nR} recipes · ${nCh} chapters`;
  const groups = ['salty', 'sweet', 'more'].map(g => { const cs = chapters.filter(c => c.group === g); return { k: g, name: t.groups[g], cs, n: cs.reduce((a, c) => a + c.n, 0), img: cs.length ? P.chCover(ctx, cs[0], d) : '' }; }).filter(g => g.cs.length);
  const chW = n => n === 1 ? 'chapter' : 'chapters';
  const latest = recipes.filter(r => r !== featured).slice(0, 8);
  const pick = latest.filter(r => r.img).slice(0, 5);
  const sform = cls => `<form class="sbox ${cls || ''}" action="${u('recipes/')}" method="get" role="search">${ICON.search}<input name="q" type="search" placeholder="${esc(t.ui.searchPh)}" aria-label="${esc(t.ui.search)}"><button class="go">Search</button></form>`;
  const quick = `<div class="chips qchips"><a class="chip" href="${u('recipes/')}?time=30">Up to 30 min</a>${HL ? `<a class="chip h" href="${u('high-protein/')}">${t.nav.protein} · ${counts.hp}</a><a class="chip h" href="${u('who-healthy/')}">${t.nav.who} · ${counts.who}</a>` : ''}<a class="chip" href="${u('recipes/')}?diet=vegetarian">${t.diets.vegetarian}</a><a class="chip" href="${u('recipes/')}?diet=gluten-free">${t.diets['gluten-free']}</a><a class="chip" href="${u('recipes/')}?diff=easy">${t.difficulty.easy}</a></div>`;
  const featSec = `<section class="sec"><div class="wrap"><div class="sh2"><h2>Latest recipes</h2><span><a href="${u('recipes/')}">${t.ui.seeAll}</a></span></div>${P.grid(ctx, latest.slice(0, 8))}</div></section>`;
  const a1 = P.adw(ctx, 1), a2 = P.adw(ctx, 2);
  const chg = P.chapterGroups(ctx, d, chapters);
  const heroR = featured;
  const heroImg = heroR ? P.imgSrc(ctx, heroR, 1200) : '';
  let i = 0;
  if (d === 'b') {
    const toc = groups.map(g => `<div class="ctg"><h3>${g.name}</h3>${g.cs.map(c => `<a class="ctl" href="${u(`chapter/${c.key}/`)}"><span class="cn">${P.num2(++i)}</span><span class="ct">${esc(t.chapters[c.key].name)}</span><em></em><b>${c.n}</b></a>`).join('')}</div>`).join('');
    return `<section class="book wrap"><div class="spread home"><div class="page left title">${heroR ? `<a class="frontis" href="${u(heroR.url)}"><span class="fpl"><img src="${P.imgSrc(ctx, heroR, 600)}" alt="${esc(heroR.title)}" loading="lazy"></span><span class="fcap">${esc(heroR.title)}</span></a>` : ''}<span class="kicker">${esc(ctx.cfg.tagline)}</span><h1>${esc(ctx.cfg.brand.replace(/\s*\S+$/, ''))} <i>${esc(ctx.cfg.brand.split(/\s+/).pop())}</i></h1><div class="orn">❦</div><p>${sub}. Metric, with nutrition per serving.</p>${sform()}${quick}<span class="folio">i</span></div><div class="page right"><div class="runhead"><span>Contents</span><span>${sub}</span></div><h2 class="pageh">Contents</h2>${toc}<span class="folio">ii</span></div></div></section>${a1}${featSec}${a2}`;
  }
  if (d === 'c') {
    return `<section class="chero wrap"><div class="cnote big"><h1>What do you feel like <span>today</span>?</h1><p>${sub}</p>${sform('big')}${quick}</div>${heroR ? `<a class="catcard dishcard" href="${u(heroR.url)}"><img src="${P.imgSrc(ctx, heroR, 600)}" alt="" loading="lazy"><span class="ctb"><span class="pl">Featured</span><b>${esc(heroR.title)}</b><em>${esc(t.chapters[heroR.chapter].name)}</em></span></a>` : ''}</section><section class="wrap crow"><a class="ccount" href="${u('chapters/')}"><b>${nR} recipes</b><span>Pick a chapter, then a dish, then your flavour.</span><em>Chapters →</em></a>${pick.slice(0, 4).map(r => `<a class="cpin" href="${u(r.url)}"><img src="${P.imgSrc(ctx, r, 600)}" alt="" loading="lazy"><span>${esc(t.chapters[r.chapter].name)}</span><b>${esc(r.flavour)}</b></a>`).join('')}</section>${a1}${chg}${featSec}${a2}`;
  }
  if (d === 'd') {
    return `<section class="dhero wrap">${heroR ? `<a class="dcat dpic" href="${u(heroR.url)}" aria-label="${esc(heroR.title)}" style="--cat-img:url(&quot;${heroImg}&quot;)"></a>` : ''}<div class="dbubble"><span class="kicker">${esc(ctx.cfg.tagline)}</span><h1>What do you feel like today?</h1><p>${sub}</p>${sform()}</div></section><section class="wrap dgrps">${groups.map(g => `<a href="${u(`chapter/${g.cs[0].key}/`)}"><span class="arch"><img src="${g.img}" alt="" loading="lazy"></span><b>${g.name}</b><span>${g.cs.length} ${chW(g.cs.length)} · ${g.n} recipes</span></a>`).join('')}</section><section class="wrap dquick">${quick}</section>${a1}${featSec}${chg}${a2}`;
  }
  if (d === 'g') {
    return `<section class="gbento wrap"><div class="gbig" style="--hero-img:url(&quot;${heroImg}&quot;)"><div class="glass"><span class="pill">Hi there</span><h1>What do you feel like today?</h1><p>${sub}</p>${sform()}</div></div><div class="gstat"><span class="kicker">${esc(ctx.cfg.brand)}</span><b>${nR}</b><span>recipes, metric, with nutrition per serving</span></div>${groups.map(g => `<a class="gtile" href="${u(`chapter/${g.cs[0].key}/`)}"><img src="${g.img}" alt="" loading="lazy"><span class="glab"><b>${g.name}</b><span>${g.cs.length} ${chW(g.cs.length)} · ${g.n} recipes</span><i>›</i></span></a>`).join('')}${HL ? `<a class="gsm gseas" href="${u('high-protein/')}"><span class="kicker">${t.nav.protein}</span><b>${counts.hp}</b><span>≥ 10 g protein per 100 kcal</span></a><a class="gsm" href="${u('who-healthy/')}"><b>${t.nav.who}</b><span>${counts.who} recipes within WHO limits</span></a>` : `<a class="gsm gseas" href="${u('recipes/')}?time=30"><span class="kicker">Quick</span><b>${recipes.filter(r => r.total_min <= 30).length}</b><span>recipes in 30 minutes or less</span></a><a class="gsm" href="${u('chapters/')}"><b>${t.ui.chapters}</b><span>${chapters.length} chapters to browse</span></a>`}<a class="gsm" href="${u('plans/')}"><b>${t.nav.plans}</b><span>Free classics · Premium soon</span></a></section>${a1}${featSec}${chg}${a2}`;
  }
  // E · magazine (the story above is the cover)
  return `<section class="wrap eissue"><h2 class="ekick">In this issue</h2><ol>${pick.map((r, k) => `<li><a href="${u(r.url)}"><span class="enum">${P.num2(k + 1)}</span><img loading="lazy" src="${P.imgSrc(ctx, r, 600)}" alt=""><span class="eis"><small>${esc(t.chapters[r.chapter].name)}</small><b>${esc(r.title)}</b></span></a></li>`).join('')}</ol></section>${a1}<section class="wrap eidx"><h2 class="ekick">${t.ui.chapters} · ${sub}</h2><div class="ecols">${groups.map(g => `<div><h3>${g.name}</h3>${g.cs.map(c => `<a href="${u(`chapter/${c.key}/`)}"><span>${P.num2(++i)}</span>${esc(t.chapters[c.key].name)}<em>${c.n}</em></a>`).join('')}</div>`).join('')}</div></section><section class="sec quick"><div class="wrap">${quick}</div></section>${featSec}${a2}`;
}

function homePage(ctx, P, recipes, chapters, counts) {
  const { u } = ctx;
  const featured = recipes.find(r => r.dish === 'smash-burger' && r.access === 'free') || recipes.find(r => r.access === 'free') || recipes[0];
  const story = homeStory(ctx, featured);
  const views = P.each(d => story + designHome(ctx, d, P, { recipes, chapters, featured, counts }));
  return {
    path: '', navKey: 'home', description: `${ctx.cfg.brand}: metric recipes with nutrition per serving${ctx.cfg.healthyLabels === false ? '' : ', High Protein and WHO Healthy picks'}, cook mode and a servings scaler.`,
    views, bodyClass: 'page-home',
    head: `<link rel="preload" as="image" href="${u('hero/v4/poster.webp')}" fetchpriority="high"><style>${HOME_CSS.replace('POSTER', u('hero/v4/poster.webp')).replace(/\n\s*/g, '')}</style>`,
    scripts: [ctx.assets.js.hero]
  };
}
module.exports = { homePage };
