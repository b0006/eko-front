import React from 'react';

import styles from './BadgeHeader.module.scss';

interface IProps {
  count?: number;
}

const BadgeHeader: React.FC<IProps> = ({ children, count = 0 }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <span className={styles.label}>{count}</span>
    </div>
  );
};

export default BadgeHeader;
