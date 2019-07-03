import React, { Component } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import EditShow from "./EditShow";

class EditShows extends Component {
  render() {
    const { shows } = this.props;
    return (
      <div>
        {shows &&
          shows.map(shows => {
            return <EditShow key={shows.id} show={shows} />;
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
  firestoreConnect([{ collection: "shows", orderBy: ["date", "asc"] }])
)(EditShows);
