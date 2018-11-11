import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/search/Search";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="itemBefore">
          <header>
            <Header />
            <Search />
          </header>
        </div>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
