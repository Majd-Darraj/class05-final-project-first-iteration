import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/cardsList/EventsList";
import EventPreview from "./components/cardsPreview/EventPreview";
import Internships from "./components/cardsList/InternshipsList";
import Mentors from "./components/cardsList/MentorsList";
import Networking from "./components/cardsList/NetworkingList";
import Header from "./components/Header";
import Search from "./components/search/Search";
import SearchResults from "./components/search/SearchResults";
import searchData from "./components/search/SearchFetch";
class App extends Component {
  state = {
    q: "",
    data: []
  };

  componentDidMount = () => {
    this.setState({
      q: "",
      data: []
    });
  };

  setQuery = e => {
    this.setState({
      q: e.target.value,
      data: this.state.data
    });
  };

  runSearch = e => {
    e.preventDefault();
    const data = searchData(this.setQuery.q);
    this.setState({
      q: this.state.q,
      data
    });
  };

  render() {
    const { data } = this.state.data;
    return (
      <div id="app">
        <div className="itemBefore">
          <Header />
          <Search />
        </div>
        <Switch>
          <Route exact path="/" component={Events} />
          <Route
            path="/search"
            render={props => <SearchResults {...props} data={data} />}
          />
          <Route exact path="/Internships" component={Internships} />
          {/* <Route
            path={`/events/preview/:id`}
            render={props => <EventPreview {...props} />}
          /> */}
          <Route exact path="/Events" component={Events} />
          {/* <Route exact path="/Events/add" component={EventsForm.AddEvent} />
          <Route exact path="/Events/edit/:id" component={EventsForm.EditEvent} /> */}
          <Route exact path="/Mentors" component={Mentors} />
          <Route exact path="/Networking" component={Networking} />
        </Switch>
      </div>
    );
  }
}

export default App;
