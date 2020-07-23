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
      <div className="category-list-header__title">
        <div>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span>Категории</span>
        </div>
        <FontAwesomeIcon
          className={isOpened ? 'category-list-header__arrowDown' : 'category-list-header__arrowUp'}
          icon={faChevronDown}
        />
      </div>
      <ul className={classnames({ 'category-list-header__list': true, 'category-list-header__show': isOpened })}>
        {CATEGORY_LIST.map((item) => (
          <li className="category-list-header__list__item" key={item.value}>
            <NavLink
              onClick={() => setIsOpened(false)}
              activeClassName="category-list-header__list__item-active"
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
