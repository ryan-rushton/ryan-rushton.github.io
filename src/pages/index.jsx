import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Greeting from "../components/intro/Intro";
import Throbber from "../components/throbber/Throbber";
import Body from "../components/body/Body";
import Thailand from "../images/thailand.jpg";
import styles from "./index.module.scss";
import "../SiteStyles.scss";

const App = () => {
    const [imageHasLoaded, setImageHasLoaded] = useState(false);
    let bgImage;

    // kick off loading for the biggest image so we can spin
    if (typeof Image !== "undefined") {
        bgImage = new Image();
        bgImage.onload = () => setImageHasLoaded(true);
        bgImage.onerror = () => setImageHasLoaded(true);
        bgImage.src = Thailand;
    } else if (!imageHasLoaded) {
        setImageHasLoaded(true);
    }

    if (imageHasLoaded) {
        return (
            <>
                <NavBar />
                <Greeting />
                <div
                    className={styles.cover}
                    style={{ backgroundImage: `url(${bgImage ? bgImage.src : Thailand})` }}
                />
                <Body />
            </>
        );
    }

    return (
        <div className={styles.cover}>
            <Throbber />
        </div>
    );
};

export default App;
