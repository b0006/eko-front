import React from 'react';

import { CART_LIST } from '../../mock/constants';

import styles from './CartList.module.scss';

const CartList: React.FC = () => {
  return (
    <div className={styles.list}>
      {CART_LIST.map((item) => (
        <div key={item.id} className={styles.item}>
          <img className={styles.image} src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
