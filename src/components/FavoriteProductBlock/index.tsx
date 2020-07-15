import React from 'react';

import CardProduct from '../CardProduct';

import styles from './FavoriteProductBlock.module.scss';

const FavoriteProductBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <CardProduct />
    </section>
  );
};

export default FavoriteProductBlock;
