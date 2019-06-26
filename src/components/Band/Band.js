import React, { Component } from "react";
import groupPhoto from "../../assets/group-logo.png";
import Title from "../Common/Title";

class Band extends Component {
  render() {
    return (
      <div class="band">
        <Title title="The Band" />
        <img class="groupPhoto" src={groupPhoto} alt="Grouphoto of fieldtrip" />
      </div>
    );
  }
}
export default Band;
