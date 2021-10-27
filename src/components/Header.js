import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header">
          User Search
          <div>
            <Link to="/">
              <span>Search</span>
            </Link>
            |{" "}
            <Link to="/about">
              <span>About</span>
            </Link>
          </div>
        </h1>
      </div>
    );
  }
}
