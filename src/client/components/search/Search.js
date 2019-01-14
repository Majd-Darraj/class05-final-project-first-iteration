import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import scrollIntoView from "scroll-into-view-if-needed";

class Search extends Component {
  state = {
    data: [],
    searchQuery: ""
  };

  search = e => {
    e.preventDefault();
    const searchQ = this.state.searchQuery;
    this.props.history.push("/search?q=" + searchQ);
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
    return (
      <>
        <div className="search-container">
          <form onSubmit={this.search}>
            <fieldset>
              <legend>WHAT ARE YOU LOOKING FOR?</legend>
            </fieldset>
            <div className="inner-form">
              {/* <div className="left"> */}
              <div className="input-wrap first">
                <div className="input-field first">
                  <label>WHAT</label>
                  <input
                    type="text"
                    placeholder="ex: DIY, fair, workshop, internship"
                    name={"q"}
                    value={this.state.searchQuery}
                    onChange={this.setQuery}
                  />
                </div>
              </div>
              <button className="btn-search" type="submit">
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Search);
