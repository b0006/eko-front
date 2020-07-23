import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import FixedCartModal from '../FixedCartModal';

import styles from './FixedCart.module.scss';

const FixedCart: React.FC = () => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div role="button" onClick={() => setIsShowed(true)} className={styles.content}>
          <FontAwesomeIcon icon={faShoppingBag} size="3x" />
          <span className={styles.count}>2</span>
          <span className={styles.price}>2999 руб</span>
        </div>
      </div>
      <FixedCartModal isShowed={isShowed} hide={() => setIsShowed(false)} />
    </>
  );
};

export default FixedCart;
