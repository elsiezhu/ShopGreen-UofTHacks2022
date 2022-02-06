import React, { useEffect, useState } from "react";
import '../../App.css';
//import './health-and-beauty.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function HealthAndBeauty() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('health-and-beauty').then(res => res.json()).then(data => {
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

export default HealthAndBeauty;