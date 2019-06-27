import React, { Component } from "react";
import groupPhoto from "../../assets/group-logo.png";

import Title from "../Common/Title";
import Slider from "./BandSlider";

class Band extends Component {
  render() {
    return (
      <div class="band">
        <Title title="The Band" />
        <img class="groupPhoto" src={groupPhoto} alt="Grouphoto of fieldtrip" />
        <Slider />
      </div>
    );
  }
}
export default Band;
