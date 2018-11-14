import React, { Component } from "react";
import NetworkingCard from "../cards/networkingCard";
import Header from "../Header";
// import networkingData from "../../database/networkingData.json";

class NetworkingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      networkingData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("/api/networking")
      .then(response => response.json())
     
      .then(Data =>
        this.setState({
          networkingData:Data,
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.networkingData);
    const { isLoading, networkingData } = this.state;
    return (
      <div>
              <Header />
        <section  className={`cards-list-container `}>
          <div className="cards-list">
            {networkingData.map(networking => {
                return (
                    <NetworkingCard {...networking} />
                  );
                })
              }
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </section>
        </div>

    );
  }
}

export default NetworkingList;
