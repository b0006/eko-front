import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { categoryStore } from '../../mobx';
import Loader from '../Loader';

import './CategoryListHeader.scss';

const CategoryListHeader: React.FC = observer(() => {
  const [isOpened, setIsOpened] = useState(false);
  const { categoryList, isLoading } = categoryStore;

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
      {isLoading && <Loader className={classnames('category-list-header__loader', { 'animation-show': isOpened })} />}
      {!isLoading && (
        <ul className={classnames('category-list-header__list', { 'animation-show': isOpened })}>
          {categoryList.map((item) => (
            <li className="category-list-header__list-item" key={item.id}>
              <NavLink
                onClick={() => setIsOpened(false)}
                className="category-list-header__list-link"
                activeClassName="category-list-header__list-link_active"
                to={`/catalog/${item.id}`}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default CategoryListHeader;
