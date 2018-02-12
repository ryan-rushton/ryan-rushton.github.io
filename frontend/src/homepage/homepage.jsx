import React from 'react';
import FontAwesome from 'react-fontawesome';
import './homepage.css';

const Homepage = () => {
    const arrowClickEvent = () => {
        window.scroll({ left: 0, top: (window.innerHeight - 70), behavior: 'smooth' });
    };

    return (
        <div className="rr-homepage">
            <div className="rr-homepage-intro-block">
                <div className="rr-homepage-intro-text">
                    <div className="rr-homepage-intro-hi">HI! THIS WAY</div>
                    <div className="rr-homepage-arrow-circle-down">
                        <FontAwesome name="arrow-circle-down" onClick={arrowClickEvent} />
                    </div>
                </div>
            </div>
        </div>);
};

export default Homepage;
