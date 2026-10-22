// Shared, tiny: theme switcher, mobile menu, hover prefetch, card fade-in, favourites.
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

  // theme
  var tb = d.getElementById('theme-btn'), tm = d.getElementById('theme-menu');
  function markTheme() { if (!tm) return; tm.querySelectorAll('[data-theme-id]').forEach(function (b) { b.setAttribute('aria-checked', b.dataset.themeId === html.dataset.theme ? 'true' : 'false'); }); }
  function closeTheme() { if (tm) { tm.hidden = true; tb.setAttribute('aria-expanded', 'false'); } }
  if (tb && tm) {
    markTheme();
    tb.addEventListener('click', function (e) { e.stopPropagation(); var open = tm.hidden; tm.hidden = !open; tb.setAttribute('aria-expanded', String(open)); if (open) { var c = tm.querySelector('[aria-checked=true]') || tm.querySelector('button'); c && c.focus(); } });
    tm.addEventListener('click', function (e) { var b = e.target.closest('[data-theme-id]'); if (!b) return; html.dataset.theme = b.dataset.themeId; ls('theme', b.dataset.themeId); markTheme(); closeTheme(); tb.focus(); });
    d.addEventListener('click', function (e) { if (!tm.hidden && !tm.contains(e.target)) closeTheme(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !tm.hidden) { closeTheme(); tb.focus(); } });
  }

  // mobile menu
  var mb = d.getElementById('menu-btn'), head = d.querySelector('.site-head');
  if (mb && head) mb.addEventListener('click', function () { var o = head.classList.toggle('nav-open'); mb.setAttribute('aria-expanded', String(o)); });

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
    d.querySelectorAll('.fav-btn[data-slug]').forEach(function (b) { var on = f.indexOf(b.dataset.slug) > -1; b.setAttribute('aria-pressed', String(on)); var l = b.querySelector('.fav-label'); if (l) l.textContent = on ? 'Saved' : 'Save'; });
  }
  d.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.fav-btn[data-slug]'); if (!b) return;
    var f = favs(), i = f.indexOf(b.dataset.slug); if (i > -1) f.splice(i, 1); else f.push(b.dataset.slug);
    ls('fav', JSON.stringify(f)); paint(); d.dispatchEvent(new CustomEvent('fav-change'));
  });
  paint();
})();
