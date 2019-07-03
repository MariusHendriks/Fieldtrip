import React, { Component } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class EditShows extends Component {
  state = {
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
  render() {
    const { shows } = this.props;
    return (
      <div>
        {shows &&
          shows.map(shows => {
            return (
              <form key={shows.id}>
                <div className="input-field">
                  <label htmlFor="date">Date</label>
                  <input
                    value={shows.date}
                    type="date"
                    id="date"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="location">Location</label>
                  <input
                    value={shows.location}
                    type="text"
                    id="location"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="vanue">Vanue</label>
                  <input
                    value={shows.vanue}
                    type="text"
                    id="vanue"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="event">Event</label>
                  <input
                    value={shows.event}
                    type="text"
                    id="event"
                    onChange={this.handleChange}
                  />
                </div>
                <button>Edit</button>
              </form>
            );
          })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    shows: state.firestore.ordered.shows
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "shows", orderBy: ["date", "desc"] }])
)(EditShows);
