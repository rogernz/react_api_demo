import React, { Component } from 'react';

import './UserDetail.css';

class UserDetail extends Component {
    constructor() {
        super();


    }

    render() {
        const { user } = this.props;
        return (

            <div className=" profile-card mdl-card  mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <a href={user.html_url} target="_blank"><img className="avatar" src={user.avatar_url} /></a>
                    <h2 className="mdl-card__title-text">{user.name} || {user.login}</h2>
                </div>


                <div className="mdl-card_supporting-text">
                    <div className="mdl-card__subtitle-text profile-location">{user.location}</div>
                    <div className="profile-details" >
                        <li className="profile-details_li"><div>followers</div><div>{user.followers}</div></li>
                        <li className="profile-details_li"><div>following</div><div>{user.following}</div></li>
                        <li className="profile-details_li"><div>repos</div><div>{user.public_repos}</div></li>
                    </div>
                </div>
            </div>

        );
    }
}

export default UserDetail;
