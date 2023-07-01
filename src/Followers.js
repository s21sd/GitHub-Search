import React from "react";

export default function Followers(props) {
    const { mydata } = props;
    if (!mydata) {
        return null;
    }
    return (
        <div className="followers">

            <div className="repo">
                <p>Repos</p>
                <p>{mydata.public_repos}</p>
            </div>

            <div className="follow">
                <p>Followers</p>
                <p>{mydata.followers}</p>
            </div>

            <div className="followings">
                <p>Followings</p>
                <p>{mydata.following}</p>
            </div>
        </div>
    )
}