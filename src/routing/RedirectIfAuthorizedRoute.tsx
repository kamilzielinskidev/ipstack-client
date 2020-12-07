import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../state";

type Props = {
  component: React.ComponentType;
  path: string;
  to: string;
};

export const RedirectIfAuthorizedRoute: FC<Props> = ({
  component: Component,
  path,
  to,
}) => {
  const {
    state: { logged },
  } = useAuthState();

  return (
    <Route path={path}>{logged ? <Redirect to={to} /> : <Component />}</Route>
  );
};
