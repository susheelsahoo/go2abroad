(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".header");

  document.querySelectorAll(
    ".hero-slide .hero-copy > .eyebrow, .hero-slide .hero-copy > h1, .hero-slide .hero-copy > .hero-lede, .hero-slide .hero-copy > .hero-buttons, .hero-slide .hero-copy > .hero-proof, .hero-slide .hero-visual"
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

  var slider = document.querySelector(".hero-slider");
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll(".hero-dot"));
    var currentSlide = 0;
    var autoplay;

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === currentSlide;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach(function (dot, dotIndex) {
        var active = dotIndex === currentSlide;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    function startAutoplay() {
      if (!reduceMotion) {
        window.clearInterval(autoplay);
        autoplay = window.setInterval(function () { showSlide(currentSlide + 1); }, 6500);
      }
    }

    slider.querySelector("[data-slide-prev]").addEventListener("click", function () {
      showSlide(currentSlide - 1);
      startAutoplay();
    });
    slider.querySelector("[data-slide-next]").addEventListener("click", function () {
      showSlide(currentSlide + 1);
      startAutoplay();
    });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-slide-to")));
        startAutoplay();
      });
    });
    slider.addEventListener("mouseenter", function () { window.clearInterval(autoplay); });
    slider.addEventListener("mouseleave", startAutoplay);
    slider.addEventListener("focusin", function () { window.clearInterval(autoplay); });
    slider.addEventListener("focusout", function (event) {
      if (!slider.contains(event.relatedTarget)) startAutoplay();
    });
    showSlide(0);
    startAutoplay();
  }
}());
