import React from "react";
import '../../App.css';
import './categories.css';
import Navbar from '../navbar';
import {Button} from "../Button";

function Categories() {
    return (
        <>
            <Navbar />
            <p>I'm looking for...</p>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Health & Beauty</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Travel & Transportation</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Food</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Renewable Energy</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Fashion & Style</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Home & Garden</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Fun</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Pets</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Kids</Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >Specialty & Other</Button>
            </div>
        </>

    );
}

export default Categories;