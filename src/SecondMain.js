import React from "react";
import Name from "./Name";
import Bio from "./Bio";
import Followers from "./Followers";
import Links from "./Links";
export default function SecondMain(props) {
    const { mydata } = props;
    if (!mydata) {
        return null;
    }
    console.log(mydata.avatar_url);
    return (
        <div className="second-div">
            <div className="img-div">
                <img src={mydata.avatar_url} alt="profile" />
            </div>
            <div>
                <Name mydata={mydata} />
                <Bio mydata={mydata} />
                <Followers mydata={mydata} />
                <Links mydata={mydata} />
            </div>
        </div>
    )
}