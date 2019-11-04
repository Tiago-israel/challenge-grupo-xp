import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default Routes;
