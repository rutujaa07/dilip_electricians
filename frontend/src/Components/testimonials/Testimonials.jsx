import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';
import image from "../../assets/user.jpg"


const EnhancedTestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "Homeowner",
      image: image,
      text: "Dilip Electricals provided exceptional service for our home rewiring project. The team was professional, punctual, and the quality of work exceeded our expectations."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Business Manager",
      image: image,
      text: "We hired Dilip Electricals for our office renovation and they delivered excellent results. Their attention to detail and commitment to safety standards was impressive."
    },
    {
      id: 3,
      name: "Rajesh Patel",
      position: "Property Developer",
      image: image,
      text: "Working with Dilip Electricals on our commercial development was a great experience. Their team handled complex electrical installations with expertise and efficiency."
    },
    {
      id: 4,
      name: "Priya Sharma",
      position: "Restaurant Owner",
      image: image,
      text: "The team at Dilip Electricals helped us upgrade our electrical systems quickly and within budget. Their professional approach and quality work has earned our trust."
    },
    {
      id: 5,
      name: "Michael Davies",
      position: "Factory Manager",
      image: image,
      text: "For industrial electrical solutions, I highly recommend Dilip Electricals. They understand the complexities of industrial requirements and deliver reliable systems."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    let result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        position: i
      });
    }
    return result;
  };

  return (
    <div className="testimonial-section">
      <Container>
      <div
            className={`section-header ${
              isVisible ? "fade-in visible" : "fade-in"
            }`}
          >
            <h2>Client Testimonials</h2>
            <p>What our clients say about our electrical services</p>
            <div className="section-underline"></div>
          </div>
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {getVisibleTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card position-${testimonial.position}`}
              >
                <div className="testimonial-card-inner">
                  <div className="testimonial-quote">
                    <span className="quote-icon">❝</span>
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-info">
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.position}</span>
                    </div>
                    <div className="testimonial-rating">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonial-controls">
          <div className="testimonial-arrows">
            <button 
              className="arrow-prev" 
              onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            >
              &#10094;
            </button>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button 
              className="arrow-next" 
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            >
              &#10095;
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnhancedTestimonialSlider;
