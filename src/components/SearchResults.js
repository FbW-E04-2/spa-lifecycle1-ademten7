import React, { Component } from 'react';
import User from './User';

class SearchResults extends Component {
    
    state = {
        users: [ ]
    }
       //lifecyle method componentDidMount fetch data from server once component loaded.
       componentDidMount() {
        this.fetchDataFromApi()
    }
      //created function to fetch data from API
      fetchDataFromApi=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            this.setState({users:data})
        }).catch(err=>console.log(err.message))
    }

    lastSearchFor = null;

    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate...');
        
        if(nextProps.searchFor === this.lastSearchFor) {
          console.log('The new searchTerm is equal to the last searchTerm. Do not re-render.');
          return false;
        }
        else {
          console.log('The new searchTerm differs to the last searchTerm. Re-render.');
          this.lastSearchFor = nextProps.searchFor;
          return true;
        }
      }

    render() {
        
        const searchForLower = new String(this.lastSearchFor).toLowerCase();
        return (
            <div className="results">
                <table>
                <thead>
                    <tr> 
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                     </tr> 
                </thead>
                <tbody> 
                {this.state.users && this.state.users
                .filter(user => user.name.toLowerCase().includes(searchForLower) || user.email.toLowerCase().includes(searchForLower))
                .map(
                    (user) => <User key={user.id} id={user.id} name={user.name} email={user.email} />
                )}
                </tbody>
                </table>
            </div>
        )
    }
}

export default SearchResults;