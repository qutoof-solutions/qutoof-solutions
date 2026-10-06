import Lenis from "lenis";
import { animate, inView, stagger } from "motion";
import { applyLanguage, copy, getCurrentLanguage, installLanguageSwitch } from "./lang.js";

console.log('qutoof solutions v1.0 - loaded');

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const WHATSAPP_PHONE = "9665XXXXXXXX";
const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=مرحبا%20قطوف`;
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

function renderProjects(language) {
  const host = document.getElementById("portfolio-grid");
  host.innerHTML = copy[language].work.projects.map((project, index) => `
    <article class="project-card q-card reveal-child">
      <div class="project-art scene-${index + 1} theme-${safeText(project.theme)}" aria-hidden="true">
        <div class="mini-store-window"><div class="mini-store-bar"><span></span><span></span><span></span><b>${safeText(project.brand)}</b><i>＋</i></div>
          <div class="mini-store-hero"><small>${safeText(project.category.toUpperCase())}</small><strong>${safeText(project.title)}</strong><i class="scene-shape shape-${index + 1}"></i></div>
          <div class="mini-store-base"><i></i><i></i><i></i></div>
        </div>
        <span class="concept-stamp">${safeText(copy[language].work.concept)}</span>
      </div>
      <div class="project-meta"><div><span class="project-category">${safeText(project.category)}</span><h3>${safeText(project.brand)}</h3></div><span class="project-arrow" aria-hidden="true">↗</span></div>
      <div class="project-result"><strong>${safeText(project.result)}</strong><span>${safeText(project.sales)}</span><small>${safeText(copy[language].work.metricLabel)}</small></div>
    </article>`).join("");
}

function renderProcess(language) {
  const host = document.getElementById("process-grid");
  host.innerHTML = copy[language].process.steps.map((step, index) => `
    <article class="process-card reveal-child"><span class="process-index">0${index + 1}<i></i></span><h3>${safeText(step.title)}</h3><p>${safeText(step.body)}</p></article>`).join("");
}

function renderPricing(language) {
  const host = document.getElementById("pricing-grid");
  const direction = language === "ar" ? "rtl" : "ltr";
  const currency = language === "ar" ? "ر.س" : "SAR";
  const locale = language === "ar" ? "ar-SA" : "en-SA";
  host.innerHTML = copy[language].pricing.plans.map((plan, index) => `
    <article class="price-card q-card ${index === 1 ? "price-featured" : ""} reveal-child" dir="${direction}">
      ${index === 1 ? `<span class="popular-tag">✳ ${safeText(copy[language].pricing.popular)}</span>` : ""}
      <span class="price-label">${safeText(copy[language].pricing.from)}</span><h3>${safeText(plan.name)}</h3><p class="price-description">${safeText(plan.description)}</p>
      <div class="price-amount"><strong>${new Intl.NumberFormat(locale).format(plan.price)}</strong><span>${currency}</span></div><span class="price-type">${safeText(copy[language].pricing.oneTime)}</span>
      <ul>${plan.features.map((feature) => `<li><span aria-hidden="true">✓</span>${safeText(feature)}</li>`).join("")}</ul>
      <a class="button ${index === 1 ? "button-dark" : "button-light"} plan-cta" href="#contact"><span>${safeText(copy[language].pricing.choose)}</span><span aria-hidden="true">↗</span></a>
    </article>`).join("");
}

function renderTestimonials(language) {
  const host = document.getElementById("testimonials-grid");
  host.innerHTML = copy[language].voices.quotes.map((quote, index) => `
    <article class="testimonial-card q-card reveal-child"><div class="quote-stars" aria-label="Five decorative stars">${"✳ ".repeat(5).trim()}</div>
      <p class="quote-text">“${safeText(quote.text)}”</p><span class="testimonial-sample">${safeText(copy[language].voices.label)}</span>
      <div class="quote-author"><span class="quote-avatar avatar-${index + 1}">${["ن", "م", "د"][index]}</span><div><strong>${safeText(quote.person)}</strong><span>${safeText(quote.location)}</span></div></div>
    </article>`).join("");
}

function playReveal() {
  if (reducedMotion) {
    document.querySelectorAll(".reveal, .reveal-child").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  document.querySelectorAll("[data-motion-group]").forEach((group) => {
    const children = [...group.querySelectorAll(".reveal-child")];
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
  renderPricing(language);
  renderTestimonials(language);
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

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const language = getCurrentLanguage();
  const fields = new FormData(form);
  const template = copy[language].contact.messageTemplate;
  const goalField = form.querySelector('[name="goal"]');
  const selectedGoal = goalField.options[goalField.selectedIndex]?.textContent || "";
  const message = template
    .replace("{name}", fields.get("name") || "")
    .replace("{brand}", fields.get("brand") || (language === "ar" ? "غير محدد" : "not specified"))
    .replace("{goal}", selectedGoal);
  const destination = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(destination, "_blank", "noopener,noreferrer");
});

const liveRegion = document.getElementById("live-region");
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
