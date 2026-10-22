// Photo rule (same as the cookbook's check_unique_images.py): on the home, chapters and chapter pages,
// every featured/decorative photo carries data-slot. No photo may be used by two designs, and within one
// design a photo may fill only one slot (the same slot on two pages, e.g. a chapter cover on the home
// grid and on the chapter page, counts once). Recipe and dish cards show their own photo and are exempt;
// any other unslotted photo on these pages fails too. The build stops on any failure.
'use strict';
const TAG = /<[a-z][^>]*>/gi;
function slotsIn(html) {
  const out = [];
  for (const tag of html.match(TAG) || []) {
    const urls = [...tag.matchAll(/img\/t\/[^"'&)\s]+/g)].map(m => m[0]);
    if (!urls.length) continue;
    const s = /data-slot="([^"]+)"/.exec(tag);
    for (const u of new Set(urls)) out.push({ url: u, slot: s ? s[1] : null });
  }
  return out;
}
function checkPhotos(pages, cardPhotos) {
  const per = {}, owner = {}, fail = [];
  for (const { path: p, views } of pages) {
    if (!views) continue;
    for (const [d, html] of Object.entries(views)) {
      for (const { url, slot } of slotsIn(html)) {
        if (!slot) { if (!cardPhotos.has(url)) fail.push(`${d} ${p || 'home'}: ${url} has no data-slot and is not a recipe/dish card photo`); continue; }
        ((per[d] = per[d] || {})[url] = per[d][url] || new Set()).add(slot);
        (owner[url] = owner[url] || new Set()).add(d);
      }
    }
  }
  for (const [d, m] of Object.entries(per)) for (const [u, s] of Object.entries(m)) if (s.size > 1) fail.push(`${d}: ${u} repeats in slots ${[...s].sort().join(', ')}`);
  for (const [u, ds] of Object.entries(owner)) if (ds.size > 1) fail.push(`${u} is shared by designs ${[...ds].sort().join(', ')}`);
  return { fail, counts: Object.fromEntries(Object.entries(per).map(([d, m]) => [d, Object.keys(m).length])) };
}
module.exports = { checkPhotos, slotsIn };
