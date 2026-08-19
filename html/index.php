<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Go2Abroad helps ambitious students choose the right destination, university and course for their future abroad."
    />
    <meta name="theme-color" content="#102d35" />
    <title>Go2Abroad | Connecting Dreams</title>
    <link rel="stylesheet" href="assets/css/globals.css" />
    <link rel="stylesheet" href="assets/css/animations.css" />
    <link rel="stylesheet" href="assets/css/page.css" />
    <link rel="stylesheet" href="assets/css/home-feedback.css" />
  </head>
  <body>
    <div class="site-shell">
      <?php $basePath = ''; include_once __DIR__ . '/header.php'; ?>
      <main id="top">
        <section class="hero hero-slider" aria-label="Go2Abroad destinations">
          <div class="hero-track" aria-live="polite">
            <article class="hero-slide is-active" data-slide="0">
              <div class="hero-copy">
                <p class="eyebrow light">YOUR NEXT CHAPTER STARTS HERE</p>
                <h1>Your world is<br /><em>waiting.</em></h1>
                <p class="hero-lede">Discover the right country, university and course with expert guidance from people who believe in your potential.</p>
                <div class="hero-buttons"><a class="button button-accent" href="#counselling">Book free counselling <span>↗</span></a><a class="text-link light" href="#destinations">Explore destinations <span>↗</span></a></div>
                <div class="hero-proof"><div class="avatars"><span>AS</span><span>RM</span><span>NK</span><span>+</span></div><p><strong>Start with clarity.</strong><br />Join students building a future abroad.</p></div>
              </div>
              <div class="hero-visual"><div class="sun"></div><div class="hero-card card-one"><span>✦</span><b>Dream bigger.</b><small>Your journey, your way.</small></div><div class="photo-main"></div><div class="hero-stamp">EST.<br /><b>2024</b></div></div>
            </article>
            <article class="hero-slide" data-slide="1" aria-hidden="true">
              <div class="hero-copy"><p class="eyebrow light">EXPLORE AUSTRALIA</p><h1>Learn beyond<br /><em>limits.</em></h1><p class="hero-lede">Build an Australia plan around practical education, vibrant cities and the career direction you want next.</p><div class="hero-buttons"><a class="button button-accent" href="destinations/australia.php">Study in Australia <span>↗</span></a><a class="text-link light" href="#counselling">Plan my journey <span>↗</span></a></div><div class="hero-proof"><div class="avatars"><span>AU</span><span>RM</span><span>NK</span><span>+</span></div><p><strong>Right-fit guidance.</strong><br />From shortlist to arrival.</p></div></div>
              <div class="hero-visual hero-visual-australia"><div class="sun"></div><div class="hero-card card-one"><span>01</span><b>Australia.</b><small>Make your next move clear.</small></div><div class="photo-main"></div><div class="hero-stamp">GO<br /><b>FURTHER</b></div></div>
            </article>
            <article class="hero-slide" data-slide="2" aria-hidden="true">
              <div class="hero-copy"><p class="eyebrow light">EXPLORE THE UNITED KINGDOM</p><h1>Find your<br /><em>next move.</em></h1><p class="hero-lede">Compare UK courses and universities with honest advice on fit, cost, documents and the life beyond your offer.</p><div class="hero-buttons"><a class="button button-accent" href="destinations/united-kingdom.php">Study in the UK <span>↗</span></a><a class="text-link light" href="#counselling">Get free guidance <span>↗</span></a></div><div class="hero-proof"><div class="avatars"><span>UK</span><span>AS</span><span>RM</span><span>+</span></div><p><strong>Plan with confidence.</strong><br />Your goals, your roadmap.</p></div></div>
              <div class="hero-visual hero-visual-uk"><div class="sun"></div><div class="hero-card card-one"><span>02</span><b>UK pathways.</b><small>Clarity at every step.</small></div><div class="photo-main"></div><div class="hero-stamp">MAKE<br /><b>YOUR MARK</b></div></div>
            </article>
          </div>
          <div class="hero-slider-controls"><button class="hero-arrow" type="button" data-slide-prev aria-label="Previous slide">←</button><div class="hero-dots" role="tablist" aria-label="Choose hero slide"><button class="hero-dot is-active" type="button" role="tab" aria-selected="true" aria-label="Slide 1" data-slide-to="0"></button><button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 2" data-slide-to="1"></button><button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 3" data-slide-to="2"></button></div><button class="hero-arrow" type="button" data-slide-next aria-label="Next slide">→</button></div>
        </section>
        <section class="search-panel">
          <div>
            <p class="eyebrow">FIND YOUR FIT</p>
            <h2>Where will your<br /><em>story take you?</em></h2>
            <p class="lead-intro">
              Share a few details and get clear, profile-based guidance on your
              country, course and next steps.
            </p>
          </div>
          <form class="search-form lead-form" id="leadForm">
            <label>
              Your name
              <input type="text" name="name" placeholder="e.g. Priya Sharma" autocomplete="name" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" autocomplete="email" required />
            </label>
            <label>
              Phone number
              <input type="tel" name="phone" placeholder="+91 98765 43210" autocomplete="tel" required />
            </label>
            <label>
              I'm interested in
              <select name="course" required>
                <option value="" selected disabled>Select a course</option>
                <option>Computer Science</option>
                <option>Business & Management</option>
                <option>Engineering</option>
              </select>
            </label>
            <label>
              I want to study in
              <select name="destination" required>
                <option value="" selected disabled>Select a destination</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Canada</option>
              </select>
            </label>
            <button class="button button-dark" type="submit">Get my free roadmap →</button>
            <p class="lead-form-status" id="leadFormStatus" role="status" aria-live="polite"></p>
            <span class="lead-form-note">Free guidance · No commitment · Reply within one working day</span>
          </form>
        </section>
        <section class="stats">
          <div><strong>1:1</strong><span>Personal guidance</span></div>
          <div><strong>4.9/5</strong><span>Student experience</span></div>
          <div><strong>20+</strong><span>Study destinations</span></div>
          <div><strong>∞</strong><span>Possibilities ahead</span></div>
        </section>
        <section class="section" id="destinations">
          <div class="section-heading">
            <div>
              <p class="eyebrow">OPEN A NEW DOOR</p>
              <h2>Places that feel like<br /><em>possibility.</em></h2>
            </div>
            <a class="text-link" href="destinations/index.php"
              >Explore all destinations ↗</a
            >
          </div>
          <div class="destination-grid">
            <a class="destination-card" href="destinations/united-kingdom.php"
              ><div
                class="destination-image"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85&quot;);
                "
              >
                <span class="country-flag">🇬🇧</span
                ><span class="round-arrow">↗</span>
              </div>
              <div class="destination-content">
                <h3>United Kingdom</h3>
                <p>
                  World-class degrees, rich culture and global career pathways.
                </p>
                <span class="card-link">Explore destination →</span>
              </div></a
            ><a class="destination-card" href="destinations/australia.php"
              ><div
                class="destination-image"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=85&quot;);
                "
              >
                <span class="country-flag">🇦🇺</span
                ><span class="round-arrow">↗</span>
              </div>
              <div class="destination-content">
                <h3>Australia</h3>
                <p>Innovative learning in a vibrant, welcoming community.</p>
                <span class="card-link">Explore destination →</span>
              </div></a
            ><a class="destination-card" href="destinations/canada.php"
              ><div
                class="destination-image"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=85&quot;);
                "
              >
                <span class="country-flag">🇨🇦</span
                ><span class="round-arrow">↗</span>
              </div>
              <div class="destination-content">
                <h3>Canada</h3>
                <p>
                  Career-focused education with an excellent quality of life.
                </p>
                <span class="card-link">Explore destination →</span>
              </div></a
            ><a class="destination-card" href="destinations/usa.php"
              ><div
                class="destination-image"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=85&quot;);
                "
              >
                <span class="country-flag">🇺🇸</span
                ><span class="round-arrow">↗</span>
              </div>
              <div class="destination-content">
                <h3>United States</h3>
                <p>Shape your future at leading institutions.</p>
                <span class="card-link">Explore destination →</span>
              </div></a
            >
          </div>
        </section>
        <section class="why-section" id="services">
          <div class="why-intro">
            <p class="eyebrow">MORE THAN A PLAN</p>
            <h2>Big dreams need<br /><em>good people.</em></h2>
            <p>
              There is a lot to figure out. You do not have to figure it out
              alone. We bring clarity, care and local know-how to every step.
            </p>
            <a class="button button-outline" href="#counselling"
              >Meet your counsellor ↗</a
            >
          </div>
          <div class="service-grid">
            <div class="service-card highlight">
              <span class="icon">✦</span>
              <h3>Expert counselling</h3>
              <p>A clear, personal plan for your global education goals.</p>
              <a href="#counselling">Learn more →</a>
            </div>
            <div class="service-card">
              <span class="icon">⌖</span>
              <h3>University selection</h3>
              <p>Find a course and campus that fit your ambitions.</p>
              <a href="#universities">Learn more →</a>
            </div>
            <div class="service-card">
              <span class="icon">↗</span>
              <h3>Application assistance</h3>
              <p>Confident support from shortlist to submission.</p>
              <a href="#counselling">Learn more →</a>
            </div>
            <div class="service-card">
              <span class="icon">◎</span>
              <h3>Visa guidance</h3>
              <p>Practical guidance for your next important step.</p>
              <a href="#counselling">Learn more →</a>
            </div>
          </div>
        </section>
        <section class="section university-section" id="universities">
          <div class="section-heading">
            <div>
              <p class="eyebrow">THE RIGHT FIT</p>
              <h2>Find a university<br /><em>that feels like you.</em></h2>
            </div>
            <a class="text-link" href="#counselling">View all universities ↗</a>
          </div>
          <div class="university-grid">
            <article class="university-card">
              <div class="uni-top">
                <span class="uni-logo" style="background: #d8523e">UM</span
                ><span class="bookmark">♡</span>
              </div>
              <p class="card-meta">UNITED KINGDOM · MANCHESTER</p>
              <h3>University of Manchester</h3>
              <div class="uni-course">
                <span>Featured course</span><b>MSc Data Science</b>
              </div>
              <div class="uni-bottom">
                <span>£28,000 / year</span
                ><a href="#counselling">View details ↗</a>
              </div>
            </article>
            <article class="university-card">
              <div class="uni-top">
                <span class="uni-logo" style="background: #e5a92f">MU</span
                ><span class="bookmark">♡</span>
              </div>
              <p class="card-meta">AUSTRALIA · MELBOURNE</p>
              <h3>Monash University</h3>
              <div class="uni-course">
                <span>Featured course</span><b>Master of Business</b>
              </div>
              <div class="uni-bottom">
                <span>A$44,000 / year</span
                ><a href="#counselling">View details ↗</a>
              </div>
            </article>
            <article class="university-card">
              <div class="uni-top">
                <span class="uni-logo" style="background: #1572a1">UT</span
                ><span class="bookmark">♡</span>
              </div>
              <p class="card-meta">CANADA · TORONTO</p>
              <h3>University of Toronto</h3>
              <div class="uni-course">
                <span>Featured course</span><b>MEng Computer Engineering</b>
              </div>
              <div class="uni-bottom">
                <span>C$56,000 / year</span
                ><a href="#counselling">View details ↗</a>
              </div>
            </article>
          </div>
        </section>
        <section class="partners-section" id="partners">
          <div class="section-heading partners-heading"><div><p class="eyebrow">GLOBAL UNIVERSITY NETWORK</p><h2>Good choices start<br /><em>with the right fit.</em></h2></div><a class="text-link" href="#counselling">Build my shortlist ↗</a></div>
          <div class="partner-rail"><span>University of Manchester</span><span>MONASH UNIVERSITY</span><span>UNIVERSITY OF TORONTO</span><span>UCL</span><span>DEAKIN UNIVERSITY</span><span>YORK UNIVERSITY</span></div>
          <p class="partner-note">We help you compare institutions and courses responsibly. Final availability and eligibility are confirmed during your profile review.</p>
        </section>
        <section class="portfolio-section" id="portfolio">
          <div class="section-heading"><div><p class="eyebrow">OUR PORTFOLIO</p><h2>Support for every<br /><em>important step.</em></h2></div><a class="text-link" href="#counselling">Talk to our team ↗</a></div>
          <div class="portfolio-grid"><article class="portfolio-card portfolio-featured"><span class="portfolio-index">01</span><div><h3>Profile to shortlist</h3><p>Understand your strengths, goals and budget before choosing a country, course or university.</p><b>Start with a profile review ↗</b></div></article><article class="portfolio-card"><span class="portfolio-index">02</span><div><h3>Application to offer</h3><p>Organise documents, applications and decisions with a clear owner for every next step.</p><b>Plan your application ↗</b></div></article><article class="portfolio-card"><span class="portfolio-index">03</span><div><h3>Visa to arrival</h3><p>Prepare for the practical journey beyond admission — from visa readiness to your first day abroad.</p><b>Prepare with confidence ↗</b></div></article></div>
        </section>
        <section class="video-section" id="video">
          <div class="video-copy"><p class="eyebrow light">SEE THE JOURNEY</p><h2>Every big move<br />starts with a<br /><em>conversation.</em></h2><p>Meet the people and process behind a more responsible study abroad experience.</p><a class="button button-accent" href="#counselling">Start your conversation ↗</a></div>
          <div class="video-frame"><div class="video-poster"></div><span class="video-play" aria-hidden="true">▶</span><span>GO2ABROAD · CONNECTING DREAMS</span></div>
        </section>
        <section class="testimonial-section" id="testimonials">
          <div class="testimonial-photo"></div><div class="testimonial-copy"><p class="eyebrow light">STUDENT STORY</p><span class="quote-mark">“</span><blockquote>They helped me turn a confusing list of options into a plan I could actually believe in.</blockquote><div class="testimonial-person"><span>AS</span><p><strong>Ananya Sharma</strong><br />MSc Data Science · United Kingdom</p></div><div class="testimonial-meta"><span>01</span><i></i><span>Student experience</span></div></div>
        </section>
        <section class="team-section" id="team">
          <div class="section-heading"><div><p class="eyebrow">THE PEOPLE BEHIND THE PLAN</p><h2>Good guidance<br /><em>starts with good people.</em></h2></div><a class="text-link" href="#counselling">Meet the team ↗</a></div>
          <div class="team-grid"><article class="team-card"><div class="team-photo team-photo-one"></div><div><h3>Neeraj Singh</h3><p>Founder & Global Education Advisor</p></div></article><article class="team-card"><div class="team-photo team-photo-two"></div><div><h3>Admissions team</h3><p>Profile, course & university guidance</p></div></article><article class="team-card"><div class="team-photo team-photo-three"></div><div><h3>Student success team</h3><p>Visa, travel & arrival support</p></div></article></div>
        </section>
        <section class="course-strip" id="courses">
          <div class="section-heading">
            <div>
              <p class="eyebrow light">FOLLOW YOUR CURIOSITY</p>
              <h2>Start with what<br /><em>moves you.</em></h2>
            </div>
          </div>
          <div class="course-grid">
            <a class="course-card" href="#counselling"
              ><span class="course-icon">⌘</span>
              <h3>Computer Science</h3>
              <p>Build the future with a degree in technology.</p>
              <span>Explore course →</span></a
            ><a class="course-card" href="#counselling"
              ><span class="course-icon">↗</span>
              <h3>Business & Management</h3>
              <p>Turn ideas into impact across the world.</p>
              <span>Explore course →</span></a
            ><a class="course-card" href="#counselling"
              ><span class="course-icon">⌁</span>
              <h3>Engineering</h3>
              <p>Design solutions for a changing world.</p>
              <span>Explore course →</span></a
            ><a class="course-card" href="#counselling"
              ><span class="course-icon">+</span>
              <h3>Healthcare</h3>
              <p>Make a difference where it matters most.</p>
              <span>Explore course →</span></a
            >
          </div>
        </section>
        <section class="journey section">
          <div class="journey-copy">
            <p class="eyebrow">ONE STEP AT A TIME</p>
            <h2>Your journey,<br /><em>simplified.</em></h2>
            <p>
              From your first question to your first day on campus, we are here
              to make every step feel possible.
            </p>
            <a class="button button-dark" href="#counselling"
              >Start your journey ↗</a
            >
          </div>
          <div class="steps">
            <div class="step">
              <span>01</span>
              <div>
                <h3>Free counselling</h3>
                <p>Tell us where you want to go.</p>
              </div>
            </div>
            <div class="step">
              <span>02</span>
              <div>
                <h3>Profile assessment</h3>
                <p>We understand what makes you, you.</p>
              </div>
            </div>
            <div class="step">
              <span>03</span>
              <div>
                <h3>Course & university</h3>
                <p>Build a shortlist made for you.</p>
              </div>
            </div>
            <div class="step">
              <span>04</span>
              <div>
                <h3>Application support</h3>
                <p>Put your best application forward.</p>
              </div>
            </div>
            <div class="step">
              <span>05</span>
              <div>
                <h3>Offer to departure</h3>
                <p>Get ready for the adventure ahead.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="faq-section" id="faqs">
          <div>
            <p class="eyebrow">NO QUESTION IS TOO SMALL</p>
            <h2>Let's clear<br />a few things <em>up.</em></h2>
          </div>
          <div class="faq-list">
            <div class="faq open">
              <button aria-expanded="true">
                <span>When should I start planning to study abroad?</span
                ><b>−</b>
              </button>
              <p>
                Ideally, start 8–12 months before your preferred intake. Our
                counsellors can help you map out the right timeline.
              </p>
            </div>
            <div class="faq">
              <button aria-expanded="false">
                <span>How do I choose the right country and university?</span
                ><b>+</b>
              </button>
              <p hidden>
                We look at your goals, academic profile, budget and preferred
                lifestyle to create a shortlist that fits you.
              </p>
            </div>
            <div class="faq">
              <button aria-expanded="false">
                <span>Can Go2Abroad help with scholarships and funding?</span
                ><b>+</b>
              </button>
              <p hidden>
                We can help you discover relevant scholarships and understand
                your options for funding your education.
              </p>
            </div>
          </div>
        </section>
        <section class="cta-section" id="counselling">
          <div>
            <p class="eyebrow light">THE FIRST STEP IS YOURS</p>
            <h2>Ready to make<br /><em>it real?</em></h2>
            <p>
              Bring us your questions, your hopes and your maybe. We will help
              you find what is next.
            </p>
          </div>
          <div class="cta-actions">
            <a class="button button-accent" href="mailto:hello@go2abroad.com"
              >Book free counselling ↗</a
            ><a class="whatsapp-link" href="https://wa.me/0000000000"
              >◉ &nbsp; Chat on WhatsApp</a
            >
          </div>
        </section>
      </main>
      <?php $basePath = ''; include_once __DIR__ . '/footer.php'; ?>
      <a
        class="floating-whatsapp"
        href="https://wa.me/0000000000"
        aria-label="Chat with Go2Abroad on WhatsApp"
        >◉</a
      >
      <div class="mobile-sticky">
        <a href="https://wa.me/0000000000">◉ WhatsApp</a
        ><a href="#counselling">Book counselling</a>
      </div>
    </div>
    <script>
      const menuButton = document.getElementById("menuButton");
      const mobileNav = document.getElementById("mobileNav");
      menuButton.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
          "aria-label",
          isOpen ? "Close navigation menu" : "Open navigation menu",
        );
        menuButton.textContent = isOpen ? "×" : "☰";
      });
      document
        .querySelectorAll(".mobile-nav a")
        .forEach((link) =>
          link.addEventListener("click", () => {
            mobileNav.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
          }),
        );
      document.querySelectorAll(".faq button").forEach((button) =>
        button.addEventListener("click", () => {
          const faq = button.parentElement;
          const answer = faq.querySelector("p");
          const open = faq.classList.toggle("open");
          button.setAttribute("aria-expanded", open);
          button.querySelector("b").textContent = open ? "−" : "+";
          answer.hidden = false;
          answer.style.maxHeight = open ? answer.scrollHeight + "px" : "0px";
          answer.style.opacity = open ? "1" : "0";
        }),
      );

      document.getElementById("leadForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const status = document.getElementById("leadFormStatus");

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const lead = Object.fromEntries(new FormData(form));
        const subject = encodeURIComponent(`New counselling lead from ${lead.name}`);
        const body = encodeURIComponent(
          `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCourse: ${lead.course}\nDestination: ${lead.destination}`,
        );
        window.location.href = `mailto:hello@go2abroad.com?subject=${subject}&body=${body}`;
        status.textContent = "Thanks! Your details are ready to send to our counselling team.";
        form.reset();
      });
    </script>
    <script src="assets/js/animations.js"></script>
  <script src="assets/js/site-chrome.js"></script>
</body>
</html>

