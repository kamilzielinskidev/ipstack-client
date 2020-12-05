import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../store';

type Props = {
  component: React.ComponentType;
  path: string;
};

export const GuardedRoute = ({ component: Component, path }: Props) => {
  const {
    state: { logged },
  } = useAuthState();

  return (
    <Route path={path}>
      {logged ? <Component /> : <Redirect to={"/"}></Redirect>}
    </Route>
  );
};
