import React from "react";
import NetworkingCard from "../cards/NetworkingCard";

class NetworkingList extends React.Component {
  state = {
    val: [],
    NetworkingData: []
  };

  componentDidMount = () => {
    fetch("/api/networking", {
      method: "GET"
    })
      .then(response => response.json())
      .then(NetworkingData => {
        // let values = NetworkingData.map(d => {
        //   return Object.values(d);
        // });
        this.setState({
          val: values,
          isLoading: false,
          NetworkingData: NetworkingData
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { NetworkingData, val } = this.state;

    return (
      <>
        {/* <p>{val.map(e => e)}</p> */}
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
