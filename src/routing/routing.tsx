import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GuardedRoute } from "./GuardedRoute";
import { routes } from "./routes";

export const Routing = () => (
  <Router>
    <Switch>
      {routes.map(({ path, guarded, ReactComponent }) =>
        guarded ? (
          <GuardedRoute key={path} path={path} component={ReactComponent} />
        ) : (
          <Route key={path} path={path} component={ReactComponent} />
        )
      )}
    </Switch>
  </Router>
);
