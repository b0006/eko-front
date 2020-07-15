import React from 'react';

import styles from './CategorySectionItem.module.scss';

interface IProps {
  title: string;
  image: string;
  description: string;
}

const CategorySectionItem: React.FC<IProps> = ({ title, image, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={{ backgroundImage: `url('${image}')` }} />
      </div>
    </div>
  );
};

export default CategorySectionItem;
