import React, { Component } from "react";
import "../App.css";
// import {JobList } from "./componentsclass";
import Searchbar from './searchbar/Searchbar';
import Header from './Header';
class Homepage extends Component {

  
  render() {
    return (
      <div>
      <div>
        <Header />
      </div>

<Searchbar />

      </div>
    );
  }
}

export default Homepage;