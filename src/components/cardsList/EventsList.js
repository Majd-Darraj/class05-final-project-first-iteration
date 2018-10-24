import React from "react";
//import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Header from "../Header";
import EventCard from "../cards/EventCard";
import MapComponent from "../map-component/MapComponent";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventsData: [],
      coords: []
    };
  }


  componentDidMount() {

    let newCoords = [];

    fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
    )
      .then(response => response.json())      
      .then(eventsData => {
        this.setState({ eventsData: eventsData });
      newCoords = eventsData.map(data => {
        let tempCoords = {};
        tempCoords = {
          lat: data.event_geo_lat,
          lng: data.event_geo_lng
        };
        return tempCoords;
      });
      this.setState({ coords: newCoords });
      });

  
}






  render() {
    const { eventsData } = this.state;
    return (
      <div>
        <Header />
        <section
          className="cards-list-container">
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
                    event_URL,
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
                      event_geo_lat={event_geo_lat}
                      event_geo_lng={event_geo_lng}
                      event_start_date={event_start_date}
                      event_end_date= {event_end_date}
                      event_start_hour={event_start_hour} 
                      event_end_hour={event_end_hour}
                      event_agenda={event_agenda}
                      event_language={event_language}
                      max_participants={max_participants}
                      event_theme_image={event_theme_image}
                      contact_person={contact_person}
                      contact_phone={contact_phone}
                      contact_email={contact_email}
                      active={active}  
                      event_URL={event_URL}               
                    />
                  );
                })
              : null}
          </div>
          <div style={{ width: `400px`, height: `400px` }}>
        <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={11}
        coords={this.state.coords}
      />
      </div>
         </section>
        </div>
    );
  }
}

export default EventsList;