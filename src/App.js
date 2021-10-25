import React, { Component } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import About from './components/About';
import './App.scss';

class App extends Component {
  
  state = {
    searchTerm: '',
    lastSearchTerm: '',
    currentPage: 'search'
  }
  
  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleOnClick = () => {
    this.setState({
      lastSearchTerm: this.state.searchTerm
    });
  }

  
  navigate = (page) => {
    // only re-render if the page is a new page
    if(page !== this.state.currentPage) {
      this.setState({
        searchTerm: '', // reset this
        currentPage: page
      });
    }
  }

  render() {
    return (
      <div>
        <Header navigationHandler={this.navigate} />
        <div className="main">
          { this.state.currentPage === 'search' &&
            <React.Fragment>
              <div className="search">
                <input type="text" 
                      placeholder="Enter Searchterm" 
                      value={this.state.searchTerm} 
                      onChange={this.handleOnChange} 
                />
                <button onClick={this.handleOnClick}>Search</button>
              </div>
              <SearchResults searchFor={this.state.lastSearchTerm} />
            </React.Fragment>
          }
          { this.state.currentPage === 'about' && 
            <About />
          }
        </div>
      </div>
    );
  }
}

export default App;
