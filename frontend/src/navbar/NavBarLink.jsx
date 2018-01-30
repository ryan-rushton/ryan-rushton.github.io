import React from 'react';
import PropTypes from 'prop-types';

const NavBarLink = (props) => {
    if (props.image) {
        return (
            <a href={props.url} className="App-navbar-link" style={props.style}>
                <img
                    className="App-navbar-logo"
                    src={props.image}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    alt="logo"
                />
            </a>);
    }
    if (props.text) {
        return (<a href={props.url} className="App-navbar-link" >{props.text}</a>);
    }
    return (<a href={props.url} className="App-navbar-link" >{props.jsxObject}</a>);
};

NavBarLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
    jsxObject: PropTypes.object,
    style: PropTypes.object,
    image: PropTypes.string,
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
};

NavBarLink.defaultProps = {
    text: null,
    jsxObject: null,
    image: null,
    imageHeight: 0,
    imageWidth: 0,
};

export default NavBarLink;
