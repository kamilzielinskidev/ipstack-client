import React, { FC, useEffect } from "react";

import { getToken, getTokenPayload, isTokenValid } from "../helpers/token";
import { useAuthState } from "../state";

export const InitialAuth: FC = ({ children }) => {
  const { loginUser: dispatchLogin } = useAuthState();

  useEffect(() => {
    checkIfAlreadyLogged();
  }, []);

  const checkIfAlreadyLogged = () => {
    const token = getToken();
    token &&
      isTokenValid(token) &&
      dispatchLogin({ ...getTokenPayload(token), jwtToken: token });
  };

  return <>{children}</>;
};
