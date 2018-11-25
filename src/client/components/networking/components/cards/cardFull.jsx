import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CardFull extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="card-item event-item full-card">
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image organisation-logo"
                style={{
                  backgroundImage: `url(${data.organisation_logo})`
                }}
              />
            </div>
            <button
              className="readmore back"
              onClick={this.props.history.goBack}
            >
              BACK
            </button>
            <article className="card-info full-info">
              <div className="name-gender">
                <h1 className="mentor-first-name">
                  <span className="card-bold">Organisation Name:</span>{" "}
                  {data.organisation_name}
                </h1>
              </div>

              <p className="organisation-description">
                <span className="card-bold">Sector:</span>
                {data.sector_activity}
              </p>
              <p className="organisation-description">
                <span className="card-bold">Organisation description: </span>
                {data.organisation_description}
              </p>
              <p className="mentor-languages">
                <span className="card-bold">Networking city: </span>{" "}
                {data.networking_city}
              </p>
              <p className="mentor-availability">
                <span className="card-bold">Organisation url: </span>
                {data.organisation_url}
              </p>
              <p className="mentor-offering">
                <span className="card-bold">Address: </span>{" "}
                {data.organisation_address}, {data.organisation_city}
              </p>
              <p className="area_location">
                <span className="card-bold">Postal code: </span>
                {data.organisation_postal_code}
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
              <a
                className="readmore full-website-btn"
                href={data.organisation_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {data.organisation_name}
              </a>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardFull);
