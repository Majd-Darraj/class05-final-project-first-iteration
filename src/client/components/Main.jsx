import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Events from "./events";
import Mentors from "./mentors";
import Internships from "./internships";
import Networking from "./networking";

import SearchResults from "./search/components/SearchResults";

import Admin from "./admin/index";

// import AdminView from "./admin/index";
export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Internships} />

          <Route path="/Internships" component={Internships} />
          <Route path="/Events" component={Events} />
          <Route path="/Mentors" component={Mentors} />
          <Route path="/Networking" component={Networking} />

          <Route exact path="/Search" component={SearchResults} />
        </Switch>

        <Route path={`/admin`} component={Admin} />
      </main>
    );
  }
}
