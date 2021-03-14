import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import Main from "./modules/main";
import Save from "./modules/save/Save";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/main" exact />
          <Route path="/main" component={Main} />
          <Route path="/save" component={Save} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
