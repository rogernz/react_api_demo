import React, { Component } from 'react';
import FindInput from './FindInput';
import api from './github_api';
import UserList from './UserList'


class FindUsers extends Component {
    constructor() {
        super();
        this.findUsername = this.findUsername.bind(this);

        this.findUsername('roger');

    }
    findUsername(findText) {
        api.findUsers(findText)
            .then((res) => {
                let users = res.items;
                console.log('FindUsers.findUsername()', users);
                this.props.onSearch(users);
            })
            .catch((error) => console.log('Oops! . There Is A Problem', error));
    }

    render() {
        console.log('this.state.user.id find user:' + this.props.activeUserId);
        return (
            <div >
                <FindInput
                    onSubmit={this.findUsername}
                />
                <UserList
                    activeUserId={this.props.activeUserId}
                    users={this.props.users}
                    onUserClick={this.props.onUserClick}
                />
                <div />
                <div />
            </div>


        );
    }
}
FindUsers.defaultProps = {
    users: [],
}
export default FindUsers;
