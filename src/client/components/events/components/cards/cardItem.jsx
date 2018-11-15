import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardItem extends Component {
  render() {
    const data = this.props.data;
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

    let eventDate = data.event_start_date.substring(5, 7);
    let eventDateNumber = parseInt(eventDate, 10) - 1;
    let eventDateMonth = months[eventDateNumber].substring(0, 3);
    let eventStartHour = data.event_start_hour.slice(0, 5);

    const { url, path } = this.props.match;
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
            <article className="card-info">
              <div className="card-date">
                <p className="event-month">{eventDateMonth}</p>
                <p className="event-day">{eventDate}</p>
              </div>
              <div className="card-information">
                <h1 className="event-name">{data.event_name}</h1>
                <h3 className="event-type">{data.event_type}</h3>
                <p className="event-address">
                  {data.event_address}, {data.event_city}
                </p>

                <p className="event-end-date">{data.event_end_date}</p>
                <p className="event-start-hour">{eventStartHour},</p>
                <p className="event-language">
                  Language: {data.event_language}
                </p>
                <p className="contact-person">{data.contact_person}</p>
              </div>
            </article>
          </div>
          <button className="readmore" key={data.id}>
            <Link
              to={`${url}/preview/${data.id}`}
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
