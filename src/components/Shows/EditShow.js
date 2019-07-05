import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { editShow, deleteShow } from "../../store/actions/showActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class EditShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.show.location,
      date: this.props.show.date,
      vanue: this.props.show.vanue,
      event: this.props.show.event,
      id: this.props.show.id,
      eventToEdit: ""
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
    this.setState({
      eventToEdit: this.state.event
    });
    toast("Update complete");
  };
  handleDelete = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.props.deleteShow(this.state);
    }
  };
  componentDidMount = e => {
    this.setState({
      eventToEdit: this.state.event
    });
  };
  render() {
    const { show, auth } = this.props;

    if (!auth.uid) return <Redirect to="/" />;
    console.log(show);
    return (
      <div class="editShowContainer">
        <div class="SigninForm">
          <h2 class="showHeader">Edit show for {this.state.eventToEdit}</h2>
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
            <button class="btn">Edit</button>
            <div class="btn" onClick={this.handleDelete}>
              Delete
            </div>
          </form>
        </div>
        <ToastContainer />
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
    editShow: show => dispatch(editShow(show)),
    deleteShow: show => dispatch(deleteShow(show))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShow);
