import React from "react";

import styles from "./Project.module.scss";

const Project = ({ name, links, description }) => {
    return (
        <div className={styles.project}>
            <div className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.links}>
                    {links &&
                        links.map((link) => (
                            <span>
                                <a key={link} href={link} className="rr-site-link">
                                    {link.replace("https://", "")}
                                </a>
                            </span>
                        ))}
                </div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default Project;
