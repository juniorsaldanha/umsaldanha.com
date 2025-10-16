import React, { useState, useEffect } from "react";
import Header from "./Header";
import Resume from "../../resume.json";
import { getExperienceSummary } from "../../utils/experienceCalculator";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = `$ whoami
Junior Saldanha

$ cat about.txt
Software Engineer & Tech Entrepreneur
Founder of Inova Labs
${Resume.basics.location.region}, ${Resume.basics.location.country}

$ echo "Building the future, one line of code at a time..."

$ ls -la skills/
total 8
drwxr-xr-x 2 junior junior 4096 Jan 1 00:00 .
drwxr-xr-x 5 junior junior 4096 Jan 1 00:00 ..
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 cloud-architecture
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 devops-cicd
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 python
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 javascript-react
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 iot-robotics
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 monitoring-sre
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 containerization
-rw-r--r-- 1 junior junior 1024 Jan 1 00:00 system-design

$ ./start.sh --mode=innovative --company=inova-labs`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  return (
    <section className="hero is-fullheight" id="home">
      <Header />
      <div className="hero-body">
        <div className="container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">junior@umsaldanha:~$</div>
            </div>
            <div className="terminal-body">
              <pre className="terminal-text">
                {displayText}
                <span className="terminal-cursor"></span>
              </pre>
            </div>
          </div>
          
          <div className="hero-content">
            <h1 className="glitch" data-text={Resume.basics.name}>
              {Resume.basics.name}
            </h1>
            <p className="subtitle terminal-text">
              {Resume.basics.label}
            </p>
            <p className="summary-text">
              {Resume.basics.summary === "DYNAMIC_EXPERIENCE_SUMMARY" 
                ? getExperienceSummary() 
                : Resume.basics.summary}
            </p>
            
            <div className="hero-buttons">
              <a href="#about" className="button">
                <i className="fas fa-user"></i> About Me
              </a>
              <a href="#contact" className="button">
                <i className="fas fa-envelope"></i> Contact
              </a>
              <a href="https://www.inovalabs.co" target="_blank" rel="noopener noreferrer" className="button">
                <i className="fas fa-rocket"></i> Inova Labs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="social-links">
          {Resume.basics.profiles.map((value, index) => {
            return (
              <a
                key={index}
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={value.network}
              >
                <i className={value.x_icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
