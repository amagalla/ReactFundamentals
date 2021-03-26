import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./containers/Albums";
import NavBar from "./components/resuables/Nav";

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
        </Switch>
      </Router>
    </>
  );
};

export default App;
