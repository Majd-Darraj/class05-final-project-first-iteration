import React from "react";
//import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Header from "../Header";
import EventCard from "../cards/EventCard";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventsData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };


  fetchData() {
    fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
    )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(event => ({
          id: `${event.id}`,
          event_name: `${event.event_name}`,
          event_type: `${event.event_type}`,
          event_adress: `${event.event_adress}`,
          event_city: `${event.event_city}`,
          event_geo_lat: `${event.event_geo_lat}`,
          event_geo_lng: `${event.event_geo_lng}`,
          event_start_date:`${event.event_start_date}`,
          event_end_date: `${event.event_end_date}`,
          event_start_hour: `${event.event_start_hour}`,
          event_end_hour: `${event.event_end_hour}`,
          event_agenda: `${event.event_agenda}`,
          event_language: `${event.event_language}`,
          max_participants: `${event.max_participants}`,
          event_URL: `${event.event_URL}`,
          event_theme_image: `${event.event_theme_image}`,
          contact_person: `${event.contact_person}`,
          contact_phone: `${event.contact_phone}`,
          contact_email: `${event.contact_email}`,
          active: `${event.active}`
        }))
      )
      .then(eventsData => {
        this.setState({ eventsData });
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
                    event_adress,
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
                    event_URL,
                    event_theme_image,
                    contact_person,
                    contact_phone,
                    contact_email,
                    active
                  } = event;

                  return (
                    <EventCard
                      event_name={event_name}
                      id={id}
                      key={id}
                      event_type={event_type}
                      event_adress={event_adress}
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
                      event_URL={event_URL}
                      event_theme_image={event_theme_image}
                      contact_person={contact_person}
                      contact_phone={contact_phone}
                      contact_email={contact_email}
                      active={active}                    
                    />
                  );
                })
              : null}
          </div>
         </section>
        </div>
    );
  }
}

export default EventsList;