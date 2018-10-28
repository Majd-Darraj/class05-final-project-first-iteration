import React from "react";
import NetworkingCard from "../cards/NetworkingCard";
import Header from "../Header";
import Search from "../search/Search";

class NetworkingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NetworkingData: []
    };
  }

  componentDidMount = () => {
    fetch("/api/networking", {
      method: "GET"
    })
      .then(response => response.json())
      .then(NetworkingData => {
        this.setState({
          isLoading: false,
          NetworkingData: NetworkingData
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { NetworkingData } = this.state;
    return (
      <div>
        <div className="itemBefore">
          <Header />
          <Search />
        </div>
        <div className="page-content">
          <section className="cards-list-container">
            <div className="networking-main-container">
              <div className="cards-list">
                {NetworkingData.length > 0
                  ? NetworkingData.map(networking => {
                      const {
                        id,
                        organisation_name,
                        organisation_description,
                        organisation_logo,
                        organisation_url,
                        organisation_address,
                        organisation_postal_code,
                        organisation_city,
                        sector_activity,
                        contact_person,
                        contact_email,
                        contact_phone,
                        active
                      } = networking;

                      return (
                        <NetworkingCard
                          organisation_name={organisation_name}
                          id={id}
                          key={id}
                          sector_activity={sector_activity}
                          organisation_description={organisation_description}
                          organisation_logo={organisation_logo}
                          organisation_url={organisation_url}
                          organisation_address={organisation_address}
                          organisation_city={organisation_city}
                          organisation_postal_code={organisation_postal_code}
                          contact_person={contact_person}
                          contact_email={contact_email}
                          contact_phone={contact_phone}
                          active={active}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default NetworkingList;
