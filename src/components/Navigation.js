import React, { Component } from "react";
//components
import Header from "./Header";
import Shows from "./Shows/Shows";
import Band from "./Band/Band";
import Social from "./Social/Social";
import Bookings from "./Bookings/Bookings";
import SocialSide from "./Social/SocialSide.js";
import ShowsSide from "./Shows/ShowsSide";

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
    const isTablet = width <= 1000;
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
    } else if (isTablet) {
      return (
        <div className="App">
          <Header />
          <div class="tabletHeaderBox">
            <ShowsSide />
            <SocialSide />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <Shows />
          <Band />
          <Social />
          <Bookings />
        </div>
      );
    }
  }
}
export default Navigation;
