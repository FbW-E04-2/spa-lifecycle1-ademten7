import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import About from "./components/About";

class App extends Component {
  state = {
    searchTerm: "",
    lastSearchTerm: "",
    currentPage: "search",
  };
  switchToAboutPage = () => {
    this.setState({ currentPage: "about" });
  };
  switchToSearchResult = () => {
    this.setState({ currentPage: "search" });
  };

  render() {
    console.log(this.state.searchTerm);
    console.log(this.state.lastSearchTerm);

    return (
      <div className="container">
        <Header
          switchToAboutPage={this.switchToAboutPage}
          switchToSearchResult={this.switchToSearchResult}
        />

        {this.state.currentPage === "search" ? (
          <>
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
          </>
        ) : (
          <About />
        )}
      </div>
    );
  }
}

export default App;
