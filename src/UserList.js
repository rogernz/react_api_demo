import React, { Component } from 'react';
import reactDom from 'react-dom';
import './UserList.css'

class UserList extends Component {

    render() {
        let onUserClick = this.props.onUserClick;
        let activeUserId = this.props.activeUserId;


        return (
            <ul className="mdl-list scroll">
                {
                    this.props.users.map(
                        (user, index) => {
                            let active = activeUserId === user.id ? 'active' : '';
                            return (

                                <li className={`mdl-list__item ${active}`}
                                    onClick={() => onUserClick(user)}
                                    key={index}>
                                    <span className="mdl-list__item-primary-content" >
                                        <img className="mdl-list__item-avatar" src={user.avatar_url} alt={user.login} />
                                        <span>{user.login}</span>
                                        <span>{user.id}</span>
                                    </span>
                                </li>

                            )
                        })
                }
            </ul>
        )


    }
}
UserList.defaultProps = {
    users: [],
    onUserClick: (user) => console.log(user),
    activeUserId: ''
}
export default UserList;
