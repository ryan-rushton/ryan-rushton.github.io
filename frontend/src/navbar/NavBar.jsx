import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';
import NavBarItem from './NavBarItem';
import navbarItems from './navbarConfig';
import './NavBar.css'

const NavBarActual = (props) => {
    const className =  "App-navbar";
    let items;

    const generateItem = (item, index) => {
        return (<NavBarItem text={item.text}
                                object={item.object} url={item.url}
                                submenu={item.submenu}
                                styles={item.styles}
                                key={item.keyBase}
                                keyBase = {item.keyBase}/>);
    };

    const generateItems = (data) => {
        let navItems;
        let key;
        let styles = {};

        if (data.image) {
            navItems = generateHomeItem(data);
            key = data.keyBase;
            styles = data.styles;
        }
        else if (data instanceof Array) {
            navItems = data.map((item, i) => generateItem(item, i));
            key = data.map(item => item.keyBase).join('-');
            data.forEach(item => Object.assign(styles, item.styles));
        }
        else {
            navItems = generateItem(data);
            key = data.keyBase;
            styles = data.styles;
        }
        return (
                <div className="rr-navbar-flexitem" style={styles} key={key}>
                    {navItems}
                </div>);

    };

    const generateHomeItem = (homeItem) => {
        return (
                <div className="App-navbar-home">
                    <NavBarLink
                        key={homeItem.keyBase + '-home'}
                        url={homeItem.url}
                        text={homeItem.text}
                        image={homeItem.image}
                        imageWidth={homeItem.imageWidth}
                        imageHeight={homeItem.imageHeight}
                        style={homeItem.styles}
                    />
                </div>
        );
    };

    items = props.items.map(item => generateItems(item));

    return (
        <div className={className}>
            <div className="App-navbar-content App-content">
                {items}
            </div>
        </div>
    );
};

NavBarActual.propTypes = {
    homeItem: PropTypes.object,
    items: PropTypes.array,
    isSubMenu: PropTypes.bool,
    keyBase: PropTypes.string
};

NavBarActual.defaultProps = {
    isSubMenu: false,
};

const NavBar = () => {
    return <NavBarActual items={navbarItems}/>;
}

export default NavBar;
