import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Links(props) {

    const { mydata } = props;

    return (
        <div className="links-div">
            <div className="icon1-div">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" beat />
                <p className="link-p">{mydata.location != null ? mydata.location : "Not Available"}</p>
            </div>
            <div className="icon2-div">
                <FontAwesomeIcon icon="fa-solid fa-user" beat />
                <p className="link-p">{mydata.twitter_username != null ? mydata.twitter_username : "Not Available"}</p>

            </div>
            <div className="icon3-div">
                <FontAwesomeIcon icon="fa-solid fa-link" beat />
                <p className="link-p">{mydata.url != null ? mydata.url : "Not Available"}</p>
            </div>
            <div className="icon4-div">
                <FontAwesomeIcon icon="fa-solid fa-building" beat />
                <p className="link-p">{mydata.company != null ? mydata.company : "Not Available"}</p>
            </div>



        </div>
    )
}