import React from 'react';

import { FEATURED_CATEGORIES_LIST } from '../../mock/constants';
import Card from '../../components/Card';
import { getCountLabel } from '../../utils/string';

import styles from './FeaturedCategoriesBlock.module.scss';

const FeaturedCategoriesBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.top}>У нас покупают</span>
        <span className={styles.middle}>Самые любимые категории</span>
        <span className={styles.bottom}>Перейдите в каталог, чтобы увидеть больше крутых продуктов</span>
      </div>
      <div className={styles.blocks}>
        {FEATURED_CATEGORIES_LIST.map((item) => (
          <Card
            key={item.value}
            image={item.img}
            title={item.label}
            link={`/catalog/${item.value}`}
            description={`${item.count} ${getCountLabel(item.count, 'товар', ['', 'ов', 'а'])}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategoriesBlock;
