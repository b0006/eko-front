import React from 'react';
import { observer } from 'mobx-react-lite';

import { IModalProps } from '../../../../layouts/Modal/interfaces';
import ModalLayout from '../../../../layouts/Modal';
import CartList from '../CartList';
import CartForm from '../CartForm';
import { cartStore } from '../../../../helpers/store';

import './FixedCartModal.scss';

const FixedCartModal: React.FC<IModalProps> = observer(({ isShowed, hide }) => {
  const { totalPrice } = cartStore;
  return (
    <ModalLayout isShowed={isShowed} hide={hide} classNameModal="fixed-cart-modal__layout">
      <div className="fixed-cart-modal__content">
        <div className="fixed-cart-modal__header">Ваш заказ:</div>
        <CartList />
        <div className="fixed-cart-modal__total-price">
          {totalPrice < 650 && <span>Минимальный заказ: 650 руб</span>}
          <span>Сумма: {totalPrice} руб</span>
        </div>
        <CartForm />
      </div>
    </ModalLayout>
  );
});

export default FixedCartModal;
