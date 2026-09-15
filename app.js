(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);

  if (!data) {
    document.body.innerHTML =
      '<div class="container not-found"><h1>Content could not be loaded</h1>' +
      '<p>Check <strong>content.js</strong> for a missing quote or comma — that usually stops the whole file from loading. ' +
      'Open your browser\'s developer console to see which line.</p></div>';
    return;
  }

  const t = data.teacher || {};
  const units = data.units || [];
  const evidence = data.evidence || [];
  const growth = data.growth || [];
  const philosophy = data.philosophy || {};

  /* ---------- Helpers ---------- */
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v && String(v).trim()));

  const list = (items, cls = "bullets") =>
    has(items) ? `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";

  const initials = (name) =>
    String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const arrowLeft = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const closeIcon = '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="m4 4 10 10M14 4 4 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';

  const siteTitle = t.name ? `${t.name} · Teaching Portfolio` : "Teaching Portfolio";

  /* ---------- Header & mobile menu ---------- */
  $("[data-brand]").textContent = t.name || "Teaching Portfolio";

  const nav = $("#site-nav");
  const toggle = $(".menu-toggle");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });

  /* ---------- Hero ---------- */
  function renderHero() {
    const facts = [
      ["Currently teaching", [t.school, t.location].filter(has).join(", ")],
      ["Subjects", (t.subjects || []).join(", ")],
      ["Year level", t.yearLevels],
      ["Experience", t.experience]
    ].filter(([, v]) => has(v));

    const media = has(t.photo)
      ? `<img class="profile-photo" src="${esc(t.photo)}" alt="Portrait of ${esc(t.name)}">`
      : `<div class="monogram" aria-hidden="true">${esc(initials(t.name))}</div>`;

    $("#top").innerHTML = `
      <div>
        ${has(t.role) ? `<p class="hero-role">${esc(t.role)}</p>` : ""}
        <h1 id="hero-name">${esc(t.name || "Teaching Portfolio")}</h1>
        ${has(t.intro) ? `<p class="hero-intro">${esc(t.intro)}</p>` : ""}
        <div class="hero-actions">
          <a class="btn btn-primary" href="#units">View unit plans</a>
          <a class="btn btn-secondary" href="#classroom">See classroom evidence</a>
        </div>
      </div>
      <aside class="profile-card" aria-label="At a glance">
        ${media}
        ${facts.length ? `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
      </aside>`;
  }

  /* ---------- Philosophy ---------- */
  function renderPhilosophy() {
    const principles = philosophy.principles || [];
    $("[data-philosophy]").innerHTML = `
      ${has(philosophy.statement) ? `<p class="philosophy-statement">${esc(philosophy.statement)}</p>` : ""}
      ${principles.length ? `<ul class="principles">${principles.map((p) => `<li><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join("")}</ul>` : ""}`;
    if (!has(philosophy.statement) && !principles.length) $("#philosophy").hidden = true;
  }

  /* ---------- Filter chips (shared) ---------- */
  function renderChips(container, options, current, onChange) {
    if (options.length < 2) { container.hidden = true; return; }
    container.innerHTML = ["All", ...options]
      .map((o) => `<button type="button" class="chip" aria-pressed="${o === current}" data-value="${esc(o)}">${esc(o)}</button>`)
      .join("");
    container.onclick = (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      container.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
      onChange(btn.dataset.value);
    };
  }

  const unique = (arr) => [...new Set(arr.filter(has))];

  /* ---------- Units ---------- */
  const unitState = { subject: "All", query: "" };
  const searchInput = $("#unit-search");

  function unitCard(u) {
    return `
      <a class="unit-card" href="#/unit/${encodeURIComponent(u.slug)}">
        <div class="card-meta">
          <span><strong>${esc(u.subject)}</strong>${has(u.year) ? ` · ${esc(u.year)}` : ""}</span>
          ${has(u.duration) ? `<span>${esc(u.duration)}</span>` : ""}
        </div>
        <h3>${esc(u.title)}</h3>
        ${has(u.summary) ? `<p>${esc(u.summary)}</p>` : ""}
        ${has(u.tags) ? `<ul class="tags" aria-label="Focus areas">${u.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join("")}</ul>` : ""}
        <span class="card-cta">Read the full plan</span>
      </a>`;
  }

  function renderUnits() {
    const listEl = $("[data-unit-list]");
    const countEl = $("[data-unit-count]");

    if (!units.length) {
      $(".toolbar").hidden = true;
      countEl.textContent = "";
      listEl.innerHTML = `
        <div class="empty-state">
          <h3>No unit plans yet</h3>
          <p>Add your first unit to the <strong>units</strong> list in content.js and it will appear here as a card with its own full plan page.</p>
        </div>`;
      return;
    }

    const q = unitState.query.trim().toLowerCase();
    const matches = units.filter((u) => {
      if (unitState.subject !== "All" && u.subject !== unitState.subject) return false;
      if (!q) return true;
      return [u.title, u.summary, u.bigIdea, u.year, u.subject, ...(u.tags || [])].join(" ").toLowerCase().includes(q);
    });

    const filtered = unitState.subject !== "All" || q;
    countEl.textContent = filtered ? `Showing ${matches.length} of ${units.length} units` : `${units.length} ${units.length === 1 ? "unit" : "units"}`;

    listEl.innerHTML = matches.length
      ? matches.map(unitCard).join("")
      : `<div class="empty-state">
          <h3>No units match${q ? ` “${esc(unitState.query.trim())}”` : ""}${unitState.subject !== "All" ? ` in ${esc(unitState.subject)}` : ""}</h3>
          <p>Try a different word, or clear the filters to see every unit.</p>
          <button type="button" class="btn btn-secondary" data-clear-filters>Clear filters</button>
        </div>`;
  }

  function setupUnits() {
    const filtersEl = $("[data-unit-filters]");
    renderChips(filtersEl, unique(units.map((u) => u.subject)), "All", (value) => {
      unitState.subject = value;
      renderUnits();
    });
    searchInput.addEventListener("input", () => { unitState.query = searchInput.value; renderUnits(); });
    $("[data-unit-list]").addEventListener("click", (e) => {
      if (!e.target.closest("[data-clear-filters]")) return;
      unitState.subject = "All";
      unitState.query = "";
      searchInput.value = "";
      filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.value === "All")));
      renderUnits();
      searchInput.focus();
    });
    renderUnits();
  }

  /* ---------- Evidence ---------- */
  let evidenceCategory = "All";
  const dialog = $(".evidence-dialog");
  let lastTrigger = null;

  const evidenceMedia = (e) =>
    has(e.image)
      ? `<img class="evidence-media" src="${esc(e.image)}" alt="${esc(e.alt)}" loading="lazy">`
      : `<div class="evidence-media evidence-tile" aria-hidden="true">${esc(e.category || "Evidence")}</div>`;

  function renderEvidence() {
    const listEl = $("[data-evidence-list]");
    if (!evidence.length) {
      listEl.innerHTML = `
        <div class="empty-state">
          <h3>No classroom evidence yet</h3>
          <p>Add photos of student work, lessons and feedback to the <strong>evidence</strong> list in content.js. Each one opens with a note on what it demonstrates.</p>
        </div>`;
      return;
    }
    const items = evidence
      .map((e, i) => ({ e, i }))
      .filter(({ e }) => evidenceCategory === "All" || e.category === evidenceCategory);

    listEl.innerHTML = items
      .map(({ e, i }) => `
        <button type="button" class="evidence-card" data-evidence="${i}" aria-haspopup="dialog">
          ${evidenceMedia(e)}
          <span class="evidence-text">
            <span class="evidence-cat">${[has(e.image) ? esc(e.category) : "", esc(e.date)].filter(Boolean).join(" · ")}</span>
            <span class="evidence-title">${esc(e.title)}</span>
            ${has(e.description) ? `<span class="evidence-desc">${esc(e.description)}</span>` : ""}
          </span>
        </button>`)
      .join("");
  }

  function openEvidence(index, trigger) {
    const e = evidence[index];
    if (!e) return;
    const unit = units.find((u) => u.slug === e.unit);
    lastTrigger = trigger;
    $("[data-dialog-body]").innerHTML = `
      <div class="dialog-head">
        <div>
          <p class="evidence-cat">${esc(e.category)}${has(e.date) ? ` · ${esc(e.date)}` : ""}</p>
          <h2 id="dialog-title">${esc(e.title)}</h2>
        </div>
        <button type="button" class="close-btn" data-close aria-label="Close">${closeIcon}</button>
      </div>
      ${has(e.image) ? `<img src="${esc(e.image)}" alt="${esc(e.alt)}">` : ""}
      ${has(e.description) ? `<p class="muted">${esc(e.description)}</p>` : ""}
      ${has(e.demonstrates) ? `<div class="callout"><p class="callout-label">What this demonstrates</p><p>${esc(e.demonstrates)}</p></div>` : ""}
      ${unit ? `<a class="text-link" href="#/unit/${encodeURIComponent(unit.slug)}" data-close>From the unit: ${esc(unit.title)}</a>` : ""}`;
    dialog.showModal();
    $("[data-close]", dialog).focus();
  }

  function setupEvidence() {
    renderChips($("[data-evidence-filters]"), unique(evidence.map((e) => e.category)), "All", (value) => {
      evidenceCategory = value;
      renderEvidence();
    });
    $("[data-evidence-list]").addEventListener("click", (ev) => {
      const card = ev.target.closest("[data-evidence]");
      if (card) openEvidence(Number(card.dataset.evidence), card);
    });
    dialog.addEventListener("click", (ev) => {
      if (ev.target === dialog || ev.target.closest("[data-close]")) dialog.close();
    });
    dialog.addEventListener("close", () => {
      if (lastTrigger && document.body.contains(lastTrigger) && !location.hash.startsWith("#/unit/")) lastTrigger.focus();
    });
    renderEvidence();
  }

  /* ---------- Growth ---------- */
  function renderGrowth() {
    if (!growth.length) { $("#growth").hidden = true; return; }
    $("[data-growth]").innerHTML = growth
      .map((g) => `
        <li>
          <span class="timeline-year">${esc(g.year)}</span>
          <div>
            <h3>${esc(g.title)}</h3>
            ${has(g.org) ? `<p class="timeline-org">${esc(g.org)}</p>` : ""}
            ${has(g.note) ? `<p class="timeline-note">${esc(g.note)}</p>` : ""}
            ${has(g.type) ? `<span class="tag">${esc(g.type)}</span>` : ""}
          </div>
        </li>`)
      .join("");
  }

  /* ---------- Contact & footer ---------- */
  function renderContact() {
    const first = String(t.name || "").split(/\s+/)[0];
    $("[data-contact]").innerHTML = `
      <p class="eyebrow">Contact</p>
      <h2>Let's talk about teaching and learning</h2>
      <p>I'm happy to share full unit resources, discuss my practice, or arrange a classroom visit.</p>
      <div class="hero-actions">
        ${has(t.email) ? `<a class="btn btn-primary" href="mailto:${esc(t.email)}">Email ${esc(first || "me")}</a>` : ""}
        ${has(t.resume) ? `<a class="btn btn-secondary" href="${esc(t.resume)}" target="_blank" rel="noopener">View résumé</a>` : ""}
      </div>`;
    $("[data-footer]").innerHTML = `
      <span>© ${new Date().getFullYear()} ${esc(t.name || "")}</span>
      ${has(t.updated) ? `<span>Last updated ${esc(t.updated)}</span>` : ""}`;
  }

  /* ---------- Unit detail page ---------- */
  function unitDetail(u) {
    const idx = units.indexOf(u);
    const prev = units[idx - 1];
    const next = units[idx + 1];
    const a = u.assessments || {};
    const r = u.reflection || {};

    const sections = [];
    const add = (id, label, html) => { if (html.trim()) sections.push({ id, label, html }); };

    add("goals", "Learning goals", `
      ${has(u.bigIdea) ? `<div class="big-idea"><p class="callout-label">Big idea</p><p>${esc(u.bigIdea)}</p></div>` : ""}
      ${has(u.questions) ? `<div class="sub-block"><h3>Essential questions</h3>${list(u.questions, "questions")}</div>` : ""}
      <div class="sub-grid">
        ${has(u.understandings) ? `<div class="sub-block"><h3>Students will understand that…</h3>${list(u.understandings)}</div>` : ""}
        ${has(u.standards) ? `<div class="sub-block"><h3>Curriculum standards</h3>${list(u.standards)}</div>` : ""}
      </div>
      <div class="sub-grid">
        ${has(u.intentions) ? `<div class="sub-block"><h3>Learning intentions</h3>${list(u.intentions)}</div>` : ""}
        ${has(u.criteria) ? `<div class="sub-block"><h3>Success criteria</h3>${list(u.criteria)}</div>` : ""}
      </div>`);

    const assessList = (items) =>
      `<ul class="assess-list">${items.map((x) => `<li><strong>${esc(x.title)}</strong>${has(x.desc) ? `<span>${esc(x.desc)}</span>` : ""}</li>`).join("")}</ul>`;
    add("assessment", "Assessment", `
      <div class="sub-grid">
        ${has(a.summative) ? `<div class="sub-block"><h3>Summative — evidence of learning</h3>${assessList(a.summative)}</div>` : ""}
        ${has(a.formative) ? `<div class="sub-block"><h3>Formative — checking along the way</h3>${assessList(a.formative)}</div>` : ""}
      </div>`);

    add("sequence", "Learning sequence", has(u.lessons) ? `
      <ol class="sequence">${u.lessons.map((l) => `
        <li><span class="sequence-week">${esc(l.week)}</span><div><strong>${esc(l.title)}</strong>${has(l.focus) ? `<span>${esc(l.focus)}</span>` : ""}</div></li>`).join("")}
      </ol>` : "");

    add("differentiation", "Differentiation", has(u.differentiation) ? `
      <dl class="diff-list">${u.differentiation.map((d) => `<div><dt>${esc(d.group)}</dt><dd>${esc(d.strategy)}</dd></div>`).join("")}</dl>` : "");

    add("resources", "Resources", has(u.resources) ? `
      <ul class="resource-list">${u.resources.map((res) => has(res.url)
        ? `<li><a href="${esc(res.url)}" target="_blank" rel="noopener">${esc(res.label)}</a></li>`
        : `<li class="pending">${esc(res.label)}<small>Available on request</small></li>`).join("")}
      </ul>` : "");

    const reflection = [
      has(r.wentWell) ? `<div><h3>What worked</h3><p>${esc(r.wentWell)}</p></div>` : "",
      has(r.change) ? `<div><h3>What I'd change next time</h3><p>${esc(r.change)}</p></div>` : "",
      has(r.impact) ? `<div class="callout"><p class="callout-label">Impact on student learning</p><p>${esc(r.impact)}</p></div>` : ""
    ].join("");
    add("reflection", "Reflection", reflection ? `<div class="reflection">${reflection}</div>` : "");

    const notes = {
      goals: "Stage 1 — what students should know, understand and be able to do.",
      assessment: "Stage 2 — how students will show they've got there.",
      sequence: "Stage 3 — the learning experiences, week by week."
    };

    const stats = [["Subject", u.subject], ["Year level", u.year], ["Duration", u.duration], ["Taught", u.term]].filter(([, v]) => has(v));
    const related = evidence.filter((e) => e.unit === u.slug).length;

    return `
      <div class="container">
        <header class="unit-header">
          <a class="text-link" href="#units">${arrowLeft} All unit plans</a>
          <h1 tabindex="-1">${esc(u.title)}</h1>
          ${has(u.summary) ? `<p class="unit-summary">${esc(u.summary)}</p>` : ""}
          ${stats.length ? `<dl class="unit-stats">${stats.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
          <div class="hero-actions">
            <button type="button" class="btn btn-secondary" data-print>Print this unit plan</button>
            ${related ? `<a class="btn btn-secondary" href="#classroom">Classroom evidence (${related})</a>` : ""}
          </div>
        </header>
        <div class="unit-layout">
          <nav class="unit-toc" aria-label="On this page">
            <p>On this page</p>
            <ol>${sections.map((s) => `<li><a href="#/unit/${encodeURIComponent(u.slug)}" data-jump="${s.id}">${s.label}</a></li>`).join("")}</ol>
          </nav>
          <div class="unit-content">
            ${sections.map((s) => `
              <section class="unit-block" id="u-${s.id}" aria-labelledby="h-${s.id}">
                <h2 id="h-${s.id}">${s.label}</h2>
                ${notes[s.id] ? `<p class="block-note">${notes[s.id]}</p>` : ""}
                <div class="block-body">${s.html}</div>
              </section>`).join("")}
            ${prev || next ? `
              <nav class="unit-pager" aria-label="More units">
                ${prev ? `<a class="prev" href="#/unit/${encodeURIComponent(prev.slug)}"><small>Previous unit</small>${esc(prev.title)}</a>` : ""}
                ${next ? `<a class="next" href="#/unit/${encodeURIComponent(next.slug)}"><small>Next unit</small>${esc(next.title)}</a>` : ""}
              </nav>` : ""}
          </div>
        </div>
      </div>`;
  }

  /* ---------- Router ---------- */
  const home = $("#home-view");
  const unitView = $("#unit-view");

  function route() {
    const hash = location.hash;
    const match = hash.match(/^#\/unit\/(.+)$/);

    if (match) {
      const slug = decodeURIComponent(match[1]);
      const u = units.find((x) => x.slug === slug);
      home.hidden = true;
      unitView.hidden = false;
      unitView.innerHTML = u
        ? unitDetail(u)
        : `<div class="container not-found">
            <h1 tabindex="-1">Unit not found</h1>
            <p>This unit may have been renamed or removed.</p>
            <a class="btn btn-primary" href="#units">See all unit plans</a>
          </div>`;
      document.title = u ? `${u.title} · ${siteTitle}` : `Unit not found · ${siteTitle}`;
      $("h1", unitView).focus({ preventScroll: true });
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
      return;
    }

    const wasOnUnit = !unitView.hidden;
    unitView.hidden = true;
    unitView.innerHTML = "";
    home.hidden = false;
    document.title = siteTitle;

    if (wasOnUnit) {
      const target = hash && document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  unitView.addEventListener("click", (e) => {
    if (e.target.closest("[data-print]")) { window.print(); return; }
    const jump = e.target.closest("[data-jump]");
    if (jump) {
      e.preventDefault();
      const target = document.getElementById(`u-${jump.dataset.jump}`);
      if (target) {
        target.scrollIntoView({ block: "start" });
        target.querySelector("h2").setAttribute("tabindex", "-1");
        target.querySelector("h2").focus({ preventScroll: true });
      }
    }
  });

  /* ---------- Init ---------- */
  renderHero();
  renderPhilosophy();
  setupUnits();
  setupEvidence();
  renderGrowth();
  renderContact();
  window.addEventListener("hashchange", route);
  route();
})();
