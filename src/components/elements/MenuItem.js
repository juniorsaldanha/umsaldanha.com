import React from "react";

function MenuItem(props) {
  return (
    <a href={props.href} className="navbar-item is-unselectable terminal-text">
      <span className="terminal-prompt">></span> {props.text}
    </a>
  );
}

export default MenuItem;
