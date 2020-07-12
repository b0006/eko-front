import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
        <ul className={styles.menuList}>
          <MenuItem activeClassName={pathname === '/' ? styles.active : ''} title="Главная" path="/" />
          <MenuItem activeClassName={styles.active} title="Отзывы" path="/reviews" />
          <MenuItem activeClassName={styles.active} title="Контакты" path="/contacts" />
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
