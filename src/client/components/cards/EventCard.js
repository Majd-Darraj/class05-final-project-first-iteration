import React, { Component } from "react";

class EventCard extends Component {
  render() {
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
    let date = this.props.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(date, 10) - 1;
    let eventDateMonth = months[eventDateNumber];
    debugger;
    return (
      <div className="card-item event-item">
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div
              className="card-image event-theme-image"
              style={{
                backgroundImage: `url(${this.props.event_theme_image})`
              }}
            />
            <article className="card-info">
              <div className="date">
                <p className="event-start-date">
                  {() => {
                    let date = this.props.event_start_date.substring(5, 7);
                    let dateDay = parseInt(date, 10);
                    debugger;
                    return dateDay;
                  }}
                </p>
              </div>
              <h1 className="event-name">{this.props.event_name}</h1>
              <h3 className="event-type">{this.props.event_type}</h3>
              <p className="event-address">
                {this.props.event_address}, {this.props.event_city}
              </p>

              <p className="event-end-date">{this.props.event_end_date}</p>
              <p className="event-start-hour">
                {this.props.event_start_hour.slice(0, 5)},
              </p>
              <p className="event-end-hour" />
              <p className="event-agenda">{this.props.event_agenda}</p>
              <p className="event-language">
                Language: {this.props.event_language}
              </p>
              <p className="max-participants">
                Max participants: {this.props.max_participants} persons
              </p>
              <p className="contact-person">{this.props.contact_person}</p>
              <p className="contact-phone">{this.props.contact_phone}</p>
              <p className="contact-email">{this.props.contact_email}</p>
              <p className="event-URL">{this.props.event_URL}</p>
            </article>
          </div>
          <button className="readmore">Read More</button>
        </div>
      </div>
    );
  }
}

export default EventCard;
