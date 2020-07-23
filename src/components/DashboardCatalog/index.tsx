import React from 'react';

import Card from '../Card';
import { CATEGORY_LIST } from '../../mock/constants';

import './DashboardCatalog.scss';

const DashboardCatalog: React.FC = () => {
  return (
    <div className="dashboard-catalog">
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
};

export default DashboardCatalog;
