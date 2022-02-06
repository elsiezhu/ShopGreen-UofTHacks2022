import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //display button depending on screen size
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={"navbar"}>
                <div className={"navbar-container"}>
                    {/*logo icon that links back to home*/}
                    {/*clicking on logo should close the pop up menu*/}
                    <Link to={"/"} className={"navbar-logo"} onClick={closeMobileMenu}>
                        ShopGreen <i className={'fab fa-typo3'} />
                    </Link>
                    {/*hamburger menu that doesn't work*/}
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to={'/about'} className={'nav-links'} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/ourcause'} className={'nav-links'} onClick={closeMobileMenu}>
                                Our Cause
                            </Link>
                        </li>
                        {/*<li className={'nav-item'}>*/}
                        {/*    <Link to={'/businesses'} className={'nav-links'} onClick={closeMobileMenu}>*/}
                        {/*        Businesses*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className={'nav-item'}>
                            <Link to={'/contact'} className={'nav-links'} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>
                        <Link to={'/categories'} className={'nav-button'} onClick={closeMobileMenu}>
                            GET STARTED
                        </Link>
                    </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar