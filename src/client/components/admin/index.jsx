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

import IntershipsView from "./Internship/Views/InternshipsView";
import InternshipEdit from "./Internship/Forms/InternshipEdit";
import IntershipAdd from "./Internship/Forms/InternshipAdd";


class AdminView extends React.Component {
  // data = [
  // 1.events,
  // 2.mentors,
  // 3.networking,
  // 4.internships
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
    // debugger;

    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      data => {
        debugger;
        this.setState({
          isLoading: false,
          data: data
        });
      }
    );
  };

  render() {
    const eventsData = this.state.data[1];
    const mentorsData = this.state.data[2];
    const networkingData = this.state.data[3];
    const internshipsData = this.state.data[4];
    // debugger;
    const { isLoading } = this.state;
    // const { url } = this.props.match;
    // debugger;
    return (
      <>
        <AdminNavigation />
        <Switch>
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

      
          <Route
            exact
            path={`/admin/mentors`}
            render={props => <MentorsView {...props} mentorsData={mentorsData} />}
          />
          <Route
            path={`/admin/mentors/edit/:id`}
            render={props => <MentorEdit {...props} mentorsData={mentorsData} />}
          />
          <Route
            path={`/admin/mentors/add`}
            render={props => <MentorAdd {...props} networkingData={networkingData} />}
          />


          <Route 
            exact
            path={`/admin/networking`}
            render={props => <NetworkingView {...props} networkingData={networkingData} />}
          />
          <Route
            path={`/admin/networking/edit/:id`}
            render={props => <NetworkingEdit {...props} networkingData={networkingData} />}
          />
          <Route
           
            path={`/admin/networking/add`}
            render={props => <NetworkingAdd {...props} networkingData={networkingData} />}
          />
         <Route
            exact
            path={`/admin/interships`}
            render={props => <IntershipsView {...props} internshipsData={internshipsData} />}
          />
          <Route
            path={`/admin/events/internships/:id`}
            render={props => <InternshipEdit {...props} internshipsData={internshipsData} />}
          />
          <Route
            path={`/admin/internships/add`}
            render={props => <IntershipAdd {...props} internshipsData={internshipsData} />}
          />
        </Switch>
      </>
    );
  }
}

export default AdminView;
