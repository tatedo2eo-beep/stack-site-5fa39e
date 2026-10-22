// Home only. Scroll-linked, never pins the page: the burger rides along (sticky inside the story),
// splits into labelled layers, re-stacks and lands in the featured-recipe card. Transform/opacity only.
(function () {
  var story = document.getElementById('story'), wrap = document.getElementById('bwrap'), cv = document.getElementById('cv');
  if (!story || !wrap || !cv) return;
  var slot = document.getElementById('slot'), N = +story.dataset.count || 30, base = story.dataset.frames, ctx = cv.getContext('2d');
  var labs = [].slice.call(wrap.querySelectorAll('.lab'));
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var imgs = [], cur = -1, want = 0, ticking = false, geo = null;
  function src(i) { return base + 'f' + (i < 9 ? '0' : '') + (i + 1) + '.webp'; }
  function load(i) { if (imgs[i]) return imgs[i]; var im = new Image(); im.decoding = 'async'; im.onload = function () { if (i === want) draw(i, 1); }; im.src = src(i); return (imgs[i] = im); }
  function draw(i, force) { if (i === cur && !force) return; var k = i; while (k >= 0 && !(imgs[k] && imgs[k].complete && imgs[k].naturalWidth)) k--; if (k < 0) return; ctx.clearRect(0, 0, cv.width, cv.height); ctx.drawImage(imgs[k], 0, 0, cv.width, cv.height); cur = i; }
  if (reduce) { want = N - 1; load(N - 1); labs.forEach(function (l) { l.style.opacity = 1; }); if (slot) slot.classList.add('landed'); return; }
  load(0);
  var rest = function () { for (var i = N - 1; i > 0; i--) load(i); };
  if ('requestIdleCallback' in window) requestIdleCallback(rest, { timeout: 1200 }); else setTimeout(rest, 300);
  var ss = function (x) { x = x < 0 ? 0 : x > 1 ? 1 : x; return x * x * (3 - 2 * x); };
  function measure() { wrap.style.transform = 'none'; geo = { x: wrap.offsetLeft, y: wrap.offsetTop, w: wrap.offsetWidth, h: wrap.offsetHeight, vh: innerHeight, wide: innerWidth >= 900 }; }
  function update() {
    ticking = false; if (!geo) measure();
    var r = story.getBoundingClientRect(); if (r.bottom < -50 || r.top > innerHeight) return;
    var p = Math.min(1, Math.max(0, -r.top / (story.offsetHeight - innerHeight)));
    // frames: 0-.14 whole, .14-.46 explode, .46-.6 hold, .6-.8 re-stack
    var f = p < .14 ? 0 : p < .46 ? ss((p - .14) / .32) : p < .6 ? 1 : 1 - ss((p - .6) / .2);
    want = Math.round(f * (N - 1)); draw(want);
    // travel: drifts down a little while splitting, then flies into the plate
    var tx = 0, ty = (ss(p / .46) * .06 - ss((p - .46) / .14) * .02) * geo.vh, sc = 1 - ss(p / .14) * .04 + ss((p - .14) / .32) * .04, rot = (1 - ss(p / .2)) * -5;
    if (!geo.wide) tx = -Math.max(0, geo.x + geo.w * .78 + 132 - innerWidth) * (p < .46 ? ss((p - .14) / .32) : 1 - ss((p - .6) / .1));
    var land = ss((p - .62) / .2), landed = false;
    if (land > 0 && slot) {
      var s = slot.getBoundingClientRect(), k = s.width / geo.w;
      var dx = s.left + s.width / 2 - (geo.x + geo.w / 2), dy = s.top + s.height / 2 - (geo.y + geo.h / 2);
      tx = tx + (dx - tx) * land; ty = ty + (dy - ty) * land; sc = sc + (k - sc) * land; rot = rot * (1 - land);
      landed = p > .84;
    }
    wrap.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
    wrap.style.opacity = landed ? 0 : 1;
    if (slot) slot.classList.toggle('landed', landed);
    var lo = p < .4 ? 0 : p < .6 ? Math.min(1, (p - .4) / .06) : Math.max(0, 1 - (p - .6) / .04);
    labs.forEach(function (l, i) { l.style.opacity = Math.max(0, Math.min(1, lo * 1.5 - i * .08)).toFixed(2); });
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', function () { geo = null; update(); });
  update();
})();
