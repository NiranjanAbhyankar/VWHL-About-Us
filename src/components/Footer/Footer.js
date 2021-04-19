import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className = "footer">
            <div className = "footer__options">
                <div className = "footer__options__line1">
                    <Link to = {"/"}>
                        <div className = "footer__option">
                            THE UFFIZI DIGITIZATION PROJECT
                        </div>
                    </Link>
                    <Link to = {"/"}>
                        <div className = "footer__option">
                            VIRTUAL MERIDIAN OF AUGUSTUS PROJECT
                        </div>
                    </Link>
                    <Link to = {"/"}>
                        <div className = "footer__option">
                            THE DIGITAL ATZOMPA PROJECT
                        </div>
                    </Link>
                </div>
                <div className = "footer__options__line2">
                    <Link to = {"/"}>
                        <div className = "footer__option">
                            DIGITAL HADRIAN'S VILLA PROJECT
                        </div>
                    </Link>
                    <Link to = {"/"}>
                        <div className = "footer__option">
                            THE DIGITAL SCULPTURE PROJECT
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
