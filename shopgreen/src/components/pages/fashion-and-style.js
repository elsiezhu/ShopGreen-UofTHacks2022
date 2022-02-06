import React, { useEffect, useState } from "react";
import '../../App.css';
//import './fashion-and-style.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function FashionAndStyle() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('fashion-and-style').then(res => res.json()).then(data => {
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

export default FashionAndStyle;