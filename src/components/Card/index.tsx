import React from 'react';

import styles from './Card.module.scss';

interface IProps {
  image: string;
  title: string;
  description?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

const Card: React.FC<IProps> = ({ image, title, description, imageWidth = '225px', imageHeight = '225px' }) => {
  return (
    <div className={styles.item} style={{ height: imageHeight, width: imageWidth }}>
      <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />
      <div className={styles.bottom}>
        <span className={styles.label}>{title}</span>
        {description && <span className={styles.count}>{description}</span>}
      </div>
    </div>
  );
};

export default Card;
