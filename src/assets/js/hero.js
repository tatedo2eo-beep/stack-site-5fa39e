// Home story v4: flowing scroll (never pinned). Black -> deep ember -> theme accent; the burger splits
// into its layers, the camera dives into the crust and the melting cheddar, then the stack lands in
// the featured card. transform/opacity only, rAF-throttled, passive scroll, reduced-motion = static.
(function () {
  'use strict';
  var story = document.getElementById('story'); if (!story) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var stage = story.querySelector('.s4-stage'), burger = document.getElementById('burger');
  var layers = [].slice.call(story.querySelectorAll('.s4-l')), labs = [].slice.call(story.querySelectorAll('.s4-lab'));
  var mC = document.getElementById('m-crust'), mH = document.getElementById('m-cheese');
  var slot = document.getElementById('slot'), nEl = document.getElementById('s4-n'), bar = document.getElementById('s4-bar');
  var BW = 1.12, BH = 1.5;
  var cl = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var sm = function (a, b, v) { var t = cl((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  function hex(c) { c = (c || '').trim(); if (c[0] !== '#') return [201, 164, 92]; if (c.length === 4) c = '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3]; return [1, 3, 5].map(function (i) { return parseInt(c.substr(i, 2), 16); }); }
  var acc = hex(getComputedStyle(document.documentElement).getPropertyValue('--accent'));
  var dark = [11, 8, 6], mix = function (a, b, t) { return [0, 1, 2].map(function (i) { return Math.round(lerp(a[i], b[i], t)); }); };
  // background stops: black -> deep ember -> ember glow -> theme accent (kept dark enough for white text)
  var STOPS = [[0, [0, 0, 0]], [0.18, [16, 5, 2]], [0.36, [43, 13, 5]], [0.58, [70, 22, 8]], [0.8, mix(acc, dark, 0.62)], [1, mix(acc, dark, 0.5)]];
  function bg(p) { for (var i = 1; i < STOPS.length; i++) if (p <= STOPS[i][0]) { var a = STOPS[i - 1], b = STOPS[i]; var c = mix(a[1], b[1], (p - a[0]) / (b[0] - a[0])); return 'rgb(' + c.join(',') + ')'; } return 'rgb(' + STOPS[STOPS.length - 1][1].join(',') + ')'; }
  var L = layers.map(function (el) { return { el: el, y: +el.dataset.y, ey: +el.dataset.ey, s: +el.dataset.s, k: el.dataset.k, h: 0 }; });
  var labByK = {}; labs.forEach(function (l) { labByK[l.dataset.k] = l; });
  var W = 0, H = 0, vh = 0, top0 = 0, len = 1, mobile = false;
  function measure() {
    vh = innerHeight; mobile = innerWidth < 900;
    var r = story.getBoundingClientRect(); top0 = r.top + scrollY; len = Math.max(1, story.offsetHeight - vh);
    var bw = burger.offsetWidth; W = bw / BW; H = bw * BH / BW;
    L.forEach(function (l) { var w = W * l.s, ratio = (l.el.naturalHeight || 1) / (l.el.naturalWidth || 1); l.h = w * ratio; l.el.style.width = w + 'px'; l.el.style.left = (bw - w) / 2 + 'px'; l.el.style.top = (H / 2 - l.h / 2) + 'px'; });
  }
  var ready = false, lastP = -1, ticking = false;
  function frame() {
    ticking = false;
    var p = cl((scrollY - top0) / len); if (Math.abs(p - lastP) < 0.0004) return; lastP = p;
    story.style.backgroundColor = bg(p);
    var e = sm(0.08, 0.26, p) * (1 - sm(0.70, 0.84, p));               // explode
    var z = sm(0.33, 0.45, p) * (1 - sm(0.66, 0.76, p));               // dive into the patty
    var lab = sm(0.18, 0.26, p) * (1 - sm(0.32, 0.37, p));
    var crust = sm(0.39, 0.46, p) * (1 - sm(0.53, 0.59, p)), cheese = sm(0.53, 0.59, p) * (1 - sm(0.69, 0.75, p));
    var fly = sm(0.84, 0.97, p);
    mC.style.opacity = crust.toFixed(3); mH.style.opacity = cheese.toFixed(3);
    mC.firstElementChild.style.transform = 'scale(' + lerp(1.02, 1.22, sm(0.38, 0.6, p)).toFixed(4) + ')';
    mH.firstElementChild.style.transform = 'scale(' + lerp(1.04, 1.26, sm(0.52, 0.76, p)).toFixed(4) + ') translateY(' + lerp(0, -3, sm(0.52, 0.76, p)).toFixed(2) + '%)';
    mC.style.setProperty('--sw', lerp(-60, 60, sm(0.40, 0.58, p)) + '%'); mH.style.setProperty('--sw', lerp(-60, 60, sm(0.54, 0.74, p)) + '%');
    // group: shrink a little while split so the whole stack fits; slide left on phones for the labels
    var gs = lerp(1, mobile ? 0.82 : 0.9, e), gx = mobile ? lerp(0, -13, e) : 0, gy = 0;
    // fly into the featured card slot
    if (fly > 0 && slot) {
      var sr = slot.getBoundingClientRect(), br = burger.getBoundingClientRect();
      var cur = burger.style.transform; burger.style.transform = ''; br = burger.getBoundingClientRect(); burger.style.transform = cur;
      var tx = (sr.left + sr.width / 2) - (br.left + br.width / 2), ty = (sr.top + sr.height / 2) - (br.top + br.height / 2);
      var ts = Math.min(sr.height / br.height, sr.width / br.width) * 0.95;
      gs = lerp(gs, ts, fly); gx = 0; burger.style.setProperty('--tx', (tx * fly) + 'px'); gy = ty * fly;
      burger.style.transform = (mobile ? 'translate(-50%,-46%) ' : 'translate(0,-48%) ') + 'translate(' + (tx * fly).toFixed(1) + 'px,' + gy.toFixed(1) + 'px) scale(' + gs.toFixed(4) + ')';
    } else burger.style.transform = (mobile ? 'translate(-50%,-46%) ' : 'translate(0,-48%) ') + 'translateX(' + gx.toFixed(2) + 'vw) scale(' + gs.toFixed(4) + ')';
    burger.style.opacity = (1 - sm(0.965, 0.99, p)).toFixed(3);
    if (slot) slot.classList.toggle('landed', p > 0.95);
    L.forEach(function (l) {
      var y = lerp(l.y, l.ey, e) * W, sc = 1, o = 1;
      if (l.k === 'patty-cheese') { sc = lerp(1, 3.4, z); y = lerp(y, 0, z); o = 1 - sm(0.43, 0.47, p) * (1 - sm(0.66, 0.72, p)); }
      else { o = 1 - z; y += (l.ey < 0 ? -1 : 1) * z * H * 0.6; }
      l.el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(' + sc.toFixed(4) + ')';
      l.el.style.opacity = o.toFixed(3);
      var lb = labByK[l.k]; if (lb) { lb.style.opacity = lab.toFixed(3); lb.style.top = (H / 2 + y) + 'px'; }
    });
    var sec = Math.min(5, 1 + Math.floor(p * 5)); if (nEl) nEl.textContent = '0' + sec;
    if (bar) bar.style.transform = 'scaleY(' + p.toFixed(3) + ')';
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  // lazy: layers after first paint (poster shows until then), macros when the story starts moving
  var big = innerWidth >= +story.dataset.lg && (window.devicePixelRatio || 1) >= 1;
  function load(img, src) { return new Promise(function (res) { img.onload = img.onerror = function () { res(); }; img.src = src; }); }
  function loadLayers() { Promise.all(L.map(function (l) { return load(l.el, l.el.dataset.src); })).then(function () { measure(); ready = true; story.classList.add('s4-ready'); lastP = -1; req(); }); }
  var macrosLoaded = false;
  function loadMacros() { if (macrosLoaded) return; macrosLoaded = true; [mC, mH].forEach(function (m) { var i = m.firstElementChild; i.src = big && innerWidth > 1200 ? i.dataset.srcLg : i.dataset.src; }); }
  addEventListener('load', function () { if (window.requestIdleCallback) requestIdleCallback(loadLayers, { timeout: 600 }); else setTimeout(loadLayers, 200); }, { once: true });
  addEventListener('scroll', function () { if (scrollY > 40) loadMacros(); req(); }, { passive: true });
  addEventListener('resize', function () { measure(); lastP = -1; req(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) req(); }).observe(story);
  measure(); req();
  if (document.readyState === 'complete') loadLayers();
})();
