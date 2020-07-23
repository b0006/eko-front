import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import CategoryListHeader from '../CategoryListHeader';
import menuList from '../../route/menuList';

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
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <CategoryListHeader />
          <div className={styles.menuListWrapper}>
            <ul className={styles.menuList}>
              {menuList.map((item) => {
                let activeClassName = styles.active;
                if (item.path === '/') {
                  activeClassName = pathname === '/' ? styles.active : '';
                }
                return (
                  <MenuItem key={item.path} activeClassName={activeClassName} title={item.label} path={item.path} />
                );
              })}
            </ul>
            <a className={styles.phone} href="tel:88005353535">
              <FontAwesomeIcon icon={faPhone} />
              8-800-535-35-35
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
