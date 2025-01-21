import React from 'react';
import './Contactme.css'; // Import the CSS file

const CodeSnippet = () => {
  return (
    <div className="code-snippet">
      <div className="dots">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <pre className="code-content">
        {`Thank you for exploring my portfolio!
I'm passionate about crafting seamless and visually captivating digital experiences
that not only look great but function flawlessly.
If you're looking for a dedicated developer to bring your vision to life or simply want to collaborate,
I'd love to connect.
Let's create something amazing together!`}
      </pre>
    </div>
  );
}

export default CodeSnippet;
