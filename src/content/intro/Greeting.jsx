import React from "react";

import styles from "./Greeting.module.scss";
import meCropped from "../static/me_cropped.png";

const greetingText = (
    <div className={styles.text}>
        <p>
            {"I'm a fullstack software engineer from Canberra with a passion for the "}
            {"frontend and workplace culture."}
        </p>
        <p>
            {"Here you will find a bit of a CV type spiel, some links to some projects "}
            {"I have worked on and pics I have taken on holiday. "}
            {"Please check out my"}
            <a
                href="https://github.com/rushton3179/personal-site"
                className={`rr-site-link ${styles.githubLink}`}
            >
                {"github"}
            </a>
            {"if you want to see how this site works or a bunch of projects in various "}
            {"states of completeness."}
        </p>
    </div>
);

const Greeting = () => {
    return (
        <div className={`rr-content ${styles.greeting}`}>
            <div className={styles.content}>
                <div className={styles.portraitAndHi}>
                    <img className={styles.portrait} src={meCropped} alt="" />
                    <div className={styles.hi}>
                        <h2>{"Hey, I'm Ryan!"}</h2>
                    </div>
                </div>
                <div>{greetingText}</div>
            </div>
        </div>
    );
};

export default Greeting;
