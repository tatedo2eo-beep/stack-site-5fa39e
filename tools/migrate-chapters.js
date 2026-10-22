// One-off: write chapter/dish/dish_title/flavour into recipe JSON files that don't have them yet.
// node tools/migrate-chapters.js [--dry]
const fs = require('fs'), path = require('path');
const map = require('./chapter-map.json');
const dir = path.join(__dirname, '../content/recipes');
let n = 0;
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
  const p = path.join(dir, f), r = JSON.parse(fs.readFileSync(p, 'utf8')), m = map[r.slug];
  if (!m || (r.chapter && r.dish && r.dish_title && r.flavour)) continue;
  const [chapter, dish, dish_title, flavour] = m;
  const out = {};
  for (const [k, v] of Object.entries(r)) { out[k] = v; if (k === 'category') Object.assign(out, { chapter: r.chapter || chapter, dish: r.dish || dish, dish_title: r.dish_title || dish_title, flavour: r.flavour || flavour }); }
  if (!process.argv.includes('--dry')) fs.writeFileSync(p, JSON.stringify(out, null, 2) + '\n');
  n++; console.log(`${r.slug}: ${chapter} / ${dish} / ${flavour}`);
}
console.log(`${n} recipe(s) migrated`);
