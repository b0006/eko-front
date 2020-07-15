import React from 'react';

import styles from './TitleBlock.module.scss';

interface IProps {
  top: string;
  middle: string;
  bottom?: string;
}

const TitleBlock: React.FC<IProps> = ({ top, middle, bottom }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.top}>{top}</span>
      <span className={styles.middle}>{middle}</span>
      {bottom && <span className={styles.bottom}>{bottom}</span>}
    </div>
  );
};

export default TitleBlock;
