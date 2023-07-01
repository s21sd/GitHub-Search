import Name from "./Name";
import Bio from "./Bio";
import react, { useState, useEffect } from "react"
import axios from "axios"
import SecondMain from "./SecondMain";

export default function Apicall(props) {

    // console.log(props.data);
    const { data } = props;
    const [user, setUser] = useState('');


    useEffect(() => {
        if (data) {
            axios.get(`https://api.github.com/users/${data}`)
                .then((res) => {
                    setUser(res.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }, [data])


    return (
        <div>
            <SecondMain mydata={user} />
           
        </div>
    )


}