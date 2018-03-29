import React from 'react';
import FontAwesome from 'react-fontawesome';
import AboutMe from './Aboutme';
import Blurbpage from './Greeting';
import './Introduction.css';

const INTRO_STATE = {
    BLURB: 'BLURB',
    ABOUT_ME: 'ABOUT_ME',
};

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleComponent: INTRO_STATE.BLURB,
        };

        this.onRightArrowClick = this.onRightArrowClick.bind(this);
        this.onLeftArrowClick = this.onLeftArrowClick.bind(this);

        this.rightArrow = (
            <div className="rr-intro-arrow rr-intro-arrow-right">
                <FontAwesome name="arrow-circle-right" size="2x" onClick={this.onRightArrowClick} />
            </div>);

        this.leftArrow = (
            <div className="rr-intro-arrow rr-intro-arrow-left">
                <FontAwesome name="arrow-circle-left" size="2x" onClick={this.onLeftArrowClick} />
            </div>
        );
    }

    onRightArrowClick() {
        this.setState(() => ({
            visibleComponent: INTRO_STATE.ABOUT_ME,
        }));
    }

    onLeftArrowClick() {
        this.setState(() => ({
            visibleComponent: INTRO_STATE.BLURB,
        }));
    }

    renderBlurb() {
        const style = {
            transform: this.state.visibleComponent === INTRO_STATE.BLURB ? 'translateX(0)' : 'translateX(-100vw)',
        };

        return (
            <div className="rr-intro-component-common rr-intro-component-1" style={style}>
                <div className="rr-intro-content-item" />
                <div className="rr-intro-content-item rr-intro-content-item-double-grow">
                    <Blurbpage />
                </div>
                <div className="rr-intro-content-item">
                    {this.rightArrow}
                </div>
            </div>
        );
    }

    renderAboutMe() {
        const style = {
            transform: this.state.visibleComponent === INTRO_STATE.ABOUT_ME ? 'translateX(-100vw)' : 'translateX(0)',
        };

        return (
            <div className="rr-intro-component-common rr-intro-component-2" style={style}>
                <div className="rr-intro-content-item" />
                <div className="rr-intro-content-item rr-intro-content-item-double-grow">
                    <AboutMe />
                </div>
                <div className="rr-intro-content-item">
                    {this.leftArrow}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="rr-intro-component">
                {this.renderBlurb()}
                {this.renderAboutMe()}
            </div>);
    }
}

export default Intro;
