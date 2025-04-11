import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  
  return (
    <>
      <section id="contact" className="contact-section">
        <Container>
        <h2>Get In Touch</h2>
              
                <p>Have a question or need a quote? Contact us today!</p>
                

          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div
                className="contact-info"
                 
              >
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h4>Office Address</h4>
                      <p>
                        Office no. 109 Bodke Plaza, Nashik-Pune Road, Dwarka,
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
                className="contact-form-wrapper"
                  
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
    </>
  );
};

export default Contact;
