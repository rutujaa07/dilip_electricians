import React from "react";
import "./Home.css";
import ServicesSection from "./aboutus";
import AboutSection from "../whychooseus/WhyChoose";
import Navbar from "../navbar/navbar";
import HeroSection from "../Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import TestimonialSlider from "../testimonials/Testimonials";
// import ElectricalServicesSlider from "../section/section";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSlider />
      {/* <ElectricalServicesSlider /> */}
      <Footer />
    </>
  );
}

export default Home;
