/* Home intro: full-screen looping kitchen video, then the design hero (#home-hero) filling the screen.
   Gentle snap: from the video, any downward scroll (wheel, trackpad, touch, keys) glides to the hero; once there,
   going back up to the video needs a deliberate, larger upward gesture (resistance threshold), so trackpad momentum
   or a small flick never bounces back by accident. Below the hero the page scrolls natively.
   prefers-reduced-motion: the video stays paused on its poster and jumps are instant (no smooth animation). */
(function () {
  var kx = document.querySelector('.kx'), hero = document.getElementById('home-hero');
  if (!kx) return;
  var de = document.documentElement, v = kx.querySelector('video'), head = document.querySelector('body > header, header.top');
  var mq = matchMedia('(prefers-reduced-motion: reduce)'), RM = mq.matches;
  var T = 0;
  function measure() {
    de.style.setProperty('--hdr', (head ? head.offsetHeight : 0) + 'px');
    if (hero) T = Math.round(hero.getBoundingClientRect().top + scrollY);
  }
  measure();
  addEventListener('resize', measure); addEventListener('load', measure);

  // video: play only while visible, never under reduced motion
  function sync(vis) { if (!v) return; if (RM || !vis) { v.pause(); } else { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
  if (v) {
    if (RM) { v.removeAttribute('autoplay'); v.pause(); }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { sync(es[0].isIntersecting); }, { threshold: 0.01 }).observe(kx);
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (e) { RM = e.matches; sync(kx.getBoundingClientRect().bottom > 0); });
  }
  if (!hero) return;

  var UP_WHEEL = 380, UP_TOUCH = 150, GAP = 220; // px of deliberate upward scroll needed to go back to the video
  var anim = false, animT = 0, lastWheel = 0, gestureOk = false, upAcc = 0, lastInput = 0, armed = false;
  var y = function () { return scrollY || de.scrollTop || 0; };
  var atHero = function () { return Math.abs(y() - T) <= 2; };
  var inIntro = function () { return y() < T - 2; };
  function go(to) {
    measure(); if (to) to = T;
    anim = true; animT = Date.now(); upAcc = 0; gestureOk = false;
    scrollTo({ top: to, behavior: RM ? 'auto' : 'smooth' });
    var t0 = Date.now();
    (function wait() { if (Math.abs(y() - to) < 2 || Date.now() - t0 > 1100) { anim = false; armed = to === T; return; } requestAnimationFrame(wait); })();
  }
  armed = y() >= T - 2;

  addEventListener('wheel', function (e) {
    if (e.ctrlKey) return; // pinch zoom
    var now = Date.now(), d = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1);
    var fresh = now - lastWheel > GAP; lastWheel = now; lastInput = now;
    if (anim) { e.preventDefault(); return; }
    if (fresh) { gestureOk = true; upAcc = 0; } // a new gesture (not momentum of the one that brought us here)
    if (inIntro()) { e.preventDefault(); if (d > 0) go(T); else if (d < 0 && y() > 0) go(0); return; }
    if (d < 0 && (atHero() || y() + d < T)) {
      e.preventDefault();
      if (!atHero()) { scrollTo(0, T); return; } // scrolling up from further down stops at the hero
      if (!gestureOk) return;
      upAcc += -d; if (upAcc >= UP_WHEEL) go(0);
      return;
    }
    if (d > 0) upAcc = 0;
  }, { passive: false });

  var ty0 = 0, tyS = 0, tActive = false;
  addEventListener('touchstart', function (e) { if (e.touches.length !== 1) return; tActive = true; ty0 = e.touches[0].clientY; tyS = y(); lastInput = Date.now(); }, { passive: true });
  addEventListener('touchmove', function (e) {
    if (!tActive || e.touches.length !== 1) return;
    lastInput = Date.now();
    var dy = ty0 - e.touches[0].clientY; // > 0: page would scroll down
    if (anim) { e.preventDefault(); return; }
    if (tyS < T - 2) { e.preventDefault(); return; } // decided on touchend
    if (Math.abs(tyS - T) <= 2 && dy < 0) { e.preventDefault(); return; } // pulling down at the hero: resistance
    if (tyS > T + 2 && dy < 0 && y() <= T + 1) { e.preventDefault(); if (y() < T) scrollTo(0, T); }
  }, { passive: false });
  addEventListener('touchend', function (e) {
    if (!tActive) return; tActive = false; lastInput = Date.now();
    var dy = ty0 - (e.changedTouches[0] ? e.changedTouches[0].clientY : ty0);
    if (anim) return;
    if (tyS < T - 2) { if (dy > 24) go(T); else if (dy < -24 && tyS > 0) go(0); return; }
    if (Math.abs(tyS - T) <= 2 && -dy >= UP_TOUCH) go(0);
  }, { passive: true });

  // momentum / fling from below must not carry the page back into the video
  addEventListener('scroll', function () {
    if (anim) return;
    var cy = y();
    if (armed && cy < T - 1 && Date.now() - lastInput < 900) { scrollTo(0, T); return; }
    armed = cy >= T - 2;
  }, { passive: true });

  addEventListener('keydown', function (e) {
    var t = e.target; if (e.altKey || e.ctrlKey || e.metaKey || (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName)))) return;
    var k = e.key, down = k === 'ArrowDown' || k === 'PageDown' || (k === ' ' && !e.shiftKey), up = k === 'ArrowUp' || k === 'PageUp' || k === 'Home' || (k === ' ' && e.shiftKey);
    lastInput = Date.now();
    if (inIntro() && down) { e.preventDefault(); go(T); }
    else if (atHero() && up) { e.preventDefault(); go(0); }
  });
  var cue = kx.querySelector('.kx-cue');
  if (cue) cue.addEventListener('click', function (e) { e.preventDefault(); go(T); });
})();
