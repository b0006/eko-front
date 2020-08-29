import React from 'react';

import MainStartBlock from '../../modules/common/components/MainStartBlock';
import FavoriteCategoryBlock from '../../modules/category/components/FavoriteCategoryBlock';
import FavoriteProductBlock from '../../modules/product/components/FavoriteProductBlock';

const StartPage: React.FC = () => {
  return (
    <>
      <MainStartBlock />
      <FavoriteCategoryBlock />
      <FavoriteProductBlock />
    </>
  );
};

export default StartPage;
