import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './SidebarMenuHeader.module.scss';

const SidebarMenuHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuButton}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        <span className={styles.label}>Меню</span>
      </div>
    </div>
  );
};

export default SidebarMenuHeader;
