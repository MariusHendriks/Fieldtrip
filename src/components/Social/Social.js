import React, { Component } from "react";
import Title from "../Common/Title";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <div>
          <Title title="Social" />
          <div className="italic">Dont Miss out!</div>
          <div className="followUs">Follow us on social media!</div>
          <div className="socialImages">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/bandfieldtrip/?ref=br_rs"
            >
              <img className="socialImage" src={facebook} alt="facebook" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bandfieldtrip/"
            >
              <img className="socialImage" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Social;
