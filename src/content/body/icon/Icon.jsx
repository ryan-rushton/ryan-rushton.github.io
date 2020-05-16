import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import styles from "./Icon.module.scss";

export const POPUP_SIDE = {
    left: "left",
    right: "right",
};

const Icon = ({ icon, text, popupSide }) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const iconRef = useRef(null);

    let style = { opacity: showPopup ? 100 : 0, zIndex: showPopup ? 2 : -2 };

    if (popupSide === POPUP_SIDE.left && popupRef?.current && iconRef?.current) {
        const width = popupRef.current.clientWidth;
        const leftEdge = iconRef.current.getBoundingClientRect()?.left;
        style = { ...style, left: leftEdge - width - 22 }; // 22 is padding, border and icon margin
    } else {
        style = { ...style, left: undefined };
    }

    return (
        <div>
            <div
                ref={iconRef}
                className={styles.icon}
                key={icon.iconName}
                onMouseOver={() => setShowPopup(true)}
                onMouseOut={() => setShowPopup(false)}
                onFocus={() => setShowPopup(true)}
                onBlur={() => setShowPopup(false)}
            >
                <FontAwesomeIcon icon={icon} />
            </div>
            <div ref={popupRef} className={styles.popup} style={style}>
                {text}
            </div>
        </div>
    );
};

Icon.propTypes = {
    icon: PropTypes.shape({ iconName: PropTypes.string.isRequired }).isRequired,
    text: PropTypes.string.isRequired,
    popupSide: PropTypes.oneOf([POPUP_SIDE.left, POPUP_SIDE.right]).isRequired,
};

export default Icon;
