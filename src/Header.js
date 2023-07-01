import react, { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


export default function Header() {
    const [backgroundcolor, setbackgroundcolor] = React.useState(false);

    const toogleOnOff = () => {

        setbackgroundcolor(!backgroundcolor);

    }
    const applyBodyBackGround = () => {
        document.body.style.backgroundColor = backgroundcolor ? '#143f3f' : '#141c2f'
    }
    useEffect(() => {
        applyBodyBackGround();
    }, [backgroundcolor])

    return (
        <div className="header">
            <h4>GitSearch</h4>

            <div className="dark-light">
                <p className="light">{backgroundcolor?'Light':"Dark"}</p>
                <FontAwesomeIcon onClick={toogleOnOff} icon="fa-solid fa-sun" bounce {...backgroundcolor ? 'Disable Background' : 'Enable Background'} />
            </div>


        </div>

    )
}