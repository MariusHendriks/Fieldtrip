import React, { Component } from "react";
import { createShow } from "../../store/actions/showActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Title from "../Common/Title";

class CreateShow extends Component {
  state = {
    date: "",
    location: "",
    vanue: "",
    event: "",
    redirectRouter: false
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createShow(this.state);
    this.setState({
      redirectRouter: true
    });
  };
  render() {
    let goBack = "";
    if (this.state.redirectRouter === true) {
      goBack = <Redirect to="/" />;
    }
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div class="SigninFormContainer">
        <Link to="/">
          <button className="btn-full">Go back</button>
        </Link>

        <div className="SigninForm">
          <form onSubmit={this.handleSubmit}>
            <Title title="Add Show" />
            <div className="input-field">
              <label htmlFor="date">Date</label>
              <input
                required
                type="date"
                id="date"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="location">Location</label>
              <input
                required
                type="location"
                id="location"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="vanue">Vanue</label>
              <input
                required
                type="vanue"
                id="vanue"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="event">Event</label>
              <input
                required
                type="event"
                id="event"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn-2">ADD SHOW</button>
            </div>
          </form>
        </div>
        {goBack}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createShow: show => dispatch(createShow(show))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateShow);
