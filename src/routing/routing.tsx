import React from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "./routes";

export const Routing = () => (
  <Switch>
    {routes.map(({ path, ReactComponent }) => (
      <Route key={path} path={path}>
        <ReactComponent />
      </Route>
    ))}
  </Switch>
);
