import React, { Component } from 'react';
import api from './github_api';

import FindUsers from './FindUsers'
import UserDetail from './UserDetail'
import Background from './Background'
import './MainApp.css'
class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            userName: null,
            user: {}
        }
        this.updateUsers = this.updateUsers.bind(this);
        this.onUserClick = this.onUserClick.bind(this);
        //default
        this.fetchProfile('roger');
    }
    updateUsers(users) {
        console.log('in update', users);
        this.setState({
            users: users
        });
    }
    onUserClick(user) {
        console.log('onUserClick', user);
        this.fetchProfile(user.login);
        this.setState({
            username: user.login
        });
    }
    fetchProfile(username) {
        console.log('fetchProfile', username);
        if (!username) {
            return;
        }

        api.getUser(username)
            .then((data) => {
                console.log('getUser', data);
                this.setState({
                    user: data
                });
            })
            .catch((error) => console.log('Oops! . There Is A Problem'));
    }
    render() {
        console.log('this.state.user.id:' + this.state.user.id);
        return (

            <div className="mdl-grid">

                <div className="mdl-cell mdl-cell--4-col mdl-shadow--2dp" >
                    <div className="header">
                        <span className="mdl-layout-title">Find GitHub Users</span>
                    </div>
                    <FindUsers
                        users={this.state.users}
                        activeUserId={this.state.user.id}
                        onSearch={this.updateUsers}
                        onUserClick={this.onUserClick}


                    />
                </div>

                <div className="mdl-cell mdl-cell--8-col" >
                    <UserDetail
                        user={this.state.user}
                    />
                </div>

                <Background />

            </div>

        );
    }
}

export default App;
