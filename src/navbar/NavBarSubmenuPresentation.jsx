import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import './css/NavBarSubmenu.css';

const renderGithubIcon = () => (
    <div className="rr-navbar-github rr-navbar-link">
        <a href="https://github.com/rushton3179/personal-site" className="rr-navbar-link rr-navbar-right-link">
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
);

const renderMailIcon = () => (
    <div className="rr-navbar-mail rr-navbar-link">
        <a href="mailto:ryan.rushton79@gmail.com" className="rr-navbar-link rr-navbar-right-link">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </div>
);

const renderHeader = (onMouseHover, onMouseLeave) => (
    <div className="rr-navbar-dropdown-header rr-navbar-link" onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} >
        <div className="rr-navbar-bars">
            <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
);

const renderDropdown = (onMouseHover, onMouseLeave) => (
    <div className="rr-navbar-dropdown" onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} >
        {renderGithubIcon()}
        {renderMailIcon()}
    </div>
);

const NavBarSubmenuPresentation = (props) => (
    <div className="rr-navbar-submenu" >
        {renderHeader(props.onMouseHover, props.onMouseLeave)}
        <CSSTransition
            in={props.dropdownVisible}
            timeout={300}
            classNames="rr-navbar-dropdown"
        >
            {renderDropdown(props.onMouseHover, props.onMouseLeave)}
        </CSSTransition>
    </div>
);

NavBarSubmenuPresentation.propTypes = {
    dropdownVisible: PropTypes.bool.isRequired,
    onMouseHover: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
}

export default NavBarSubmenuPresentation;