import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as InstagramIcon } from '../../assets/img/instagram.svg';
import { ReactComponent as VkIcon } from '../../assets/img/vk.svg';
import MENU_LIST from '../../route/menuList';
import { CATEGORY_LIST } from '../../mock/constants';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__blocks">
          <ul>
            {MENU_LIST.map((menu) => (
              <li key={menu.path}>
                <NavLink to={menu.path}>{menu.label}</NavLink>
              </li>
            ))}
          </ul>
          <ul>
            {CATEGORY_LIST.map((category) => (
              <li key={category.value}>
                <NavLink to={`/${category.value}`}>{category.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="footer__icon" />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <VkIcon className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
