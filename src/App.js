import React from "react";
import "./App.scss";

//components
import Header from "./components/Header";
import Shows from "./components/Shows/Shows";
import Band from "./components/Band/Band";

function App() {
  return (
    <div className="App">
      <Header />
      <Shows />
      <Band />
    </div>
  );
}

export default App;
