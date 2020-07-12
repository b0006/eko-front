import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import CategoryListHeader from '../CategoryListHeader';

import styles from './BottomHeader.module.scss';

const MenuItem: React.FC<{ title: string; path: string; activeClassName?: string }> = ({
  title,
  path,
  activeClassName,
}) => (
  <li>
    <NavLink activeClassName={activeClassName} to={path}>
      {title}
    </NavLink>
  </li>
);

const BottomHeader: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CategoryListHeader />
        <div className={styles.menuListWrapper}>
          <ul className={styles.menuList}>
            <MenuItem activeClassName={pathname === '/' ? styles.active : ''} title="Главная" path="/" />
            <MenuItem activeClassName={styles.active} title="Отзывы" path="/reviews" />
            <MenuItem activeClassName={styles.active} title="Контакты" path="/contacts" />
          </ul>
          <a className={styles.phone} href="tel:88006002155">
            <FontAwesomeIcon icon={faPhone} />
            8-800-600-21-55
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
