import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../themes/assets/logo.png';
import MobileNav from '../MobileNav/MobileNav';
import Github from "../../themes/assets/github.png";
import Insta from "../../themes/assets/instagram.png";
import ContactForm from "../ContactForm/ContactForm";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu); // Toggle menu open/close
  };

  const handleHireMeClick = () => {
    setShowContactForm((prevState) => !prevState); // Toggle ContactForm visibility
  };

  return (
    <>
      {/* Pass isOpen and toggleMenu as props to MobileNav */}
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* Logo */}
          <img className="logo" src={logo} alt="logo" />

          {/* Desktop menu with clickable icons */}
          <ul className="nav-icons">
            <li>
              <a href="https://www.instagram.com/develloop?igsh=OXluOWx2YTdkM2Ex" className="menu-item">
                <img src={Insta} alt="Insta" className="menu-icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/sameersoomr" className="menu-item">
                <img src={Github} alt="Github" className="menu-icon" />
              </a>
            </li>

            {/* Hire Me Button */}
            <button className="contact-btn" onClick={handleHireMeClick}>
              Hire Me
            </button>
          </ul>

          {/* Menu button for mobile */}
          <button className={`menu-btn ${openMenu ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Conditionally render the ContactForm if showContactForm is true */}
      {showContactForm && <ContactForm />}
    </>
  );
};

export default Navbar;
