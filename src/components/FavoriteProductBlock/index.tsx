import React from 'react';

import CardProduct from '../CardProduct';

import styles from './FavoriteProductBlock.module.scss';

const FavoriteProductBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
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
