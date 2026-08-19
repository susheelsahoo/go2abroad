<?php
$basePath = $basePath ?? '';
$homeUrl = $basePath . 'index.php';
$aboutUrl = $basePath . 'about-us.php';
$destinationsUrl = $basePath . 'destinations/index.php';
$servicesUrl = $basePath . 'services.php';
$blogUrl = $basePath . 'blog.php';
$faqsUrl = $basePath . 'faqs.php';
$contactUrl = $basePath . 'contact-us.php';
?>
<div class="announcement">
  <span>✦</span> Clear guidance for your global education journey
  <a href="<?= htmlspecialchars($homeUrl) ?>#counselling">Book a free consultation →</a>
</div>
<header class="header">
  <a class="brand" href="<?= htmlspecialchars($homeUrl) ?>#top">
    <img class="site-logo" src="<?= htmlspecialchars($basePath) ?>assets/images/logo.jpeg" alt="Go2Abroad" />
  </a>
  <nav class="desktop-nav">
    <a href="<?= htmlspecialchars($homeUrl) ?>#top">Home</a>
    <a href="<?= htmlspecialchars($aboutUrl) ?>">About us</a>
    <div class="nav-dropdown">
      <a href="<?= htmlspecialchars($destinationsUrl) ?>">Destinations <span>⌄</span></a>
      <div class="nav-submenu">
        <a href="<?= htmlspecialchars($basePath) ?>destinations/united-kingdom.php">United Kingdom</a>
        <a href="<?= htmlspecialchars($basePath) ?>destinations/australia.php">Australia</a>
        <a href="<?= htmlspecialchars($basePath) ?>destinations/canada.php">Canada</a>
        <a href="<?= htmlspecialchars($basePath) ?>destinations/usa.php">United States</a>
      </div>
    </div>
    <div class="nav-dropdown">
      <a href="<?= htmlspecialchars($servicesUrl) ?>">Services <span>⌄</span></a>
      <div class="nav-submenu">
        <a href="<?= htmlspecialchars($servicesUrl) ?>">All services</a>
        <a href="<?= htmlspecialchars($basePath) ?>portfolio.php">Our portfolio</a>
        <a href="<?= htmlspecialchars($basePath) ?>team.php">Our team</a>
        <a href="<?= htmlspecialchars($basePath) ?>university-network.php">University network</a>
      </div>
    </div>
    <a href="<?= htmlspecialchars($blogUrl) ?>">Blogs</a>
    <a href="<?= htmlspecialchars($homeUrl) ?>#courses">Courses</a>
    <a href="<?= htmlspecialchars($faqsUrl) ?>">FAQs</a>
    <a href="<?= htmlspecialchars($contactUrl) ?>">Contact</a>
  </nav>
  <div class="header-actions">
    <a class="button button-small" href="<?= htmlspecialchars($homeUrl) ?>#counselling">Book free counselling</a>
    <button class="menu-button" id="menuButton" type="button" aria-label="Open navigation menu" aria-controls="mobileNav" aria-expanded="false">☰</button>
  </div>
</header>
<nav class="mobile-nav" id="mobileNav">
  <a href="<?= htmlspecialchars($homeUrl) ?>#top">Home</a>
  <a href="<?= htmlspecialchars($aboutUrl) ?>">About us</a>
  <a href="<?= htmlspecialchars($destinationsUrl) ?>">Destinations</a>
  <a href="<?= htmlspecialchars($servicesUrl) ?>">Services</a>
  <a href="<?= htmlspecialchars($basePath) ?>portfolio.php">Portfolio</a>
  <a href="<?= htmlspecialchars($basePath) ?>team.php">Our team</a>
  <a href="<?= htmlspecialchars($blogUrl) ?>">Blogs</a>
  <a href="<?= htmlspecialchars($homeUrl) ?>#courses">Courses</a>
  <a href="<?= htmlspecialchars($faqsUrl) ?>">FAQs</a>
  <a href="<?= htmlspecialchars($contactUrl) ?>">Contact</a>
  <a class="button" href="<?= htmlspecialchars($homeUrl) ?>#counselling">Book free counselling</a>
</nav>
