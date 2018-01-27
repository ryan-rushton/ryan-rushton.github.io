import React from 'react';
import FontAwesome from 'react-fontawesome';
import './homepage.css';

const Homepage = () => {

    const arrowClickEvent = (e) => {
        window.scroll({left:0, top: (window.innerHeight - 70), behavior: 'smooth'});

    };

    return (
        <div className="rr-homepage">
            <div className="rr-intro-block">
                <div className="rr-intro-text">
                    <div className="rr-intro-hi">HI! THIS WAY</div>
                    <div className="rr-arrow-circle-down" onClick={arrowClickEvent}>
                        <FontAwesome name="arrow-circle-down" size="2x"/>
                    </div>
                </div>
            </div>
        </div>);
};

export default Homepage;