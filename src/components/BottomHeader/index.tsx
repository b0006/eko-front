import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './BottomHeader.module.scss';

const BottomHeader: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span>Категории</span>
        </div>
        <ul className={styles.menuList}>
          <li>
            <NavLink activeClassName={pathname === '/' ? styles.active : ''} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/about">
              О нас
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
