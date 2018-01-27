import React from 'react';
import FontAwesome from 'react-fontawesome';
import logo from '../static/logo2.png';

const githubNavbar = (
    <div className="rr-navbar-github">
        <FontAwesome name="github" size="2x"/>
    </div>
);

const mailNavbar = (
    <div className="rr-navbar-mail">
        <FontAwesome name="envelope-o" size="2x"/>
    </div>
);

const navbarItems = [{
    keyBase: 'navbar-item-1',
    url: ""
},{
    keyBase: 'navbar-item-2',
    image: logo,
    imageHeight: 66,
    imageWidth: 138,
    url: '/',
    styles: {
        marginTop: '2px',
        textAlign: 'center'
    }
},[{
    keyBase: 'navbar-item-3',
    object: githubNavbar,
    url: "https://github.com/rushton3179/personal-site",
    styles: {
        textAlign: 'right',
        position: 'relative',
        marginRight: '20px'
    }
}, {
    keyBase: 'navbar-item-4',
    object: mailNavbar,
    url: "mailto:ryan.rushton79@gmail.com",
    styles: {
        textAlign: 'right',
        position: 'relative',
        marginRight: '20px'
    }
}]];

export default navbarItems;