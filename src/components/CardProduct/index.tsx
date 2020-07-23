import React from 'react';

import CardProductModal from '../CardProductModal';
import useModal from '../../hook/useModal';

import './CardProduct.scss';

interface IProps {
  imageHeight?: string;
  imageWidth?: string;
}

const CardProduct: React.FC<IProps> = ({ imageHeight = '16rem', imageWidth = '16rem' }) => {
  const { isShowed, showModal, hideModal } = useModal();
  return (
    <>
      <div className="card-product" role="button" onClick={showModal}>
        <div className="card-product__preview-content">
          <div
            className="card-product__preview-content__img-wrapper"
            style={{ height: imageHeight, width: imageWidth }}>
            <div
              className="card-product__preview-content__img-wrapper__img"
              style={{ backgroundImage: 'url("./categories/gifts.webp")' }}
            />
          </div>
          <div className="card-product__hover-content">
            <span className="card-product__hover-content__title">Ананас</span>
            <span className="card-product__hover-content__category">Фрипсы</span>
            <span className="card-product__hover-content__price">130 руб</span>
            <div className="card-product__hover-content__description">
              Набор для детей без сахара и разными вариантами наполнения
            </div>
            <input className="card-product__hover-content__button" type="button" value="Купить" />
          </div>
        </div>
      </div>
      <CardProductModal isShowed={isShowed} hide={hideModal} />
    </>
  );
};

export default CardProduct;
