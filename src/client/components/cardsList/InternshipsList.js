import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
// import InternshipData from "../../database/InternshipData.json";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      internshipsData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("/api/internships")
      .then(response => response.json())
     
      .then(Data =>
        this.setState({
          internshipsData:Data,
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const { isLoading, internshipsData } = this.state;
    return (
      <div>
              <Header />
        <section  className={`cards-list-container `}>
          <div className="cards-list">
            {internshipsData.map(internship => {
                return (
                    <InternshipCard {...internship} />
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

export default InternshipsList;
