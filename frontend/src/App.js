import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import DilipElectricalServices from "./pages/sevicepage/servicepage";
import NabarComponent from "./Components/navbar/navbar";
import Contact from "./Components/contact/Contact";
import ServicesPage from "./pages/sevicepage/servicepage";
import AboutSection from "./Components/Home/aboutus";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
   
    <Router> <ScrollToTop/>
    <NabarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Add more routes here when needed */}
        <Route path="/about" element={<AboutSection />} />{" "}
      
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
