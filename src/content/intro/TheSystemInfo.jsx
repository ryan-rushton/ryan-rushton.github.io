import React from "react";
import saturn from "./assets/Saturn.svg";
import "./TheSystemInfo.scss";

const systemInfoText = (
    <>
        <p>
            The System is designed to be a informative tool for kids (or big
            kids) to explore the well known objects of the solar system and get
            some intuition on how vast it is.
        </p>
        <p>I truely love space and it&apos;s infinite mysteries.</p>
        <p>
            Please check it out{" "}
            <a className="rr-site-link" href="https://the-system.netlify.com/">
                here
            </a>
            .
        </p>
    </>
);

const TheSystemInfo = () => (
    <div className="rr-the-system-info">
        <div className="rr-the-system-info-title">The System</div>
        <img
            alt=""
            className="rr-the-system-saturn rr-saturn-svg"
            height="30%"
            src={saturn}
            width="30%"
        />
        <div className="rr-the-system-info-text">{systemInfoText}</div>
    </div>
);

export default TheSystemInfo;
