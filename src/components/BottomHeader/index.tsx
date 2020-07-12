import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './BottomHeader.module.scss';

const BottomHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        <span>Категории</span>
      </div>
      <div>Menu hotizohtas list</div>
    </div>
  );
};

export default BottomHeader;
