import Head from 'next/head';
import { FC, useState } from 'react';
import Body from '../components/body/Body';
import Greeting from '../components/intro/Intro';
import NavBar from '../components/navbar/NavBar';
import Throbber from '../components/throbber/Throbber';
import config from '../config';
import styles from './index.module.scss';

const App: FC = () => {
  const { title, description } = config;
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  let bgImage;

  // kick off loading for the biggest image so we can spin
  if (typeof Image !== 'undefined') {
    bgImage = new Image();
    bgImage.onload = () => setImageHasLoaded(true);
    bgImage.onerror = () => setImageHasLoaded(true);
    bgImage.src = '/thailand.jpg';
  }

  if (imageHasLoaded) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="icon" type="image/svg" href="/RR_Logo_Outlined.svg" />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
        </Head>
        <NavBar />
        <Greeting />
        <div
          className={styles.cover}
          style={{ backgroundImage: bgImage ? `url(${bgImage.src})` : '' }}
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
