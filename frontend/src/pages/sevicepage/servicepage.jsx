import React from 'react';
import "./servicepage.css"
const ServicesPage = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: '⚡',
      title: 'Cable Jointing (1.1 kV to 33 kV)',
      subtitle: 'Strong & Secure Connections',
      description: 'We provide advanced cable jointing solutions to ensure seamless power flow across industrial and commercial infrastructures.',
      features: [
        'Heat Shrink & Cold Shrink Jointing',
        'Fault Diagnosis & Quick Repairs',
        'High-Voltage Cable Testing & Commissioning'
      ]
    },
    {
      id: 2,
      icon: '⚙',
      title: 'Industrial LT/HT Transformer & CT/PT Installation',
      subtitle: 'Reliable Power Distribution',
      description: 'We specialize in industrial transformer installation for efficient power distribution and voltage regulation.',
      features: [
        'LT (Low Tension) & HT (High Tension) Transformer Setup',
        'CT/PT Metering & Calibration',
        'Maintenance & Troubleshooting for Maximum Efficiency'
      ]
    },
    {
      id: 3,
      icon: '🌐',
      title: 'LT/HT Overhead & Underground Electrical Work',
      subtitle: 'Powering Every Corner',
      description: 'From overhead power lines to underground cabling, we design robust electrical infrastructures that are safe, durable, and high-performing.',
      features: [
        'HT & LT Overhead Line Installation',
        'Underground Cable Laying & Power Distribution',
        'Advanced Fault Detection & Preventive Maintenance'
      ]
    },
    {
      id: 4,
      icon: '🏛',
      title: 'M.S.E.D.C.L Authorized Electrical Contracting',
      subtitle: 'Trusted Government Contractor',
      description: 'As a registered Maharashtra State Electricity Distribution Co. Ltd. (M.S.E.D.C.L) contractor, we offer:',
      features: [
        'New Industrial & Commercial Power Connections',
        'Government & Large-Scale Electrical Projects',
        'Load Enhancement & Grid Upgrades'
      ]
    }
  ];

  return (
    <div className="services-container" id='services'>
      
      
      <h1 className="services-title">Our Professional Services</h1>
      
      <div className="services-grid">
  {/* First Row */}
  <div className="services-row">
    {services.slice(0, 2).map(service => (
      <div key={service.id} className="service-card">
        <div className="service-header">
          <div className="service-icon">{service.icon}</div>
          <h2 className="service-title">{service.title}</h2>
          <h3 className="service-subtitle">{service.subtitle}</h3>
        </div>
        <div className="service-content">
          <p className="service-description">{service.description}</p>
          <ul className="features-list">
            {service.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✅</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row */}
  <div className="services-row">
    {services.slice(2, 4).map(service => (
      <div key={service.id} className="service-card">
        <div className="service-header">
          <div className="service-icon">{service.icon}</div>
          <h2 className="service-title">{service.title}</h2>
          <h3 className="service-subtitle">{service.subtitle}</h3>
        </div>
        <div className="service-content">
          <p className="service-description">{service.description}</p>
          <ul className="features-list">
            {service.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✅</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>

      
      <div className="cta-section">
        <p className="cta-text">💡 Partner with an expert team that understands the power of precision!</p>
      </div>
    </div>
  );
};

export default ServicesPage;