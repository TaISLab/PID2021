(function () {
  var STORAGE_KEY = "concerto-lang";
  var root = document.documentElement;

  function applyLang(lang) {
    root.setAttribute("data-active-lang", lang);
    root.setAttribute("lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var browserLang = (navigator.language || "es").slice(0, 2);
    var initial = saved || (browserLang === "en" ? "en" : "es");
    applyLang(initial);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();
