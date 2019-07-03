import React, { Component } from "react";
//components
import Header from "./Header";
import Shows from "./Shows/Shows";
import Band from "./Band/Band";
import Social from "./Social/Social";
import Bookings from "./Bookings/Bookings";
import Box from "./Common/Box";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 420;
    if (isMobile) {
      return (
        <div className="App">
          <Header />
          <Shows />
          <Band />
          <Social />
          <Bookings />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div className="showsAndSocialBox">
            <Shows />
            <Social />
          </div>
          <Band nav="tablet" />
          <Bookings />
          <Box />
        </div>
      );
    }
  }
}
export default Navigation;
