import React, { Component } from "react";
import Title from "../Common/Title";

class Bookings extends Component {
  render() {
    return (
      <div class="bookings">
        <div class="bookingLeft" />
        <div class="bookingBox">

          <Title title="Bookings" />
          <div className="bookingText">
            Do you want Fieldtrip at your party or event?
          </div>
          <div className="bookingsDetails">Email: Info@fieldtrip.com</div>
          <div className="bookingsDetails">Phone: 06 224 717 02</div>
          <div className="bookingsDetails">Or book us on Facebook!</div>
        </div>
        <div class="bookingRight" />
      </div>
    );
  }
}
export default Bookings;
