import { Link } from "react-router-dom";
import { useWebsiteSettings } from "../context/WebsiteSettingsContext";
export default function Footer() {
  const { settings, assetUrl } = useWebsiteSettings();
  const socialLinks = settings.socialLinks && typeof settings.socialLinks === "object" ? settings.socialLinks : {};
  const phoneHref = settings.contactPhone ? `tel:${settings.contactPhone.replace(/[^+\d]/g, "")}` : "#";
  return (
    <footer className="main-footer">
      <div className="sisf-page-footer-inner-area sisf-page-background position-relative pt-4">
        <div className="sisf-sis-bottom-left-image">
          <figure>
            <img src={assetUrl("/images/footer-bg.png")} alt="" />
          </figure>
        </div>
        <div className="sisf-page-footer-middle-area pt-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="300">
                  <h3>
                    {settings.footerTitle || "BRAND & IDENTITY"}
                  </h3>
                  <ul>
                    <li style={{listStyle: 'none'}} className="footerlogo">
                      <Link className="navbar-brand" to="/">
                        <img src={assetUrl(settings.logoUrl || "/images/logo.png")} alt={`${settings.siteName} logo`} style={{width: '190px'}} />
                      </Link>
                    </li>
                    <li style={{listStyle: 'none'}}>
                      {settings.footerDescription}
                    </li>
                    <li style={{listStyle: 'none'}}>
                      <div className="footer-links page">
                        <div className="footer-social-icons-link page">
                          <ul className="list-unstyled d-flex align-items-left justify-content-left gap-3 p-0 m-0">
                            {Object.entries(socialLinks).filter(([, url]) => url).map(([network, url]) => (
                              <li className="mb-0 p-0" key={network}>
                                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={network}>
                                  <i className={`fa-brands fa-${network.toLowerCase()}`}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="100">
                  <h3>
                    QUICK LINKS
                  </h3>
                  <ul>
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations">
                        Study Destinations
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/success-stories">
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="300">
                  <h3>
                    STUDY DESTINATIONS
                  </h3>
                  <ul>
                    <li>
                      <Link to="/usa">
                        Study In USA
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#uk">
                        Study In UK
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#canada">
                        Study In Canada
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#australia">
                        Study In Australia
                      </Link>
                    </li>
                    <li>
                      <Link to="/destinations#new-zealand">
                        Study In New Zealand
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/destinations#germany">
                        Study In Germany
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-links page" data-aos="fade-up" data-aos-delay="700">
                  <h3 className="text-uppercase">
                    CONTACT INFORMATION
                  </h3>
                  <div className="sisf-sis-contact-information">
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href={phoneHref}>
                          <i className="fa-solid fa-phone-volume"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Call us on
                        </span>
                        <a href={phoneHref} className="sis-title text-white d-block">
                          {settings.contactPhone}
                        </a>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href={settings.contactEmail ? `mailto:${settings.contactEmail}` : "#"}>
                          <i className="fa-regular fa-envelope"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Reach out
                        </span>
                        <a href={settings.contactEmail ? `mailto:${settings.contactEmail}` : "#"} className="sis-title text-white d-block">
                          {settings.contactEmail}
                        </a>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href={settings.googleMapsUrl || "/contact"} target={settings.googleMapsUrl ? "_blank" : undefined} rel={settings.googleMapsUrl ? "noopener noreferrer" : undefined}>
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Head Office (Delhi NCR)
                        </span>
                        <a className="sis-title text-white d-block" href={settings.googleMapsUrl || "/contact"} target={settings.googleMapsUrl ? "_blank" : undefined} rel={settings.googleMapsUrl ? "noopener noreferrer" : undefined}>
                          {settings.address}
                        </a>
                      </div>
                    </div>
                    <div className="sisf-contact-box mb-3 d-flex align-items-center gap-3">
                      <div className="sisf-icon">
                        <a href="#">
                          <i className="fa-regular fa-clock"></i>
                        </a>
                      </div>
                      <div className="sisf-sis-e-content">
                        <span className="sis-title text-white d-block">
                          Office Timings
                        </span>
                        <a href="#" className="sis-title text-white d-block">
                          {settings.officeHours}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sisf-page-footer-bottom-area">
          <div className="container">
            <div className="footer-copyright py-4">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="footer-copyright-text">
                    <p className="mb-0 text-white">
                      {settings.copyrightText}
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4"></div>
                <div className="col-xl-4 col-lg-5 col-md-8">
                  <div className="footer-privacy-policy">
                    <ul className="list-unstyled d-flex align-items-center justify-content-end gap-4 p-0 m-0">
                      <li>
                        <a href={settings.termsUrl || "#"} className="text-white">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href={settings.privacyPolicyUrl || "#"} className="text-white">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
