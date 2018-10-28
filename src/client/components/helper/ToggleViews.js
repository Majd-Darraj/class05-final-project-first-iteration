import React, { Component } from "react";
import MapComponent from "../map-component/MapComponent";
import Calendar from "../calendar/Calendar";

class ToggleViews extends Component {
  state = {
    map: true,
    calendar: false,
    eventsData: [],
    eventCoords: [],
    eventDate: []
  };

  toggle = () => {
    this.setState({
      calendar: !this.state.calendar,
      map: !this.state.map
    });
  };

  componentDidMount = () => {
    fetch("/api/events", {
      method: "GET"
    })
      .then(response => response.json())
      .then(eventsData => {
        let eventCoords = eventsData.map(event => {
          return {
            lat: event.event_geo_lat,
            lng: event.event_geo_lng
          };
        });
        let eventDate = eventsData.map(event => {
          return {
            eventStartDay: event.event_start_date,
            eventEndDay: event.event_end_date,
            eventStartHour: event.event_start_hour,
            eventEndHour: event.event_end_hour
          };
        });
        this.setState({
          isLoading: false,
          eventsData: eventsData,
          eventCoords: eventCoords,
          eventDate: eventDate
        });
        // debugger;
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    return (
      <>
        {this.state.map && (
          <div
            className="map-container"
            style={{ width: `50vw`, height: `80vh` }}
          >
            <MapComponent
              mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
              setMarker
              Zoom={11}
              coords={this.state.eventCoords}
            />
          </div>
        )}
        <button onClick={this.toggle}> Map / Calendar </button>
      </>
    );
  }
}

export default ToggleViews;
