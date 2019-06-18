import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faApple,
    faAtlassian,
    faAws,
    faCss3,
    faDocker,
    faFontAwesome,
    faGithub,
    faHtml5,
    faJava,
    faJs,
    faLinux,
    faMicrosoft,
    faPython,
    faReact,
    faSass,
    faUikit
} from "@fortawesome/free-brands-svg-icons";
import "./Greeting.scss";
import meCropped from "../static/me_cropped.png";
import Icon from "./Icon";

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

const techIcons = [
    [
        {
            icon: faJs,
            text:
                "JS. What more can I say, every engineer that loves frontend loves JS."
        },
        {
            icon: faReact,
            text:
                "React. My preference of the modern JS frameworkds. Components make things so much tidier."
        },
        {
            icon: faJava,
            text:
                "Java. The backend language that powers enterprise. I use this at work and it pays my bills."
        },
        { icon: faHtml5, text: "HTML. Can't build websites without it." },
        {
            icon: faCss3,
            text:
                "CSS. The tech every dev loves to hate. I've been making it my mission to appreciate it's power."
        }
    ],
    [
        {
            icon: faPython,
            text:
                "Python. My personal favourite language. It can do all sorts of wonderful things and I wish I had more time to builds applications with it."
        },
        {
            icon: faSass,
            text: "Sass. This makes CSS so much nicer to deal with."
        },
        {
            icon: faApple,
            text:
                "Apple. Been using macs for years now. I love how easy they are to use."
        },
        {
            icon: faLinux,
            text:
                "Linux. The power of linux is amazing. It's so flexible and I use it everyday but I will never know it's darkest secrets."
        },
        {
            icon: faMicrosoft,
            text:
                "Microsoft VS Code and MSSQL. I work faster with Code and use MSSQL at work. I also have to build websites with IE in mind but lets not talk about that."
        }
    ],
    [
        {
            icon: faDocker,
            text:
                "Docker. Containers rule! All my db's live in one these days. If only it wasn't so hungry on a mac."
        },
        {
            icon: faAws,
            text:
                "AWS. I use this for deployments at work. Makes my life easier."
        },
        {
            icon: faFontAwesome,
            text:
                "Font Awesome. Stylish icons with little fuss. These are font awesome icons. Let's face it I'm no designer."
        },
        { icon: faGithub, text: "GitHub. Host all my projects." },
        {
            icon: faUikit,
            text: "UIKit. Use this at work to build consistent UI's."
        }
    ],
    [
        {
            icon: faAtlassian,
            text:
                "Atlassians Jira, BitBucket, Confluence and SourceTree. Great project tools I use everyday. The pride and joy of Australian software companies."
        }
    ]
];

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
            <Icon icon={iconSet.icon} text={iconSet.text} />
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
