import React from "react";
import '../../App.css';
import './pages.css';
import Navbar from '../navbar';
//import {Button} from "../Button";

function About() {
    return (
        <>
            <Navbar />
            <div className={'text-container'}>
                <h1>
                    About
                </h1>
                <p>
                    This website was created as part of our project for UofTHacks IX 2022.
                </p>
                <p>
                    You can find all the source code for the project at this repository:
                </p>
                <h3>
                    About the Devs:
                </h3>
            </div>
        </>

    );
}

export default About;