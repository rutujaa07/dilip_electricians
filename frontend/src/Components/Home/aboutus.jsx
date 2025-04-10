import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './AboutSection.css';
import image from "../../assets/ee.jpg";

function AboutSection() {
  return (
    <>
      {" "}
      <div
        className="about-content"
         
      >
        <h2>About Dilip Electrical & Contractor</h2>
        <div className="section-underline" style={{ marginLeft: "55px" }}></div>
      </div>
      <div className="container py-5" style={{ marginTop: "60px" }}>
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={image}
              alt="Electrician at work"
              className="img-fluid border"
            />
            <div className="bg-primary text-white p-3 mt-3 w-75 mx-auto">
              <h4 className="mb-0">A-Class Contractor</h4>
              <small>Safety and Precision Guaranteed</small>
            </div>
          </div>
          <div className="col-md-7">
            <p className="text-uppercase text-primary small mb-1">
              Discover Dilip Electricals
            </p>
            <h2 className="fw-bold">
              Your Trusted Partner for High-Voltage Solutions
            </h2>
            <hr className="border border-primary border-2 opacity-100 w-50 mb-3" />
            <p className="text-secondary">
              Specializing in high-voltage electrical services, Dilip
              Electricals is dedicated to providing top-tier solutions for
              industrial and commercial projects. Our expertise in cable
              jointing, transformer installations, and both overhead and
              underground electrical works ensures that your infrastructure is
              built with precision and safety at the forefront. Our A-Class
              Government License is a testament to our commitment to quality in
              every project.
            </p>

            <div className="row mt-4">
              <div className="col-md-6 d-flex">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    ✔
                  </div>
                </div>
                <div>
                  <h6 className="mb-1">Quality Assurance</h6>
                  <small className="text-muted">
                    Our certified team adheres to stringent quality standards
                    ensuring reliable and efficient electrical installations.
                  </small>
                </div>
              </div>

              <div className="col-md-6 d-flex mt-3 mt-md-0">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    ⏰
                  </div>
                </div>
                <div>
                  <h6 className="mb-1">Timely Delivery</h6>
                  <small className="text-muted">
                    We value your time and ensure that every project is
                    completed promptly without compromising quality.
                  </small>
                </div>
              </div>
            </div>

            <button className="btn btn-primary mt-4">Contact Us Today</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
