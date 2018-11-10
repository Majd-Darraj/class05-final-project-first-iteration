import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/cardsList/EventsList";
import EventPreview from "./components/cardsPreview/EventPreview";
import Internships from "./components/cardsList/InternshipsList";
import MentorsList from "./components/cardsList/MentorsList";
import Networking from "./components/cardsList/NetworkingList";
import Header from "./components/Header";
import Search from "./components/search/Search";
import MentorForms from "./components/mentor-form";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="itemBefore" />
        <header>
          <Header />
        </header>
        <main>
          <Search />
          <Switch>
            <Route exact path="/Header" component={Header} />
            <Route exact path="/" component={Events} />
            <Route exact path="/Internships" component={Internships} />
            <Route exact path="/Events" component={Events} />
            <Route exact path="/Events/preview/:id" component={EventPreview} />
            <Route exact path="/Networking" component={Networking} />

            <Route exact path="/Mentors" component={MentorsList} />
            <Route
              exact
              path="/Mentors/add"
              component={MentorForms.AddMentor}
            />
            <Route
              exact
              path={`/Mentors/edit/:id`}
              component={MentorForms.EditMentor}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
