import React, { Component } from 'react';

import Pagination from "react-js-pagination";

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageChange: false,
            isLoding: false,
            users: [],
            page: (props.match.params.id) || 1,
            error: null
        }
        this.getUsersData = this.getUsersData.bind(this);
        this.getUsersData = this.getUsersData.bind(this);
    }
    getUsersData() {
        fetch(`https://reqres.in/api/users?page=${this.state.page}`)
            // .then(rs => {
            //   return rs.json();
            // })
            .then(rs => {
                if (rs.ok) {
                    console.log("response:::", rs.clone().json());
                    return rs.json();
                }
                else {
                    throw new Error("Something went wrong");
                }
            })
            .then(data => this.setState({ users: data.data, isLoding: false, pageChange: false }))
            .catch(error => this.setState({ error: error, isLoding: false, pageChange: false }))
    }
    handlePageChange(pageNum) {
        this.setState({ page: pageNum });
        this.getUsersData();
    }
    componentDidMount() {
        this.setState({ isLoding: true });
        this.getUsersData();
    }

    render() {
        const { users, error, isLoding } = this.state;

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
                    {users.map(user =>
                        <div className="row">
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
                                <button>Edit</button><button>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pagination">
                    <Pagination
                        activePage={this.state.activePage}
                        totalItemsCount={12}
                        pageRangeDisplayed={4}
                        onChange={this.handlePageChange}
                    />
                </div>

            </React.Fragment>
        );
    }
}

export default Record;