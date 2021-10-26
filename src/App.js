import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResults from "./components/SearchResults";

class App extends Component {
  state = {
    searchTerm: "",
    lastSearchTerm: "",
  };

  render() {
    console.log(this.state.searchTerm);
    console.log(this.state.lastSearchTerm);

    return (
      <div className="container">
        <h1 className="header">User Search</h1>
        <div className="search">
          <input
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            type="text"
            placeholder="Enter Search Term"
          />
          <button
            onClick={() =>
              this.setState({ lastSearchTerm: this.state.searchTerm })
            }
          >
            Search
          </button>
        </div>

        <SearchResults searchFor={this.state.lastSearchTerm} />
      </div>
    );
  }
}

export default App;
