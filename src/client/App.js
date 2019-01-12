import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/search/Search";
import Main from "./components/Main";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="itemBefore">
          <Header />
          <Search />
        </div>
        <main>
          <Main />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
