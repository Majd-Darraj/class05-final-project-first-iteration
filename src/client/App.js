import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/Main";
import Admin from "./components/admin";



class App extends Component {
  render() {
    return (
      <div id="app">

       <Switch>

            <Route path={`/website`} component={Main} />

            <Route path={`/admin`} component={Admin} />
       </Switch>

      </div>
    );
  }
}

export default App;
