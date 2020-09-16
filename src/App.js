import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Login } from "./pages";
import { localStorageService } from "./utils";
import { setAuth } from "./redux/reducers/auth";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontSize: '18px'
    },
    a: {
      textDecoration: 'none',
    },
    ul: {
      listStyle: 'none'
    },
    '*': {
      padding: '0',
      margin: '0',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorageService.isAuth()) {
      dispatch(setAuth(true));
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
