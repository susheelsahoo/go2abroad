import { useWebsiteSettings } from "../../../context/WebsiteSettingsContext";

export default function Cta() {
  const { settings } = useWebsiteSettings();
  const whatsappUrl = settings.whatsappNumber ? `https://wa.me/${settings.whatsappNumber.replace(/\D/g, "")}` : "#";
  const phoneUrl = settings.contactPhone ? `tel:${settings.contactPhone.replace(/[^+\d]/g, "")}` : "#";
  return (
    <div className="sis-cta-wrap py-5">
      <div className="container">
        <div className="sis-cta-banner cta-blue" data-aos="fade-up">
          <div className="sis-cta-pattern"></div>
          <div className="sis-cta-inner">
            <div className="sis-cta-text">
              <span className="sis-cta-eyebrow">
                <i className="fa-brands fa-whatsapp"></i>
                Prefer To Chat?
              </span>
              <h3 className="sis-cta-title">
                Skip the form — message us directly on WhatsApp.
              </h3>
              <p className="sis-cta-desc">
                Get answers on eligibility, costs and timelines in minutes, from a real counsellor. {settings.officeHours || "Our team is ready to help."}
              </p>
            </div>
            <div className="sis-cta-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sis-btn-default btn-light">
                Chat on WhatsApp
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={phoneUrl} className="sis-btn-default">
                Call {settings.contactPhone || "our team"}
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
