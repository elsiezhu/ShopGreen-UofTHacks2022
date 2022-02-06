import React, { useEffect, useState } from "react";
import '../../App.css';
//import './fun.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function Fun() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('fun').then(res => res.json()).then(data => {
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

export default Fun;