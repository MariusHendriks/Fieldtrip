import React, { Component } from "react";
import groupPhoto from "../../assets/group-logo.png";

import Title from "../Common/Title";
import Slider from "./BandSlider";
import Cards from "./BandCards";

class Band extends Component {
  checkTablet() {
    if (this.props.nav === "tablet") {
      return <Cards />;
    } else {
      return <Slider />;
    }
  }
  render() {
    return (
      <div class="band">
        <Title title="The Band" />
        <div class="groupPhotoBox">
          <img
            class="groupPhoto"
            src={groupPhoto}
            alt="Grouphoto of fieldtrip"
          />
        </div>
        {this.checkTablet()}
      </div>
    );
  }
}
export default Band;
