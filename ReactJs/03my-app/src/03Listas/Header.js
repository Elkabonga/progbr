import React from "react";
import Menu from '../components/Menu'
import "./App.css";

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>{props.name}</h1>
        <Menu links={props.links}></Menu>
      </header>
    </div>
  );
}

export default Header;
