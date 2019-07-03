import React, { Component } from "react";
import BandCard from "./BandCard";
import Mark from "../../assets/Mark.jpg";
import Renee from "../../assets/Renee.jpg";
import Bram from "../../assets/Bram.jpg";
import Vincent from "../../assets/Vincent.jpg";
import Floor from "../../assets/Floor.jpg";
class BandCards extends Component {
  render() {
    return (
      <div>
        <div className="bandCard">
          <BandCard
            instrument="Vocal"
            name="Renee Vloet"
            bio="Wow Renee heeft een stem en kan die gebruiken in nummers mega vet"
            img={Renee}
          />
          <BandCard
            instrument="Bass"
            name="Floor Van Uittert"
            bio="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen."
            img={Floor}
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
        </div>
      </div>
    );
  }
}
export default BandCards;
