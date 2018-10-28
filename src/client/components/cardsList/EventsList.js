import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import Header from "../Header";
import EventCard from "../cards/EventCard";
import MapComponent from "../map-component/MapComponent";
// import Calendar from "../calendar/Calendar";
// import ToggleViews from "./helper/ToggleViews.js";
import Search from "../search/Search";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      eventCoords: [],
      eventDate: []
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
    const { eventsData } = this.state;
    return (
      <div>
        <div className="itemBefore">
          <Header />
          <Search />
        </div>
        {/* <Calendar /> */}

        <div className="page-content">
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
          <section className="cards-list-container cards-list-container-events">
            <div className="events-main-container">
              <div className="cards-list">
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      const {
                        id,
                        event_name,
                        event_type,
                        event_address,
                        event_postal_code,
                        event_city,
                        event_geo_lng,
                        event_geo_lat,
                        event_start_date,
                        event_end_date,
                        event_start_hour,
                        event_end_hour,
                        event_agenda,
                        event_language,
                        max_participants,
                        event_theme_image,
                        contact_person,
                        contact_phone,
                        contact_email,
                        active,
                        event_URL
                      } = event;

                      return (
                        <EventCard
                          event_name={event_name}
                          id={id}
                          key={id}
                          event_type={event_type}
                          event_address={event_address}
                          event_postal_code={event_postal_code}
                          event_city={event_city}
                          // event_geo_lat={event_geo_lat}
                          // event_geo_lng={event_geo_lng}
                          // event_start_date={event_start_date}
                          // event_end_date={event_end_date}
                          // event_start_hour={event_start_hour}
                          // event_end_hour={event_end_hour}
                          // event_agenda={event_agenda}
                          // event_language={event_language}
                          // max_participants={max_participants}
                          // event_theme_image={event_theme_image}
                          // contact_person={contact_person}
                          // contact_phone={contact_phone}
                          // contact_email={contact_email}
                          // active={active}
                          // event_URL={event_URL}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EventsList;
