import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import CategoryListHeader from '../CategoryListHeader';
import { headerStore } from '../../mobx';
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

const BottomHeader: React.FC = observer(() => {
  const { isFixed } = headerStore;

  const { pathname } = useLocation();
  return (
    <div className={classnames({ [styles.fixed]: isFixed, [styles.wrapper]: true })}>
      <div className={styles.content}>
        <CategoryListHeader />
        <div className={styles.menuListWrapper}>
          <ul className={styles.menuList}>
            {menuList.map((item) => {
              let activeClassName = styles.active;
              if (item.path === '/') {
                activeClassName = pathname === '/' ? styles.active : '';
              }
              return <MenuItem key={item.path} activeClassName={activeClassName} title={item.label} path={item.path} />;
            })}
          </ul>
          <a className={styles.phone} href="tel:88005353535">
            <FontAwesomeIcon icon={faPhone} />
            8-800-535-35-35
          </a>
        </div>
      </div>
    </div>
  );
});

export default BottomHeader;
