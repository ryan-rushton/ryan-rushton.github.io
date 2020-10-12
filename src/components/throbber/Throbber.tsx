import React, { FC } from 'react';
import styles from './Throbber.module.scss';

const Throbber: FC = () => (
  <div className={styles.throbber}>
    <img className={styles.image} src={'/RR_Logo_Outlined.svg'} alt="" />
  </div>
);

export default Throbber;
