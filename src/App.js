import React from "react";
import "./App.scss";

//components
import Header from "./components/Header";
import Shows from "./components/Shows/Shows";
import Band from "./components/Band/Band";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Shows />
      <Band />
      <Social />
    </div>
  );
}

export default App;
