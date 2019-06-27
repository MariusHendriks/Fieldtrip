import React, { Component } from "react";
import BandSliderText from "./BandSliderText";

class BandCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="cardImageBox">
          <img class="cardImage" src={this.props.img} alt={this.props.name} />
        </div>

        <BandSliderText
          instrument={this.props.instrument}
          name={this.props.name}
          bio={this.props.bio}
        />
      </div>
    );
  }
}
export default BandCard;
