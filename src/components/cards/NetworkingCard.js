import React, { Component } from "react";

class NetworkingCard extends Component {
  render() {
    return (
      <div className="card-item networking-item">
        <div className="card-container networking-item-container">
        <div
            className="card-image internship-profil-picture"
            style={{
              backgroundImage: `url(${this.props.organisation_logo})`
            }}
          />
          <article className="card-info">
            <h1 className="organisation-name">{this.props.organisation_name}</h1>
            <h2 className="sector-activity">
              {this.props.sector_activity}
            </h2>
            <p className="organisation-description">
              {this.props.organisation_description}
            </p>
            <p className="organisation-logo">
              {this.props.organisation_logo}
            </p>
            <p className="networking-city">
              {this.props.networking_city}
            </p>
            <p className="organisation-url">
              {this.props.organisation_url}
            </p>
            <p className="organisation-address">
              {this.props.organisation_address}
            </p>
            <p className="organisation-city">{this.props.organisation_city}</p>
            <p className="organisation-postal-code">
              {this.props.organisation_postal_code}
            </p>
              
            <p className="contact-person">
                {this.props.contact_person}
            </p>  
            <p className="contact-email">
              {this.props.contact_email} 
            </p>  
            <p className="contact-phone">  
              {this.props.contact_phone}
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default NetworkingCard;
