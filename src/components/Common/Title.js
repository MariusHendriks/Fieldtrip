import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div class="title">
        <h1>{this.props.title}</h1>
        <div class="line" />
      </div>
    );
  }
}
export default Title;
