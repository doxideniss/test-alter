import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
