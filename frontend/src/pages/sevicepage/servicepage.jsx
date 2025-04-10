import React from "react";
import "./servicepage.css";
import image from "../../assets/ee.jpg";

const ServicesPage = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: "⚡",
      title: "Cable Jointing (1.1 kV to 33 kV)",
      subtitle: "Strong & Secure Connections",
      description:
        "We provide advanced cable jointing solutions to ensure seamless power flow across industrial and commercial infrastructures.",
      features: [
        "Heat Shrink & Cold Shrink Jointing",
        "Fault Diagnosis & Quick Repairs",
        "High-Voltage Cable Testing & Commissioning",
      ],
    },
    {
      id: 2,
      icon: "⚙",
      title: "Industrial LT/HT Transformer & CT/PT Installation",
      subtitle: "Reliable Power Distribution",
      description:
        "We specialize in industrial transformer installation for efficient power distribution and voltage regulation.",
      features: [
        "LT (Low Tension) & HT (High Tension) Transformer Setup",
        "CT/PT Metering & Calibration",
        "Maintenance & Troubleshooting for Maximum Efficiency",
      ],
    },
    {
      id: 3,
      icon: "🌐",
      title: "LT/HT Overhead & Underground Electrical Work",
      subtitle: "Powering Every Corner",
      description:
        "From overhead power lines to underground cabling, we design robust electrical infrastructures that are safe, durable, and high-performing.",
      features: [
        "HT & LT Overhead Line Installation",
        "Underground Cable Laying & Power Distribution",
        "Advanced Fault Detection & Preventive Maintenance",
      ],
    },
    {
      id: 4,
      icon: "🏛",
      title: "M.S.E.D.C.L Authorized Electrical Contracting",
      subtitle: "Trusted Government Contractor",
      description:
        "As a registered Maharashtra State Electricity Distribution Co. Ltd. (M.S.E.D.C.L) contractor, we offer:",
      features: [
        "New Industrial & Commercial Power Connections",
        "Government & Large-Scale Electrical Projects",
        "Load Enhancement & Grid Upgrades",
      ],
    },
  ];

  // Safety Equipment data
  const safetyEquipment = [
    {
      name: "Insulated Safety Gloves",
      description:
        "High-voltage protection up to 33kV with Class 4 certification",
    },
    {
      name: "Arc Flash Protection Suits",
      description: "Full-body protection against electrical arc flashes",
    },
    {
      name: "Insulated Tools",
      description:
        "1000V-rated specialized electrical tools for safe operations",
    },
    {
      name: "Voltage Detectors",
      description: "Non-contact testers for detecting live wires",
    },
    {
      name: "Lockout/Tagout Systems",
      description:
        "Complete systems to ensure zero-energy state during maintenance",
    },
    {
      name: "Safety Helmets",
      description: "Electrically insulated helmets with face shields",
    },
  ];

  // Project showcase data
  const projectShowcase = [
    {
      title: "Pune Industrial Park Substation",
      description:
        "Complete design and installation of a 33kV/11kV substation serving 24 industrial clients",
      stats: {
        capacity: "15 MVA",
        duration: "4 months",
        area: "1500 sq.m",
      },
    },
    {
      title: "Mumbai Commercial Complex",
      description:
        "Underground cabling and transformer installation for a 12-tower business park",
      stats: {
        capacity: "8 MVA",
        duration: "6 months",
        area: "25000 sq.m",
      },
    },
    {
      title: "Nagpur Solar Integration",
      description:
        "Integration of 5MW solar plant with existing industrial power infrastructure",
      stats: {
        capacity: "5 MW",
        duration: "3 months",
        area: "12 acres",
      },
    },
  ];

  // Client logos
  const clients = [
    "Maharashtra Industrial Development Corporation",
    "Tata Motors",
    "Godrej Industries",
    "Mahindra & Mahindra",
    "Reliance Industries",
    "Bharat Petroleum",
    
  ];

  return (
    <div className="servicess-container" id="services">
      {/* NEW SECTION: Company Overview with Image */}
      <div className="company-overview-section">
        <h2 className="section-title">Powering Maharashtra Since 2005</h2>
        <div className="overview-content">
          <div className="overview-image-container">
            <img
              src={image}
              alt="Electrical engineers at work"
              className="overview-image"
            />
          </div>
          <div className="overview-text">
            <p>
              For over two decades, our company has been at the forefront of
              industrial and commercial electrical services across Maharashtra.
              With a team of 50+ certified electrical engineers and technicians,
              we have successfully completed more than 500 projects ranging from
              small commercial installations to large industrial power
              solutions.
            </p>
            <p>
              Our commitment to safety, quality, and precision has earned us a
              reputation as one of the most reliable electrical contractors in
              the region. We adhere to the highest industry standards and
              continuously update our methodologies to incorporate the latest
              advancements in electrical engineering.
            </p>
            <p>
              From government projects to private enterprises, our diverse
              portfolio showcases our versatility and technical expertise in
              handling complex electrical challenges.
            </p>
          </div>
        </div>
      </div>
      

      <div className="servicess-grid">
        {/* First Row */}
        <div className="servicess-row">
          {services.slice(0, 2).map((service) => (
            <div key={service.id} className="servicess-card">
              <div className="servicess-header">
                <div className="servicess-icon">{service.icon}</div>
                <h2 className="servicess-title">{service.title}</h2>
                <h3 className="servicess-subtitle">{service.subtitle}</h3>
              </div>
              <div className="servicess-content">
                <p className="servicess-description">{service.description}</p>
                <ul className="features-list mt-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✅</span>
                      <span className="mt-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="servicess-row">
          {services.slice(2, 4).map((service) => (
            <div key={service.id} className="servicess-card">
              <div className="servicess-header">
                <div className="servicess-icon">{service.icon}</div>
                <h2 className="servicess-title">{service.title}</h2>
                <h3 className="servicess-subtitle">{service.subtitle}</h3>
              </div>
              <div className="servicess-content">
                <p className="servicess-description">{service.description}</p>
                <ul className="features-list mt-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✅</span>
                      <span className="mt-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Quality Commitment */}

      {/* NEW SECTION: Trusted By */}
      <div className="client-section">
        <h2 className="section-title">Trusted By Industry Leaders</h2>
        <div className="client-logos">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-container">
              <div className="client-logo-placeholder">
                {client.substring(0, 2)}
              </div>
              <p className="client-name">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
