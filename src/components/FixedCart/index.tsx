import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import FixedCartModal from '../FixedCartModal';
import { cartStore } from '../../mobx';
import useModal from '../../hook/useModal';

import './FixedCart.scss';

const FixedCart: React.FC = observer(() => {
  const { cartList } = cartStore;
  const { isShowed, showModal, hideModal } = useModal();

  useEffect(() => {
    if (cartList.length <= 0) {
      hideModal();
    }
  }, [cartList.length, hideModal]);

  return (
    <>
      <div className="fixed-cart">
        <div role="button" onClick={showModal} className="fixed-cart__content">
          <FontAwesomeIcon icon={faShoppingBag} size="3x" />
          <span className="fixed-cart__content__count">2</span>
          <span className="fixed-cart__content__price">2999 руб</span>
        </div>
      </div>
      <FixedCartModal isShowed={isShowed} hide={hideModal} />
    </>
  );
});

export default FixedCart;
