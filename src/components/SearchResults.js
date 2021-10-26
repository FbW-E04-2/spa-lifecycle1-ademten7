import React, { Component } from "react";
import User from "./User";

export default class SearchResults extends Component {
  state = {
    users: [],
  };

  //steo:3
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ users: result });
        console.log(this.state.users);
      });
  }

  //step :4
  static getDerivedStateFromProps(nextProps, nextState) {
    let filteredUsers = nextState.users.filter((user) => {
      return (
        user.name.includes(nextProps.searchFor) ||
        user.email.includes(nextProps.searchFor)
      );
    });
    return { users: filteredUsers };
  }

  shouldComponentUpdate(nextProps, nextState) {
    //continue from here
  }

  render() {
    return (
      <div>
        <table className="table table-success table-striped">
          <User />
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
