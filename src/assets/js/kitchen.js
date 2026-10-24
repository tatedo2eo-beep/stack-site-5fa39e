/* Home v3 intro: the kitchen video scrubbed by scroll (no autoplay). The .kx track is ~280vh with a sticky 100dvh stage;
   scroll progress through the track -> video.currentTime, eased with a rAF lerp, one seek in flight at a time.
   End of the video: when scrolling stops between the video end and the header, the page settles on the header + design
   hero (one screen, no gap) going down, or back on the last video frame going up, so reversing is easy (plain native
   scroll; no locks). prefers-reduced-motion: poster only, no track, no snapping.
   Below: the pinned featured recipe (.kf) reveal and the counters (.kn). */
(function () {
  var kx = document.querySelector('.kx'), de = document.documentElement;
  var head = document.getElementById('top'), dz = document.getElementById('dz');
  var mq = matchMedia('(prefers-reduced-motion: reduce)'), RM = mq.matches;
  var kf = document.querySelector('.kf'), kfImg = kf && kf.querySelector('.kf-photo img'), kfItems = kf ? [].slice.call(kf.querySelectorAll('.kf-i')) : [];
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var Y = function () { return scrollY || de.scrollTop || 0; };

  // counters
  var counters = [];
  var cio = 'IntersectionObserver' in window && !RM ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (!e.isIntersecting) return; counters.push({ el: e.target, to: +e.target.dataset.c, t0: performance.now() }); cio.unobserve(e.target); kick(); });
  }, { rootMargin: '0px 0px -10% 0px' }) : null;
  if (cio) [].forEach.call(document.querySelectorAll('.kn [data-c]'), function (el) { el.textContent = '0'; cio.observe(el); });
  function tickCounters(now) {
    for (var i = counters.length - 1; i >= 0; i--) { var c = counters[i], k = Math.min(1, (now - c.t0) / 1400), e = 1 - Math.pow(1 - k, 4);
      c.el.textContent = Math.round(c.to * e); if (k === 1) counters.splice(i, 1); }
  }
  if (RM) kfItems.forEach(function (x) { x.classList.add('on'); });

  var v = kx && kx.querySelector('video'), inner = kx && kx.querySelector('.kx-in'), bar = kx && kx.querySelector('.kx-bar i'), cue = kx && kx.querySelector('.kx-cue');
  var vh = innerHeight, kT = 0, kH = 1, trackEnd = 0, headTop = 0, kfT = 0, kfH = 1;
  function measure() {
    vh = innerHeight; var y = Y();
    if (head) de.style.setProperty('--hdr', head.offsetHeight + 'px');
    if (kx) { var r = kx.getBoundingClientRect(); kT = r.top + y; kH = Math.max(1, kx.offsetHeight - vh); trackEnd = kT + kH; }
    if (dz) headTop = Math.round(dz.getBoundingClientRect().top + y); else headTop = trackEnd + vh;
    if (kf) { r = kf.getBoundingClientRect(); kfT = r.top + y; kfH = Math.max(1, kf.offsetHeight - vh); }
  }

  // video scrubbing
  var dur = 0, shown = 0, target = 0, seeking = false, primed = false;
  function onMeta() { dur = v.duration || 0; if (dur) { target = progress() * dur; kick(); } }
  function progress() { return clamp((Y() - kT) / kH, 0, 1); }
  if (v && !RM) {
    v.pause();
    v.addEventListener('loadedmetadata', onMeta); if (v.readyState >= 1) onMeta();
    v.addEventListener('seeked', function () { seeking = false; kick(); });
    // iOS/Safari only paints a seeked frame once the element has been "played" by a gesture: prime it silently once
    var prime = function () { if (primed) return; primed = true; var p = v.play(); if (p && p.then) p.then(function () { v.pause(); seek(); }).catch(function () {}); else v.pause(); };
    addEventListener('touchstart', prime, { passive: true, once: true });
    addEventListener('pointerdown', prime, { passive: true, once: true });
  } else if (v) { v.removeAttribute('preload'); v.preload = 'none'; [].forEach.call(v.querySelectorAll('source'), function (s) { s.remove(); }); }
  function seek() {
    if (!dur || seeking) return;
    var t = clamp(shown, 0, dur - 0.04);
    if (Math.abs(v.currentTime - t) < 0.02) return;
    seeking = true; v.currentTime = t;
  }

  // snapping at the end of the video
  var lastY = Y(), dir = 1, snapTimer = 0, snapping = 0;
  function settle() {
    if (RM || !kx) return;
    var y = Y();
    if (snapping && Math.abs(y - snapping) < 4) { snapping = 0; return; }
    var lo = trackEnd, hi = headTop;
    if (y > lo + 2 && y < hi - 2) {
      var to = dir > 0 ? hi : lo;
      if (dir > 0 && y < lo + (hi - lo) * 0.12) to = lo;   // a nudge past the end still shows the end frame
      if (dir < 0 && y > hi - (hi - lo) * 0.12) to = hi;   // a tiny nudge up from the header stays on the header
      snapping = to; scrollTo({ top: to, behavior: 'smooth' });
    } else if (dir > 0 && y >= lo - vh * 0.06 && y <= lo + 2 && v && dur && shown >= dur * 0.97) {
      snapping = hi; scrollTo({ top: hi, behavior: 'smooth' }); // the video has reached its end: lock in the header + hero
    }
  }
  function onScroll() {
    var y = Y(); if (y !== lastY) { dir = y > lastY ? 1 : -1; lastY = y; }
    clearTimeout(snapTimer); snapTimer = setTimeout(settle, 160);
    kick();
  }
  if ('onscrollend' in window) addEventListener('scrollend', function () { clearTimeout(snapTimer); snapTimer = setTimeout(settle, 60); });

  var run = false, lastT = 0, kq = -9, kfOn = -1, lastP = -1;
  function frame(t) {
    var dt = lastT ? Math.min(64, t - lastT) : 16.7; lastT = t;
    var y = Y(), busy = false;
    if (kx && y < trackEnd + vh) {
      var p = progress();
      if (p !== lastP) {
        lastP = p;
        if (inner) { var o = clamp(1 - p / 0.16, 0, 1); inner.style.opacity = o; inner.style.transform = 'translate3d(0,' + (-40 * (1 - o)).toFixed(1) + 'px,0) scale(' + (1 + 0.04 * (1 - o)).toFixed(3) + ')'; }
        if (cue) cue.style.opacity = clamp(1 - p / 0.05, 0, 1);
        if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      }
      if (v && dur && !RM) {
        target = p * dur;
        shown += (target - shown) * (1 - Math.pow(1 - 0.16, dt / 16.7));
        if (Math.abs(target - shown) < 0.004) shown = target;
        seek();
        busy = shown !== target || seeking;
      }
    }
    if (kf && !RM) {
      var q = clamp((y - kfT) / kfH, -1, 1.2);
      if (Math.abs(q - kq) > .0005 && y > kfT - vh && y < kfT + kfH + vh) {
        kq = q; var z = clamp(q, 0, 1);
        if (kfImg) kfImg.style.transform = 'translate3d(0,' + ((z - .5) * -5).toFixed(2) + '%,0) scale(' + (1.16 - .12 * z).toFixed(4) + ')';
        var on = q > -.12 ? Math.floor((q + .12) / .05) : -1;
        if (on !== kfOn) { kfOn = on; for (var j = 0; j < kfItems.length; j++) kfItems[j].classList.toggle('on', +kfItems[j].style.getPropertyValue('--d') <= on); }
      }
    }
    tickCounters(t);
    if (busy || counters.length) requestAnimationFrame(frame); else { run = false; lastT = 0; }
  }
  function kick() { if (!run) { run = true; requestAnimationFrame(frame); } }
  measure();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', function () { measure(); lastP = -1; kick(); });
  addEventListener('load', function () { measure(); kick(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); });
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (e) { RM = e.matches; });
  kick();
  window.__kx = { get shown() { return shown; }, get dur() { return dur; }, get trackEnd() { return trackEnd; }, get headTop() { return headTop; } };
})();
