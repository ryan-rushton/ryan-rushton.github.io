import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.scss";

export const POPUP_SIDE = {
    left: "left",
    right: "right",
};

const Icon = ({ icon, text, popupSide }) => {
    const [showPopup, setShowPopup] = useState(false);

    let style = { opacity: showPopup ? 100 : 0, zIndex: showPopup ? 2 : -2 };

    return (
        <div className={styles.container}>
            {popupSide === POPUP_SIDE.left && (
                <div className={`${styles.popup} ${styles.popupLeft}`} style={style}>
                    {text}
                </div>
            )}
            <div
                className={styles.icon}
                key={icon.iconName}
                onMouseOver={() => setShowPopup(true)}
                onMouseOut={() => setShowPopup(false)}
                onFocus={() => setShowPopup(true)}
                onBlur={() => setShowPopup(false)}
            >
                <FontAwesomeIcon icon={icon} />
            </div>
            {popupSide === POPUP_SIDE.right && (
                <div className={styles.popup} style={style}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Icon;
