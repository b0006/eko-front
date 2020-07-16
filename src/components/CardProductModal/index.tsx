import React from 'react';

import ModalLayout from '../../layouts/Modal';
import ImageSlider from '../ImageSlider';

import styles from './CardProductModal.module.scss';

interface IProps {
  isShowed: boolean;
  hide: () => void;
}

const CardProductModal: React.FC<IProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide}>
      <div className={styles.wrapper}>
        <div className={styles.imageContent}>
          <ImageSlider list={['./categories/gifts.webp', './categories/paste.webp', './categories/sets.webp']} />
        </div>
        <div className={styles.descriptionContent}>price content</div>
      </div>
    </ModalLayout>
  );
};

export default CardProductModal;
