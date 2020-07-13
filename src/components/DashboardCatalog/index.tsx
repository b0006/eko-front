import React from 'react';

import DashboardItemCatalog from '../DashboardItemCatalog';
import { CATEGORY_LIST } from '../../mock/constants';

import styles from './DashboardCatalog.module.scss';

const DashboardCatalog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {CATEGORY_LIST.map((item) => (
        <DashboardItemCatalog key={item.value} img={item.img} title={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default DashboardCatalog;
