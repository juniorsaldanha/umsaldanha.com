import React from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item terminal-text">
              <span className="terminal-prompt">$</span> {Resume.basics.name}
            </a>
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="Home" href="#home" />
              <MenuItem text="About" href="#about" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Experience" href="#experience" />
              <MenuItem text="Contact" href="#contact" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
