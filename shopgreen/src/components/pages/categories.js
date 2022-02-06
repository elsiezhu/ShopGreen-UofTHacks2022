import React from "react";
import '../../App.css';
import './categories.css';
import Navbar from '../navbar';
import {Button} from "../Button";
import {Link} from 'react-router-dom';

function Categories() {
    return (
        <>
            <Navbar />
            <p>I'm looking for...</p>

                <div className={"category-btns"}>
                    <Button className={'btns'}
                            buttonStyle={'btn--outline'}
                            buttonSize={'btn--medium'}
                    ><Link to={'/health-and-beauty'}>
                    Health & Beauty
                    </Link>
                    </Button>
                </div>

            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/travel-and-transportation'}>
                Travel & Transportation</Link></Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/food'}>
                Food
                </Link>
                </Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/fashion-and-style'}>
                Fashion & Style
                </Link>
                </Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/home-and-garden'}>
                Home & Garden
                </Link>
                </Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/fun'}>
                Fun
                </Link>
                </Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/pets'}>
                Pets
                </Link>
                </Button>
            </div>
            <div className={"category-btns"}>
                <Button className={'btns'}
                        buttonStyle={'btn--outline'}
                        buttonSize={'btn--medium'}
                >
                <Link to={'/kids'}>
                Kids</Link></Button>
            </div>
        </>

    );
}

export default Categories;