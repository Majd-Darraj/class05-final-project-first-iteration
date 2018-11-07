import React from "react";
import Header from "../Header";
import Search from "../search/Search";
import EventCard from "../cards/EventCard";

class EventPreview extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      isLoading: true,
      eventsData: []
    };
  }

  //   componentDidMount() {
  //     const url = "/api/events";
  //     const id = this.props.match.params.id;
  //     fetch(`${url}/${id}`, {
  //       method: "GET"
  //     })
  //       .then(response => response.json())
  //       .then(eventsData =>
  //         this.setState({
  //           isLoading: false,
  //           eventsData: eventsData
  //         })
  //       );
  //   }
  componentDidMount = () => {
    const url = "/api/events";
    const id = this.props.match.params.id;
    // debugger;

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
        // debugger;

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
export default EventPreview;
