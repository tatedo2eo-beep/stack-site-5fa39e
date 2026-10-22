// Home scroll story engine (one scene per design, config in #story[data-cfg]). Flowing, never pinned:
// the stage is sticky inside the story track, and the page simply scrolls on into the design's home.
// Scroll scrubs a cut-out frame sequence on a canvas (cross-fading neighbours for smoothness), moves the
// camera (scale/offset) and sets only numbers (--k accent mix, --g glow, --p progress); all colours are
// the palette's CSS variables, so a palette switch recolours everything live. rAF-throttled, passive.
(function () {
  'use strict';
  var story = document.getElementById('story'); if (!story || !story.dataset.cfg) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var C = JSON.parse(story.dataset.cfg);
  var obj = story.querySelector('.s5-obj'), tilt = obj.classList.contains('s5-polaroid'), cv = story.querySelector('.s5-cv'), cx = cv.getContext('2d');
  var labs = story.querySelector('.s5-labs'), nEl = story.querySelector('.s5-n b');
  var macros = [].slice.call(story.querySelectorAll('.s5-macro'));
  var cl = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var ease = function (t) { return t * t * (3 - 2 * t); };
  function key(K, p) { // piecewise eased interpolation through [p, v] pairs
    if (!K || !K.length) return 0; if (p <= K[0][0]) return K[0][1];
    for (var i = 1; i < K.length; i++) if (p <= K[i][0]) { var a = K[i - 1], b = K[i]; return a[1] + (b[1] - a[1]) * ease((p - a[0]) / (b[0] - a[0] || 1)); }
    return K[K.length - 1][1];
  }
  var frames = new Array(C.n), loaded = 0, top0 = 0, len = 1, mobile = false, dpr = 1, last = -1, ticking = false;
  function measure() {
    mobile = innerWidth < 900; dpr = Math.min(2, window.devicePixelRatio || 1);
    top0 = story.getBoundingClientRect().top + scrollY; len = Math.max(1, story.offsetHeight - innerHeight);
    var w = cv.offsetWidth, h = cv.offsetHeight; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); last = -1;
  }
  function near(i) { for (var d = 0; d < C.n; d++) { if (frames[i - d] && frames[i - d].ok) return frames[i - d]; if (frames[i + d] && frames[i + d].ok) return frames[i + d]; } return null; }
  function draw(f) {
    var i = Math.floor(f), t = f - i, a = near(i), b = t > 0.02 && frames[i + 1] && frames[i + 1].ok ? frames[i + 1] : null;
    if (!a) return; cx.clearRect(0, 0, cv.width, cv.height);
    cx.globalAlpha = 1; cx.drawImage(a.im, 0, 0, cv.width, cv.height);
    if (b) { cx.globalAlpha = t; cx.drawImage(b.im, 0, 0, cv.width, cv.height); cx.globalAlpha = 1; }
  }
  function frame() {
    ticking = false;
    var p = cl((scrollY - top0) / len); if (Math.abs(p - last) < 0.0003) return; last = p;
    var s = story.style;
    s.setProperty('--p', p.toFixed(4)); s.setProperty('--k', key(C.k, p).toFixed(3)); s.setProperty('--g', key(C.g, p).toFixed(3));
    s.setProperty('--gx', (mobile ? 50 : 70) + '%'); s.setProperty('--gy', (mobile ? 40 : 50) + '%');
    var q = cl(key(C.seq, p)), sc = key(C.scale, p), y = key(C.y, p);
    if (loaded) draw(q * (C.n - 1));
    obj.style.transform = (mobile ? 'translate(-50%,-50%) ' : 'translate(0,-50%) ') + 'translateY(' + y.toFixed(2) + '%) scale(' + sc.toFixed(4) + ')' + (tilt ? ' rotate(' + (-3 + 4 * p).toFixed(2) + 'deg)' : '');
    // scanner line passes over the food while the sequence plays
    var on = q > 0 && q < 1 ? 1 : 0; obj.style.setProperty('--sc', ((q * 3) % 1).toFixed(3)); obj.style.setProperty('--so', (on * 0.55).toFixed(2));
    // labels appear around the first third of the sequence
    labs.style.setProperty('--lo', (cl((q - 0.15) / 0.12) * (1 - cl((q - 0.7) / 0.15))).toFixed(3));
    labs.style.transform = obj.style.transform;
    macros.forEach(function (m, j) { var M = C.macros[j]; var o = key(M.o, p); m.style.opacity = o.toFixed(3); if (o > 0) { m.firstElementChild.style.transform = 'scale(' + key(M.z, p).toFixed(4) + ')'; m.style.setProperty('--sw', (-60 + 120 * cl((p - M.o[0][0]) / (M.o[M.o.length - 1][0] - M.o[0][0]))) + '%'); } });
    if (nEl) nEl.textContent = '0' + Math.min(5, 1 + Math.floor(p * 5));
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  function loadSeq() {
    // poster is frame 0; fetch the rest after first paint, in an order that fills the timeline evenly
    var order = [0, C.n - 1], step = C.n >> 1; while (step >= 1) { for (var i = step; i < C.n; i += step * 2) order.push(i); step >>= 1; }
    var seen = {}; order = order.filter(function (i) { return seen[i] ? false : (seen[i] = 1); });
    for (var k = 0; k < C.n; k++) if (!seen[k]) order.push(k);
    var at = 0, busy = 0;
    function next() {
      while (busy < 4 && at < order.length) {
        (function (i) { busy++; var im = new Image(); im.decoding = 'async'; im.onload = function () { frames[i] = { im: im, ok: true }; busy--; loaded++; if (loaded === 1) story.classList.add('s5-live'); last = -1; req(); next(); }; im.onerror = function () { busy--; next(); }; im.src = C.base + (i < 10 ? '0' : '') + i + '.webp'; })(order[at++]);
      }
    }
    next();
    macros.forEach(function (m) { var i = m.firstElementChild; i.src = innerWidth > 1200 ? i.dataset.srcLg : i.dataset.src; });
  }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', function () { measure(); req(); });
  // the palette picker only changes CSS variables; nothing to redo here, but re-measure on layout changes
  if ('ResizeObserver' in window) new ResizeObserver(function () { measure(); req(); }).observe(story);
  measure(); req();
  var go = function () { if (window.requestIdleCallback) requestIdleCallback(loadSeq, { timeout: 800 }); else setTimeout(loadSeq, 200); };
  if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
})();
