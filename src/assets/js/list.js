(function () {
  "use strict";

  var form = document.getElementById("filters");
  if (!form) return;

  var q = document.getElementById("q");
  var fcat = document.getElementById("f-cat");
  var fch = document.getElementById("f-ch");
  var ftime = document.getElementById("f-time");
  var fdiff = document.getElementById("f-diff");
  var ffav = document.getElementById("f-fav");
  var clearBtn = document.getElementById("f-clear");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var dietBoxes = Array.prototype.slice.call(
    form.querySelectorAll('input[name="diet"]')
  );

  function norm(s) {
    return (s || "")
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase();
  }

  var results = document.getElementById("results");
  var pager = document.getElementById("pager");
  var pageHTML = results.innerHTML;
  var idx = null, idxP = null, mode = "page";
  function esc(v) { return String(v).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function loadIdx() {
    if (!idxP) idxP = fetch(form.dataset.index).then(function (r) { return r.json(); }).then(function (a) { idx = a; var B = form.dataset.base || ""; a.forEach(function (r) { r.n = norm(r.x); r.u = B + r.u; r.i = B + r.i; if (r.i2) r.i2 = B + r.i2; }); return a; });
    return idxP;
  }
  function cardHTML(r) {
    return '<a class="rc card' + (r.p ? " is-prem" : "") + '" href="' + r.u + '" data-slug="' + r.s + '"><span class="rimg"><span class="favdot" title="In your favourites">\u2665</span>' +
      '<img src="' + r.i + '"' + (r.i2 ? ' srcset="' + r.i + " 600w, " + r.i2 + ' 1200w" sizes="(min-width:1100px) 300px, (min-width:640px) 45vw, 92vw"' : "") + ' alt="' + esc(r.a) + '" width="' + r.w + '" height="' + r.h + '" loading="lazy" decoding="async"></span>' +
      '<span class="rcb"><span class="no">' + esc(r.df) + "</span><h3>" + esc(r.ti) + '</h3><span class="meta">' + esc(r.m) + "</span></span></a>";
  }
  function active() {
    return !!(q.value.trim() || fcat.value || (fch && fch.value) || ftime.value || fdiff.value || ffav.checked || dietBoxes.some(function (cb) { return cb.checked; }));
  }
  function match(r, words, cat, diets, time, diff, favOnly, favs) {
    if (cat && r.c !== cat) return false;
    if (fch && fch.value && r.ch !== fch.value) return false;
    var cd = r.d ? r.d.split(" ") : [];
    if (diets.length && !diets.every(function (d) { return cd.indexOf(d) !== -1; })) return false;
    if (time != null && Number(r.t) > time) return false;
    if (diff && r.f !== diff) return false;
    if (favOnly && favs.indexOf(r.s) === -1) return false;
    return words.every(function (w) { return r.n.indexOf(w) !== -1; });
  }
  var total = Number((count.textContent.match(/\d+/) || [0])[0]);
  var cards = Array.prototype.map.call(
    document.querySelectorAll("#results .card"),
    function (el) {
      return { el: el, text: norm(el.dataset.text) };
    }
  );

  function getFavs() {
    try {
      var v = JSON.parse(localStorage.getItem("fav"));
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }

  function readState() {
    var p = new URLSearchParams(location.search);
    q.value = p.get("q") || "";
    fcat.value = p.get("cat") || "";
    if (fch) fch.value = p.get("ch") || "";
    var diet = (p.get("diet") || "").split(",").filter(Boolean);
    dietBoxes.forEach(function (cb) {
      cb.checked = diet.indexOf(cb.value) !== -1;
    });
    ftime.value = p.get("time") || "";
    fdiff.value = p.get("diff") || "";
    ffav.checked = p.get("fav") === "1";
  }

  function writeState() {
    var p = new URLSearchParams();
    if (q.value) p.set("q", q.value);
    if (fcat.value) p.set("cat", fcat.value);
    if (fch && fch.value) p.set("ch", fch.value);
    var diet = dietBoxes
      .filter(function (cb) {
        return cb.checked;
      })
      .map(function (cb) {
        return cb.value;
      });
    if (diet.length) p.set("diet", diet.join(","));
    if (ftime.value) p.set("time", ftime.value);
    if (fdiff.value) p.set("diff", fdiff.value);
    if (ffav.checked) p.set("fav", "1");
    var qs = p.toString();
    history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  }

  function filter() {
    if (!active()) {
      if (mode !== "page") { results.innerHTML = pageHTML; mode = "page"; }
      if (pager) pager.hidden = false;
      count.textContent = total + " recipes"; empty.hidden = true;
      document.dispatchEvent(new CustomEvent("cards-change"));
      return;
    }
    if (pager) pager.hidden = true;
    if (!idx) { count.textContent = "Searching all recipes…"; loadIdx().then(filter, function () { count.textContent = "Search could not load. Please try again."; }); return; }
    var words0 = norm(q.value).trim().split(/\s+/).filter(Boolean);
    var diets0 = dietBoxes.filter(function (cb) { return cb.checked; }).map(function (cb) { return cb.value; });
    var t0 = ftime.value ? Number(ftime.value) : null, favs0 = getFavs();
    var hits = idx.filter(function (r) { return match(r, words0, fcat.value, diets0, t0, fdiff.value, ffav.checked, favs0); });
    var html = hits.slice(0, 300).map(cardHTML).join("");
    if (hits.length > 300) html += '<p class="mute small" style="grid-column:1/-1">Showing the first 300 of ' + hits.length + ' matches. Add a word or filter to narrow it down.</p>';
    results.innerHTML = html; mode = "search";
    count.textContent = hits.length + " recipe" + (hits.length === 1 ? "" : "s");
    empty.hidden = hits.length !== 0;
    document.dispatchEvent(new CustomEvent("cards-change"));
  }
  function filterOld() {
    var words = norm(q.value).trim().split(/\s+/).filter(Boolean);
    var cat = fcat.value;
    var diets = dietBoxes
      .filter(function (cb) {
        return cb.checked;
      })
      .map(function (cb) {
        return cb.value;
      });
    var time = ftime.value ? Number(ftime.value) : null;
    var diff = fdiff.value;
    var favOnly = ffav.checked;
    var favs = getFavs();
    var shown = 0;

    cards.forEach(function (c) {
      var el = c.el;
      var ok = true;
      if (cat && el.dataset.cat !== cat) ok = false;
      if (fch && fch.value && el.dataset.ch !== fch.value) ok = false;
      if (ok && diets.length) {
        var cd = el.dataset.diet ? el.dataset.diet.split(" ") : [];
        ok = diets.every(function (d) {
          return cd.indexOf(d) !== -1;
        });
      }
      if (ok && time != null && Number(el.dataset.time) > time) ok = false;
      if (ok && diff && el.dataset.diff !== diff) ok = false;
      if (ok && favOnly && favs.indexOf(el.dataset.slug) === -1) ok = false;
      if (
        ok &&
        words.length &&
        !words.every(function (w) {
          return c.text.indexOf(w) !== -1;
        })
      )
        ok = false;

      el.hidden = !ok;
      if (ok) shown++;
    });

    count.textContent = shown + " recipe" + (shown === 1 ? "" : "s");
    empty.hidden = shown !== 0;
  }

  var debounceId;
  function debouncedFilter() {
    clearTimeout(debounceId);
    debounceId = setTimeout(function () {
      filter();
      writeState();
    }, 120);
  }

  function immediateUpdate() {
    filter();
    writeState();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  q.addEventListener("input", debouncedFilter);
  ["focus", "pointerdown"].forEach(function (ev) { form.addEventListener(ev, loadIdx, { once: true, capture: true }); });
  fcat.addEventListener("change", immediateUpdate);
  if (fch) fch.addEventListener("change", immediateUpdate);
  ftime.addEventListener("change", immediateUpdate);
  fdiff.addEventListener("change", immediateUpdate);
  ffav.addEventListener("change", immediateUpdate);
  dietBoxes.forEach(function (cb) {
    cb.addEventListener("change", immediateUpdate);
  });

  clearBtn.addEventListener("click", function () {
    q.value = "";
    fcat.value = "";
    if (fch) fch.value = "";
    dietBoxes.forEach(function (cb) {
      cb.checked = false;
    });
    ftime.value = "";
    fdiff.value = "";
    ffav.checked = false;
    filter();
    writeState();
  });

  document.addEventListener("fav-change", filter);

  readState();
  filter();
})();
