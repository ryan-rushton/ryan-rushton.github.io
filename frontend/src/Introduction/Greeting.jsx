import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Greeting.css';
import meCropped from '../static/me_cropped.png';

const Greeting = (props) => {
    const className = `rr-greeting ${props.additionalClassNames}`;

    const roundPortrait = (
        <img
            className="rr-greeting-portrait"
            src={meCropped}
            alt="Woops the portrait didn't load"
        />
    );

    const hiText = (
        <div className="rr-greeting-hi">
            Hey, I&apos;m Ryan!
        </div>
    );

    const github = (
        <a href="https://github.com/rushton3179/personal-site" >
            <FontAwesome name="github" />
        </a>);

    const greetingText = (
        <div className="rr-greeting-text">
            Welcome to my site.
            <p>
                Here you can
                expect to find a bunch of stuff I&apos;m into, including pics I have
                taken while on holiday, little apps I have made for things I
                find interesting and of course how to get in touch.
            </p>
            <p>
                Please check out my {github} if you want to see how this
                site works or a bunch on half finished (or started) projects.
            </p>
        </div>);

    return (
        <div className={className}>
            <div className="rr-greeting-block">
                <div className="rr-greeting-portrait-and-hi">
                    {roundPortrait}
                    {hiText}
                </div>
                {greetingText}
            </div>
        </div>);
};

Greeting.propTypes = {
    additionalClassNames: PropTypes.string,
};

Greeting.defaultProps = {
    additionalClassNames: '',
};

export default Greeting;
