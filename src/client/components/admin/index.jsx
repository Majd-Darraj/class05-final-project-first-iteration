import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AdminNavigation from "./AdminNavigation";

import EventsView from "./Events/Views/EventsView";
import EventEdit from "./Events/Forms/EventEdit";
import EventAdd from "./Events/Forms/EventAdd";

import MentorsView from "./Mentors/Views/MentorsView";
import MentorEdit from "./Mentors/Forms/MentorEdit";
import MentorAdd from "./Mentors/Forms/MentorAdd";

import NetworkingView from "./Networking/Views/NetworkingView";
import NetworkingEdit from "./Networking/Forms/NetworkingEdit";
import NetworkingAdd from "./Networking/Forms/NetworkingAdd";

import InternshipsView from "./Internship/Views/InternshipsView";
import InternshipEdit from "./Internship/Forms/InternshipEdit";
import InternshipAdd from "./Internship/Forms/InternshipAdd";

class AdminView extends React.Component {
  // data = [
  // 0.internships
  // 1.events,
  // 2.mentors,
  // 3.networking,
  // ]
  state = {
    isLoading: true,
    data: []
  };

  componentDidMount = () => {
    const urls = [
      "/api/internships",
      "/api/events",
      "/api/mentors",
      "/api/networking"
    ];

    Promise.all(
      urls.map(url =>
        fetch(url).then(resp => {
          return resp.json();
        })
      )
    ).then(data => {
      // debugger;
      this.setState({
        isLoading: false,
        data: data
      });
    });
  };

  render() {
    const internshipsData = this.state.data[0];
    const eventsData = this.state.data[1];
    const mentorsData = this.state.data[2];
    const networkingData = this.state.data[3];
    // debugger;
    return (
      <>
        <AdminNavigation />
        <Switch>
          {/* EVENTS */}
          <Route
            exact
            path={`/admin/events`}
            render={props => <EventsView {...props} eventsData={eventsData} />}
          />
          <Route
            path={`/admin/events/edit/:id`}
            render={props => <EventEdit {...props} eventsData={eventsData} />}
          />
          <Route
            path={`/admin/events/add`}
            render={props => <EventAdd {...props} eventsData={eventsData} />}
          />

          {/* MENTORS */}
          <Route
            exact
            path={`/admin/mentors`}
            render={props => (
              <MentorsView {...props} mentorsData={mentorsData} />
            )}
          />
          <Route
            path={`/admin/mentors/edit/:id`}
            render={props => (
              <MentorEdit {...props} mentorsData={mentorsData} />
            )}
          />
          <Route
            path={`/admin/mentors/add`}
            render={props => (
              <MentorAdd {...props} networkingData={networkingData} />
            )}
          />

          {/* NETWORKING */}
          <Route
            exact
            path={`/admin/networking`}
            render={props => (
              <NetworkingView {...props} networkingData={networkingData} />
            )}
          />
          <Route
            path={`/admin/networking/edit/:id`}
            render={props => (
              <NetworkingEdit {...props} networkingData={networkingData} />
            )}
          />
          <Route
            path={`/admin/networking/add`}
            render={props => (
              <NetworkingAdd {...props} networkingData={networkingData} />
            )}
          />

          {/* INTERNSHIPS */}
          <Route
            exact
            path={`/admin/internships`}
            render={props => (
              <InternshipsView {...props} internshipsData={internshipsData} />
            )}
          />
          <Route
            path={`/admin/internships/edit/:id`}
            render={props => (
              <InternshipEdit {...props} internshipsData={internshipsData} />
            )}
          />
          <Route
            path={`/admin/internships/add`}
            render={props => (
              <InternshipAdd {...props} internshipsData={internshipsData} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default AdminView;
