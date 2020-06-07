import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../auth";
import { NewAccount } from "../auth"
import { Projects } from "../projects"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Login}></Route>
        <Route exact path={'/new-account'} component={NewAccount}></Route>
        <Route exact path={'/projects'} component={Projects}></Route>
      </Switch>
    </Router>
  );
}

export  {App};
