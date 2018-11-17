import React, { Component } from "react";
import { Link } from "react-router-dom";

class NetworkingCard extends Component {
  render() {
      const { networkingData } = this.props;

    return (
      <>
        <Link to={`/admin/networking/edit/${networkingData.id}`}>
          <div className="card-item event-item">
            <div className="card-container event-item-container">
              <div className="card-info-container">
                <div className="card-image-container">
                  <div
                    className="card-image event-theme-image"
                    style={{
                      backgroundImage: `url(${networkingData.organisation_logo})`
                    }}
                  />
                </div>
                <article className="card-info">
               <h1 className="organisation-name">
                {networkingData.organisation_name}
              </h1>
                  <div className="card-information">
                   <p className="organisation_description">
                      {networkingData.organisation_description}
                    </p> 
                    <p className="sector-activity">{networkingData.sector_activity}</p>
                    <p className="networking-address">
                      {networkingData.organisation_address}, {networkingData.networking_city},{networkingData.organisation_postal_code}
                    </p>
                    <p className="organisation-url">
                      {networkingData.organisation_url}
                    </p>
                    <p className="">{networkingData.contact_person}</p>
                    <p className="contact-email">{this.props.contact_email}</p>
                    <p className="contact-phone">{this.props.contact_phone}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default NetworkingCard;
