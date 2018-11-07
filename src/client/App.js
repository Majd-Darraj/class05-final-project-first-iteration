import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/cardsList/EventsList";
import EventPreview from "./components/cardsPreview/EventPreview";
import Internships from "./components/cardsList/InternshipsList";
import Mentors from "./components/cardsList/MentorsList";
import Networking from "./components/cardsList/NetworkingList";
class App extends Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/Internships" component={Internships} />
          <Route exact path="/Events" component={Events} />
          {/* <Route exact path="/Events/add" component={EventsForm.AddEvent} />
          <Route exact path="/Events/edit/:id" component={EventsForm.EditEvent} /> */}
          <Route exact path="/Events/preview/:id" component={EventPreview} />
          <Route exact path="/Mentors" component={Mentors} />
          <Route exact path="/Networking" component={Networking} />
        </Switch>
      </div>
    );
  }
}

export default App;
