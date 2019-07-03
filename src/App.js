import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Navigation from "./components/Navigation";
import Signin from "./components/Auth/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/login" component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
