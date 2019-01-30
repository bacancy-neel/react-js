import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import API from './API';
import { deleteUser, getAllUser } from '../ApiCalls/apiCalls'

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoding: false,
      usersList: {
        data: [],
        page: 1,
        per_page: 3,
        total: 12,
        total_pages: 4
      },
    }
    this.paginationDisplay = this.paginationDisplay.bind(this);
    //this.getUserData = this.getUserData.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(num) {
    this.setState({ isLoding: true });
    getAllUser(num)
      .then(data => this.setState({
        usersList: data,
        isLoding: false
      }))
      .catch(error => {
        console.log(error);
        this.setState({ isLoding: false });
      })
  }

  paginationDisplay() {
    return Array(this.state.usersList.total_pages).fill(0).map((btn, i) =>
      <button value={i + 1}
        key={`btn${i + 1}`}
        className={(Number(this.state.usersList.page) === i + 1) ? "btn active" : "btn"}
        disabled={(Number(this.state.usersList.page) === i + 1) ? true : false}
        onClick={() => this.pageChange(i + 1)}> {btn + i + 1}</button >
    );
  }

  // getUserData() {
  //   this.setState({ isLoding: true });
  //   API.get(`users?page=${this.state.page}`)
  //     .then(rs => {
  //       console.log("response:::", rs);
  //       return rs;
  //     })
  //     .then(data => this.setState({ users: data.data.data, totalPage: data.data.total_pages, isLoding: false, isPageChanging: false }))
  //     .catch(error => this.setState({ error: error, isLoding: false, isPageChanging: false }))
  // }

  handleClick() {
    deleteUser(this.props.match.params.id);
  }

  componentDidMount() {
    this.pageChange(this.state.usersList.page);
    // apiCall(`users?page=1`).getUserData()
    //   .then(data => this.setState({
    //     userList: data,
    //     isLoding: false
    //   }))
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ isLoding: false })
    //   });
  }

  render() {
    const { usersList, isLoding } = this.state;
    if (isLoding && usersList.data.length === 0) {
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

          {usersList.data.map((user, i) =>
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
                  <li><NavLink
                    activeClassName="active"
                    key={user.id}
                    exact to={`/edit-user/${user.id}`}>Edit</NavLink></li>
                  <li> | </li>
                  <li><NavLink
                    activeClassName="active"
                    exact to={`/delete-user/${user.id}`}
                    onClick={this.handleClick.bind(this)}>Delete</NavLink></li>
                </ul>
              </div>
            </div>
          )}

        </div>
        <div className="pagination">
          {this.paginationDisplay()}
        </div>{(isLoding && usersList.data.length !== 0) ? <p>Fetching data...</p> : <p></p>}
      </React.Fragment>
    );
  }
}

export default Record;