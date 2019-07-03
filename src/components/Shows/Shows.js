import React, { Component } from "react";
import Show from "./Show";
import Title from "../Common/Title";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Moment from "react-moment";

class Shows extends Component {
  isEmpty = map => {
    for (var key in map) {
      if (map.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };
  render() {
    const { shows } = this.props;
    console.log(shows);
    let content = "";
    if (this.isEmpty(shows)) {
      content = <div>There are currently no bookings</div>;
    } else {
      content = (
        <div>
          {shows &&
            shows.map(shows => {
              return (
                <div key={shows.id}>
                  <Show
                    month={<Moment format="MMM">{shows.date}</Moment>}
                    date={<Moment format="DD">{shows.date}</Moment>}
                    location={shows.location}
                    vanue={shows.vanue}
                    event={shows.event}
                  />
                </div>
              );
            })}
        </div>
      );
    }
    return (
      <div className="shows">
        <div>
          <Title title="Shows" />
          {content}
        </div>
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
  firestoreConnect([
    { collection: "shows", limit: 3, orderBy: ["date", "asc"] }
  ])
)(Shows);
