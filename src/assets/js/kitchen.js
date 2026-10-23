/* Home hero: kitchen fly-through scrubbed by scroll (canvas frame sequence), pinned featured recipe, counters.
   Native scroll only. Sharp frames are fetched nearest-first around the current position; the small
   low-res set only fills a frame for a moment until its sharp version has arrived. */
(function () {
  var hero = document.querySelector('.kx');
  if (!hero) return;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var kf = document.querySelector('.kf'), kfImg = kf && kf.querySelector('.kf-photo img'), kfItems = kf ? [].slice.call(kf.querySelectorAll('.kf-i')) : [];
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
  if (RM) { kfItems.forEach(function (x) { x.classList.add('on'); }); return; }

  var N = +hero.dataset.n, BASE = hero.dataset.base, LUT = [0,1.5,2.9,4.2,5.6,6.8,8,9.1,10.2,11.3,12.3,13.3,14.2,15.1,16,16.9,17.7,18.6,19.4,20.2,20.9,21.7,22.4,23.2,23.9,24.7,25.5,26.2,26.9,27.7,28.4,29.1,29.8,30.5,31.2,31.8,32.5,33.1,33.8,34.4,35,35.7,36.3,36.9,37.5,38,38.6,39.2,39.7,40.3,40.8,41.3,41.8,42.4,42.9,43.4,43.9,44.3,44.8,45.3,45.8,46.2,46.7,47.2,47.7,48.1,48.6,49.1,49.6,50,50.5,51,51.5,51.9,52.4,52.9,53.4,53.8,54.3,54.8,55.3,55.7,56.2,56.7,57.1,57.6,58.1,58.6,59,59.6,60.1,60.6,61.2,61.7,62.3,62.9,63.6,64.3,65,65.9,66.7,67.6,68.5,69.4,70.3,71.2,72.1,73.1,74,75,76,77,78,79,80.1,81.1,82.2,83.4,84.5,85.7,86.9,88.1,89.3,90.5,91.8,93.1,94.4,95.9,97.3,98.8,100.4,102,103.6,105.1,106.7,108.4,110,111.7,113.4,115.1,116.8,118.5,120.2,121.4,122.7,124,125.2,126.4,127.6,128.7,129.8,130.9,131.9,133,133.9,134.9,135.9,136.8,137.7,138.6,139.5,140.4,141.3,142.1,143,143.8,144.6,145.5,146.3,147.1,147.9,148.8,149.6,150.4,151.2,152,152.9,153.7,154.5,155.3,156.1,156.9,157.7,158.5,159.3,160.2,161,161.8,162.6,163.5,164.3,165.2,166.1,166.9,167.8,168.7,169.6,170.5,171.5,172.4,173.3,174.3,175.2,176,176.9,177.8,178.7,179.6,180.5,181.4,182.3,183.2,184.1,184.9,185.8,186.7,187.5,188.4,189.2,190.1,190.9,191.8,192.7,193.6,194.4,195.3,196.2,197.1,198,199,199.9,200.8,201.8,202.8,203.8,204.8,205.9,207,208.1,209.3,210.5,211.7,213,214.3,215.7,217,218.5,219.9,221.4,223,224.5,226.2,227.9,229.6,231.4,233.3,235.2,237.1,239.1,240.9,242.5,244.1,245.6,247.2,248.7,250.1,251.6,253.1,254.5,255.9,257.3,258.6,260,261.3,262.5,263.8,265,266.1,267.3,268.4,269.5,270.6,271.6,272.6,273.6,274.6,275.5,276.5,277.4,278.3,279.2,280,280.9,281.8,282.6,283.4,284.3,285.1,285.9,286.7,287.5,288.3,289.1,289.9,290.6,291.4,292.1,292.9,293.7,294.4,295.2,296,296.8,297.6,298.3,299.1,299.9,300.7,301.5,302.3,303.2,304,304.8,305.7,306.5,307.3,308.2,309,309.9,310.7,311.6,312.5,313.4,314.3,315.2,316.1,317,317.9,318.9,319.8,320.8,321.7,322.7,323.7,324.7,325.7,326.7,327.7,328.8,329.8,330.9,332,333.1,334.2,335.3,336.5,337.6,338.8,340.1,341.3,342.6,343.9,345.3,346.8,348.3,349.8,351.5,353.2,354.9,356.8,358.7,360.4,361.6,362.8,364,365.1,366.2,367.3,368.4,369.5,370.6,371.6,372.7,373.7,374.7,375.7,376.7,377.6,378.6,379.6,380.5,381.5,382.4,383.4,384.3,385.3,386.2,387.2,388.1,389.1,390,391,392,392.9,393.8,394.7,395.6,396.5,397.3,398.1,399,399.8,400.6,401.4,402.2,403,403.8,404.6,405.4,406.2,407,407.8,408.6,409.4,410.2,411,411.8,412.6,413.4,414.2,415,415.8,416.7,417.5,418.3,419.1,419.8,420.6,421.4,422.2,422.9,423.7,424.5,425.2,426,426.7,427.5,428.2,429,429.8,430.5,431.3,432.1,432.9,433.6,434.4,435.2,436,436.9,437.7,438.5,439.4,440.3,441.1,442,443,443.9,444.9,445.8,446.8,447.9,448.9,450,451.1,452.3,453.5,454.7,456,457.3,458.7,460.2,461.7,463.3,464.9,466.7,468.5,470.4,472.3,474.2,476.2,478.1,480,481.2,482.4,483.6,484.7,485.8,486.8,487.8,488.8,489.7,490.7,491.6,492.5,493.4,494.2,495.1,495.9,496.7,497.5,498.3,499.1,499.9,500.7,501.5,502.3,503.1,503.9,504.7,505.5,506.3,507.1,507.9,508.7,509.5,510.3,511.1,511.9,512.6,513.4,514.2,515,515.8,516.6,517.4,518.1,518.9,519.7,520.5,521.3,522.1,522.9,523.7,524.5,525.3,526.1,526.9,527.7,528.5,529.3,530,530.8,531.6,532.4,533.2,534,534.8,535.6,536.4,537.2,537.9,538.7,539.5,540.2,541,541.7,542.4,543.1,543.9,544.6,545.3,546,546.7,547.4,548.1,548.9,549.6,550.3,551.1,551.8,552.5,553.2,553.9,554.6,555.3,556.1,556.8,557.5,558.2,559,559.7,560.5,561.2,562,562.8,563.6,564.4,565.1,565.9,566.8,567.6,568.4,569.3,570.1,571,571.8,572.7,573.6,574.6,575.5,576.4,577.4,578.4,579.4,580.5,581.5,582.6,583.7,584.8,586,587.1,588.3,589.6,590.8,592.1,593.4,594.8,596.2,597.8,599.5,601.1,602.7,604.4,605.9,607.5,609,610.5,612,613.4,614.9,616.3,617.6,619,620.3,621.6,622.8,624.1,625.3,626.5,627.7,628.8,630,631.1,632.2,633.3,634.3,635.4,636.5,637.5,638.5,639.6,640.6,641.6,642.7,643.7,644.7,645.8,646.8,647.8,648.8,649.8,650.8,651.8,652.8,653.8,654.8,655.9,656.9,657.9,659,660.1,661.1,662.2,663.3,664.4,665.6,666.7,667.8,668.8,669.9,671,672.1,673.3,674.5,675.7,677,678.3,679.7,681.2,682.7,684.2,685.9,687.5,689.2,690.9,692.7,694.4,696.1,697.9,699.7,701.4,703.2,705,706.8,708.6,710.5,712.3,714.2,716.1,718,720];
  var pad = function (i) { return (i < 10 ? '00' : i < 100 ? '0' : '') + i; };
  var cv = hero.querySelector('.kx-cv'), ctx = cv.getContext('2d', { alpha: false });
  var chs = [].slice.call(hero.querySelectorAll('.kx-ch')).map(function (el) { return { el: el, r: el.dataset.r.split(',').map(Number), o: -1, y: 0 }; });

  // ---------- frame store ----------
  var S;
  function tierFor() { return innerWidth / innerHeight < 1 ? 'm' : 'd'; }
  function makeStore(T) {
    var ph = T === 'm';
    return { T: T, iw: ph ? 576 : 1280, ih: 720, hi: new Array(N), lo: new Array(Math.ceil(N / 4)), bmp: new Map(), bmpLo: new Map(), pend: {},
      fHi: 0, fLo: 0, maxHi: ph ? 4 : 6, maxLo: 3, cap: ph ? 18 : 30, dec: 0, maxDec: ph ? 3 : 4, gen: (S ? S.gen + 1 : 1) };
  }
  var cur = 0, dir = 1, drawn = -1, lastB = null, cw = 0, ch = 0;
  function resize() {
    var r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    var sc = Math.max(r.width / S.iw, r.height / S.ih); d = Math.min(d, Math.max(.5, 1 / sc));
    cw = Math.round(r.width * d); ch = Math.round(r.height * d);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; drawn = -1;
  }
  function get(url, cb, s) { fetch(url).then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) { if (s === S) cb(b); }, function () { if (s === S) cb(null); }); }
  // Load only a short window of frames until the visitor actually scrolls, so the first paint and photos are not starved.
  var AH = 16, sd = navigator.connection && navigator.connection.saveData;
  function wake() { if (AH > 16 || sd) return; AH = 220; removeEventListener('scroll', wake); if (S) pump(); }
  addEventListener('scroll', wake, { passive: true });
  function nextHi() {
    var best = -1, bd = 1e9, a = Math.max(0, cur - 40), b = Math.min(N - 1, cur + AH);
    for (var k = a; k <= b; k++) { if (S.hi[k] !== undefined) continue; var d = k - cur; d = (d * dir >= 0) ? Math.abs(d) : Math.abs(d) * 2.5; if (d < bd) { bd = d; best = k; } }
    return best;
  }
  function nextLo() {
    var c = Math.round(cur / 4), best = -1, bd = 1e9;
    for (var k = Math.max(0, c - AH), e = Math.min(S.lo.length, c + AH); k < e; k++) { if (S.lo[k] !== undefined) continue; var d = Math.abs(k - c); if (d < bd) { bd = d; best = k; } }
    return best;
  }
  function pump() {
    var s = S, k;
    while (s.fHi < s.maxHi && (k = nextHi()) >= 0) { s.hi[k] = null; s.fHi++; (function (k) { get(BASE + s.T + '/' + pad(k) + '.webp', function (b) { s.hi[k] = b || undefined; s.fHi--; if (!b) s.hi[k] = 0; want(); pump(); }, s); })(k); }
    while (s.fLo < s.maxLo && (k = nextLo()) >= 0) { s.lo[k] = null; s.fLo++; (function (k) { get(BASE + s.T + 'l/' + pad(k) + '.webp', function (b) { s.lo[k] = b || 0; s.fLo--; want(); pump(); }, s); })(k); }
  }
  function decode(map, key, blob, cap, isLo) {
    var s = S, pk = (isLo ? 'l' : 'h') + key;
    if (!blob || map.has(key) || s.pend[pk] || s.dec >= s.maxDec) return;
    s.pend[pk] = 1; s.dec++;
    createImageBitmap(blob).then(function (b) {
      if (s !== S) { b.close && b.close(); return; }
      map.set(key, b); evict(map, cap, isLo ? cur / 4 : cur);
      if (Math.abs((isLo ? key * 4 : key) - cur) < 5) draw(cur, true);
    }, function () {}).then(function () { delete s.pend[pk]; s.dec--; if (s === S) want(); });
  }
  function evict(map, cap, c) {
    if (map.size <= cap) return;
    var keys = Array.from(map.keys()).sort(function (a, b) { return Math.abs(b - c) - Math.abs(a - c); });
    while (map.size > cap) { var k = keys.shift(), b = map.get(k); map.delete(k); b && b.close && b.close(); }
  }
  function want() {
    var s = S, i, k;
    // sharp frames first, nearest the current frame, more ahead than behind
    for (i = 0; i < s.cap * .7 && s.dec < s.maxDec; i++) {
      k = cur + i * dir; if (k >= 0 && k < N && s.hi[k]) decode(s.bmp, k, s.hi[k], s.cap);
      if (i && i < 5) { k = cur - i * dir; if (k >= 0 && k < N && s.hi[k]) decode(s.bmp, k, s.hi[k], s.cap); }
    }
    // placeholders only where no sharp frame is ready nearby
    var lc = Math.round(cur / 4);
    for (i = -1; i <= 3 && s.dec < s.maxDec; i++) { k = lc + i * dir; if (k >= 0 && k < s.lo.length && s.lo[k] && !s.bmp.has(k * 4)) decode(s.bmpLo, k, s.lo[k], 12, true); }
  }
  function pick(i) {
    var b = S.bmp.get(i); if (b) return b;
    for (var d = 1; d <= 3; d++) { b = S.bmp.get(i - d * dir) || S.bmp.get(i + d * dir); if (b) return b; }
    var q = Math.round(i / 4); for (var e = 0; e < 4; e++) { b = S.bmpLo.get(q) || S.bmpLo.get(q - e) || S.bmpLo.get(q + e); if (b) return b; }
    return null;
  }
  function draw(i, force) {
    var b = pick(i); if (!b) return;
    if (!force && drawn === i && lastB === b) return;
    var sc = Math.max(cw / b.width, ch / b.height), w = b.width * sc, h = b.height * sc;
    ctx.drawImage(b, (cw - w) / 2, (ch - h) / 2, w, h); drawn = i; lastB = b;
    if (!live) { live = true; hero.classList.add('kx-live'); }
  }
  var live = false;
  function setTier() { var T = tierFor(); if (S && S.T === T) { resize(); draw(cur, true); return; }
    if (S) { S.bmp.forEach(function (b) { b.close && b.close(); }); S.bmpLo.forEach(function (b) { b.close && b.close(); }); }
    S = makeStore(T); live = false; hero.classList.remove('kx-live'); resize(); want(); pump(); }

  // ---------- scroll ----------
  var hT = 0, hH = 1, kT = 0, kH = 1, vh = 0;
  function measure() {
    vh = innerHeight; var y = scrollY || 0;
    var r = hero.getBoundingClientRect(); hT = r.top + y; hH = Math.max(1, hero.offsetHeight - vh);
    if (kf) { r = kf.getBoundingClientRect(); kT = r.top + y; kH = Math.max(1, kf.offsetHeight - vh); }
  }
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var sp = -1, tp = 0, lastT = 0, run = false, kq = -9, kfOn = -1;
  function caps(p) {
    for (var i = 0; i < chs.length; i++) {
      var c = chs[i], r = c.r, o, y;
      if (r[1] === 0 && p <= r[2]) { o = 1; y = 0; }
      else if (p < r[0]) { o = 0; y = 30; } else if (p < r[1]) { var k = (p - r[0]) / (r[1] - r[0]); o = k; y = 30 * (1 - k); }
      else if (p <= r[2]) { o = 1; y = 0; } else if (p < r[3]) { var k2 = (p - r[2]) / (r[3] - r[2]); o = 1 - k2; y = -30 * k2; } else { o = 0; y = -30; }
      o = Math.round(o * 100) / 100; y = Math.round(y);
      if (o !== c.o || y !== c.y) { c.o = o; c.y = y; c.el.style.opacity = o; c.el.style.transform = 'translate3d(0,' + y + 'px,0)'; c.el.style.visibility = o > 0 ? 'visible' : 'hidden'; c.el.classList.toggle('act', o > .5); }
    }
  }
  function frame(t) {
    var dt = lastT ? Math.min(64, t - lastT) : 16.7; lastT = t;
    var y = scrollY || 0;
    tp = clamp((y - hT) / hH, 0, 1);
    if (sp < 0) sp = tp; else sp += (tp - sp) * (1 - Math.pow(1 - .2, dt / 16.7));
    if (Math.abs(tp - sp) < .00005) sp = tp;
    if (y < hT + hH + vh) {
      var fi = Math.round(LUT[Math.round(clamp(sp / .92, 0, 1) * (N - 1))]);
      fi = clamp(fi, 0, N - 1);
      if (fi !== cur) { dir = fi > cur ? 1 : -1; cur = fi; want(); pump(); }
      draw(cur); caps(sp);
    }
    if (kf) {
      var q = clamp((y - kT) / kH, -1, 1.2);
      if (Math.abs(q - kq) > .0005 && y > kT - vh && y < kT + kH + vh) {
        kq = q; var z = clamp(q, 0, 1);
        if (kfImg) kfImg.style.transform = 'translate3d(0,' + ((z - .5) * -5).toFixed(2) + '%,0) scale(' + (1.16 - .12 * z).toFixed(4) + ')';
        var on = q > -.12 ? Math.floor((q + .12) / .05) : -1;
        if (on !== kfOn) { kfOn = on; for (var j = 0; j < kfItems.length; j++) kfItems[j].classList.toggle('on', +kfItems[j].style.getPropertyValue('--d') <= on); }
      }
    }
    tickCounters(t);
    if (sp !== tp || counters.length) requestAnimationFrame(frame); else { run = false; lastT = 0; }
  }
  function kick() { if (!run) { run = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', function () { measure(); setTier(); sp = -1; kick(); });
  addEventListener('load', function () { measure(); kick(); });
  setTier(); measure(); kick();
  window.__kx = { get cur() { return cur; }, get S() { return S; }, get sp() { return sp; } };
})();
