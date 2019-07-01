import React, { Component } from "react";

class BandSliderText extends Component {
  render() {
    return (
      <div class="BandSliderText">
        <div class="instrument">{this.props.instrument}</div>
        <div class="name">{this.props.name}</div>

        <div class="bio">{this.props.bio}</div>
      </div>
    );
  }
}
export default BandSliderText;
