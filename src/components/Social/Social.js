import React, { Component } from "react";
import Title from "../Common/Title";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <Title title="Social" />
        <div class="italic">Dont Miss out!</div>
        <div class="followUs">Follow us on social media!</div>
        <div class="socialImages">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/bandfieldtrip/?ref=br_rs"
          >
            <img class="socialImage" src={facebook} alt="facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/bandfieldtrip/"
          >
            <img class="socialImage" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    );
  }
}
export default Social;
