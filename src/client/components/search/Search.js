import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: [] };
  }
  render() {
    return (
      <>
        <div class="search-container">
          <form>
            <fieldset>
              <legend>WHAT ARE YOU LOOKING FOR?</legend>
            </fieldset>
            <div class="inner-form">
              <div class="left">
                <div class="input-wrap first">
                  <div class="input-field first">
                    <label>WHAT</label>
                    <input
                      type="text"
                      placeholder="ex: DIY, fair, workshop, internship"
                    />
                  </div>
                </div>
                <div class="input-wrap second">
                  <div class="input-field second">
                    <label>IN</label>
                    <div class="input-select">
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
                <div class="input-wrap third">
                  <div class="input-field third">
                    <label>WHERE</label>
                    <div class="input-select">
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
              <button class="btn-search" type="button">
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
