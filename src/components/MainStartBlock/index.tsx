import React from 'react';

import styles from './MainStartBlock.module.scss';

const MainStartBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient}>
        <div className={styles.content}>
          <h1>ЭкоСнеки</h1>
        </div>
      </div>
    </div>
  );
};

export default MainStartBlock;
