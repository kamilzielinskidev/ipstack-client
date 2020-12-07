import React, { FC } from "react";
import { Alert } from "./components";

import { InitialAuth } from "./containers";
import { Routing } from "./routing";

export const App: FC = () => {
  return (
    <>
      <InitialAuth>
        <Routing />
      </InitialAuth>
      <Alert />
    </>
  );
};
