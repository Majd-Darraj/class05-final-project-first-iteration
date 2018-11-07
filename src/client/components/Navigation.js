import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Events from "./cardsList/EventsList";
import Internships from "./cardsList/InternshipsList";
import Mentors from "./cardsList/MentorsList";
import Networking from "./cardsList/NetworkingList";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/Internships" component={Internships} />
          <Route exact path="/Events" component={Events} />
          {/* <Route exact path="/Events/add" component={EventsForm.AddEvent} />
          <Route exact path="/Events/edit/:id" component={EventsForm.EditEvent} />
          <Route exact path="/Events/details/:id" component={EventDetailedView} /> */}
          <Route exact path="/Mentors" component={Mentors} />
          <Route exact path="/Networking" component={Networking} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
