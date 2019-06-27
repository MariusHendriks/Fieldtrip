import React, { Component } from "react";
import ShowDate from "./ShowDate.js";
import ShowDetails from "./ShowDetails.js";

class Show extends Component {
  render() {
    return (
      <div class="showSide">
        <ShowDate month={this.props.month} date={this.props.date} />
        <ShowDetails
          event={this.props.event}
          vanue={this.props.vanue}
          location={this.props.location}
        />
      </div>
    );
  }
}
export default Show;
