"use client";

import { useState } from "react";
import { courses, destinations, faqs, universities } from "../lib/data/home";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="icon" aria-hidden="true">
    {children}
  </span>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [destination, setDestination] = useState("");
  const [course, setCourse] = useState("");
  const [slide, setSlide] = useState(0);

  const nav = [
    "Study Destinations",
    "Universities",
    "Courses",
    "Services",
    "Scholarships",
    "Success Stories",
    "Blogs",
  ];
  const services = [
    [
      "✦",
      "Expert counselling",
      "A clear, personal plan for your global education goals.",
    ],
    [
      "⌖",
      "University selection",
      "Find a course and campus that fit your ambitions.",
    ],
    [
      "↗",
      "Application assistance",
      "Confident support from shortlist to submission.",
    ],
    ["◎", "Visa guidance", "Practical guidance for your next important step."],
  ];
  const testimonials = [
    [
      "Priya Sharma",
      "University of Manchester · MSc Data Science",
      "Go2Abroad made a confusing process feel simple. I always knew what my next step was.",
      "PS",
    ],
    [
      "Arjun Mehta",
      "Monash University · Master of Business",
      "The guidance was honest, thoughtful and completely centred around my goals.",
      "AM",
    ],
    [
      "Sana Khan",
      "University of Toronto · MEng",
      "From choosing a course to preparing my application, I felt supported throughout.",
      "SK",
    ],
  ];

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>✦</span> Applications for the next intake are now open{" "}
        <a href="#counselling">Book a free consultation →</a>
      </div>
      <header className="header">
        <a className="brand" href="#top">
          <img className="site-logo" src="/logo.svg" alt="Go2Abroad" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="active" href="#top">
            Home
          </a>
          {nav.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="search-button" aria-label="Search">
            ⌕
          </button>
          <a className="button button-small" href="#counselling">
            Book free counselling
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          {nav.map((item) => (
            <a
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              key={item}
            >
              {item}
            </a>
          ))}
          <a className="button" href="#counselling">
            Book free counselling
          </a>
        </nav>
      )}

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow light">YOUR NEXT CHAPTER STARTS HERE</p>
            <h1>
              Your world is
              <br />
              <em>waiting.</em>
            </h1>
            <p className="hero-lede">
              Discover the right country, university and course with expert
              guidance from people who believe in your potential.
            </p>
            <div className="hero-buttons">
              <a className="button button-accent" href="#counselling">
                Book free counselling <span>↗</span>
              </a>
              <a className="text-link light" href="#universities">
                Explore universities <span>↗</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatars">
                <span>AS</span>
                <span>RM</span>
                <span>NK</span>
                <span>+</span>
              </div>
              <p>
                <strong>Start with clarity.</strong>
                <br />
                Join students building a future abroad.
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="sun"></div>
            <div className="hero-card card-one">
              <span>✦</span>
              <b>Dream bigger.</b>
              <small>Your journey, your way.</small>
            </div>
            <div className="hero-card card-two">
              <strong>94%</strong>
              <span>
                of students feel
                <br />
                more confident
              </span>
            </div>
            <div className="photo-main"></div>
            <div className="hero-stamp">
              EST.
              <br />
              <b>2024</b>
            </div>
          </div>
        </section>

        <section className="search-panel">
          <div>
            <p className="eyebrow">FIND YOUR FIT</p>
            <h2>
              Where will your
              <br />
              <em>story take you?</em>
            </h2>
          </div>
          <div className="search-form">
            <label>
              I'm interested in{" "}
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                {courses.map((c) => (
                  <option key={c[0]}>{c[0]}</option>
                ))}
              </select>
            </label>
            <label>
              I want to study in{" "}
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select a destination</option>
                {destinations.map((d) => (
                  <option key={d.slug}>{d.name}</option>
                ))}
              </select>
            </label>
            <button className="button button-dark">
              Find my options <span>→</span>
            </button>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>1:1</strong>
            <span>Personal guidance</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Student experience</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Study destinations</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Possibilities ahead</span>
          </div>
        </section>

        <section className="section" id="study-destinations">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OPEN A NEW DOOR</p>
              <h2>
                Places that feel like
                <br />
                <em>possibility.</em>
              </h2>
            </div>
            <a className="text-link" href="#study-destinations">
              Explore all destinations <span>↗</span>
            </a>
          </div>
          <div className="destination-grid">
            {destinations.map((d) => (
              <a
                className="destination-card"
                href={`/study-in-${d.slug}`}
                key={d.slug}
              >
                <div
                  className="destination-image"
                  style={{ backgroundImage: `url(${d.image})` }}
                >
                  <span className="country-flag">{d.flag}</span>
                  <span className="round-arrow">↗</span>
                </div>
                <div className="destination-content">
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                  <span className="card-link">Explore destination →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="why-section" id="services">
          <div className="why-intro">
            <p className="eyebrow">MORE THAN A PLAN</p>
            <h2>
              Big dreams need
              <br />
              <em>good people.</em>
            </h2>
            <p>
              There is a lot to figure out. You do not have to figure it out
              alone. We bring clarity, care and local know-how to every step.
            </p>
            <a className="button button-outline" href="#counselling">
              Meet your counsellor <span>↗</span>
            </a>
          </div>
          <div className="service-grid">
            {services.map(([icon, title, copy], i) => (
              <div
                className={`service-card ${i === 0 ? "highlight" : ""}`}
                key={title}
              >
                <Icon>{icon}</Icon>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#counselling">Learn more →</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section university-section" id="universities">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE RIGHT FIT</p>
              <h2>
                Find a university
                <br />
                <em>that feels like you.</em>
              </h2>
            </div>
            <a className="text-link" href="#universities">
              View all universities <span>↗</span>
            </a>
          </div>
          <div className="university-grid">
            {universities.map((u) => (
              <article className="university-card" key={u.name}>
                <div className="uni-top">
                  <span
                    className="uni-logo"
                    style={{ backgroundColor: u.accent }}
                  >
                    {u.initials}
                  </span>
                  <span className="bookmark">♡</span>
                </div>
                <p className="card-meta">
                  {u.country} · {u.city}
                </p>
                <h3>{u.name}</h3>
                <div className="uni-course">
                  <span>Featured course</span>
                  <b>{u.course}</b>
                </div>
                <div className="uni-bottom">
                  <span>{u.fee}</span>
                  <a href="#counselling">View details ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="course-strip" id="courses">
          <div className="section-heading">
            <div>
              <p className="eyebrow light">FOLLOW YOUR CURIOSITY</p>
              <h2>
                Start with what
                <br />
                <em>moves you.</em>
              </h2>
            </div>
            <a className="text-link light" href="#courses">
              Explore all courses <span>↗</span>
            </a>
          </div>
          <div className="course-grid">
            {courses.map(([name, copy, icon]) => (
              <a className="course-card" href="#counselling" key={name}>
                <span className="course-icon">{icon}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
                <span>Explore course →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="journey section">
          <div className="journey-copy">
            <p className="eyebrow">ONE STEP AT A TIME</p>
            <h2>
              Your journey,
              <br />
              <em>simplified.</em>
            </h2>
            <p>
              From your first question to your first day on campus, we are here
              to make every step feel possible.
            </p>
            <a className="button button-dark" href="#counselling">
              Start your journey <span>↗</span>
            </a>
          </div>
          <div className="steps">
            {[
              "Free counselling",
              "Profile assessment",
              "Course & university",
              "Application support",
              "Offer to departure",
            ].map((step, i) => (
              <div className="step" key={step}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{step}</h3>
                  <p>
                    {
                      [
                        "Tell us where you want to go.",
                        "We understand what makes you, you.",
                        "Build a shortlist made for you.",
                        "Put your best application forward.",
                        "Get ready for the adventure ahead.",
                      ][i]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="story-section">
          <div className="story-photo"></div>
          <div className="story-content">
            <p className="eyebrow light">A NOTE FROM THE OTHER SIDE</p>
            <div className="quote-mark">“</div>
            <blockquote>
              Go2Abroad helped me see a future I had only imagined — and then
              gave me the confidence to go for it.
            </blockquote>
            <div className="story-person">
              <span>PS</span>
              <p>
                <strong>Priya Sharma</strong>
                <br />
                MSc Data Science · UK
              </p>
            </div>
            <div className="story-controls">
              <button
                onClick={() => setSlide((slide + 2) % 3)}
                aria-label="Previous story"
              >
                ←
              </button>
              <span>
                0{slide + 1} <i>/</i> 03
              </span>
              <button
                onClick={() => setSlide((slide + 1) % 3)}
                aria-label="Next story"
              >
                →
              </button>
            </div>
          </div>
        </section>

        <section className="section insights">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE FURTHER</p>
              <h2>
                Good questions lead
                <br />
                to <em>great places.</em>
              </h2>
            </div>
            <a className="text-link" href="#insights">
              Read all insights <span>↗</span>
            </a>
          </div>
          <div className="insight-grid">
            <article className="insight-feature">
              <div className="insight-photo photo-campus"></div>
              <p className="card-meta">GUIDE · 06 MIN READ</p>
              <h3>How to choose the right study destination for you</h3>
              <a href="#insights">Read the guide →</a>
            </article>
            <article className="insight-feature">
              <div className="insight-photo photo-student"></div>
              <p className="card-meta">PREPARATION · 04 MIN READ</p>
              <h3>The thoughtful student&apos;s checklist for moving abroad</h3>
              <a href="#insights">Read the guide →</a>
            </article>
          </div>
        </section>

        <section className="faq-section" id="faqs">
          <div>
            <p className="eyebrow">NO QUESTION IS TOO SMALL</p>
            <h2>
              Let&apos;s clear
              <br />a few things <em>up.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className={`faq ${openFaq === i ? "open" : ""}`} key={q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <b>{openFaq === i ? "−" : "+"}</b>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section" id="counselling">
          <div>
            <p className="eyebrow light">THE FIRST STEP IS YOURS</p>
            <h2>
              Ready to make
              <br />
              <em>it real?</em>
            </h2>
            <p>
              Bring us your questions, your hopes and your maybe. We will help
              you find what is next.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-accent"
              href="mailto:hello@go2abroad.com"
            >
              Book free counselling <span>↗</span>
            </a>
            <a className="whatsapp-link" href="https://wa.me/0000000000">
              ◉ &nbsp; Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <img className="site-logo" src="/logo.svg" alt="Go2Abroad" />
          </a>
          <p>Helping ambitious students find their place in the world.</p>
          <span className="copyright">© 2024 Go2Abroad. Demo homepage.</span>
        </div>
        <div className="footer-links">
          <div>
            <b>Explore</b>
            <a href="#study-destinations">Destinations</a>
            <a href="#universities">Universities</a>
            <a href="#courses">Courses</a>
          </div>
          <div>
            <b>Company</b>
            <a href="#services">Our services</a>
            <a href="#counselling">Contact us</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div>
            <b>Say hello</b>
            <a href="mailto:hello@go2abroad.com">hello@go2abroad.com</a>
            <a href="https://wa.me/0000000000">WhatsApp us ↗</a>
          </div>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href="https://wa.me/0000000000"
        aria-label="Chat with Go2Abroad on WhatsApp"
      >
        ◉
      </a>
      <div className="mobile-sticky">
        <a href="https://wa.me/0000000000">◉ WhatsApp</a>
        <a href="#counselling">Book counselling</a>
      </div>
    </div>
  );
}
