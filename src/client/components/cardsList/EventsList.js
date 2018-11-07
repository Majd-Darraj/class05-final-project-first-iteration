import React from "react";
import Header from "../Header";
import EventCard from "../cards/EventCard";
import MapComponent from "../map-component/MapComponent";
import Search from "../search/Search";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLoading: true,
      eventsData: [],
      eventCoords: []
    };
  }

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
          isLoading: false,
          eventsData: eventsData,
          eventCoords: eventCoords
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { isLoading, eventsData } = this.state;
    return (
      <div>
        <div className="itemBefore">
          <Header />
          <Search />
        </div>

        <div className="page-content">
          <MapComponent
            mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
            setMarker
            Zoom={11}
            coords={this.state.eventCoords}
          />
          <section
            className={`cards-list-container cards-list-container-events ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      return <EventCard {...event} key={event.id} />;
                    })
                  : null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EventsList;
