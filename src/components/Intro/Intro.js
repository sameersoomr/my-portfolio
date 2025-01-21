import React from 'react';
import './Intro.css';
import SAM from '../../themes/assets/SAM.jpg';
import reactl from '../../themes/assets/reactl.png';
import cssl from '../../themes/assets/cssl.png';
import javas from '../../themes/assets/javas.png';

const Intro = () => {
  return (
    <section className="intro-container">
      {/* Title Section */}
      <div className="intro-title-row">
        <h2 className="intro-title"><span>SAMIR HUSAYN</span></h2>
      </div>

      {/* Row: Profile Image and Description */}
      <div className="top-row">
        <p className="intro-description">
          I’m a <span className="highlight">React Native</span> and <span className="highlight">JavaScript</span> frontend developer with a passion for building 
          <span className="highlight"> responsive</span>, high-performance web and mobile applications. With expertise in both 
          <span className="highlight"> React</span> and <span className="highlight">React Native</span>, I create intuitive user interfaces and deliver seamless cross-platform experiences. 
          I focus on <span className="highlight">clean code</span>, scalability, and performance optimization to ensure the best user experience on both web and mobile platforms.
        </p>
        <img className="SAM" src={SAM} alt="SAM" />
      </div>

      {/* Tech Logos */}
      <div className="tech-icons">
        <img src={reactl} alt="React Logo" />
        <img src={cssl} alt="CSS Logo" />
        <img src={javas} alt="JavaScript Logo" />
      </div>
    </section>
  );
};

export default Intro;
