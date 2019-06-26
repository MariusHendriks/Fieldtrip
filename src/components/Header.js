import React, { Component } from "react";
import logo from "../assets/logo.png";
import swipe from "../assets/swipeVertical.png";
import "../App.scss";

class Header extends Component {
  render() {
    return (
      <div class="header">
        <img class="headerIcon" src={logo} alt="Logo" />

        <img class="swipeicon" src={swipe} alt="Swipe icon" />
      </div>
    );
  }
}
export default Header;
