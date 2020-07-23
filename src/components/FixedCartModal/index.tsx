import React from 'react';

import { IModalProps } from '../../layouts/Modal/interfaces';
import ModalLayout from '../../layouts/Modal';
import CartList from '../../components/CartList';

import './FixedCartModal.scss';

const FixedCartModal: React.FC<IModalProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide} classNameModal="fixed-cart-modal__layout">
      <div className="fixed-cart-modal__content">
        <div className="fixed-cart-modal__header">Ваш заказ:</div>
        <CartList />
      </div>
    </ModalLayout>
  );
};

export default FixedCartModal;
