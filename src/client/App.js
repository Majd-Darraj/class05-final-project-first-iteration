import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navigation />
      </div>
    );
  }
}

export default App;
