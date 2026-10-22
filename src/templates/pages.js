'use strict';
const { esc, formatQty, iso, mins } = require('../lib/format');
const { ad } = require('./layout');

const img = (ctx, r, sizes, cls, eager) => {
  const a = esc(r.image_alt || r.title);
  if (!r.img) return `<img class="${cls}" src="${ctx.u(`img/ph/${r.category}.svg`)}" alt="" width="1200" height="900"${eager ? '' : ' loading="lazy"'} decoding="async">`;
  return `<img class="${cls}" src="${ctx.u(r.img.w600)}" srcset="${ctx.u(r.img.w600)} 600w, ${ctx.u(r.img.w1200)} 1200w" sizes="${sizes}" alt="${a}" width="${r.img.width}" height="${r.img.height}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
};

function badges(ctx, r) {
  const b = [];
  if (r.health.highProtein.pass) b.push(`<span class="badge hp">${ctx.t.nav.protein}</span>`);
  if (r.health.who.pass) b.push(`<span class="badge who">${ctx.t.nav.who}</span>`);
  return b.join('');
}

function card(ctx, r) {
  const { t, u } = ctx;
  const text = [r.title, r.summary, r.cuisine, t.categories[r.category], ...r.ingredients.map(i => i.item), ...r.dietTags.map(d => t.diets[d])].join(' ').toLowerCase();
  return `<li class="card reveal" data-slug="${r.slug}" data-cat="${r.category}" data-diet="${r.filterTags.join(' ')}" data-time="${r.total_min}" data-diff="${r.difficulty}" data-text="${esc(text)}">
<a href="${u(r.url)}"><div class="card-img">${img(ctx, r, '(min-width:1000px) 360px, (min-width:640px) 45vw, 92vw', '', false)}<span class="fav-dot" aria-hidden="true">♥</span></div>
<div class="card-body"><span class="kicker">${esc(t.categories[r.category])}</span><h3>${esc(r.title)}</h3>
<p class="card-meta">${mins(r.total_min)} · ${t.difficulty[r.difficulty]} · ${Math.round(r.nutrition_per_serving.kcal)} kcal</p>
<p class="badges">${badges(ctx, r)}${r.dietTags.map(d => `<span class="badge diet">${t.diets[d]}</span>`).join('')}</p></div></a></li>`;
}
const grid = (ctx, list, id) => `<ul class="cards"${id ? ` id="${id}"` : ''}>${list.map(r => card(ctx, r)).join('')}</ul>`;
const pageHead = (kicker, h1, lead) => `<header class="page-head wrap"><p class="kicker">${kicker}</p><h1 class="display">${h1}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</header>`;
const crumbs = (ctx, items) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${ctx.u('')}">${ctx.t.nav.home}</a>${items.map(([h, l]) => h ? ` / <a href="${ctx.u(h)}">${esc(l)}</a>` : ` / <span aria-current="page">${esc(l)}</span>`).join('')}</nav>`;

// ---------------- recipe page ----------------
function recipePage(ctx, r, related) {
  const { t, u, cfg } = ctx;
  const n = r.nutrition_per_serving, H = r.health;
  const groups = [];
  for (const ing of r.ingredients) {
    const g = ing.group || '';
    if (!groups.length || groups[groups.length - 1].g !== g) groups.push({ g, items: [] });
    groups[groups.length - 1].items.push(ing);
  }
  const ingHtml = groups.map(gr => `${gr.g ? `<h3 class="ing-group">${esc(gr.g)}</h3>` : ''}<ul class="ings">${gr.items.map(i =>
    `<li class="ing" data-qty="${typeof i.qty === 'number' ? i.qty : ''}" data-unit="${esc(i.unit)}"><span class="q">${esc(formatQty(i.qty, i.unit))}</span><span class="i">${esc(i.item)}${i.note ? ` <small>${esc(i.note)}</small>` : ''}</span></li>`).join('')}</ul>`).join('');
  const steps = r.steps.map((s, i) => `<li class="step" id="step-${i + 1}"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join('');
  const nrow = (k, v, unit, sub) => `<tr${sub ? ' class="sub"' : ''}><th scope="row">${t.nutr[k] || k}</th><td>${v}${unit}</td></tr>`;
  const nutrition = `<table class="nutr"><caption>${t.ui.nutrition} <small>(${t.ui.nutritionNote})</small></caption><tbody>
${nrow('kcal', Math.round(n.kcal), ' kcal')}${nrow('protein_g', n.protein_g, ' g')}${nrow('carbs_g', n.carbs_g, ' g')}${nrow('sugar_g', n.sugar_g, ' g', 1)}<tr class="sub"><th scope="row">of which free sugars</th><td>${n.free_sugar_g} g</td></tr>${nrow('fat_g', n.fat_g, ' g')}${nrow('satfat_g', n.satfat_g, ' g', 1)}${nrow('fibre_g', n.fibre_g, ' g')}${nrow('salt_g', n.salt_g, ' g')}
<tr class="p100"><th scope="row">${t.ui.proteinPer100}</th><td>${H.highProtein.value} g</td></tr></tbody></table>
<p class="src">${esc(r.nutrition_source)}</p>`;
  let why = '';
  if (H.highProtein.pass || H.who.pass) {
    why = `<section class="why" aria-labelledby="why-h"><h2 id="why-h">${t.ui.whyHealthy}</h2>`;
    if (H.highProtein.pass) why += `<div class="why-block"><h3><span class="badge hp">${t.nav.protein}</span></h3><p><b>${n.protein_g} g protein</b> for <b>${Math.round(n.kcal)} kcal</b> = <b>${H.highProtein.value} g per 100 kcal</b>. Our High Protein label needs at least ${H.highProtein.threshold} g per 100 kcal. <a href="${u('high-protein/')}">How we decide</a></p></div>`;
    if (H.who.pass) why += `<div class="why-block"><h3><span class="badge who">${t.nav.who}</span></h3><ul class="checks">${H.who.checks.map(c => `<li><span class="ok" aria-hidden="true">✓</span><b>${c.label}:</b> ${c.value}${c.unit && c.unit !== 'g' ? ' ' + c.unit : c.unit ? ' g' : ''} <span class="mute">(${t.ui.limit} ${c.op} ${c.limit}${typeof c.limit === 'number' ? (c.unit === 'g' ? ' g' : '%') : ''})</span></li>`).join('')}</ul><p class="mute small">Per serving, worked out from the nutrition table against <a href="${u('who-healthy/')}">our WHO-based rule</a>. Not endorsed by WHO.</p></div>`;
    why += '</section>';
  }
  const allergens = r.allergenKeys.length
    ? `<ul class="chips">${r.allergenKeys.map(a => `<li>${t.allergens[a]}</li>`).join('')}</ul>` : `<p>${t.ui.noAllergens}</p>`;
  const body = `<article class="recipe" itemscope>
<div class="wrap">
${crumbs(ctx, [['recipes/', t.ui.allRecipes], [`category/${r.category}/`, t.categories[r.category]], [null, r.title]])}
<div class="r-top">
 <div class="r-intro">
  <p class="kicker">${esc(t.categories[r.category])} · ${esc(r.cuisine)}</p>
  <h1 class="r-title">${esc(r.title)}</h1>
  <p class="lead">${esc(r.summary)}</p>
  <dl class="facts"><div><dt>${t.ui.prep}</dt><dd>${mins(r.prep_min)}</dd></div><div><dt>${t.ui.cook}</dt><dd>${mins(r.cook_min)}</dd></div><div><dt>${t.ui.total}</dt><dd>${mins(r.total_min)}</dd></div><div><dt>${t.ui.difficulty}</dt><dd>${t.difficulty[r.difficulty]}</dd></div><div><dt>Per serving</dt><dd>${Math.round(n.kcal)} kcal</dd></div></dl>
  <p class="badges">${badges(ctx, r)}${r.dietTags.map(d => `<span class="badge diet">${t.diets[d]}</span>`).join('')}</p>
  <div class="r-actions">
   <button type="button" class="btn sm fav-btn" data-slug="${r.slug}" aria-pressed="false"><span aria-hidden="true">♥</span> <span class="fav-label">${t.ui.save}</span></button>
   <button type="button" class="btn ghost sm" id="cook-btn" aria-pressed="false">${t.ui.cookMode}</button>
   <button type="button" class="btn ghost sm" id="print-btn">${t.ui.print}</button>
  </div>
 </div>
 <div class="r-img">${img(ctx, r, '(min-width:1000px) 560px, 100vw', '', true)}</div>
</div>
${ad(ctx, 1)}
<div class="r-body">
 <aside class="r-side">
  <section class="box ingredients" aria-labelledby="ing-h">
   <div class="ing-head"><h2 id="ing-h">${t.ui.ingredients}</h2>
    <div class="scaler" data-base="${r.servings}" role="group" aria-label="${t.ui.servings}"><button type="button" data-scale="-1" aria-label="Fewer servings">−</button><span><output id="servings" aria-live="polite">${r.servings}</output> <span class="mute">${t.ui.servings.toLowerCase()}</span></span><button type="button" data-scale="1" aria-label="More servings">+</button></div></div>
   ${ingHtml}
  </section>
  <section class="box" aria-labelledby="eq-h"><h2 id="eq-h">${t.ui.equipment}</h2><ul class="plain">${r.equipment.map(e => `<li>${esc(e)}</li>`).join('')}</ul></section>
  <section class="box allergens" aria-labelledby="al-h"><h2 id="al-h">${t.ui.allergens}</h2>${allergens}<p class="mute small">${t.ui.allergenNote}</p></section>
 </aside>
 <section class="r-method" aria-labelledby="m-h">
  <h2 id="m-h">${t.ui.method}</h2>
  <ol class="steps">${steps}</ol>
 </section>
</div>
${ad(ctx, 2)}
<div class="r-more">
 <section class="box nutrition">${nutrition}</section>
 ${why}
 <section class="box" aria-labelledby="tip-h"><h2 id="tip-h">${t.ui.tips}</h2><ul class="plain tips">${r.tips.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
 <section class="box" aria-labelledby="st-h"><h2 id="st-h">${t.ui.storage}</h2><p>${esc(r.storage)}</p></section>
</div>
${related.length ? `<section class="related"><h2>${t.ui.moreIn} ${esc(t.categories[r.category])}</h2>${grid(ctx, related)}</section>` : ''}
</div>
<div class="cook-bar" id="cook-bar" hidden><button type="button" class="btn ghost sm" data-step="prev">${t.ui.prev}</button><span><b id="cook-pos"></b><small id="cook-status"></small></span><button type="button" class="btn sm" data-step="next">${t.ui.next}</button><button type="button" class="icon-btn" data-step="exit" aria-label="${t.ui.exit}">✕</button></div>
</article>`;
  const diets = { 'gluten-free': 'GlutenFreeDiet', vegan: 'VeganDiet', vegetarian: 'VegetarianDiet' };
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'Recipe', name: r.title, description: r.summary,
    image: r.img ? [ctx.abs(r.img.w1200)] : undefined, author: { '@type': 'Organization', name: cfg.brand },
    recipeCategory: t.categories[r.category], recipeCuisine: r.cuisine, recipeYield: `${r.servings} servings`,
    prepTime: iso(r.prep_min), cookTime: iso(r.cook_min), totalTime: iso(r.total_min),
    keywords: [...r.dietTags.map(d => t.diets[d]), H.highProtein.pass && 'high protein'].filter(Boolean).join(', ') || undefined,
    suitableForDiet: r.dietTags.filter(d => diets[d]).map(d => `https://schema.org/${diets[d]}`),
    recipeIngredient: r.ingredients.map(i => (i.unit === 'to taste' ? `${i.item}, to taste` : `${formatQty(i.qty, i.unit)} ${i.item}`) + (i.note ? ` (${i.note})` : '')),
    recipeInstructions: r.steps.map((s, i) => ({ '@type': 'HowToStep', name: s.title, text: s.text, url: ctx.abs(r.url) + `#step-${i + 1}` })),
    nutrition: { '@type': 'NutritionInformation', servingSize: '1 serving', calories: `${Math.round(n.kcal)} kcal`, proteinContent: `${n.protein_g} g`, carbohydrateContent: `${n.carbs_g} g`, sugarContent: `${n.sugar_g} g`, fatContent: `${n.fat_g} g`, saturatedFatContent: `${n.satfat_g} g`, fiberContent: `${n.fibre_g} g`, sodiumContent: `${Math.round(n.salt_g * 400)} mg` },
    tool: r.equipment.map(e => ({ '@type': 'HowToTool', name: e }))
  };
  if (!jsonld.suitableForDiet.length) delete jsonld.suitableForDiet;
  return { path: r.url, title: r.title, description: r.summary, image: r.img && r.img.w1200, ogType: 'article', body, jsonld, bodyClass: 'page-recipe', scripts: [ctx.assets.js.recipe] };
}

// ---------------- list pages ----------------
function allRecipesPage(ctx, recipes, cats) {
  const { t } = ctx;
  const diets = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'sugar-free'];
  const body = `${pageHead('// ' + recipes.length + ' ' + t.ui.recipesCount, t.ui.allRecipes, 'Search everything, or narrow it down by category, diet, time and difficulty. Every recipe is metric with nutrition per serving.')}
<div class="wrap">
<form id="filters" class="filters" role="search">
 <label class="f-q"><span class="sr">${t.ui.search}</span><input id="q" type="search" placeholder="${t.ui.searchPh}" autocomplete="off" aria-label="${t.ui.search}"></label>
 <label><span>${t.ui.category}</span><select id="f-cat"><option value="">${t.ui.allCats}</option>${cats.map(c => `<option value="${c.key}">${t.categories[c.key]} (${c.list.length})</option>`).join('')}</select></label>
 <label><span>${t.ui.time}</span><select id="f-time"><option value="">${t.ui.any}</option><option value="20">≤ 20 min</option><option value="30">≤ 30 min</option><option value="45">≤ 45 min</option><option value="60">≤ 1 hour</option></select></label>
 <label><span>${t.ui.difficulty}</span><select id="f-diff"><option value="">${t.ui.any}</option><option value="easy">${t.difficulty.easy}</option><option value="medium">${t.difficulty.medium}</option><option value="hard">${t.difficulty.hard}</option></select></label>
 <fieldset class="f-diet"><legend>${t.ui.diet}</legend>${diets.map(d => `<label class="chk"><input type="checkbox" name="diet" value="${d}"><span>${t.diets[d]}</span></label>`).join('')}<label class="chk"><input type="checkbox" name="diet" value="high-protein"><span>${t.nav.protein}</span></label><label class="chk"><input type="checkbox" name="diet" value="who-healthy"><span>${t.nav.who}</span></label><label class="chk fav"><input type="checkbox" id="f-fav"><span>♥ ${t.ui.favOnly}</span></label></fieldset>
 <div class="f-foot"><span id="count" aria-live="polite">${recipes.length} ${recipes.length === 1 ? 'recipe' : 'recipes'}</span><button type="button" class="btn ghost sm" id="f-clear">${t.ui.clear}</button></div>
</form>
${ad(ctx, 1)}
${grid(ctx, recipes, 'results')}
<p id="empty" class="empty" hidden>${t.ui.noResults}</p>
${ad(ctx, 2)}
</div>`;
  return { path: 'recipes/', title: t.ui.allRecipes, description: `All ${recipes.length} recipes with search and filters by category, diet, time and difficulty.`, body, scripts: [ctx.assets.js.list] };
}

function categoryPage(ctx, cat, list, cats) {
  const { t, u } = ctx;
  const name = t.categories[cat];
  const body = `${pageHead(`<a href="${u('recipes/')}">${t.ui.allRecipes}</a> / ${list.length} ${list.length === 1 ? 'recipe' : t.ui.recipesCount}`, esc(name), `${esc(name)} recipes, measured in grams and millilitres, with prep and cook times, allergens and nutrition per serving.`)}
<div class="wrap">
<nav class="cat-nav" aria-label="Categories">${cats.map(c => `<a href="${u(`category/${c.key}/`)}"${c.key === cat ? ' aria-current="page"' : ''}>${t.categories[c.key]}</a>`).join('')}</nav>
${ad(ctx, 1)}
${grid(ctx, list)}
${ad(ctx, 2)}
</div>`;
  return { path: `category/${cat}/`, title: `${name} recipes`, description: `${name} recipes from ${ctx.cfg.brand}: metric, with nutrition per serving.`, body };
}

function highProteinPage(ctx, list, HP_MIN) {
  const { t, u } = ctx;
  const rows = list.map(r => `<tr><th scope="row"><a href="${u(r.url)}">${esc(r.title)}</a></th><td>${r.nutrition_per_serving.protein_g} g</td><td>${Math.round(r.nutrition_per_serving.kcal)}</td><td><b>${r.health.highProtein.value} g</b></td></tr>`).join('');
  const body = `${pageHead('// Section', t.nav.protein, `Recipes that give you at least <b>${HP_MIN} g of protein for every 100 kcal</b> in a serving. That means at least 40% of the energy in the dish comes from protein.`)}
<div class="wrap">
<section class="rule box"><h2>The rule</h2><p><code>protein (g) per serving ÷ kcal per serving × 100 ≥ ${HP_MIN}</code></p><p class="mute">Calculated by the site build from each recipe's nutrition per serving. Nobody ticks this box by hand: if the numbers change, the label updates on the next build. 1 g of protein gives about 4 kcal, so 10 g per 100 kcal means roughly 40% of the energy is protein.</p></section>
${ad(ctx, 1)}
${list.length ? grid(ctx, list) : '<p class="empty">No recipes meet the rule yet.</p>'}
${list.length ? `<section class="box"><h2>The numbers</h2><div class="table-wrap"><table class="data"><thead><tr><th scope="col">Recipe</th><th scope="col">Protein</th><th scope="col">kcal</th><th scope="col">per 100 kcal</th></tr></thead><tbody>${rows}</tbody></table></div></section>` : ''}
${ad(ctx, 2)}
</div>`;
  return { path: 'high-protein/', title: 'High protein recipes', description: `Recipes with at least ${HP_MIN} g protein per 100 kcal per serving, calculated from nutrition data.`, body };
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
  const body = `${pageHead('// Section', t.nav.who, 'Recipes whose numbers per serving fit the World Health Organization\'s advice for a healthy diet. Our own calculation from WHO guidance, not a WHO endorsement.')}
<div class="wrap">
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
</div>`;
  return { path: 'who-healthy/', title: 'WHO Healthy recipes', description: 'Recipes that meet WHO healthy-diet limits per serving: fat, saturated fat, free sugars, salt and fibre. The exact rule and sources.', body };
}

// ---------------- home ----------------
function homePage(ctx, recipes, cats, counts) {
  const { t, u } = ctx;
  const feat = recipes.slice(0, 6);
  const labels = ['Brioche bun', 'Cheddar', 'Beef patty', 'Lettuce', 'Tomato', 'Toasted base'];
  const tops = [22, 35, 46, 57, 66, 77];
  const hero = `<section class="hero" id="hero" aria-label="The Stack: a burger, layer by layer" data-frames="${u('hero/frames/')}" data-count="49">
 <div class="pin"><div class="glow"></div>
  <div class="copy" id="copy"><p class="kicker">// 01 · The Stack</p><h1 class="display">The<br>Stack<span class="serif">every layer earns its place</span></h1><p>Scroll to take it apart. Then cook it properly: metric recipes, honest nutrition, no life stories.</p></div>
  <div class="stage"><canvas id="cv" width="576" height="1018" role="img" aria-label="Photo of a smash burger separating into its layers"></canvas>
   <div class="labels">${labels.map((l, i) => `<div class="lab" style="top:${tops[i]}%"><span><em>0${i + 1}</em>${l}</span></div>`).join('')}</div></div>
  <p class="kicker hint">${t.ui.scroll}</p><a class="skip" href="#after">${t.ui.skipHero}</a><div class="bar" id="bar"></div>
 </div>
</section>`;
  const body = `${hero}
<section class="after" id="after"><div class="wrap">
 <p class="kicker">// 02 · The recipes</p>
 <h2 class="display big">Built at home.<br><span class="gold">Cooked properly.</span></h2>
 <p class="lead">${recipes.length} recipe${recipes.length === 1 ? '' : 's'} so far, all in grams and millilitres, with a servings scaler, cook mode and nutrition per serving.</p>
 <p class="cta"><a class="btn" href="${u('recipes/')}">${t.ui.seeAll}</a> <a class="btn ghost" href="${u('plans/')}">Free vs Premium</a></p>
</div></section>
<div class="wrap">
${ad(ctx, 1)}
<section><h2 class="sec-h">Latest recipes</h2>${grid(ctx, feat)}</section>
<section class="duo">
 <a class="promo reveal" href="${u('high-protein/')}"><span class="kicker">// ${counts.hp} recipe${counts.hp === 1 ? '' : 's'}</span><h2>${t.nav.protein}</h2><p>At least 10 g protein per 100 kcal, calculated from the numbers.</p><span class="more">See them →</span></a>
 <a class="promo reveal" href="${u('who-healthy/')}"><span class="kicker">// ${counts.who} recipe${counts.who === 1 ? '' : 's'}</span><h2>${t.nav.who}</h2><p>Fat, saturated fat, free sugars, salt and fibre within WHO limits per serving.</p><span class="more">See the rule →</span></a>
</section>
<section><h2 class="sec-h">Categories</h2><ul class="cat-tiles">${cats.map(c => `<li class="reveal"><a href="${u(`category/${c.key}/`)}"><b>${t.categories[c.key]}</b><small>${c.list.length} recipe${c.list.length === 1 ? '' : 's'}</small></a></li>`).join('')}</ul></section>
${ad(ctx, 2)}
</div>`;
  return { path: '', description: `${ctx.cfg.brand}: metric recipes with nutrition per serving, High Protein and WHO Healthy picks, cook mode and a servings scaler.`, body, overlayHeader: true, bodyClass: 'page-home', head: `<link rel="preload" as="image" href="${u('hero/frames/f01.webp')}">`, scripts: [ctx.assets.js.hero] };
}

// ---------------- static pages ----------------
function plansPage(ctx) {
  const { u } = ctx;
  const li = a => a.map(x => `<li>${x}</li>`).join('');
  const body = `${pageHead('// Plans', 'Free vs Premium', 'Everything you need to cook is free. Premium will add an AI cooking assistant and remove ads. No payments are taken yet.')}
<div class="wrap">
<div class="plans">
 <section class="plan reveal"><h2>Free</h2><p class="price">€0 <small>forever</small></p><ul class="ticks">${li(['Every recipe, with metric units', 'Servings scaler and cook mode', 'Nutrition, allergens and diet tags', 'High Protein and WHO Healthy sections', 'Favourites saved on this device', 'Supported by ads'])}</ul><a class="btn ghost" href="${u('recipes/')}">Start cooking</a></section>
 <section class="plan premium reveal"><p class="kicker">// Coming soon</p><h2>Premium</h2><p class="price">Price TBC</p><ul class="ticks">${li(['Everything in Free, <b>without ads</b>', '<b>AI cooking assistant</b>: ask about substitutions, timings, scaling and what to do when something goes wrong, while you cook', 'Favourites synced across your devices', 'Weekly meal plans and shopping lists', 'Early access to new recipes'])}</ul><button type="button" class="btn" disabled aria-disabled="true">Coming soon</button><p class="mute small">Checkout will be handled by Lemon Squeezy (planned). Nothing can be bought yet.</p></section>
</div>
${ad(ctx, 1)}
<section class="box faq"><h2>Questions</h2>
<details><summary>Can I pay now?</summary><p>No. Premium isn't available yet and there is no checkout on the site. The buttons are placeholders.</p></details>
<details><summary>Will the free recipes stay free?</summary><p>Yes. Recipes, the scaler, cook mode and nutrition stay free.</p></details>
<details><summary>What will the AI assistant do?</summary><p>Answer questions about the recipe you're cooking: swaps for missing ingredients, how to scale, timing, and fixes. Its answers are suggestions; always use your own judgement on food safety and allergies.</p></details>
</section>
${ad(ctx, 2)}
</div>`;
  return { path: 'plans/', title: 'Plans: Free vs Premium', description: 'Free recipes for everyone. Premium (coming soon) adds an AI cooking assistant and no ads.', body };
}
function simplePage(ctx, path, title, html, description) {
  const parts = html.split(/(?=<h2)/);
  const first = parts.shift();
  const body = `<div class="wrap prose">${first}${ad(ctx, 1)}${parts.join('')}${ad(ctx, 2)}</div>`;
  return { path, title, description, body };
}

module.exports = { grid, recipePage, allRecipesPage, categoryPage, highProteinPage, whoPage, homePage, plansPage, simplePage, WHO_LINKS };
