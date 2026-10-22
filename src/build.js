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
function loadRecipes() {
  const dir = path.join(ROOT, 'content/recipes');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  let errors = 0, warnings = 0; const out = []; const slugs = new Set();
  for (const f of files) {
    let r;
    try { r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
    catch (e) { console.log(C.red(`✗ ${f}: invalid JSON: ${e.message}`)); errors++; continue; }
    const v = R.validate(r, f);
    if (r.slug && slugs.has(r.slug)) v.errors.push(`duplicate slug "${r.slug}"`);
    slugs.add(r.slug);
    if (r.image && !fs.existsSync(path.join(ROOT, 'content/images', r.image))) v.errors.push(`image "${r.image}" not found in content/images/`);
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
  console.log(`${files.length} recipe file(s): ${errors ? C.red(errors + ' error(s)') : C.grn('0 errors')}, ${warnings} warning(s)`);
  return { recipes: out, errors, warnings };
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
  const css = fs.readFileSync(path.join(ROOT, 'src/assets/css/site.css'), 'utf8');
  const cssMin = (await esbuild.transform(css, { loader: 'css', minify: true, target: ['chrome90', 'safari14', 'firefox90'] })).code;
  a.css = cfg.basePath + `assets/site.${hash(cssMin)}.css`; writeFile(a.css.slice(cfg.basePath.length), cssMin);
  for (const n of ['site', 'recipe', 'list', 'hero']) {
    const js = fs.readFileSync(path.join(ROOT, `src/assets/js/${n}.js`), 'utf8');
    const min = (await esbuild.transform(js, { loader: 'js', minify: true, target: 'es2018' })).code;
    a.js[n] = cfg.basePath + `assets/${n}.${hash(min)}.js`; writeFile(a.js[n].slice(cfg.basePath.length), min);
  }
  return a;
}

// Recipe photos -> 600 and 1200 px WebP, each <= 120 KB. Cached by source mtime.
async function buildImages(recipes) {
  const sharp = require('sharp');
  const cache = path.join(ROOT, '.cache/img'); fs.mkdirSync(cache, { recursive: true });
  for (const r of recipes) {
    if (!r.image) { r.img = null; continue; }
    const src = path.join(ROOT, 'content/images', r.image);
    const key = `${r.slug}-${hash(String(fs.statSync(src).mtimeMs) + r.image)}`;
    const meta = path.join(cache, key + '.json');
    if (!fs.existsSync(meta)) {
      for (const w of [600, 1200]) {
        let q = 80, buf;
        do { buf = await sharp(src).resize({ width: w, height: Math.round(w * 3 / 4), fit: 'cover' }).webp({ quality: q, effort: 5 }).toBuffer(); q -= 6; }
        while (buf.length > 120 * 1024 && q > 30);
        fs.writeFileSync(path.join(cache, `${key}-${w}.webp`), buf);
      }
      fs.writeFileSync(meta, JSON.stringify({ width: 1200, height: 900 }));
    }
    for (const w of [600, 1200]) { fs.mkdirSync(path.join(OUT, 'img/r'), { recursive: true }); fs.copyFileSync(path.join(cache, `${key}-${w}.webp`), path.join(OUT, `img/r/${r.slug}-${w}.webp`)); }
    r.img = { w600: `img/r/${r.slug}-600.webp`, w1200: `img/r/${r.slug}-1200.webp`, ...JSON.parse(fs.readFileSync(meta, 'utf8')) };
  }
}

// Tasteful placeholder: dark gradient, thin gold plate-and-cutlery line art, category name.
function placeholderSvg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900"><defs><radialGradient id="g" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#2a241c"/><stop offset="1" stop-color="#0d0c0a"/></radialGradient></defs><rect width="1200" height="900" fill="url(#g)"/><g fill="none" stroke="#c9a45c" stroke-width="3" opacity=".75"><circle cx="600" cy="410" r="150"/><circle cx="600" cy="410" r="112" opacity=".5"/><path d="M380 280v90a22 22 0 0 0 22 22v170M402 280v82M424 280v90a22 22 0 0 1-22 22"/><path d="M800 280c-28 30-28 110 0 140v142"/></g><text x="600" y="690" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="44" fill="#c9a45c" opacity=".8">${label.replace(/&/g, '&amp;')}</text></svg>`;
}

// ---------- main ----------
(async () => {
  const { recipes, errors, warnings } = loadRecipes();
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
    r.filterTags = [...r.dietTags, ...(r.health.highProtein.pass ? ['high-protein'] : []), ...(r.health.who.pass ? ['who-healthy'] : [])];
    r.mtime = fs.statSync(path.join(rdir, `${r.slug}.json`)).mtimeMs;
  }
  recipes.sort((a, b) => b.mtime - a.mtime || a.title.localeCompare(b.title));
  const cats = R.CATEGORIES.map(key => ({ key, list: recipes.filter(r => r.category === key) })).filter(c => c.list.length);
  const hp = recipes.filter(r => r.health.highProtein.pass).sort((a, b) => b.health.highProtein.value - a.health.highProtein.value);
  const who = recipes.filter(r => r.health.who.pass);

  const locales = cfg.locales.map(code => ({ code, prefix: code === cfg.locales[0] ? '' : code + '/', t: require(path.join(ROOT, 'i18n', code + '.js')) }));
  const pages = [];
  for (const L of locales) {
    const ctx = {
      cfg, t: L.t, assets, locales,
      u: p => cfg.basePath + L.prefix + p,
      abs: p => cfg.siteUrl + cfg.basePath + (p.startsWith('img/') || p.startsWith('media/') ? '' : L.prefix) + p,
      absFor: (l, p) => cfg.siteUrl + cfg.basePath + l.prefix + p
    };
    const emit = (page, file) => {
      const html = layout(ctx, page).replace(/\{\{BASE\}\}/g, cfg.basePath + L.prefix);
      const rel = L.prefix + (file || (page.path ? page.path + 'index.html' : 'index.html'));
      writeFile(rel, html); pages.push({ rel, loc: page.path === null ? null : ctx.abs(page.path), bytes: Buffer.byteLength(html) });
    };
    emit(require('./templates/home').homePage(ctx, P, recipes, cats, { hp: hp.length, who: who.length }));
    emit(P.allRecipesPage(ctx, recipes, cats));
    for (const c of cats) emit(P.categoryPage(ctx, c.key, c.list, cats));
    for (const r of recipes) {
      const related = recipes.filter(x => x !== r && x.category === r.category).slice(0, 3);
      emit(P.recipePage(ctx, r, related));
    }
    emit(P.highProteinPage(ctx, hp, R.HP_MIN));
    emit(P.whoPage(ctx, who, recipes.length));
    emit(P.plansPage(ctx));
    const frag = n => fs.readFileSync(path.join(ROOT, 'content/pages', n), 'utf8')
      .replace(/\{\{BRAND\}\}/g, cfg.brand).replace(/\{\{EMAIL\}\}/g, cfg.contactEmail + (cfg.contactEmailIsPlaceholder ? ' (placeholder address)' : ''))
      .replace(/\{\{UPDATED\}\}/g, new Date().toISOString().slice(0, 10));
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
  console.log(C.grn(`Built ${pages.length} pages into ${cfg.outDir}/ (${recipes.length} recipes, ${cats.length} categories, ${hp.length} high-protein, ${who.length} WHO healthy).`));
  if (rp.length) console.log(`Largest recipe HTML: ${Math.max(...rp.map(p => p.bytes))} bytes`);
})().catch(e => { console.error(e); process.exit(1); });
