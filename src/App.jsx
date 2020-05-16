import React, { useState } from "react";
import NavBar from "./content/navbar/NavBar";
import Greeting from "./content/intro/Intro";
import Throbber from "./content/throbber/Throbber";
import Body from "./content/body/Body";
import Thailand from "./content/static/thailand.jpg";
import styles from "./App.module.scss";
import "./SiteStyles.scss";

// Hack to preload all images
// eslint-disable-next-line
import * as preload from "./content/preloadedImages/preloadedImages";

const App = () => {
    const [imageHasLoaded, setImageHasLoaded] = useState(false);

    // kick off loading for the biggest image so we can spin
    const bgImage = new Image();
    bgImage.onload = () => setImageHasLoaded(true);
    bgImage.onerror = () => setImageHasLoaded(true);
    bgImage.src = Thailand;

    if (imageHasLoaded) {
        return (
            <>
                <NavBar />
                <Greeting />
                <div className={styles.cover} style={{ backgroundImage: `url(${bgImage.src})` }} />
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
