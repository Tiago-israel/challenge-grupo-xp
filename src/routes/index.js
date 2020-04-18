import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

const AlbumDetail = lazy(() => import("../pages/album-details"));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/albums/:name" component={Home} />
        <Route exact path="/album/:id" component={AlbumDetail} />
        <Route path="*" component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
