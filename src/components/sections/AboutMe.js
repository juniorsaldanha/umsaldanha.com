import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";
import { getExperienceSummary } from "../../utils/experienceCalculator";

function AboutMe() {
  return (
    <section className="section" id="about">
      <div className="container has-text-centered">
        <h2 className="title terminal-text text-glow">About Me</h2>
        
        <figure className="image container is-180x180">
          <img
            width="100%"
            height="100%"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded border-glow"
            onError={(e)=>{e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}
          />
        </figure>
        
        <p className="subtitle is-4 terminal-text has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        
        <p className="subtitle is-5 has-text-weight-light summary-text">
          {Resume.basics.summary === "DYNAMIC_EXPERIENCE_SUMMARY" 
            ? getExperienceSummary() 
            : Resume.basics.summary}
        </p>
        
        <div className="inova-labs-section">
          <h3 className="title is-5 terminal-text">🚀 Inova Labs</h3>
          <p className="summary-text">
            As the founder of <a href="https://www.inovalabs.co" target="_blank" rel="noopener noreferrer" className="terminal-text">Inova Labs</a>, 
            I lead a team dedicated to creating innovative technology solutions. We specialize in web platform development, 
            mobile app creation, server monitoring, and technology consulting for businesses of all sizes.
          </p>
          <div className="inova-links">
            <a href="https://www.inovalabs.co" target="_blank" rel="noopener noreferrer" className="button">
              <i className="fas fa-globe"></i> inovalabs.co
            </a>
            <a href="https://inovalabs.tech" target="_blank" rel="noopener noreferrer" className="button">
              <i className="fas fa-code"></i> inovalabs.tech
            </a>
          </div>
        </div>
        
        <div className="container interests">
          <h3 className="title is-5 terminal-text">Interests</h3>
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
