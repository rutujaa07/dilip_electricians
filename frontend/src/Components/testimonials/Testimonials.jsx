import React, { useState, useEffect } from "react";
import "./Testimonials.css";

function TestimonialSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mark Wood",
      position: "CEO, Buzicon",
      image: "https://picsum.photos/id/1012/150/150",
      rating: 5,
      text: "I feel very happy and proud to connect with this industry. Super productive experience.",
    },
    {
      id: 2,
      name: "Sarah Lee",
      position: "CTO, Innovatech",
      image: "https://picsum.photos/id/1020/150/150",
      rating: 5,
      text: "Exceptional service! Reliable and efficient in every way.",
    },
    {
      id: 3,
      name: "James Brown",
      position: "Manager, ElectraCo",
      image: "https://picsum.photos/id/1025/150/150",
      rating: 5,
      text: "Truly professional team. Delivered everything as promised.",
    },
    {
      id: 4,
      name: "Lisa Ray",
      position: "Founder, BrightVolt",
      image: "https://picsum.photos/id/1005/150/150",
      rating: 5,
      text: "Great attention to detail. We were in good hands.",
    },
    {
      id: 5,
      name: "David Smith",
      position: "Engineer, PowerGrid",
      image: "https://picsum.photos/id/1011/150/150",
      rating: 5,
      text: "Fast, cost-effective, and dependable. What more could we ask?",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <div className="icon-header">
            <div className="testimonial-icon">
              <img
                src="/assets/user-icon.png"
                alt="User Icon"
                className="user-icon"
              />
            </div>
            <h3 className="testimonial-subtitle">OUR TESTIMONIALS</h3>
          </div>
          <h2 className="testimonial-title">
            Professional, Reliable
            <br /> & Cost Effective
          </h2>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-track">
            {testimonials
              .slice(activeSlide, activeSlide + 3)
              .map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-avatar-container">
                    <div className="avatar-circle">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="avatar-image"
                      />
                    </div>
                  </div>
                  <h4 className="service-rating">Great Service</h4>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span className="author-position">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="slider-dots">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
