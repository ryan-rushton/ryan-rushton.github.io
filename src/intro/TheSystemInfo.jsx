import React from "react";
import saturn from "./assets/Saturn.svg";
import "./TheSystemInfo.scss";

const systemInfoText = (
    <p>
        The System is designed to be a informative tool for kids (or big kids)
        to explore the well known objects of the solar system and get some
        intuition on how vast it is.
    </p>
);

const TheSystemInfo = () => (
    <div className="rr-the-system-info">
        <div className="rr-the-system-info-title">The System</div>
        <div className="rr-the-system-saturn">
            <img
                alt=""
                className="rr-saturn-svg"
                height="40%"
                src={saturn}
                width="40%"
            />
        </div>
        <div className="rr-the-system-info-text">{systemInfoText}</div>
    </div>
);

export default TheSystemInfo;
