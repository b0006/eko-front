import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_LIST } from '../../mock/constants';

import styles from './CategoryListHeader.module.scss';

const CategoryListHeader: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.wrapper} onMouseEnter={() => setIsOpened(true)} onMouseLeave={() => setIsOpened(false)}>
      <div className={styles.title}>
        <div>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span>Категории</span>
        </div>
        <FontAwesomeIcon className={isOpened ? styles.arrowDown : styles.arrowUp} icon={faChevronDown} />
      </div>
      <ul className={classnames({ [styles.list]: true, [styles.show]: isOpened, [styles.hide]: !isOpened })}>
        {CATEGORY_LIST.map((item) => (
          <li className={styles.listItem} key={item.value}>
            <NavLink
              onClick={() => setIsOpened(false)}
              activeClassName={styles.listItemActive}
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
