import React from "react";
import "./aboutus.css";
import image from "../../assets/ee.jpg";

// Icons imported as SVG components
const HouseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="9" width="18" height="12" rx="1" />
    <path d="M9 22v-4h6v4" />
    <path d="M10 2L2 9h20l-8-7z" />
  </svg>
);

const PanelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="9" y1="4" x2="9" y2="20" />
    <line x1="15" y1="4" x2="15" y2="20" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

const AcIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" />
    <path d="M7 16h10" />
    <path d="M7 16v4" />
    <path d="M17 16v4" />
    <path d="M10 10v3" />
    <path d="M14 10v3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <div className="icon-header">
          <div className="worker-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" />
              <path d="M12 12c3.31 0 6 1.34 6 3v2H6v-2c0-1.66 2.69-3 6-3z" />
            </svg>
          </div>
          <h3 className="services-subtitle">WHAT WE DO</h3>
        </div>
        <h2 className="services-title">
          We Offer Cost Efficient
          <br />
          Electrical Services
        </h2>
      </div>

      <div className="services-cards">
        <div className="service-card">
          <div className="card-image">
            <img src={image} alt="House Maintenance" />
            <div className="read-more">
              <span>READ MORE</span>
              <div className="arrow-icon">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="icon-box">
              <HouseIcon />
            </div>
            <div className="service-info">
              <h3>House</h3>
              <h3>Maintenance</h3>
            </div>
            <div className="chevron-pattern">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="card-image">
            <img src={image} alt="Electric Panel Repair" />
            <div className="read-more">
              <span>READ MORE</span>
              <div className="arrow-icon">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="icon-box">
              <PanelIcon />
            </div>
            <div className="service-info">
              <h3>Electric</h3>
              <h3>Panel Repair</h3>
            </div>
            <div className="chevron-pattern">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="card-image">
            <img src={image} alt="Air Conditioning" />
            <div className="read-more">
              <span>READ MORE</span>
              <div className="arrow-icon">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="icon-box">
              <AcIcon />
            </div>
            <div className="service-info">
              <h3>Air</h3>
              <h3>Conditioning</h3>
            </div>
            <div className="chevron-pattern">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
