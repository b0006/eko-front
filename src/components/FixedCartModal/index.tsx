import React from 'react';

import { IModalProps } from '../../layouts/Modal/interfaces';
import ModalLayout from '../../layouts/Modal';
import CartList from '../../components/CartList';

import styles from './FixedCartModal.module.scss';

const FixedCartModal: React.FC<IModalProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide} classNameModal={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.header}>Ваш заказ:</div>
        <CartList />
      </div>
    </ModalLayout>
  );
};

export default FixedCartModal;
