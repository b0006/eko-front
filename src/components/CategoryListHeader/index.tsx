import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './CategoryListHeader.module.scss';

const CATEGORY_LIST = [
  { label: 'Фрукты', value: 'fruits' },
  { label: 'Подарочные наборы', value: 'gifts' },
];

const CategoryListHeader: React.FC = () => {
  const { pathname } = useLocation();
  const isMainPage = useMemo(() => pathname === '/', [pathname]);

  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => setIsOpened(isMainPage), [isMainPage]);

  const onMouseEnter = () => !isMainPage && setIsOpened(true);
  const onMouseLeave = () => !isMainPage && setIsOpened(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span>Категории</span>
        </div>
        <FontAwesomeIcon className={isOpened ? styles.rotateDown : styles.rotateUp} icon={faChevronDown} />
      </div>
      <ul className={classnames({ [styles.list]: true, [styles.show]: isOpened, [styles.hide]: !isOpened })}>
        {CATEGORY_LIST.map((item) => (
          <li key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListHeader;
