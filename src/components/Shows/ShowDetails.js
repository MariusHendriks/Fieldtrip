import React, { Component } from "react";

class ShowDetails extends Component {
  render() {
    return (
      <div className="rightSide">
        <div className="event">{this.props.event}</div>
        <div className="vanue">{this.props.vanue}</div>
        <div className="location">{this.props.location}</div>
      </div>
    );
  }
}
export default ShowDetails;
