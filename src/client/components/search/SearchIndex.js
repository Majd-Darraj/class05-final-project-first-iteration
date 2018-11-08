import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import SearchForm from "./SearchForm";
import Results from "./results/Results";
import SearchFetch from "./SearchFetch";

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
      q: e.target.value,
      data: this.state.data
    });
  }

  async runSearch(e) {
    e.preventDefault();
    const data = SearchFetch(this.setQuery.q);
    this.setState({
      q: this.state.q,
      data
    });
  }

  render() {
    return (
      <>
        <h1>search</h1>
        {/* <SearchForm
          onSubmit={e => this.runSearch(e)}
          onChange={e => this.setQuery(e)}
        /> */}
        <Results results={this.state.data} />
      </>
    );
  }
}

export default Search;
