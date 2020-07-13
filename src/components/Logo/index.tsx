import React from 'react';
import classnames from 'classnames';

import LogoImg from '../../assets/img/logo.png';

import styles from './Logo.module.scss';

interface IProps {
  className?: string;
}

const Logo: React.FC<IProps> = ({ className }) => (
  <div className={classnames(styles.wrapper, className)}>
    <img src={LogoImg} alt="logo" />
    <span>ЭкоСнеки</span>
  </div>
);

export default Logo;
