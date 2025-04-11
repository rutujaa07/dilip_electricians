import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <Container>
          <h2>Get In Touch</h2>

          <p>Have a question or need a quote? Contact us today!</p>
<hr/>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0  " >
              <div className="contact-info ">
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
                    {" "}
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon instagram">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <RiTwitterXLine />
                  </a>
                </div>
              </div><hr/>
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7683892.100479064!2d65.57886172500001!3d19.886425499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebd1e8650b05%3A0xd1fde783ab6e2f97!2sDilip%20Electrical%20%26%20Contractor%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1744372537687!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0, marginTop: "10px", borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
            <Col lg={6} style={{marginTop:"30px"}}>
              <div className="contact-form-wrapper">
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
