import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Navigation from "./components/Navigation";
import Signin from "./components/Auth/Signin";
import CreateShow from "./components/Shows/CreateShow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/createShow" component={CreateShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
