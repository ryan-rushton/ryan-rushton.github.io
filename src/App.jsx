import React, { useState } from "react";
import NavBar from "./content/navbar/NavBar";
import Greeting from "./content/intro/Intro";
import Throbber from "./content/throbber/Throbber";
import Body from "./content/body/Body";
import Background from "./content/static/background.jpg";

import styles from "./App.module.scss";
import "./styles/SiteStyles.scss";

const App = () => {
    const [imageHasLoaded, setImageHasLoaded] = useState(false);

    const bgImage = new Image();
    bgImage.onload = () => setImageHasLoaded(true);
    bgImage.onerror = () => setImageHasLoaded(true);
    bgImage.src = Background;

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
