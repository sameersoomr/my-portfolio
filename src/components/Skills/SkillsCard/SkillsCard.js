// Skills.js
import React from "react";
import "./SkillsCard.css";

const SkillsCard = () => {
  const skills = [
    { name: "React Native", level: 90, color: "#ff5733" }, // New color: Bright Orange
    { name: "ReactJS", level: 80, color: "#33c4ff" },      // New color: Sky Blue
    { name: "JavaScript", level: 70, color: "#ffc107" },   // New color: Amber
    { name: "CSS in ReactJS", level: 90, color: "#28a745" }, // New color: Green
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
