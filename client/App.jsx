import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./containers/Albums";
import NavBar from "./components/resuables/Nav";
import Names from "./containers/Names";
import Crud from "./containers/Crud";
import CSSChallenge from "./containers/CSSChallenge";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/names'>
            <Names />
          </Route>
          <Route path='/crud'>
            <Crud />
          </Route>
          <Route path='/css-challenge'>
            <CSSChallenge />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
