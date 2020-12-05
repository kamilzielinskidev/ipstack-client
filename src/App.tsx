import React from "react";

import { InitialAuth } from "./containers";
import { Routing } from "./routing";

export const App = () => {
  return (
    <InitialAuth>
      <Routing />
    </InitialAuth>
  );
};
