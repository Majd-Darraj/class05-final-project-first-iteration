import React from "react";
import EventCard from "../cards/EventCard";

class EventPreview extends React.Component {
  state = {
    isLoading: true,
    eventsData: []
  };

  componentDidMount = () => {
    const url = "/api/events";
    const id = this.props.match.params.id;
    // debugger;

    fetch(`/api/events`)
      .then(response => response.json())
      .then(eventsData => {
        this.setState({
          isLoading: false,
          eventsData: eventsData
        });
      })

      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { isLoading, eventsData } = this.state;
    const as = this.props;
    // debugger;

    return (
      <div>
        <div className="page-content  card-preview">
          <section
            className={`cards-list-container cards-list-container-events ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      if (this.props.match.params.id == event.id)
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
