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
  
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("/api/events")
      .then(response => response.json())   
      .then(eventsData =>
        this.setState({
          eventsData:eventsData,
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
          className={`cards-list-container`}
        >
          <div className="cards-list">
            { eventsData.length > 0
              ? eventsData.map(event => {

                  return (
                    <EventCard {...event} />
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
