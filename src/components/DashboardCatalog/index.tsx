import React from 'react';
import { observer } from 'mobx-react-lite';

import { userStore, categoryStore, modalStore } from '../../mobx';
import Card from '../Card';
import Loader from '../Loader';
import PlusImg from '../../assets/img/plus.png';

import './DashboardCatalog.scss';

const DashboardCatalog: React.FC = observer(() => {
  const { isAuth } = userStore;
  const { showModal } = modalStore;
  const { categoryList, isLoading } = categoryStore;

  return (
    <div className="dashboard-catalog">
      {isLoading && <Loader />}
      {!isLoading && isAuth && (
        <div role="button" onClick={() => {
          console.log('show');
          showModal('categoryForm');
        }}>
          <Card
            id=""
            isAddAction
            image={PlusImg}
            title="Добавить новую категорию"
            imageHeight="20rem"
            imageWidth="20rem"
          />
        </div>
      )}
      {categoryList.map((category) => (
        <Card
          key={category.id}
          id={category.id}
          link={`/catelog/${category.id}`}
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
