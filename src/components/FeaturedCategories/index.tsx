import React from 'react';

import { FEATURED_CATEGORIES_LIST } from '../../mock/constants';
import Card from '../../components/Card';

import styles from './FeaturedCategories.module.scss';

const FeaturedCategories: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.top}>У нас покупают</span>
        <span className={styles.middle}>Самые любимые категории</span>
        <span className={styles.bottom}>Перейдите в каталог, чтобы увидеть больше крутых продуктов</span>
      </div>
      <div className={styles.blocks}>
        {FEATURED_CATEGORIES_LIST.map((item) => (
          <Card key={item.value} image={item.img} title={item.label} description={`${item.count} товаров`} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
