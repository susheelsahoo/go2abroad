<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Learn how Go2Abroad connects student dreams with clear, responsible global education guidance." />
    <meta name="theme-color" content="#013e53" />
    <title>About Go2Abroad | Connecting Dreams</title>
    <link rel="stylesheet" href="assets/css/globals.css" />
    <link rel="stylesheet" href="assets/css/animations.css" />
    <link rel="stylesheet" href="assets/css/page.css" />
  </head>
  <body class="about-page">
    <div class="site-shell">
      <?php $basePath = ''; include_once __DIR__ . '/header.php'; ?>

      <main>
        <section class="about-hero">
          <div class="about-hero-copy"><p class="eyebrow light">ABOUT GO2ABROAD</p><h1>Connecting<br /><em>dreams.</em></h1><p class="about-hero-lede">A dream becomes real when it has a plan, proof and people who take responsibility.</p><a class="button button-accent" href="index.php#counselling">Start with clarity <span>↗</span></a></div>
          <div class="about-hero-visual"><div class="about-orbit orbit-one"></div><div class="about-orbit orbit-two"></div><div class="about-stat-card"><span class="about-card-label">OUR PROMISE</span><strong>No confusion.<br />No false promises.</strong><small>Just honest guidance and clear ownership.</small></div><div class="about-photo"></div><span class="about-hero-tag">PLAN · PREPARE · PROGRESS</span></div>
        </section>

        <section class="about-intro about-container"><div><p class="eyebrow">WHY WE EXIST</p><h2>Global education<br /><em>without the confusion.</em></h2></div><div class="about-intro-copy"><p>Go2Abroad is a student-first global education guidance ecosystem for students and families who want to make better decisions about studying abroad.</p><p>We help students choose, apply, prepare and settle with clarity — connecting country, course, affordability, visa readiness, arrival support and career preparation into one responsible journey.</p></div></section>

        <section class="about-purpose"><div class="about-container"><div class="about-section-heading"><p class="eyebrow light">THE FOUNDATION</p><h2>Built around<br /><em>your future.</em></h2></div><div class="purpose-grid"><article class="purpose-card purpose-card-featured"><span class="purpose-number">01</span><h3>Purpose</h3><p>To make global education decisions simpler, more honest and more career-oriented for students and families.</p></article><article class="purpose-card"><span class="purpose-number">02</span><h3>Vision</h3><p>To build a trusted global education ecosystem where students can plan, compare, apply, travel and succeed with confidence.</p></article><article class="purpose-card"><span class="purpose-number">03</span><h3>Mission</h3><p>To guide each student with transparent counselling, responsible shortlisting, careful documentation and support beyond admission.</p></article></div></div></section>

        <section class="brand-idea about-container"><div class="brand-idea-heading"><p class="eyebrow">OUR CORE IDEA</p><h2>From dream<br />to <em>outcome.</em></h2><p>“Connecting Dreams” means connecting aspiration with a responsible plan — not just an admission letter.</p></div><div class="journey-line"><div class="journey-node"><span>01</span><strong>Dream</strong><small>Aspiration</small></div><div class="journey-node"><span>02</span><strong>Decide</strong><small>Clarity</small></div><div class="journey-node"><span>03</span><strong>Depart</strong><small>Preparation</small></div><div class="journey-node"><span>04</span><strong>Grow</strong><small>Destination</small></div></div></section>

        <section class="pillars-section"><div class="about-container"><div class="about-section-heading dark-heading"><p class="eyebrow">WHAT WE STAND FOR</p><h2>Guidance with<br /><em>principles.</em></h2></div><div class="pillar-grid"><article class="pillar-card"><span>01</span><div><h3>Trust</h3><p>No misleading promises. Clear documentation, transparent timelines and honest eligibility guidance.</p></div></article><article class="pillar-card"><span>02</span><div><h3>Clarity</h3><p>Every student knows the next step, owner, deadline, document and risk flag.</p></div></article><article class="pillar-card"><span>03</span><div><h3>Career</h3><p>Course and country decisions are judged by employability, budget and long-term outcomes — not ranking alone.</p></div></article><article class="pillar-card"><span>04</span><div><h3>Care</h3><p>Support continues through visa, travel, arrival, settlement and alumni connections.</p></div></article></div></div></section>

        <section class="ecosystem-section about-container"><div class="about-section-heading"><p class="eyebrow">MORE THAN ADMISSIONS</p><h2>A team for every<br /><em>next step.</em></h2></div><div class="ecosystem-list"><div><span>01</span><h3>Core counselling</h3><p>Eligibility assessment, profile evaluation, country and course shortlisting, budget and timeline planning.</p></div><div><span>02</span><h3>Applications & visa</h3><p>Applications, SOP/LOR/CV support, offer tracking, financial files, visa checklists and interview readiness.</p></div><div><span>03</span><h3>Student support</h3><p>Education loans, forex, accommodation, flights, pre-departure preparation, arrival checklists and emergency support.</p></div><div><span>04</span><h3>Career ecosystem</h3><p>CV and LinkedIn guidance, networking, alumni connections, current-student connects and career sessions.</p></div></div></section>

        <section class="about-cta"><div><p class="eyebrow light">YOUR NEXT CHAPTER STARTS HERE</p><h2>Bring us your<br /><em>big maybe.</em></h2></div><div class="about-cta-copy"><p>Tell us where you want to go. We’ll help you understand what it takes to get there.</p><a class="button button-accent" href="index.php#counselling">Book free counselling ↗</a></div></section>
      </main>
      <?php $basePath = ''; include_once __DIR__ . '/footer.php'; ?>
    </div>
    <script>
      const menuButton = document.getElementById("menuButton");
      const mobileNav = document.getElementById("mobileNav");
      menuButton.addEventListener("click", () => { const isOpen = mobileNav.classList.toggle("is-open"); menuButton.setAttribute("aria-expanded", isOpen); menuButton.textContent = isOpen ? "×" : "☰"; });
      document.querySelectorAll(".mobile-nav a").forEach((link) => link.addEventListener("click", () => mobileNav.classList.remove("is-open")));
    </script>
  <script src="assets/js/site-chrome.js"></script>
</body>
</html>


