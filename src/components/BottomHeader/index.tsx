import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import CategoryListHeader from '../CategoryListHeader';
import menuList from '../../route/menuList';
import { headerStore } from '../../mobx';

import './BottomHeader.scss';

const BottomHeader: React.FC = observer(() => {
  const { pathname } = useLocation();
  const { isFixed, toggleFixed } = headerStore;

  useEffect(() => {
    const onFixed = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      toggleFixed(winScroll >= 106);
    };

    onFixed();

    document.addEventListener('scroll', onFixed);
    return () => document.removeEventListener('scroll', onFixed);
  }, [toggleFixed]);

  return (
    <>
      {isFixed && <div className="header-offset" />}
      <div className={classnames('bottom-header', { 'bottom-header__fixed': isFixed })}>
        <div className="bottom-header__content">
          <CategoryListHeader />
          <div className="bottom-header__wrapper">
            <ul className="bottom-header__list">
              {menuList.map((item) => {
                let activeClassName = 'bottom-header__list-item_active';
                if (item.path === '/') {
                  activeClassName = pathname === '/' ? 'bottom-header__list-item_active' : '';
                }
                return (
                  <li key={item.path} className="bottom-header__list-item">
                    <NavLink className="bottom-header__list-link" activeClassName={activeClassName} to={item.path}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <a className="bottom-header__phone" href="tel:88005353535">
              <FontAwesomeIcon className="bottom-header__icon" icon={faPhone} />
              <span>8-800-555-35-35</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export default BottomHeader;
