import React from 'react';
import FontAwesome from 'react-fontawesome';
import './blurbpage.css';
import AboutMe from "../aboutme/aboutme";

const Blurbpage = () => {

    const onArrowClick = (e) => {
      return <AboutMe/>
    };

    const hiText = (
        <div className="rr-blurb-hi">
            Hey, I'm Ryan!
        </div>
    )

    const blurbText = (
        <div className="rr-blurb-text">
            Welcome to my site. Here you can
            expect to find a bunch of stuff I'm into, including pics I have
            taken while on holiday, little apps I have made for things I find
            interesting and of course how to
            get in touch. Please check out
            my <a href="https://github.com/rushton3179/personal-site" ><FontAwesome name="github"/></a> if you want to see how this
            site works or a bunch on half finished (or started) projects. Cheers!
        </div>);

    return (
        <div className="rr-blurbpage">
            <div className="rr-blurb-block">
                {hiText}
                {blurbText}
            </div>
        </div>);
};

export default Blurbpage;