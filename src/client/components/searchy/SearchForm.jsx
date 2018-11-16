import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    data: [],
    searchQuery: ""
  };
  

  componentDidMount = () => {
    debugger;

    fetch(`/api/search?q=${q}`)
      .then(res => res.json())
      .then(json => json);
  };

  search = async q => {
    const res = await fetch(``);
    const json = await res.json();
    return json;
  };

  setQuery = e => {
    this.setState({
      searchQuery: e.target.value,
      data: this.state.data
    });
  };

  async runSearch(e) {
    e.preventDefault();
    const data = await this.search(this.state.q);
    this.setState({ q: this.state.q, data });
  }

  updateField = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      searchQuery: value
    });
    debugger;
  };

  render() {
    debugger;
    return (
      <>
        <div className="search-container">
          <form onSubmit={}>
            <fieldset>
              <legend>WHAT ARE YOU LOOKING FOR?</legend>
            </fieldset>
            <div className="inner-form">
              <div className="left">
                <div className="input-wrap first">
                  <div className="input-field first">
                    <label>WHAT</label>
                    <input
                      type="text"
                      placeholder="ex: DIY, fair, workshop, internship"
                      name={"searchQuery"}
                      value={this.state.searchQuery}
                      onChange={this.updateField}
                    />
                  </div>
                </div>
                <div className="input-wrap second">
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
              </div>
              <button className="btn-search" type="button">
                <Link to={`/Search`} className="menuLink nav-link">
                  SEARCH{" "}
                </Link>
              </button>
            </div>
          </form>
        </div>
        {/* <SearchResults {...this.props} data={this.state.data} /> */}
        <p>{this.state.data}</p>
      </>
    );
  }
}

export default Search;
