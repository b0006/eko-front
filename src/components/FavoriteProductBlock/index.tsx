import React from 'react';

import CardProduct from '../CardProduct';
import TitleBlock from '../TitleBlock';

import styles from './FavoriteProductBlock.module.scss';

const FavoriteProductBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <TitleBlock
        top="Наши клиенты любят"
        middle="Самые любимые товары"
        bottom="Перейдите в каталог, чтобы увидеть больше крутых продуктов"
      />
      <div className={styles.list}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
};

export default FavoriteProductBlock;
