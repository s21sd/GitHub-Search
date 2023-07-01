
import React from "react";

export default function Name(props) {
    const { mydata } = props;
    if (!mydata) {
        return null;
    }


    return (
        <div className="name">
            <p>{mydata.name}</p>
            <div className="date">

                <p>Joined {mydata.created_at.substring(0, 10)}</p>
            </div>

        </div>
    )
}