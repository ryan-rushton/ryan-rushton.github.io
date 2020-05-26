import React from "react";

import styles from "./Project.module.scss";

const Project = ({ name, links, description }) => {
    const isMobile = window.innerWidth < 800;
    return (
        <div className={styles.project}>
            <div className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.links}>
                    {links &&
                        links.map((link) => (
                            <span key={link.full}>
                                <a href={link.full} className="rr-site-link">
                                    {isMobile ? link.short : link.full.replace("https://", "")}
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
