import React, { Component } from "react";

class ShowDate extends Component {
  render() {
    return (
      <div class="leftSide">
        <div class="month">{this.props.month}</div>
        <div class="day">{this.props.date}</div>
      </div>
    );
  }
}
export default ShowDate;
