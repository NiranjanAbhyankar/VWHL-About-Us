import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import vwhl_logo from "../../images/vwhl_logo.jpg"

function Header() {
    
    return (
        <div className = "header">
            <img src = {vwhl_logo} alt = "logo" />
            <div className = "header__options">
                <Link to = {"/"}>
                    <div className = "header__option">
                        HOME
                    </div>
                </Link>
                <Link to = {"/"}>
                    <div className = "header__option">
                        ABOUT
                    </div>
                </Link>
                <Link to = {"/"}>
                    <div className = "header__option">
                        MEDIA
                    </div>
                </Link>
                <Link to = {"/"}>
                    <div className = "header__option">
                        PROJECTS
                    </div>
                </Link>
                <Link to = {"/"}>
                    <div className = "header__option">
                        JOURNAL
                    </div>
                </Link>
                <Link to = {"/"}>
                    <div className = "header__option">
                        NEWS
                    </div>
                </Link>
            </div>
            <Link to = {"/"}>
                    <div className = "header__option">
                        <button class="button">CONTACT US</button>
                    </div>
            </Link>
            <Link to = {"/"}>
                <div className = "header__center">
                    ABOUT US
                </div>
            </Link>
          
        </div>
    )
}

export default Header