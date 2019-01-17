import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import scrollIntoView from "scroll-into-view-if-needed";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Search extends Component {
  state = {
    data: [],
    searchQuery: "",
    notValid: null
  };

  // search = e => {
  //   e.preventDefault();
  //   const searchQ = this.state.searchQuery;
  //   this.props.history.push("/search?q=" + searchQ);
  // };
  search = e => {
    e.preventDefault();
    const { searchQuery, notValid } = this.state;
    // document.getElementById("validation").classList.remove("notValid");
    searchQuery !== ""
      ? this.props.history.push("/search?q=" + searchQuery) ||
        this.setState({ notValid: false })
      : this.setState({ notValid: true });
    console.log(this.state.notValid);
  };

  setQuery = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  // scrollToContent = () => {
  //   const pageContent = document.querySelector("main-content");

  //   scrollIntoView(pageContent, {
  //     behavior: "smooth",
  //     scrollMode: "always"
  //   });
  // };

  render() {
    const { searchQuery, notValid } = this.state;
    const inputnotValid = notValid === true ? "notValid" : "";

    return (
      <>
        <div className="search-container">
          <form onSubmit={this.search}>
            <fieldset>
              <legend>WHAT ARE YOU LOOKING FOR?</legend>
              <div className="legend-back" />
            </fieldset>
            <div className="inner-form">
              {/* <div className="left"> */}
              <div className="input-wrap first">
                <div className="input-field first">
                  <label>Find Internships, Events and more...</label>
                  <div
                    id="validation"
                    className={`search-input-container ${inputnotValid}`}
                  >
                    <input
                      type="text"
                      placeholder="Enter your search term here..."
                      onFocus={e =>
                        (e.target.placeholder =
                          "ex: Refugee, Workshop, Arabic, København...")
                      }
                      onBlur={e =>
                        (e.target.placeholder =
                          "Enter your search term here...")
                      }
                      name={"q"}
                      value={this.state.searchQuery}
                      onChange={this.setQuery}
                    />
                  </div>
                </div>
              </div>
              <button
                className="btn-search"
                type="submit"
                onClick={() => {
                  this.setState({ notValid: null });
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
                Search{" "}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Search);
