<?php
$basePath = $basePath ?? '';
$homeUrl = $homeUrl ?? ($basePath . 'index.php');
$countriesUrl = $countriesUrl ?? ($basePath . 'destinations/index.php');
$aboutUrl = $aboutUrl ?? ($basePath . 'about-us.php');
$contactUrl = $contactUrl ?? ($basePath . 'contact-us.php');
$faqsUrl = $faqsUrl ?? ($basePath . 'faqs.php');
$privacyUrl = $basePath . 'privacy-policy.php';
?>
<link rel="stylesheet" href="<?= htmlspecialchars($basePath) ?>assets/css/footer-ui.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
<section class="site-footer-cta" aria-label="Start your study abroad journey">
  <div>
    <p class="eyebrow light">YOUR NEXT CHAPTER STARTS HERE</p>
    <h2>Ready to make your<br><em>next step clear?</em></h2>
  </div>
  <div>
    <p>Tell us where you want to go. We’ll help you understand the right path for your profile.</p>
    <a class="button button-accent" href="<?= htmlspecialchars($homeUrl) ?>#counselling">Book Free Counselling ↗</a>
  </div>
</section>
<footer class="footer">
  <div class="footer-brand">
    <a class="brand" href="<?= htmlspecialchars($homeUrl) ?>#top">
      <img class="site-logo" src="<?= htmlspecialchars($basePath) ?>assets/images/logo.jpeg" alt="Go2Abroad" />
    </a>
    <p>Connecting dreams with clear, responsible global education guidance.</p>
  </div>

  <div class="footer-links">
    <div>
      <b>Explore</b>
      <a href="<?= htmlspecialchars($aboutUrl) ?>">About Us</a>
      <a href="<?= htmlspecialchars($countriesUrl) ?>">Countries</a>
      <a href="<?= htmlspecialchars($homeUrl) ?>#universities">Universities</a>
      <a href="<?= htmlspecialchars($homeUrl) ?>#courses">Courses</a>
      <a href="<?= htmlspecialchars($basePath) ?>blog.php">Blogs</a>
    </div>

    <div>
      <b>Company</b>
      <a href="<?= htmlspecialchars($basePath) ?>team.php">Our Team</a>
      <a href="<?= htmlspecialchars($faqsUrl) ?>">FAQs</a>
      <a href="<?= htmlspecialchars($privacyUrl) ?>">Privacy Policy</a>
    </div>

    <div>
      <b>Say hello</b>
       <span class="footer-address">Office Address<br><small>Go2Abroad Education Consultants, India</small></span>
      <a href="mailto:info@go2abroad.co">info@go2abroad.co</a>
      <a href="https://wa.me/0000000000">WhatsApp us ↗</a>
      <div class="footer-socials" aria-label="Social media links">
        <a href="https://www.facebook.com/go2abroad" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/go2abroad_" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/company/go2abroad" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/@go2abroad" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">© 2024 Go2Abroad. Connecting Dreams.</div>
</footer>
<a class="floating-whatsapp" href="https://wa.me/0000000000" aria-label="Chat with Go2Abroad on WhatsApp">◉</a>
<div class="mobile-sticky">
  <a href="https://wa.me/0000000000">◉ WhatsApp</a>
  <a href="<?= htmlspecialchars($homeUrl) ?>#counselling">Book counselling</a>
</div>
