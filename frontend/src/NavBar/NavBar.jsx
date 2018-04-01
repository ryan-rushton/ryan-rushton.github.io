import React from 'react';
import FontAwesome from 'react-fontawesome';
import logo from '../static/RR_Logo_Outlined.svg';
import './NavBar.css';

const LOGO_HEIGHT = 70;
const LOGO_WIDTH = 100;

const NavBar = () => {
    const generateLogoLink = () => (
        <a href="/" className="rr-navbar-link rr-navbar-home-link">
            <img
                className="rr-navbar-logo"
                src={logo}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                alt="logo"
            />
        </a>);

    const githubNavbar = (
        <a href="https://github.com/rushton3179/personal-site" className="rr-navbar-link rr-navbar-right-link">
            <div className="rr-navbar-github">
                <FontAwesome name="github" size="2x" />
            </div>
        </a>);

    const mailNavbar = (
        <a href="mailto:ryan.rushton79@gmail.com" className="rr-navbar-link rr-navbar-right-link">
            <div className="rr-navbar-mail">
                <FontAwesome name="envelope-o" size="2x" />
            </div>
        </a>);

    return (
        <div className="rr-navbar">
            <div className="rr-navbar-content">
                <div className="rr-navbar-flexitem" />
                <div className="rr-navbar-flexitem">
                    <div className="rr-navbar-item">
                        {generateLogoLink()}
                    </div>
                </div>
                <div className="rr-navbar-flexitem">
                    <div className="rr-navbar-item">
                        <div className="rr-navbar-right-links">
                            {githubNavbar}
                            {mailNavbar}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
