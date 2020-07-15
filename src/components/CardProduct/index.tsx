import React, { useState } from 'react';

import CardProductModal from '../CardProductModal';

import styles from './CardProduct.module.scss';

interface IProps {
  imageHeight?: string;
  imageWidth?: string;
}

const CardProduct: React.FC<IProps> = ({ imageHeight = '16rem', imageWidth = '16rem' }) => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.previewContent}>
          <div className={styles.imageWrapper} style={{ height: imageHeight, width: imageWidth }}>
            <div className={styles.img} style={{ backgroundImage: 'url("./categories/gifts.webp")' }} />
          </div>
          <div className={styles.hoverContent}>
            <span className={styles.title}>Ананас</span>
            <span className={styles.category}>Фрипсы</span>
            <span className={styles.price}>130 руб</span>
            <div className={styles.description}>Набор для детей без сахара и разными вариантами наполнения</div>
            <input onClick={() => setIsShowed(true)} className={styles.button} type="button" value="Купить" />
          </div>
        </div>
      </div>
      <CardProductModal isShowed={isShowed} hide={() => setIsShowed(false)} />
    </>
  );
};

export default CardProduct;
