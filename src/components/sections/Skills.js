import React from "react";
import Resume from "../../resume.json";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title terminal-text text-glow has-text-centered">Skills & Technologies</h1>
        <div className="columns is-multiline is-centered">
          {Resume.skills.map((skill, index) => (
            <div key={index} className="column is-6-tablet is-4-desktop is-3-widescreen">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className={skill.x_icon}></i>
                </div>
                <h3 className="skill-title">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
