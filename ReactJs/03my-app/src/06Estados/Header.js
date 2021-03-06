import React from "react";
import Menu from '../components/Menu'
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>{this.props.name}</h1>
          <Menu links={this.props.links}></Menu>
        </header>
      </div>
    );
  }
}

export default Header;
