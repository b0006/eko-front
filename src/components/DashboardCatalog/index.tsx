import React from 'react';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../mobx';
import Card from '../Card';
import { CATEGORY_LIST } from '../../mock/constants';
import PlusImg from '../../assets/img/plus.png';

import './DashboardCatalog.scss';

const DashboardCatalog: React.FC = observer(() => {
  const { isAuth } = userStore;

  return (
    <div className="dashboard-catalog">
      {isAuth && (
        <Card isAddAction image={PlusImg} title="Добавить новую категорию" imageHeight="20rem" imageWidth="20rem" />
      )}
      {CATEGORY_LIST.map((item) => (
        <Card
          key={item.value}
          link={`/catalog/${item.value}`}
          image={item.img}
          title={item.label}
          imageHeight="20rem"
          imageWidth="20rem"
        />
      ))}
    </div>
  );
});

export default DashboardCatalog;
