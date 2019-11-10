import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

const AlbumDetail = lazy(() => import("../pages/album-details/Index"));


const Routes = () => (
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/albums/:name" component={Home} />
        <Route exact path="/album/:id" component={AlbumDetail} />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default Routes;
