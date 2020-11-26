import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Routing } from "./routing";

export const App = () => (
  <>
    <Router>
      <Routing></Routing>
    </Router>
  </>
);
