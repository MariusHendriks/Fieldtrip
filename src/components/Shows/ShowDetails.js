import React, { Component } from "react";

class ShowDetails extends Component {
  render() {
    return (
      <div class="rightSide">
        <div class="event">{this.props.event}</div>
        <div class="vanue">{this.props.vanue}</div>
        <div class="location">{this.props.location}</div>
      </div>
    );
  }
}
export default ShowDetails;
