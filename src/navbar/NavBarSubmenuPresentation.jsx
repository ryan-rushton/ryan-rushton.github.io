import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/NavBarSubmenu.scss";

const renderGithubIcon = () => (
    <div className="rr-navbar-github rr-navbar-link">
        <a
            href="https://github.com/rushton3179/personal-site"
            className="rr-navbar-link rr-navbar-right-link"
        >
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
);

const renderMailIcon = () => (
    <div className="rr-navbar-mail rr-navbar-link">
        <a
            href="mailto:ryan.rushton79@gmail.com"
            className="rr-navbar-link rr-navbar-right-link"
        >
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </div>
);

const renderHeader = onDropdownClick => (
    <div className="rr-navbar-dropdown-header">
        <div
            className="rr-navbar-bars rr-navbar-link"
            onClick={onDropdownClick}
            onKeyPress={onDropdownClick}
            role="button"
            tabIndex="0"
        >
            <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
);

const renderDropdown = () => (
    <div className="rr-navbar-dropdown">
        {renderGithubIcon()}
        {renderMailIcon()}
    </div>
);

const NavBarSubmenuPresentation = ({ dropdownVisible, onDropdownClick }) => (
    <div className="rr-navbar-submenu">
        {renderHeader(onDropdownClick)}
        <CSSTransition
            in={dropdownVisible}
            timeout={300}
            classNames="rr-navbar-dropdown"
        >
            {renderDropdown()}
        </CSSTransition>
    </div>
);

NavBarSubmenuPresentation.propTypes = {
    dropdownVisible: PropTypes.bool.isRequired,
    onDropdownClick: PropTypes.func.isRequired
};

export default NavBarSubmenuPresentation;
