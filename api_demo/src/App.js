import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoding: false,
      users: [],
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoding: true });

    fetch("https://reqres.in/api/users?page=1")
      // .then(rs => {
      //   return rs.json();
      // })
      .then(rs => {
        debugger
        if (rs.ok) {
          return rs.json();
        }
        else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => this.setState({ users: data.data, isLoding: false }))
      .catch(error => this.setState({ error: error, isLoding: false }))
  }


  render() {
    const { users, isLoding, error } = this.state;

    if (error) {
      return (
        <p>{error.message}</p>
      );
    }
    if (isLoding) {
      return (
        <p>Loding...</p>
      );
    }
    return (
      <ul>
        {users.map(user => (
          <li>{user.first_name}  {user.last_name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
