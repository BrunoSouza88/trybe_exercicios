import React from "react";
import TrybeLogo from "../img/logo.svg"
import ToggleButtonImage from "../img/list.svg"

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
          <img src={ ToggleButtonImage } alt="Toggle Button Sidebar" />
        </button>
        <img src={ TrybeLogo } alt="Logo da Trybe" />
        <h4>Cursos</h4>
      </header>
    );
  }
}

export default Header;
