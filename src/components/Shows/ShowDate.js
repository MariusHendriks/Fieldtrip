import React, { Component } from "react";

class ShowDate extends Component {
  render() {
    return (
      <div className="leftSide">
        <div className="month">{this.props.month}</div>
        <div className="day">{this.props.date}</div>
      </div>
    );
  }
}
export default ShowDate;
