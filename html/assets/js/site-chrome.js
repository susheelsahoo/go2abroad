(function () {
  "use strict";

  var inDestinations = window.location.pathname.indexOf("/destinations/") !== -1;
  var root = inDestinations ? "../" : "";
  var home = root + "index.html#top";

  var header = `
    <header class="header">
      <a class="brand" href="${home}"><img class="site-logo" src="${root}assets/images/logo.jpeg" alt="Go2Abroad"></a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="${home}">Home</a>
        <a href="${root}about-us.html">About us</a>
        <div class="nav-dropdown"><a href="${root}destinations/index.html">Destinations <span>⌄</span></a><div class="nav-submenu nav-destination-menu"><div class="nav-menu-heading"><span class="nav-menu-kicker">GO2ABROAD DESTINATIONS</span><strong>Choose your next chapter</strong><a href="${root}destinations/all-countries.html">View all destinations <span>↗</span></a></div><div class="nav-country-grid"><a href="${root}destinations/all-countries.html"><span class="nav-country-index">01</span><span class="nav-country-name">All countries</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/usa.html"><span class="nav-country-index">02</span><span class="nav-country-name">United States of America</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/australia.html"><span class="nav-country-index">03</span><span class="nav-country-name">Australia</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/canada.html"><span class="nav-country-index">04</span><span class="nav-country-name">Canada</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/united-kingdom.html"><span class="nav-country-index">05</span><span class="nav-country-name">United Kingdom</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/new-zealand.html"><span class="nav-country-index">06</span><span class="nav-country-name">New Zealand</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/singapore.html"><span class="nav-country-index">07</span><span class="nav-country-name">Singapore</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/france.html"><span class="nav-country-index">08</span><span class="nav-country-name">France</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/sweden.html"><span class="nav-country-index">09</span><span class="nav-country-name">Sweden</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/netherlands.html"><span class="nav-country-index">10</span><span class="nav-country-name">Netherlands</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/austria.html"><span class="nav-country-index">11</span><span class="nav-country-name">Austria</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/denmark.html"><span class="nav-country-index">12</span><span class="nav-country-name">Denmark</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/finland.html"><span class="nav-country-index">13</span><span class="nav-country-name">Finland</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/malaysia.html"><span class="nav-country-index">14</span><span class="nav-country-name">Malaysia</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/mauritius.html"><span class="nav-country-index">15</span><span class="nav-country-name">Mauritius</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/china.html"><span class="nav-country-index">16</span><span class="nav-country-name">China</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/vietnam.html"><span class="nav-country-index">17</span><span class="nav-country-name">Vietnam</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/japan.html"><span class="nav-country-index">18</span><span class="nav-country-name">Japan</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/malta.html"><span class="nav-country-index">19</span><span class="nav-country-name">Malta</span><span class="nav-country-arrow">↗</span></a><a href="${root}destinations/georgia.html"><span class="nav-country-index">20</span><span class="nav-country-name">Georgia</span><span class="nav-country-arrow">↗</span></a></div></div></div>
        <div class="nav-dropdown"><a href="${root}services.html">Services <span>⌄</span></a><div class="nav-submenu"><a href="${root}services.html">All services</a><a href="${root}portfolio.html">Our portfolio</a><a href="${root}team.html">Our team</a><a href="${root}university-network.html">University network</a></div></div>
        <a href="${root}blog.html">Blogs</a>
        <a href="${root}courses.html">Courses</a>
        <a href="${root}faqs.html">FAQs</a>
        <a href="${root}contact-us.html">Contact</a>
      </nav>
      <div class="header-actions"><a class="button button-small" href="${root}index.html#counselling">Book free counselling</a><button class="menu-button" id="menuButton" type="button" aria-label="Open navigation menu" aria-controls="mobileNav" aria-expanded="false">☰</button></div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
      <a href="${home}">Home</a><a href="${root}about-us.html">About us</a><a href="${root}destinations/index.html">Destinations</a><a href="${root}destinations/all-countries.html">All countries</a><a href="${root}portfolio.html">Portfolio</a><a href="${root}team.html">Our team</a><a href="${root}university-network.html">University network</a><a href="${root}services.html">Services</a><a href="${root}blog.html">Blogs</a><a href="${root}courses.html">Courses</a><a href="${root}faqs.html">FAQs</a><a href="${root}contact-us.html">Contact</a><a class="button" href="${root}index.html#counselling">Book free counselling</a>
    </nav>`;

  var footer = `
    <footer class="footer">
      <div class="footer-brand"><a class="brand" href="${home}"><img class="site-logo" src="${root}assets/images/logo.jpeg" alt="Go2Abroad"></a><p>Helping ambitious students find their place in the world.</p></div>
      <div class="footer-links"><div><b>Explore</b><a href="${root}destinations/index.html">Destinations</a><a href="${root}university-network.html">Universities</a><a href="${root}courses.html">Courses</a></div><div><b>Company</b><a href="${root}services.html">Our services</a><a href="${root}contact-us.html">Contact us</a><a href="${root}faqs.html">FAQs</a></div><div><b>Say hello</b><a href="mailto:hello@go2abroad.com">hello@go2abroad.com</a><a href="https://wa.me/0000000000">WhatsApp us ↗</a><div class="footer-socials" aria-label="Social media links"><a href="https://www.instagram.com/go2abroad_" aria-label="Instagram">ig</a><a href="https://www.linkedin.com/company/go2abroad" aria-label="LinkedIn">in</a><a href="https://www.youtube.com/@go2abroad" aria-label="YouTube">▶</a></div></div></div>
      <div class="footer-bottom"><span>© 2026 Go2Abroad. Connecting Dreams.</span></div>
    </footer>`;

  var currentHeader = document.querySelector(".header");
  var currentMobileNav = document.querySelector(".mobile-nav");
  var currentFooter = document.querySelector(".footer");
  if (currentHeader) currentHeader.outerHTML = header;
  if (currentMobileNav) currentMobileNav.outerHTML = header.match(/<nav class="mobile-nav"[\s\S]*?<\/nav>/)[0];
  if (currentFooter) currentFooter.outerHTML = footer;

  var modal = document.createElement("div");
  modal.className = "counselling-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="counselling-modal-backdrop" data-close-counselling></div>
    <section class="counselling-dialog" role="dialog" aria-modal="true" aria-labelledby="counsellingTitle">
      <button class="counselling-close" type="button" aria-label="Close counselling form" data-close-counselling>×</button>
      <div class="counselling-dialog-intro"><p class="eyebrow light">YOUR NEXT STEP STARTS HERE</p><h2 id="counsellingTitle">Let’s make your<br/><em>next step clear.</em></h2><p>Tell us a little about your plans. Our team will help you understand the right path for your profile.</p><div class="counselling-promise"><span>✦</span><div><b>Clear guidance, no pressure.</b><small>We’ll respond with a practical next step.</small></div></div></div>
      <form class="counselling-form" id="counsellingForm"><div class="counselling-form-heading"><span>FREE COUNSELLING</span><b>Start with your details</b></div><label>Full name<input name="name" autocomplete="name" required placeholder="Your name" /></label><label>Email address<input type="email" name="email" autocomplete="email" required placeholder="you@example.com" /></label><label>Phone number<input type="tel" name="phone" autocomplete="tel" required placeholder="+91 98765 43210" /></label><div class="counselling-form-row"><label>Interested in<select name="interest" required><option value="" selected disabled>Choose one</option><option>Course selection</option><option>University shortlist</option><option>Applications and visa</option><option>Student support</option></select></label><label>Destination<select name="destination"><option>Not sure yet</option><option>United Kingdom</option><option>Australia</option><option>Canada</option><option>United States</option></select></label></div><button class="button button-accent" type="submit">Request my counselling <span>↗</span></button><p class="counselling-status" id="counsellingStatus" role="status" aria-live="polite"></p><small class="counselling-note">Your details are only used to respond to your enquiry.</small></form>
    </section>`;
  document.body.appendChild(modal);

  var modalOpeners = document.querySelectorAll('a[href*="#counselling"]');
  var closeButtons = modal.querySelectorAll("[data-close-counselling]");
  var counsellingForm = document.getElementById("counsellingForm");
  var lastFocusedElement;
  function closeCounselling() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedElement) lastFocusedElement.focus();
  }
  function openCounselling(event) {
    event.preventDefault();
    lastFocusedElement = event.currentTarget;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    window.setTimeout(function () { modal.querySelector("input").focus(); }, 80);
  }
  modalOpeners.forEach(function (link) { link.addEventListener("click", openCounselling); });
  closeButtons.forEach(function (button) { button.addEventListener("click", closeCounselling); });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape" && modal.classList.contains("is-open")) closeCounselling(); });
  counsellingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = Object.fromEntries(new FormData(counsellingForm));
    var subject = encodeURIComponent("Free counselling request from " + formData.name);
    var body = encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\nPhone: " + formData.phone + "\nInterested in: " + formData.interest + "\nDestination: " + formData.destination);
    document.getElementById("counsellingStatus").textContent = "Thank you — your request is ready to send to our team.";
    window.location.href = "mailto:hello@go2abroad.com?subject=" + subject + "&body=" + body;
  });

  var menuButton = document.getElementById("menuButton");
  var mobileNav = document.getElementById("mobileNav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", isOpen);
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { mobileNav.classList.remove("is-open"); });
    });
  }
}());
