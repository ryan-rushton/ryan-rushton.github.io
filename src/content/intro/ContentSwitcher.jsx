import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleLeft,
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import TheSystemInfo from "./TheSystemInfo";
import Blurbpage from "./Greeting";
import "./ContentSwitcher.scss";

const INTRO_STATE = {
    BLURB: "BLURB",
    ABOUT_ME: "ABOUT_ME"
};

class ContentSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleComponent: INTRO_STATE.BLURB
        };

        this.onRightArrowClick = this.onRightArrowClick.bind(this);
        this.onLeftArrowClick = this.onLeftArrowClick.bind(this);

        this.rightArrow = (
            <div className="rr-content-switcher-arrow rr-content-switcher-arrow-right">
                <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    size="2x"
                    onClick={this.onRightArrowClick}
                />
            </div>
        );

        this.leftArrow = (
            <div className="rr-content-switcher-arrow rr-content-switcher-arrow-left">
                <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    size="2x"
                    onClick={this.onLeftArrowClick}
                />
            </div>
        );
    }

    onRightArrowClick() {
        this.setState(() => ({
            visibleComponent: INTRO_STATE.ABOUT_ME
        }));
    }

    onLeftArrowClick() {
        this.setState(() => ({
            visibleComponent: INTRO_STATE.BLURB
        }));
    }

    getTransform() {
        const { visibleComponent } = this.state;
        const blurbIsVisible = visibleComponent === INTRO_STATE.BLURB;

        if (blurbIsVisible) {
            return "translateX(0)";
        }

        return "translateX(-100vw)";
    }

    renderBlurb() {
        const style = {
            transform: this.getTransform()
        };

        return (
            <div className="rr-content-switcher-component-common" style={style}>
                <div className="rr-content-switcher-content-item" />
                <div className="rr-content-switcher-content-item rr-intro-content-item-double-grow">
                    <Blurbpage />
                </div>
                <div className="rr-content-switcher-content-item">
                    {this.rightArrow}
                </div>
            </div>
        );
    }

    renderTheSystemInfo() {
        const style = {
            transform: this.getTransform()
        };

        return (
            <div className="rr-content-switcher-component-common" style={style}>
                <div className="rr-content-switcher-content-item" />
                <div className="rr-content-switcher-content-item rr-intro-content-switcher-item-double-grow">
                    <TheSystemInfo />
                </div>
                <div className="rr-content-switcher-content-item">
                    {this.leftArrow}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="rr-content-switcher-component">
                {this.renderBlurb()}
                {this.renderTheSystemInfo()}
            </div>
        );
    }
}

export default ContentSwitcher;
