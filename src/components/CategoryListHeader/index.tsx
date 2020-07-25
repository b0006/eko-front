import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_LIST } from '../../mock/constants';

import './CategoryListHeader.scss';

const CategoryListHeader: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="category-list-header"
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}>
      <div className="category-list-header__header">
        <div>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span className="category-list-header__header-title">Категории</span>
        </div>
        <FontAwesomeIcon
          className={isOpened ? 'category-list-header__arrow' : 'category-list-header__arrow_up'}
          icon={faChevronDown}
        />
      </div>
      <ul className={classnames('category-list-header__list', { 'animation-show': isOpened })}>
        {CATEGORY_LIST.map((item) => (
          <li className="category-list-header__list-item" key={item.value}>
            <NavLink
              onClick={() => setIsOpened(false)}
              className="category-list-header__list-link"
              activeClassName="category-list-header__list-link_active"
              to={`/catalog/${item.value}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListHeader;
