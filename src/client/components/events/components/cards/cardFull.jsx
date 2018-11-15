import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import BackBtn from "../helpers/BackBtn";
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
    debugger;
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
            {/* <button
              className="readmore"
              onClick={() => {
                this.props.history.push(path);
              }}
            >
              BACK
            </button> */}
            <button className="readmore" onClick={this.props.history.goBack}>
              BACK
            </button>
            {/* <button className="readmore">
              <Link to="/events" className="menuLink nav-link">
                BACK
              </Link>
            </button> */}
            {/* <BackBtn /> */}
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
        </div>
      </div>
    );
  }
}

export default withRouter(CardFull);
