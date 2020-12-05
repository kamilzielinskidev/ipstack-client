import React, { useEffect } from "react";

import {
  getToken,
  getTokenPayload,
  isTokenValid,
} from "../services/authService";
import { useAuthState } from "../store";

export const InitialAuth: React.FC = ({ children }) => {
  const { dispatchLogin } = useAuthState();

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
