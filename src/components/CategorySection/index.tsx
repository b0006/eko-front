import React from 'react';

import CategorySectionItem from '../CategorySectionItem';
import { CATEGORY_LIST } from '../../mock/constants';

import styles from './CategorySection.module.scss';

const CategorySection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      {CATEGORY_LIST.map((item) => (
        <CategorySectionItem key={item.value} title={item.label} image={item.img} description={item.description} />
      ))}
    </section>
  );
};

export default CategorySection;
