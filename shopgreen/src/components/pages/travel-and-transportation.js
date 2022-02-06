import React, { useEffect, useState } from "react";
import '../../App.css';
//import './travel-and-transportation.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function TravelAndTransportation() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('travel-and-transportation').then(res => res.json()).then(data => {
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

export default TravelAndTransportation;