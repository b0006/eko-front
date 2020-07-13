import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './CategoryListHeader.module.scss';

const CATEGORY_LIST = [
  { label: 'Сеты', value: 'sets' },
  { label: 'Пастила', value: 'paste' },
  { label: 'Фрипсы', value: 'frips' },
  { label: 'Орехи и вяленые ягоды', value: 'nutsAndDriedBerries' },
  { label: 'Фрукты', value: 'fruits' },
  { label: 'Подарочные наборы', value: 'gifts' },
];

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
          <li key={item.value}>
            <Link to={`/catalog/${item.value}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListHeader;
