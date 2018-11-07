import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
import Search from "../search/Search";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      internshipsData: []
    };
  }

  componentDidMount = () => {
    fetch("/api/internships", {
      method: "GET"
    })
      .then(response => response.json())
      .then(internshipsData => {
        this.setState({
          isLoading: false,
          internshipsData: internshipsData
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { isLoading, internshipsData } = this.state;
    // debugger;
    return (
      <>
        <div className="page-content">
          <section
            className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
          >
            <div className="internships-main-container">
              <div className="cards-list">
                {!isLoading && internshipsData.length > 0
                  ? internshipsData.map(internship => {
                      return <InternshipCard {...internship} />;
                    })
                  : null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default InternshipsList;
