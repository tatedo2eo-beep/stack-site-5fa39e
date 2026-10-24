#!/usr/bin/env node
// Static multi-page build: content/recipes/*.json -> docs/ (one HTML file per page).
// Usage: node src/build.js [--validate-only] [--strict]
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = path.join(__dirname, '..');
const cfg = require(path.join(ROOT, 'site.config.js'));
const R = require('./lib/rules');
const S = require('./lib/safety');
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
    if (r.image && !tamiRel(r.image) && !genPhoto(r)) v.errors.push(`image "${r.image}" is neither an original cookbook photo (img/dishes) nor this recipe's approved generated photo (tools/generated-images.json)`);
    if ((r.steps || []).some(s => s && s.clip)) v.warnings.push('step clips are switched off for now; clip ignored');
    if (!v.errors.length) {
      const sm = S.splitSafety(r); // safety lines never go in the cat's tips
      if (sm) v.warnings.push(`${sm} food-safety line(s) moved from tips to safety`);
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
  // the base version is shown under the dish's own name, not as "Classic" (JSON keeps "Classic" as the base marker)
  for (const d of dishes.values()) for (const r of d.flavours) if (/^classic$/i.test(r.flavour)) { r.flavour = d.title; r.dish_title = d.title; }
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
  // calculator page only: its own CSS file, so other pages are unchanged
  const calcCss = (await esbuild.transform(rd('src/assets/css/calculator.css'), { loader: 'css', minify: true, target: ['chrome90', 'safari14', 'firefox90'] })).code;
  a.calcCss = cfg.basePath + `assets/calculator.${hash(calcCss)}.css`; writeFile(a.calcCss.slice(cfg.basePath.length), calcCss);
  for (const n of ['site', 'recipe', 'list', 'hero', 'calculator', 'kitchen', 'drinks']) {
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
// Neutral names: a file in content/images whose bytes (sha256) match an original cookbook photo counts as that original,
// and the original is served under the neutral name everywhere (no chef/outlet names in public file names).
const ALIAS_OUT = {};
{
  const sha = f => require('crypto').createHash('sha256').update(fs.readFileSync(f)).digest('hex');
  const BY_HASH = {};
  for (const rel of Object.values(TAMI_BY_NAME)) BY_HASH[sha(path.join(TAMI.source, rel))] = rel;
  const ci = path.join(ROOT, 'content/images');
  if (fs.existsSync(ci)) for (const f of fs.readdirSync(ci)) {
    if (TAMI_BY_NAME[f]) continue;
    if (!fs.statSync(path.join(ci, f)).isFile()) continue; // skip sub-folders such as cats/
    const rel = BY_HASH[sha(path.join(ci, f))];
    if (rel) { TAMI_BY_NAME[f] = rel; ALIAS_OUT[rel] = f; }
  }
}
// Public-site-only photo exceptions (Joe approved, 2026-10-22). These are the ONLY photos not byte-identical to an original:
// an edited copy of the named original, kept in content/images/ (name ends -public-only.jpg). Tami's own files are never touched; the recipe
// and dish JSON still name the original, so validation is unchanged, and only the served file is swapped.
const PUBLIC_ONLY = { 'img/dishes/13-soups/lentil-basic.jpg': 'red-lentil-soup-public-only.jpg' }; // red lentil soup: whole brown lentils -> smooth red lentil soup
// Generated photos (Joe approved, 2026-10-23 'Yes, do all 498'): ONLY for recipes that were photo_pending (no Tami photo of their own).
// tools/generated-images.json lists slug -> file in content/images/ (recipes) and slug -> file in content/images/cats/ (flavour cats).
// A recipe may use its generated photo only if its "image" field names exactly that file. Tami's photos are unchanged.
const GEN = fs.existsSync(path.join(ROOT, 'tools/generated-images.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/generated-images.json'), 'utf8')) : { recipes: {}, cats: {} };
GEN.recipes = GEN.recipes || {}; GEN.cats = GEN.cats || {};
const genPhoto = r => !!(r && r.image && GEN.recipes[r.slug] === r.image && fs.existsSync(path.join(ROOT, 'content/images', r.image)));
const genCopied = {};
async function genImg(name) {
  if (genCopied[name]) return genCopied[name];
  const src = path.join(ROOT, 'content/images', name), out = 'img/g/' + name;
  fs.mkdirSync(path.dirname(path.join(OUT, out)), { recursive: true });
  await copyImg(src, path.join(OUT, out));
  const m = await require('sharp')(src).metadata();
  return (genCopied[name] = { w600: out, w1200: out, width: m.width, height: m.height, orig: true, gen: true });
}
// Recompress oversized photos into docs/ only (sources untouched): >300 KB -> mozjpeg q82 progressive, metadata stripped, same dimensions.
async function copyImg(src, dst) {
  if (!/\.jpe?g$/i.test(src) || fs.statSync(src).size <= 300 * 1024) return fs.copyFileSync(src, dst);
  const buf = await require('sharp')(src).jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer();
  if (buf.length < fs.statSync(src).size) fs.writeFileSync(dst, buf); else fs.copyFileSync(src, dst);
}
const tamiRel = name => !name ? null : name.startsWith('img/dishes/') ? name : TAMI_BY_NAME[path.basename(name)] || null;
async function tamiImg(rel) {
  if (!rel) return null;
  if (copied[rel]) return copied[rel];
  const po = PUBLIC_ONLY[rel] && path.join(ROOT, 'content/images', PUBLIC_ONLY[rel]);
  if (po && !fs.existsSync(po)) throw new Error(`public-only photo missing: ${po}`);
  const src = po || path.join(TAMI.source, rel);
  if (!fs.existsSync(src)) { console.log(C.yel(`warning: photo not found ${rel}`)); return null; }
  const rel2 = ALIAS_OUT[rel] ? path.posix.join(path.posix.dirname(rel), ALIAS_OUT[rel]) : rel;
  const out = po ? 'img/t/' + path.posix.join(path.posix.dirname(rel.replace(/^img\/dishes\//, '')), PUBLIC_ONLY[rel]) : 'img/t/' + rel2.replace(/^img\/dishes\//, '');
  fs.mkdirSync(path.dirname(path.join(OUT, out)), { recursive: true });
  await copyImg(src, path.join(OUT, out));
  const m = await require('sharp')(src).metadata();
  return (copied[rel] = { w600: out, w1200: out, width: m.width, height: m.height, orig: !po });
}
async function buildImages(recipes) {
  for (const r of recipes) {
    // photo_pending: an extra flavour waiting for its own photo. Never fall back to the dish photo (it would not match); show 'Photo coming soon'.
    if (r.photo_pending && !r.image) { r.img = null; continue; }
    r._tamiRel = TAMI.recipes[r.slug] || tamiRel(r.image) || TAMI.dishes[r.dish] || tamiRel(r._dishImage);
    if (!tamiRel(r.image) && genPhoto(r)) { r._gen = true; r.img = await genImg(r.image); continue; } // generated photo; _tamiRel kept only to find the dish cat
    r.img = await tamiImg(r._tamiRel);
    if (!r.img) console.log(C.yel(`warning: ${r.slug}: no photo mapped in tools/tami-images.json (placeholder used)`));
  }
}
// Cat tip pictures: the cookbook's own mapping. A recipe whose photo is a cookbook flavour photo gets that flavour's cat
// (img/cat-flavors/...); a recipe on the dish photo, or an extra flavour of the same dish, gets the dish cat (img/cats/...);
// anything else gets the master cat. The full picture is used (never cropped), re-encoded to webp at the same framing,
// served under a neutral hashed name. Converted files are cached outside docs/ so rebuilds stay fast.
const CAT_MASTER = 'img/cat-master-final.jpg';
const CAT_BY_PHOTO = {}, DISH_CAT_BY_PHOTO = {};
for (const f of fs.readdirSync(path.join(TAMI.source, 'data/ch')).filter(f => f.endsWith('.json')).sort())
  for (const d of JSON.parse(fs.readFileSync(path.join(TAMI.source, 'data/ch', f), 'utf8'))) {
    const dc = d.cat && d.cat.img;
    if (!dc) continue;
    if (d.img) { CAT_BY_PHOTO[d.img] = { kind: 'dish', rel: dc }; DISH_CAT_BY_PHOTO[d.img] = dc; }
    for (const fl of d.flavors || []) if (fl.img) { CAT_BY_PHOTO[fl.img] = fl.cat ? { kind: 'flavour', rel: fl.cat } : { kind: 'dish', rel: dc }; DISH_CAT_BY_PHOTO[fl.img] = dc; }
  }
const CAT_CACHE = path.join(ROOT, 'node_modules/.cache/cat-tip');
const catDone = {};
async function catImg(rel) {
  if (catDone[rel]) return catDone[rel];
  const src = rel.startsWith('content/images/cats/') ? path.join(ROOT, rel) : path.join(TAMI.source, rel); // generated flavour cats live in content/images/cats/
  if (!fs.existsSync(src)) return null;
  const id = crypto.createHash('sha1').update(fs.readFileSync(src)).digest('hex').slice(0, 12);
  const m = await require('sharp')(src).metadata();
  const o = { width: m.width, height: m.height, src: `img/cat/${id}.webp`, srcset: [] };
  for (const w of [640, m.width]) {
    const name = w === m.width ? `${id}.webp` : `${id}-${w}.webp`, cache = path.join(CAT_CACHE, name);
    if (!fs.existsSync(cache)) { fs.mkdirSync(CAT_CACHE, { recursive: true }); await require('sharp')(src).resize({ width: w }).webp({ quality: w === m.width ? 74 : 72 }).toFile(cache + '.tmp'); fs.renameSync(cache + '.tmp', cache); }
    writeFile(`img/cat/${name}`, fs.readFileSync(cache));
    o.srcset.push(`img/cat/${name} ${w}w`);
  }
  return (catDone[rel] = o);
}
async function buildCats(recipes, dishes) {
  // dish cat for a public dish: from its dish photo, else from any of its flavours' photos (same cookbook dish)
  const dishCat = {};
  for (const d of dishes) dishCat[d.slug] = DISH_CAT_BY_PHOTO[tamiRel(d.image)] || DISH_CAT_BY_PHOTO[TAMI.dishes[d.slug]] || d.flavours.map(r => DISH_CAT_BY_PHOTO[r._tamiRel]).find(Boolean);
  const n = { flavour: 0, dish: 0, master: 0 };
  for (const r of recipes) {
    const genCat = GEN.cats[r.slug] && { kind: 'flavour', rel: 'content/images/cats/' + GEN.cats[r.slug] };
    const own = genCat || (!r._gen && !(r.photo_pending && !r.image) && CAT_BY_PHOTO[r._tamiRel]);
    const pick = own || (dishCat[r.dish] ? { kind: 'dish', rel: dishCat[r.dish] } : { kind: 'master', rel: CAT_MASTER });
    r.catPic = await catImg(pick.rel);
    if (!r.catPic) { console.log(C.yel(`warning: ${r.slug}: cat picture missing (${pick.rel}), master cat used`)); r.catPic = await catImg(CAT_MASTER); pick.kind = 'master'; }
    r.catKind = pick.kind; n[pick.kind]++;
  }
  console.log(`cat tips: ${n.flavour} flavour cat, ${n.dish} dish cat, ${n.master} master cat`);
  return n;
}

// Background tone for the drinks showcase: the photo's main colour (read from the served copy, which is
// byte-identical to the original), kept dark enough for light text. The photo itself is never changed.
async function photoTone(rel) {
  // colour-weighted average (chroma²), so a dark studio backdrop doesn't win over the food or drink itself
  const px = await require('sharp')(path.join(OUT, rel)).resize(64, 36, { fit: 'fill' }).removeAlpha().raw().toBuffer();
  let r = 0, g = 0, b = 0, w = 0;
  for (let i = 0; i < px.length; i += 3) { const c = (Math.max(px[i], px[i + 1], px[i + 2]) - Math.min(px[i], px[i + 1], px[i + 2])) ** 2 + 1; r += px[i] * c; g += px[i + 1] * c; b += px[i + 2] * c; w += c; }
  r /= w; g /= w; b /= w;
  const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), L = (mx + mn) / 2, d = mx - mn;
  let h = 0; if (d) h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4;
  const S = d ? d / (1 - Math.abs(2 * L - 1)) : 0;
  return `hsl(${Math.round((h * 60 + 360) % 360)} ${Math.round(Math.min(S, 0.55) * 100)}% ${Math.round(Math.min(Math.max(L, 0.16), 0.26) * 100)}%)`;
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
  await buildCats(recipes, dishes);
  copyDir(path.join(ROOT, 'static'), OUT);
  for (const r of recipes) if (r.img && (r.category === 'drinks' || r.book_chapter === 'drinks')) r.img = { ...r.img, tone: await photoTone(r.img.w1200) };

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
  // home picks per design (hero / plate / issue / cpin / feat / grp), exactly the cookbook's meta.picks[design].home.
  // Each photo links to the chapter it belongs to (or the chapter list while that chapter is still empty).
  const chKeyOf = id => id.split('/')[0].replace(/^\d+-/, '');
  const homePicks = {}, usedPick = new Set();
  const one = async x => { if (!x || !x.img) return null; usedPick.add(x.img); const im = await tamiImg(x.img); return im && { url: im.w1200, ch: chKeyOf(x.id) }; };
  for (const dk of Object.keys(picks)) {
    const h = picks[dk].home || {}, o = homePicks[dk] = {};
    for (const k of ['hero', 'plate']) if (h[k]) o[k] = await one(h[k]);
    for (const k of ['issue', 'cpin', 'feat']) if (h[k]) o[k] = (await Promise.all(h[k].map(one))).filter(Boolean);
    if (h.grp) { o.grp = {}; for (const [g, x] of Object.entries(h.grp)) o.grp[g] = await one(x); }
    for (const c of Object.values(picks[dk].covers || {})) usedPick.add(c.img);
    for (const c of Object.values(picks[dk].meals || {})) usedPick.add(c.img);
  }
  // 'more' (recipes outside the book chapters) has no cookbook cover: give each design a photo no pick uses
  const spare = Object.values(TAMI_BY_NAME).filter(x => !usedPick.has(x)).sort();
  for (const dk of Object.keys(picks)) if (!covers[dk].more && spare.length) { const im = await tamiImg(spare.shift()); if (im) covers[dk].more = im.w1200; }
  // Book order (Tami's cookbook, /workspace/rw/tami_manifest.json, read only): dishes in the order the book lists them,
  // and within a dish the book flavours first (base photo, then the book's flavour list), extra flavours after.
  // Dishes / flavours the book doesn't have keep their previous order after the book ones. Access (free/premium) is unchanged.
  const BOOK = {};
  { const mf = '/workspace/rw/tami_manifest.json';
    if (fs.existsSync(mf)) JSON.parse(fs.readFileSync(mf, 'utf8')).forEach((m, i) => {
      const put = (img, k) => { if (img && BOOK[img] === undefined) BOOK[img] = i * 1000 + k; };
      put(m.img, 0); (m.flavours || []).forEach((f, k) => put((m.flav_img || {})[f], k + 1));
      BOOK['name:' + String(m.name).toLowerCase()] = BOOK['name:' + String(m.name).toLowerCase()] ?? i * 1000;
    });
    else console.log(C.yel('warning: tami_manifest.json not found; chapters keep the old dish order')); }
  const recRank = r => { const rel = TAMI.recipes[r.slug] || tamiRel(r.image); return rel && BOOK[rel] !== undefined ? BOOK[rel] : Infinity; };
  const dishRank = d => Math.min(...[tamiRel(d.image) || TAMI.dishes[d.slug]].filter(Boolean).map(x => BOOK[x] !== undefined ? BOOK[x] - (BOOK[x] % 1000) : Infinity), BOOK['name:' + (d.book_name || d.title).toLowerCase()] ?? Infinity, ...d.flavours.map(r => { const k = recRank(r); return k === Infinity ? k : k - (k % 1000); }));
  for (const d of dishes) { d.bookRank = dishRank(d); const pos = new Map(d.flavours.map((r, i) => [r, i])); d.flavours = d.flavours.slice().sort((a, b) => (recRank(a) - recRank(b)) || pos.get(a) - pos.get(b)); }
  const oldOrder = (a, b) => b.flavours.length - a.flavours.length || a.title.localeCompare(b.title);
  const chapters = cfg.chapters.map(c => ({ ...c, dishes: dishes.filter(d => d.chapter === c.key).sort((a, b) => (a.bookRank === b.bookRank ? 0 : a.bookRank - b.bookRank) || oldOrder(a, b)) })).filter(c => c.dishes.length);
  for (const c of chapters) c.n = c.dishes.reduce((a, d) => a + d.flavours.length, 0);
  const cats = R.CATEGORIES.map(key => ({ key, list: recipes.filter(r => r.category === key) })).filter(c => c.list.length);
  const hp = recipes.filter(r => r.health.highProtein.pass).sort((a, b) => b.health.highProtein.value - a.health.highProtein.value);
  const who = recipes.filter(r => r.health.who.pass);

  // alt text for every food photo, from the dish/recipe it shows (falls back to a name made from the photo's file name)
  const photoAlt = {};
  for (const d of dishes) if (d.cover && d.cover.img && !photoAlt[d.cover.img.w1200]) photoAlt[d.cover.img.w1200] = d.title;
  for (const r of recipes) if (r.img) photoAlt[r.img.w1200] = r.image_alt || r.title;
  const altFromFile = f => { const [m, fl] = path.basename(f).replace(/\.\w+$/, '').split('--'); const s = m.replace(/-(basic|advanced)$/, '').replace(/-/g, ' ') + (fl ? ` (${fl.replace(/-/g, ' ')})` : ''); return s.charAt(0).toUpperCase() + s.slice(1); };
  const photoAltFor = (url, fb) => { if (!url) return fb || ''; const rel = url.startsWith(cfg.basePath) ? url.slice(cfg.basePath.length) : url; return photoAlt[rel] || (/^img\/t\//.test(rel) ? altFromFile(rel) : fb || ''); };
  const photoWH = url => { if (!url) return ''; const rel = url.startsWith(cfg.basePath) ? url.slice(cfg.basePath.length) : url; const m = Object.values(copied).find(x => x.w1200 === rel); return m ? ` width="${m.width}" height="${m.height}"` : ''; };
  const locales = cfg.locales.map(code => ({ code, prefix: code === cfg.locales[0] ? '' : code + '/', t: require(path.join(ROOT, 'i18n', code + '.js')) }));
  const pages = [], checked = [];
  for (const L of locales) {
    let ctx; ctx = {
      cfg, covers, homePicks, photoAlt: photoAltFor, photoWH, counts: { recipes: recipes.length }, t: L.t, assets, locales, chapters, chapterNav: k => P.chapterNav(ctx, chapters, k),
      u: p => cfg.basePath + L.prefix + p,
      abs: p => cfg.siteUrl + cfg.basePath + (p.startsWith('img/') || p.startsWith('media/') ? '' : L.prefix) + p,
      absFor: (l, p) => cfg.siteUrl + cfg.basePath + l.prefix + p
    };
    const emit = (page, file) => {
      const html = layout(ctx, page).replace(/\{\{BASE\}\}/g, cfg.basePath + L.prefix);
      const rel = L.prefix + (file || (page.path ? page.path + 'index.html' : 'index.html'));
      if (!L.prefix && page.views && (page.navKey === 'home' || /^chapters?\//.test(page.path || ''))) checked.push({ path: page.path, views: page.views });
      writeFile(rel, html); pages.push({ rel, loc: page.path === null ? null : ctx.abs(page.path), bytes: Buffer.byteLength(html) });
    };
    emit(require('./templates/home').homePage(ctx, P, recipes, chapters, { hp: hp.length, who: who.length }));
    for (const ch of chapters) emit({ ...P.chapterPage(ctx, ch, chapters), chapterKey: ch.key });
    for (const ch of chapters) for (const d of ch.dishes) emit({ ...P.dishPage(ctx, d, ch), chapterKey: ch.key });
    emit(P.chaptersPage(ctx, chapters));
    P.allRecipesPages(ctx, recipes, cats, chapters).forEach(pg => emit(pg));
    writeFile(L.prefix + 'recipes/index.json', JSON.stringify(P.recipeIndex(ctx, recipes)));
    for (const c of cats) emit(P.categoryPage(ctx, c.key, c.list, cats));
    for (const r of recipes) {
      emit({ ...P.recipePage(ctx, r), chapterKey: r.chapter });
    }
    if (cfg.healthyLabels !== false) { emit(P.highProteinPage(ctx, hp, R.HP_MIN)); emit(P.whoPage(ctx, who, recipes.length)); }
    emit(P.plansPage(ctx));
    const frag = n => fs.readFileSync(path.join(ROOT, 'content/pages', n), 'utf8')
      .replace(/\{\{BRAND\}\}/g, cfg.brand).replace(/\{\{EMAIL\}\}/g, cfg.contactEmail)
      .replace(/\{\{UPDATED\}\}/g, new Date().toISOString().slice(0, 10)).replace(/\{\{BASE\}\}/g, cfg.basePath)
      .replace(/<!--HL-->([\s\S]*?)<!--\/HL-->/g, cfg.healthyLabels === false ? '' : '$1');
    emit({ ...P.simplePage(ctx, 'calculator/', 'Daily needs calculator: calories, protein and more', frag('calculator.html'), 'Work out your daily calories, protein, fat, carbs, fibre, free sugar, salt and water, metric, with the source of every number.'), navKey: 'calculator', scripts: [assets.js.calculator], styles: [assets.calcCss] });
    emit(P.simplePage(ctx, 'about/', 'About', frag('about.html'), `About ${cfg.brand}: an independent recipe site with metric recipes, nutrition per serving and EU allergens, written for this site.`));
    emit(P.simplePage(ctx, 'contact/', 'Contact', frag('contact.html'), `Contact ${cfg.brand}: questions, corrections or a recipe that didn't work. Email us or use the contact form.`));
    emit(P.simplePage(ctx, 'privacy/', 'Privacy Policy', frag('privacy.html'), 'How we handle your data: cookies, Google AdSense and third-party ads, analytics, your GDPR rights and children\'s privacy.'));
    emit(P.simplePage(ctx, 'terms/', 'Terms of Use', frag('terms.html'), `The terms for using ${cfg.brand}: personal use of recipes, copyright, nutrition and allergen estimates, food safety and planned features.`));
    emit(P.simplePage(ctx, 'cookie-policy/', 'Cookie Policy', frag('cookie-policy.html'), 'Which cookies and local storage this site uses, what they do, and how to accept, reject or customise them.'));
    emit(P.simplePage(ctx, 'refund-policy/', 'Refund Policy', frag('refund-policy.html'), 'Cancellation and refund terms for the $4.99/month and $39.99/year subscriptions, including the EU 14-day withdrawal right.'));
    emit(P.simplePage(ctx, '404.html', 'Page not found', frag('404.html'), 'Page not found.'), '404.html');
    pages[pages.length - 1].loc = null;
  }
  {
    const cardPhotos = new Set([...recipes.filter(r => r.img).map(r => r.img.w1200), ...dishes.filter(d => d.cover && d.cover.img).map(d => d.cover.img.w1200)]);
    const pc = require('./lib/photo-check').checkPhotos(checked, cardPhotos);
    if (pc.fail.length) { pc.fail.slice(0, 40).forEach(f => console.log(C.red('✗ photo rule: ' + f))); console.log(C.red(`Build stopped: ${pc.fail.length} photo rule failure(s).`)); process.exit(1); }
    console.log(C.grn(`Photo rule OK: featured photos per design ${JSON.stringify(pc.counts)}, none shared or repeated.`));
  }
  writeFile('img/og.png', fs.readFileSync(path.join(ROOT, 'src/assets/og.png')));
  writeFile('img/ph/coming-soon.svg', placeholderSvg(''));
  for (const k of R.CATEGORIES) writeFile(`img/ph/${k}.svg`, placeholderSvg(require(path.join(ROOT, 'i18n', cfg.locales[0] + '.js')).categories[k]));
  const favSvg = rx => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="${rx}" fill="#0b0a08"/><g fill="#d4a24c"><rect x="14" y="16" width="36" height="8" rx="4"/><rect x="12" y="28" width="40" height="6" rx="3" opacity=".75"/><rect x="14" y="38" width="36" height="10" rx="5"/></g></svg>`;
  writeFile('favicon.svg', favSvg(14));
  // PNG fallbacks: 32 px tab icon for browsers without SVG favicons, 180 px square apple-touch-icon (iOS rounds the corners itself)
  const sharp = require('sharp');
  writeFile('favicon-32.png', await sharp(Buffer.from(favSvg(14)), { density: 300 }).resize(32, 32).png({ compressionLevel: 9 }).toBuffer());
  writeFile('apple-touch-icon.png', await sharp(Buffer.from(favSvg(0)), { density: 300 }).resize(180, 180).png({ compressionLevel: 9 }).toBuffer());
  // sitemap + robots, gated on cfg.noindex (the inverse of PUBLIC_INDEXING; it also flips the meta tag in every page).
  // Public  (PUBLIC_INDEXING=true): sitemap.xml of every page (absolute URLs) + robots.txt that allows crawling.
  // Private (default): no sitemap (remove any stale copy) + robots.txt that blocks everything.
  const today = new Date().toISOString().slice(0, 10);
  if (cfg.noindex) {
    const stale = path.join(OUT, 'sitemap.xml');
    if (fs.existsSync(stale)) fs.unlinkSync(stale);
    writeFile('robots.txt', `# TEST deployment: keep crawlers out. Set PUBLIC_INDEXING=true at launch.\nUser-agent: *\nDisallow: /\n`);
  } else {
    writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p => p.loc && !/\/(login)\/$/.test(p.loc)).map(p => `<url><loc>${p.loc}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
    writeFile('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${cfg.siteUrl}${cfg.basePath}sitemap.xml\n`);
  }
  writeFile('.nojekyll', '');
  const rp = pages.filter(p => /^recipes\/[^/]+\/index\.html$/.test(p.rel));
  console.log(C.grn(`Built ${pages.length} pages into ${cfg.outDir}/ (${recipes.length} recipes, ${dishes.length} dishes in ${chapters.length} chapters, ${recipes.filter(r => r.access === 'premium').length} premium, ${cats.length} categories, ${hp.length} high-protein, ${who.length} WHO healthy).`));
  if (rp.length) console.log(`Largest recipe HTML: ${Math.max(...rp.map(p => p.bytes))} bytes`);
})().catch(e => { console.error(e); process.exit(1); });
