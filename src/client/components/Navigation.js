import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Events from "./cardsList/EventsList";
import Internships from "./cardsList/InternshipsList";
import Mentors from "./cardsList/MentorsList";
import Networking from "./cardsList/NetworkingList";
import MentorForm from "./mentor-form";

class Router extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/Internships" component={Internships} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Mentors" component={Mentors} />
          <Route exact path="/Mentors/add" component={MentorForm.AddMentor} />

          <Route exact path="/Networking" component={Networking} />
          {/* <Route exact component={error} /> */}
        </Switch>
    );
  }
}

export default Router;
