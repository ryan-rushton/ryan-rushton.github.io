import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/fontawesome-free-solid';
import Background from '../static/background.jpg';
import Throbber from '../throbber/Throbber';
import './Homepage.css';

class Homepage extends Component {
    static arrowClickEvent() {
        window.scroll({ left: 0, top: (window.innerHeight - 56), behavior: 'smooth' });
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
        if (this.state.imageHasLoaded) {
            return (
                <div className="rr-homepage" style={{ backgroundImage: `url(${this.bgImage.src})` }} >
                    <div className="rr-homepage-intro-block">
                        <div className="rr-homepage-intro-hi">HI! THIS WAY</div>
                        <div className="rr-homepage-arrow-circle-down">
                            <FontAwesomeIcon
                                icon={faArrowCircleDown}
                                onClick={Homepage.arrowClickEvent} />
                        </div>
                    </div>
                </div>);
        }

        return (
            <div className="rr-homepage">
                {Throbber()}
            </div>
        );
    }
}

export default Homepage;
