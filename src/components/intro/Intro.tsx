import styles from './Intro.module.scss';

const goToAboutMe = (): void =>
  document?.getElementById('rr-body')?.scrollIntoView({ behavior: 'smooth' });

export function Intro() {
  return (
    <div className={styles.container}>
      <div className={`rr-content ${styles.intro}`}>
        <div className={styles.content}>
          <img className={styles.portrait} src={'/me_cropped.png'} alt="" />
          <div className={styles.textBlock}>
            <div className={styles.firstLine}>
              {`Hi, I'm `}
              <span
                className="rr-site-link"
                role="button"
                tabIndex={0}
                onClick={goToAboutMe}
                onKeyDown={(event) => {
                  if (event.key === ' ' || event.key === 'Enter') {
                    goToAboutMe();
                  }
                }}
              >
                Ryan
              </span>
              {`,`}
            </div>
            <div className={styles.secondLine}>{'a fullstack software engineer.'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
