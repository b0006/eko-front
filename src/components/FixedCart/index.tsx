import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { headerStore } from '../../mobx';

import styles from './FixedCart.module.scss';

const FixedCart: React.FC = observer(() => {
  const { isFixed } = headerStore;

  return (
    <div className={classnames({ [styles.wrapper]: true, [styles.offset]: isFixed })}>
      <FontAwesomeIcon icon={faShoppingBag} size="3x" />
      <span className={styles.count}>2</span>
      <span className={styles.price}>2999 руб</span>
    </div>
  );
});

export default FixedCart;
