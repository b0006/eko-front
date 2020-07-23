import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import menuList from '../../route/menuList';
import { CATEGORY_LIST } from '../../mock/constants';

import './SwitchTypeHeaderMobile.scss';

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
    <div className="switch-type-header-mobile">
      <div>
        <ul className="switch-type-header-mobile__type-list">
          <li
            className={classnames({
              'switch-type-header-mobile__type-list__item': true,
              'switch-type-header-mobile__type-list__item-active': currentType === 'menu',
            })}
            role="button"
            onClick={() => setCurrentType('menu')}>
            Меню
          </li>
          <li
            className={classnames({
              'switch-type-header-mobile__type-list__item': true,
              'switch-type-header-mobile__type-list__item-active': currentType === 'category',
            })}
            role="button"
            onClick={() => setCurrentType('category')}>
            Категории
          </li>
        </ul>
      </div>
      <ul className="switch-type-header-mobile__item-list">
        {currentList.map((item) => {
          let activeClassName = 'switch-type-header-mobile__item-list__item-active';
          if (item.path === '/') {
            activeClassName = pathname === '/' ? 'switch-type-header-mobile__item-list__item-active' : '';
          }
          return (
            <li className="switch-type-header-mobile__item-list__item" key={item.path}>
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
