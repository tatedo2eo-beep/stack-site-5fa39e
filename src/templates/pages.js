"use strict";
const { esc, formatQty, iso, mins } = require('../lib/format');
const { ad } = require('./layout');
const { ICON } = require('./designs');
const DRINKS_CSS = require('fs').readFileSync(require('path').join(__dirname, '../assets/css/drinks.css'), 'utf8');

const img = (ctx, r, sizes, cls, eager) => {
  const a = esc(r.image_alt || r.title);
  if (!r.img) return `<img class="${cls}" src="${ctx.u(`img/ph/${r.category}.svg`)}" alt="" width="1200" height="900"${eager ? '' : ' loading="lazy"'} decoding="async">`;
  if (r.img.orig) return `<img class="${cls}" src="${ctx.u(r.img.w1200)}" alt="${a}" width="${r.img.width}" height="${r.img.height}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
  return `<img class="${cls}" src="${ctx.u(r.img.w600)}" srcset="${ctx.u(r.img.w600)} 600w, ${ctx.u(r.img.w1200)} 1200w" sizes="${sizes}" alt="${a}" width="${r.img.width}" height="${r.img.height}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
};
const imgSrc = (ctx, r, w) => r && r.img ? ctx.u(w === 600 ? r.img.w600 : r.img.w1200) : r ? ctx.u(`img/ph/${r.category}.svg`) : '';
const CARD_SIZES = '(min-width:1100px) 300px, (min-width:640px) 45vw, 92vw';

const LOCK = '<svg class="lock" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="7" width="10" height="7.5" rx="1.6" fill="currentColor"/></svg>';
const accessTag = (ctx, r) => r.access === 'premium' ? `<span class="bdg prem">${LOCK}${ctx.t.ui.premium}</span>` : `<span class="bdg free">${ctx.t.ui.free}</span>`;
const num2 = n => String(n).padStart(2, '0');

function badges(ctx, r, diets = true) {
  const b = [];
  const hl = ctx.cfg.healthyLabels !== false; // paused: no High Protein / WHO Healthy labels anywhere
  if (hl && r.health.highProtein.pass) b.push(`<span class="bdg hp">${ctx.t.nav.protein}</span>`);
  if (hl && r.health.who.pass) b.push(`<span class="bdg h">${ctx.t.nav.who}</span>`);
  if (diets) for (const d of r.dietTags) b.push(`<span class="bdg">${ctx.t.diets[d]}</span>`);
  return b.join('');
}
const alLine = (ctx, r) => r.allergenKeys.length ? 'Contains: ' + r.allergenKeys.map(a => ctx.t.allergens[a].replace('Cereals containing gluten', 'Gluten')).join(', ') : 'No major allergens';

// recipe card (.rc, the original card markup) + data attributes for search/filter
function card(ctx, r) {
  const { t, u } = ctx, prem = r.access === 'premium';
  const text = [r.title, r.summary, r.cuisine, t.categories[r.category], r.dish_title, r.flavour, t.chapters[r.chapter].name, ...r.ingredients.map(i => i.item), ...r.dietTags.map(d => t.diets[d])].join(' ').toLowerCase();
  return `<a class="rc card${prem ? ' is-prem' : ''}" href="${u(r.url)}" data-slug="${r.slug}" data-cat="${r.category}" data-ch="${r.chapter}" data-diet="${r.filterTags.join(' ')}" data-time="${r.total_min}" data-diff="${r.difficulty}" data-text="${esc(text)}"><span class="rimg"><span class="favdot" title="In your favourites">${ICON.heart}</span>${prem ? `<span class="lockdot" title="${t.ui.premium}">${LOCK}<span class="sr">${t.ui.premium}</span></span>` : ''}${img(ctx, r, CARD_SIZES, '', false)}</span><span class="rcb"><span class="no">${esc(r.dish_title)} · ${esc(r.flavour)}</span><h3>${esc(r.title)}</h3><span class="meta">${ICON.clock} ${mins(r.total_min)} · ${Math.round(r.nutrition_per_serving.kcal)} kcal · ${Math.round(r.nutrition_per_serving.protein_g)} g protein</span><span class="al">${esc(alLine(ctx, r))}</span><span class="bdgs">${badges(ctx, r)}</span></span></a>`;
}
const grid = (ctx, list, id) => `<div class="rgrid"${id ? ` id="${id}"` : ''}>${list.map(r => card(ctx, r)).join('')}</div>`;
// generic page: one paper/section with a heading (works in every design)
const sec = (ctx, { crumbs: cr = '', kicker = '', h1, side = '', lead = '' }, inner) => `<section class="sec"><div class="wrap">${cr}${kicker ? `<span class="kicker">${kicker}</span>` : ''}<div class="sh2"><h1>${h1}</h1>${side ? `<span>${side}</span>` : ''}</div>${lead ? `<p class="lead">${lead}</p>` : ''}${inner}</div></section>`;
const crumbs = (ctx, items) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${ctx.u('')}">${ctx.t.nav.home}</a>${items.map(([h, l]) => h ? ` / <a href="${ctx.u(h)}">${esc(l)}</a>` : ` / <b aria-current="page">${esc(l)}</b>`).join('')}</nav>`;
const adw = (ctx, n) => `<div class="wrap adw">${ad(ctx, n)}</div>`;
const each = f => ({ e: f('e'), b: f('b'), c: f('c'), d: f('d'), g: f('g') });

// ---------------- recipe page ----------------
function recipeParts(ctx, r, related) {
  const { t, u } = ctx;
  const n = r.nutrition_per_serving, H = r.health, prem = r.access === 'premium';
  const P = {};
  P.crumbs = crumbs(ctx, [[`chapter/${r.chapter}/`, t.chapters[r.chapter].name], [`dish/${r.dish}/`, r.dish_title], [null, r.flavour]]);
  // 'Inspired by' credit (plain text, no links): 1-3 locked-list sources from the recipe's research file
  const insp = (r.inspired_by || []).slice(0, 3).map(esc);
  const inspTxt = insp.length ? `${t.ui.inspiredBy} ${insp.length > 1 ? insp.slice(0, -1).join(', ') + ` ${t.ui.and} ` + insp[insp.length - 1] : insp[0]}.` : '';
  P.h1 = `<h1>${esc(r.title)}</h1>${inspTxt ? `<p class="insp">${inspTxt}</p>` : ''}`;
  P.src = `<div class="src"><a href="${u(`dish/${r.dish}/`)}">${esc(r.dish_title)}</a> · ${esc(r.flavour)} · ${esc(r.cuisine)}</div><p class="rsum">${esc(r.summary)}</p>`;
  P.stats = `<div class="stats"><div><small>${t.ui.prep}</small><b>${mins(r.prep_min)}</b></div><div><small>${t.ui.cook}</small><b>${mins(r.cook_min)}</b></div><div><small>${t.ui.total}</small><b>${mins(r.total_min)}</b></div><div><small>${t.ui.difficulty}</small><b>${t.difficulty[r.difficulty]}</b></div><div><small>Per serving</small><b>${Math.round(n.kcal)} kcal</b></div></div>`;
  P.badges = `<div class="badges">${accessTag(ctx, r)}${badges(ctx, r)}</div>`;
  const scalerFull = `<div class="scaler" data-base="${r.servings}" role="group" aria-label="${t.ui.servings}"><span class="sl">${t.ui.servings}</span><button type="button" class="sb" data-scale="-1" aria-label="Fewer servings">−</button><output class="sn" id="servings" aria-live="polite">${r.servings}</output><button type="button" class="sb" data-scale="1" aria-label="More servings">+</button><span class="so">Recipe makes ${r.servings}</span></div>`;
  const scalerLocked = `<div class="scaler"><span class="sl">${t.ui.servings}</span><span class="so">Makes ${r.servings}</span></div>`;
  P.scaler = `<div id="r-scale">${prem ? scalerLocked : scalerFull}</div>`;
  P.marks = `<span class="marks"><button type="button" class="heart fav-btn" data-slug="${r.slug}" aria-pressed="false">${ICON.heart}<span class="fav-label">${t.ui.save}</span></button></span>`;
  P.cook = `<button type="button" class="btn cookbtn${prem ? ' premium-only' : ''}" id="cook-btn" aria-pressed="false">▶ ${t.ui.cookMode}</button><button type="button" class="btn ghost${prem ? ' premium-only' : ''}" id="print-btn">${t.ui.print}</button>`;
  P.ctrls = `<div class="ctrls">${P.scaler}</div><div class="ctrls">${P.marks}${P.cook}</div>`;
  P.img = img(ctx, r, '(min-width:1100px) 560px, 100vw', 'rimg-main', true);
  P.imgUrl = imgSrc(ctx, r, 1200);
  P.allerg = `<span class="alh">${t.ui.allergens}</span><div class="algrid">${Object.entries(t.allergens).map(([k, v]) => `<span class="al${r.allergenKeys.includes(k) ? ' on' : ''}">${esc(v.replace('Cereals containing gluten', 'Gluten'))}</span>`).join('')}</div><p class="nutnote">${r.allergenKeys.length ? '' : t.ui.noAllergens + ' '}${t.ui.allergenNote}</p>`;
  // ingredients (full / names only)
  const groups = [];
  for (const ing of r.ingredients) { const g = ing.group || ''; if (!groups.length || groups[groups.length - 1].g !== g) groups.push({ g, items: [] }); groups[groups.length - 1].items.push(ing); }
  const ingFull = `<p class="unit">Metric · ${r.servings} servings</p>` + groups.map(gr => `${gr.g ? `<h4 class="ingg" role="heading" aria-level="3">${esc(gr.g)}</h4>` : ''}<ul class="ing">${gr.items.map(i => `<li data-qty="${typeof i.qty === 'number' ? i.qty : ''}" data-unit="${esc(i.unit)}"><b class="q">${esc(formatQty(i.qty, i.unit))}</b> ${esc(i.item)}${i.note ? ` <small>${esc(i.note)}</small>` : ''}</li>`).join('')}</ul>`).join('');
  const ingNames = `<p class="unit">${LOCK} Ingredient names · quantities with ${t.ui.premium}</p><ul class="ing names">${r.ingredients.map(i => `<li>${esc(i.item)}</li>`).join('')}</ul>`;
  P.ingTitle = t.ui.ingredients;
  P.ing = `<div id="r-ing">${prem ? ingNames : ingFull}</div>`;
  // method
  const stepsFull = `<ol class="steps">${r.steps.map((s, i) => `<li class="step" id="step-${i + 1}"><span class="n">${i + 1}</span><p><b>${esc(s.title)}.</b> ${esc(s.text)}</p></li>`).join('')}</ol>`;
  const lockCard = `<div class="lock-card"><span class="lock-ic">${LOCK}</span><h3>${t.ui.lockTitle}</h3><p>${t.ui.lockText}</p><p><a class="btn" href="${u('plans/')}">${t.ui.lockCta}</a></p><p class="nutnote">${t.ui.lockSoon}</p></div>`;
  const stepsLocked = `${lockCard}<ol class="steps blurred" aria-hidden="true">${r.steps.map((s, i) => `<li class="step"><span class="n">${i + 1}</span><p>Premium members see the full method here, step by step, with timings and the details that make it work.</p></li>`).join('')}</ol>`;
  P.methTitle = t.ui.method;
  P.steps = `<div id="r-steps">${prem ? stepsLocked : stepsFull}</div>`;
  P.stepsList = r.steps;
  const extraFull = `<div class="extra"><div class="xf"><h4 role="heading" aria-level="3">${t.ui.tips}</h4><ul class="lst">${r.tips.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div><div class="xf"><h4 role="heading" aria-level="3">${t.ui.storage}</h4><p>${esc(r.storage)}</p></div></div>`;
  P.extra = `<div id="r-extras">${prem ? '' : extraFull}</div>`;
  P.misc = `<h4 role="heading" aria-level="3">${t.ui.equipment}</h4><div class="s"><ul class="lst">${r.equipment.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>`;
  // why it's healthy
  let why = '';
  if (ctx.cfg.healthyLabels !== false && (H.highProtein.pass || H.who.pass)) {
    why = `<div class="infobox why"><h4>${t.ui.whyHealthy}</h4>`;
    if (H.highProtein.pass) why += `<div class="whyb"><span class="bdg hp">${t.nav.protein}</span><p><b>${n.protein_g} g protein</b> for <b>${Math.round(n.kcal)} kcal</b> = <b>${H.highProtein.value} g per 100 kcal</b>. Our High Protein label needs at least ${H.highProtein.threshold} g per 100 kcal. <a href="${u('high-protein/')}">How we decide</a></p></div>`;
    if (H.who.pass) why += `<div class="whyb"><span class="bdg h">${t.nav.who}</span><ul class="checks">${H.who.checks.map(c => `<li><span class="ok" aria-hidden="true">✓</span><b>${c.label}:</b> ${c.value}${c.unit && c.unit !== 'g' ? ' ' + c.unit : c.unit ? ' g' : ''} <span class="mute">(${t.ui.limit} ${c.op} ${c.limit}${typeof c.limit === 'number' ? (c.unit === 'g' ? ' g' : '%') : ''})</span></li>`).join('')}</ul><p class="nutnote">Per serving, worked out from the nutrition table against <a href="${u('who-healthy/')}">our WHO-based rule</a>. Not endorsed by WHO.</p></div>`;
    why += '</div>';
  }
  P.info = why;
  const nrow = (k, v, unit, sub) => `<tr${sub ? ' class="sub"' : ''}><td>${t.nutr[k] || k}</td><td>${v}${unit}</td></tr>`;
  P.nutTitle = `<h2>${t.ui.nutrition} <small>(${t.ui.nutritionNote.toLowerCase()})</small></h2>`;
  P.nutT = `<table class="nut"><thead><tr><th scope="col">Per serving</th><th scope="col">Amount</th></tr></thead><tbody>${nrow('kcal', Math.round(n.kcal), ' kcal')}${nrow('protein_g', n.protein_g, ' g')}${nrow('carbs_g', n.carbs_g, ' g')}${nrow('sugar_g', n.sugar_g, ' g', 1)}<tr class="sub"><td>of which free sugars</td><td>${n.free_sugar_g} g</td></tr>${nrow('fat_g', n.fat_g, ' g')}${nrow('satfat_g', n.satfat_g, ' g', 1)}${nrow('fibre_g', n.fibre_g, ' g')}${nrow('salt_g', n.salt_g, ' g')}</tbody></table>`;
  P.nutX = `<h3 class="h4s">${t.ui.proteinPer100}</h3><p class="bignut"><b>${H.highProtein.value} g</b> <span>${ctx.cfg.healthyLabels === false ? '' : H.highProtein.pass ? `meets the High Protein rule (≥ ${H.highProtein.threshold} g)` : `High Protein needs ≥ ${H.highProtein.threshold} g`}</span></p><p class="nutnote">${esc(r.nutrition_source)}</p>`;
  P.nut = `<section class="wrap rnut"><div>${P.nutTitle}${P.nutT}</div><div>${P.nutX}</div></section>`;
  P.flv = related.length ? `<section class="wrap flv"><h2>${t.ui.moreIn} ${esc(r.dish_title)}</h2>${grid(ctx, related)}</section>` : '';
  P.ad1 = adw(ctx, 1); P.ad2 = adw(ctx, 2);
  P.premTpl = prem ? `<template id="premium-full"><div data-into="r-scale">${scalerFull}</div><div data-into="r-ing">${ingFull}</div><div data-into="r-steps">${stepsFull}</div><div data-into="r-extras">${extraFull}</div></template>` : '';
  P.cookBar = `<div class="cook-bar" id="cook-bar" hidden><button type="button" class="btn ghost" data-step="prev">${t.ui.prev}</button><span><b id="cook-pos"></b><small id="cook-status"></small></span><button type="button" class="btn" data-step="next">${t.ui.next}</button><button type="button" class="ghostbtn" data-step="exit" aria-label="${t.ui.exit}">✕</button></div>`;
  P.tail = P.premTpl + P.cookBar;
  return P;
}
const recWrap = (r, html) => `<article class="recipe${r.access === 'premium' ? ' is-locked' : ''}">${html}</article>`;
const REC = {
  e: (P, r) => `<section class="ehero rh" style="--hero-img:url(&quot;${P.imgUrl}&quot;)"><div class="eshade"></div><div class="wrap ehin">${P.crumbs}${P.h1}${P.src}</div></section><section class="wrap estrip">${P.stats}${P.badges}</section><section class="wrap ectl">${P.ctrls}</section>${P.ad1}<section class="wrap alstrip">${P.allerg}</section><section class="wrap ebody"><aside class="eing"><h2>${P.ingTitle}</h2>${P.ing}</aside><div class="emeth"><h2>${P.methTitle}</h2>${P.steps}${P.extra}</div></section><section class="wrap eside">${P.info}<div class="emisc">${P.misc}</div></section>${P.nut}${P.ad2}${P.flv}`,
  b: (P, r, ctx) => `<section class="book wrap"><div class="spread rec"><div class="page left"><div class="runhead"><span>${esc(ctx.t.chapters[r.chapter].name)}</span><span>${esc(ctx.t.difficulty[r.difficulty])}</span></div><figure class="plate">${P.img}</figure>${P.crumbs}${P.h1}<div class="orn">❦</div>${P.src}${P.stats}${P.badges}${P.ctrls}<h2 class="pageh">${P.ingTitle}</h2>${P.ing}<span class="folio">p. 1</span></div><div class="page right"><div class="runhead"><span>${esc(r.title)}</span><span>${esc(ctx.cfg.brand)}</span></div><h2 class="pageh">${P.methTitle}</h2>${P.steps}<div class="margin">${P.info}</div>${P.extra}${P.misc}<div class="alstrip">${P.allerg}</div><span class="folio">p. 2</span></div></div></section>${P.ad1}${P.nut}${P.ad2}${P.flv}`,
  c: (P, r) => `<section class="wrap crh"><figure class="polaroid big tilt">${P.img}<figcaption>${esc(r.flavour)}</figcaption></figure><div class="cnote">${P.crumbs}${P.h1}${P.src}${P.stats}${P.badges}${P.ctrls}</div>${P.info ? `<div class="cnote pink catn">${P.info}</div>` : ''}</section>${P.ad1}<section class="wrap cboard"><div class="notepad"><h2>${P.ingTitle}</h2>${P.ing}</div><div class="ccards"><h2>${P.methTitle}</h2>${P.steps}${P.extra}</div></section><section class="wrap cboard2"><div class="cnote stick alst">${P.allerg}</div><div class="icard">${P.misc}</div></section>${P.nut}${P.ad2}${P.flv}`,
  d: (P, r) => {
    const pager = r.access === 'premium' ? '' : `<div class="dpage" id="dpager" hidden>${P.stepsList.map((s, i) => `<div class="dpstep" data-i="${i}"${i ? ' hidden' : ''}><div class="dpn">${i + 1}</div><p class="dpt"><b>${esc(s.title)}.</b> ${esc(s.text)}</p></div>`).join('')}<div class="dpnav"><button type="button" class="btn" data-dp="-1">← Back</button><span class="cdots">${P.stepsList.map((s, i) => `<button type="button" class="cdot${i ? '' : ' on'}" data-dgo="${i}" aria-label="Step ${i + 1}"></button>`).join('')}</span><button type="button" class="btn" data-dp="1">Next →</button></div><div class="dpcount">Step <b id="dp-i">1</b> / ${P.stepsList.length}</div></div>`;
    return `<section class="wrap drh"><span class="arch big">${P.img}</span><div class="dribbon">${P.crumbs}${P.h1}</div>${P.src}${P.stats}${P.badges}${P.ctrls}</section>${P.ad1}<section class="wrap dneed"><h2>What you need</h2>${P.ing}</section><section class="wrap dsteps"><div class="dsh"><h2>${P.methTitle}</h2>${pager ? '<button type="button" class="chip" id="dall" aria-pressed="false">One step at a time</button>' : ''}</div>${pager}${P.steps}${P.extra}</section><section class="wrap dmore">${P.info}<div class="dcard">${P.misc}</div><div class="dcard alstrip">${P.allerg}</div></section>${P.nut}${P.ad2}${P.flv}`;
  },
  g: (P, r) => `<section class="wrap grec"><div class="gt gimg">${P.img}</div><div class="gt gtitle">${P.crumbs}${P.h1}${P.src}${P.badges}</div><div class="gt gstats">${P.stats}</div><div class="gt gscale">${P.scaler}</div><div class="gt gmarks">${P.marks}${P.cook}</div><div class="gt ging"><h2>${P.ingTitle}</h2>${P.ing}</div><div class="gt gmeth"><h2>${P.methTitle}</h2>${P.steps}${P.extra}</div>${P.info ? `<div class="gt ginfo">${P.info}</div>` : ''}<div class="gt galg">${P.allerg}</div><div class="gt gmisc">${P.misc}</div><div class="gt gnut">${P.nutTitle}${P.nutT}</div><div class="gt gnutx">${P.nutX}</div></section>${P.ad1}${P.ad2}${P.flv}`
};
function recipePage(ctx, r, related) {
  const { t, cfg } = ctx;
  const n = r.nutrition_per_serving, H = r.health, prem = r.access === 'premium';
  const P = recipeParts(ctx, r, related);
  const views = each(d => recWrap(r, REC[d](P, r, ctx) + P.tail));
  const diets = { 'gluten-free': 'GlutenFreeDiet', vegan: 'VeganDiet', vegetarian: 'VegetarianDiet' };
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'Recipe', name: r.title, description: r.summary,
    image: r.img ? [ctx.abs(r.img.w1200)] : undefined, author: { '@type': 'Organization', name: cfg.brand },
    recipeCategory: t.categories[r.category], recipeCuisine: r.cuisine, recipeYield: `${r.servings} servings`,
    prepTime: iso(r.prep_min), cookTime: iso(r.cook_min), totalTime: iso(r.total_min),
    keywords: [...r.dietTags.map(d => t.diets[d]), ctx.cfg.healthyLabels !== false && H.highProtein.pass && 'high protein'].filter(Boolean).join(', ') || undefined,
    suitableForDiet: r.dietTags.filter(d => diets[d]).map(d => `https://schema.org/${diets[d]}`),
    recipeIngredient: prem ? r.ingredients.map(i => i.item) : r.ingredients.map(i => (i.unit === 'to taste' ? `${i.item}, to taste` : `${formatQty(i.qty, i.unit)} ${i.item}`) + (i.note ? ` (${i.note})` : '')),
    recipeInstructions: prem ? undefined : r.steps.map((s, i) => ({ '@type': 'HowToStep', name: s.title, text: s.text, url: ctx.abs(r.url) + `#step-${i + 1}` })),
    nutrition: { '@type': 'NutritionInformation', servingSize: '1 serving', calories: `${Math.round(n.kcal)} kcal`, proteinContent: `${n.protein_g} g`, carbohydrateContent: `${n.carbs_g} g`, sugarContent: `${n.sugar_g} g`, fatContent: `${n.fat_g} g`, saturatedFatContent: `${n.satfat_g} g`, fiberContent: `${n.fibre_g} g`, sodiumContent: `${Math.round(n.salt_g * 400)} mg` },
    tool: r.equipment.map(e => ({ '@type': 'HowToTool', name: e }))
  };
  if (!jsonld.suitableForDiet.length) delete jsonld.suitableForDiet;
  if (prem) jsonld.isAccessibleForFree = false;
  return { path: r.url, title: r.title, description: r.summary, image: r.img && r.img.w1200, imageAlt: r.img ? (r.image_alt || r.title) : null, preload: r.img ? P.imgUrl : null, ogType: 'article', views, jsonld, bodyClass: 'page-recipe', navKey: 'recipes', scripts: [ctx.assets.js.recipe] };
}

// ---------------- chapters and dishes ----------------
const dishCoverUrl = (ctx, d, w) => d.cover && d.cover.img ? ctx.u(w === 600 ? d.cover.img.w600 : d.cover.img.w1200) : ctx.u(`img/ph/${d.flavours[0].category}.svg`);
const dishImg = (ctx, d) => d.cover ? img(ctx, d.cover, CARD_SIZES, '', false) : `<img src="${dishCoverUrl(ctx, d)}" alt="" width="1200" height="900" loading="lazy" decoding="async">`;
const photoAlt = (ctx, url, fb) => esc(ctx.photoAlt ? ctx.photoAlt(url, fb) : '');
const chCover = (ctx, ch, design) => { const p = ctx.covers && ctx.covers[design || 'e'] && ctx.covers[design || 'e'][ch.key]; if (p) return ctx.u(p); const d = ch.dishes.find(x => x.cover) || ch.dishes[0]; return d ? dishCoverUrl(ctx, d, 600) : ''; };
function dishCard(ctx, d) {
  const { t, u } = ctx, n = d.flavours.length, kc = d.flavours.map(r => Math.round(r.nutrition_per_serving.kcal));
  const range = Math.min(...kc) === Math.max(...kc) ? `${kc[0]} kcal` : `${Math.min(...kc)}–${Math.max(...kc)} kcal`;
  const np = d.flavours.filter(r => r.access === 'premium').length;
  return `<a class="rc dish-card" href="${u(`dish/${d.slug}/`)}"><span class="rimg">${dishImg(ctx, d)}</span><span class="rcb"><span class="no">${n} ${n === 1 ? t.ui.flavour : t.ui.flavours}</span><h3>${esc(d.title)}</h3><span class="meta">${ICON.clock} from ${mins(Math.min(...d.flavours.map(r => r.total_min)))} · ${range}</span><span class="bdgs">${d.flavours.some(r => r.access === 'free') ? `<span class="bdg free">${t.ui.free} classic</span>` : ''}${np ? `<span class="bdg prem">${LOCK}${np} premium</span>` : ''}</span></span></a>`;
}
function flavourCard(ctx, r) {
  const { t, u } = ctx, n = r.nutrition_per_serving, prem = r.access === 'premium';
  return `<a class="rc card flavour-card${prem ? ' is-prem' : ''}" href="${u(r.url)}" data-slug="${r.slug}"><span class="rimg"><span class="favdot" title="In your favourites">${ICON.heart}</span>${prem ? `<span class="lockdot">${LOCK}<span class="sr">${t.ui.premium}</span></span>` : ''}${img(ctx, r, CARD_SIZES, '', false)}</span><span class="rcb"><span class="no">${prem ? `${LOCK} ${t.ui.premium}` : t.ui.free}</span><h3>${esc(r.flavour)}</h3><span class="nbadge"><b>${Math.round(n.kcal)}</b> kcal <i></i> <b>${Math.round(n.protein_g)} g</b> protein</span><span class="meta">${ICON.clock} ${mins(r.total_min)} · ${t.difficulty[r.difficulty]}</span><span class="bdgs">${badges(ctx, r)}</span></span></a>`;
}
function chapterChips(ctx, chapters, current) {
  const { t, u } = ctx;
  return `<span class="fl">${t.ui.chapters}</span>${chapters.map(c => `<a class="chip${c.key === current ? ' on' : ''}" href="${u(`chapter/${c.key}/`)}"${c.key === current ? ' aria-current="page"' : ''}>${esc(t.chapters[c.key].name)}</a>`).join('')}`;
}
const chapterNav = (ctx, chapters, current) => `<nav class="chips chnav" aria-label="${ctx.t.ui.chapters}">${chapterChips(ctx, chapters, current)}</nav>`;
// shared header variants for chapter + dish pages (vChapter layouts)
function headVariant(d, { cr, num, name, dek, cov, chips, slot, alt }) {
  const ds = slot ? ` data-slot="${slot}"` : '';
  const img = cov ? `<img${ds} src="${cov}" alt="${alt || ''}" width="1200" height="900" fetchpriority="high" decoding="async">` : '';
  const fbar = `<div class="fbar"><div class="wrap fbin">${chips}</div></div>`;
  if (d === 'c') return `<section class="wrap chead"><div class="cnote">${cr}<h1>${name}</h1><p class="dek">${dek}</p></div>${img ? `<figure class="polaroid tilt">${img}<figcaption>${num}</figcaption></figure>` : ''}</section>${fbar}`;
  if (d === 'd') return `<section class="wrap dchap">${img ? `<span class="arch big">${img}</span>` : ''}<div class="dribbon">${cr}<h1>${name}</h1><p class="dek">${dek}</p></div></section>${fbar}`;
  if (d === 'g') return `<section class="wrap gchap"><div class="gt gimg">${img}</div><div class="gt gtitle">${cr}<h1>${name}</h1><p class="dek">${dek}</p></div><div class="gt gnum"><small>No.</small><b>${num}</b></div><div class="gt gcount"><small>${'Here'}</small><b>${num}</b></div><div class="gt gfil">${chips}</div></section>`;
  return `<section class="echap"${ds} style="--hero-img:url(&quot;${cov}&quot;)"><div class="eshade"></div><div class="wrap ehin">${cr}<div class="bignum">${num}</div><h1>${name}</h1><p class="dek">${dek}</p></div></section>${fbar}`;
}
function listPageViews(ctx, h0, gridHtml, below, a1, a2) {
  return each(d => {
    const h = { ...h0, cov: typeof h0.cov === 'function' ? h0.cov(d) : h0.cov }; h.alt = h.cov ? photoAlt(ctx, h.cov, h0.altFb) : '';
    if (d === 'b') {
      const img = h.cov ? `<figure class="plate"><img${h.slot ? ` data-slot="${h.slot}"` : ''} src="${h.cov}" alt="${h.alt || ''}" width="1200" height="900" fetchpriority="high" decoding="async"></figure>` : '';
      return `<section class="book wrap"><div class="spread"><div class="page left opener">${h.cr}<div class="bignum">${h.num}</div><h1>${h.name}</h1><div class="orn">❦</div><p class="dek">${h.dek}</p>${img}<span class="folio">${h.num}</span></div><div class="page right"><div class="runhead"><span>${h.name}</span><span>${h.runner}</span></div><div class="fbin pagef">${h.chips}</div>${h.gridTitle ? `<h2 class="pageh">${h.gridTitle}</h2>` : ''}${gridHtml}</div></div></section>${a1}${below}${a2}`;
    }
    const head = headVariant(d, h).replace(`<b>${h.num}</b></div><div class="gt gfil">`, `<b>${h.count}</b></div><div class="gt gfil">`).replace("<small>Here</small>", `<small>${h.countLabel}</small>`);
    return `${head}${a1}<section class="sec"><div class="wrap">${h.gridTitle ? `<div class="sh2"><h2>${h.gridTitle}</h2><span>${h.side || ''}</span></div>` : ''}${gridHtml}</div></section>${below}${a2}`;
  });
}
function chapterPage(ctx, ch, chapters) {
  const { t, u } = ctx, c = t.chapters[ch.key], nR = ch.dishes.reduce((a, d) => a + d.flavours.length, 0);
  const idx = chapters.indexOf(ch) + 1;
  const h = { cr: crumbs(ctx, [['chapters/', t.ui.chapters], [null, c.name]]), num: num2(idx), name: esc(c.name), dek: `${esc(c.intro)} ${ch.dishes.length} dish${ch.dishes.length === 1 ? '' : 'es'} · ${nR} recipe${nR === 1 ? '' : 's'}.`, cov: dd => chCover(ctx, ch, dd), slot: `cover:${ch.key}`, chips: chapterChips(ctx, chapters, ch.key), runner: t.groups[ch.group], gridTitle: 'Dishes', side: `${ch.dishes.length} dish${ch.dishes.length === 1 ? '' : 'es'}`, count: ch.dishes.length, countLabel: 'Dishes', altFb: c.name };
  const g = `<div class="rgrid dishes">${ch.dishes.map(d => dishCard(ctx, d)).join('')}</div>`;
  const cov = ctx.covers && ctx.covers[ctx.cfg.defaultDesign] && ctx.covers[ctx.cfg.defaultDesign][ch.key];
  let views = listPageViews(ctx, h, g, '', adw(ctx, 1), adw(ctx, 2)), head = '', scripts;
  if (ch.key === 'drinks') { // every drink recipe on the site as a photo showcase, above the chapter page
    const show = require('./kitchen').drinksShowcase(ctx, ch.dishes.flatMap(d => d.flavours));
    if (show) { views = Object.fromEntries(Object.entries(views).map(([k, v]) => [k, show + v])); head = `<style>${DRINKS_CSS.replace(/\n\s*/g, '')}</style>`; scripts = [ctx.assets.js.drinks]; }
  }
  return { path: `chapter/${ch.key}/`, title: c.name, description: `${c.name}: ${c.intro}`, image: cov, preload: chCover(ctx, ch, ctx.cfg.defaultDesign), views, head, scripts, navKey: 'chapters' };
}
function dishPage(ctx, d, ch) {
  const { t, u } = ctx, nF = d.flavours.length;
  const others = ch.dishes.filter(x => x !== d).slice(0, 4);
  const h = { cr: crumbs(ctx, [['chapters/', t.ui.chapters], [`chapter/${ch.key}/`, t.chapters[ch.key].name], [null, d.title]]), num: num2(nF), name: esc(d.title), dek: esc(d.intro), cov: d.cover ? dishCoverUrl(ctx, d, 1200) : '', chips: `<span class="fl">${nF} ${nF === 1 ? t.ui.flavour : t.ui.flavours}</span>${d.flavours.map(r => `<a class="chip" href="${u(r.url)}">${r.access === 'premium' ? LOCK + ' ' : ''}${esc(r.flavour)}</a>`).join('')}`, runner: esc(t.chapters[ch.key].name), gridTitle: t.ui.chooseFlavour, side: `${nF} ${nF === 1 ? t.ui.flavour : t.ui.flavours}`, count: nF, countLabel: 'Flavours', altFb: d.title };
  const g = `<div class="rgrid flavours">${d.flavours.map(r => flavourCard(ctx, r)).join('')}</div>${d.flavours.some(r => r.access === 'premium') ? `<p class="prem-note">${LOCK} <span>Flavours marked with a lock are part of <a href="${u('plans/')}">Premium</a> (coming soon). The first flavour of every dish is free.</span></p>` : ''}`;
  const below = others.length ? `<section class="sec"><div class="wrap"><div class="sh2"><h2>${t.ui.otherDishes} ${esc(t.chapters[ch.key].name)}</h2></div><div class="rgrid dishes">${others.map(x => dishCard(ctx, x)).join('')}</div></div></section>` : '';
  return { path: `dish/${d.slug}/`, title: `${d.title}: ${nF} ${nF === 1 ? t.ui.flavour : t.ui.flavours}`, description: d.intro, views: listPageViews(ctx, h, g, below, adw(ctx, 1), adw(ctx, 2)), image: d.cover && d.cover.img && d.cover.img.w1200, preload: d.cover ? dishCoverUrl(ctx, d, 1200) : null, navKey: 'chapters' };
}
// chapter index (chapterGroups): book contents for B, picture tiles for the rest
function chapterGroups(ctx, d, chapters) {
  const { t, u } = ctx;
  const groups = ['salty', 'sweet', 'more'].map(g => [g, chapters.filter(c => c.group === g)]).filter(g => g[1].length);
  const nR = chapters.reduce((a, c) => a + c.n, 0);
  let i = 0;
  if (d === 'b') return `<section class="book wrap"><div class="spread single"><div class="page"><div class="runhead"><span>Contents</span><span>${nR} recipes</span></div><h1 class="pageh">${t.ui.chapters}</h1>${groups.map(([g, list]) => `<div class="ctg"><h3>${t.groups[g]}</h3>${list.map(c => `<a class="ctl" href="${u(`chapter/${c.key}/`)}"><span class="cn">${num2(++i)}</span><img data-slot="cover:${c.key}" loading="lazy" decoding="async"${ctx.photoWH ? ctx.photoWH(chCover(ctx, c, d)) : ''} src="${chCover(ctx, c, d)}" alt="${photoAlt(ctx, chCover(ctx, c, d), t.chapters[c.key].name)}"><span class="ct">${esc(t.chapters[c.key].name)}</span><em></em><b>${c.n}</b></a>`).join('')}</div>`).join('')}</div></div></section>`;
  return `<section class="sec chg"><div class="wrap"><div class="sh2"><h2>${t.ui.chapters}</h2><span>${nR} recipes</span></div>${groups.map(([g, list]) => `<div class="grp" id="g-${g}"><h3>${t.groups[g]}</h3></div><div class="tgrid">${list.map(c => `<a class="tile" href="${u(`chapter/${c.key}/`)}"><span class="ti"><img data-slot="cover:${c.key}" loading="lazy" decoding="async"${ctx.photoWH ? ctx.photoWH(chCover(ctx, c, d)) : ''} src="${chCover(ctx, c, d)}" alt="${photoAlt(ctx, chCover(ctx, c, d), t.chapters[c.key].name)}"></span><span class="num">${num2(++i)}</span><h4>${esc(t.chapters[c.key].name)}</h4><span class="cnt">${c.n} recipe${c.n === 1 ? '' : 's'}</span></a>`).join('')}</div>`).join('')}</div></section>`;
}
function chaptersPage(ctx, chapters) {
  return { path: 'chapters/', title: ctx.t.ui.chapters, description: 'Every chapter: pick a chapter, then a dish, then your flavour.', views: each(d => chapterGroups(ctx, d, chapters).replace('<h2>', '<h1>').replace('</h2>', '</h1>') + adw(ctx, 1) + adw(ctx, 2)), navKey: 'chapters' };
}

// opens the page section; the body that follows closes it
const pageHeadX = (kicker, h1, lead) => `<section class="sec"><div class="wrap"><span class="kicker">${kicker.replace(/^\/\/ ?/, '')}</span><div class="sh2"><h1>${h1}</h1></div>${lead ? `<p class="lead">${lead}</p>` : ''}`;
// ---------------- list pages ----------------
function allRecipesPage(ctx, recipes, cats, chapters) {
  const { t } = ctx;
  const diets = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'sugar-free'];
  const body = `${pageHeadX('// ' + recipes.length + ' ' + t.ui.recipesCount, t.ui.allRecipes, 'Search everything, or narrow it down by category, diet, time and difficulty. Every recipe is metric with nutrition per serving.')}
<div class="pbody">
<form id="filters" class="filters" role="search">
 <div class="frow"><label class="sbox"><span class="sr">${t.ui.search}</span>${ICON.search}<input id="q" type="search" placeholder="${t.ui.searchPh}" autocomplete="off" aria-label="${t.ui.search}"></label></div>
 <div class="frow">
 <label class="sel"><span>Chapter</span><select id="f-ch"><option value="">${t.ui.any}</option>${chapters.map(c => `<option value="${c.key}">${t.chapters[c.key].name}</option>`).join('')}</select></label>
 <label class="sel"><span>${t.ui.category}</span><select id="f-cat"><option value="">${t.ui.allCats}</option>${cats.map(c => `<option value="${c.key}">${t.categories[c.key]} (${c.list.length})</option>`).join('')}</select></label>
 <label class="sel"><span>${t.ui.time}</span><select id="f-time"><option value="">${t.ui.any}</option><option value="20">≤ 20 min</option><option value="30">≤ 30 min</option><option value="45">≤ 45 min</option><option value="60">≤ 1 hour</option></select></label>
 <label class="sel"><span>${t.ui.difficulty}</span><select id="f-diff"><option value="">${t.ui.any}</option><option value="easy">${t.difficulty.easy}</option><option value="medium">${t.difficulty.medium}</option><option value="hard">${t.difficulty.hard}</option></select></label>
 </div>
 <div class="frow"><span class="fl">${t.ui.diet}</span><span class="cs">${diets.map(d => `<label class="chip chk"><input type="checkbox" name="diet" value="${d}"><span>${t.diets[d]}</span></label>`).join('')}${ctx.cfg.healthyLabels === false ? '' : `<label class="chip chk"><input type="checkbox" name="diet" value="high-protein"><span>${t.nav.protein}</span></label><label class="chip chk"><input type="checkbox" name="diet" value="who-healthy"><span>${t.nav.who}</span></label>`}<label class="chip chk fav"><input type="checkbox" id="f-fav"><span>♥ ${t.ui.favOnly}</span></label></span></div>
 <div class="frow f-foot"><span id="count" aria-live="polite">${recipes.length} ${recipes.length === 1 ? 'recipe' : 'recipes'}</span><button type="button" class="chip ghost" id="f-clear">${t.ui.clear}</button></div>
</form>
${ad(ctx, 1)}
${grid(ctx, recipes, 'results')}
<p id="empty" class="empty" hidden>${t.ui.noResults}</p>
${ad(ctx, 2)}
</div></div></section>`;
  return { path: 'recipes/', navKey: 'recipes', title: t.ui.allRecipes, description: `All ${recipes.length} recipes with search and filters by category, diet, time and difficulty.`, body, scripts: [ctx.assets.js.list] };
}

function categoryPage(ctx, cat, list, cats) {
  const { t, u } = ctx;
  const name = t.categories[cat];
  const body = `${pageHeadX(`<a href="${u('recipes/')}">${t.ui.allRecipes}</a> / ${list.length} ${list.length === 1 ? 'recipe' : t.ui.recipesCount}`, esc(name), `${esc(name)} recipes, measured in grams and millilitres, with prep and cook times, allergens and nutrition per serving.`)}
<div class="pbody">
<nav class="chips catnav" aria-label="Categories">${cats.map(c => `<a class="chip${c.key === cat ? ' on' : ''}" href="${u(`category/${c.key}/`)}"${c.key === cat ? ' aria-current="page"' : ''}>${t.categories[c.key]}</a>`).join('')}</nav>
${ad(ctx, 1)}
${grid(ctx, list)}
${ad(ctx, 2)}
</div></div></section>`;
  return { path: `category/${cat}/`, navKey: 'recipes', title: `${name} recipes`, description: `${name} recipes from ${ctx.cfg.brand}: metric, with nutrition per serving.`, body };
}

function highProteinPage(ctx, list, HP_MIN) {
  const { t, u } = ctx;
  const rows = list.map(r => `<tr><th scope="row"><a href="${u(r.url)}">${esc(r.title)}</a></th><td>${r.nutrition_per_serving.protein_g} g</td><td>${Math.round(r.nutrition_per_serving.kcal)}</td><td><b>${r.health.highProtein.value} g</b></td></tr>`).join('');
  const body = `${pageHeadX('// Section', t.nav.protein, `Recipes that give you at least <b>${HP_MIN} g of protein for every 100 kcal</b> in a serving. That means at least 40% of the energy in the dish comes from protein.`)}
<div class="pbody">
<section class="rule box"><h2>The rule</h2><p><code>protein (g) per serving ÷ kcal per serving × 100 ≥ ${HP_MIN}</code></p><p class="mute">Calculated by the site build from each recipe's nutrition per serving. Nobody ticks this box by hand: if the numbers change, the label updates on the next build. 1 g of protein gives about 4 kcal, so 10 g per 100 kcal means roughly 40% of the energy is protein.</p></section>
${ad(ctx, 1)}
${list.length ? grid(ctx, list) : '<p class="empty">No recipes meet the rule yet.</p>'}
${list.length ? `<section class="box"><h2>The numbers</h2><div class="table-wrap"><table class="data"><thead><tr><th scope="col">Recipe</th><th scope="col">Protein</th><th scope="col">kcal</th><th scope="col">per 100 kcal</th></tr></thead><tbody>${rows}</tbody></table></div></section>` : ''}
${ad(ctx, 2)}
</div></div></section>`;
  return { path: 'high-protein/', navKey: 'protein', title: 'High protein recipes', description: `Recipes with at least ${HP_MIN} g protein per 100 kcal per serving, calculated from nutrition data.`, body };
}

const WHO_LINKS = [
  ['Healthy diet: WHO fact sheet (updated 26 January 2026)', 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet'],
  ['Saturated fatty acid and trans-fatty acid intake for adults and children: WHO guideline (2023)', 'https://www.who.int/publications/i/item/9789240073630'],
  ['Total fat intake for the prevention of unhealthy weight gain in adults and children: WHO guideline (2023)', 'https://www.who.int/publications/i/item/9789240073654'],
  ['Guideline: sugars intake for adults and children (WHO, 2015)', 'https://www.who.int/publications/i/item/9789241549028'],
  ['Guideline: sodium intake for adults and children (WHO, 2012)', 'https://www.who.int/publications/i/item/9789241504836'],
  ['Carbohydrate intake for adults and children: WHO guideline (2023), fibre and fruit & vegetables', 'https://www.who.int/publications/i/item/9789240073593']
];
function whoPage(ctx, list, total) {
  const { t, u } = ctx;
  const rows = list.map(r => { const c = Object.fromEntries(r.health.who.checks.map(x => [x.key, x])); const n = r.nutrition_per_serving;
    return `<tr><th scope="row"><a href="${u(r.url)}">${esc(r.title)}</a></th><td>${c.fat.value}%</td><td>${c.satfat.value}%</td><td>${c.sugar.value}%</td><td>${n.salt_g} g <small class="mute">/ ${c.salt.limit}</small></td><td>${n.fibre_g} g · ${r.health.who.veg} g</td></tr>`; }).join('');
  const body = `${pageHeadX('// Section', t.nav.who, 'Recipes whose numbers per serving fit the World Health Organization\'s advice for a healthy diet. Our own calculation from WHO guidance, not a WHO endorsement.')}
<div class="pbody">
<section class="rule box" id="rule"><h2>The exact rule</h2>
<p>A recipe gets the <span class="badge who">${t.nav.who}</span> label only if <b>one serving</b> meets <b>all five</b> conditions. Energy shares use 9 kcal per g of fat and 4 kcal per g of sugar.</p>
<div class="table-wrap"><table class="data rule-table"><thead><tr><th scope="col">#</th><th scope="col">Condition per serving</th><th scope="col">Formula</th><th scope="col">WHO basis</th></tr></thead><tbody>
<tr><td>1</td><td>Total fat ≤ 30% of energy</td><td><code>fat_g × 9 ÷ kcal ≤ 0.30</code></td><td>Adults: limit total fat to 30% of total energy or less (2023 total fat guideline; fact sheet)</td></tr>
<tr><td>2</td><td>Saturated fat &lt; 10% of energy</td><td><code>satfat_g × 9 ÷ kcal &lt; 0.10</code></td><td>Reduce saturated fat to 10% of energy, and further below 10% (2023 SFA/TFA guideline)</td></tr>
<tr><td>3</td><td>Free sugars &lt; 10% of energy</td><td><code>free_sugar_g × 4 ÷ kcal &lt; 0.10</code></td><td>Free sugars below 10% of total energy, ideally below 5% (2015 sugars guideline). Free sugars = added sugars plus sugars in honey, syrups and fruit juice; sugars inside whole fruit, veg and milk don't count.</td></tr>
<tr><td>4</td><td>Salt: main meals ≤ 1.7 g; snacks, sides, desserts and drinks ≤ 0.25 g per 100 kcal</td><td><code>salt_g ≤ 1.7</code> (meal) or <code>salt_g ≤ 5 × kcal ÷ 2000</code></td><td>Adults: less than 5 g salt (2 g sodium) a day (2012 sodium guideline). See below for why 1.7 g.</td></tr>
<tr><td>5</td><td>Some fibre or vegetables: fibre ≥ 1.25 g per 100 kcal <i>or</i> at least 80 g fruit &amp; veg</td><td><code>fibre_g ≥ 25 × kcal ÷ 2000</code> or <code>veg_g ≥ 80</code></td><td>At least 25 g naturally occurring fibre and 400 g fruit &amp; vegetables a day (2023 carbohydrate guideline; fact sheet)</td></tr>
</tbody></table></div>
<h3>Why these numbers</h3>
<ul class="plain">
<li><b>Percent of energy</b> is how WHO states its fat and sugar limits, so the rule works for any portion size: a recipe that stays under the limits serving by serving keeps a whole day under them too.</li>
<li><b>Salt 1.7 g per main meal:</b> WHO's limit is a daily amount (5 g), not a percentage. We give each of the three main meals (breakfast, lunch, dinner) an equal third: 5 ÷ 3 ≈ 1.7 g. Snacks, sides, desserts and drinks are smaller, so they get a share in proportion to their energy, 5 g per 2,000 kcal (0.25 g per 100 kcal), which stops a salty snack from passing.</li>
<li><b>Fibre and veg:</b> 25 g fibre per 2,000 kcal is 1.25 g per 100 kcal. The vegetable route uses one 80 g portion, the standard portion in WHO's "five portions, 400 g a day". The build adds up fruit and vegetable ingredients by weight (potatoes and other starchy roots are excluded, as WHO excludes them) and divides by servings.</li>
<li>Nutrition values are estimates per serving (see each recipe's source note), and WHO advice applies to whole diets over time. The label says the recipe fits that pattern; it is not medical advice.</li>
</ul>
<h3>Sources</h3><ul class="plain links">${WHO_LINKS.map(([l, h]) => `<li><a href="${h}" rel="noopener" target="_blank">${l}</a></li>`).join('')}</ul>
</section>
${ad(ctx, 1)}
<h2 class="sec-h">${list.length} of ${total} recipes pass</h2>
${list.length ? grid(ctx, list) : '<p class="empty">No recipes pass the rule yet.</p>'}
${list.length ? `<section class="box"><h2>Their numbers</h2><div class="table-wrap"><table class="data"><thead><tr><th scope="col">Recipe</th><th scope="col">Fat (% kcal)</th><th scope="col">Sat. fat</th><th scope="col">Free sugars</th><th scope="col">Salt / limit</th><th scope="col">Fibre · veg</th></tr></thead><tbody>${rows}</tbody></table></div></section>` : ''}
${ad(ctx, 2)}
</div></div></section>`;
  return { path: 'who-healthy/', navKey: 'who', title: 'WHO Healthy recipes', description: 'Recipes that meet WHO healthy-diet limits per serving: fat, saturated fat, free sugars, salt and fibre. The exact rule and sources.', body };
}

// ---------------- static pages ----------------
function plansPage(ctx) {
  const { u } = ctx;
  const li = a => a.map(x => `<li>${x}</li>`).join('');
  const body = `${pageHeadX('// Plans', 'Free vs Premium', `Every dish has a free classic flavour, in full. Premium unlocks every other flavour${ctx.cfg.healthyLabels === false ? '' : ', the High Protein and WHO Healthy versions'}, the AI cooking assistant, and removes ads. No payments are taken yet.`)}
<div class="pbody">
<div class="plans">
 <section class="plan"><h2>Free</h2><p class="price">€0 <small>forever</small></p><ul class="ticks">${li(['The first (classic) flavour of every dish, in full', 'All chapter and dish pages', 'Search and filters across every recipe', 'Nutrition, allergens and diet tags on every flavour', 'Servings scaler and cook mode', 'Favourites saved on this device', 'Supported by ads'])}</ul><a class="btn ghost" href="${u('recipes/')}">Start cooking</a></section>
 <section class="plan premium"><p class="kicker">// Coming soon</p><h2>Premium</h2><p class="price">Price TBC</p><ul class="ticks">${li(['Everything in Free', '<b>Every flavour</b> of every dish, with full quantities and method', ...(ctx.cfg.healthyLabels === false ? [] : ['The <b>High Protein</b> and <b>WHO Healthy</b> versions']), '<b>AI cooking assistant</b> (later): swaps, timings, scaling and fixes while you cook', '<b>No ads</b>'])}</ul><button type="button" class="btn" disabled aria-disabled="true">Coming soon</button><p class="mute small">Checkout will be handled by Lemon Squeezy (planned). Nothing can be bought yet.</p></section>
</div>
${ad(ctx, 1)}
<section class="box faq"><h2>Questions</h2>
<details><summary>Can I pay now?</summary><p>No. Premium isn't available yet and there is no checkout on the site. The buttons are placeholders.</p></details>
<details><summary>What can I see on a Premium flavour without Premium?</summary><p>The photo, the intro, the ingredient names${ctx.cfg.healthyLabels === false ? ' and the nutrition per serving' : ', the nutrition per serving and the healthy checks'}. The quantities, the method, tips and storage are for members.</p></details>
<details><summary>Will the free recipes stay free?</summary><p>Yes. The classic flavour of every dish, the chapter and dish pages, search, nutrition, cook mode and the scaler stay free.</p></details>
<details><summary>What will the AI assistant do?</summary><p>Answer questions about the recipe you're cooking: swaps for missing ingredients, how to scale, timing, and fixes. Its answers are suggestions; always use your own judgement on food safety and allergies.</p></details>
</section>
${ad(ctx, 2)}
</div></div></section>`;
  return { path: 'plans/', navKey: 'plans', title: 'Plans: Free vs Premium', description: `The classic flavour of every dish is free. Premium (coming soon) unlocks every flavour${ctx.cfg.healthyLabels === false ? '' : ', the healthy versions'}, the AI assistant and no ads.`, body };
}
function simplePage(ctx, path, title, html, description) {
  const parts = html.split(/(?=<h2)/);
  const first = parts.shift();
  const body = `<section class="sec"><div class="wrap prose">${first}${ad(ctx, 1)}${parts.join('')}${ad(ctx, 2)}</div></section>`;
  return { path, title, description, body };
}

module.exports = { chapterPage, dishPage, chapterNav, dishCard, flavourCard, card, LOCK, grid, adw, each, crumbs, sec, chapterGroups, chaptersPage, imgSrc, dishCoverUrl, chCover, num2, badges, recipePage, allRecipesPage, categoryPage, highProteinPage, whoPage, plansPage, simplePage, WHO_LINKS };
