import React, { useState } from 'react';
import logo from "../../assets/logo.png";

import { StyledHeader } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const showNav = () => {
        setIsNavExpanded(!isNavExpanded);

    };

    return (
        <StyledHeader>


            <div className="logoContainer">
                <img src={logo} className="logo-img" alt="logo" />
            </div>
            {/* nav 1 desktop tablets and above */}
            <nav className="desktopNav">
                <NavLink className="nav-links" to="/">Home</NavLink>
                <NavLink className="nav-links" to="/places">Place to stay</NavLink>
                <NavLink className="nav-links" to="/">NFTs</NavLink>
                <NavLink className="nav-links" to="/">Community</NavLink>
                <button className="connect-btn">Connect Wallet</button>
            </nav>



            {/* hamburger */}
            {isNavExpanded ? (
                //close button
                <FontAwesomeIcon className="icon hamburger" icon="fa fa-times" aria-hidden="true" onClick={() => { showNav() }} />
            ) : (
                <FontAwesomeIcon className="icon bars" icon="fa fa-bars" aria-hidden="true" onClick={() => { showNav() }} />
            )}


            {/* nav 2 mobile tablets and above */}
            {isNavExpanded &&
                <nav className="mobileNav">
                    <NavLink className="nav-links" to="/">Home</NavLink>
                    <NavLink className="nav-links" to="/places">Place to stay</NavLink>
                    <NavLink className="nav-links" to="/">NFTs</NavLink>
                    <NavLink className="nav-links" to="/">Community</NavLink>
                    <button className="connect-btn">Connect Wallet</button>
                </nav>

            }


        </StyledHeader>
    )
}

export default Header