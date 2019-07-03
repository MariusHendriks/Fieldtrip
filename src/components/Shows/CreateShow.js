import React, { Component } from "react";
import { createShow } from "../../store/actions/showActions";
import { connect } from "react-redux";

class CreateShow extends Component {
  state = {
    month: "",
    date: "",
    location: "",
    vanue: "",
    event: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createShow(this.state);
  };
  render() {
    return (
      <div className="SigninForm">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign in</h5>
          <div className="input-field">
            <label htmlFor="month">Month</label>
            <input type="month" id="month" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="location">Location</label>
            <input type="location" id="location" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="vanue">Vanue</label>
            <input type="vanue" id="vanue" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="event">Event</label>
            <input type="event" id="event" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createShow: show => dispatch(createShow(show))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateShow);
