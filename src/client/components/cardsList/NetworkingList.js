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
                      return <NetworkingCard {...networking} />;
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
