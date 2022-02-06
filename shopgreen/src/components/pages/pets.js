import React, { useEffect, useState } from "react";
import '../../App.css';
//import './pets.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function Pets() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('pets').then(res => res.json()).then(data => {
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

export default Pets;