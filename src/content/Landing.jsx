import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Throbber from "./throbber/Throbber";
import ContentSwitcher from "./intro/ContentSwitcher";

import Background from "./static/background.jpg";
import "./Landing.scss";
import NavBar from "./navbar/NavBar";

class Landing extends Component {
    static arrowClickEvent() {
        window.scroll({
            left: 0,
            top: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
            ),
            behavior: "smooth"
        });
    }

    constructor(props) {
        super(props);
        this.state = { imageHasLoaded: false };
        this.createBgImage();
    }

    createBgImage() {
        this.bgImage = new Image();
        this.bgImage.onload = this.imageHasLoaded.bind(this);
        this.bgImage.onerror = this.imageHasLoaded.bind(this);
        this.bgImage.src = Background;
    }

    imageHasLoaded() {
        this.setState({ imageHasLoaded: true });
    }

    render() {
        const { imageHasLoaded } = this.state;
        if (imageHasLoaded) {
            return (
                <>
                    <NavBar />
                    <div
                        className="rr-landing"
                        style={{ backgroundImage: `url(${this.bgImage.src})` }}
                    >
                        <div className="rr-landing-intro-block">
                            <div className="rr-landing-intro-hi">
                                HI! THIS WAY
                            </div>
                            <div className="rr-landing-arrow-circle-down">
                                <FontAwesomeIcon
                                    icon={faArrowCircleDown}
                                    onClick={Landing.arrowClickEvent}
                                />
                            </div>
                        </div>
                    </div>
                    <ContentSwitcher />
                </>
            );
        }

        return (
            <div className="rr-landing">
                <Throbber />
            </div>
        );
    }
}

export default Landing;
