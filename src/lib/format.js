'use strict';
// Same rounding rules as src/assets/js/recipe.js so the no-JS page matches the scaled one.
const trim = (n, max) => { let s = n.toFixed(max); if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, ''); return s; };
const roundTo = (v, s) => Math.round(v / s) * s;
const FR4 = { 0: '', 0.25: '¼', 0.5: '½', 0.75: '¾' };
function frac(v, step, min) {
  let r = Math.max(min, roundTo(v, step)); const w = Math.floor(r + 1e-9); const f = Math.round((r - w) / step) * step;
  return (w > 0 ? String(w) : '') + (FR4[f] || '');
}
const COUNT_UNITS = /^(slice|clove|sprig|leaf|can|tin|bunch|handful|stick|sheet)$/;
function formatQty(q, unit) {
  if (q === null || q === undefined) return unit === 'to taste' ? 'to taste' : '';
  switch (unit) {
    case 'g': case 'ml': {
      let r = q < 10 ? Math.max(0.5, roundTo(q, 0.5)) : q < 100 ? roundTo(q, 1) : roundTo(q, 5);
      if (r >= 1000) return trim(r / 1000, 2) + ' ' + (unit === 'g' ? 'kg' : 'l');
      return (r % 1 === 0 ? String(r) : r.toFixed(1)) + ' ' + unit;
    }
    case 'kg': case 'l': return trim(q, 2) + ' ' + unit;
    case 'tsp': case 'tbsp': return frac(q, 0.25, 0.25) + ' ' + unit;
    case 'pc': return frac(q, 0.5, 0.5);
    case 'pinch': return Math.max(1, Math.round(q)) + ' pinch';
    default: {
      let u = unit; if (u && q > 1 && COUNT_UNITS.test(u)) u = u === 'leaf' ? 'leaves' : u + 's';
      return trim(q, 1) + (u ? ' ' + u : '');
    }
  }
}
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const iso = m => `PT${Math.floor(m / 60) ? Math.floor(m / 60) + 'H' : ''}${m % 60 || !Math.floor(m / 60) ? (m % 60) + 'M' : ''}`;
const mins = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + (m % 60) + ' min' : ''}` : `${m} min`;
module.exports = { formatQty, esc, iso, mins };
