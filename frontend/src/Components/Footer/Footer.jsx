import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div
        className="container-fluid footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3 text-light"></i>Nashik,
                Maharashtra
              </p>
              {/* <p className="mb-2">
                <i className="fa fa-phone-alt me-3 text-white"></i>+91
                87676565467
              </p> */}
              <p className="mb-2">
                <i className="fa fa-envelope me-3 text-light"></i>
                dilip electricals private limited
              </p>
              <div className="d-flex pt-3">
                {/* <NavLink
                  className="btn btn-square btn-light rounded-circle me-2"
                  to=""
                >
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink
                  className="btn btn-square btn-light rounded-circle me-2"
                  to=""
                >
                  <i className="fab fa-facebook-f"></i>
                </NavLink> */}
                <NavLink
                  className="btn btn-square btn-light rounded-circle me-2"
                  to=""
                >
                  <i className="fab fa-youtube text-light"></i>
                </NavLink>
                <NavLink
                  className="btn btn-square btn-light rounded-circle me-2"
                  to=""
                >
                  <i className="fab fa-linkedin-in text-light"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <NavLink className="btn btn-link" to="/">
                Home
              </NavLink>
              <NavLink className="btn btn-link" to="/aboutus/our-story">
                About us
              </NavLink>
              <NavLink className="btn btn-link" to="/contact">
                Contact
              </NavLink>

              <NavLink className="btn btn-link" to="/services">
                Services
              </NavLink>
              <NavLink className="btn btn-link" to="/projects">
                projects
              </NavLink>
              <NavLink className="btn btn-link" to="/infrastructure">
                Infrastructure
              </NavLink>
              <NavLink className="btn btn-link" to="certificate">
                Certificate
              </NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">About Us</h4>
              <p>
                We specialize in exporting high-quality, residue-free fruits and
                vegetables worldwide. With years of experience, we ensure fresh,
                nutritious, and pesticide-free products for our customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-3">
        <h6 className="footer-text">
          All rights reserved.&copy;{" "}
          <span> 2025 Dilip Electricals Private Limited.</span>
        </h6>
      </div>
    </div>
  );
}

export default Footer;
