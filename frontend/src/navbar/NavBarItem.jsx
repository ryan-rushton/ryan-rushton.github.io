import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

/*
A more complicated example of the stateless, functional component.
*/

const NavBarItem = (props) => {

    const generateLink = (url, text, jsxObject, style) =>
        <NavBarLink key={url} url={url} text={text} jsxObject={jsxObject} style={style} />;

    const generateContent = () => {
        const content = [generateLink(props.url, props.text, props.jsxObject)];

        return content;
    };

    return (
        <div className="App-navbar-item" key={`${props.keyBase}-item`} style={props.styles}>
            {generateContent(props)}
        </div>);
};

NavBarItem.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.object,
    keyBase: PropTypes.string,
    jsxObject: PropTypes.element,
};

NavBarItem.defaultProps = {
    url: '',
    text: '',
    styles: {},
    keyBase: '',
    jsxObject: null,
};

export default NavBarItem;
