import React from 'react';

import LogoImg from '../../assets/img/logo.png';

import styles from './Logo.module.scss';

const Logo: React.FC = () => (
  <div className={styles.wrapper}>
    <img src={LogoImg} alt="logo" />
    <span>ЭкоСнеки</span>
  </div>
);

export default Logo;
