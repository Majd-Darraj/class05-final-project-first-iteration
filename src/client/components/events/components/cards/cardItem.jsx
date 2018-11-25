import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class CardItem extends Component {
  render() {
    const eventsData = this.props.data;
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

    let eventDate = eventsData.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(eventDate, 10) - 1;
    let eventDateMonth =
      eventDate !== undefined ? months[eventDateNumber] : null;
    let eventStartHour = eventsData.event_start_hour.slice(0, 5);
    let eventEndHour = eventsData.event_end_hour.slice(0, 5);

    const previewUrl = `${this.props.match.path}/preview/${eventsData.id}`;

    return (
      <>
        <Link to={previewUrl}>
          <div className="card-item event-item">
            <div className="card-container mentor-container">
              <img
                src={eventsData.event_theme_image}
                alt="Mentor"
                className="card-image mentor-profile-picture"
              />
              <article className="card-info mentor-info">
                <div className="card-information events-cardz accordionmentor-card-informatio">
                  <div className="card-date">
                    <p className="event-month">{eventDateMonth}</p>
                    <p className="event-day">{eventDate}</p>
                  </div>
                  <div className="card-information">
                    <h1 className="event-name">{eventsData.event_name}</h1>
                    <h3 className="event-type">{eventsData.event_type}</h3>

                    <p className="event-start-hour">
                      {eventStartHour} - {eventEndHour}
                    </p>
                    <p className="event-language">
                      Language: {eventsData.event_language}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default withRouter(CardItem);
