/* Drinks chapter showcase: arrows, dots, swipe and arrow keys move between drinks; the backdrop tone and the
   blurred copy of the photo follow the drink in front. Static with one drink. */
(function () {
  var root = document.querySelector('.dk.many');
  if (!root) return;
  var its = [].slice.call(root.querySelectorAll('.dk-it')), bgs = [].slice.call(root.querySelectorAll('.dk-bg')), dots = [].slice.call(root.querySelectorAll('.dk-dots button'));
  var n = its.length, pos = 0;
  function go(i) {
    pos = (i + n) % n;
    its.forEach(function (el, k) {
      var o = k - pos; if (o > n / 2) o -= n; if (o < -n / 2) o += n;
      el.style.setProperty('--o', Math.max(-2, Math.min(2, o))); el.style.setProperty('--a', Math.min(2, Math.abs(o)));
      el.classList.toggle('on', k === pos); el.setAttribute('aria-hidden', k === pos ? 'false' : 'true');
      el.querySelectorAll('a').forEach(function (a) { a.tabIndex = k === pos ? 0 : -1; });
    });
    bgs.forEach(function (b, k) { b.classList.toggle('on', k === pos); if (Math.abs(k - pos) <= 1) b.loading = 'eager'; });
    dots.forEach(function (d, k) { d.classList.toggle('on', k === pos); });
    root.style.setProperty('--tone', its[pos].style.getPropertyValue('--tone'));
  }
  root.querySelector('.dk-prev').onclick = function () { go(pos - 1); };
  root.querySelector('.dk-next').onclick = function () { go(pos + 1); };
  dots.forEach(function (d, k) { d.onclick = function () { go(k); }; });
  root.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { go(pos + 1); e.preventDefault(); } if (e.key === 'ArrowLeft') { go(pos - 1); e.preventDefault(); } });
  var tr = root.querySelector('.dk-track'), sx = null, sy = 0, swiped = false;
  tr.addEventListener('pointerdown', function (e) { sx = e.clientX; sy = e.clientY; });
  addEventListener('pointerup', function (e) { if (sx === null) return; var dx = e.clientX - sx, dy = e.clientY - sy; sx = null; swiped = Math.abs(dx) > 10; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(pos + (dx < 0 ? 1 : -1)); });
  // a swipe that starts on a card is not a click on it
  tr.addEventListener('click', function (e) { if (swiped) { e.preventDefault(); swiped = false; } }, true);
  go(0);
})();
