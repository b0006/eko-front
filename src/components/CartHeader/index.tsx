import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import BadgeHeader from '../BadgeHeader';

import styles from './CartHeader.module.scss';

const CartHeader: React.FC<FontAwesomeIconProps> = ({ size, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <BadgeHeader>
          <FontAwesomeIcon {...rest} size={size} icon={faShoppingCart} />
        </BadgeHeader>
        <span className={styles.price}>900 руб</span>
      </div>
    </div>
  );
};

export default CartHeader;
