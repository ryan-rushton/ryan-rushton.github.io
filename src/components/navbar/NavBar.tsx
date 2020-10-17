import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';

const LOGO_HEIGHT = 48;
const LOGO_WIDTH = 70;

const NavBar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.flexItem}>
          <a href="/" className={`${styles.link} ${styles.homeLink}`}>
            <img
              className={styles.logo}
              src={'/RR_Logo_Outlined.svg'}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              alt=""
            />
          </a>
        </div>
        <div className={styles.flexItem}>
          <div className={styles.rightLinks}>
            <a href="https://github.com/rushton3179/personal-site" className={styles.link}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:ryan.rushton79@gmail.com" className={styles.link}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
