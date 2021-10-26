import React, { Component } from "react";
import User from "./User";

export default class SearchResults extends Component {
  state = {
    users: [],
    allUsers: [],
  };

  refresh = () => {
    this.setState({ users: this.state.allUsers });
  };

  //step:3
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ users: result, allUsers: result });
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

  /*
Task 5: Only search again, if the searchterm differs
The goal of this task is to minimize the number of searches. 
Therefore, you only re- render the SearchResults component 
if the new searchFor-prop is different from the last one.
*/

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.allUsers);
    console.log("***** render");
    return (
      <div>
        <table className="table table-primary table-striped">
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
        <button onClick={this.refresh}>Refresh</button>
      </div>
    );
  }
}
