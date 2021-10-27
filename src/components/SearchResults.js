import React, { Component } from "react";
import User from "./User";

export default class SearchResults extends Component {
  state = {
    users: [],
    allUsers: [],
    fetchData: false,
  };

  refresh = () => {
    this.setState({ users: this.state.allUsers });
  };

  //step:3
  //onload
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ fetchData: true, users: result, allUsers: result });
      });
  }

  //step :4
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   let filteredUsers = nextState.users.filter((user) => {
  //     return (
  //       user.name.includes(nextProps.searchFor) ||
  //       user.email.includes(nextProps.searchFor)
  //     );
  //   });
  //   return { users: filteredUsers };
  // }

  /*
Task 5: Only search again, if the search term differs
The goal of this task is to minimize the number of searches. 
Therefore, you only re- render the SearchResults component 
if the new searchFor-prop is different from the last one.
*/

  //same data
  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.fetchData) {
      return true;
    } else {
      if (
        nextProps.searchFor !== this.props.searchFor &&
        nextProps.searchFor !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  render() {
    console.log(this.props.searchFor, "here is props");
    // console.log(this.state.users);
    // console.log(this.state.allUsers);
    console.log("*****   render   ************");
    let filteredUsers = this.state.users.filter((user) => {
      return (
        user.name.includes(this.props.searchFor) ||
        user.email.includes(this.props.searchFor)
      );
    });

    return (
      <div>
        <table className="table table-primary table-striped">
          <User />
          <tbody>
            {filteredUsers.map((user) => {
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
        {/* <button onClick={this.refresh}>Refresh</button> */}
      </div>
    );
  }
}
