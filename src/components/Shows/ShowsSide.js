import React, { Component } from "react";
import Show from "./ShowSide";
import Title from "../Common/Title";
export default class ShowsSide extends Component {
  render() {
    return (
      <div>
        <Title title="Shows" />
        <Show
          month="jan"
          date="25"
          event="Kermis mariaheide"
          vanue="Brouwer"
          location="mariaheide"
        />
        <Show
          month="feb"
          date="1"
          event="Pop en Colour"
          vanue="Streekpark Kienehoef"
          location="Sint-Oederode"
        />
        <Show
          month="apr"
          date="11"
          event="Argo (Privé)"
          vanue="Ergenst op aarde"
          location="Somewhere"
        />
      </div>
    );
  }
}
