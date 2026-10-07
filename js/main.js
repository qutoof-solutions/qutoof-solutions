import Lenis from "lenis";
import { animate, inView, stagger } from "motion";
import { applyLanguage, copy, getCurrentLanguage, installLanguageSwitch } from "./lang.js";
import { projects } from "./projects.js";

console.log('qutoof solutions v1.0 - loaded');

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Egypt number normalized for wa.me: +20 100 278 5919.
const WHATSAPP_PHONE = "201002785919";
const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=مرحبا%20قطوف`;
let activeProjectFilter = "all";

const iconPaths = {
  sparkle: '<path d="m12 2 1.8 7.1L21 12l-7.2 2.9L12 22l-1.8-7.1L3 12l7.2-2.9L12 2Z"/><path d="m19 14 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>',
  cart: '<path d="M3 4h2l2.2 11.3a2 2 0 0 0 2 1.7h8.6a2 2 0 0 0 1.9-1.4L22 9H6"/><circle cx="10" cy="21" r="1.2"/><circle cx="18" cy="21" r="1.2"/>',
  chart: '<path d="M4 19V5m0 14h17M8 15l4-4 3 2 6-7"/><path d="M17 6h4v4"/>',
  growth: '<path d="M4 18c3-8 7-11 16-12"/><path d="M14 5h6v6"/><path d="M5 22h14"/>'
};

function safeText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.sparkle}</svg>`;
}

function renderServices(language) {
  const host = document.getElementById("services-grid");
  host.innerHTML = copy[language].services.items.map((item, index) => `
    <article class="q-card service-card reveal-child">
      <div class="service-card-top"><span class="service-icon">${icon(["sparkle", "cart", "chart", "growth"][index])}</span><span class="service-number">0${index + 1}</span></div>
      <h3>${safeText(item.title)}</h3><p>${safeText(item.body)}</p><div class="service-detail"><span></span>${safeText(item.detail)}</div>
    </article>`).join("");
}

function setProjectFilter(filter = activeProjectFilter) {
  activeProjectFilter = filter;
  document.querySelectorAll(".work-filter").forEach((button) => {
    const active = button.dataset.filter === activeProjectFilter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".project-card").forEach((card) => {
    card.hidden = activeProjectFilter !== "all" && card.dataset.category !== activeProjectFilter;
  });
}

function renderProjects(language) {
  const host = document.getElementById("portfolio-grid");
  host.innerHTML = projects.map((project, index) => {
    const title = project.title[language];
    const description = project.description[language];
    const category = copy[language].work.categories[project.category];
    return `
      <a class="project-card q-card reveal-child" data-category="${safeText(project.category)}" href="${safeText(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="${safeText(copy[language].work.open)}: ${safeText(title)}">
        <span class="project-image"><img src="${safeText(project.image)}" srcset="${safeText(project.imageSrcset)}" sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 780px) calc((100vw - 45px) / 2), (max-width: 1280px) calc((100vw - 72px) / 3), 360px" alt="${safeText(description)}" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" decoding="async" /><span class="project-open-label">${safeText(copy[language].work.open)} <span aria-hidden="true">↗</span></span></span>
        <span class="project-meta"><span><span class="project-category"><b>${String(index + 1).padStart(2, "0")}</b>${safeText(category)}</span><strong>${safeText(title)}</strong><span class="project-description">${safeText(description)}</span></span><span class="project-arrow" aria-hidden="true">↗</span></span>
      </a>`;
  }).join("");
  setProjectFilter(activeProjectFilter);
}

function renderProcess(language) {
  const host = document.getElementById("process-grid");
  host.innerHTML = copy[language].process.steps.map((step, index) => `
    <article class="process-card reveal-child"><span class="process-index">0${index + 1}<i></i></span><h3>${safeText(step.title)}</h3><p>${safeText(step.body)}</p></article>`).join("");
}

function playReveal() {
  if (reducedMotion) {
    document.querySelectorAll(".reveal, .reveal-child").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  document.querySelectorAll("[data-motion-group]").forEach((group) => {
    const children = [...group.querySelectorAll(".reveal-child")].filter((child) => !child.hidden);
    if (!children.length) return;
    inView(group, () => {
      animate(children, { opacity: [0, 1], y: [20, 0] }, { duration: 0.62, delay: stagger(0.1), ease: [0.22, 1, 0.36, 1] });
      children.forEach((child) => child.classList.add("is-visible"));
    }, { amount: 0.08 });
  });
  document.querySelectorAll(".reveal").forEach((element) => {
    inView(element, () => {
      animate(element, { opacity: [0, 1], y: [16, 0] }, { duration: 0.68, ease: [0.22, 1, 0.36, 1] });
      element.classList.add("is-visible");
    }, { amount: 0.12 });
  });
}

function renderLocalizedContent(event) {
  const language = event?.detail?.language || getCurrentLanguage();
  renderServices(language);
  renderProjects(language);
  renderProcess(language);
  playReveal();
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = whatsappUrl;
    link.setAttribute("aria-label", language === "ar" ? "تواصل مع قطوف عبر واتساب" : "Message Qutoof Solutions on WhatsApp");
  });
  const menuButton = document.querySelector(".menu-toggle");
  menuButton.setAttribute("aria-label", document.body.classList.contains("menu-open") ? copy[language].a11y.menuClose : copy[language].a11y.menu);
  menuButton.setAttribute("aria-expanded", String(document.body.classList.contains("menu-open")));
}

installLanguageSwitch();
window.addEventListener("qutoof:language-change", renderLocalizedContent);
applyLanguage(getCurrentLanguage());

document.querySelector(".work-filters").addEventListener("click", (event) => {
  const button = event.target.closest(".work-filter");
  if (button) setProjectFilter(button.dataset.filter);
});

if (!reducedMotion) {
  const lenis = new Lenis({ duration: 1.08, smoothWheel: true, syncTouch: false, wheelMultiplier: 0.9 });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

const year = document.getElementById("current-year");
year.textContent = String(new Date().getFullYear());

const header = document.getElementById("site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menuButton = document.querySelector(".menu-toggle");
menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? copy[getCurrentLanguage()].a11y.menuClose : copy[getCurrentLanguage()].a11y.menu);
});
document.querySelectorAll(".primary-nav a").forEach((link) => link.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle("is-current", active);
    });
  });
}, { rootMargin: "-36% 0px -55% 0px", threshold: 0 });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let x = -100, y = -100;
  window.addEventListener("pointermove", (event) => {
    x = event.clientX; y = event.clientY;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }, { passive: true });
  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("a, button, input, select, .project-card");
    document.body.classList.toggle("cursor-hover", Boolean(target));
  });
}

// TODO: optimize whatsapp for iOS safari
