import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import {
  Container,
 
  Row,
  Col,
  
} from "react-bootstrap";
function Footer() {
  return (
    <div>
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
    </div>
  );
}

export default Footer;
