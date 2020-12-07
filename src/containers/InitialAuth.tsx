import React, { FC, useEffect } from "react";

import { checkIfTokenValid, getTokenPayload } from "../helpers/token";
import { useAuthState } from "../state";
import { tap } from "../utils";

export const InitialAuth: FC = ({ children }) => {
  const { setUser } = useAuthState();

  useEffect(() => {
    checkIfTokenValid()
      .then(
        tap((token) => setUser({ ...getTokenPayload(token), jwtToken: token }))
      )
      .catch(() => {});
  }, []);

  return <>{children}</>;
};
