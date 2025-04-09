import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            <span className="hash">DILIP</span> ELECTRICALS
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {[
                { path: "/", label: "HOME" },
                { path: "/about", label: "ABOUT" },
                { path: "/services", label: "SERVICES" },
                { path: "/projects", label: "PROJECTS" },
                { path: "/blog", label: "BLOG" },
                { path: "/contact", label: "CONTACT" },
              ].map((link) => (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary">CALL NOW</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
