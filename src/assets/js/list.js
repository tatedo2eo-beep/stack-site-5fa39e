(function () {
  "use strict";

  var form = document.getElementById("filters");
  if (!form) return;

  var q = document.getElementById("q");
  var fcat = document.getElementById("f-cat");
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
  fcat.addEventListener("change", immediateUpdate);
  ftime.addEventListener("change", immediateUpdate);
  fdiff.addEventListener("change", immediateUpdate);
  ffav.addEventListener("change", immediateUpdate);
  dietBoxes.forEach(function (cb) {
    cb.addEventListener("change", immediateUpdate);
  });

  clearBtn.addEventListener("click", function () {
    q.value = "";
    fcat.value = "";
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
