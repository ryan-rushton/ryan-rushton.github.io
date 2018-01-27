import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

/*
A more complicated example of the stateless, functional component.
*/

const NavBarItem = (props) => {

    const generateLink = (url, text, object, style) => {
        return (
            <NavBarLink key={url} url={url} text={text} object={object} style={style}/>);
    }

    const generateContent = (props) => {
        const content = [generateLink(props.url, props.text, props.object)];

        return content;
    }

    return (
        <div className="App-navbar-item" key={props.keyBase + '-item'} style={props.styles}>
            {generateContent(props)}
        </div>);
}

NavBarItem.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.object,
    keyBase: PropTypes.string
};

NavBarItem.defaultProps = {
    submenu: null,
};

export default NavBarItem;
