import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Trade from "./pages/trade/Trade.js";
import History from "./pages/history/History.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Trade />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
