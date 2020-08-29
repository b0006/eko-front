import React from 'react';

import ProductCard from '../ProductCard';
import TitleBlock from '../../../common/components/TitleBlock';

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FavoriteProductBlock;
