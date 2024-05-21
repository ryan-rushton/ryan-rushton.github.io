import Head from 'next/head';
import { useState } from 'react';
import { Intro } from '../components/intro/Intro';
import { NavBar } from '../components/navbar/NavBar';
import { Throbber } from '../components/throbber/Throbber';
import config from '../config';
import styles from './index.module.scss';

function App() {
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
        <Intro />
      </>
    );
  }

  return (
    <div className={styles.cover}>
      <Throbber />
    </div>
  );
}

export default App;
