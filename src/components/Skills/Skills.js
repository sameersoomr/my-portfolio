import React from 'react';
import "./Skills.css";
import SkillsCard from './SkillsCard/SkillsCard';
import coder from "../../themes/assets/coder.png";

const Skills = () => {
  return (
    <div className='skills-tab'>
      <img src={coder} alt="coder" className="coder-image" />
      <SkillsCard />
    </div>
  );
}

export default Skills;