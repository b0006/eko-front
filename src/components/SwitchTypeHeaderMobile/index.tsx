import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import menuList from '../../route/menuList';
import { CATEGORY_LIST } from '../../mock/constants';

import styles from './SwitchTypeHeaderMobile.module.scss';

interface IProps {
  hideSidebar: () => void;
}

const SwitchTypeHeaderMobile: React.FC<IProps> = ({ hideSidebar }) => {
  const { pathname } = useLocation();
  const [currentType, setCurrentType] = useState<'menu' | 'category'>('menu');

  const currentList = useMemo(() => {
    let list: { path: string; label: string }[] = [];
    if (currentType === 'menu') {
      list = menuList.map((item) => ({ path: item.path, label: item.label }));
    } else if (currentType === 'category') {
      list = CATEGORY_LIST.map((item) => ({ path: `/catalog/${item.value}`, label: item.label }));
    }
    return list;
  }, [currentType]);

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.typeList}>
          <li
            className={classnames({ [styles.typeItem]: true, [styles.typeItemActive]: currentType === 'menu' })}
            role="button"
            onClick={() => setCurrentType('menu')}>
            Меню
          </li>
          <li
            className={classnames({ [styles.typeItem]: true, [styles.typeItemActive]: currentType === 'category' })}
            role="button"
            onClick={() => setCurrentType('category')}>
            Категории
          </li>
        </ul>
      </div>
      <ul className={styles.itemList}>
        {currentList.map((item) => {
          let activeClassName = styles.itemActive;
          if (item.path === '/') {
            activeClassName = pathname === '/' ? styles.itemActive : '';
          }
          return (
            <li className={styles.item} key={item.path}>
              <NavLink activeClassName={activeClassName} onClick={hideSidebar} to={item.path}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwitchTypeHeaderMobile;
