import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import CategoryListHeader from '../CategoryListHeader';
import menuList from '../../route/menuList';

import './BottomHeader.scss';

const MenuItem: React.FC<{ title: string; path: string; className?: string; activeClassName?: string }> = ({
  title,
  path,
  className,
  activeClassName,
}) => (
  <li className={className}>
    <NavLink activeClassName={activeClassName} to={path}>
      {title}
    </NavLink>
  </li>
);

const BottomHeader: React.FC = () => {
  const { pathname } = useLocation();
  const [isFixedTop, setIsFixedTop] = useState(false);

  useEffect(() => {
    const onFixed = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setIsFixedTop(winScroll >= 106);
    };

    onFixed();

    document.addEventListener('scroll', onFixed);
    return () => document.removeEventListener('scroll', onFixed);
  }, []);

  return (
    <>
      {isFixedTop && <div className="bottom-header__offset" />}
      <div className={classnames({ 'bottom-header': true, 'bottom-header__fixed': isFixedTop })}>
        <div className="bottom-header__content">
          <CategoryListHeader />
          <div className="bottom-header__content__menu-list">
            <ul className="bottom-header__content__menu-list__wrapper">
              {menuList.map((item) => {
                let activeClassName = 'bottom-header__content__menu-list__item_active';
                if (item.path === '/') {
                  activeClassName = pathname === '/' ? 'bottom-header__content__menu-list__item_active' : '';
                }
                return (
                  <MenuItem
                    className="bottom-header__content__menu-list__item"
                    key={item.path}
                    activeClassName={activeClassName}
                    title={item.label}
                    path={item.path}
                  />
                );
              })}
            </ul>
            <a className="bottom-header__content__phone" href="tel:88005353535">
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
