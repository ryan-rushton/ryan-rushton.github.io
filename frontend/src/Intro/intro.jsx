import React from 'react';
import FontAwesome from 'react-fontawesome';
import AboutMe from '../aboutme/aboutme';
import Blurbpage from '../blurbpage/blurbpage';
import './intro.css';

const INTRO_STATE = {
    BLURB: 'BLURB',
    ABOUT_ME: 'ABOUT_ME',
};

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleComponent: INTRO_STATE.BLURB,
            windowWidth: 960,
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

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
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

    updateDimensions() {
        this.setState({ windowWidth: window.innerWidth });
    }

    renderBlurb() {
        let style;

        if (this.state.windowWidth <= 960) {
            style = {
                transform: this.state.visibleComponent === INTRO_STATE.BLURB ? 'translateX(0)' : 'translateX(-960px)',
            };
        } else {
            style = {
                transform: this.state.visibleComponent === INTRO_STATE.BLURB ? 'translateX(0)' : 'translateX(-100vw)',
            };
        }

        return (
            <div className="rr-intro-component-1" style={style}>
                <div className="rr-intro-content">
                    <Blurbpage />
                    {this.rightArrow}
                </div>
            </div>
        );
    }

    renderAboutMe() {
        let style;

        if (this.state.windowWidth <= 960) {
            style = {
                transform: this.state.visibleComponent === INTRO_STATE.ABOUT_ME ? 'translateX(-960px)' : 'translateX(0)',
            };
        } else {
            style = {
                transform: this.state.visibleComponent === INTRO_STATE.ABOUT_ME ? 'translateX(-100vw)' : 'translateX(0)',
            };
        }

        return (
            <div className="rr-intro-component-2" style={style}>
                <div className="rr-intro-content">
                    <AboutMe />
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
