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
import AddMentor from "./components/mentor-form/mentor-form"

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="itemBefore">
        </div>
        <header>
             <Header /> 
        </header>
         <Search />
        <Switch>
          <Route exact path="/Header" component={Header} />
          <Route exact path="/" component={Events} />
          <Route exact path="/Internships" component={Internships} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Events/preview/:id" component={EventPreview} /> 
          <Route exact path="/Mentors" component={MentorsList} />
          <Route exact path="/Mentors/add" component={AddMentor} />
          <Route exact path="/Networking" component={Networking} />
        </Switch>
      </div>
    );
  }
}

export default App;
