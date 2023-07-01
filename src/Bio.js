import React from "react";

export default function Bio(props) {
    const { mydata } = props;
    if (!mydata) {
        return null;
    }
    return (
        <p className="bio">{mydata.bio != null ? mydata.bio : "This profile has no bio"}</p>

    )
}