import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_LIST } from '../../mock/constants';

import styles from './CategoryListHeader.module.scss';

const CategoryListHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span>Категории</span>
        </div>
        <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronDown} />
      </div>
      <ul className={styles.list}>
        {CATEGORY_LIST.map((item) => (
          <li className={styles.listItem} key={item.value}>
            <NavLink activeClassName={styles.listItemActive} to={`/catalog/${item.value}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListHeader;
