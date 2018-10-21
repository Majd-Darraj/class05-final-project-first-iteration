import React from "react";
import NetworkingCard from "../cards/NetworkingCard";
import Header from "../Header";

class NetworkingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NetworkingData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/networking.json"
    )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(networking => ({
          id: `${networking.id}`,
          organisation_name: `${networking.organisation_name}`,
          sector_activity: `${networking.sector_activity}`,
          organisation_description: `${networking.organisation_description}`,
          organisation_logo: `${networking.organisation_logo}`,
          organisation_url: `${networking.organisation_url}`,
          organisation_address: `${networking.organisation_address}`,
          organisation_city: `${networking.organisation_city}`,
          organisation_postal_code:`${networking.organisation_postal_code}`,
          contact_person: `${networking.contact_person}`,
          contact_email: `${networking.contact_email}`,
          contact_phone: `${networking.contact_phone}`,
          active: `${networking.active}`,
        }))
      )
      .then(NetworkingData => {
        this.setState({ NetworkingData });
      });
  
  }
  render() {
    const { NetworkingData } = this.state;
    return (
      <div>
        <Header />
        <section
          className="cards-list-container">
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
                    active,
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
                      contact_person= {contact_person}
                      contact_email={contact_email} 
                      contact_phone={contact_phone}
                      active={active}  
                    />
                  );
                })
              : null}
          </div>
         </section>
        </div>
    );
  }
}

export default NetworkingList;
