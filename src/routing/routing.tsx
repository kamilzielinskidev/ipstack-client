import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GuardedRoute } from "./GuardedRoute";
import { RedirectIfAuthorizedRoute } from "./RedirectIfAuthorizedRoute";
import { routes } from "./routes";

export const Routing: FC = () => (
  <Router>
    <Switch>
      {routes.map(
        ({ path, component: Component, guarded, redirectIfAuthorized }) =>
          guarded ? (
            <GuardedRoute key={path} path={path} component={Component} />
          ) : !!redirectIfAuthorized ? (
            <RedirectIfAuthorizedRoute
              key={path}
              path={path}
              to={redirectIfAuthorized}
              component={Component}
            />
          ) : (
            <Route key={path} path={path} component={Component} />
          )
      )}
    </Switch>
  </Router>
);
