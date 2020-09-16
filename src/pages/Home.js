import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Main, NavBar, News, Profile } from "../components";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar/>
      <main className={classes.main}>
        <Switch>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Home;
