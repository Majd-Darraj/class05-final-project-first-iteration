import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import SearchResults from "./components/SearchResults";

class Search extends Component {
  state = {
    data: [],
    searchQuery: ""
  };

  search = e => {
    e.preventDefault();
    const searchQ = this.state.searchQuery;
    this.props.history.push("/search?q=" + searchQ);

    // fetch(`/api/search?q=${searchQ}`, {
    //   method: "GET"
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     debugger;
    //     console.log({ dataFromSearch: data });
    //     console.table(data);
    //     this.setState({
    //       // isLoading: false,
    //       data: data
    //     });
    //   })
    //   .catch(err => {
    //     console.error("caught error!", err);
    //   });
  };

  setQuery = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  render() {
    const { data } = this.state;
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
              {/* <div className="input-wrap second">
                  <div className="input-field second">
                    <label>IN</label>
                    <div className="input-select">
                      <select data-trigger="" name="choices-single-defaul">
                        <option placeholder="">Section</option>
                        <option>Internships</option>
                        <option>Events</option>
                        <option>Mentors</option>
                        <option>Networking</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="input-wrap third">
                  <div className="input-field third">
                    <label>WHERE</label>
                    <div className="input-select">
                      <select data-trigger="" name="choices-single-defaul">
                        <option placeholder="">Region</option>
                        <option>Copenhagen</option>
                        <option>Odense</option>
                        <option>Aarhus</option>
                        <option>Aalborg</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}
              <button className="btn-search" type="submit">
                {/* <Link to={`/Search?q={}`} className="btn-search" type="submit"> */}
                SEARCH {/* </Link> */}
              </button>
            </div>
          </form>
        </div>

        {/* <SearchResults data={data} /> */}
      </>
    );
  }
}

export default withRouter(Search);
