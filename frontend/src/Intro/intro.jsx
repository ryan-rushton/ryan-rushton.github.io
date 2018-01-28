import React from 'react';
import FontAwesome from 'react-fontawesome';
import AboutMe from '../aboutme/aboutme';
import Blurbpage from '../blurbpage/blurbpage';
import './intro.css'

const INTRO_STATE = {
    BLURB: "BLURB",
    ABOUT_ME: "ABOUT_ME"
};

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleComponent: INTRO_STATE.BLURB,
            style: {
                background: '#545454'
            }
        };
    };

    onRightArrowClick() {
        this.setState((prevState, props) => ({
            visibleComponent: INTRO_STATE.ABOUT_ME,
            style: {
                background: 'lightgray'
            }
        }));
    };

    onLeftArrowClick() {
        this.setState((prevState, props) => ({
            visibleComponent: INTRO_STATE.BLURB,
            style: {
                background: '#545454'
            }
        }));
    };

    rightArrow = (
        <div className="rr-intro-arrow rr-intro-arrow-right">
            <FontAwesome name="arrow-circle-right" size="2x" onClick={this.onRightArrowClick.bind(this)}/>
        </div>
    );

    leftArrow = (
        <div className="rr-intro-arrow rr-intro-arrow-left">
            <FontAwesome name="arrow-circle-left" size="2x" onClick={this.onLeftArrowClick.bind(this)}/>
        </div>
    );

    renderBlurb() {
        return (
            <div className="rr-intro-component" style={this.state.style}>
                <div className="rr-intro-content">
                    <Blurbpage/>
                    {this.rightArrow}
                </div>
            </div>
        );
    };

    renderAboutMe() {
        return (
            <div className="rr-intro-component" style={this.state.style}>
                <div className="rr-intro-content">
                    <AboutMe/>
                    {this.leftArrow}
                </div>
            </div>
        );
    }

    render() {
        if(this.state.visibleComponent === INTRO_STATE.ABOUT_ME) {
            return this.renderAboutMe();
        } else {
            return this.renderBlurb();
        }
    };
}

export default Intro;