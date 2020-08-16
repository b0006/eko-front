import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import menuList from '../../route/menuList';
import { categoryStore } from '../../mobx';

import './SwitchTypeHeaderMobile.scss';

interface IProps {
  hideSidebar: () => void;
}

const SwitchTypeHeaderMobile: React.FC<IProps> = observer(({ hideSidebar }) => {
  const { categoryList } = categoryStore;
  const { pathname } = useLocation();
  const [currentType, setCurrentType] = useState<'menu' | 'category'>('menu');

  const currentList = useMemo(() => {
    let list: { path: string; label: string }[] = [];
    if (currentType === 'menu') {
      list = menuList.map((item) => ({ path: item.path, label: item.label }));
    } else if (currentType === 'category') {
      list = categoryList.map((item) => ({ path: `/catalog/${item.id}`, label: item.title }));
    }
    return list;
  }, [categoryList, currentType]);

  return (
    <div className="switch-type-header-mobile">
      <div>
        <ul className="switch-type-header-mobile__types">
          <li
            className={classnames('switch-type-header-mobile__types-item', {
              'switch-type-header-mobile__types-item_active': currentType === 'menu',
            })}
            role="button"
            onClick={() => setCurrentType('menu')}>
            Меню
          </li>
          <li
            className={classnames('switch-type-header-mobile__types-item', {
              'switch-type-header-mobile__types-item_active': currentType === 'category',
            })}
            role="button"
            onClick={() => setCurrentType('category')}>
            Категории
          </li>
        </ul>
      </div>
      <ul className="switch-type-header-mobile__list">
        {currentList.map((item) => {
          let activeClassName = 'switch-type-header-mobile__list-link_active';
          if (item.path === '/') {
            activeClassName = pathname === '/' ? activeClassName : '';
          }
          return (
            <li className="switch-type-header-mobile__list-item" key={item.path}>
              <NavLink
                className="switch-type-header-mobile__list-link"
                activeClassName={activeClassName}
                onClick={hideSidebar}
                to={item.path}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default SwitchTypeHeaderMobile;
