import React, { useState } from "react";
import Resume from "../../resume.json";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a href="#home" className="nav-brand-link">
            <span className="nav-prompt">$</span>
            <span className="nav-name">{Resume.basics.name}</span>
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-prompt">&gt;</span>
              <span className="nav-text">{item.text}</span>
            </a>
          ))}
        </div>
        
        <button 
          className={`nav-burger ${isMenuOpen ? 'nav-burger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
