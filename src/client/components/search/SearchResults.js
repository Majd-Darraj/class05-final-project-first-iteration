import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";

class SearchResults extends Component {
  state = {
    isLoading: true,
    internshipsData: [],
    searchKeyword: [this.props.value]
  };

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
    // let filteredInternships = internshipsData.filter(internship => {
    //   return internship.find(
    //     Object.value(internship).toLowerCase() == searchKeyword.toLowerCase()
    //   );
    // });
    let searchKeyword = this.props.value;
    // let filtered = internshipsData.find(internship => {
    //   return internship.internship_title == searchKeyword;
    // });

    debugger;
    return (
      <>
        <div className="page-content">
          <section className="cards-list-container ">
            <div className="cards-list">
              <h1>{searchKeyword}</h1>
            </div>
            {/* <div className="loader">
              <div className="icon" />
            </div> */}
          </section>
        </div>
      </>
    );
  }
}

export default SearchResults;
