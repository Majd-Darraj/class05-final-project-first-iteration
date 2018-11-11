import React, { Component } from "react";

class Search extends Component {
  state = { search: "majd" };

  updateSearch = keyWord => {
    this.setState({
      search: keyWord.target.value
    });
  };

  render() {
    return (
      <>
        <div className="search-container">
          <form>
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
                      value={this.state.search}
                      onChange={this.updateSearch}
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
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
