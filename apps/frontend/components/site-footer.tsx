export default function SiteFooter() {
  return (
    <>
      <footer className="main-footer">
        <div className="sisf-page-footer-inner-area sisf-page-background position-relative pt-4">
          <div className="sisf-sis-bottom-left-image"><figure><img src="/legacy/images/footer-bg.png" alt="" /></figure></div>
          <div className="sisf-page-footer-middle-area pt-4"><div className="container"><div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6"><div className="footer-links page"><h3>BRAND &amp; IDENTITY</h3><ul>
              <li style={{ listStyle: "none" }} className="footerlogo"><a className="navbar-brand" href="/"><img src="/legacy/images/logo.png" alt="Go2Abroad Logo" style={{ width: 190 }} /></a></li>
              <li style={{ listStyle: "none" }}>As a leading study abroad consultant, we help Indian students connect with trusted institutions across the globe and plan the career that follows — at zero consultation cost.</li>
              <li style={{ listStyle: "none" }}><div className="footer-social-icons-link page"><ul className="list-unstyled d-flex align-items-left justify-content-left gap-3 p-0 m-0">
                <li><a href="https://www.facebook.com/p/Go2Abroad-Overseas-Consultancy-61587411091019/" target="_blank" rel="noopener"><i className="fa-brands fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/go2abroad_" target="_blank" rel="noopener"><i className="fa-brands fa-instagram" /></a></li>
                <li><a href="https://x.com/G2Abroad_25" target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter" /></a></li>
                <li><a href="https://www.youtube.com/@go2abroad" target="_blank" rel="noopener"><i className="fa-brands fa-youtube" /></a></li>
              </ul></div></li>
            </ul></div></div>
            <div className="col-xl-2 col-lg-6 col-md-6"><div className="footer-links page"><h3>QUICK LINKS</h3><ul>{[["Home", "/"], ["About Us", "/about-us"], ["Services", "/services"], ["Study Destinations", "/destinations"], ["Courses", "/courses"], ["Success Stories", "/success-stories"], ["FAQ", "/faq"], ["Contact Us", "/contact"]].map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></div></div>
            <div className="col-xl-3 col-lg-6 col-md-6"><div className="footer-links page"><h3>STUDY DESTINATIONS</h3><ul>{[["Study In USA", "/usa"], ["Study In UK", "/destinations#uk"], ["Study In Canada", "/destinations#canada"], ["Study In Australia", "/destinations#australia"], ["Study In New Zealand", "/destinations#new-zealand"], ["Study In Germany", "/destinations#germany"]].map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></div></div>
            <div className="col-xl-4 col-lg-6 col-md-6"><div className="footer-links page"><h3>CONTACT INFORMATION</h3><div className="sisf-sis-contact-information">
              <Contact icon="fa-phone-volume" label="Call us on" value="+91-7068821760" href="tel:+917068821760" />
              <Contact icon="fa-envelope" label="Reach out" value="info@go2abroad.co" href="mailto:info@go2abroad.co" />
              <Contact icon="fa-location-dot" label="Head Office (Delhi NCR)" value="B-395, 2nd Floor, Nehru Ground, Neelam Chowk, Faridabad, Haryana - 121001" href="/contact" />
              <Contact icon="fa-clock" label="Office Timings" value="Mon - Sat: 11:00 AM - 07:00 PM" href="#" />
            </div></div></div>
          </div></div></div>
          <div className="sisf-page-footer-bottom-area"><div className="container"><div className="footer-copyright py-4"><div className="row align-items-center"><div className="col-xl-4 col-lg-4"><div className="footer-copyright-text"><p className="mb-0 text-white">© Copyright 2026 Go2Abroad. All Rights Reserved.</p></div></div><div className="col-xl-4 col-lg-3 col-md-4" /><div className="col-xl-4 col-lg-5 col-md-8"><div className="footer-privacy-policy"><ul className="list-unstyled d-flex align-items-center justify-content-end gap-4 p-0 m-0"><li><a href="/terms" className="text-white">Terms &amp; Conditions</a></li><li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li></ul></div></div></div></div></div></div>
        </div>
      </footer>
      <div className="sis-floating-cta"><a href="https://wa.me/919958155484" target="_blank" rel="noopener" className="sis-fab-whatsapp" aria-label="Chat on WhatsApp"><i className="fa-brands fa-whatsapp" /></a><a href="tel:+917068821760" className="sis-fab-call" aria-label="Call Go2Abroad"><i className="fa-solid fa-phone" /></a></div>
    </>
  );
}

function Contact({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3"><div className="sisf-icon"><a href={href}><i className={`fa-solid ${icon}`} /></a></div><div className="sisf-sis-e-content"><span className="sis-title text-white d-block">{label}</span><a href={href} className="sis-title text-white d-block">{value}</a></div></div>;
}
