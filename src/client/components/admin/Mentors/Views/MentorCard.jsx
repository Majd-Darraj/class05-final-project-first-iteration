import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventCard extends Component {
  render() {
    debugger;
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const { eventsData } = this.props;
    let eventDate = eventsData.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(eventDate, 10) - 1;
    let eventDateMonth = months[eventDateNumber];
    let eventStartHour = eventsData.event_start_hour.slice(0, 5);
    let eventEndHour = eventsData.event_end_hour.slice(0, 5);
    debugger;
    return (
      <>
        <div className="card-item event-item">
          <div className="card-container event-item-container">
            <div className="card-info-container">
              <div className="card-image-container">
                <div
                  className="card-image event-theme-image"
                  style={{
                    backgroundImage: `url(${eventsData.event_theme_image})`
                  }}
                />
              </div>
              <article className="card-info">
                <div className="card-date">
                  <p className="event-month">{eventDateMonth}</p>
                  <p className="event-day">{eventDate}</p>
                </div>
                <div className="card-information">
                  <h1 className="event-name">{eventsData.event_name}</h1>
                  <h3 className="event-type">{eventsData.event_type}</h3>
                  <p className="event-address">
                    {eventsData.event_address}, {eventsData.event_city}
                  </p>

                  <p className="event-start-hour">
                    {eventStartHour},{eventEndHour}
                  </p>
                  <p className="event-language">
                    Language: {eventsData.event_language}
                  </p>
                  <p className="">{eventsData.contact_person}</p>
                  <Link
                    id="edit-card"
                    to={`/admin/events/edit/${eventsData.id}`}
                  >
                    {" "}
                    Edit
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventCard;
