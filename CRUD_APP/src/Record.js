import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPageChanging: false,
      isLoding: false,
      users: [],
      totalPage: 1,
      page: 1,
      error: null
    }
    this.paginationDisplay = this.paginationDisplay.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  pageChange(e) {
    this.setState({ isPageChanging: true });
    this.setState({ page: e.target.value }, () => this.getUserData());
  }

  paginationDisplay() {
    let obj = Array(this.state.totalPage).fill(0).map((btn, i) => btn = btn + i + 1);

    return obj.map((btn, i) =>
      <button value={i + 1} key={`btn${i + 1}`} className={(Number(this.state.page) === i + 1) ? "btn active" : "btn"} onClick={(e) => this.pageChange(e)}>{btn}</button >
    );
  }

  getUserData() {
    axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
      .then(rs => {
        console.log("response:::", rs);
        return rs;
      })
      .then(data => this.setState({ users: data.data.data, totalPage: data.data.total_pages, isLoding: false, isPageChanging: false }))
      .catch(error => this.setState({ error: error, isLoding: false, isPageChanging: false }))
  }

  componentDidMount() {
    this.setState({ isLoding: true });
    this.getUserData();
  }

  render() {
    const { users, error, isLoding } = this.state;
    console.log("RENDER");
    if (error) {
      return <p>{error.message}</p>
    }
    if (isLoding) {
      return <p>Please wait while we are fetching user detail...</p>
    }

    return (
      <React.Fragment>
        <div className="table">
          <div className="row">
            <div className="cell">
              <b>First Name</b>
            </div>
            <div className="cell">
              <b>Last Name</b>
            </div>
            <div className="cell">
              <b>Avatar</b>
            </div>
            <div className="cell">
              <b>Action</b>
            </div>
          </div>
          {users.map((user, i) =>
            <div className="row" key={`user${i + 1}`}>
              <div className="cell">
                {user.first_name}
              </div>
              <div className="cell">
                {user.last_name}
              </div>
              <div className="cell">
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className="cell">
                <ul>
                  <li><NavLink activeClassName="active" key={user.id} exact to={`/edit-user/${user.id}`}>Edit</NavLink></li>
                  <li> | </li>
                  <li><NavLink activeClassName="active" exact to="/delete-user">Delete</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="pagination">
          {this.paginationDisplay()}
        </div>{(this.state.isPageChanging) ? <p>Fetching data...</p> : <p></p>}
      </React.Fragment>
    );
  }
}

export default Record;