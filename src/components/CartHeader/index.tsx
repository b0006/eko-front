import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import BadgeHeader from '../BadgeHeader';

import styles from './CartHeader.module.scss';

const CartHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <BadgeHeader>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </BadgeHeader>
        <span>900 руб</span>
      </div>
    </div>
  );
};

export default CartHeader;
