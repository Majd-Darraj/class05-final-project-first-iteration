import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListView from "./components/views/ListView";
import CardView from "./components/views/CardView";

class Events extends Component {
  state = {
    eventsData: [],
    eventCoords: []
  };

  componentDidMount = () => {
    fetch("/api/events", {
      method: "GET"
    })
      .then(response => response.json())
      .then(eventsData => {
        let eventCoords = eventsData.map(event => {
          return {
            id: event.id,
            name: event.event_name,
            address: event.event_address,
            coord: {
              lat: event.event_geo_lat,
              lng: event.event_geo_lng
            }
          };
        });

        this.setState({
          eventsData: eventsData,
          eventCoords: eventCoords
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { eventsData, eventCoords } = this.state;

    return (
      <>
        <Switch>
          <Route
            exact
            path="/Events"
            render={props => (
              <ListView
                {...props}
                eventsData={eventsData}
                eventCoords={eventCoords}
              />
            )}
          />
          <Route
            path="/Events/preview/:id"
            render={props => (
              <CardView
                {...props}
                data={eventsData.find(event => {
                  return event.id == props.match.params.id;
                })}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default Events;
