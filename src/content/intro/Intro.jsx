import React from "react";

import styles from "./Intro.module.scss";
import Background from "./background/Background";
import { Me } from "../preloadedImages/preloadedImages";

const goToAboutMe = () => document.getElementById("rr-body").scrollIntoView({ behavior: "smooth" });

const Intro = () => {
    return (
        <div className={styles.container}>
            <Background />
            <div className={`rr-content ${styles.intro}`}>
                <div className={styles.content}>
                    <img className={styles.portrait} src={Me.src} alt="" />
                    <div className={styles.textBlock}>
                        <div className={styles.firstLine}>
                            {`Hi, I'm `}
                            <span className="rr-site-link" onClick={goToAboutMe}>
                                Ryan
                            </span>
                            {`,`}
                        </div>
                        <div className={styles.secondLine}>{"a fullstack software engineer."}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
