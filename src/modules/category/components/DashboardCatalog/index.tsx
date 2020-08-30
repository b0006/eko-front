import React from 'react';
import { observer } from 'mobx-react-lite';

import { userStore, categoryStore } from '../../../../helpers/store';
import CategoryCard from '../CategoryCard';
import Loader from '../../../common/components/Loader';
import PlusImg from '../../../../assets/img/plus.png';

import './DashboardCatalog.scss';

const DashboardCatalog: React.FC = observer(() => {
  const { isAuth } = userStore;
  const { categoryList, isLoading } = categoryStore;

  return (
    <div className="dashboard-catalog">
      {isLoading && <Loader />}
      {!isLoading && isAuth && (
        <CategoryCard
          id=""
          isAddAction
          image={PlusImg}
          title="Добавить новую категорию"
          imageHeight="20rem"
          imageWidth="20rem"
        />
      )}
      {categoryList.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          link={`/catalog/${category.value}`}
          image={category.imageList[0]}
          title={category.title}
          imageHeight="20rem"
          imageWidth="20rem"
        />
      ))}
    </div>
  );
});

export default DashboardCatalog;
