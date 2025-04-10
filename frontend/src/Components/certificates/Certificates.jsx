import React from 'react'
import "./certificates.css"
import pan from "../../assets/pan.jpg"
import tan from "../../assets/tsn.jpg"
import startup from "../../assets/startup.jpg"
import udyam from "../../assets/udyam.jpg"
import incorporation from "../../assets/incorporation.jpg"
import gst from "../../assets/gst.jpg"
const Certificates = () => {
  return (
  <>
      <div className="certifications-section container">
        <h2 className="section-title">Our Certifications</h2>
        <div className="certifications-gallery">
          <div className="certification-item">
            <div className="certification-image-container">
              <img src={pan} alt="MSEDCL Certification" className="certification-image" />
            </div>
            <p className="certification-name">Company PAN Card</p>
          </div>
          <div className="certification-item">
            <div className="certification-image-container">
              <img src={tan} alt="ISO Certification" className="certification-image" />
            </div>
            <p className="certification-name">Company TAN Card</p>
          </div>
          <div className="certification-item">
            <div className="certification-image-container">
              <img src={incorporation} alt="Safety Certification" className="certification-image" />
            </div>
            <p className="certification-name">  Certificate of Incorporation</p>
          </div>
          {/* <div className="certification-item">
            <div className="certification-image-container">
              <img src={startup} alt="Quality Certification" className="certification-image" />
            </div>
            <p className="certification-name">StartUp India Certificate</p>
          </div> */}
          <div className="certification-item">
            <div className="certification-image-container">
              <img src={udyam} alt="Quality Certification" className="certification-image" />
            </div>
            <p className="certification-name">Udyam Registration Certificate</p>
          </div>
          <div className="certification-item">
            <div className="certification-image-container">
              <img src={gst} alt="Quality Certification" className="certification-image" />
            </div>
            <p className="certification-name">GST Registration Certificate</p>
          </div>
        </div>
      </div>

  </>
  )
}

export default Certificates