import React, { Component } from "react";
import Mark from "../../assets/Mark.jpg";
import Renee from "../../assets/Renee.jpg";
import Bram from "../../assets/Bram.jpg";
import Vincent from "../../assets/Vincent.jpg";
import Floor from "../../assets/Floor.jpg";
import Slider from "react-slick";
import BandCard from "./BandCard";

class BandSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#1d1916",
            color: "#fff"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      )
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <BandCard
            instrument="Vocal"
            name="Renee Vloet"
            bio="Wow Renee heeft een stem en kan die gebruiken in nummers mega vet"
            img={Renee}
          />
          <BandCard
            instrument="Gitaar"
            name="Mark Hendriks"
            bio="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen"
            img={Mark}
          />
          <BandCard
            instrument="Gitaar"
            name="Bram Kanters"
            bio="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen."
            img={Bram}
          />
          <BandCard
            instrument="Drum"
            name="Vincent Vughts"
            bio="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen."
            img={Vincent}
          />
          <BandCard
            instrument="Bass"
            name="Floor Van Uittert"
            bio="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen."
            img={Floor}
          />
        </Slider>
      </div>
    );
  }
}
export default BandSlider;
