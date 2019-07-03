import React, { Component } from "react";

class BandSliderText extends Component {
  render() {
    return (
      <div className="BandSliderText">
        <div className="instrument">{this.props.instrument}</div>
        <div className="name">{this.props.name}</div>

        <div className="bio">{this.props.bio}</div>
      </div>
    );
  }
}
export default BandSliderText;
