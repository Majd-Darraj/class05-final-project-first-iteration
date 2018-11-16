import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import EventView from "./Events/Views/EventsView";
import EventEdit from "./Events/Forms/EventEdit";

class AdminView extends React.Component {
  // data = [1.events, 2.mentors, 3.networking, 4.internships]
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
            render={props => <EventView {...props} eventsData={eventsData} />}
          />
          <Route
            path={`/admin/events/edit/:id`}
            render={props => <EventEdit {...props} eventsData={eventsData} />}
          />

          {/* <Route
            path={`/admin/mentors`}
            render={props => <EditView {...props} mentorsData={mentorsData} />}
          />
          <Route
            path={`/admin/networking`}
            render={props => (
              <EditView {...props} networkingData={networkingData} />
            )}
          />
          <Route
            path={`/admin/internships`}
            render={props => (
              <EditView {...props} internshipsData={internshipsData} />
            )}
          /> */}
        </Switch>
      </>
    );
  }
}

export default AdminView;
