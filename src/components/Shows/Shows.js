import React, { Component } from "react";
import Show from "./Show";
import Title from "../Common/Title";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Moment from "react-moment";

class Shows extends Component {
  render() {
    const { shows } = this.props;
    console.log(this.props);
    return (
      <div className="shows">
        <div>
          <Title title="Shows" />
          {shows &&
            shows.map(shows => {
              return (
                <div>
                  <Show
                    month={<Moment format="MMM">{shows.month}</Moment>}
                    date={<Moment format="DD">{shows.month}</Moment>}
                    location={shows.location}
                    vanue={shows.vanue}
                    event={shows.event}
                    key={shows.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    shows: state.firestore.ordered.shows
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "shows" }])
)(Shows);
