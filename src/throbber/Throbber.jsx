import React from "react";
import logo from "../static/RR_Logo_Outlined.svg";
import "./Throbber.scss";

const Throbber = () => (
    <div className="rr-throbber">
        <img className="rr-throbber-image" src={logo} alt="" />
    </div>
);

export default Throbber;
