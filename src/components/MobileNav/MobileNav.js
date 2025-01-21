import React, { useState } from "react";
import "./MobileNav.css";
import logo from "../../themes/assets/logo.png";
import Insta from "../../themes/assets/instagram.png";
import Github from "../../themes/assets/github.png";
import MobConForm from "../MobConForm/MobConForm"; // Import the ContactForm component

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleHireMeClick = () => {
    setShowContactForm(true); // Show the ContactForm when Hire Me is clicked
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false); // Hide the ContactForm
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {/* Close Menu Button */}
        <button className="close-btn" onClick={toggleMenu}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="logo" />

          <ul>
            <li>
              <a
                className="menu-item"
                href="https://www.instagram.com/develloop?igsh=OXluOWx2YTdkM2Ex"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                <img src={Insta} alt="Insta" className="menu-icon" />
                <span className="menu-text">Instagram</span> {/* Text next to the logo */}
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="https://github.com/sameersoomr"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                <img src={Github} alt="Github" className="menu-icon" />
                <span className="menu-text">Github</span> {/* Text next to the logo */}
              </a>
            </li>
          </ul>

          {/* Conditional rendering for Hire Me / ContactForm */}
          {showContactForm ? (
            <div className="contact-form-container">
              <MobConForm />
              <button
                className="close-contact-form-btn"
                onClick={handleCloseContactForm}
              >
                <span></span>
                <span></span>
              </button>
            </div>
          ) : (
            <button className="contact-btn" onClick={handleHireMeClick}>
              Hire Me
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
