import React, { useEffect, useState } from "react";
import '../../App.css';
//import './home-and-garden.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function HomeAndGarden() {
    const [response, setResponse] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('home-and-garden').then(res => res.json()).then(data => {
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

export default HomeAndGarden;