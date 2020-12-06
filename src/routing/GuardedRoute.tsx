import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../state";

type Props = {
  component: React.ComponentType;
  path: string;
};

export const GuardedRoute: FC<Props> = ({ component: Component, path }) => {
  const {
    state: { logged },
  } = useAuthState();

  return (
    <Route path={path}>
      {logged ? <Component /> : <Redirect to={"/"}></Redirect>}
    </Route>
  );
};
