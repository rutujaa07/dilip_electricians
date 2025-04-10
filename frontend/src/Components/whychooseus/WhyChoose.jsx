import React from "react";
import "./whychoose.css";
import electricianImage from "../../assets/ee.jpg";
import drillIcon from "../../assets/ee.jpg";
import screwdriverIcon from "../../assets/ee.jpg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <div className="red-background"></div>
          <div className="image-wrapper">
            <img
              src={electricianImage}
              alt="Electrician working"
              className="electrician-image"
            />
          </div>
          <img src={drillIcon} alt="Drill tool" className="drill-icon" />
        </div>

        <div className="about-contentt">
          <div className="who-we-are">
            <div className="icon-header">
              <div className="worker-icon-container">
                <img
                  src={drillIcon}
                  alt="Worker icon"
                  className="worker-icon"
                />
              </div>
              <h3 className="about-subtitle">WHO WE ARE</h3>
            </div>

            <h2 className="about-title">
              Providing High Quality
              <br />
              Electrical Solution
            </h2>

            <p className="highlight-text">
              Our operations span the globe and encompass diverse sectors within
              the electrical industry.
            </p>

            <p className="about-description">
              With over four decades of specialized expertise in Electrical
              services, catering to large-scale enterprises worldwide, we
              provide tailored end-to-end solutions crafted for you.
            </p>

            <div className="features-container">
              <div className="feature">
                <div className="feature-icon">
                  <img src={screwdriverIcon} alt="Screwdriver" />
                </div>
                <div className="feature-info">
                  <h4>Reasonable Cost</h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipiscing elit ridiculus
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <img src={drillIcon} alt="Electric drill" />
                </div>
                <div className="feature-info">
                  <h4>Expert Electrician</h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipiscing elit ridiculus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
