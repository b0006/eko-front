import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/logo.png';

import styles from './Logo.module.scss';

interface IProps {
  className?: string;
}

const Logo: React.FC<IProps> = ({ className }) => (
  <Link to="/" className={classnames(styles.wrapper, className)}>
    <img src={LogoImg} alt="logo" />
    <span>ЭкоСнеки</span>
  </Link>
);

export default Logo;
