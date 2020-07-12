import React from 'react';

import BadgeHeader from '../BadgeHeader';

import { ReactComponent as CartIcon } from './assets/cart.svg';
import styles from './CartHeader.module.scss';

const CartHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <BadgeHeader>
          <CartIcon />
        </BadgeHeader>
        <span>900 руб</span>
      </div>
    </div>
  );
};

export default CartHeader;
