(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".header");

  document.querySelectorAll(
    ".hero-copy > .eyebrow, .hero-copy > h1, .hero-copy > .hero-lede, .hero-copy > .hero-buttons, .hero-copy > .hero-proof, .hero-visual"
  ).forEach(function (element, index) {
    element.setAttribute("data-reveal", "hero");
    element.style.setProperty("--hero-delay", reduceMotion ? "0ms" : (index * 100) + "ms");
  });

  var revealGroups = [
    ".section-heading, .why-intro, .journey-copy, .faq-section > div:first-child, .cta-section > div, .video-copy, .testimonial-copy",
    ".destination-card, .university-card, .course-card, .service-card, .step, .insight-feature, .stats > div, .portfolio-card, .team-card, .partner-rail span"
  ];
  revealGroups.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      element.setAttribute("data-reveal", "scroll");
      element.style.setProperty("--reveal-delay", reduceMotion ? "0ms" : Math.min(index * 70, 280) + "ms");
    });
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach(function (element) { element.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    document.querySelectorAll('[data-reveal="scroll"]').forEach(function (element) { observer.observe(element); });
  }

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}());
