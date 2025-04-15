import React from 'react';
import { NavLink } from "react-router-dom";

export default function Hedar() {
  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Moveis", path: "/Moveis" },
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", path: "/" },
    { icon: "fab fa-instagram", path: "/" },
    { icon: "fa-brands fa-facebook", path: "/" }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-5">
        <div className="container">
          <h2 className="me-2">
            C l N E <span className="fs-2 text-danger me-5">R A M A</span>
          </h2>
          <button
            className="navbar-toggler ggg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ccc" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Main Links */}
            <ul className="navbar-nav me-auto">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link fs-4" to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <ul className="navbar-nav d-flex flex-row">
              {socialLinks.map((social, index) => (
                <li className="nav-item me-3 me-lg-0" key={index}>
                  <NavLink className="nav-link" to={social.path}>
                    <i className={social.icon}></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
