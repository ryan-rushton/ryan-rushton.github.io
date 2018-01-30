import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';
import NavBarItem from './NavBarItem';
import navbarItems from './NavbarConfig';
import './NavBar.css';

const NavBarActual = (props) => {
    const className = 'App-navbar';

    const generateItem = item => (
        <NavBarItem
            text={item.text}
            object={item.object}
            url={item.url}
            submenu={item.submenu}
            styles={item.styles}
            key={item.keyBase}
            keyBase={item.keyBase} />);

    const generateHomeItem = homeItem => (
        <div className="App-navbar-home">
            <NavBarLink
                key={`${homeItem.keyBase}-home`}
                url={homeItem.url}
                text={homeItem.text}
                image={homeItem.image}
                imageWidth={homeItem.imageWidth}
                imageHeight={homeItem.imageHeight}
                style={homeItem.styles}
            />
        </div>);

    const generateItems = (data) => {
        let styles = {};
        let navItems;
        let key;

        if (data.image) {
            navItems = generateHomeItem(data);
            key = data.keyBase;
            ({ styles } = data);
        } else if (data instanceof Array) {
            navItems = data.map((item, i) => generateItem(item, i));
            key = data.map(item => item.keyBase).join('-');
            data.forEach(item => Object.assign(styles, item.styles));
        } else {
            navItems = generateItem(data);
            key = data.keyBase;
            ({ styles } = data);
        }
        return (
            <div className="rr-navbar-flexitem" style={styles} key={key}>
                {navItems}
            </div>);
    };

    const items = props.items.map(item => generateItems(item));

    return (
        <div className={className}>
            <div className="App-navbar-content App-content">
                {items}
            </div>
        </div>
    );
};

NavBarActual.propTypes = {
    items: PropTypes.array,
};

NavBarActual.defaultProps = {
    items: [],
};

const NavBar = () => <NavBarActual items={navbarItems} />;

export default NavBar;
