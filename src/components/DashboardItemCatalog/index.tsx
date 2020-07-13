import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DashboardItemCatalog.module.scss';

interface IProps {
  value: string;
  title: string;
  img: string;
}

const DashboardItemCatalog: React.FC<IProps> = ({ title, img, value }) => {
  return (
    <Link to={`/catalog/${value}`} className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={{ backgroundImage: `url('${img}')` }} />
      </div>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default DashboardItemCatalog;
