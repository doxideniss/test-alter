import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Login } from "./pages";
import { localStorageService } from "./utils";
import { setAuth } from "./redux/reducers/auth";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorageService.isAuth()) {
      dispatch(setAuth(true));
    }
  }, []);

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
