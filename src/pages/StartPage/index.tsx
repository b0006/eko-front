import React from 'react';

import MainStartBlock from '../../components/MainStartBlock';
import FeaturedCategoriesBlock from '../../components/FeaturedCategoriesBlock';
import FavoriteProductBlock from '../../components/FavoriteProductBlock';

const StartPage: React.FC = () => {
  return (
    <>
      <MainStartBlock />
      <FeaturedCategoriesBlock />
      <FavoriteProductBlock />
    </>
  );
};

export default StartPage;
