import React from 'react';

import { ReactComponent as CartIcon } from './assets/cart.svg';
import styles from './CartHeader.module.scss';

const CartHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CartIcon />
        <span>900 руб</span>
      </div>
    </div>
  );
};

export default CartHeader;
