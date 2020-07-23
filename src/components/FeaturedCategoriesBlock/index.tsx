import React from 'react';

import { FEATURED_CATEGORIES_LIST } from '../../mock/constants';
import Card from '../Card';
import TitleBlock from '../TitleBlock';
import { getCountLabel } from '../../utils/string';

import './FeaturedCategoriesBlock.scss';

const FeaturedCategoriesBlock: React.FC = () => {
  return (
    <section className="featured-categories-block">
      <TitleBlock
        top="У нас покупают"
        middle="Самые любимые категории"
        bottom="Перейдите в каталог, чтобы увидеть больше крутых продуктов"
      />
      <div className="featured-categories-block__blocks">
        {FEATURED_CATEGORIES_LIST.map((item) => (
          <Card
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

export default FeaturedCategoriesBlock;
