import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import AppDivider from "./AppDivider";
import CreateShow from "./Shows/CreateShow";
import Signin from "./Auth/Signin";
import EditShows from "./Shows/EditShows";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppDivider} />
          <Route exact path="/createShow" component={CreateShow} />
          <Route exact path="/editShows" component={EditShows} />
          <Route exact path="/login" component={Signin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Navigation;
