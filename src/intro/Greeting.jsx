import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Icon from "./Icon";
import techIcons from "./TechIcons";

import "./Greeting.scss";
import meCropped from "../static/me_cropped.png";

const roundPortrait = (
    <img className="rr-greeting-portrait" src={meCropped} alt="" />
);

const hiText = (
    <div className="rr-greeting-hi">
        <h2>Hey, I&apos;m Ryan!</h2>
    </div>
);

const github = (
    <a
        href="https://github.com/rushton3179/personal-site"
        className="rr-greeting-github-link"
    >
        <FontAwesomeIcon icon={faGithub} />
    </a>
);

const greetingText = (
    <div className="rr-greeting-text">
        <p>
            Here you can expect to find a bunch of stuff I&apos;m into,
            including pics I have taken while on holiday, little apps I have
            made for things I find interesting and of course how to get in
            touch.
        </p>
        <p>
            Please check out my
            {github}
            if you want to see how this site works or a bunch on half finished
            (or started) projects.
        </p>
    </div>
);

const buildGridRow = (row, index) => (
    <div className="rr-tech-grid-row" key={`tech-grid-row-${index}`}>
        {row.map(iconSet => (
            <Icon
                icon={iconSet.icon}
                key={iconSet.icon.iconName}
                text={iconSet.text}
            />
        ))}
    </div>
);

const buildTechGrid = () => (
    <div className="rr-tech-grid">
        {techIcons.map((row, index) => buildGridRow(row, index))}
    </div>
);

const stuffICanDo = (
    <div className="rr-stuff-can-do">
        <h4>Tech that I use:</h4>
        {buildTechGrid()}
    </div>
);

const Greeting = props => {
    const { additionalClassNames } = props;
    const className = `rr-greeting ${additionalClassNames}`;

    return (
        <div className={className}>
            <div className="rr-greeting-block">
                <div className="rr-greeting-portrait-and-hi">
                    {roundPortrait}
                    {hiText}
                </div>
                <div className="rr-greeting-text-block">
                    {greetingText}
                    {stuffICanDo}
                </div>
            </div>
        </div>
    );
};

Greeting.propTypes = {
    additionalClassNames: PropTypes.string
};

Greeting.defaultProps = {
    additionalClassNames: ""
};

export default Greeting;
