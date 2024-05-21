import styles from './Throbber.module.scss';

export function Throbber() {
  return (
    <div className={styles.throbber}>
      <img className={styles.image} src={'/RR_Logo_Outlined.svg'} alt="" />
    </div>
  );
}
