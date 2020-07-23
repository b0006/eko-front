import React from 'react';

import CardProduct from '../CardProduct';
import TitleBlock from '../TitleBlock';

import './FavoriteProductBlock.scss';

const FavoriteProductBlock: React.FC = () => {
  return (
    <section className="favorite-product-block">
      <TitleBlock
        top="Наши клиенты любят"
        middle="Самые любимые товары"
        bottom="Перейдите в каталог, чтобы увидеть больше крутых продуктов"
      />
      <div className="favorite-product-block__list">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
};

export default FavoriteProductBlock;
