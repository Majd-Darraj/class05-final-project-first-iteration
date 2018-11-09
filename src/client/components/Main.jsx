import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Events from "./events";
import Internships from "./cardsList/InternshipsList";
import Mentors from "./cardsList/MentorsList";
import Networking from "./cardsList/NetworkingList";
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
        </Switch>
      </main>
    );
  }
}