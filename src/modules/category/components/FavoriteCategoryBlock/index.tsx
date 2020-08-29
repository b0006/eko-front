import React from 'react';

import { FEATURED_CATEGORIES_LIST } from '../../../../mock/constants';
import CategoryCard from '../CategoryCard';
import TitleBlock from '../../../common/components/TitleBlock';
import { getCountLabel } from '../../../../utils/string';

import './FavoriteCategoryBlock.scss';

const FavoriteCategoryBlock: React.FC = () => {
  return (
    <section className="featured-categories-block">
      <TitleBlock
        top="У нас покупают"
        middle="Самые любимые категории"
        bottom="Перейдите в каталог, чтобы увидеть больше крутых продуктов"
      />
      <div className="featured-categories-block__blocks">
        {FEATURED_CATEGORIES_LIST.map((item) => (
          <CategoryCard
            id={item.value}
            key={item.value}
            image={item.img}
            title={item.label}
            link={`/catalog/${item.value}`}
            description={`${item.count} ${getCountLabel(item.count, 'товар', ['', 'ов', 'а'])}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoriteCategoryBlock;
