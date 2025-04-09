// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import AboutSection from "./Components/whychooseus/WhyChoose";
// import ServicesSection from "./Components/Home/aboutus";
// // You can import and add more components for the other pages like About, Services, etc.

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add your other pages below when ready */}
//         <Route path="/about" element={<AboutSection />} />
//         <Route path="/services" element={<ServicesSection />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Form,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger animation on first load
    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Residential Electrical Services",
      icon: "🏠",
      description:
        "Complete home electrical solutions including wiring, lighting, panel upgrades, and safety inspections.",
    },
    {
      title: "Commercial Electrical Services",
      icon: "🏢",
      description:
        "Comprehensive electrical services for businesses, offices, and commercial properties.",
    },
    {
      title: "Industrial Installations",
      icon: "🏭",
      description:
        "Specialized industrial electrical systems, transformer installations, and maintenance.",
    },
    {
      title: "Cable Joint & L.T./H.T. Work",
      icon: "⚡",
      description:
        "Expert low and high tension electrical work with proper safety measures.",
    },
    {
      title: "Underground Wiring",
      icon: "🔌",
      description:
        "Professional underground wiring solutions for residential and commercial projects.",
    },
    {
      title: "M.S.E.D.C.L. Authorized Work",
      icon: "📋",
      description: "Officially authorized electrical contracting services.",
    },
  ];

  const testimonials = [
    {
      name: "Raj Patel",
      company: "Premier Construction",
      text: "Dilip Electrical provided excellent service for our commercial building. Their team was professional and completed the work ahead of schedule.",
    },
    {
      name: "Priya Shah",
      company: "Homeowner",
      text: "Very satisfied with the home rewiring project. The team was knowledgeable and kept the work area clean throughout the process.",
    },
    {
      name: "Ankit Verma",
      company: "Sunrise Manufacturing",
      text: "Their industrial installation services are top-notch. They understood our complex requirements and delivered precisely what we needed.",
    },
  ];

  return (
    <div className="App">
      <Navbar
        expand="lg"
        className={`fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <div className="brand-logo">DE</div>
            <div className="brand-text">
              <span className="brand-title">Dilip Electrical</span>
              <span className="brand-subtitle">& Contractor</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact" className="nav-contact-btn">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center hero-content">
            <Col lg={7} className="hero-text">
              <h1 className="hero-title animate-in">
                Professional Electrical Solutions
              </h1>
              <p className="hero-subtitle animate-in-delay">
                Licensed Class 'A' electrical contractor providing comprehensive
                services for residential, commercial, and industrial needs
              </p>
              <div className="hero-buttons animate-in-delay-2">
                <Button variant="primary" className="me-3 pulse-btn">
                  Get Free Quote
                </Button>
                <Button variant="outline-light">Our Services</Button>
              </div>
            </Col>
            <Col lg={5} className="hero-image-container d-none d-lg-block">
              <div className="hero-image animate-float">
                <div className="circuit-pattern"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-wave"></div>
      </header>

      <section id="services" className="services-section">
        <Container>
          <div
            className={`section-header ${
              isVisible ? "fade-in visible" : "fade-in"
            }`}
          >
            <h2>Our Electrical Services</h2>
            <p>Comprehensive electrical solutions for all your needs</p>
            <div className="section-underline"></div>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card
                  className={`service-card ${
                    isVisible ? "slide-up visible" : "slide-up"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="outline-primary" className="mt-3">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="about" className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div
                className={`about-image-container ${
                  isVisible ? "slide-in-left visible" : "slide-in-left"
                }`}
              >
                <div className="about-image">
                  <div className="experience-badge">
                    <span className="years">15+</span>
                    <span className="text">Years Experience</span>
                  </div>
                </div>
                <div className="about-pattern"></div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={`about-content ${
                  isVisible ? "slide-in-right visible" : "slide-in-right"
                }`}
              >
                <h2>About Dilip Electrical & Contractor</h2>
                <div className="section-underline"></div>
                <p className="about-intro">
                  With over 15 years of experience, we are a leading provider of
                  electrical contracting services in Maharashtra.
                </p>
                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Licensed & Certified</h4>
                      <p>Class 'A' Government Licensed Electrical Contractor</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Experienced Team</h4>
                      <p>
                        Highly skilled technicians with extensive industry
                        knowledge
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Quality Work</h4>
                      <p>
                        Commitment to excellence in every electrical project
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="primary" className="mt-4">
                  Read More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects" className="projects-section">
        <Container>
          <div
            className={`section-header ${
              isVisible ? "fade-in visible" : "fade-in"
            }`}
          >
            <h2>Our Recent Projects</h2>
            <p>Showcasing our expertise in electrical contracting</p>
            <div className="section-underline"></div>
          </div>
          <div className="projects-gallery">
            <Row>
              <Col md={6} lg={4}>
                <div
                  className={`project-card ${
                    isVisible ? "zoom-in visible" : "zoom-in"
                  }`}
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="project-image project-1"></div>
                  <div className="project-overlay">
                    <h3>Industrial L.T./H.T. Installation</h3>
                    <p>Complete transformer setup for manufacturing facility</p>
                    <Button variant="light" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4}>
                <div
                  className={`project-card ${
                    isVisible ? "zoom-in visible" : "zoom-in"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="project-image project-2"></div>
                  <div className="project-overlay">
                    <h3>Commercial Wiring</h3>
                    <p>Office complex electrical infrastructure</p>
                    <Button variant="light" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4}>
                <div
                  className={`project-card ${
                    isVisible ? "zoom-in visible" : "zoom-in"
                  }`}
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="project-image project-3"></div>
                  <div className="project-overlay">
                    <h3>Residential Upgrade</h3>
                    <p>Complete home rewiring and panel upgrade</p>
                    <Button variant="light" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="text-center mt-5">
            <Button variant="outline-primary" className="view-all-btn">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="testimonials-section">
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
          <Carousel className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="contact" className="contact-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div
                className={`contact-info ${
                  isVisible ? "slide-in-left visible" : "slide-in-left"
                }`}
              >
                <h2>Get In Touch</h2>
                <div className="section-underline"></div>
                <p>Have a question or need a quote? Contact us today!</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h4>Office Address</h4>
                      <p>
                        Office no. 109 Boke Plaza, Nashik-Pune Road, Dwarka,
                        Nashik, Maharashtra, Pin 422011
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📱</div>
                    <div>
                      <h4>Phone Number</h4>
                      <p>7875688111</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                      <h4>Email Address</h4>
                      <p>dilipdharak@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="social-links mt-4">
                  <a href="#" className="social-icon facebook">
                    f
                  </a>
                  <a href="#" className="social-icon instagram">
                    i
                  </a>
                  <a href="#" className="social-icon linkedin">
                    l
                  </a>
                  <a href="#" className="social-icon whatsapp">
                    w
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={`contact-form-wrapper ${
                  isVisible ? "slide-in-right visible" : "slide-in-right"
                }`}
              >
                <div className="contact-form">
                  <h3>Request A Quote</h3>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Control type="tel" placeholder="Your Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Select Service</option>
                        <option>Residential Electrical</option>
                        <option>Commercial Electrical</option>
                        <option>Industrial Installation</option>
                        <option>L.T./H.T. Work</option>
                        <option>Underground Wiring</option>
                        <option>M.S.E.D.C.L. Work</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your Message"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 submit-btn"
                    >
                      Send Request
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="text-center text-lg-start">
              <h3>Need Emergency Electrical Service?</h3>
              <p>We're available 24/7 for urgent electrical problems</p>
            </Col>
            <Col lg={4} className="text-center text-lg-end mt-3 mt-lg-0">
              <Button variant="light" className="cta-btn">
                Call Now: 7875688111
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="site-footer">
        <Container>
          <Row className="mb-5">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="footer-brand d-flex align-items-center">
                <div className="footer-logo">DE</div>
                <div className="footer-brand-text">
                  <h4>Dilip Electrical</h4>
                  <p>& Contractor</p>
                </div>
              </div>
              <p className="mt-3">
                Class 'A' Government Licensed Electrical Contractor providing
                quality electrical services since 2010.
              </p>
              <div className="footer-social mt-4">
                <a href="#">f</a>
                <a href="#">i</a>
                <a href="#">l</a>
                <a href="#">w</a>
              </div>
            </Col>
            <Col sm={6} lg={2} className="mb-4 mb-lg-0">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <h5>Our Services</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Residential Electrical</a>
                </li>
                <li>
                  <a href="#">Commercial Electrical</a>
                </li>
                <li>
                  <a href="#">Industrial Installation</a>
                </li>
                <li>
                  <a href="#">L.T./H.T. Work</a>
                </li>
                <li>
                  <a href="#">M.S.E.D.C.L. Work</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h5>Contact Info</h5>
              <ul className="footer-contact">
                <li>
                  <span className="icon">📍</span>
                  <span>
                    Office no. 109 Boke Plaza, Nashik-Pune Road, Dwarka, Nashik
                  </span>
                </li>
                <li>
                  <span className="icon">📱</span>
                  <span>7875688111</span>
                </li>
                <li>
                  <span className="icon">✉️</span>
                  <span>dilipdharak@gmail.com</span>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <div className="footer-bottom">
            <p>© 2025 Dilip Electrical & Contractor. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>

      <a href="#home" className={`back-to-top ${scrolled ? "visible" : ""}`}>
        <span>↑</span>
      </a>
    </div>
  );
}

export default App;
