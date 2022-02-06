import React from "react";
import '../../App.css';
import './pages.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function OurCause() {
    return (
        <>
            <Navbar />
            <div className={'text-container'}>
                <h1>
                    Our Cause
                </h1>
                <p>
                    In 2021, the United Nations said that climate change is the biggest threat to our world as we know it.
                    We as people have the power to shape the world and try to fight this.
                    At ShopGreen, our mission is to provide individuals with environmentally conscious businesses
                    in an easy-to-use fashion. Simply select the type of business you need and give a location to be
                    given a list of nearby businesses which are part of the City of Toronto’s “Live Green Toronto” program.
                </p>
            </div>
        </>

    );
}

export default OurCause;