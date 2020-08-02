import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/logo.png';

import './Logo.scss';

interface IProps {
  className?: string;
}

const Logo: React.FC<IProps> = ({ className }) => (
  <Link to="/" className={classnames('logo', className)}>
    <img className="logo__img" src={LogoImg} alt="logo" />
    <span className="logo__title">EcoBoom</span>
  </Link>
);

export default Logo;
