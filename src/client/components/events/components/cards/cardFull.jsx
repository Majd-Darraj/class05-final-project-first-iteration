import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class CardFull extends Component {
  render() {
    const { data } = this.props;

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
    // debugger;

    let eventDate = data.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(eventDate, 10) - 1;
    let eventDateMonth = months[eventDateNumber];
    let eventStartHour = data.event_start_hour.slice(0, 5);
    let eventEndHour = data.event_end_hour.slice(0, 5);

    const { url, path } = this.props.match;
    // debugger;
    return (
      <div className="card-item event-item" key={data.id}>
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image event-theme-image"
                style={{
                  backgroundImage: `url(${data.event_theme_image})`
                }}
              />
            </div>

            <button
              className="readmore back"
              onClick={this.props.history.goBack}
            >
              BACK
            </button>

            <article className="card-info">
              <div className="card-date">
                <p className="event-month">{eventDateMonth}</p>
                <p className="event-day">{eventDate}</p>
              </div>
              <div className="card-information">
                <h1 className="event-name">{data.event_name}</h1>
                <h3 className="event-type">{data.event_type}</h3>
                <p className="event-agenda">
                  <span className="card-bold">Event Agenda:</span>
                  {data.event_agenda}
                </p>

                <p className="area_location">
                  <span className="card-bold">Adress: </span>
                  {data.event_address}
                </p>
                <p className="area_location">
                  <span className="card-bold">Event start date: </span>
                  {data.event_start_date}
                </p>
                <p className="area_location">
                  <span className="card-bold">Event end date: </span>
                  {data.event_end_date}
                </p>
                <p className="event-agenda">
                  <span className="card-bold">Language: </span>
                  {data.event_language}
                </p>
                <p className="event-agenda">
                  <span className="card-bold"> Max participants: </span>
                  {data.max_participants}
                </p>
                <p className="contact-person">
                  <span className="card-bold"> Contact Person: </span>{" "}
                  {data.contact_person}
                </p>
                <p className="contact-email">
                  <span className="card-bold"> Contact Email: </span>{" "}
                  {data.contact_email}
                </p>
                <p className="contact-phone">
                  <span className="card-bold"> Contact Phone:</span>
                  {data.contact_phone}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardFull);
