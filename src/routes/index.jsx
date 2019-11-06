import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => (
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default Routes;
