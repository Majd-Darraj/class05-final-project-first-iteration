import React, { Component } from "react";

class EventCard extends Component {
  render() {
    return (
      <div className="card-item event-item">
        <div className="card-container event-item-container">
          <div 
            className="card-image event-theme-image"
            style={{
              backgroundImage: `url(${this.props.event_theme_image})`
            }}
          />
          <article className="card-info">
            <h1 className="event-name">{this.props.event_name}</h1>
            <h2 className="event-type">
              {this.props.event_type}
            </h2>
            <p className="event-adress">
              {this.props.event_adress}
            </p>
            <p className="organisation-postal-code">
              {this.props.event_postal_code}
            </p>
            <p className="event-city">
              {this.props.event_city}
            </p>
            <p className="event-geo-lat">
              {this.props.event_geo_lat}
            </p>
            <p className="event-geo-lng">
              {this.props.event_geo_lng}
            </p>
            <p className="event-start-date">{this.props.event_start_date}</p>
            <p className="event-end-date">
              {this.props.event_end_date}
            </p>
              
            <p className="event-start-hour">
                {this.props.event_start_hour}
            </p>  
            <p className="event-end-hour">
              {this.props.event_end_hour} 
            </p>  
            <p className="event-agenda">  
              {this.props.event_agenda}
            </p>
            <p className="event-languagen">
              {this.props.event_language}
            </p>
            <p className="max-participants">
              {this.props.max_participants}
            </p>
            <p className="event-URL">
              {this.props.event_URL}
            </p>
            <p className="contact-person">
              {this.props.contact_person}</p>
            <p className="contact-phone">
              {this.props.contact_phone}</p>
            <p className="contact-email">
              {this.props.contact_email}
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default EventCard;
