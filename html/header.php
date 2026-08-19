<?php
$basePath = $basePath ?? '';
$homeUrl = $basePath . 'index.php';
$aboutUrl = $basePath . 'about-us.php';
$countriesUrl = $basePath . 'destinations/index.php';
$servicesUrl = $basePath . 'services.php';
$successStoriesUrl = $basePath . 'success-stories.php';
$contactUrl = $basePath . 'contact-us.php';
$coursesUrl = $homeUrl . '#courses';
$counsellingUrl = $homeUrl . '#counselling';
?>
<header class="header">
  <a class="brand" href="<?= htmlspecialchars($homeUrl) ?>#top">
    <img class="site-logo" src="<?= htmlspecialchars($basePath) ?>assets/images/logo.jpeg" alt="Go2Abroad" />
  </a>

  <nav class="desktop-nav">
    <a href="<?= htmlspecialchars($homeUrl) ?>#top">Home</a>
    <a href="<?= htmlspecialchars($aboutUrl) ?>">About</a>
    <div class="nav-dropdown">
      <a href="<?= htmlspecialchars($countriesUrl) ?>">Countries <span>⌄</span></a>
      <div class="nav-submenu nav-destination-menu">
        <div class="nav-menu-heading">
          <span class="nav-menu-kicker">STUDY DESTINATIONS</span>
          <strong>Explore your options</strong>
          <a href="<?= htmlspecialchars($countriesUrl) ?>">View all countries ↗</a>
        </div>
        <div class="nav-country-grid">
          <a href="<?= htmlspecialchars($basePath) ?>destinations/united-kingdom.php"><span class="nav-country-index">01</span><span class="nav-country-name">United Kingdom</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/australia.php"><span class="nav-country-index">02</span><span class="nav-country-name">Australia</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/canada.php"><span class="nav-country-index">03</span><span class="nav-country-name">Canada</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/usa.php"><span class="nav-country-index">04</span><span class="nav-country-name">United States</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/austria.php"><span class="nav-country-index">05</span><span class="nav-country-name">Austria</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/china.php"><span class="nav-country-index">06</span><span class="nav-country-name">China</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/denmark.php"><span class="nav-country-index">07</span><span class="nav-country-name">Denmark</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/finland.php"><span class="nav-country-index">08</span><span class="nav-country-name">Finland</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/france.php"><span class="nav-country-index">09</span><span class="nav-country-name">France</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/georgia.php"><span class="nav-country-index">10</span><span class="nav-country-name">Georgia</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/japan.php"><span class="nav-country-index">11</span><span class="nav-country-name">Japan</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/malaysia.php"><span class="nav-country-index">12</span><span class="nav-country-name">Malaysia</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/malta.php"><span class="nav-country-index">13</span><span class="nav-country-name">Malta</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/mauritius.php"><span class="nav-country-index">14</span><span class="nav-country-name">Mauritius</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/netherlands.php"><span class="nav-country-index">15</span><span class="nav-country-name">Netherlands</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/new-zealand.php"><span class="nav-country-index">16</span><span class="nav-country-name">New Zealand</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/singapore.php"><span class="nav-country-index">17</span><span class="nav-country-name">Singapore</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/sweden.php"><span class="nav-country-index">18</span><span class="nav-country-name">Sweden</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/vietnam.php"><span class="nav-country-index">19</span><span class="nav-country-name">Vietnam</span><span class="nav-country-arrow">↗</span></a>
          <a href="<?= htmlspecialchars($basePath) ?>destinations/all-countries.php"><span class="nav-country-index">20</span><span class="nav-country-name">All destinations</span><span class="nav-country-arrow">↗</span></a>
        </div>
      </div>
    </div>

    <div class="nav-dropdown">
      <a href="<?= htmlspecialchars($servicesUrl) ?>">Services <span>⌄</span></a>
      <div class="nav-submenu">
        <a href="<?= htmlspecialchars($servicesUrl) ?>">All Services</a>
        <a href="<?= htmlspecialchars($basePath) ?>portfolio.php">Our Portfolio</a>
        <a href="<?= htmlspecialchars($successStoriesUrl) ?>">Success Stories</a>
        <a href="<?= htmlspecialchars($basePath) ?>team.php">Our Team</a>
        <a href="<?= htmlspecialchars($basePath) ?>university-network.php">University Network</a>
      </div>
    </div>

    <div class="nav-dropdown">
      <a href="<?= htmlspecialchars($coursesUrl) ?>">Course <span>⌄</span></a>
      <div class="nav-submenu">
        <a href="<?= htmlspecialchars($coursesUrl) ?>">Computer Science</a>
        <a href="<?= htmlspecialchars($coursesUrl) ?>">Business &amp; Management</a>
        <a href="<?= htmlspecialchars($coursesUrl) ?>">Engineering</a>
        <a href="<?= htmlspecialchars($basePath) ?>courses.php">All Courses</a>
      </div>
    </div>

    <a href="<?= htmlspecialchars($successStoriesUrl) ?>">Success Stories</a>
    <a href="<?= htmlspecialchars($contactUrl) ?>">Contact Us</a>
  </nav>

  <div class="header-actions">
    <a class="button button-small" href="<?= htmlspecialchars($counsellingUrl) ?>">Book Free Counselling</a>
    <button class="menu-button" id="menuButton" type="button" aria-label="Open navigation menu" aria-controls="mobileNav" aria-expanded="false">☰</button>
  </div>
</header>

<nav class="mobile-nav" id="mobileNav">
  <a href="<?= htmlspecialchars($homeUrl) ?>#top">Home</a>
  <a href="<?= htmlspecialchars($aboutUrl) ?>">About</a>
  <a href="<?= htmlspecialchars($countriesUrl) ?>">Countries</a>
  <a href="<?= htmlspecialchars($servicesUrl) ?>">Services</a>
  <a href="<?= htmlspecialchars($coursesUrl) ?>">Course</a>
  <a href="<?= htmlspecialchars($successStoriesUrl) ?>">Success Stories</a>
  <a href="<?= htmlspecialchars($contactUrl) ?>">Contact Us</a>
  <a class="button" href="<?= htmlspecialchars($counsellingUrl) ?>">Book Free Counselling</a>
</nav>
