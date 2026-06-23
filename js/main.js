/* Shared front-end logic for the portfolio site. */

(function () {
  "use strict";

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ---- Home page: build portfolio grid ----
  var grid = document.getElementById("portfolioGrid");
  if (grid && typeof PROJECTS !== "undefined") {
    grid.innerHTML = PROJECTS.map(function (p) {
      var cover = p.images && p.images[0] ? p.images[0] : "";
      return (
        '<a class="project-card" href="project.html?id=' + p.id + '">' +
        '<img src="' + cover + '" alt="' + escapeHtml(p.title) + '" loading="lazy" />' +
        '<div class="meta">' +
        "<h3>" + escapeHtml(p.title) + "</h3>" +
        '<span class="view">View project →</span>' +
        "</div></a>"
      );
    }).join("");
  }

  // ---- Detail page: render single project ----
  var root = document.getElementById("projectRoot");
  if (root && typeof PROJECTS !== "undefined") {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10);
    var project = PROJECTS.filter(function (p) { return p.id === id; })[0];

    if (!project) {
      document.title = "Project not found — Ulyana Alper";
      root.innerHTML =
        '<div class="not-found container">' +
        "<h1>Project not found</h1>" +
        '<p class="sub">The project you are looking for doesn\'t exist.</p>' +
        '<p><a class="btn btn-outline" href="index.html#portfolio">← Back to portfolio</a></p>' +
        "</div>";
      return;
    }

    document.title = project.title + " — Ulyana Alper";

    var metaItems = [
      { label: "Role", value: project.role },
      { label: "Location", value: project.location },
      { label: "Year", value: project.year },
      { label: "Scale", value: project.scale },
      { label: "Disciplines", value: project.disciplines },
    ];
    var metaHtml = metaItems
      .filter(function (m) { return m.value; })
      .map(function (m) {
        return (
          '<div><div class="label">' + escapeHtml(m.label) + "</div>" +
          '<div class="value">' + escapeHtml(m.value) + "</div></div>"
        );
      })
      .join("");

    var respHtml = (project.responsibilities || [])
      .map(function (r) { return "<li>" + escapeHtml(r) + "</li>"; })
      .join("");

    var galleryHtml = (project.images || [])
      .map(function (src) {
        return '<img src="' + src + '" alt="' + escapeHtml(project.title) + '" loading="lazy" />';
      })
      .join("");

    root.innerHTML =
      '<section class="section section-pine detail-hero">' +
      '<div class="container">' +
      '<a class="back-link" href="index.html#portfolio">← Back to portfolio</a>' +
      "<h1>" + escapeHtml(project.title) + "</h1>" +
      '<div class="detail-meta">' + metaHtml + "</div>" +
      "</div></section>" +

      '<section class="section section-sand detail-body"><div class="container"><div class="detail-cols">' +
      "<div>" +
      "<h2>Key Responsibilities</h2>" +
      '<ul class="resp-list">' + respHtml + "</ul>" +
      "</div>" +
      "<div>" +
      '<p class="detail-summary">' + escapeHtml(project.summary || "") + "</p>" +
      '<div class="gallery">' + galleryHtml + "</div>" +
      "</div>" +
      "</div></div></section>" +

      '<section class="section section-pine detail-cta"><div class="container">' +
      "<h2>Interested in working together?</h2>" +
      '<p class="sub">Reach out at ulyalper@gmail.com or grab my CV.</p>' +
      '<p style="margin-top:24px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">' +
      '<a class="btn btn-outline" href="assets/Ulyana_Alper_CV.pdf" download>↓ Download CV</a>' +
      '<a class="btn btn-outline" href="index.html#contact">Contact me</a>' +
      "</p>" +
      "</div></section>";
  }
})();
