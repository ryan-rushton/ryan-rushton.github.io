import { FaEnvelope, FaGithub } from 'react-icons/fa';
import styles from './NavBar.module.scss';

const LOGO_HEIGHT = 48;
const LOGO_WIDTH = 70;

export function NavBar() {
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
            <a
              href="https://github.com/rushton3179/personal-site"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ryan.rushton79@gmail.com"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
