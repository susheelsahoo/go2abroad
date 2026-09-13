"use client";

import { useState } from "react";

const services = [
  ["Profile & Career Counselling", "counselling"],
  ["Portfolio & Profile Building", "profile-building"],
  ["University Shortlisting", "university-shortlisting"],
  ["Scholarship Guidance", "scholarship-guidance"],
  ["SOP & LOR Writing", "sop-writing"],
  ["Visa Assistance", "visa-assistance"],
  ["Education Loan Assistance", "loan-assistance"],
  ["English Proficiency Test Prep", "test-preparation"],
];
const destinations = [
  ["United States of America (USA)", "/usa"],
  ["United Kingdom (UK)", "/destinations#uk"],
  ["Canada", "/destinations#canada"],
  ["Australia", "/destinations#australia"],
  ["New Zealand", "/destinations#new-zealand"],
  ["Germany", "/destinations#germany"],
];
const courses = [
  ["Undergraduate (Bachelor's)", "undergraduate"],
  ["Postgraduate (Master's)", "postgraduate"],
  ["MBA & Management", "mba"],
  ["PhD & Doctorate", "phd"],
  ["Diploma & Certificate", "diploma"],
];

function Dropdown({ items }: { items: string[][] }) {
  return (
    <ul className="sub-menu sis-menu-columns-2">
      {items.map(([label, href]) => (
        <li className="nav-item" key={label}>
          <a className="nav-link" href={href.startsWith("/") ? href : "/services#" + href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header id="sisf-page-header" className="site-header sisf-main-header sisf-standerd-header">
      <style>{`
        @media (min-width: 768px) {
          .site-header .sisf-centered-header-wrapper {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            position: relative;
            z-index: 10;
          }
          .site-header .sis-main-menu {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          .site-header .sis-main-menu .navbar-nav {
            display: flex !important;
            visibility: visible !important;
          }
          .site-header .navbar-toggle,
          .site-header .react-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
      <div id="sisf-page-header-inner" className="sisf-skin--dark position-relative d-flex align-items-center">
        <div className="container">
          <a className="navbar-brand sisf-header-logo-link mobile-block" href="/">
            <img src="/legacy/images/logo.png" alt="Go2Abroad Logo" style={{ width: 190 }} />
          </a>
          <div className="sisf-centered-header-wrapper sisf--header d-flex justify-content-between align-items-center">
            <a className="navbar-brand sisf-header-logo-link" href="/">
              <img src="/legacy/images/logo.png" alt="Go2Abroad Logo" style={{ width: 190 }} />
            </a>
            <nav className="navbar navbar-expand-lg">
              <div className={`collapse navbar-collapse sis-main-menu${open ? " show" : ""}`}>
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav" id="menu">
                    <li className="nav-item sis-nav-active"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services <i className="fas fa-chevron-down custom-toggle-icon ps-2" aria-hidden="true" /></a><Dropdown items={services} /></li>
                    <li className="nav-item"><a className="nav-link" href="/destinations">Study Destinations <i className="fas fa-chevron-down custom-toggle-icon ps-2" aria-hidden="true" /></a><Dropdown items={destinations} /></li>
                    <li className="nav-item"><a className="nav-link" href="/courses">Courses <i className="fas fa-chevron-down custom-toggle-icon ps-2" aria-hidden="true" /></a><Dropdown items={courses.map(([label, id]) => [label, "/courses#" + id])} /></li>
                    <li className="nav-item"><a className="nav-link" href="/success-stories">Success Stories</a></li>
                    <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="sisf-widget-holder sisf--two d-flex align-items-center">
              <div className="header-btn"><a href="/contact" className="sis-btn-default shadow-none">Book Free Consultation <i className="fa-solid fa-arrow-right-long" aria-hidden="true" /></a></div>
            </div>
          </div>
          <button type="button" className="navbar-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)} />
          <div className="responsive-menu" />
          <nav
            className="react-mobile-menu"
            aria-label="Mobile navigation"
            style={{ display: open ? "block" : "none" }}
          >
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/about-us" onClick={() => setOpen(false)}>About Us</a>
            <a href="/services" onClick={() => setOpen(false)}>Services</a>
            <a href="/destinations" onClick={() => setOpen(false)}>Study Destinations</a>
            <a href="/courses" onClick={() => setOpen(false)}>Courses</a>
            <a href="/success-stories" onClick={() => setOpen(false)}>Success Stories</a>
            <a href="/faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="/contact" onClick={() => setOpen(false)}>Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
