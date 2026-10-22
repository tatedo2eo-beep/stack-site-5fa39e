#!/usr/bin/env node
// Static multi-page build: content/recipes/*.json -> docs/ (one HTML file per page).
// Usage: node src/build.js [--validate-only] [--strict]
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = path.join(__dirname, '..');
const cfg = require(path.join(ROOT, 'site.config.js'));
const R = require('./lib/rules');
const { layout } = require('./templates/layout');
const P = require('./templates/pages');
const args = process.argv.slice(2);
const VALIDATE_ONLY = args.includes('--validate-only'), STRICT = args.includes('--strict');
const OUT = path.join(ROOT, cfg.outDir);
const C = { red: s => `\x1b[31m${s}\x1b[0m`, yel: s => `\x1b[33m${s}\x1b[0m`, grn: s => `\x1b[32m${s}\x1b[0m` };

// ---------- load + validate ----------
const CHAPTER_MAP = fs.existsSync(path.join(ROOT, 'tools/chapter-map.json')) ? require(path.join(ROOT, 'tools/chapter-map.json')) : {};
function loadRecipes() {
  const dir = path.join(ROOT, 'content/recipes');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  let errors = 0, warnings = 0; const out = []; const slugs = new Set();
  for (const f of files) {
    let r;
    try { r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
    catch (e) { console.log(C.red(`✗ ${f}: invalid JSON: ${e.message}`)); errors++; continue; }
    const pre = R.applyChapterDefaults(r, CHAPTER_MAP);
    const v = R.validate(r, f);
    v.warnings.push(...pre);
    if (r.slug && slugs.has(r.slug)) v.errors.push(`duplicate slug "${r.slug}"`);
    slugs.add(r.slug);
    if (r.image && !tamiRel(r.image)) v.errors.push(`image "${r.image}" is not one of the original cookbook photos (img/dishes); only those may be used`);
    if ((r.steps || []).some(s => s && s.clip)) v.warnings.push('step clips are switched off for now; clip ignored');
    if (!v.errors.length) {
      const al = R.checkAllergens(r);
      al.added.forEach(a => v.warnings.push(`allergen auto-added: ${a}`));
      al.maybe.forEach(a => v.warnings.push(`check allergen: ${a}`));
      const d = R.checkDiet(r, al.list);
      d.dropped.forEach(x => v.warnings.push(`diet tag removed: ${x}`));
      r.allergenKeys = al.list; r.dietTags = d.list; r.health = R.health(r);
      out.push(r);
    }
    v.errors.forEach(e => console.log(C.red(`✗ ${f}: ${e}`)));
    v.warnings.forEach(w => console.log(C.yel(`! ${f}: ${w}`)));
    errors += v.errors.length; warnings += v.warnings.length;
  }
  // dishes: content/dishes/<slug>.json; a recipe whose dish has no file gets one made from dish_title (warning)
  const ddir = path.join(ROOT, 'content/dishes'); const dishes = new Map();
  if (fs.existsSync(ddir)) for (const f of fs.readdirSync(ddir).filter(f => f.endsWith('.json')).sort()) {
    let d; try { d = JSON.parse(fs.readFileSync(path.join(ddir, f), 'utf8')); } catch (e) { console.log(C.red(`✗ dishes/${f}: invalid JSON`)); errors++; continue; }
    const de = R.validateDish(d, f); de.forEach(e => console.log(C.red(`✗ dishes/${f}: ${e}`))); errors += de.length;
    if (d.image && !tamiRel(d.image)) { console.log(C.red(`✗ dishes/${f}: image "${d.image}" is not an original cookbook photo`)); errors++; }
    if (!de.length) dishes.set(d.slug, { ...d, flavours: [] });
  }
  for (const r of out) {
    if (!dishes.has(r.dish)) { dishes.set(r.dish, { slug: r.dish, title: r.dish_title, chapter: r.chapter, intro: r.summary, image: null, flavours: [] }); console.log(C.yel(`! ${r.slug}.json: no content/dishes/${r.dish}.json, using dish_title and summary`)); warnings++; }
    const d = dishes.get(r.dish);
    if (d.chapter === 'more' && r.chapter !== 'more' && !d.book_chapter) d.chapter = r.chapter; // dish file not updated yet: follow its recipe's book_chapter
    if (d.chapter !== r.chapter) { console.log(C.yel(`! ${r.slug}.json: chapter "${r.chapter}" differs from dish "${d.slug}" chapter "${d.chapter}"; using the dish's`)); warnings++; r.chapter = d.chapter; }
    if (d.flavours.some(x => x.flavour.toLowerCase() === r.flavour.toLowerCase())) { console.log(C.red(`✗ ${r.slug}.json: dish "${r.dish}" already has a flavour "${r.flavour}"`)); errors++; }
    d.flavours.push(r);
  }
  for (const d of dishes.values()) d.flavours = R.assignAccess(d.flavours);
  console.log(`${files.length} recipe file(s): ${errors ? C.red(errors + ' error(s)') : C.grn('0 errors')}, ${warnings} warning(s)`);
  return { recipes: out, dishes: [...dishes.values()].filter(d => d.flavours.length), errors, warnings };
}

// ---------- assets ----------
const hash = buf => crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
function writeFile(rel, data) { const p = path.join(OUT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, data); return p; }
function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else { fs.mkdirSync(dst, { recursive: true }); fs.copyFileSync(s, d); }
  }
}
async function buildAssets() {
  const esbuild = require('esbuild');
  const a = { js: {} };
  const rd = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
  // the 5 designs: original fonts/base/designs CSS (copied unedited), palette variables, then our additions
  const css = rd('vendor/tami/css/fonts.css').replace(/url\(\.\.\/fonts\//g, `url(${cfg.basePath}fonts/`) + rd('vendor/tami/css/base.css') + rd('vendor/tami/css/designs.css') + require('./templates/designs').paletteCss({ design: cfg.defaultDesign, palette: cfg.defaultPalette }) + rd('src/assets/css/extras.css') + rd('src/assets/css/mobile.css');
  const cssMin = (await esbuild.transform(css, { loader: 'css', minify: true, target: ['chrome90', 'safari14', 'firefox90'] })).code;
  a.css = cfg.basePath + `assets/site.${hash(cssMin)}.css`; writeFile(a.css.slice(cfg.basePath.length), cssMin);
  for (const n of ['site', 'recipe', 'list', 'hero']) {
    const js = fs.readFileSync(path.join(ROOT, `src/assets/js/${n}.js`), 'utf8');
    const min = (await esbuild.transform(js, { loader: 'js', minify: true, target: 'es2018' })).code;
    a.js[n] = cfg.basePath + `assets/${n}.${hash(min)}.js`; writeFile(a.js[n].slice(cfg.basePath.length), min);
  }
  return a;
}

// Photos: ONLY the original cookbook photos (tools/tami-images.json), copied byte-for-byte, never edited.
const TAMI = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/tami-images.json'), 'utf8'));
const copied = {};
// Tami photo by file name (recipe/dish "image" field), e.g. "smash-burger-basic.jpg" -> img/dishes/02-burgers/smash-burger-basic.jpg
const TAMI_BY_NAME = {};
for (const ch of fs.readdirSync(path.join(TAMI.source, 'img/dishes'))) for (const f of fs.readdirSync(path.join(TAMI.source, 'img/dishes', ch))) TAMI_BY_NAME[f] = `img/dishes/${ch}/${f}`;
const tamiRel = name => !name ? null : name.startsWith('img/dishes/') ? name : TAMI_BY_NAME[path.basename(name)] || null;
async function tamiImg(rel) {
  if (!rel) return null;
  if (copied[rel]) return copied[rel];
  const src = path.join(TAMI.source, rel);
  if (!fs.existsSync(src)) { console.log(C.yel(`warning: photo not found ${rel}`)); return null; }
  const out = 'img/t/' + rel.replace(/^img\/dishes\//, '');
  fs.mkdirSync(path.dirname(path.join(OUT, out)), { recursive: true });
  fs.copyFileSync(src, path.join(OUT, out));
  const m = await require('sharp')(src).metadata();
  return (copied[rel] = { w600: out, w1200: out, width: m.width, height: m.height, orig: true });
}
async function buildImages(recipes) {
  for (const r of recipes) {
    r.img = await tamiImg(TAMI.recipes[r.slug] || tamiRel(r.image) || TAMI.dishes[r.dish] || tamiRel(r._dishImage));
    if (!r.img) console.log(C.yel(`warning: ${r.slug}: no photo mapped in tools/tami-images.json (placeholder used)`));
  }
}

// Tasteful placeholder: dark gradient, thin gold plate-and-cutlery line art, category name.
function placeholderSvg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900"><defs><radialGradient id="g" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#2a241c"/><stop offset="1" stop-color="#0d0c0a"/></radialGradient></defs><rect width="1200" height="900" fill="url(#g)"/><g fill="none" stroke="#c9a45c" stroke-width="3" opacity=".75"><circle cx="600" cy="410" r="150"/><circle cx="600" cy="410" r="112" opacity=".5"/><path d="M380 280v90a22 22 0 0 0 22 22v170M402 280v82M424 280v90a22 22 0 0 1-22 22"/><path d="M800 280c-28 30-28 110 0 140v142"/></g><text x="600" y="690" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="44" fill="#c9a45c" opacity=".8">${label.replace(/&/g, '&amp;')}</text></svg>`;
}

// ---------- main ----------
(async () => {
  const { recipes, dishes, errors, warnings } = loadRecipes();
  if (errors || (STRICT && warnings)) { console.log(C.red('Build stopped: fix the recipe errors above.')); process.exit(1); }
  if (VALIDATE_ONLY) return;
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
  const assets = await buildAssets();
  await buildImages(recipes);
  copyDir(path.join(ROOT, 'static'), OUT);

  // enrich + sort newest file first (by mtime) so "latest" is meaningful
  const rdir = path.join(ROOT, 'content/recipes');
  for (const r of recipes) {
    r.total_min = r.prep_min + r.cook_min;
    r.url = `recipes/${r.slug}/`;
    r.filterTags = [...r.dietTags, ...(cfg.healthyLabels === false ? [] : [...(r.health.highProtein.pass ? ['high-protein'] : []), ...(r.health.who.pass ? ['who-healthy'] : [])])];
    r.mtime = fs.statSync(path.join(rdir, `${r.slug}.json`)).mtimeMs;
  }
  recipes.sort((a, b) => b.mtime - a.mtime || a.title.localeCompare(b.title));
  for (const d of dishes) { const im = await tamiImg(tamiRel(d.image) || TAMI.dishes[d.slug] || tamiRel((d.flavours.find(r => tamiRel(r.image)) || {}).image)); d.cover = im ? { img: im, image_alt: d.title, title: d.title } : d.flavours.find(r => r.img) || null; }
  // chapter covers per design: the same pictures the cookbook site uses (meta.picks[design].covers)
  const picks = JSON.parse(fs.readFileSync(path.join(TAMI.source, 'data/index.json'), 'utf8')).meta.picks;
  const covers = {};
  for (const dk of Object.keys(picks)) { covers[dk] = {}; for (const c of cfg.chapters) { const p = picks[dk].covers[c.stem || TAMI.chapterStems[c.key]]; const im = p && await tamiImg(p.img); if (im) covers[dk][c.key] = im.w1200; } }
  const chapters = cfg.chapters.map(c => ({ ...c, dishes: dishes.filter(d => d.chapter === c.key).sort((a, b) => b.flavours.length - a.flavours.length || a.title.localeCompare(b.title)) })).filter(c => c.dishes.length);
  for (const c of chapters) c.n = c.dishes.reduce((a, d) => a + d.flavours.length, 0);
  const cats = R.CATEGORIES.map(key => ({ key, list: recipes.filter(r => r.category === key) })).filter(c => c.list.length);
  const hp = recipes.filter(r => r.health.highProtein.pass).sort((a, b) => b.health.highProtein.value - a.health.highProtein.value);
  const who = recipes.filter(r => r.health.who.pass);

  const locales = cfg.locales.map(code => ({ code, prefix: code === cfg.locales[0] ? '' : code + '/', t: require(path.join(ROOT, 'i18n', code + '.js')) }));
  const pages = [];
  for (const L of locales) {
    let ctx; ctx = {
      cfg, covers, counts: { recipes: recipes.length }, t: L.t, assets, locales, chapters, chapterNav: k => P.chapterNav(ctx, chapters, k),
      u: p => cfg.basePath + L.prefix + p,
      abs: p => cfg.siteUrl + cfg.basePath + (p.startsWith('img/') || p.startsWith('media/') ? '' : L.prefix) + p,
      absFor: (l, p) => cfg.siteUrl + cfg.basePath + l.prefix + p
    };
    const emit = (page, file) => {
      const html = layout(ctx, page).replace(/\{\{BASE\}\}/g, cfg.basePath + L.prefix);
      const rel = L.prefix + (file || (page.path ? page.path + 'index.html' : 'index.html'));
      writeFile(rel, html); pages.push({ rel, loc: page.path === null ? null : ctx.abs(page.path), bytes: Buffer.byteLength(html) });
    };
    emit(require('./templates/home').homePage(ctx, P, recipes, chapters, { hp: hp.length, who: who.length }));
    for (const ch of chapters) emit({ ...P.chapterPage(ctx, ch, chapters), chapterKey: ch.key });
    for (const ch of chapters) for (const d of ch.dishes) emit({ ...P.dishPage(ctx, d, ch), chapterKey: ch.key });
    emit(P.chaptersPage(ctx, chapters));
    emit(P.allRecipesPage(ctx, recipes, cats, chapters));
    for (const c of cats) emit(P.categoryPage(ctx, c.key, c.list, cats));
    for (const r of recipes) {
      const related = dishes.find(d => d.slug === r.dish).flavours.filter(x => x !== r).slice(0, 3);
      emit({ ...P.recipePage(ctx, r, related), chapterKey: r.chapter });
    }
    if (cfg.healthyLabels !== false) { emit(P.highProteinPage(ctx, hp, R.HP_MIN)); emit(P.whoPage(ctx, who, recipes.length)); }
    emit(P.plansPage(ctx));
    const frag = n => fs.readFileSync(path.join(ROOT, 'content/pages', n), 'utf8')
      .replace(/\{\{BRAND\}\}/g, cfg.brand).replace(/\{\{EMAIL\}\}/g, cfg.contactEmail + (cfg.contactEmailIsPlaceholder ? ' (placeholder address)' : ''))
      .replace(/\{\{UPDATED\}\}/g, new Date().toISOString().slice(0, 10))
      .replace(/<!--HL-->([\s\S]*?)<!--\/HL-->/g, cfg.healthyLabels === false ? '' : '$1');
    emit({ ...P.simplePage(ctx, 'calculator/', 'Calculator (coming soon)', frag('calculator.html'), 'A nutrition calculator is coming soon.'), navKey: 'calculator' });
    emit(P.simplePage(ctx, 'about/', 'About', frag('about.html'), `About ${cfg.brand}.`));
    emit(P.simplePage(ctx, 'contact/', 'Contact', frag('contact.html'), `Contact ${cfg.brand}.`));
    emit(P.simplePage(ctx, 'privacy/', 'Privacy policy (draft)', frag('privacy.html'), 'Privacy policy (draft).'));
    emit(P.simplePage(ctx, 'terms/', 'Terms of use (draft)', frag('terms.html'), 'Terms of use (draft).'));
    emit(P.simplePage(ctx, 'login/', 'Sign in', frag('login.html'), 'Accounts are coming soon.'));
    emit(P.simplePage(ctx, '404.html', 'Page not found', frag('404.html'), 'Page not found.'), '404.html');
    pages[pages.length - 1].loc = null;
  }
  writeFile('img/og.png', fs.readFileSync(path.join(ROOT, 'src/assets/og.png')));
  for (const k of R.CATEGORIES) writeFile(`img/ph/${k}.svg`, placeholderSvg(require(path.join(ROOT, 'i18n', cfg.locales[0] + '.js')).categories[k]));
  writeFile('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0b0a08"/><g fill="#d4a24c"><rect x="14" y="16" width="36" height="8" rx="4"/><rect x="12" y="28" width="40" height="6" rx="3" opacity=".75"/><rect x="14" y="38" width="36" height="10" rx="5"/></g></svg>`);
  // sitemap + robots (noindex flag flips both, plus the meta tag in every page)
  const today = new Date().toISOString().slice(0, 10);
  writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p => p.loc && !/\/(login)\/$/.test(p.loc)).map(p => `<url><loc>${p.loc}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  writeFile('robots.txt', cfg.noindex ? `# TEST deployment: keep crawlers out. Flip noindex in site.config.js at launch.\nUser-agent: *\nDisallow: /\n` : `User-agent: *\nAllow: /\nSitemap: ${cfg.siteUrl}${cfg.basePath}sitemap.xml\n`);
  writeFile('.nojekyll', '');
  const rp = pages.filter(p => /^recipes\/[^/]+\/index\.html$/.test(p.rel));
  console.log(C.grn(`Built ${pages.length} pages into ${cfg.outDir}/ (${recipes.length} recipes, ${dishes.length} dishes in ${chapters.length} chapters, ${recipes.filter(r => r.access === 'premium').length} premium, ${cats.length} categories, ${hp.length} high-protein, ${who.length} WHO healthy).`));
  if (rp.length) console.log(`Largest recipe HTML: ${Math.max(...rp.map(p => p.bytes))} bytes`);
})().catch(e => { console.error(e); process.exit(1); });
