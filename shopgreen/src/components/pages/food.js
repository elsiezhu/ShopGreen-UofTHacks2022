import React, { useEffect, useState } from "react";
import '../../App.css';
//import './food.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function Food() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('food').then(res => res.json()).then(data => {
         setResponse(data.response);
       });
     }, []);

    return (
        <>
            <Navbar />
            {response}
        </>

    );
}

export default Food;