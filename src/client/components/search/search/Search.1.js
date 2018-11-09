import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.setQuery.bind(this);
    this.setState.bind(this);
    this.runSearch.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      q: "",
      data: []
    });
  };

  setQuery(e) {
    this.setState({
      q: e.target.value
    });
  }

  async runSearch(e) {
    e.preventDefault();
    this.setState({
      q: this.state.q
    });
  }

  render() {
    let searchKeyword = this.state.q;
    return (
      <>
        <div className="search-container">
          <form onSubmit={e => this.runSearch(e)}>
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
                      // value={this.state.search}
                      onChange={e => this.setQuery(e)}
                      name="q"
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
              <Link type="submit" to="/search" className="btn-search">
                Search
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Search;