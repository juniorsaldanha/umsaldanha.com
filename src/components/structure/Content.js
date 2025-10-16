import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Certifications from "../sections/Certifications";
import Articles from "../sections/Articles";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Certifications />
      <Articles />
      <ContactSection />
    </main>
  );
}

function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container has-text-centered">
        <h1 className="title terminal-text text-glow">Get In Touch</h1>
        <p className="subtitle is-5 summary-text">
          Ready to collaborate on your next project? Let's build something amazing together.
        </p>
        
        <div className="contact-info">
          <div className="columns is-centered">
            <div className="column is-6-tablet is-4-desktop">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>Let's start a conversation</p>
                <a href="mailto:hello@umsaldanha.com" className="button">
                  <i className="fas fa-paper-plane"></i> Send Email
                </a>
              </div>
            </div>
            
            <div className="column is-6-tablet is-4-desktop">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Inova Labs</h3>
                <p>Check out my company</p>
                <a href="https://www.inovalabs.co" target="_blank" rel="noopener noreferrer" className="button">
                  <i className="fas fa-external-link-alt"></i> Visit Inova Labs
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-links-footer">
          <h3 className="title is-6 terminal-text">Connect with me</h3>
          <div className="social-links">
            <a href="https://github.com/juniorsaldanha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/umsaldanha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://dev.to/umsaldanha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-dev"></i>
            </a>
            <a href="https://www.twitter.com/umsaldanha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
