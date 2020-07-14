import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { CATEGORY_LIST } from '../../mock/constants';

const CategoryListPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const title = useMemo(() => CATEGORY_LIST.find((c) => c.value === category)?.label, [category]);

  return (
    <section>
      <h3>{title}</h3>
    </section>
  );
};

export default CategoryListPage;
