(function () {
  'use strict';

  function trim(n, max) {
    var s = n.toFixed(max);
    if (s.indexOf('.') !== -1) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s;
  }

  function roundTo(value, step) {
    return Math.round(value / step) * step;
  }

  function fracStr(whole, frac, map, fallback) {
    var fs = map[frac] !== undefined ? map[frac] : '';
    var ws = whole > 0 ? String(whole) : '';
    if (!ws && !fs) return fallback;
    return ws + fs;
  }

  function formatGml(value, unit) {
    var rounded;
    if (value < 10) rounded = Math.max(0.5, roundTo(value, 0.5));
    else if (value < 100) rounded = roundTo(value, 1);
    else rounded = roundTo(value, 5);

    if (rounded >= 1000) {
      var big = rounded / 1000;
      var bigUnit = unit === 'g' ? 'kg' : 'l';
      return trim(big, 2) + ' ' + bigUnit;
    }
    var numStr = rounded % 1 === 0 ? String(rounded) : rounded.toFixed(1);
    return numStr + ' ' + unit;
  }

  function formatKgL(value, unit) {
    return trim(value, 2) + ' ' + unit;
  }

  function formatQuarter(value, unit) {
    var rounded = roundTo(value, 0.25);
    if (rounded < 0.25) rounded = 0.25;
    var whole = Math.floor(rounded + 1e-9);
    var frac = Math.round((rounded - whole) * 4) / 4;
    var map = { 0: '', 0.25: '¼', 0.5: '½', 0.75: '¾' };
    return fracStr(whole, frac, map, '¼') + ' ' + unit;
  }

  function formatHalf(value) {
    var rounded = roundTo(value, 0.5);
    if (rounded < 0.5) rounded = 0.5;
    var whole = Math.floor(rounded + 1e-9);
    var frac = rounded - whole;
    var map = { 0: '', 0.5: '½' };
    return fracStr(whole, Math.round(frac * 2) / 2, map, '½');
  }

  function formatQty(value, unit) {
    switch (unit) {
      case 'g':
      case 'ml':
        return formatGml(value, unit);
      case 'kg':
      case 'l':
        return formatKgL(value, unit);
      case 'tsp':
      case 'tbsp':
        return formatQuarter(value, unit);
      case 'pc':
        return formatHalf(value);
      case 'pinch':
        return Math.max(1, Math.round(value)) + ' pinch';
      default:
        var n = trim(value, 1);
        if (unit && value > 1 && /^(slice|clove|sprig|leaf|can|tin|bunch|handful|stick|sheet)$/.test(unit)) unit = unit === 'leaf' ? 'leaves' : unit + 's';
        return n + (unit ? ' ' + unit : '');
    }
  }

  function initScaler() {
    var scaler = document.querySelector('.scaler');
    if (!scaler) return;
    var output = scaler.querySelector('#servings');
    if (!output) return;
    var base = parseFloat(scaler.getAttribute('data-base')) || 1;
    var servings = parseFloat(output.textContent) || base;
    var ings = document.querySelectorAll('[data-qty]');
    var labels = document.querySelectorAll('[data-servings-label]');

    function update() {
      output.textContent = servings;
      labels.forEach(function (l) { l.textContent = servings; });
      ings.forEach(function (li) {
        var qtyAttr = li.getAttribute('data-qty');
        if (!qtyAttr) return;
        var qty = parseFloat(qtyAttr);
        if (isNaN(qty)) return;
        var unit = li.getAttribute('data-unit') || '';
        var span = li.querySelector('.q');
        if (!span) return;
        span.textContent = formatQty(qty * servings / base, unit);
      });
    }

    scaler.querySelectorAll('[data-scale]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var delta = parseInt(btn.getAttribute('data-scale'), 10) || 0;
        servings = Math.min(48, Math.max(1, servings + delta));
        update();
      });
    });

    update();
  }

  function initPrint() {
    var btn = document.getElementById('print-btn');
    if (!btn) return;
    btn.addEventListener('click', function () { window.print(); });
  }

  function initCookMode() {
    var cookBtn = document.getElementById('cook-btn');
    if (!cookBtn) return;
    var steps = Array.prototype.slice.call(document.querySelectorAll('.steps .step'));
    var cookBar = document.getElementById('cook-bar');
    var cookStatus = document.getElementById('cook-status');
    var cookPos = document.getElementById('cook-pos');

    var active = false;
    var currentIndex = 0;
    var wakeLock = null;
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setStatus(text) {
      if (cookStatus) cookStatus.textContent = text;
    }

    function requestWakeLock() {
      if (navigator.wakeLock && navigator.wakeLock.request) {
        navigator.wakeLock.request('screen').then(function (lock) {
          wakeLock = lock;
          setStatus('Screen will stay on');
        }).catch(function () {
          setStatus('Keep-awake not supported on this browser');
        });
      } else {
        setStatus('Keep-awake not supported on this browser');
      }
    }

    function releaseWakeLock() {
      if (wakeLock) {
        try { wakeLock.release(); } catch (e) {}
        wakeLock = null;
      }
    }

    function updatePos() {
      if (cookPos) cookPos.textContent = 'Step ' + (currentIndex + 1) + ' of ' + steps.length;
    }

    function showStep(idx) {
      if (!steps.length) return;
      if (idx < 0) idx = 0;
      if (idx > steps.length - 1) idx = steps.length - 1;
      currentIndex = idx;
      steps.forEach(function (s, i) {
        if (i === idx) s.classList.add('current');
        else s.classList.remove('current');
      });
      updatePos();
      steps[idx].scrollIntoView({ block: 'center', behavior: reducedMotion ? 'auto' : 'smooth' });
    }

    steps.forEach(function (s, i) {
      s.addEventListener('click', function () {
        if (active) showStep(i);
      });
    });

    function enterCook() {
      active = true;
      document.documentElement.classList.add('cook-mode');
      cookBtn.setAttribute('aria-pressed', 'true');
      if (cookBar) cookBar.hidden = false;
      requestWakeLock();
      showStep(0);
    }

    function exitCook() {
      active = false;
      document.documentElement.classList.remove('cook-mode');
      cookBtn.setAttribute('aria-pressed', 'false');
      if (cookBar) cookBar.hidden = true;
      releaseWakeLock();
      steps.forEach(function (s) { s.classList.remove('current'); });
    }

    cookBtn.addEventListener('click', function () {
      if (active) exitCook(); else enterCook();
    });

    if (cookBar) {
      cookBar.querySelectorAll('[data-step]').forEach(function (btn) {
        var action = btn.getAttribute('data-step');
        btn.addEventListener('click', function () {
          if (action === 'prev') showStep(currentIndex - 1);
          else if (action === 'next') showStep(currentIndex + 1);
          else if (action === 'exit') exitCook();
        });
      });
    }

    document.addEventListener('keydown', function (e) {
      if (!active) return;
      if (e.key === 'ArrowLeft') showStep(currentIndex - 1);
      else if (e.key === 'ArrowRight') showStep(currentIndex + 1);
      else if (e.key === 'Escape') exitCook();
    });

    document.addEventListener('visibilitychange', function () {
      if (active && document.visibilityState === 'visible') requestWakeLock();
    });
  }

  [initScaler, initPrint, initCookMode].forEach(function (fn) {
    try { fn(); } catch (e) {}
  });
})();
// Design D (Storybook): optional "one step at a time" pages over the same method.
(function () {
  var pg = document.getElementById('dpager'), tg = document.getElementById('dall'); if (!pg || !tg) return;
  var list = document.getElementById('r-steps'), steps = pg.querySelectorAll('.dpstep'), dots = pg.querySelectorAll('[data-dgo]'), i = 0;
  function show(n) { i = Math.max(0, Math.min(steps.length - 1, n)); steps.forEach(function (s, k) { s.hidden = k !== i; }); dots.forEach(function (d, k) { d.classList.toggle('on', k === i); d.classList.toggle('done', k < i); }); var c = document.getElementById('dp-i'); if (c) c.textContent = i + 1; }
  function mode(one) { pg.hidden = !one; if (list) list.hidden = one; tg.setAttribute('aria-pressed', String(one)); tg.textContent = one ? 'All steps at once' : 'One step at a time'; }
  tg.addEventListener('click', function () { mode(pg.hidden); });
  pg.addEventListener('click', function (e) { var b = e.target.closest('[data-dp],[data-dgo]'); if (!b) return; show(b.dataset.dgo != null ? +b.dataset.dgo : i + (+b.dataset.dp)); });
  var cb = document.getElementById('cook-btn'); if (cb) cb.addEventListener('click', function () { mode(false); }, true);
  show(0);
})();
