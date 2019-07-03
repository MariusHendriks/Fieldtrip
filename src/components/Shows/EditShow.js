import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { editShow } from "../../store/actions/showActions";

class EditShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.show.location,
      date: this.props.show.date,
      vanue: this.props.show.vanue,
      event: this.props.show.event,
      id: this.props.show.id
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editShow(this.state);
  };
  render() {
    const { show, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    console.log(show);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input
              value={this.state.date}
              type="date"
              id="date"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={this.state.location}
              id="location"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="vanue">Vanue</label>
            <input
              value={this.state.vanue}
              type="text"
              id="vanue"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="event">Event</label>
            <input
              value={this.state.event}
              type="text"
              id="event"
              onChange={this.handleChange}
            />
          </div>
          <button>Edit</button>
        </form>
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
    editShow: show => dispatch(editShow(show))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShow);
