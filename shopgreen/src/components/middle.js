import React from 'react';
import '../App.css';
import {Button} from "./Button";
import './middle.css';

function Middle() {
    return (
        <div className={'middle-container'}>
            {/*<><img src={'//images/background_bikeflowers.jpg'}/></>*/}
            <h1>Shop Green</h1>
            <p>Toronto businesses that support the city's Live Green efforts.</p>
            <div className={"hero-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--large'}
                >GET STARTED</Button>
            </div>
        </div>
    );
}

export default Middle;