// Shared, tiny: look picker (5 designs x 3 palettes), hover prefetch, favourites, premium preview.
(function () {
  'use strict';
  var d = document, html = d.documentElement;
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  // premium preview (TEST ONLY, ?preview=premium / ?preview=off): show full premium pages, hide ads
  if (html.classList.contains('is-premium')) {
    var tpl = d.getElementById('premium-full');
    if (tpl && tpl.content) [].forEach.call(tpl.content.children, function (part) { var into = d.getElementById(part.dataset.into); if (into) { into.innerHTML = ''; while (part.firstChild) into.appendChild(part.firstChild); } });
    var art = d.querySelector('.recipe.is-locked'); if (art) art.classList.remove('is-locked');
    var bn = d.createElement('div'); bn.className = 'preview-bar'; bn.innerHTML = 'Premium preview is on (test only). <a href="?preview=off">Turn off</a>';
    d.body.insertBefore(bn, d.body.firstChild);
  }

  // looks: 5 designs x 3 palettes. Palette = CSS variables (instant). Design = different layout
  // (each page carries all 5; switching reloads so every script starts on the new markup).
  var pp = d.getElementById('palpanel'), opener = null;
  function markPal() {
    if (!pp) return;
    pp.querySelectorAll('.pald').forEach(function (el) { el.classList.toggle('on', el.dataset.d === html.dataset.design); });
    pp.querySelectorAll('.dot').forEach(function (b) { var on = b.dataset.d === html.dataset.design && b.dataset.p === html.dataset.pal; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); if (on) { var box = b.closest('.pald'); var pn = box.querySelector('.pn'); if (pn) pn.textContent = b.title; } });
  }
  function openPal(o) { if (!pp) return; pp.hidden = !o; if (o) { markPal(); var f = pp.querySelector('.pald.on .prev') || pp.querySelector('button'); f && f.focus(); } else if (opener) opener.focus(); }
  d.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-act]'); if (!t) { if (pp && !pp.hidden && e.target === pp) openPal(false); return; }
    var act = t.dataset.act;
    if (act === 'pal') { opener = t; openPal(true); }
    else if (act === 'palclose') openPal(false);
    else if (act === 'theme') {
      var dz = t.dataset.d, pz = t.dataset.p, same = dz === html.dataset.design;
      ls('design', dz); ls('pal', pz); html.dataset.pal = pz;
      if (same) { markPal(); } else { html.dataset.design = dz; location.reload(); }
    }
  });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pp && !pp.hidden) openPal(false); });

  // prefetch same-origin pages on hover / touch / focus (each page is a real page load)
  var done = {};
  var sup = (function () { var l = d.createElement('link'); return l.relList && l.relList.supports && l.relList.supports('prefetch'); })();
  var conn = navigator.connection;
  function prefetch(a) {
    if (!sup || (conn && (conn.saveData || /2g/.test(conn.effectiveType || '')))) return;
    if (!a || !a.href || a.origin !== location.origin || a.hash && a.pathname === location.pathname || /\.(mp4|webp|jpg|png|svg|xml|txt)$/.test(a.pathname)) return;
    var h = a.href.split('#')[0]; if (done[h] || h === location.href.split('#')[0]) return; done[h] = 1;
    var l = d.createElement('link'); l.rel = 'prefetch'; l.href = h; d.head.appendChild(l);
  }
  var timer;
  d.addEventListener('pointerover', function (e) { var a = e.target.closest && e.target.closest('a[href]'); if (!a) return; clearTimeout(timer); timer = setTimeout(function () { prefetch(a); }, 65); }, { passive: true });
  d.addEventListener('touchstart', function (e) { prefetch(e.target.closest && e.target.closest('a[href]')); }, { passive: true });
  d.addEventListener('focusin', function (e) { prefetch(e.target.closest && e.target.closest('a[href]')); });

  // fade-in
  var els = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  // favourites (localStorage "fav" = array of slugs)
  function favs() { try { var a = JSON.parse(ls('fav') || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function paint() {
    var f = favs();
    d.querySelectorAll('.card[data-slug]').forEach(function (c) { c.classList.toggle('is-fav', f.indexOf(c.dataset.slug) > -1); });
    d.querySelectorAll('.fav-btn[data-slug]').forEach(function (b) { var on = f.indexOf(b.dataset.slug) > -1; b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); var l = b.querySelector('.fav-label'); if (l) l.textContent = on ? 'Saved' : 'Save'; });
  }
  d.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.fav-btn[data-slug]'); if (!b) return;
    var f = favs(), i = f.indexOf(b.dataset.slug); if (i > -1) f.splice(i, 1); else f.push(b.dataset.slug);
    ls('fav', JSON.stringify(f)); paint(); d.dispatchEvent(new CustomEvent('fav-change'));
  });
  paint();
})();
