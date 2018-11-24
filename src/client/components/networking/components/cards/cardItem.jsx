import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardItem extends Component {
  render() {
    const { data } = this.props;
    // debugger;
    const previewUrl = `${this.props.match.path}/preview/${data.id}`;

    return (
      <>
        <div className="card-item event-item">
          <div className="card-container mentor-container">
            <img
              src={data.organisation_logo}
              alt="Networking"
              className="card-image mentor-profile-picture"
            />
            <article className="card-info mentor-info">
              <div className="card-information mentor-card-information">
                <div className="name-gender">
                  <h1 className="organisation-name">
                    {data.organisation_name}
                  </h1>
                  <p className="sector-activity">
                    {data.sector_activity}
                  </p>
                </div>
                <p className="organisation-description">
                  {data.organisation_description}
                </p>
                <p className="networking-city">
                  {data.networking_city}
                </p>
                <p className="organisation-url">
                  {data.organisation_url}
                </p>
                <p className="organisation-address">
                  <span className="card-bold">Organisation Address:</span>
                  <br />
                  {data.organisation_address}
                </p>
                <p className="organisation-city">
                  {data.organisation_city}
                </p>
                <p className="organisation-postal-code">
                  {data.organisation_postal_code}
                </p>
              <p className="contact-person">{data.contact_person}</p>
              <p className="contact-email">{data.contact_email}</p>
              <p className="contact-phone">{data.contact_phone}</p>
                <p className="organisation-city">
                  {data.organisation_city}
                </p>
              </div>
            </article>
            <Link to={previewUrl} className="readmore mentor-more">
              Read More{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CardItem);
