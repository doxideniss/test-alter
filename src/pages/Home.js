import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Main, NavBar, News, Profile } from "../components";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <main>
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
