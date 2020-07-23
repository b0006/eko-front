import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import FixedCartModal from '../FixedCartModal';

import './FixedCart.scss';

const FixedCart: React.FC = () => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <div className="fixed-cart">
        <div role="button" onClick={() => setIsShowed(true)} className="fixed-cart__content">
          <FontAwesomeIcon icon={faShoppingBag} size="3x" />
          <span className="fixed-cart__content__count">2</span>
          <span className="fixed-cart__content__price">2999 руб</span>
        </div>
      </div>
      <FixedCartModal isShowed={isShowed} hide={() => setIsShowed(false)} />
    </>
  );
};

export default FixedCart;
