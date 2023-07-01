import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Apicall from "./Apicall";
export default function FirstMain() {

    const inputRef = useRef(null);
    const [update, setUpdated] = useState('');

    const seachValue = () => {
        setUpdated(inputRef.current.value);

    }


    return (
        <div className="my-main-div">
            <div className="search-div">
                <input ref={inputRef} className="input-box" type="text" placeholder="Search GitHub username..." />
                <button onClick={seachValue} className="seach-btn" type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search</button>
            </div>
            <Apicall data={update} />
        </div>
    )



}