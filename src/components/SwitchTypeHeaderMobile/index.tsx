import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import menuList from '../../route/menuList';
import { CATEGORY_LIST } from '../../mock/constants';

import styles from './SwitchTypeHeaderMobile.module.scss';

interface IProps {
  hideSidebar: () => void;
}

const SwitchTypeHeaderMobile: React.FC<IProps> = ({ hideSidebar }) => {
  const [currentType, setCurrentType] = useState<'menu' | 'category'>('menu');

  const currentList = useMemo(() => {
    let list: { path: string; label: string }[] = [];
    if (currentType === 'menu') {
      list = menuList.map((item) => ({ path: item.path, label: item.label }));
    } else if (currentType === 'category') {
      list = CATEGORY_LIST.map((item) => ({ path: `/${item.value}`, label: item.label }));
    }
    return list;
  }, [currentType]);

  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.typeList}>
          <li
            className={classnames({ [styles.typeItem]: true, [styles.typeItemActive]: currentType === 'menu' })}
            role="button"
            onClick={() => setCurrentType('menu')}>
            Меню
          </li>
          <li
            className={classnames({ [styles.typeItem]: true, [styles.typeItemActive]: currentType === 'category' })}
            role="button"
            onClick={() => setCurrentType('category')}>
            Категории
          </li>
        </ul>
      </div>
      <ul>
        {currentList.map((item) => (
          <li key={item.path}>
            <Link onClick={hideSidebar} to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwitchTypeHeaderMobile;
