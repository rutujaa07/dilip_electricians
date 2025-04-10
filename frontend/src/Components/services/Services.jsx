import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import image from "../../assets/slider.jpg"
const ServicesSection = () => {
  return (
    <div className="services-section ">
      <Container fluid className="p-0 bg-dark" style={{backgroundImage:image}}>
        <div className="expertise-header">
          <p className="small-heading">OUR EXPERTISE</p>
          <h2>Your High-Voltage Electrical Solutions Partner</h2>
          <p className="description">
            Dilip Electricals is dedicated to delivering exceptional electrical solutions tailored for industrial and commercial needs. With our A-Class Government License and extensive experience, we ensure every project is handled with the utmost care and professionalism.
          </p>
        </div>
<Container>
        <Row className="m-0 ">
          <Col md={4} className="p-0">
            <div className="service-card white-card">
              <div className="icon-container blue">
                <img src="" alt="Installation Icon" className="service-icon" />
              </div>
              <h3>Comprehensive Electrical Installations</h3>
              <p>
                We specialize in high-voltage installations, ensuring your systems are safe, efficient, and compliant with all regulations.
              </p>
            </div>
          </Col>
          
          <Col md={4} className="p-0">
            <div className="service-card blue-card">
              <div className="icon-container white">
                <img src="" alt="Safety Icon" className="service-icon" />
              </div>
              <h3>Safety Compliance</h3>
              <p>
                Our team prioritizes safety, adhering to stringent industry standards to protect your property and investments.
              </p>
            </div>
          </Col>
          
          <Col md={4} className="p-0">
            <div className="service-card white-card">
              <div className="icon-container blue">
                <img src="" alt="Industrial Icon" className="service-icon" />
              </div>
              <h3>Industrial Expertise</h3>
              <p>
                Our experience in industrial electrical systems guarantees robust and reliable solutions tailored to your operational needs.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="m-0 mt-4" >
          <Col md={4} className="p-0">
            <div className="service-card white-card">
              <div className="icon-container blue">
                <img src="" alt="Tailored Solutions Icon" className="service-icon" />
              </div>
              <h3>Tailored Solutions</h3>
              <p>
                We assess your unique requirements to design and implement customized electrical solutions that maximize efficiency.
              </p>
            </div>
          </Col>
          
          <Col md={4} className="p-0">
            <div className="service-card blue-card">
              <div className="icon-container white">
                <img src="" alt="Client-Centric Icon" className="service-icon" />
              </div>
              <h3>Client-Centric Approach</h3>
              <p>
                We are committed to understanding your needs and building long-term partnerships based on trust and satisfaction.
              </p>
            </div>
          </Col>
          
          <Col md={4} className="p-0">
            <div className="service-card white-card">
              <div className="icon-container blue">
                <img src="" alt="Sustainable Icon" className="service-icon" />
              </div>
              <h3>Sustainable Practices</h3>
              <p>
                We integrate eco-friendly methods in our work, minimizing our environmental impact and promoting sustainability.
              </p>
            </div>
          </Col>
        </Row>
        
        </Container>
      </Container>
    </div>
  );
};

export default ServicesSection;

