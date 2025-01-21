import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css"; // Import the updated CSS
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/Contactme";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Intro />
        <Skills/>
       <ContactMe/>
       
      
        
      </div>
    </div>
  );
};

export default App;
