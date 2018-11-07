import React from "react";
import NetworkingCard from "../cards/NetworkingCard";

class NetworkingList extends React.Component {
  state = {
    NetworkingData: []
  };

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
      <>
        <div className="page-content">
          <section className="cards-list-container">
            <div className="networking-main-container">
              <div className="cards-list">
                {NetworkingData.length > 0
                  ? NetworkingData.map(networking => {
                      return (
                        <NetworkingCard {...networking} key={networking.id} />
                      );
                    })
                  : null}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NetworkingList;
