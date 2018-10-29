import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
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
      // "https://raw.githubusercontent.com/paredesrichard/commandline/master/internships.json"
    
      .then(response => response.json())
      .then(internshipsData =>
        this.setState({
          internshipsData: internshipsData,
          isLoading: false
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const {  internshipsData ,isLoading } = this.state;
    return (
      <>
        <Header />
        <section
          className={`cards-list-container `}
        >
          <div className="cards-list">
            { internshipsData.length > 0
              ? internshipsData.map(internship => {
                    return (
                    <InternshipCard  {...internship}    />
                  );
                })
              : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </section>
      </>
    );
  }
}

export default InternshipsList;
