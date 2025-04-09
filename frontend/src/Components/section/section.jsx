import React, { useState } from "react";
import "./ElectricalServicesGrid.css";

const ElectricalServicesGrid = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(3); // Assuming the middle slide is active initially

  const slides = [
    {
      image: "/path/to/electrician-yellow-helmet.jpg",
      alt: "Electrician in yellow helmet working at desk",
    },
    {
      image: "/path/to/multimeter-testing.jpg",
      alt: "Hand with glove using multimeter on electrical outlet",
    },
    {
      image: "/path/to/electrician-orange-helmet.jpg",
      alt: "Electrician in orange helmet",
      title: "Fixing Storm Damage",
      subtitle: "Maintenance",
    },
    {
      image: "/path/to/electrical-panel-wiring.jpg",
      alt: "Close-up of electrical panel wiring",
    },
    {
      image: "/path/to/electrician-red-helmet.jpg",
      alt: "Electrician in red helmet working on equipment",
    },
  ];

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="services-section">
      <div className="services-header">
        <div className="our-work-label">
          <span className="red-dot">•</span> OUR WORK
        </div>
        <h2 className="services-title">
          We Offer Cost Efficient
          <br />
          Electrical Services
        </h2>
      </div>

      <div className="services-grid">
        {slides.map((slide, index) => (
          <div key={index} className="grid-item">
            <img src={slide.image} alt={slide.alt} className="grid-image" />

            {slide.title && (
              <div className="overlay-info">
                <button className="arrow-button" onClick={handleNextSlide}>
                  →
                </button>
                <div className="slide-caption">
                  <div className="caption-title">{slide.title}</div>
                  <div className="caption-label">{slide.subtitle}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeSlideIndex ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};dc
c  ccccccc
export default ElectricalServicesGrid;
