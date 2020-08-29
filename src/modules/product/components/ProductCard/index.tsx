import React from 'react';

import ProductCardModal from '../ProductCardModal';
import useModal from '../../../../hook/useModal';

import './ProductCard.scss';

interface IProps {
  imageHeight?: string;
  imageWidth?: string;
}

const ProductCard: React.FC<IProps> = ({ imageHeight = '16rem', imageWidth = '16rem' }) => {
  const { isShowed, showModal, hideModal } = useModal();
  return (
    <>
      <div className="card-product" role="button" onClick={showModal}>
        <div className="card-product__preview-content">
          <figure className="card-product__figure" style={{ height: imageHeight, width: imageWidth }}>
            <img className="card-product__figure-img" src="./categories/gifts.webp" alt="product" />
          </figure>
          <div className="card-product__hover-content">
            <span className="card-product__title">Ананас</span>
            <span className="card-product__category">Фрипсы</span>
            <span className="card-product__price">130 руб</span>
            <div className="card-product__description">Набор для детей без сахара и разными вариантами наполнения</div>
            <input className="card-product__button" type="button" value="Купить" />
          </div>
        </div>
      </div>
      <ProductCardModal isShowed={isShowed} hide={hideModal} />
    </>
  );
};

export default ProductCard;
