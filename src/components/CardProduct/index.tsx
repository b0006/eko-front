import React from 'react';

import styles from './CardProduct.module.scss';

interface IProps {
  imageHeight?: string;
  imageWidth?: string;
}

const CardProduct: React.FC<IProps> = ({ imageHeight = '16rem', imageWidth = '16rem' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.previewContent}>
        <div className={styles.imageWrapper} style={{ height: imageHeight, width: imageWidth }}>
          <div className={styles.img} style={{ backgroundImage: 'url("./categories/gifts.webp")' }} />
        </div>
        <div className={styles.hoverContent}>
          <span className={styles.title}>Ананас</span>
          <span className={styles.category}>Фрипсы</span>
          <span className={styles.price}>130 руб</span>
          <div className={styles.description}>
            Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc
            neque torquent sem a leo. Dictumst
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
