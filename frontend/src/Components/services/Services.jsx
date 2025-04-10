import React from 'react';
import './Services.css';
import slider from "../../assets/slider.jpg"
import slider2 from "../../assets/slider2.jpg"

const ServicesSection = () => {
  // Service data array for easy maintenance and extension
  const services = [
    {
      id: 1,
      title: "Cable Jointing Solutions",
      description: "Expert cable jointing services from 1.1kV to 33kV with industry-leading techniques for maximum reliability.",
      imageSrc: "https://picsum.photos/600/400?random=1",
      category: "Installation"
    },
    {
      id: 2,
      title: "Transformer Installation",
      description: "Professional installation of HT/LT transformers with meticulous attention to safety and efficiency standards.",
      imageSrc: "https://picsum.photos/600/400?random=2",
      category: "Power Systems"
    },
    {
      id: 3,
      title: "Underground Cabling",
      description: "Specialized underground cabling services ensuring secure power distribution for commercial and industrial applications.",
      imageSrc: "https://picsum.photos/600/400?random=3",
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "Industrial Automation",
      description: "Advanced electrical automation solutions to streamline your industrial processes and boost operational efficiency.",
      imageSrc: "https://picsum.photos/600/400?random=4",
      category: "Automation"
    },
    {
      id: 5,
      title: "Power Distribution Systems",
      description: "Custom-designed power distribution systems tailored to your facility's specific requirements and load profiles.",
      imageSrc: "https://picsum.photos/600/400?random=5",
      category: "Power Systems"
    },
    {
      id: 6,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance programs to ensure your electrical systems operate at peak performance levels.",
      imageSrc: "https://picsum.photos/600/400?random=6",
      category: "Maintenance"
    }
  ];

  // Features list for the header section
  const features = [
    "A-Class Government Licensed Contractors",
    "Specialized in HT/LT Installations",
    "MSEDCL Approved Vendor",
    "Safety-First Approach",
    "24/7 Emergency Support"
  ];

  return (
    <div className="services-modern-section">
      {/* Hero Header */}
      {/* <div className="services-hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slider2})`}}>
        <div className="hero-content">
          <span className="hero-badge">EXPERTISE YOU CAN TRUST</span>
          <h1>Powering Your Business With Excellence</h1>
          <p>Comprehensive electrical solutions designed for industrial and commercial applications</p>
          
          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-badge">
                <span className="feature-icon">✓</span> {feature}
              </div>
            ))}
          </div>
          
          <button className="hero-cta">Consult Our Experts</button>
        </div>
      </div> */}
      
      {/* Services Grid */}
      <div className="services-container">
        <div className="section-header">
          <h5 className="section-subheading">OUR SERVICES</h5>
          <h2>High-Voltage Electrical Solutions</h2>
          <p>Dilip Electricals delivers premium electrical engineering services with a focus on safety, reliability, and innovation</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-item">
              <div className="service-image-container">
                <img src={service.imageSrc} alt={service.title} className="service-image" />
                <span className="service-category">{service.category}</span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-link">Learn more <span className="arrow">→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div
  className="why-choose-section"
  style={{
    backgroundImage: `linear-gradient(rgba(8, 14, 24, 0.39), rgba(5, 11, 22, 0.4)), url(${slider})`
  }}
>
        <div className="why-choose-container">
          <div className="why-choose-content">
            <span className="section-subheading light">WHY CHOOSE US</span>
            <h2>Your High-Voltage Electrical Partner</h2>
            <p>With decades of experience and a commitment to excellence, we deliver electrical solutions that power your success</p>
            
            <div className="advantages-grid">
              <div className="advantage-item">
                <div className="advantage-icon">⚡</div>
                <div className="advantage-content">
                  <h4>Technical Excellence</h4>
                  <p>State-of-the-art equipment and technical know-how for optimal performance</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">🔒</div>
                <div className="advantage-content">
                  <h4>Safety Assured</h4>
                  <p>Rigorous safety protocols and compliance with industry standards</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">⏱️</div>
                <div className="advantage-content">
                  <h4>Timely Delivery</h4>
                  <p>Project completion within deadlines without compromising on quality</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">💼</div>
                <div className="advantage-content">
                  <h4>Expert Team</h4>
                  <p>Highly trained professionals with specialized knowledge in electrical engineering</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
     
    </div>
  );
};

export default ServicesSection;