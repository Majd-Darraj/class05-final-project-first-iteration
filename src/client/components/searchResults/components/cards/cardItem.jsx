import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardItem extends Component {
  render() {
    // debugger;
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

    let eventDate = this.props.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(eventDate, 10) - 1;
    let eventDateMonth = months[eventDateNumber].substring(0, 3);

    return (
      <div className="card-item event-item" key={this.props.id}>
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image event-theme-image"
                style={{
                  backgroundImage: `url(${this.props.event_theme_image})`
                }}
              />
            </div>
            <article className="card-info">
              <div className="card-date">
                <p className="event-month">{eventDateMonth}</p>
                <p className="event-day">{eventDate}</p>
              </div>
              <div className="card-information">
                <h1 className="event-name">{this.props.event_name}</h1>
                <h3 className="event-type">{this.props.event_type}</h3>
                <p className="event-address">
                  {this.props.event_address}, {this.props.event_city}
                </p>

                <p className="event-end-date">{this.props.event_end_date}</p>
                <p className="event-start-hour">
                  {this.props.event_start_hour.slice(0, 5)},
                </p>
                <p className="event-language">
                  Language: {this.props.event_language}
                </p>
                <p className="contact-person">{this.props.contact_person}</p>
              </div>
            </article>
          </div>
          <button className="readmore" key={this.props.id}>
            <Link
              to={`/Events/preview/${this.props.id}`}
              className="menuLink nav-link"
            >
              Read More
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default CardItem;
