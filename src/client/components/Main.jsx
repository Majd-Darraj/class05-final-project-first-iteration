import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Events from "./events";
import Mentors from "./mentors";
import Internships from "./internships";
import Networking from "./networking";
import Header from "./Header";
import Search from "./search/Search";
import Footer from "./footer/footer";

import SearchResults from "./search/components/SearchResults";


export default class Main extends Component {
  render() {
    return (
      <>
        <div className="itemBefore">
          <Header />
          <Search />

        </div>
        <main id="main-content">
          <Switch>
            <Route exact path="/website" component={Internships} />
            <Route path="/website/Internships" component={Internships} />
            <Route path="/website/Events" component={Events} />
            <Route path="/website/Mentors" component={Mentors} />
            <Route path="/website/Networking" component={Networking} />

            <Route exact path="/Search" component={SearchResults} />
          </Switch>
        </main>
        <Footer />

      </>
    );
  }
}
