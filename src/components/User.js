import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th className scope="col">
            Id
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
    );
  }
}
