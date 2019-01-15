import React from "react";
import { Link } from "react-router-dom";

import EventCard from "./EventCard";

class EventsView extends React.Component {
  componentDidMount = () => {
    const { eventsData } = this.props;
    if (eventsData.length > 0 || eventsData !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { eventsData } = this.props;

    return (
      <>
        <div className="divider">
          <span>EVENTS</span>
        </div>
        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events`}
          >
            <div className="add-btn-con">
              <Link
                className="readmore add-card active-admin-link"
                to="/admin/events/add"
              >
                Add New Event
              </Link>
            </div>
            <div className="events-main-container">
              <div className="cards-list">
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      return (
                        <EventCard
                          {...this.props}
                          eventsData={event}
                          key={`event_${event.id}`}
                        />
                      );
                    })
                  : null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default EventsView;
