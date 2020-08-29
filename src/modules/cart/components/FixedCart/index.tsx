import React, { useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import FixedCartModal from '../FixedCartModal';
import { cartStore } from '../../../../helpers/store';
import useModal from '../../../../hook/useModal';

import './FixedCart.scss';

const FixedCart: React.FC = observer(() => {
  const { cartList, totalPrice } = cartStore;
  const { isShowed, showModal, hideModal } = useModal();

  const isCartEmpty = useMemo(() => cartList.length <= 0, [cartList]);

  useEffect(() => {
    if (isCartEmpty) {
      hideModal();
    }
  }, [isCartEmpty, hideModal]);

  return (
    <>
      <div className={classnames('fixed-cart', { 'fixed-cart_hide': isCartEmpty })}>
        <div role="button" onClick={showModal} className="fixed-cart__content">
          <FontAwesomeIcon icon={faShoppingBag} size="3x" />
          <span className="fixed-cart__count">{cartList.length}</span>
          <span className="fixed-cart__price">{totalPrice} руб</span>
        </div>
      </div>
      <FixedCartModal isShowed={isShowed} hide={hideModal} />
    </>
  );
});

export default FixedCart;
