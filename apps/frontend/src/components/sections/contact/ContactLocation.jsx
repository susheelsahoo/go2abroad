import { useWebsiteSettings } from "../../../context/WebsiteSettingsContext";

export default function ContactLocation() {
  const { settings } = useWebsiteSettings();
  const directionsUrl = settings.googleMapsUrl || "#";
  return (
    <section className="sis-contact-location section pt-0">
      <div className="container">
        <div className="sis-location-card">
          <div className="sis-location-details">
            <div className="sis-location-tabs">
              <button className="sis-location-tab active" type="button" data-location="headOffice">
                <span className="sis-tab-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="sis-tab-content">
                  <strong>
                    Head Office
                  </strong>
                  <small>
                    (Delhi NCR)
                  </small>
                </span>
              </button>
              <button className="sis-location-tab" type="button" data-location="branchOffice">
                <span className="sis-tab-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="sis-tab-content">
                  <strong>
                    Branch Office
                  </strong>
                  <small>
                    (Haryana)
                  </small>
                </span>
              </button>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Office Address
                  </b>
                </span>
                <p id="officeAddress">
                  {settings.address || "Address unavailable"}
                </p>
              </div>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Call Us
                  </b>
                </span>
                <p id="officePhone">
                  {settings.contactPhone || "Phone unavailable"}
                </p>
              </div>
            </div>
            <div className="sis-location-info">
              <div className="sis-info-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="sis-info-content">
                <span className="text-black">
                  <b>
                    Email
                  </b>
                </span>
                <p id="officeEmail">
                  {settings.contactEmail || "Email unavailable"}
                </p>
              </div>
            </div>
            <div className="sisf-m-btn" style={{maxWidth: 'max-content'}}>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="sis-btn-default" id="directionBtn">
                <span>
                  Get Directions
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="sis-location-map">
            <iframe id="officeMap" src={settings.googleMapsUrl ? `${settings.googleMapsUrl}${settings.googleMapsUrl.includes("output=embed") ? "" : `${settings.googleMapsUrl.includes("?") ? "&" : "?"}output=embed`}` : "about:blank"} width="600" height="100%" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
