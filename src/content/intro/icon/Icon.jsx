import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import "./Icon.scss";

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };

        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    showPopup() {
        this.setState({ showPopup: true });
    }

    hidePopup() {
        this.setState({ showPopup: false });
    }

    renderPopup() {
        const { text } = this.props;
        const { showPopup } = this.state;
        if (showPopup) {
            return <div className="rr-tech-icon-popup">{text}</div>;
        }

        return null;
    }

    render() {
        const { icon } = this.props;

        return (
            <div className="rr-tech-icon-set">
                <div
                    className="rr-tech-icon"
                    key={icon.iconName}
                    onMouseOver={this.showPopup}
                    onMouseOut={this.hidePopup}
                    onFocus={this.showPopup}
                    onBlur={this.hidePopup}
                >
                    <FontAwesomeIcon icon={icon} />
                </div>
                {this.renderPopup()}
            </div>
        );
    }
}

Icon.propTypes = {
    icon: PropTypes.shape({ iconName: PropTypes.string.isRequired }).isRequired,
    text: PropTypes.string.isRequired,
};

export default Icon;
