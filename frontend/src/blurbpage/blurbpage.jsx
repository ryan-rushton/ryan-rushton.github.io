import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './blurbpage.css';

const Blurbpage = (props) => {
    const className = `rr-blurbpage ${props.additionalClassNames}`;

    const hiText = (
        <div className="rr-blurb-hi">
            Hey, I&apos;m Ryan!
        </div>
    );

    const github = (
        <a href="https://github.com/rushton3179/personal-site" >
            <FontAwesome name="github" />
        </a>);

    const blurbText = (
        <div className="rr-blurb-text">
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
            <div className="rr-blurb-block">
                {hiText}
                {blurbText}
            </div>
        </div>);
};

Blurbpage.propTypes = {
    additionalClassNames: PropTypes.string,
};

Blurbpage.defaultProps = {
    additionalClassNames: '',
};

export default Blurbpage;
