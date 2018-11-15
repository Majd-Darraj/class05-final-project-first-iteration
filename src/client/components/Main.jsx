import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Events from "./events";
import Internships from "./cardsList/InternshipsList";
import Mentors from "./cardsList/MentorsList";
import Networking from "./cardsList/NetworkingList";
import MentorForms from "./mentor-form";
import AdminView from "./admin/index";
export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Internships} />
          <Route path="/Internships" component={Internships} />
          <Route path="/Events" component={Events} />
          <Route path="/Mentors" component={Mentors} />
          <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
          {/* <Route
            exact
            path={`/Mentors/edit/:id`}
            component={MentorForms.EditMentor}
          /> */}
          <Route path="/Networking" component={Networking} />
          <Route path={`/admin`} component={AdminView} />
        </Switch>
      </main>
    );
  }
}
