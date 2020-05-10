import React from "react";
import Icon from "./icon/Icon";
import Project from "../project/Project";
import styles from "./MoreInfo.module.scss";
import techIcons from "./TechIcons";

const buildGridRow = (row, index) => (
    <div className={styles.techGridRow} key={`row-${index}`}>
        {row.map((iconSet) => (
            <Icon icon={iconSet.icon} key={iconSet.icon.iconName} text={iconSet.text} />
        ))}
    </div>
);

const MoreInfo = () => {
    return (
        <div className={"rr-content"}>
            <h1 className={styles.title}>{"Projects"}</h1>
            {
                "Here is a bunch of projects I work on from time to time. Some I have have built myself and some I contribute to."
            }
            <div className={styles.projects}>
                <Project
                    name={"The System"}
                    links={[
                        "https://github.com/ryan-rushton/the-system",
                        "https://the-system.netlify.app",
                    ]}
                    description={
                        "The solar system in your browser. I started this as an exercise making some performance optimisations in React. It renders a large number of elements when creating the belt. Now I tend to use it as a testing ground for new technology."
                    }
                />
                <Project
                    name={"Xbdd"}
                    links={["https://github.com/orionhealth/XBDD"]}
                    description={
                        "A web application that provides an overview of Cucumber scenario test reports. It allows automated scenarios to be cross checked and catalogued and provides a history of manually tested scenario results. \n\nThis is an Orion Health open source project that I helped rejuvenate. We moved it from an old Jersey/YUI application that was converted to React, Typescript and Spring Boot."
                    }
                />
                <Project
                    name={"Destiny Item Manager"}
                    links={["https://github.com/DestinyItemManager/DIM"]}
                    description={
                        "An item/content manager for the game Destiny that is regarded as the staple choice by the Destiny community. I contribute with small to medium features and bugfixes."
                    }
                />
                <Project
                    name={"Destiny Quartermaster"}
                    links={["https://github.com/ryan-rushton/destiny-quartermaster"]}
                    description={
                        "This one is still under construction but it is planned to be a app to help people find an optimum build in the game Destiny. Currently I have built a lot of the infrastructure to get all the required data from the bungie api. I need to build UI's now."
                    }
                />
            </div>
            <h1 className={styles.title}>{"Tech I use"}</h1>
            <div className={styles.techGrid}>{techIcons.map(buildGridRow)}</div>{" "}
        </div>
    );
};

export default MoreInfo;
