import React from "react";
import PropTypes from "prop-types";
import NavBarSubmenuPresentation from "./NavBarSubmenuPresentation";
import "./css/NavBar.css";

const generateLogoLink = (logo, height, width) => (
    <a href="/" className="rr-navbar-link rr-navbar-home-link">
        <img
            className="rr-navbar-logo"
            src={logo}
            width={width}
            height={height}
            alt=""
        />
    </a>
);

const NavBarPresentation = props => {
    const {
        logo,
        logoHeight,
        logoWidth,
        dropdownVisible,
        onDropdownClick
    } = props;

    return (
        <div className="rr-navbar">
            <div className="rr-navbar-content">
                <div className="rr-navbar-flexitem" />
                <div className="rr-navbar-flexitem">
                    <div className="rr-navbar-item">
                        {generateLogoLink(logo, logoHeight, logoWidth)}
                    </div>
                </div>
                <div className="rr-navbar-flexitem">
                    <div className="rr-navbar-item">
                        <div className="rr-navbar-right-links">
                            <NavBarSubmenuPresentation
                                dropdownVisible={dropdownVisible}
                                onDropdownClick={onDropdownClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NavBarPresentation.propTypes = {
    logo: PropTypes.node.isRequired,
    logoHeight: PropTypes.number.isRequired,
    logoWidth: PropTypes.number.isRequired,
    dropdownVisible: PropTypes.bool.isRequired,
    onDropdownClick: PropTypes.func.isRequired
};

export default NavBarPresentation;
