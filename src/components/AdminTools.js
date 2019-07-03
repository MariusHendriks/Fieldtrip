import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

class AdminTools extends Component {
  render() {
    return (
      <div className="AdminTools">
        <Link to="./createShow/">
          <button class="AdminButtonEdit">Add Shows</button>
        </Link>
        <Link to="/editShows">
          <button class="AdminButtonEdit">Edit Shows</button>
        </Link>
        <button onClick={this.props.signOut} class="AdminButtonLogout">
          Logout
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AdminTools);
