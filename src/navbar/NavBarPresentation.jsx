import React from 'react';
import PropTypes from 'prop-types';
import NavBarSubmenuPresentation from './NavBarSubmenuPresentation';
import './css/NavBar.css';

const generateLogoLink = (logo, height, width) => (
    <a href="/" className="rr-navbar-link rr-navbar-home-link">
        <img
            className="rr-navbar-logo"
            src={logo}
            width={width}
            height={height}
            alt=""
        />
    </a>);

const NavBarPresentation = (props) => (
    <div className="rr-navbar">
        <div className="rr-navbar-content">
            <div className="rr-navbar-flexitem" />
            <div className="rr-navbar-flexitem">
                <div className="rr-navbar-item">
                    {generateLogoLink(props.logo, props.logoHeight, props.logoWidth)}
                </div>
            </div>
            <div className="rr-navbar-flexitem">
                <div className="rr-navbar-item">
                    <div className="rr-navbar-right-links">
                        <NavBarSubmenuPresentation
                            dropdownVisible={props.dropdownVisible}
                            onMouseHover={props.onSubmenuMouseHover}
                            onMouseLeave={props.onSubmenuMouseLeave}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

NavBarPresentation.propTypes = {
    logo: PropTypes.node.isRequired,
    logoHeight: PropTypes.number.isRequired,
    logoWidth: PropTypes.number.isRequired,
    dropdownVisible: PropTypes.bool.isRequired,
    onSubmenuMouseHover: PropTypes.func.isRequired,
    onSubmenuMouseLeave: PropTypes.func.isRequired,
}

export default NavBarPresentation;