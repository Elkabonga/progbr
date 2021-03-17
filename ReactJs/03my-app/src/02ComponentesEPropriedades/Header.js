import React from "react";
import "./App.css";

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>{props.name}</h1>
        <ul className="menu">
          <li>{props.links[0]}</li>
          <li>{props.links[1]}</li>
          <li>{props.links[2]}</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
