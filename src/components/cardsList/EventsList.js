import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import Header from "../Header";
import Calendar from '../calendar/Calendar';
class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      eventsData: [],
      eventsdays:[],
    };
  }
componentWillMount(){
  fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json")
  .then(response => response.json())
  .then(data=>{
    data.map(eventObj =>({
    eventsdays:this.state.eventsdays.push(eventObj.event_start_date)
  }))})	
  .then(console.log(this.state.eventsdays))  
}
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
   
    fetch(
      "https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
    )
      .then(response => response.json())
         .then(parsedJSON =>
        parsedJSON.map(event => ({
          id: `${event.id}`,
          event_name: `${event.event_name}`,
          event_type: `${event.event_type}`,
          event_address: `${event.event_address}`,
          event_postal_code: `${event.event_postal_code}`,
          event_city: `${event.event_city}`,
          event_start_date: `${event.event_start_date}`,
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
      .then(eventsData =>
        this.setState({
          eventsData,
          isLoading: false
        })
      )
    
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const { isLoading, eventsData } = this.state;

    return (
      <>
        <Header />
        <Calendar days={this.state.eventsdays}/>
        <section
          className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
        >
          <div className="cards-list">
            {!isLoading && eventsData.length > 0
              ? eventsData.map(event => {
                  const {
                  
                    id,
                    event_name,
                    event_type,
                    event_address,
                    event_postal_code,
                    event_city,
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
                      id={id}
                      key={id}
                      event_name={event_name}
                      event_type={event_type}
                      event_address={event_address}
                      event_postal_code={event_postal_code}
                      event_city={event_city}
                      event_start_date={event_start_date}
                      event_end_date={event_end_date}
                      event_start_hour={event_start_hour}
                      event_end_hour={event_end_hour}
                      event_agenda={event_agenda}
                      event_language={event_language}
                      max_participants={max_participants}
                      event_URL={event_URL}
                      event_theme_image={event_theme_image}
                      contact_phone={contact_phone}
                      contact_person={contact_person}
                      contact_email={contact_email}
                      
                      active={active}
                    />
                  );
                })
              : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </section>
      </>
    );
  }
}

export default EventsList;
