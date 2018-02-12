import React from 'react';
import PropTypes from 'prop-types';
import './aboutme.css';
import myDayInfographic from '../static/myDayInfo.png';

const AboutMe = (props) => {
    const className = `rr-aboutme ${props.additionalClassNames}`;
    return (
        <div className={className}>
            <div className="rr-infographic">
                <div className="rr-infopraphic-title">
                    My Typical Day
                </div>
                <img
                    className="rr-infographic-img"
                    src={myDayInfographic}
                    alt="Woops the infographic didn't load"
                />
            </div>
        </div>);
};

AboutMe.propTypes = {
    additionalClassNames: PropTypes.string,
};

AboutMe.defaultProps = {
    additionalClassNames: '',
};

export default AboutMe;
